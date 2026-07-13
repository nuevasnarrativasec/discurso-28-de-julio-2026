// ═══════════════════════════════════════════════════════════════
//  MÓDULO 05 — Animación barras de gestos al hacer scroll
// ═══════════════════════════════════════════════════════════════
(function() {
  var perfil = document.getElementById('perfil');
  if (!perfil) return;
  var animated = false;
  var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting && !animated) {
        animated = true;
        document.querySelectorAll('.modE-gesture-fill').forEach(function(el) {
          el.style.width = el.dataset.pct + '%';
        });
        obs.disconnect();
      }
    });
  }, { threshold: 0.2 });
  obs.observe(perfil);
})();

