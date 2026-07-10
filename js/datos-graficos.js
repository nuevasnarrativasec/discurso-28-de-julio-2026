/* ═══════════════════════════════════════════════════════════════════
   DISCURSO EN DATA — DATOS DE LOS GRÁFICOS (EDITABLE)
   ───────────────────────────────────────────────────────────────────
   Tres gráficos:
     paisImagina  → barras verticales   (eje Y: 'ejeY')
     prioridades  → barras horizontales (eje X: 'ejeX')
     conexiones   → mapa de red (D3)

   Reglas: no borres comas, llaves {} ni corchetes []. Apóstrofo → \'
   ═══════════════════════════════════════════════════════════════════ */

window.GRAFICOS = {

  /* ── 1) Barras verticales ───────────────────────────────────────── */
  paisImagina: {
    ejeY:   'Peso temático (%)',
    sufijo: '%',
    decimales: 1,
    color:  '#2f80b4',
    datos: [
      { label: 'Desarrollo',     valor: 38.0 },
      { label: 'Bienestar',      valor: 31.0 },
      { label: 'Democracia',     valor: 11.5 },
      { label: 'Orden',          valor: 10.1 },
      { label: 'Sostenibilidad', valor: 9.4  }
    ]
  },

  /* ── 2) Barras horizontales ─────────────────────────────────────── */
  prioridades: {
    ejeX:   'Menciones detectadas',
    sufijo: '',
    decimales: 0,
    color:  '#2f80b4',
    datos: [
      { label: 'Economía y Crecimiento',                  valor: 217 },
      { label: 'Infraestructura, Transporte y Conectividad', valor: 138 },
      { label: 'Salud y Sistema Sanitario',               valor: 135 },
      { label: 'Educación',                               valor: 83  },
      { label: 'Inclusión Social, Pobreza y Vivienda',    valor: 76  },
      { label: 'Gobernabilidad e Institucionalidad Democrática', valor: 66 },
      { label: 'Gestión del Riesgo y Resiliencia Climática', valor: 64 },
      { label: 'Agricultura y Desarrollo Rural',          valor: 58  },
      { label: 'Justicia y Estado de Derecho',            valor: 52  },
      { label: 'Energía y Minería',                       valor: 45  },
      { label: 'Modernización del Estado y Anticorrupción', valor: 42 },
      { label: 'Seguridad Ciudadana y Crimen Organizado', valor: 32  },
      { label: 'Cultura, Identidad y Turismo',            valor: 32  },
      { label: 'Ciencia, Tecnología e Innovación',        valor: 31  },
      { label: 'Defensa y Soberanía',                     valor: 30  },
      { label: 'Relaciones Exteriores',                   valor: 22  },
      { label: 'Ambiente y Sostenibilidad',               valor: 11  }
    ]
  },

  /* ── 3) Mapa de conexiones (red D3) ─────────────────────────────── */
  conexiones: {
    color: '#2f80b4',
    nodos: [
      { id: 'Economía y Crecimiento',                  valor: 217 },
      { id: 'Infraestructura, Transporte y Conectividad', valor: 138 },
      { id: 'Salud y Sistema Sanitario',               valor: 135 },
      { id: 'Educación',                               valor: 83  },
      { id: 'Inclusión Social, Pobreza y Vivienda',    valor: 76  },
      { id: 'Gobernabilidad e Institucionalidad Democrática', valor: 66 },
      { id: 'Gestión del Riesgo y Resiliencia Climática', valor: 64 },
      { id: 'Agricultura y Desarrollo Rural',          valor: 58  },
      { id: 'Justicia y Estado de Derecho',            valor: 52  },
      { id: 'Energía y Minería',                       valor: 45  },
      { id: 'Modernización del Estado y Anticorrupción', valor: 42 },
      { id: 'Seguridad Ciudadana y Crimen Organizado', valor: 32  },
      { id: 'Cultura, Identidad y Turismo',            valor: 32  },
      { id: 'Ciencia, Tecnología e Innovación',        valor: 31  },
      { id: 'Defensa y Soberanía',                     valor: 30  },
      { id: 'Relaciones Exteriores',                   valor: 22  },
      { id: 'Ambiente y Sostenibilidad',               valor: 11  }
    ],
    enlaces: [
      { origen: 'Infraestructura, Transporte y Conectividad', destino: 'Economía y Crecimiento', peso: 8 },
      { origen: 'Justicia y Estado de Derecho', destino: 'Infraestructura, Transporte y Conectividad', peso: 6 },
      { origen: 'Gobernabilidad e Institucionalidad Democrática', destino: 'Justicia y Estado de Derecho', peso: 6 },
      { origen: 'Ciencia, Tecnología e Innovación', destino: 'Infraestructura, Transporte y Conectividad', peso: 3 },
      { origen: 'Infraestructura, Transporte y Conectividad', destino: 'Educación', peso: 4 },
      { origen: 'Infraestructura, Transporte y Conectividad', destino: 'Salud y Sistema Sanitario', peso: 4 },
      { origen: 'Salud y Sistema Sanitario', destino: 'Educación', peso: 4 },
      { origen: 'Economía y Crecimiento', destino: 'Salud y Sistema Sanitario', peso: 5 },
      { origen: 'Ambiente y Sostenibilidad', destino: 'Agricultura y Desarrollo Rural', peso: 3 },
      { origen: 'Agricultura y Desarrollo Rural', destino: 'Economía y Crecimiento', peso: 5 },
      { origen: 'Economía y Crecimiento', destino: 'Inclusión Social, Pobreza y Vivienda', peso: 5 },
      { origen: 'Inclusión Social, Pobreza y Vivienda', destino: 'Gestión del Riesgo y Resiliencia Climática', peso: 4 },
      { origen: 'Economía y Crecimiento', destino: 'Gestión del Riesgo y Resiliencia Climática', peso: 4 },
      { origen: 'Gestión del Riesgo y Resiliencia Climática', destino: 'Seguridad Ciudadana y Crimen Organizado', peso: 3 },
      { origen: 'Economía y Crecimiento', destino: 'Energía y Minería', peso: 4 },
      { origen: 'Economía y Crecimiento', destino: 'Modernización del Estado y Anticorrupción', peso: 4 },
      { origen: 'Economía y Crecimiento', destino: 'Defensa y Soberanía', peso: 3 }
    ]
    /* Nodos sin enlaces (aislados): 'Cultura, Identidad y Turismo' y
       'Relaciones Exteriores' — igual que en la referencia. */
  }

};
