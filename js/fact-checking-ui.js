// ═══════════════════════════════════════════════════════════════
//  MÓDULO F — Fact-checking: filtros clicables + acordeones
// ═══════════════════════════════════════════════════════════════
(function() {
  var filtersBox = document.getElementById('modF-filters');
  var listBox    = document.getElementById('modF-acc-list');
  if (!filtersBox || !listBox) return;
  var FACTS = (window.FACTS && window.FACTS.length) ? window.FACTS : [];
  if (!FACTS.length) return;

  function escapeHtml(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  // Calificaciones (config editable en fact-checking.js)
  var CALIF = (window.FACT_CALIFICACIONES && window.FACT_CALIFICACIONES.length)
    ? window.FACT_CALIFICACIONES
    : [
        { id: 'verdadero', color: 'verde',   label: 'Verdadero', desc: '' },
        { id: 'enganoso',  color: 'naranja', label: 'Engañoso',  desc: '' },
        { id: 'falso',     color: 'rojo',    label: 'Falso',     desc: '' }
      ];
  var META = {};
  CALIF.forEach(function(c) { META[c.id] = { cls: c.color, label: c.label, desc: c.desc || '' }; });

  // ── Filtros (con contadores calculados) ───────────────────
  var counts = {};
  CALIF.forEach(function(c) { counts[c.id] = 0; });
  FACTS.forEach(function(f) {
    var v = (f.veredicto || '').toLowerCase();
    if (counts[v] != null) counts[v]++;
  });
  var activo = null;   // veredicto filtrado actualmente (o null = todos)

  CALIF.forEach(function(c) {
    var v = c.id;
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'modF-filter ' + c.color;
    btn.setAttribute('data-veredicto', v);
    btn.innerHTML =
      '<span class="modF-filter-count">' + counts[v] + '</span>' +
      '<span class="modF-filter-label">' + escapeHtml(c.label) + '</span>' +
      (c.desc ? '<span class="modF-filter-desc">' + escapeHtml(c.desc) + '</span>' : '');
    btn.addEventListener('click', function() {
      activo = (activo === v) ? null : v;   // toggle
      aplicarFiltro();
    });
    filtersBox.appendChild(btn);
  });

  // ── Acordeones ────────────────────────────────────────────
  FACTS.forEach(function(f, i) {
    var v = (f.veredicto || '').toLowerCase();
    var m = META[v] || { cls: '', label: f.veredicto || '' };
    var item = document.createElement('div');
    item.className = 'modF-acc-item';
    item.setAttribute('data-veredicto', v);
    item.innerHTML =
      '<button class="modF-acc-head" type="button" aria-expanded="false">' +
        '<span class="modF-acc-headtext">' +
          '<span class="modF-acc-time">' + escapeHtml(f.tiempo || '') + '</span>' +
          '<span class="modF-acc-claim">' + escapeHtml(f.afirmacion || '') + '</span>' +
        '</span>' +
        '<span class="modF-badge ' + m.cls + '">' + escapeHtml(m.label) + '</span>' +
      '</button>' +
      '<div class="modF-acc-body"><div class="modF-acc-body-inner">' +
        '<p class="modF-acc-desc">' + escapeHtml(f.descripcion || '') + '</p>' +
      '</div></div>';
    var head = item.querySelector('.modF-acc-head');
    var body = item.querySelector('.modF-acc-body');
    head.addEventListener('click', function() { toggle(item, body, head); });
    listBox.appendChild(item);
  });

  function abrir(item, body, head) {
    item.classList.add('is-open');
    head.setAttribute('aria-expanded', 'true');
    body.style.maxHeight = body.scrollHeight + 'px';
  }
  function cerrar(item, body, head) {
    item.classList.remove('is-open');
    head.setAttribute('aria-expanded', 'false');
    body.style.maxHeight = '';
  }
  function toggle(item, body, head) {
    if (item.classList.contains('is-open')) { cerrar(item, body, head); return; }
    // Acordeón: cerrar los demás
    listBox.querySelectorAll('.modF-acc-item.is-open').forEach(function(otro) {
      cerrar(otro, otro.querySelector('.modF-acc-body'), otro.querySelector('.modF-acc-head'));
    });
    abrir(item, body, head);
  }

  function aplicarFiltro() {
    filtersBox.querySelectorAll('.modF-filter').forEach(function(btn) {
      var v = btn.getAttribute('data-veredicto');
      btn.classList.toggle('is-active', activo === v);
      btn.classList.toggle('is-dim', activo !== null && activo !== v);
    });
    listBox.querySelectorAll('.modF-acc-item').forEach(function(item) {
      var v = item.getAttribute('data-veredicto');
      var visible = (activo === null || activo === v);
      item.style.display = visible ? '' : 'none';
      if (!visible && item.classList.contains('is-open')) {
        cerrar(item, item.querySelector('.modF-acc-body'), item.querySelector('.modF-acc-head'));
      }
    });
    // Abrir por defecto el primer acordeón visible
    listBox.querySelectorAll('.modF-acc-item.is-open').forEach(function(otro) {
      cerrar(otro, otro.querySelector('.modF-acc-body'), otro.querySelector('.modF-acc-head'));
    });
    var visibles = Array.prototype.filter.call(
      listBox.querySelectorAll('.modF-acc-item'),
      function(it) { return it.style.display !== 'none'; }
    );
    if (visibles[0]) abrir(visibles[0], visibles[0].querySelector('.modF-acc-body'), visibles[0].querySelector('.modF-acc-head'));
  }

  // Abrir la primera afirmación por defecto
  var primero = listBox.querySelector('.modF-acc-item');
  if (primero) abrir(primero, primero.querySelector('.modF-acc-body'), primero.querySelector('.modF-acc-head'));

  // Recalcular alturas al redimensionar (por si cambia el ancho del texto)
  window.addEventListener('resize', function() {
    var open = listBox.querySelector('.modF-acc-item.is-open .modF-acc-body');
    if (open) open.style.maxHeight = open.scrollHeight + 'px';
  });
})();
