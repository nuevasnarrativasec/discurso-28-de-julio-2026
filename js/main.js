// ─────────────────────────────────────────────────────────────
//  LÓGICA — reproductor, timeline, filtros y módulos de sección
//  Depende de DATA (definido en datos-discurso.js, cargado antes)
// ─────────────────────────────────────────────────────────────

// ─────────────────────────────────────────────────────────────
//  ESTADO GLOBAL
// ─────────────────────────────────────────────────────────────
const audio       = document.getElementById('audio-el');
let audioLoaded   = true;
let selectedBlock = null;   // bloque con panel abierto
let playingBlock  = null;   // bloque que está sonando ahora
let seekTargetSec = null;   // destino de un salto en curso (mientras el audio bufferea)
let pendingPlay   = false;  // se pidió reproducir y se espera a que haya buffer suficiente
let bufferTimeout = null;   // timeout de seguridad para arrancar aunque el buffer tarde
let followBlock   = null;   // bloque cuya reproducción inició el panel (los bloques tienen
                            // huecos/solapes, así que no basta con la posición exacta)
const BUFFER_TIMEOUT_MS = 7000;  // margen máx. de espera antes de forzar la reproducción
const SPEEDS      = [0.75, 1, 1.25, 1.5, 2];
let speedIdx      = 1;
const DURACION    = DATA.meta.duracion_total_seg;
const TICKS       = 7;
const LABEL_W_PX  = 148; // debe coincidir con --label-w


