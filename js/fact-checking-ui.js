// ═══════════════════════════════════════════════════════════════
//  MÓDULO F — Viabilidad de promesas: 5 acordeones por calificación
// ═══════════════════════════════════════════════════════════════
(function() {
  var listBox = document.getElementById('modF-acc-list');
  if (!listBox) return;

  var FACTS = (window.FACTS && window.FACTS.length) ? window.FACTS : [];

  // Calificaciones (config editable en fact-checking.js)
  var CALIF = (window.FACT_CALIFICACIONES && window.FACT_CALIFICACIONES.length)
    ? window.FACT_CALIFICACIONES
    : [
        { id: 'viable',           color: 'azul',    label: 'Viable' },
        { id: 'ya-existe',        color: 'ambar',   label: 'Ya existe y no propone algo nuevo' },
        { id: 'no-manos',         color: 'naranja', label: 'No está en sus manos' },
        { id: 'obligacion-legal', color: 'rojo',    label: 'Es una obligación legal' },
        { id: 'inviable',         color: 'granate', label: 'Inviable' }
      ];

  function escapeHtml(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  // Compatibilidad: la calificación puede venir en 'calificacion' o 'veredicto'
  function califOf(f) {
    return String(f.calificacion || f.veredicto || '').toLowerCase();
  }

  // Agrupar promesas por calificación
  var grupos = {};
  CALIF.forEach(function(c) { grupos[c.id] = []; });
  FACTS.forEach(function(f) {
    var id = califOf(f);
    if (grupos[id]) grupos[id].push(f);
  });

  // ── Construir un acordeón por calificación ────────────────
  CALIF.forEach(function(c) {
    var promesas = grupos[c.id] || [];

    var promesasHtml = promesas.map(function(f, idx) {
      var last = (idx === promesas.length - 1);
      return (
        '<article class="modF-prom' + (last ? ' is-last' : '') + '">' +
          (f.tiempo ? '<span class="modF-prom-time">' + escapeHtml(f.tiempo) + '</span>' : '') +
          '<h4 class="modF-prom-title">' + escapeHtml(f.titulo || f.afirmacion || '') + '</h4>' +
          '<p class="modF-prom-desc">' + escapeHtml(f.descripcion || '') + '</p>' +
          (f.enlace
            ? '<a class="modF-prom-link" href="' + escapeHtml(f.enlace).replace(/"/g, '&quot;') + '"' +
              ' target="_blank" rel="noopener noreferrer">' +
              escapeHtml(f.enlace_texto || 'Leer el análisis completo') +
              '<span class="modF-prom-link-arrow" aria-hidden="true">→</span></a>'
            : '') +
        '</article>'
      );
    }).join('');

    var vacio = '<p class="modF-acc-empty">Sin promesas registradas en esta categoría.</p>';

    var item = document.createElement('div');
    item.className = 'modF-acc-item ' + c.color;
    item.setAttribute('data-calif', c.id);
    item.innerHTML =
      '<button class="modF-acc-head" type="button" aria-expanded="false">' +
        '<span class="modF-acc-label">' + escapeHtml(c.label) + '</span>' +
        '<span class="modF-acc-count">' + promesas.length + '</span>' +
        '<span class="modF-acc-toggle" aria-hidden="true"></span>' +
      '</button>' +
      '<div class="modF-acc-body"><div class="modF-acc-body-inner">' +
        (promesas.length ? promesasHtml : vacio) +
      '</div></div>';

    var head = item.querySelector('.modF-acc-head');
    var body = item.querySelector('.modF-acc-body');
    head.addEventListener('click', function() { toggle(item, body, head); });
    listBox.appendChild(item);
  });

  // ── Mecánica de apertura / cierre ─────────────────────────
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

  // Abrir la primera calificación con contenido
  var primero = Array.prototype.filter.call(
    listBox.querySelectorAll('.modF-acc-item'),
    function(it) { return !it.querySelector('.modF-acc-empty'); }
  )[0] || listBox.querySelector('.modF-acc-item');
  if (primero) {
    abrir(primero, primero.querySelector('.modF-acc-body'), primero.querySelector('.modF-acc-head'));
  }

  // Recalcular altura del abierto al redimensionar
  window.addEventListener('resize', function() {
    var open = listBox.querySelector('.modF-acc-item.is-open .modF-acc-body');
    if (open) open.style.maxHeight = open.scrollHeight + 'px';
  });
})();
