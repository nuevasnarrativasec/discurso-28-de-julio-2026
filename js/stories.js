// ═══════════════════════════════════════════════════════════════
//  STORIES — "Qué dicen nuestros editores"
//  Visor tipo Instagram con carga perezosa de video (async),
//  pausa al mantener presionado y control de sonido/mute.
//  Cada editor tiene una historia con varios segmentos (videos).
//  Rellena EDITORES: avatar (img) y videos (array de mp4 verticales).
// ═══════════════════════════════════════════════════════════════
(function() {
  var EDITORES = [
    { handle: 'Hector Villalobos', categoria: 'Política',  avatar: './img/hector-villalobos.jpg',
      videos: ['./video/editores/politica-1.mp4', './video/editores/politica-2.mp4'] },
    { handle: 'Paola Villar', categoria: 'Economía',  avatar: './img/paola-villar.jpg',
      videos: ['./video/editores/economia-1.mp4', './video/editores/economia-2.mp4'] },
    { handle: 'Martín Acosta', categoria: 'Nacional',  avatar: './img/martin-acosta.jpg',
      videos: ['./video/editores/nacional-1.mp4', './video/editores/nacional-2.mp4'] },
    { handle: 'Ariana Lira', categoria: 'ECData',    avatar: './img/ariana-lira.jpg',
      videos: ['./video/editores/ecdata-1.mp4', './video/editores/ecdata-2.mp4'] }
  ];
  var FALLBACK_SECS = 6;    // duración de la barra si el video no carga
  var HOLD_MS = 220;        // umbral para distinguir "tap" de "mantener presionado"

  var row = document.getElementById('stories-row');
  if (!row) return;

  // ── Círculos (uno por editor) ───────────────────────────────
  EDITORES.forEach(function(e, i) {
    var btn = document.createElement('button');
    btn.className = 'story-item';
    btn.type = 'button';
    btn.setAttribute('aria-label', 'Ver historia de ' + e.categoria);
    var inicial = (e.categoria || '?').charAt(0).toUpperCase();
    btn.innerHTML =
      '<span class="story-ring"><span class="story-avatar">' +
        (e.avatar
          ? '<img src="' + e.avatar + '" alt="" loading="lazy" onerror="this.remove()">'
          : '') +
        '<span class="story-avatar-fallback">' + inicial + '</span>' +
      '</span></span>' +
      '<span class="story-caption"><span class="story-handle">' + e.handle +
      '</span>  <span class="story-cat">' + e.categoria + '</span></span>';
    btn.addEventListener('click', function() { open(i); });
    row.appendChild(btn);
  });

  // ── Visor (overlay) — se construye una sola vez ─────────────
  var viewer, videoEl, barsEl, headAv, headTxt, muteBtn;
  var curE = -1, curS = 0, usingFallback = false, muted = false;
  var rafId = null, fbElapsed = 0, lastTs = 0, paused = false;
  var ICON_SOUND = '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>';
  var ICON_MUTE  = '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg>';

  function build() {
    viewer = document.createElement('div');
    viewer.className = 'stviewer';
    viewer.innerHTML =
      '<div class="stviewer-stage">' +
        '<div class="stviewer-bars"></div>' +
        '<div class="stviewer-head">' +
          '<span class="stviewer-head-av"></span>' +
          '<span class="stviewer-head-txt"></span>' +
        '</div>' +
        '<button class="stviewer-mute" aria-label="Silenciar">' + ICON_SOUND + '</button>' +
        '<button class="stviewer-close" aria-label="Cerrar">&times;</button>' +
        '<video class="stviewer-video" playsinline preload="none" webkit-playsinline></video>' +
        '<div class="stviewer-spinner"></div>' +
        '<button class="stviewer-nav prev" aria-label="Anterior"></button>' +
        '<button class="stviewer-nav next" aria-label="Siguiente"></button>' +
      '</div>';
    document.body.appendChild(viewer);
    videoEl = viewer.querySelector('.stviewer-video');
    barsEl  = viewer.querySelector('.stviewer-bars');
    headAv  = viewer.querySelector('.stviewer-head-av');
    headTxt = viewer.querySelector('.stviewer-head-txt');
    muteBtn = viewer.querySelector('.stviewer-mute');

    viewer.querySelector('.stviewer-close').addEventListener('click', close);
    viewer.addEventListener('click', function(e){ if (e.target === viewer) close(); });

    // Sonido / mute
    muteBtn.addEventListener('click', function(e){ e.stopPropagation(); setMuted(!muted); });

    // Navegación + mantener presionado para pausar
    wireHold(viewer.querySelector('.stviewer-nav.prev'), prev);
    wireHold(viewer.querySelector('.stviewer-nav.next'), next);

    videoEl.addEventListener('waiting',  function(){ viewer.classList.add('loading'); });
    videoEl.addEventListener('playing',  function(){ viewer.classList.remove('loading'); });
    videoEl.addEventListener('loadeddata', function(){ viewer.classList.remove('loading'); });
    videoEl.addEventListener('ended',    function(){ next(); });
    videoEl.addEventListener('error',    startFallback);
  }

  // Reconstruye las barras de segmento para el editor actual
  function buildBars(n) {
    barsEl.innerHTML = '';
    for (var k = 0; k < n; k++) {
      var b = document.createElement('div');
      b.className = 'stviewer-bar';
      b.innerHTML = '<span></span>';
      barsEl.appendChild(b);
    }
  }

  // ── Tap vs mantener presionado ──────────────────────────────
  function wireHold(zone, onTap) {
    var holdTimer = null, holding = false;
    function down(e) {
      e.preventDefault();
      holding = false;
      holdTimer = setTimeout(function(){ holding = true; pause(); }, HOLD_MS);
    }
    function up() {
      clearTimeout(holdTimer);
      if (holding) { holding = false; resume(); }
      else { onTap(); }   // tap corto = navegar
    }
    zone.addEventListener('pointerdown', down);
    zone.addEventListener('pointerup', up);
    zone.addEventListener('pointercancel', function(){ clearTimeout(holdTimer); if (holding){ holding=false; resume(); } });
    zone.addEventListener('pointerleave', function(){ if (holding){ holding=false; resume(); } clearTimeout(holdTimer); });
  }

  function pause() {
    paused = true;
    if (!usingFallback) videoEl.pause();
    viewer.classList.add('paused');
  }
  function resume() {
    paused = false;
    lastTs = 0;
    if (!usingFallback) { var p = videoEl.play(); if (p && p.catch) p.catch(function(){}); }
    viewer.classList.remove('paused');
  }

  // ── Sonido ──────────────────────────────────────────────────
  function setMuted(m) {
    muted = m;
    if (videoEl) videoEl.muted = m;
    if (muteBtn) {
      muteBtn.innerHTML = m ? ICON_MUTE : ICON_SOUND;
      muteBtn.setAttribute('aria-label', m ? 'Activar sonido' : 'Silenciar');
    }
  }

  // ── Carga perezosa ──────────────────────────────────────────
  function loadInto(video, url) {
    if (url && video.getAttribute('src') !== url) video.setAttribute('src', url);
  }
  var prefetchEl = null;
  function prefetchNext() {
    var vids = EDITORES[curE] && EDITORES[curE].videos || [];
    var url;
    if (curS < vids.length - 1) {
      url = vids[curS + 1];                                  // siguiente segmento del mismo editor
    } else {
      var ne = EDITORES[curE + 1];                           // primer segmento del siguiente editor
      url = ne && ne.videos && ne.videos[0];
    }
    if (!url) return;
    if (!prefetchEl) { prefetchEl = document.createElement('video'); prefetchEl.preload = 'auto'; }
    if (prefetchEl.getAttribute('src') !== url) prefetchEl.setAttribute('src', url);
  }

  function open(i) {
    if (!viewer) build();
    document.body.style.overflow = 'hidden';
    viewer.classList.add('open');
    document.addEventListener('keydown', onKey);
    curE = -1;                 // fuerza la reconstrucción de barras
    go(i, 0);
  }
  function close() {
    if (!viewer) return;
    stopProgress();
    videoEl.pause();
    videoEl.removeAttribute('src');
    videoEl.load();
    viewer.classList.remove('open', 'loading', 'paused');
    document.body.style.overflow = '';
    document.removeEventListener('keydown', onKey);
    curE = -1; curS = 0;
  }

  // ── Navegación entre segmentos y editores ───────────────────
  function next() {
    var vids = EDITORES[curE] && EDITORES[curE].videos || [];
    if (curS < vids.length - 1) go(curE, curS + 1);
    else go(curE + 1, 0);
  }
  function prev() {
    if (curS > 0) { go(curE, curS - 1); return; }
    var pe = curE - 1;
    if (pe < 0) return;
    var pv = EDITORES[pe].videos || [];
    go(pe, pv.length - 1);
  }

  // Reproduce el segmento (si, dentro del editor ei)
  function go(ei, si) {
    if (ei < 0) return;
    if (ei >= EDITORES.length) { close(); return; }
    var e = EDITORES[ei];
    var vids = e.videos || [];
    if (si < 0) si = 0;
    if (si >= vids.length) si = vids.length - 1;

    var editorChanged = (ei !== curE);
    curE = ei; curS = si;
    if (editorChanged) buildBars(vids.length);

    headTxt.innerHTML = '<b>' + e.handle + '</b> <span>· ' + e.categoria + '</span>';
    headAv.innerHTML = e.avatar ? '<img src="' + e.avatar + '" alt="" onerror="this.remove()">' : '';

    // Estado de las barras: llenas antes del segmento actual, vacías después
    var bars = barsEl.querySelectorAll('.stviewer-bar > span');
    bars.forEach(function(s, idx){ s.style.transition = 'none'; s.style.width = idx < si ? '100%' : '0%'; });

    stopProgress();
    usingFallback = false;
    paused = false;
    viewer.classList.remove('paused');
    viewer.classList.add('loading');
    videoEl.pause();

    var url = vids[si];
    if (url) {
      loadInto(videoEl, url);
      try { videoEl.currentTime = 0; } catch (_) {}
      videoEl.muted = muted;
      var p = videoEl.play();
      if (p && p.catch) p.catch(function(){
        // autoplay con sonido bloqueado → reintenta en silencio
        setMuted(true);
        var p2 = videoEl.play();
        if (p2 && p2.catch) p2.catch(function(){ startFallback(); });
      });
      startProgress();
    } else {
      startFallback();
    }
    prefetchNext();
  }

  // ── Progreso unificado (respeta la pausa) ───────────────────
  function activeBar() {
    return barsEl.querySelectorAll('.stviewer-bar > span')[curS] || null;
  }
  function startProgress() {
    stopProgress();
    var el = activeBar(); if (!el) return;
    el.style.transition = 'none';
    lastTs = 0;
    function tick() {
      if (!paused && !usingFallback) {
        var d = videoEl.duration, t = videoEl.currentTime;
        if (d && isFinite(d) && d > 0) {
          viewer.classList.remove('loading');
          el.style.width = Math.min(100, (t / d) * 100) + '%';
        }
      }
      rafId = requestAnimationFrame(tick);
    }
    rafId = requestAnimationFrame(tick);
  }
  function startFallback() {
    if (usingFallback) return;
    usingFallback = true;
    viewer.classList.remove('loading');
    var el = activeBar(); if (!el) return;
    stopProgress();
    el.style.transition = 'none';
    fbElapsed = 0; lastTs = 0;
    function tick(ts) {
      if (!lastTs) lastTs = ts;
      if (!paused) fbElapsed += ts - lastTs;
      lastTs = ts;
      var pct = Math.min(100, (fbElapsed / (FALLBACK_SECS * 1000)) * 100);
      el.style.width = pct + '%';
      if (pct >= 100) { next(); return; }
      rafId = requestAnimationFrame(tick);
    }
    rafId = requestAnimationFrame(tick);
  }
  function stopProgress() {
    if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
  }

  function onKey(e) {
    if (e.key === 'Escape') close();
    else if (e.key === 'ArrowRight') next();
    else if (e.key === 'ArrowLeft') prev();
    else if (e.key === 'm' || e.key === 'M') setMuted(!muted);
    else if (e.key === ' ') { e.preventDefault(); paused ? resume() : pause(); }
  }
})();
