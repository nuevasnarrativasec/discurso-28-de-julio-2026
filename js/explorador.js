// ═══════════════════════════════════════════════════════════════
//  EXPLORADOR DEL DISCURSO
// ═══════════════════════════════════════════════════════════════
(function () {

  // ── Config tipos ──────────────────────────────────────────────
  const TIPOS = [
    { id: 'anuncio',  label: 'Anuncio',  color: '#e67e22', dot: '#e67e22' },
    { id: 'cifra',    label: 'Cifra',    color: '#2980b9', dot: '#2980b9' },
    { id: 'contexto', label: 'Contexto', color: '#7f8c8d', dot: '#7f8c8d' },
  ];

  // ── Preprocesar bloques ───────────────────────────────────────
  // Añadimos: tipos[], regiones[]
  const bloques = DATA.bloques.map(b => {
    const tiposEv = (b.eventos || []).map(e => e.tipo);
    const tipos = [];
    if (tiposEv.includes('anuncio')) tipos.push('anuncio');
    if (tiposEv.includes('cifra'))   tipos.push('cifra');
    if (tipos.length === 0)          tipos.push('contexto');

    const regiones = [];
    (b.eventos || []).forEach(e => {
      if (e.tipo === 'mencion_regional') {
        const desc = e.descripcion.replace('Menciona: ', '');
        desc.split(', ').forEach(r => {
          const rr = r.trim();
          if (rr && !regiones.includes(rr)) regiones.push(rr);
        });
      }
    });
    return { ...b, _tipos: tipos, _regiones: regiones };
  });

  // ── Estado ────────────────────────────────────────────────────
  let filTemas   = new Set();
  let filTipos   = new Set();
  let filRegion  = null;   // solo una a la vez
  let filQuery   = '';
  let pageSize   = 20;
  let showing    = pageSize;

  // ── DOM refs ──────────────────────────────────────────────────
  const elSearch   = document.getElementById('exp-search');
  const elCount    = document.getElementById('exp-count');
  const elReset    = document.getElementById('exp-reset');
  const elResults  = document.getElementById('exp-results');
  const elLoadMore = document.getElementById('exp-load-more');

  // ── Reproducción de fragmentos en la misma tarjeta ────────────
  const audioEl = document.getElementById('audio-el');
  let fragActivo = null;   // { btn, fin } de la tarjeta que suena

  function setBtnState(btn, playing) {
    if (!btn) return;
    btn.classList.toggle('is-playing', playing);
    const lbl = btn.querySelector('.exp-play-label');
    if (lbl) lbl.textContent = playing ? 'Pausar' : 'Escuchar';
  }
  // Observa la tarjeta activa: si sale del viewport, pausa
  const cardObserver = ('IntersectionObserver' in window)
    ? new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (!e.isIntersecting && fragActivo && e.target === fragActivo.card && audioEl) {
            audioEl.pause();
            pararFragmento();
          }
        });
      }, { threshold: 0 })
    : null;

  function pararFragmento() {
    if (fragActivo) {
      setBtnState(fragActivo.btn, false);
      if (cardObserver && fragActivo.card) cardObserver.unobserve(fragActivo.card);
      fragActivo = null;
    }
  }
  function toggleFragmento(btn, inicio, fin) {
    if (!audioEl) return;
    if (fragActivo && fragActivo.btn === btn) {
      // Misma tarjeta: alterna play/pausa
      if (audioEl.paused) { audioEl.play(); setBtnState(btn, true); }
      else { audioEl.pause(); setBtnState(btn, false); }
      return;
    }
    // Otra tarjeta: resetea la anterior y arranca esta
    if (fragActivo) {
      setBtnState(fragActivo.btn, false);
      if (cardObserver && fragActivo.card) cardObserver.unobserve(fragActivo.card);
    }
    const card = btn.closest('.exp-card');
    fragActivo = { btn: btn, fin: isFinite(fin) ? fin : Infinity, card: card };
    if (cardObserver && card) cardObserver.observe(card);   // pausar al salir del viewport
    if (typeof seekTo === 'function') seekTo(inicio);       // busca y reproduce, sin scroll
    else { audioEl.currentTime = inicio; audioEl.play(); }
    setBtnState(btn, true);
  }
  if (audioEl) {
    // Detener el fragmento al llegar a su fin
    audioEl.addEventListener('timeupdate', function () {
      if (fragActivo && audioEl.currentTime >= fragActivo.fin) {
        audioEl.pause();
        setBtnState(fragActivo.btn, false);
        fragActivo = null;
      }
    });
    // Si el audio se pausa desde otro control, refleja el botón
    audioEl.addEventListener('pause', function () {
      if (fragActivo) setBtnState(fragActivo.btn, false);
    });
  }
  // ── Helpers ───────────────────────────────────────────────────
  function escHtml(s) {
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }

  function highlightText(text, query) {
    if (!query) return escHtml(text);
    const safe = escHtml(text);
    const re = new RegExp('(' + query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
    return safe.replace(re, '<mark>$1</mark>');
  }

  function tipoLabel(id) {
    const t = TIPOS.find(x => x.id === id);
    return t ? t.label.toUpperCase() : id.toUpperCase();
  }
  function tipoColor(id) {
    const t = TIPOS.find(x => x.id === id);
    return t ? t.color : '#999';
  }

  // ── Filtrar ───────────────────────────────────────────────────
  function filtrar() {
    const q = filQuery.toLowerCase().trim();
    return bloques.filter(b => {
      if (filTemas.size > 0 && !filTemas.has(b.tema)) return false;
      if (filTipos.size > 0 && !b._tipos.some(t => filTipos.has(t))) return false;
      if (filRegion && !b._regiones.includes(filRegion)) return false;
      if (q && !b.extracto.toLowerCase().includes(q)) return false;
      return true;
    });
  }

  // ── Renderizar resultados ─────────────────────────────────────
  function render() {
    // Si sonaba un fragmento, se detiene al re-renderizar (la tarjeta cambia)
    if (fragActivo && audioEl) { audioEl.pause(); pararFragmento(); }
    const resultados = filtrar();
    const total = resultados.length;
    const slice = resultados.slice(0, showing);

    // Count
    elCount.innerHTML = `<strong>${total}</strong> fragmento${total !== 1 ? 's' : ''} encontrado${total !== 1 ? 's' : ''}`;

    // Reset btn
    const anyFilter = filTemas.size > 0 || filTipos.size > 0 || filRegion || filQuery;
    elReset.classList.toggle('hidden', !anyFilter);

    // Results
    if (total === 0) {
      elResults.innerHTML = '<div class="exp-empty">No se encontraron fragmentos con los filtros seleccionados.</div>';
      elLoadMore.style.display = 'none';
      return;
    }

    const q = filQuery.trim();
    elResults.innerHTML = slice.map(b => {
      const badgeTipos = b._tipos.map(t =>
        `<span class="exp-badge">
          <span class="exp-badge-dot" style="background:${tipoColor(t)}"></span>
          ${tipoLabel(t)}
        </span>`
      ).join('<span class="exp-badge-sep">·</span>');

      const regionStr = b._regiones.length
        ? `<span class="exp-badge-sep">·</span><span class="exp-badge-region">${escHtml(b._regiones.join(', '))}</span>`
        : '';

      // Texto tal cual el audio del fragmento, entre comillas (sin puntos suspensivos añadidos)
      const verbatim = (b.extracto || '').replace(/\s*(\.{2,}|…)\s*$/, '').trim();
      const extractoHL = highlightText(verbatim, q);

      return `<div class="exp-card" data-id="${b.id}">
        <div class="exp-card-left">
          <div class="exp-card-badges">
            ${badgeTipos}
            <span class="exp-badge-sep">|</span>
            <span class="exp-badge-tema" style="color:${b.color}">${escHtml(b.tema)}</span>
            ${regionStr}
          </div>
          <p class="exp-card-extracto">“${extractoHL}”</p>
          <div class="exp-card-time">${b.inicio_fmt} — ${b.fin_fmt}</div>
        </div>
        <div class="exp-card-right">
          <button class="exp-card-play" data-inicio="${b.inicio}" data-fin="${b.fin}">
            <svg class="exp-play-ico-play" viewBox="0 0 10 10"><polygon points="0,0 10,5 0,10"/></svg>
            <svg class="exp-play-ico-pause" viewBox="0 0 10 10"><rect x="0" y="0" width="3.5" height="10"/><rect x="6.5" y="0" width="3.5" height="10"/></svg>
            <span class="exp-play-label">Escuchar</span>
          </button>
        </div>
      </div>`;
    }).join('');

    // Botón "cargar más"
    if (total > showing) {
      elLoadMore.style.display = 'block';
      elLoadMore.textContent = `Cargar más (${total - showing} restantes)`;
    } else {
      elLoadMore.style.display = 'none';
    }

    // Eventos en tarjetas
    elResults.querySelectorAll('.exp-card').forEach(card => {
      card.addEventListener('click', e => {
        if (e.target.closest('.exp-card-play')) return; // handled separately
        const id = parseInt(card.dataset.id);
        const b = bloques.find(x => x.id === id);
        if (b) abrirDetalle(b, null, false);
        card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      });
    });
    elResults.querySelectorAll('.exp-card-play').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        toggleFragmento(btn, parseFloat(btn.dataset.inicio), parseFloat(btn.dataset.fin));
      });
    });
  }

  // ── Chips: Tema ───────────────────────────────────────────────
  const cTema = document.getElementById('exp-chips-tema');
  DATA.resumen_temas.forEach(t => {
    const btn = document.createElement('button');
    btn.className = 'exp-chip';
    btn.dataset.tema = t.tema;
    btn.innerHTML = `<span class="chip-dot" style="background:${t.color}"></span>${t.tema}`;
    btn.addEventListener('click', () => {
      if (filTemas.has(t.tema)) {
        filTemas.delete(t.tema);
        btn.classList.remove('active');
        btn.style.background = '';
        btn.style.borderColor = '';
      } else {
        filTemas.add(t.tema);
        btn.classList.add('active');
        btn.style.background = t.color;
        btn.style.borderColor = t.color;
      }
      showing = pageSize;
      render();
    });
    cTema.appendChild(btn);
  });

  // ── Chips: Tipo ───────────────────────────────────────────────
  const cTipo = document.getElementById('exp-chips-tipo');
  TIPOS.forEach(t => {
    const btn = document.createElement('button');
    btn.className = 'exp-chip';
    btn.innerHTML = `<span class="chip-dot" style="background:${t.color}"></span>${t.label}`;
    btn.addEventListener('click', () => {
      if (filTipos.has(t.id)) {
        filTipos.delete(t.id);
        btn.classList.remove('active');
        btn.style.background = '';
        btn.style.borderColor = '';
      } else {
        filTipos.add(t.id);
        btn.classList.add('active');
        btn.style.background = t.color;
        btn.style.borderColor = t.color;
      }
      showing = pageSize;
      render();
    });
    cTipo.appendChild(btn);
  });

  // ── Chips: Región ─────────────────────────────────────────────
  const REGIONES = [...new Set(
    bloques.flatMap(b => b._regiones)
  )].sort();

  const cRegion = document.getElementById('exp-chips-region');
  REGIONES.forEach(r => {
    const btn = document.createElement('button');
    btn.className = 'exp-chip';
    btn.textContent = r;
    btn.addEventListener('click', () => {
      if (filRegion === r) {
        filRegion = null;
        btn.classList.remove('active');
        btn.style.background = '';
        btn.style.borderColor = '';
      } else {
        // Limpiar anterior selección
        cRegion.querySelectorAll('.exp-chip').forEach(c => {
          c.classList.remove('active');
          c.style.background = '';
          c.style.borderColor = '';
        });
        filRegion = r;
        btn.classList.add('active');
        btn.style.background = '#2c3e50';
        btn.style.borderColor = '#2c3e50';
      }
      showing = pageSize;
      render();
    });
    cRegion.appendChild(btn);
  });

  // ── Búsqueda ──────────────────────────────────────────────────
  let searchTimer;
  elSearch.addEventListener('input', () => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      filQuery = elSearch.value;
      showing = pageSize;
      render();
    }, 220);
  });

  // ── Reset ─────────────────────────────────────────────────────
  elReset.addEventListener('click', () => {
    filTemas.clear();
    filTipos.clear();
    filRegion = null;
    filQuery = '';
    elSearch.value = '';
    document.querySelectorAll('#exp-chips-tema .exp-chip, #exp-chips-tipo .exp-chip, #exp-chips-region .exp-chip').forEach(c => {
      c.classList.remove('active');
      c.style.background = '';
      c.style.borderColor = '';
    });
    showing = pageSize;
    render();
  });

  // ── Cargar más ────────────────────────────────────────────────
  elLoadMore.addEventListener('click', () => {
    showing += pageSize;
    render();
  });

  // ── Render inicial ────────────────────────────────────────────
  render();

})();

