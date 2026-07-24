/* ═══════════════════════════════════════════════════════════════════
   DISCURSO EN DATA — datos de los gráficos (generado por el Colab)
   ═══════════════════════════════════════════════════════════════════ */
window.GRAFICOS = {
  "paisImagina": {
    "ejeY": "Peso temático (%)",
    "sufijo": "%",
    "decimales": 1,
    "color": "#2f80b4",
    "gradiente": { "dir": "vertical", "stops": ["#3f8ae8", "#1b4fb4", "#0b1a5e"] },
    "datos": [
      {
        "label": "Bienestar",
        "valor": 39.7
      },
      {
        "label": "Desarrollo",
        "valor": 32.3
      },
      {
        "label": "Orden",
        "valor": 10.6
      },
      {
        "label": "Democracia",
        "valor": 10.2
      },
      {
        "label": "Sostenibilidad",
        "valor": 7.2
      }
    ]
  },
  "prioridades": {
    "ejeX": "Menciones detectadas",
    "sufijo": "",
    "decimales": 0,
    "color": "#2f80b4",
    "gradiente": { "dir": "horizontal", "stops": ["#3b1a86", "#6b3fc9", "#a98cf5"] },
    "datos": [
      {
        "label": "Salud y Sistema Sanitario",
        "valor": 156
      },
      {
        "label": "Economía y Crecimiento",
        "valor": 136
      },
      {
        "label": "Inclusión Social, Pobreza y Vivienda",
        "valor": 62
      },
      {
        "label": "Infraestructura, Transporte y Conectividad",
        "valor": 44
      },
      {
        "label": "Gobernabilidad e Institucionalidad Democrática",
        "valor": 43
      },
      {
        "label": "Educación",
        "valor": 41
      },
      {
        "label": "Ciencia, Tecnología e Innovación",
        "valor": 35
      },
      {
        "label": "Justicia y Estado de Derecho",
        "valor": 34
      },
      {
        "label": "Modernización del Estado y Anticorrupción",
        "valor": 27
      },
      {
        "label": "Seguridad Ciudadana y Crimen Organizado",
        "valor": 22
      },
      {
        "label": "Gestión del Riesgo y Resiliencia Climática",
        "valor": 22
      },
      {
        "label": "Ambiente y Sostenibilidad",
        "valor": 20
      },
      {
        "label": "Defensa y Soberanía",
        "valor": 18
      },
      {
        "label": "Agricultura y Desarrollo Rural",
        "valor": 17
      },
      {
        "label": "Energía y Minería",
        "valor": 10
      },
      {
        "label": "Cultura, Identidad y Turismo",
        "valor": 8
      },
      {
        "label": "Relaciones Exteriores",
        "valor": 1
      }
    ]
  },
  "conexiones": {
    "color": "#2f80b4",
    "nodos": [
      {
        "id": "Salud y Sistema Sanitario",
        "valor": 156
      },
      {
        "id": "Economía y Crecimiento",
        "valor": 136
      },
      {
        "id": "Inclusión Social, Pobreza y Vivienda",
        "valor": 62
      },
      {
        "id": "Infraestructura, Transporte y Conectividad",
        "valor": 44
      },
      {
        "id": "Gobernabilidad e Institucionalidad Democrática",
        "valor": 43
      },
      {
        "id": "Educación",
        "valor": 41
      },
      {
        "id": "Ciencia, Tecnología e Innovación",
        "valor": 35
      },
      {
        "id": "Justicia y Estado de Derecho",
        "valor": 34
      },
      {
        "id": "Modernización del Estado y Anticorrupción",
        "valor": 27
      },
      {
        "id": "Seguridad Ciudadana y Crimen Organizado",
        "valor": 22
      },
      {
        "id": "Gestión del Riesgo y Resiliencia Climática",
        "valor": 22
      },
      {
        "id": "Ambiente y Sostenibilidad",
        "valor": 20
      },
      {
        "id": "Defensa y Soberanía",
        "valor": 18
      },
      {
        "id": "Agricultura y Desarrollo Rural",
        "valor": 17
      },
      {
        "id": "Energía y Minería",
        "valor": 10
      },
      {
        "id": "Cultura, Identidad y Turismo",
        "valor": 8
      },
      {
        "id": "Relaciones Exteriores",
        "valor": 1
      }
    ],
    "enlaces": [
      {
        "origen": "Economía y Crecimiento",
        "destino": "Salud y Sistema Sanitario",
        "peso": 8
      },
      {
        "origen": "Educación",
        "destino": "Salud y Sistema Sanitario",
        "peso": 6
      },
      {
        "origen": "Economía y Crecimiento",
        "destino": "Educación",
        "peso": 4
      },
      {
        "origen": "Ambiente y Sostenibilidad",
        "destino": "Economía y Crecimiento",
        "peso": 3
      },
      {
        "origen": "Educación",
        "destino": "Inclusión Social, Pobreza y Vivienda",
        "peso": 3
      },
      {
        "origen": "Defensa y Soberanía",
        "destino": "Salud y Sistema Sanitario",
        "peso": 3
      },
      {
        "origen": "Economía y Crecimiento",
        "destino": "Infraestructura, Transporte y Conectividad",
        "peso": 3
      },
      {
        "origen": "Ciencia, Tecnología e Innovación",
        "destino": "Economía y Crecimiento",
        "peso": 3
      },
      {
        "origen": "Ciencia, Tecnología e Innovación",
        "destino": "Modernización del Estado y Anticorrupción",
        "peso": 3
      },
      {
        "origen": "Economía y Crecimiento",
        "destino": "Energía y Minería",
        "peso": 3
      },
      {
        "origen": "Agricultura y Desarrollo Rural",
        "destino": "Economía y Crecimiento",
        "peso": 3
      },
      {
        "origen": "Gobernabilidad e Institucionalidad Democrática",
        "destino": "Justicia y Estado de Derecho",
        "peso": 2
      },
      {
        "origen": "Educación",
        "destino": "Infraestructura, Transporte y Conectividad",
        "peso": 2
      },
      {
        "origen": "Economía y Crecimiento",
        "destino": "Inclusión Social, Pobreza y Vivienda",
        "peso": 2
      },
      {
        "origen": "Agricultura y Desarrollo Rural",
        "destino": "Infraestructura, Transporte y Conectividad",
        "peso": 2
      },
      {
        "origen": "Energía y Minería",
        "destino": "Seguridad Ciudadana y Crimen Organizado",
        "peso": 2
      },
      {
        "origen": "Defensa y Soberanía",
        "destino": "Seguridad Ciudadana y Crimen Organizado",
        "peso": 2
      },
      {
        "origen": "Ambiente y Sostenibilidad",
        "destino": "Energía y Minería",
        "peso": 2
      },
      {
        "origen": "Gestión del Riesgo y Resiliencia Climática",
        "destino": "Infraestructura, Transporte y Conectividad",
        "peso": 2
      },
      {
        "origen": "Agricultura y Desarrollo Rural",
        "destino": "Gestión del Riesgo y Resiliencia Climática",
        "peso": 2
      }
    ]
  }
};
