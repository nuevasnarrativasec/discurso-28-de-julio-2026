// ═══════════════════════════════════════════════════════════════
//  NAV — active link al hacer scroll
// ═══════════════════════════════════════════════════════════════
(function() {
  var sections = ['inicio','resumen','narrativa','timeline','datos','emociones','explorador','verificacion'];
  var links = {};
  sections.forEach(function(id) {
    links[id] = document.querySelector('.nav-link[href="#' + id + '"]');
  });

  function updateNav() {
    var current = 'inicio';
    sections.forEach(function(id) {
      var el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= 80) current = id;
    });
    sections.forEach(function(id) {
      if (links[id]) links[id].classList.toggle('active', id === current);
    });
  }

  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();
})();

