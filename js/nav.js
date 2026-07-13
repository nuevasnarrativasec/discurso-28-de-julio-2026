// ═══════════════════════════════════════════════════════════════
//  NAV — active link al hacer scroll + sub-nav móvil autoscroll
// ═══════════════════════════════════════════════════════════════
(function() {
  var sections = ['inicio','resumen','narrativa','timeline','datos','emociones','explorador','verificacion'];
  var subnav = document.querySelector('.mobile-subnav');
  var links = {};
  sections.forEach(function(id) {
    // querySelectorAll: incluye los enlaces del nav superior y los de la sub-nav móvil
    links[id] = document.querySelectorAll('.nav-link[href="#' + id + '"]');
  });

  // Desplaza la sub-nav para dejar el enlace centrado/visible por completo
  function revealInSubnav(link) {
    if (!subnav || !link) return;
    if (subnav.scrollWidth <= subnav.clientWidth) return; // no hay overflow
    var target = link.offsetLeft - (subnav.clientWidth - link.offsetWidth) / 2;
    subnav.scrollTo({ left: Math.max(0, target), behavior: 'smooth' });
  }

  // Al pulsar un enlace parcialmente oculto, la barra se desplaza para mostrarlo
  if (subnav) {
    subnav.querySelectorAll('.nav-link').forEach(function(a) {
      a.addEventListener('click', function() { revealInSubnav(a); });
    });
  }

  var lastCurrent = null;
  function updateNav() {
    var current = 'inicio';
    sections.forEach(function(id) {
      var el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= 80) current = id;
    });
    sections.forEach(function(id) {
      links[id].forEach(function(a) { a.classList.toggle('active', id === current); });
    });
    // Al cambiar de sección, mantener visible el enlace activo de la sub-nav
    if (current !== lastCurrent) {
      lastCurrent = current;
      if (subnav) revealInSubnav(subnav.querySelector('.nav-link[href="#' + current + '"]'));
    }
  }

  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();
})();
