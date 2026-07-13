// ═══════════════════════════════════════════════════════════════
//  HERO — stats dinámicas
// ═══════════════════════════════════════════════════════════════
(function() {
  const totalBloques = DATA.bloques.length;
  const totalEventos = DATA.bloques.reduce((s, b) => s + (b.eventos || []).length, 0);
  const elBloques = document.getElementById('hero-stat-bloques');
  const elEventos = document.getElementById('hero-stat-eventos');
  if (elBloques) elBloques.textContent = totalBloques;
  if (elEventos) elEventos.textContent = totalEventos;
})();

