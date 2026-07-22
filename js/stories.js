// ═══════════════════════════════════════════════════════════════
//  STORIES — "Qué dicen nuestros editores"
//  Visor tipo Instagram con carga perezosa de video (async),
//  pausa al mantener presionado y control de sonido/mute.
//  Rellena EDITORES con tus archivos: avatar (img) y video (mp4 vertical).
// ═══════════════════════════════════════════════════════════════
(function() {
  var EDITORES = [
    { handle: 'Hector Villalobos', categoria: 'Política',  avatar: './img/hector-villalobos.jpg',  video: './video/editores/politica.mp4'  },
    { handle: 'Maro Villalobos', categoria: 'Economía',  avatar: './img/maro-villalobos.jpg',  video: './video/editores/economia.mp4'  },
    { handle: 'Juan Pablo León', categoria: 'Nacional',  avatar: './img/juan-pablo-leon.jpg',  video: './video/editores/nacional.mp4'  },
    { handle: 'Ariana Lira', categoria: 'ECData',    avatar: './img/ariana-lira.jpg',    video: './video/editores/ecdata.mp4'    }
    
  ];
  var FALLBACK_SECS = 6;    // duración de la barra si el video no carga
  var HOLD_MS = 220;        // umbral para distinguir "tap" de "mantener presionado"

  var row = document.getElementById('stories-row');
  if (!row) return;

  // ── Círculos ────────────────────────────────────────────────
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
  var current = -1, usingFallback = false, muted = false;
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

    EDITORES.forEach(function() {
      var b = document.createElement('div');
      b.className = 'stviewer-bar';
      b.innerHTML = '<span></span>';
      barsEl.appendChild(b);
    });

    viewer.querySelector('.stviewer-close').addEventListener('click', close);
    viewer.addEventListener('click', function(e){ if (e.target === viewer) close(); });

    // Sonido / mute
    muteBtn.addEventListener('click', function(e){ e.stopPropagation(); setMuted(!muted); });

    // Navegación + mantener presionado para pausar
    wireHold(viewer.querySelector('.stviewer-nav.prev'), -1);
    wireHold(viewer.querySelector('.stviewer-nav.next'), +1);

    videoEl.addEventListener('waiting',  function(){ viewer.classList.add('loading'); });
    videoEl.addEventListener('playing',  function(){ viewer.classList.remove('loading'); });
    videoEl.addEventListener('loadeddata', function(){ viewer.classList.remove('loading'); });
    videoEl.addEventListener('ended',    function(){ go(current + 1); });
    videoEl.addEventListener('error',    startFallback);
  }

  // ── Tap vs mantener presionado ──────────────────────────────
  function wireHold(zone, dir) {
    var holdTimer = null, holding = false;
    function down(e) {
      e.preventDefault();
      holding = false;
      holdTimer = setTimeout(function(){ holding = true; pause(); }, HOLD_MS);
    }
    function up() {
      clearTimeout(holdTimer);
      if (holding) { holding = false; resume(); }
      else { go(current + dir); }   // tap corto = navegar
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
  function prefetchNext(i) {
    var n = EDITORES[i + 1];
    if (!n || !n.video) return;
    if (!prefetchEl) { prefetchEl = document.createElement('video'); prefetchEl.preload = 'auto'; }
    if (prefetchEl.getAttribute('src') !== n.video) prefetchEl.setAttribute('src', n.video);
  }

  function open(i) {
    if (!viewer) build();
    document.body.style.overflow = 'hidden';
    viewer.classList.add('open');
    document.addEventListener('keydown', onKey);
    go(i);
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
    current = -1;
  }

  function go(i) {
    if (i < 0) return;
    if (i >= EDITORES.length) { close(); return; }
    current = i;
    var e = EDITORES[i];

    var bars = barsEl.querySelectorAll('.stviewer-bar > span');
    bars.forEach(function(s, idx){ s.style.transition = 'none'; s.style.width = idx < i ? '100%' : '0%'; });

    headTxt.innerHTML = '<b>' + e.handle + '</b> <span>· ' + e.categoria + '</span>';
    headAv.innerHTML = e.avatar ? '<img src="' + e.avatar + '" alt="" onerror="this.remove()">' : '';

    stopProgress();
    usingFallback = false;
    paused = false;
    viewer.classList.remove('paused');
    viewer.classList.add('loading');
    videoEl.pause();

    if (e.video) {
      loadInto(videoEl, e.video);
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
    prefetchNext(i);
  }

  // ── Progreso unificado (respeta la pausa) ───────────────────
  function activeBar() {
    return barsEl.querySelectorAll('.stviewer-bar > span')[current] || null;
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
      if (pct >= 100) { go(current + 1); return; }
      rafId = requestAnimationFrame(tick);
    }
    rafId = requestAnimationFrame(tick);
  }
  function stopProgress() {
    if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
  }

  function onKey(e) {
    if (e.key === 'Escape') close();
    else if (e.key === 'ArrowRight') go(current + 1);
    else if (e.key === 'ArrowLeft') go(current - 1);
    else if (e.key === 'm' || e.key === 'M') setMuted(!muted);
    else if (e.key === ' ') { e.preventDefault(); paused ? resume() : pause(); }
  }
})();