// ─────────────────────────────────────────────────────────────
//  UTILIDADES
// ─────────────────────────────────────────────────────────────
function fmt(sec) {
  const t = Math.floor(sec);
  const h = Math.floor(t / 3600);
  const m = Math.floor((t % 3600) / 60);
  const s = t % 60;
  if (h > 0) return `${h}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  return `${m}:${String(s).padStart(2,'0')}`;
}

function pct(seg) { return (seg / DURACION * 100).toFixed(4) + '%'; }

function bloqueEnTiempo(t) {
  return DATA.bloques.find(b => t >= b.inicio && t < b.fin) || null;
}

// ─────────────────────────────────────────────────────────────
//  AUDIO — precargado + player sticky
// ─────────────────────────────────────────────────────────────
document.getElementById('btn-play-block').classList.remove('no-audio');
document.getElementById('axis-hint').classList.add('visible');

// El player permanece únicamente dentro de la sección "Timeline interactivo"
// (se eliminó el comportamiento sticky en el bottom de la landing).

// ─────────────────────────────────────────────────────────────
//  CONTROLES DEL PLAYER
// ─────────────────────────────────────────────────────────────
function togglePlay() {
  if (!audioLoaded) return;
  cancelPendingPlay();            // control manual anula un salto pendiente
  audio.paused ? audio.play() : audio.pause();
}

function seekTo(sec, block = null) {
  if (!audioLoaded) return;
  const dest = Math.max(0, Math.min(sec, audio.duration || DURACION));
  seekTargetSec = dest;           // recordar la intención hasta que termine el seek/buffer
  followBlock   = block;          // bloque asociado (null = salto libre: scrubber/eje/teclas)
  audio.currentTime = dest;
  requestPlay();                  // reproducir cuando haya buffer (con timeout de seguridad)
}

// ── Gate de reproducción ──────────────────────────────────────
// Al saltar a una zona no descargada, esperamos a tener datos suficientes
// antes de sonar; así se evita el arranque mudo o entrecortado. Un timeout
// de seguridad arranca igual si la descarga tarda demasiado.
function audioListo() {
  // HAVE_FUTURE_DATA (3) o más, y sin un seek en curso
  return audio.readyState >= 3 && !audio.seeking;
}

function requestPlay() {
  pendingPlay = true;
  clearTimeout(bufferTimeout);
  bufferTimeout = setTimeout(forcePlay, BUFFER_TIMEOUT_MS);
  updateBtnPlayLabel();           // mostrar "Cargando…" de inmediato
  tryStartPlayback();             // por si ya hay buffer suficiente
}

function tryStartPlayback() {
  if (!pendingPlay || !audioListo()) return;
  pendingPlay = false;
  clearTimeout(bufferTimeout);
  audio.play();
}

function forcePlay() {
  if (!pendingPlay) return;
  pendingPlay = false;
  audio.play();                   // arrancar aunque el buffer no sea ideal
}

function cancelPendingPlay() {
  pendingPlay = false;
  clearTimeout(bufferTimeout);
}

function seekRelative(delta) { seekTo((audio.currentTime || 0) + delta); }

function cycleSpeed() {
  speedIdx = (speedIdx + 1) % SPEEDS.length;
  audio.playbackRate = SPEEDS[speedIdx];
  document.getElementById('btn-speed').textContent = SPEEDS[speedIdx] + '×';
}

// Volumen
document.getElementById('player-vol').addEventListener('input', function() {
  audio.volume = parseFloat(this.value);
});

// Scrubber click / drag
const scrubberWrap = document.getElementById('scrubber-wrap');
let scrubbing = false;

function scrubFromEvent(e) {
  const rect = scrubberWrap.getBoundingClientRect();
  const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
  const dur = audio.duration || DURACION;
  seekTo(ratio * dur);
}
scrubberWrap.addEventListener('mousedown', e => { scrubbing = true; scrubFromEvent(e); });
document.addEventListener('mousemove', e => { if (scrubbing) scrubFromEvent(e); });
document.addEventListener('mouseup',   () => { scrubbing = false; });

// Clic en el eje de tiempo → seek
document.getElementById('time-axis').addEventListener('click', function(e) {
  if (!audioLoaded) return;
  const rect = this.getBoundingClientRect();
  const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
  seekTo(ratio * (audio.duration || DURACION));
});

// ─────────────────────────────────────────────────────────────
//  ACTUALIZACIÓN EN TIEMPO REAL (timeupdate)
// ─────────────────────────────────────────────────────────────
const playhead     = document.getElementById('playhead');
const playheadTime = document.getElementById('playhead-time');
const scrubFill    = document.getElementById('scrubber-fill');
const playerCur    = document.getElementById('player-current');
const playerTema   = document.getElementById('player-tema-name');

audio.addEventListener('timeupdate', () => {
  const t = audio.currentTime;
  const dur = audio.duration || DURACION;

  // Scrubber fill
  const ratio = t / dur;
  scrubFill.style.width = (ratio * 100).toFixed(3) + '%';

  // Tiempo en el player
  playerCur.textContent = fmt(t);

  // Posición del cabezal en el Gantt
  const rowsEl = document.getElementById('timeline-rows');
  const trackW = rowsEl.offsetWidth - LABEL_W_PX;
  const headPx = LABEL_W_PX + trackW * ratio;
  playhead.style.left = headPx + 'px';
  playhead.style.display = 'block';
  playheadTime.textContent = fmt(t);

  // Ajustar tooltip del cabezal para que no se salga por la derecha
  playheadTime.style.left = ratio > 0.85 ? 'auto' : '4px';
  playheadTime.style.right = ratio > 0.85 ? '4px' : 'auto';

  // Bloque actual
  const bloque = bloqueEnTiempo(t);
  if (bloque) {
    playerTema.textContent = bloque.tema;
    if (bloque !== playingBlock) {
      // Quitar clase playing del bloque anterior
      if (playingBlock) {
        document.querySelectorAll(`.tema-block[data-id="${playingBlock.id}"]`)
          .forEach(el => el.classList.remove('playing'));
      }
      // Poner clase playing en el nuevo bloque
      document.querySelectorAll(`.tema-block[data-id="${bloque.id}"]`)
        .forEach(el => el.classList.add('playing'));
      playingBlock = bloque;

      // Auto-abrir panel si no hay ninguno seleccionado manualmente
      if (!selectedBlock) abrirDetalle(bloque, null, false);
      updateBtnPlayLabel();
    }
  } else {
    if (playingBlock) {
      document.querySelectorAll(`.tema-block[data-id="${playingBlock.id}"]`)
        .forEach(el => el.classList.remove('playing'));
      playingBlock = null;
    }
    playerTema.textContent = '—';
  }
});

audio.addEventListener('loadedmetadata', () => {
  document.getElementById('player-total').textContent = fmt(audio.duration);
});

// Buffering / seek: al saltar a zonas aún no descargadas, el botón se
// mantiene coherente. seekTargetSec se limpia cuando el audio ya llegó.
audio.addEventListener('seeking', updateBtnPlayLabel);
audio.addEventListener('seeked',  () => { seekTargetSec = null; tryStartPlayback(); updateBtnPlayLabel(); });
audio.addEventListener('waiting', updateBtnPlayLabel);
audio.addEventListener('playing', () => { seekTargetSec = null; updateBtnPlayLabel(); });
audio.addEventListener('canplay',        () => { tryStartPlayback(); updateBtnPlayLabel(); });
audio.addEventListener('canplaythrough', () => { tryStartPlayback(); updateBtnPlayLabel(); });

audio.addEventListener('play',  () => {
  document.getElementById('icon-play').style.display  = 'none';
  document.getElementById('icon-pause').style.display = '';
  updateBtnPlayLabel();
});
audio.addEventListener('pause', () => {
  document.getElementById('icon-play').style.display  = '';
  document.getElementById('icon-pause').style.display = 'none';
  updateBtnPlayLabel();
});
audio.addEventListener('ended', () => {
  document.getElementById('icon-play').style.display  = '';
  document.getElementById('icon-pause').style.display = 'none';
  cancelPendingPlay();
  followBlock = null;
  if (playingBlock) {
    document.querySelectorAll(`.tema-block[data-id="${playingBlock.id}"]`)
      .forEach(el => el.classList.remove('playing'));
    playingBlock = null;
  }
  playhead.style.display = 'none';
  updateBtnPlayLabel();
});

// ─────────────────────────────────────────────────────────────
//  RENDER — Leyenda
// ─────────────────────────────────────────────────────────────
const legendEl = document.getElementById('legend-temas');
DATA.resumen_temas.forEach(t => {
  const el = document.createElement('span');
  el.className = 'legend-item';
  el.innerHTML = `<span class="legend-swatch" style="background:${t.color}"></span>${t.tema}`;
  legendEl.insertBefore(el, legendEl.children[legendEl.children.length - 5]);
});

// ─────────────────────────────────────────────────────────────
//  RENDER — Barras de porcentaje
// ─────────────────────────────────────────────────────────────
const barsContainer = document.getElementById('bars-container');
DATA.resumen_temas.forEach(t => {
  const row = document.createElement('div');
  row.className = 'bar-row';
  row.dataset.tema = t.tema;
  row.innerHTML = `
    <span class="bar-label">${t.tema}</span>
    <div class="bar-track">
      <div class="bar-fill" data-pct="${t.porcentaje}" style="background:${t.color}"></div>
    </div>
    <span class="bar-pct">${t.porcentaje}%</span>
  `;
  barsContainer.appendChild(row);
});

const barObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      document.querySelectorAll('.bar-fill').forEach(el => { el.style.width = el.dataset.pct + '%'; });
      barObserver.disconnect();
    }
  });
}, { threshold: 0.3 });
barObserver.observe(barsContainer);

// ─────────────────────────────────────────────────────────────
//  RENDER — Eje de tiempo
// ─────────────────────────────────────────────────────────────
const axisEl = document.getElementById('time-axis');
for (let i = 0; i < TICKS; i++) {
  const seg = Math.round(DURACION / (TICKS - 1) * i);
  const tick = document.createElement('span');
  tick.className = 'time-tick';
  tick.textContent = fmt(seg);
  axisEl.appendChild(tick);
}

// ─────────────────────────────────────────────────────────────
//  RENDER — Timeline de puntos (dot-strip)
// ─────────────────────────────────────────────────────────────
const temaMap = {};
DATA.bloques.forEach(b => {
  if (!temaMap[b.tema]) temaMap[b.tema] = [];
  temaMap[b.tema].push(b);
});

const rowsContainer = document.getElementById('timeline-rows');
const CLUSTER_GAP = DURACION * 0.009;   // separación máx. entre puntos de un grupo
const CLUSTER_PAD = DURACION * 0.0045;  // margen horizontal de la cápsula

DATA.resumen_temas.forEach(({ tema, color }) => {
  const bloques = temaMap[tema];
  if (!bloques) return;

  const row = document.createElement('div');
  row.className = 'tema-row';
  row.dataset.tema = tema;

  const nameEl = document.createElement('div');
  nameEl.className = 'tema-name';
  nameEl.textContent = tema;

  const track = document.createElement('div');
  track.className = 'tema-track';

  // 1) Reunir los puntos: un punto de bloque (color del tema) y, si el
  //    bloque contiene eventos, un punto de evento (rojo) representativo.
  const dots = [];
  bloques.forEach(bloque => {
    dots.push({ x: bloque.inicio, kind: 'block', bloque });
    if (bloque.eventos && bloque.eventos.length) {
      const mid = bloque.inicio + (bloque.fin - bloque.inicio) * 0.5;
      dots.push({ x: Math.min(mid, bloque.fin - 1), kind: 'event', bloque, ev: bloque.eventos[0] });
    }
  });
  dots.sort((a, b) => a.x - b.x);

  // 2) Cápsulas para grupos de puntos cercanos (>= 2)
  let i = 0;
  while (i < dots.length) {
    let j = i;
    while (j + 1 < dots.length && dots[j + 1].x - dots[j].x < CLUSTER_GAP) j++;
    if (j > i) {
      const minX = dots[i].x, maxX = dots[j].x;
      const cap = document.createElement('div');
      cap.className = 'tema-cluster';
      cap.style.left  = pct(Math.max(0, minX - CLUSTER_PAD));
      cap.style.width = pct((maxX - minX) + CLUSTER_PAD * 2);
      track.appendChild(cap);
    }
    i = j + 1;
  }

  // 3) Puntos
  dots.forEach(d => {
    if (d.kind === 'block') {
      const dot = document.createElement('div');
      dot.className = 'tema-block';
      dot.dataset.id = d.bloque.id;
      dot.style.left = pct(d.x);
      dot.style.background = color;
      dot.style.color = color;
      dot.title = `${d.bloque.tema} · ${d.bloque.inicio_fmt} → ${d.bloque.fin_fmt}\nClic para ir al audio`;
      dot.addEventListener('click', () => abrirDetalle(d.bloque, null, true));
      track.appendChild(dot);
    } else {
      const m = document.createElement('div');
      m.className = 'event-marker';
      m.dataset.tipo = d.ev.tipo;
      m.style.left = pct(d.x);
      m.title = d.ev.descripcion + '\nClic para ir al audio';
      m.addEventListener('click', e => {
        e.stopPropagation();
        abrirDetalle(d.bloque, d.ev, true);
      });
      track.appendChild(m);
    }
  });

  row.appendChild(nameEl);
  row.appendChild(track);
  rowsContainer.appendChild(row);
});

// ─────────────────────────────────────────────────────────────
//  FILTROS
// ─────────────────────────────────────────────────────────────
let activeTemas = new Set();   // vacío = todos visibles

function aplicarFiltros() {
  const allTemaRows = document.querySelectorAll('.tema-row');
  const allBarRows  = document.querySelectorAll('.bar-row');
  const allMarkers  = document.querySelectorAll('.event-marker');

  // ── Gantt rows & bar rows ──
  allTemaRows.forEach(row => {
    const match = activeTemas.size === 0 || activeTemas.has(row.dataset.tema);
    row.classList.toggle('dimmed', !match);
  });
  allBarRows.forEach(row => {
    const match = activeTemas.size === 0 || activeTemas.has(row.dataset.tema);
    row.classList.toggle('dimmed', !match);
  });

  // ── Event markers: ocultar los de filas no activas ──
  allMarkers.forEach(m => {
    const temaRow = m.closest('.tema-row');
    const tema = temaRow ? temaRow.dataset.tema : null;
    const visible = activeTemas.size === 0 || (tema && activeTemas.has(tema));
    m.classList.toggle('ev-hidden', !visible);
  });

  // ── Reset button visibility ──
  document.getElementById('chip-reset-tema').classList.toggle('visible', activeTemas.size > 0);
}

// Generar chips de tema
const chipsTemaContainer = document.getElementById('filter-chips-tema');
DATA.resumen_temas.forEach(t => {
  const chip = document.createElement('button');
  chip.className = 'chip-tema';
  chip.dataset.tema = t.tema;
  chip.innerHTML = `<span class="chip-dot" style="background:${t.color}"></span>${t.tema}`;
  chip.addEventListener('click', () => {
    if (activeTemas.has(t.tema)) {
      activeTemas.delete(t.tema);
      chip.classList.remove('active');
      chip.style.background = '';
      chip.style.borderColor = '';
    } else {
      activeTemas.add(t.tema);
      chip.classList.add('active');
      chip.style.background = t.color;
      chip.style.borderColor = t.color;
    }
    aplicarFiltros();
  });
  chipsTemaContainer.appendChild(chip);
});

document.getElementById('chip-reset-tema').addEventListener('click', () => {
  activeTemas.clear();
  document.querySelectorAll('.chip-tema').forEach(c => {
    c.classList.remove('active');
    c.style.background = '';
    c.style.borderColor = '';
  });
  aplicarFiltros();
});

// ─────────────────────────────────────────────────────────────
//  PANEL DE DETALLE
// ─────────────────────────────────────────────────────────────
const panel     = document.getElementById('detail-panel');
const dTema     = document.getElementById('d-tema');
const dTime     = document.getElementById('d-time');
const dExtracto = document.getElementById('d-extracto');
const btnPlay   = document.getElementById('btn-play-block');
const dLoading  = document.getElementById('d-loading');

// Refleja en el botón del panel si el bloque seleccionado está sonando.
// Usa el destino del salto (seekTargetSec) mientras el audio bufferea, para
// no depender de que audio.currentTime ya haya alcanzado la zona pedida.
function updateBtnPlayLabel() {
  if (!btnPlay || !selectedBlock) return;
  const refTime = seekTargetSec != null ? seekTargetSec : audio.currentTime;
  // "Es este bloque" si la posición cae dentro de él (partición imperfecta: huecos y
  // solapes) O si es el bloque cuya reproducción inició el panel. Lo segundo evita que
  // el botón revierta a "Ir al audio" cuando el salto aterriza en un hueco/solape.
  const esEste = ((bloqueEnTiempo(refTime) || {}).id === selectedBlock.id) ||
                 (followBlock != null && followBlock.id === selectedBlock.id);

  // Estado de carga: se pidió este bloque y aún se está buscando/bufferando la zona
  const cargando = esEste && (pendingPlay || (!audio.paused && (audio.seeking || audio.readyState < 3)));
  if (dLoading) dLoading.hidden = !cargando;

  if (cargando) {
    btnPlay.classList.add('is-playing');
    btnPlay.textContent = '⏳ Cargando…';
    return;
  }

  const sonando = !audio.paused && esEste;
  btnPlay.classList.toggle('is-playing', sonando);
  btnPlay.textContent = sonando ? '❚❚ Pausar audio' : '▶ Ir al audio';
}

function abrirDetalle(bloque, eventoFocus, seekAudio) {
  // Quitar selected anterior
  document.querySelectorAll('.tema-block.selected').forEach(el => el.classList.remove('selected'));
  // Marcar selected en el bloque nuevo
  document.querySelectorAll(`.tema-block[data-id="${bloque.id}"]`)
    .forEach(el => el.classList.add('selected'));

  selectedBlock = bloque;

  dTema.textContent = bloque.tema.toUpperCase();
  dTema.style.color = bloque.color;
  panel.style.borderLeftColor = bloque.color;
  dTime.textContent = `${bloque.inicio_fmt} — ${bloque.fin_fmt}`;
  dExtracto.textContent = bloque.extracto;

  // Botón del panel — funciona como play / pausa del bloque
  btnPlay.onclick = () => {
    // Estamos en este bloque (o saltando hacia él). Igual que en el label, se
    // considera "este bloque" también si es el que el panel está reproduciendo.
    const refTime = seekTargetSec != null ? seekTargetSec : audio.currentTime;
    const enEsteBloque = ((bloqueEnTiempo(refTime) || {}).id === bloque.id) ||
                         (followBlock != null && followBlock.id === bloque.id);

    if (pendingPlay && enEsteBloque) {
      // Cargando este bloque → cancelar la reproducción pendiente
      cancelPendingPlay();
      audio.pause();
      updateBtnPlayLabel();
    } else if (!audio.paused && enEsteBloque) {
      audio.pause();
    } else if (audio.paused && enEsteBloque) {
      followBlock = bloque;
      audio.play();
    } else {
      seekTo(bloque.inicio, bloque);
    }
  };
  updateBtnPlayLabel();

  panel.classList.add('visible');

  // Seek al audio si se pide
  if (seekAudio) {
    seekTo(bloque.inicio, bloque);
  }

  if (seekAudio) {
    panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

function cerrarDetalle() {
  panel.classList.remove('visible');
  document.querySelectorAll('.tema-block.selected').forEach(el => el.classList.remove('selected'));
  selectedBlock = null;
  if (dLoading) dLoading.hidden = true;
}

// Keyboard: espacio = play/pause, escape = cerrar panel
document.addEventListener('keydown', e => {
  if (e.code === 'Space' && e.target === document.body) {
    e.preventDefault();
    togglePlay();
  }
  if (e.code === 'Escape') cerrarDetalle();
  if (e.code === 'ArrowLeft')  seekRelative(-15);
  if (e.code === 'ArrowRight') seekRelative(15);
});

// Pausa el audio si el usuario abandona la sección del timeline con el scroll
(function () {
  const tlSection = document.getElementById('timeline');
  if (!tlSection || !('IntersectionObserver' in window)) return;
  const io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting && !audio.paused) audio.pause();
    });
  }, { threshold: 0 });
  io.observe(tlSection);
})();


