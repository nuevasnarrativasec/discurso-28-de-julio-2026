/* ═══════════════════════════════════════════════════════════════════
   DISCURSO EN DATA — RENDER DE LOS GRÁFICOS (D3)
   Barras verticales/horizontales con ejes + mapa de red.
   Datos: window.GRAFICOS (js/datos-graficos.js). Requiere D3 v7.
   ═══════════════════════════════════════════════════════════════════ */
(function () {
  if (typeof d3 === 'undefined') { return; }
  var G = window.GRAFICOS || {};
  var FONT = "'Roboto','Helvetica Neue',Arial,sans-serif";
  var AXIS = '#333', GRID = '#e6e1d6', MUTED = '#555';

  function whenVisible(node, cb) {
    if (!('IntersectionObserver' in window)) { cb(); return; }
    var obs = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { cb(); obs.disconnect(); } });
    }, { threshold: 0.2 });
    obs.observe(node);
  }
  function fmt(v, dec) {
    return (dec ? v.toFixed(dec) : Math.round(v).toString());
  }

  var GRAD_SEQ = 0;
  /* Crea un degradé lineal (userSpaceOnUse) y devuelve el fill 'url(#id)'.
     x1,y1 → x2,y2 definen la dirección; stops = array de colores. */
  function makeGradient(svg, x1, y1, x2, y2, stops) {
    var id = 'g-grad-' + (++GRAD_SEQ);
    var lg = svg.append('defs').append('linearGradient')
      .attr('id', id).attr('gradientUnits', 'userSpaceOnUse')
      .attr('x1', x1).attr('y1', y1).attr('x2', x2).attr('y2', y2);
    var n = stops.length;
    stops.forEach(function (c, i) {
      lg.append('stop')
        .attr('offset', (n === 1 ? 0 : (i / (n - 1)) * 100) + '%')
        .attr('stop-color', c);
    });
    return 'url(#' + id + ')';
  }

  /* ── 1) BARRAS VERTICALES ─────────────────────────────────────── */
  function barrasVerticales(box, cfg) {
    if (!cfg || !cfg.datos) return;
    var data = cfg.datos, color = cfg.color || '#2f80b4';
    var W = 760, H = 420;
    var m = { top: 34, right: 20, bottom: 78, left: 60 };
    var iw = W - m.left - m.right, ih = H - m.top - m.bottom;

    var svg = d3.select(box).append('svg')
      .attr('viewBox', '0 0 ' + W + ' ' + H).style('font-family', FONT);
    var g = svg.append('g').attr('transform', 'translate(' + m.left + ',' + m.top + ')');

    var x = d3.scaleBand().domain(data.map(function (d) { return d.label; })).range([0, iw]).padding(0.35);
    var y = d3.scaleLinear().domain([0, d3.max(data, function (d) { return d.valor; })]).nice().range([ih, 0]);

    // Eje Y
    var yAxis = g.append('g').call(d3.axisLeft(y).ticks(8).tickSizeOuter(0));
    yAxis.selectAll('text').attr('fill', MUTED).style('font-size', '12px');
    yAxis.selectAll('.tick line').attr('stroke', GRID);
    yAxis.select('.domain').attr('stroke', AXIS);
    // Título eje Y
    g.append('text')
      .attr('transform', 'rotate(-90)')
      .attr('x', -ih / 2).attr('y', -46)
      .attr('text-anchor', 'middle').attr('fill', MUTED).style('font-size', '13px')
      .text(cfg.ejeY || '');

    // Eje X con labels rotados
    var xAxis = g.append('g').attr('transform', 'translate(0,' + ih + ')').call(d3.axisBottom(x).tickSizeOuter(0));
    xAxis.select('.domain').attr('stroke', AXIS);
    xAxis.selectAll('.tick line').attr('stroke', AXIS);
    xAxis.selectAll('text')
      .attr('fill', '#222').style('font-size', '13px')
      .attr('transform', 'rotate(-25)').attr('text-anchor', 'end').attr('dx', '-4').attr('dy', '8');

    // Relleno: degradé vertical (arriba claro → abajo oscuro) o color plano.
    // Coordenadas en el sistema de 'g' (userSpaceOnUse): y=0 arriba, y=ih abajo.
    var fill = color;
    if (cfg.gradiente && cfg.gradiente.stops) {
      fill = makeGradient(svg, 0, 0, 0, ih, cfg.gradiente.stops);
    }

    // Barras
    var bars = g.selectAll('.g-bar').data(data).join('rect')
      .attr('x', function (d) { return x(d.label); })
      .attr('width', x.bandwidth())
      .attr('y', ih).attr('height', 0).attr('fill', fill);

    // Valores encima
    var vals = g.selectAll('.g-val').data(data).join('text')
      .attr('x', function (d) { return x(d.label) + x.bandwidth() / 2; })
      .attr('y', ih).attr('text-anchor', 'middle')
      .attr('fill', '#111').style('font-size', '14px').style('font-weight', '700')
      .attr('opacity', 0)
      .text(function (d) { return fmt(d.valor, cfg.decimales) + (cfg.sufijo || ''); });

    whenVisible(box, function () {
      bars.transition().duration(900).delay(function (_, i) { return i * 60; })
        .attr('y', function (d) { return y(d.valor); })
        .attr('height', function (d) { return ih - y(d.valor); });
      vals.transition().duration(900).delay(function (_, i) { return i * 60; })
        .attr('y', function (d) { return y(d.valor) - 8; }).attr('opacity', 1);
    });
  }

  /* ── 2) BARRAS HORIZONTALES ───────────────────────────────────── */
  function barrasHorizontales(box, cfg) {
    if (!cfg || !cfg.datos) return;
    var data = cfg.datos.slice().sort(function (a, b) { return b.valor - a.valor; });
    var color = cfg.color || '#2f80b4';
    var rowH = 30;
    var m = { top: 16, right: 60, bottom: 46, left: 366 };
    var W = 1020, ih = data.length * rowH, H = ih + m.top + m.bottom;
    var iw = W - m.left - m.right;

    var svg = d3.select(box).append('svg')
      .attr('viewBox', '0 0 ' + W + ' ' + H).style('font-family', FONT);
    var g = svg.append('g').attr('transform', 'translate(' + m.left + ',' + m.top + ')');

    var y = d3.scaleBand().domain(data.map(function (d) { return d.label; })).range([0, ih]).padding(0.28);
    var x = d3.scaleLinear().domain([0, d3.max(data, function (d) { return d.valor; })]).nice().range([0, iw]);

    // Eje X (abajo) + gridlines
    var xAxis = g.append('g').attr('transform', 'translate(0,' + ih + ')').call(d3.axisBottom(x).ticks(5).tickSizeOuter(0));
    xAxis.select('.domain').attr('stroke', AXIS);
    xAxis.selectAll('.tick line').attr('stroke', AXIS);
    xAxis.selectAll('text').attr('fill', MUTED).style('font-size', '12px');
    // Título eje X
    g.append('text').attr('x', iw / 2).attr('y', ih + 40)
      .attr('text-anchor', 'middle').attr('fill', MUTED).style('font-size', '13px')
      .text(cfg.ejeX || '');

    // Eje Y (labels de categoría)
    var yAxis = g.append('g').call(d3.axisLeft(y).tickSize(0));
    yAxis.select('.domain').remove();
    yAxis.selectAll('text').attr('fill', '#222').style('font-size', '13px');

    // Línea vertical del eje Y
    g.append('line').attr('x1', 0).attr('x2', 0).attr('y1', 0).attr('y2', ih).attr('stroke', AXIS);

    // Relleno: degradé horizontal (izquierda oscuro → derecha claro) o color plano.
    // Coordenadas en el sistema de 'g' (userSpaceOnUse): x=0 izquierda, x=iw derecha.
    var fill = color;
    if (cfg.gradiente && cfg.gradiente.stops) {
      fill = makeGradient(svg, 0, 0, iw, 0, cfg.gradiente.stops);
    }

    // Barras
    var bars = g.selectAll('.g-hbar').data(data).join('rect')
      .attr('x', 0).attr('y', function (d) { return y(d.label); })
      .attr('height', y.bandwidth()).attr('width', 0).attr('fill', fill);

    // Valores al final
    var vals = g.selectAll('.g-hval').data(data).join('text')
      .attr('x', 0).attr('y', function (d) { return y(d.label) + y.bandwidth() / 2; })
      .attr('dy', '0.35em').attr('fill', '#111').style('font-size', '13px').style('font-weight', '600')
      .attr('opacity', 0)
      .text(function (d) { return fmt(d.valor, cfg.decimales) + (cfg.sufijo || ''); });

    whenVisible(box, function () {
      bars.transition().duration(900).delay(function (_, i) { return i * 40; })
        .attr('width', function (d) { return x(d.valor); });
      vals.transition().duration(900).delay(function (_, i) { return i * 40; })
        .attr('x', function (d) { return x(d.valor) + 8; }).attr('opacity', 1);
    });
  }

  /* ── 3) MAPA DE CONEXIONES (D3 force) ─────────────────────────── */
  function red(box, cfg) {
    if (!cfg || !cfg.nodos) return;
    var color = cfg.color || '#2f80b4';
    var nodos = cfg.nodos.map(function (n) { return Object.assign({}, n); });
    var enlaces = cfg.enlaces.map(function (e) { return { source: e.origen, target: e.destino, peso: e.peso || 1 }; });

    var W = box.clientWidth || 900, H = 620;
    var maxVal = d3.max(nodos, function (n) { return n.valor; }) || 1;
    var r = d3.scaleSqrt().domain([0, maxVal]).range([12, 46]);
    var maxPeso = d3.max(enlaces, function (e) { return e.peso; }) || 1;
    var sw = d3.scaleLinear().domain([1, maxPeso]).range([1.5, 7]);

    var svg = d3.select(box).append('svg')
      .attr('class', 'g-net-svg').attr('viewBox', '0 0 ' + W + ' ' + H)
      .attr('width', '100%').attr('height', H).style('font-family', FONT);

    // Relleno de los nodos: degradé lineal diagonal (claro arriba-izq → oscuro
    // abajo-der) o color plano. objectBoundingBox → escala a cada círculo.
    var nodeFill = color;
    if (cfg.gradiente && cfg.gradiente.stops) {
      var rid = 'g-grad-net';
      var rg = svg.append('defs').append('linearGradient')
        .attr('id', rid).attr('x1', 0).attr('y1', 0).attr('x2', 1).attr('y2', 1);
      var ns = cfg.gradiente.stops;
      ns.forEach(function (c, i) {
        rg.append('stop')
          .attr('offset', (ns.length === 1 ? 0 : (i / (ns.length - 1)) * 100) + '%')
          .attr('stop-color', c);
      });
      nodeFill = 'url(#' + rid + ')';
    }

    var link = svg.append('g')
      .attr('stroke', '#b7b1a4').attr('stroke-opacity', 0.85)
      .selectAll('line').data(enlaces).join('line')
      .attr('stroke-width', function (d) { return sw(d.peso); });

    var node = svg.append('g').selectAll('g').data(nodos).join('g').style('cursor', 'grab');

    node.append('circle')
      .attr('r', function (d) { return r(d.valor); })
      .attr('fill', nodeFill).attr('fill-opacity', nodeFill === color ? 0.92 : 1)
      .attr('stroke', '#fff').attr('stroke-width', 1.5);

    var label = node.append('text')
      .attr('class', 'g-net-label')
      .text(function (d) { return d.id; })
      .attr('text-anchor', 'middle')
      .attr('dy', function (d) { return r(d.valor) + 15; })
      .style('font-size', '12.5px').attr('fill', '#222')
      .attr('paint-order', 'stroke').attr('stroke', 'rgba(248,246,241,0.9)').attr('stroke-width', 3.5)
      .attr('stroke-linejoin', 'round');

    // Resaltado de vecinos
    var adj = {};
    enlaces.forEach(function (e) {
      (adj[e.source] = adj[e.source] || {})[e.target] = 1;
      (adj[e.target] = adj[e.target] || {})[e.source] = 1;
    });
    node.on('mouseenter', function (ev, d) {
      node.style('opacity', function (o) { return (o.id === d.id || (adj[d.id] && adj[d.id][o.id])) ? 1 : 0.2; });
      link.style('stroke-opacity', function (l) { return (l.source.id === d.id || l.target.id === d.id) ? 1 : 0.1; })
          .style('stroke', function (l) { return (l.source.id === d.id || l.target.id === d.id) ? color : '#b7b1a4'; });
    }).on('mouseleave', function () {
      node.style('opacity', 1);
      link.style('stroke-opacity', 0.85).style('stroke', '#b7b1a4');
    });

    var sim = d3.forceSimulation(nodos)
      .force('link', d3.forceLink(enlaces).id(function (d) { return d.id; }).distance(150).strength(0.5))
      .force('charge', d3.forceManyBody().strength(-750))
      .force('center', d3.forceCenter(W / 2, H / 2))
      .force('collide', d3.forceCollide().radius(function (d) { return r(d.valor) + 40; }))
      .on('tick', function () {
        node.each(function (d) {
          var rad = r(d.valor);
          // Deja margen para el radio del círculo y para la etiqueta (abajo)
          d.x = Math.max(rad + 12, Math.min(W - rad - 12, d.x));
          d.y = Math.max(rad + 16, Math.min(H - rad - 24, d.y));
        });
        link.attr('x1', function (d) { return d.source.x; }).attr('y1', function (d) { return d.source.y; })
            .attr('x2', function (d) { return d.target.x; }).attr('y2', function (d) { return d.target.y; });
        node.attr('transform', function (d) { return 'translate(' + d.x + ',' + d.y + ')'; });
        // Ancla la etiqueta hacia adentro en los bordes para que no se corte
        label.attr('text-anchor', function (d) {
          return d.x < W * 0.24 ? 'start' : (d.x > W * 0.76 ? 'end' : 'middle');
        });
      });

    node.call(d3.drag()
      .on('start', function (ev, d) { if (!ev.active) sim.alphaTarget(0.3).restart(); d.fx = d.x; d.fy = d.y; })
      .on('drag',  function (ev, d) { d.fx = ev.x; d.fy = ev.y; })
      .on('end',   function (ev, d) { if (!ev.active) sim.alphaTarget(0); d.fx = null; d.fy = null; }));

    var rt;
    window.addEventListener('resize', function () {
      clearTimeout(rt);
      rt = setTimeout(function () {
        W = box.clientWidth || W;
        svg.attr('viewBox', '0 0 ' + W + ' ' + H);
        sim.force('center', d3.forceCenter(W / 2, H / 2)).alpha(0.3).restart();
      }, 200);
    });
  }

  // ── Inicializar ───────────────────────────────────────────────
  var pais = document.getElementById('g-pais');
  var prio = document.getElementById('g-prioridades');
  var conx = document.getElementById('g-conexiones');
  if (pais) barrasVerticales(pais, G.paisImagina);
  if (prio) barrasHorizontales(prio, G.prioridades);
  // El mapa de red se construye (y anima) solo cuando entra al viewport
  if (conx) whenVisible(conx, function () { red(conx, G.conexiones); });
})();
