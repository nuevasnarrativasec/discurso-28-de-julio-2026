// ═══════════════════════════════════════════════════════════════
//  MÓDULO B — narrativa en 5 momentos
// ═══════════════════════════════════════════════════════════════
(function() {
  // El contenido editable de los 5 momentos vive en ./js/momentos.js
  // (se carga ANTES que este archivo y define window.MOMENTOS).
  var NARRATIVA = (window.MOMENTOS && window.MOMENTOS.length) ? window.MOMENTOS : [];
  if (!NARRATIVA.length) return;

  var colores = {};
  DATA.resumen_temas.forEach(function(t) { colores[t.tema] = t.color; });

  // ── Carrusel: track horizontal fluido ─────────────────────
  var track   = document.getElementById('rz-track');
  if (!track) return;
  var elStart = document.querySelector('.rz-time-start');
  var btnPrev = document.getElementById('rz-prev');
  var btnNext = document.getElementById('rz-next');

  // Límites de tiempo (seg) de cada momento, para extraer texto del discurso
  var starts = NARRATIVA.map(function(m) { return m.inicio_seg; });
  function escapeHtml(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  // Cita (una sola, concisa) real del discurso dentro del rango del momento
  function momentoCita(i) {
    if (NARRATIVA[i].cita) return NARRATIVA[i].cita;
    var lo = starts[i];
    var hi = (i + 1 < starts.length) ? starts[i + 1] : Infinity;
    var bloques = (typeof DATA !== 'undefined' && DATA.bloques) ? DATA.bloques : [];
    var pick = '';
    for (var k = 0; k < bloques.length; k++) {
      var bl = bloques[k];
      if (bl.inicio >= lo && bl.inicio < hi) {
        var t = (bl.extracto || '').trim();
        if (t.length > 120) { pick = t; break; }
        if (!pick) pick = t;
      }
    }
    return pick.replace(/\s*\.{2,}$/, '…');
  }
  // Envuelve la frase a analizar en <mark> (texto ya escapado)
  function conResaltado(textoEsc, frase) {
    if (!frase) return textoEsc;
    var f = escapeHtml(frase);
    var pos = textoEsc.indexOf(f);
    if (pos < 0) return textoEsc;
    return textoEsc.slice(0, pos) + '<mark class="rz-mark">' + f + '</mark>' + textoEsc.slice(pos + f.length);
  }

  var AUDIO_SVG = '<svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>';

  // Reproductores de clip por momento. Solo uno puede sonar a la vez.
  var players = [];
  function pausarOtros(excepto) {
    // Pausa el audio del discurso general…
    if (typeof audio !== 'undefined' && audio && audio !== excepto) {
      try { audio.pause(); } catch (e) {}
    }
    // …y cualquier otro clip de momento.
    players.forEach(function(p) { if (p !== excepto) p.pause(); });
  }
  function pausarTodosLosClips() { players.forEach(function(p) { p.pause(); }); }
  // Si arranca el audio general, callar los clips.
  if (typeof audio !== 'undefined' && audio) {
    audio.addEventListener('play', pausarTodosLosClips);
  }

  // Construir los 5 paneles (uno por momento) dentro del track
  NARRATIVA.forEach(function(b, i) {
    var cita  = momentoCita(i) || b.descripcion;
    var quote = conResaltado(escapeHtml(cita), b.resaltar);
    var tiempo = escapeHtml(b.tiempo.replace(/—/g, '-'));
    var panel = document.createElement('div');
    panel.className = 'rz-slide-panel';
    panel.innerHTML =
      '<div class="rz-slide-marker">' +
        '<div class="rz-slide-num">' + (i + 1) + '</div>' +
        '<div class="rz-slide-line"></div>' +
      '</div>' +
      '<div class="rz-slide-main">' +
        '<span class="rz-slide-time">' + tiempo + '</span>' +
        '<div class="rz-slide-quote"><p class="rz-quote-p">' + quote + '</p></div>' +
        '<div class="rz-slide-audio-wrap">' +
          '<button class="rz-slide-audio rz-float-audio" type="button">' + AUDIO_SVG + ' ESCUCHAR AUDIO</button>' +
          '<audio class="rz-slide-player" controls preload="none"></audio>' +
        '</div>' +
      '</div>' +
      '<div class="rz-float-card">' +
        '<div class="rz-float-rule"></div>' +
        '<h4 class="rz-float-title">' + escapeHtml(b.titulo) + '</h4>' +
        '<p class="rz-float-desc">' + escapeHtml(b.descripcion) + '</p>' +
        '<div class="rz-float-rule"></div>' +
      '</div>';

    var wrap   = panel.querySelector('.rz-slide-audio-wrap');
    var player = panel.querySelector('.rz-slide-player');
    if (b.audio) player.src = b.audio;
    players.push(player);
    // Refuerzo: al reproducir un clip, callar todos los demás audios.
    player.addEventListener('play', function() { pausarOtros(player); });

    panel.querySelector('.rz-slide-audio').addEventListener('click', function() {
      if (b.audio) {
        // Clip propio del momento → mostrar su player inline y reproducir.
        pausarOtros(player);
        wrap.classList.add('is-playing');
        player.play().catch(function() {});
      } else {
        // Aún no hay clip: reproducir el audio general en su segundo.
        seekTo(b.inicio_seg);
        var tl = document.getElementById('timeline');
        if (tl) tl.scrollIntoView({ behavior: 'smooth' });
      }
    });
    track.appendChild(panel);
  });

  var idx = 0, snapTimer = null;
  // Paso = ancho de un panel + gap entre paneles (medido en vivo)
  function stepW() {
    var ps = track.querySelectorAll('.rz-slide-panel');
    if (ps.length > 1) return ps[1].offsetLeft - ps[0].offsetLeft;
    return track.clientWidth || 1;
  }
  function currentIndex(){ return Math.round(track.scrollLeft / stepW()); }
  function setBadge(i)   {
    if (elStart) elStart.classList.toggle('is-hidden', i !== 0);  // "Inicio discurso" solo en el 1er momento
  }

  function goTo(i, smooth) {
    idx = Math.max(0, Math.min(NARRATIVA.length - 1, i));
    if (smooth) {
      // Snap desactivado durante la animación para que sea suave y no dé tirón;
      // se reactiva al terminar (ya alineado, sin salto).
      track.style.scrollSnapType = 'none';
      clearTimeout(snapTimer);
      snapTimer = setTimeout(function() { track.style.scrollSnapType = ''; }, 550);
    }
    track.scrollTo({ left: idx * stepW(), behavior: smooth ? 'smooth' : 'auto' });
    setBadge(idx);
  }

  btnPrev.addEventListener('click', function() { goTo(currentIndex() - 1, true); });
  btnNext.addEventListener('click', function() { goTo(currentIndex() + 1, true); });

  // Actualiza el badge de tiempo mientras se desplaza (throttle con rAF)
  var ticking = false;
  track.addEventListener('scroll', function() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function() {
      var i = currentIndex();
      if (i !== idx) { idx = i; setBadge(idx); pausarTodosLosClips(); }  // al cambiar de momento, callar clips
      ticking = false;
    });
  }, { passive: true });

  // ── Arrastre con mouse mantenido (fluido). En táctil el scroll es nativo ──
  var down = false, decided = false, horiz = false, sx = 0, sy = 0, startLeft = 0;
  track.addEventListener('pointerdown', function(e) {
    if (e.pointerType !== 'mouse') return;           // táctil/pen → scroll nativo
    if (e.button !== 0) return;
    if (e.target.closest('button')) return;          // flechas / audio
    down = true; decided = false; horiz = false;
    sx = e.clientX; sy = e.clientY; startLeft = track.scrollLeft;
  });
  track.addEventListener('pointermove', function(e) {
    if (!down) return;
    if (e.buttons === 0) { down = false; return; }
    var dx = e.clientX - sx, dy = e.clientY - sy;
    if (!decided) {
      if (Math.abs(dx) < 6 && Math.abs(dy) < 6) return;
      decided = true;
      horiz = Math.abs(dx) > Math.abs(dy);           // vertical → scroll del texto
      if (horiz) {
        try { track.setPointerCapture(e.pointerId); } catch (_) {}
        track.classList.add('is-dragging');
        track.style.scrollSnapType = 'none';         // desactivar snap mientras se arrastra
        clearTimeout(snapTimer);
      }
    }
    if (horiz) { track.scrollLeft = startLeft - dx; e.preventDefault(); }
  });
  function endDrag() {
    if (!down) return;
    down = false;
    if (horiz) {
      track.classList.remove('is-dragging');
      goTo(currentIndex(), true);                    // ajuste suave al más cercano
    }
    decided = false; horiz = false;
  }
  track.addEventListener('pointerup', endDrag);
  track.addEventListener('pointercancel', endDrag);

  window.addEventListener('resize', function() { goTo(idx, false); });

  // Si la sección sale de la vista al hacer scroll, pausar los clips.
  if ('IntersectionObserver' in window) {
    var seccion = track.closest('.rz-momentos') || track;
    new IntersectionObserver(function(entries) {
      entries.forEach(function(e) { if (!e.isIntersecting) pausarTodosLosClips(); });
    }, { threshold: 0 }).observe(seccion);
  }
  // Respaldo: si la pestaña se oculta, también pausar.
  document.addEventListener('visibilitychange', function() {
    if (document.hidden) pausarTodosLosClips();
  });

  setBadge(0);
})();

