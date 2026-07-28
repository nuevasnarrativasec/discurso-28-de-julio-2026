/* ═══════════════════════════════════════════════════════════════════
   DISCURSO EN DATA — datos de los gráficos (análisis PDF 2026)
   ═══════════════════════════════════════════════════════════════════ */
window.GRAFICOS = {
  "paisImagina": {
    "ejeY": "Peso temático (%)",
    "sufijo": "%",
    "decimales": 1,
    "color": "#2f80b4",
    "gradiente": {
      "dir": "vertical",
      "stops": [
        "#4fa6f0",
        "#2c62b6",
        "#0b1a5e"
      ]
    },
    "datos": [
      {
        "label": "Desarrollo",
        "valor": 43.1
      },
      {
        "label": "Bienestar",
        "valor": 21.1
      },
      {
        "label": "Orden",
        "valor": 15.8
      },
      {
        "label": "Democracia",
        "valor": 15.3
      },
      {
        "label": "Sostenibilidad",
        "valor": 4.8
      }
    ]
  },
  "prioridades": {
    "ejeX": "Menciones detectadas",
    "sufijo": "",
    "decimales": 0,
    "color": "#2f80b4",
    "gradiente": {
      "dir": "horizontal",
      "stops": [
        "#32572f",
        "#5b9856",
        "#8eec87"
      ]
    },
    "datos": [
      {
        "label": "Economía y Crecimiento",
        "valor": 52
      },
      {
        "label": "Infraestructura, Transporte y Conectividad",
        "valor": 29
      },
      {
        "label": "Inclusión Social, Pobreza y Vivienda",
        "valor": 21
      },
      {
        "label": "Seguridad Ciudadana y Crimen Organizado",
        "valor": 20
      },
      {
        "label": "Gobernabilidad e Institucionalidad Democrática",
        "valor": 14
      },
      {
        "label": "Modernización del Estado y Anticorrupción",
        "valor": 14
      },
      {
        "label": "Justicia y Estado de Derecho",
        "valor": 12
      },
      {
        "label": "Educación",
        "valor": 10
      },
      {
        "label": "Agricultura y Desarrollo Rural",
        "valor": 8
      },
      {
        "label": "Gestión del Riesgo y Resiliencia Climática",
        "valor": 7
      },
      {
        "label": "Salud y Sistema Sanitario",
        "valor": 5
      },
      {
        "label": "Ciencia, Tecnología e Innovación",
        "valor": 5
      },
      {
        "label": "Energía y Minería",
        "valor": 4
      },
      {
        "label": "Relaciones Exteriores",
        "valor": 4
      },
      {
        "label": "Ambiente y Sostenibilidad",
        "valor": 3
      },
      {
        "label": "Defensa y Soberanía",
        "valor": 1
      }
    ]
  },
  "conexiones": {
    "color": "#2f80b4",
    "gradiente": {
      "dir": "linear",
      "stops": [
        "#4f93e6",
        "#2360bf",
        "#0c2a78"
      ]
    },
    "nodos": [
      {
        "id": "Economía y Crecimiento",
        "valor": 52
      },
      {
        "id": "Infraestructura, Transporte y Conectividad",
        "valor": 29
      },
      {
        "id": "Inclusión Social, Pobreza y Vivienda",
        "valor": 21
      },
      {
        "id": "Seguridad Ciudadana y Crimen Organizado",
        "valor": 20
      },
      {
        "id": "Gobernabilidad e Institucionalidad Democrática",
        "valor": 14
      },
      {
        "id": "Modernización del Estado y Anticorrupción",
        "valor": 14
      },
      {
        "id": "Justicia y Estado de Derecho",
        "valor": 12
      },
      {
        "id": "Educación",
        "valor": 10
      },
      {
        "id": "Agricultura y Desarrollo Rural",
        "valor": 8
      },
      {
        "id": "Gestión del Riesgo y Resiliencia Climática",
        "valor": 7
      },
      {
        "id": "Salud y Sistema Sanitario",
        "valor": 5
      },
      {
        "id": "Ciencia, Tecnología e Innovación",
        "valor": 5
      },
      {
        "id": "Energía y Minería",
        "valor": 4
      },
      {
        "id": "Relaciones Exteriores",
        "valor": 4
      },
      {
        "id": "Ambiente y Sostenibilidad",
        "valor": 3
      },
      {
        "id": "Defensa y Soberanía",
        "valor": 1
      }
    ],
    "enlaces": [
      {
        "origen": "Economía y Crecimiento",
        "destino": "Justicia y Estado de Derecho",
        "peso": 2
      },
      {
        "origen": "Economía y Crecimiento",
        "destino": "Relaciones Exteriores",
        "peso": 2
      },
      {
        "origen": "Energía y Minería",
        "destino": "Seguridad Ciudadana y Crimen Organizado",
        "peso": 2
      },
      {
        "origen": "Infraestructura, Transporte y Conectividad",
        "destino": "Modernización del Estado y Anticorrupción",
        "peso": 1
      },
      {
        "origen": "Gestión del Riesgo y Resiliencia Climática",
        "destino": "Inclusión Social, Pobreza y Vivienda",
        "peso": 1
      },
      {
        "origen": "Agricultura y Desarrollo Rural",
        "destino": "Infraestructura, Transporte y Conectividad",
        "peso": 1
      },
      {
        "origen": "Educación",
        "destino": "Infraestructura, Transporte y Conectividad",
        "peso": 1
      },
      {
        "origen": "Defensa y Soberanía",
        "destino": "Gestión del Riesgo y Resiliencia Climática",
        "peso": 1
      },
      {
        "origen": "Energía y Minería",
        "destino": "Infraestructura, Transporte y Conectividad",
        "peso": 1
      },
      {
        "origen": "Justicia y Estado de Derecho",
        "destino": "Seguridad Ciudadana y Crimen Organizado",
        "peso": 1
      },
      {
        "origen": "Ambiente y Sostenibilidad",
        "destino": "Economía y Crecimiento",
        "peso": 1
      },
      {
        "origen": "Ambiente y Sostenibilidad",
        "destino": "Justicia y Estado de Derecho",
        "peso": 1
      }
    ]
  }
};
