// ═══════════════════════════════════════════════════════════════
//  MÓDULO A (rediseño) — barras de temas + animaciones al entrar
// ═══════════════════════════════════════════════════════════════
(function() {
  var metrics = document.querySelector('.rz-metrics');
  if (!metrics) return;

  // Distribución del tiempo por tema (barra por tema con % y color propio)
  var barsBox = document.getElementById('rz-theme-bars');
  if (barsBox && typeof DATA !== 'undefined' && DATA.resumen_temas) {
    var temas = DATA.resumen_temas;
    temas.forEach(function(t) {
      var nombre = t.tema.replace('Democracia e Instituciones', 'Democracia');
      var row = document.createElement('div');
      row.className = 'rz-tb-row';
      row.innerHTML =
        '<span class="rz-tb-name">' + nombre + '</span>' +
        '<div class="rz-tb-track">' +
          '<span class="rz-tb-fill" data-w="' + t.porcentaje + '" style="background:' + t.color + '"></span>' +
        '</div>' +
        '<span class="rz-tb-pct">' + t.porcentaje + '%</span>';
      barsBox.appendChild(row);
    });
  }

  function animate() {
    metrics.classList.add('is-in');
    var donut = metrics.querySelector('.rz-donut');
    if (donut) donut.classList.add('is-in');
    metrics.querySelectorAll('.rz-ref-fill').forEach(function(el) {
      el.style.width = (el.dataset.pct || 0) + '%';
    });
    metrics.querySelectorAll('.rz-tb-fill').forEach(function(el) {
      el.style.width = (el.dataset.w || 0) + '%';
    });
    metrics.querySelectorAll('.rz-face-arc').forEach(function(el) {
      var full = el.getTotalLength();
      var dash = parseFloat(el.dataset.dash || 0);
      el.style.strokeDasharray = dash + ' ' + full;
    });
  }

  var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) { animate(); obs.disconnect(); }
    });
  }, { threshold: 0.15 });
  obs.observe(metrics);
})();

