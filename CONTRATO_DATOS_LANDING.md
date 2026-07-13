# Contrato de datos de la landing

La landing consume **4 archivos de datos JS**. El Colab optimizado debe emitir estos
archivos (o JSON que mapee 1:1 a ellos). Los tres primeros hoy están con datos de
prueba; el cuarto (gráficos) ya coincide con la salida editorial del Colab actual.

---

## 1. `js/datos-discurso.js` → `const DATA`  ⚠️ REQUIERE AUDIO

Es el corazón de la landing: el **timeline interactivo con reproducción de audio**.
Hoy el Colab NO lo genera (trabaja solo sobre `texto_limpio.txt`, sin tiempos).

```js
const DATA = {
  meta: {
    titulo: "Mensaje a la Nación — 28 de julio de 2026",
    duracion_total_seg: 6636,          // int, duración del audio en segundos
    duracion_total_fmt: "110:35",      // "MM:SS" o "H:MM:SS"
    procesado: "2026-07-13T18:54:00"   // ISO
  },
  resumen_temas: [                     // un objeto por tema (los 11 de la tabla)
    { tema: "Otros", porcentaje: 41.5, duracion_seg: 2756, color: "#666" },
    // ...
  ],
  bloques: [                           // ~200-240 segmentos consecutivos
    {
      id: 0,                           // int correlativo 0..n
      tema: "Democracia e Instituciones", // uno de los 11 temas
      inicio: 1.3,                     // segundos (float)
      fin: 167.5,                      // segundos (float)
      inicio_fmt: "00:01",
      fin_fmt: "00:27",
      duracion_seg: 166.2,
      extracto: "Señora Presidenta del Congreso…",  // texto del segmento
      color: "#7f8c8d",                // color del tema (tabla)
      eventos: [                       // 0..n marcadores dentro del bloque
        { tipo: "mencion_regional", descripcion: "Menciona: Ica" },
        { tipo: "cambio_tema",      descripcion: "De Anticorrupción → Democracia e Instituciones" }
      ]
    }
    // ...
  ]
};
```

**`eventos[].tipo`** debe ser uno de: `cambio_tema`, `mencion_regional`, `cifra`, `anuncio`.

**Taxonomía de 11 temas + colores** (distinta a los 17 ejes de los gráficos — mantener EXACTA):

| tema | color |
|---|---|
| Otros | `#666` |
| Regiones | `#16a085` |
| Economía | `#1a1a2e` |
| Democracia e Instituciones | `#7f8c8d` |
| Infraestructura | `#8e44ad` |
| Educación | `#27ae60` |
| Seguridad | `#c0392b` |
| Política Exterior | `#2c3e50` |
| Salud | `#2980b9` |
| Agricultura | `#d35400` |
| Anticorrupción | `#e67e22` |

**De dónde sale:** transcripción del audio **con marcas de tiempo** (p. ej. Whisper
`word`/`segment timestamps`) → segmentación temática por ventanas de tiempo usando los
diccionarios de los 11 temas → detección de eventos (cambios de tema, menciones de
regiones, cifras, anuncios). **Sin el archivo de audio esto no se puede generar.**

---

## 2. `js/momentos.js` → `window.MOMENTOS`  (5 momentos clave)

```js
window.MOMENTOS = [
  {
    tiempo: "00:01 — 02:46",          // rango "MM:SS — MM:SS"
    titulo: "Apertura y balance del primer año",
    descripcion: "…",
    cita: "…",                         // párrafo grande citado
    resaltar: "…",                     // subcadena EXACTA de 'cita' a resaltar ('' = nada)
    audio: "audio/momento-1.mp3",      // ruta a clip (opcional)
    inicio_seg: 1                      // int, para saltar en el reproductor
  }
  // 5 en total
]
```

**De dónde sale:** selección editorial de 5 momentos; el Colab puede proponerlos a
partir de los bloques (los de mayor duración o con anuncios/cifras), pero el texto
`titulo`/`descripcion` conviene curarlo. Requiere los tiempos → depende del audio.

---

## 3. `js/fact-checking.js` → `window.FACT_CALIFICACIONES` + `window.FACTS`

```js
window.FACT_CALIFICACIONES = [        // FIJO, no cambia por discurso
  { id: "verdadero", color: "verde",   label: "Verdadero", desc: "…" },
  { id: "enganoso",  color: "naranja", label: "Engañoso",  desc: "…" },
  { id: "falso",     color: "rojo",    label: "Falso",     desc: "…" }
];

window.FACTS = [
  {
    tiempo: "18:30",
    afirmacion: "El PBI creció 4.5% en el último año",
    veredicto: "verdadero",            // uno de los id de arriba
    descripcion: "…",                  // el análisis
    enlace: "https://…",               // opcional: nota externa
    enlace_texto: "Leer el análisis completo"  // opcional
  }
  // ...
]
```

**De dónde sale:** es **fact-checking editorial/humano**, no estadístico. El Colab puede
**pre-extraer afirmaciones candidatas** (frases con cifras/metas — ya tienes
`metas_cuantificables.csv`) y dejarlas con `veredicto` vacío para que un editor lo complete.

---

## 4. `js/datos-graficos.js` → `window.GRAFICOS`  ✅ YA MAPEA con el Colab actual

```js
window.GRAFICOS = {
  paisImagina: { ejeY:"Peso temático (%)", sufijo:"%", decimales:1, color:"#2f80b4",
                 datos:[ {label:"Bienestar", valor:39.7}, … ] },   // ← macrovisiones (peso_pct)
  prioridades: { ejeX:"Menciones detectadas", sufijo:"", decimales:0, color:"#2f80b4",
                 datos:[ {label:"Salud y Sistema Sanitario", valor:156}, … ] }, // ← temas_17_ejes (menciones)
  conexiones:  { color:"#2f80b4",
                 nodos:[ {id:"Economía y Crecimiento", valor:136}, … ],          // ← temas (menciones)
                 enlaces:[ {origen:"…", destino:"…", peso:8}, … ] }              // ← conexiones_tematicas (coocurrencias)
};
```

Estos tres salen directo de: `macrovisiones_pais_que_imagina.csv`, `temas_17_ejes.csv`
y `conexiones_tematicas.csv`.

---

## Resumen: qué le falta al Colab actual

1. **Ingerir el AUDIO** y transcribir **con timestamps** (Whisper u otro) — es el
   requisito bloqueante para el timeline, los momentos y los tiempos del fact-checking.
2. **Segmentación temática temporal** con la **taxonomía de 11 temas** (la de colores),
   además de los 17 ejes que ya calcula para los gráficos.
3. **Detección de eventos** por bloque: `cambio_tema`, `mencion_regional`, `cifra`, `anuncio`.
4. **Emitir los 4 archivos** (`datos-discurso.js`, `momentos.js`, `fact-checking.js`,
   `datos-graficos.js`) o sus JSON equivalentes, listos para reemplazar.
