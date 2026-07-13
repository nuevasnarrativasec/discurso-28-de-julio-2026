// ═══════════════════════════════════════════════════════════════
//  MÓDULO A — barras de distribución temática
// ═══════════════════════════════════════════════════════════════
(function() {
  const container = document.getElementById('modA-bars');
  if (!container) return;

  DATA.resumen_temas.forEach(function(t) {
    const row = document.createElement('div');
    row.className = 'modA-bar-row';
    row.innerHTML =
      '<div class="modA-bar-label">' +
        '<span class="modA-bar-dot" style="background:' + t.color + '"></span>' +
        t.tema +
      '</div>' +
      '<div class="modA-bar-track">' +
        '<div class="modA-bar-fill" data-pct="' + t.porcentaje + '" style="background:' + t.color + '"></div>' +
      '</div>' +
      '<span class="modA-bar-pct">' + t.porcentaje + '%</span>';
    container.appendChild(row);
  });

  const obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) {
        document.querySelectorAll('.modA-bar-fill').forEach(function(el) {
          el.style.width = el.dataset.pct + '%';
        });
        obs.disconnect();
      }
    });
  }, { threshold: 0.2 });
  obs.observe(container);
})();

