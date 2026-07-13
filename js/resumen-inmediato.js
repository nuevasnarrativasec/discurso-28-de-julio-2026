// ═══════════════════════════════════════════════════════════════
//  RESUMEN INMEDIATO — rellena las métricas desde los datos
//  Fuentes: DATA (datos-discurso.js) + window.RESUMEN (datos-resumen.js)
//  Si window.RESUMEN no existe, deja los valores del HTML (palabras,
//  referencias temporales y regiones) y solo actualiza lo derivable de DATA.
// ═══════════════════════════════════════════════════════════════
(function () {
  var metrics = document.querySelector('.rz-metrics');
  if (!metrics) return;

  var D = (typeof DATA !== 'undefined') ? DATA : null;
  var R = (typeof window.RESUMEN !== 'undefined') ? window.RESUMEN : null;

  // ── 1) Duración ────────────────────────────────────────────────
  if (D && D.meta) {
    var seg = D.meta.duracion_total_seg || 0;
    var h = Math.floor(seg / 3600);
    var m = Math.round((seg % 3600) / 60);
    var txt = h > 0 ? (h + 'h' + (m < 10 ? '0' + m : m) + 'm') : (m + 'm');
    var donut = metrics.querySelector('.rz-donut-val');
    if (donut) donut.textContent = txt;
  }

  // ── 2) Temas → editable a mano en el HTML (.rz-bignum) ─────────
  //    (intencionalmente NO se toca desde JS: edítalo en el HTML)

  // ── 3) Número de palabras (bar en escala logarítmica) ──────────
  if (R && typeof R.palabras === 'number') {
    var wc = metrics.querySelector('.rz-wc-num');
    if (wc) wc.innerHTML = R.palabras.toLocaleString('es-PE') + ' <span>palabras</span>';
    var fill = metrics.querySelector('.rz-wc-fill');
    if (fill) {
      var lo = Math.log(100), hi = Math.log(20000);
      var frac = (Math.log(Math.max(100, R.palabras)) - lo) / (hi - lo);
      fill.style.width = Math.max(0, Math.min(1, frac)) * 100 + '%';
    }
  }

  // ── 4) Referencias temporales (Pasado / Presente / Futuro) ─────
  if (R && R.orientacion_temporal) {
    var ot = R.orientacion_temporal;
    var total = (ot.pasado || 0) + (ot.presente || 0) + (ot.futuro || 0);
    var pct = function (v) { return total ? Math.round(v / total * 100) : 0; };
    var vals = { 'Pasado': pct(ot.pasado || 0), 'Presente': pct(ot.presente || 0), 'Futuro': pct(ot.futuro || 0) };
    metrics.querySelectorAll('.rz-ref-row').forEach(function (row) {
      var name = (row.querySelector('.rz-ref-name') || {}).textContent;
      if (!(name in vals)) return;
      var p = vals[name];
      var pctEl = row.querySelector('.rz-ref-pct');
      if (pctEl) pctEl.textContent = p + '%';
      var f = row.querySelector('.rz-ref-fill');
      if (f) { f.dataset.pct = p; f.style.width = p + '%'; }
    });
  }

  // ── 5) Mención a regiones (mapa + lista) ───────────────────────
  var NOMBRE_A_PE = {
    'Amazonas': ['PE-AMA'], 'Áncash': ['PE-ANC'], 'Ancash': ['PE-ANC'],
    'Apurímac': ['PE-APU'], 'Apurimac': ['PE-APU'], 'Arequipa': ['PE-ARE'],
    'Ayacucho': ['PE-AYA'], 'Cajamarca': ['PE-CAJ'], 'Callao': ['PE-CAL'],
    'Cusco': ['PE-CUS'], 'Cuzco': ['PE-CUS'], 'Huancavelica': ['PE-HUV'],
    'Huánuco': ['PE-HUC'], 'Huanuco': ['PE-HUC'], 'Ica': ['PE-ICA'],
    'Junín': ['PE-JUN'], 'Junin': ['PE-JUN'], 'La Libertad': ['PE-LAL'],
    'Lambayeque': ['PE-LAM'], 'Lima': ['PE-LIM', 'PE-LMA'], 'Loreto': ['PE-LOR'],
    'Madre de Dios': ['PE-MDD'], 'Moquegua': ['PE-MOQ'], 'Pasco': ['PE-PAS'],
    'Piura': ['PE-PIU'], 'Puno': ['PE-PUN'], 'San Martín': ['PE-SAM'],
    'San Martin': ['PE-SAM'], 'Tacna': ['PE-TAC'], 'Tumbes': ['PE-TUM'],
    'Ucayali': ['PE-UCA']
  };
  if (R && R.regiones) {
    // Umbrales RELATIVOS a la data del discurso, para que el mapa siempre se
    // vea pintado sin importar la escala absoluta de menciones.
    // Gris = SIN mención (0). Cualquier región con ≥1 mención se pinta:
    // dorado el nivel bajo, azul el alto. Umbral alto relativo al máximo.
    var vals = Object.keys(R.regiones).map(function (k) { return R.regiones[k]; })
                     .filter(function (v) { return v > 0; });
    var maxN = vals.length ? Math.max.apply(null, vals) : 0;
    var t2 = Math.max(2, Math.ceil(maxN / 2));            // umbral alto (azul)
    function claseColor(n) {
      if (n <= 0) return 'is-n';       // sin mención
      return n >= t2 ? 'is-b' : 'is-g'; // ≥1: siempre pintada
    }

    // Actualizar la leyenda acorde a los umbrales
    var setLeg = function (cls, texto) {
      var i = metrics.querySelector('.rz-map-swatch.' + cls);
      if (i && i.parentNode) i.parentNode.innerHTML = '<i class="rz-map-swatch ' + cls + '"></i>' + texto;
    };
    setLeg('is-b', t2 + ' a más');
    setLeg('is-g', (t2 - 1 > 1) ? ('1 a ' + (t2 - 1)) : '1');
    setLeg('is-n', 'Sin mención');

    // Colorear el mapa
    Object.keys(NOMBRE_A_PE).forEach(function (nombre) {
      var n = R.regiones[nombre] || 0;
      NOMBRE_A_PE[nombre].forEach(function (code) {
        var path = document.getElementById(code);
        if (path) {
          path.classList.remove('is-b', 'is-g', 'is-n');
          path.classList.add(claseColor(n));
        }
      });
    });
    // Reconstruir la lista, orden descendente por menciones
    var lista = document.querySelector('.rz-reg-list');
    if (lista) {
      var entradas = Object.keys(R.regiones)
        .map(function (k) { return { nombre: k, n: R.regiones[k] }; })
        .filter(function (e) { return e.n > 0; })
        .sort(function (a, b) { return b.n - a.n; });
      lista.innerHTML = entradas.map(function (e) {
        return '<li class="rz-reg-item"><span class="rz-reg-num">' + e.n +
               '</span><span class="rz-reg-name">' + e.nombre + '</span></li>';
      }).join('');
    }
  }
})();
