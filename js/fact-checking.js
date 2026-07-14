/* ═══════════════════════════════════════════════════════════════════
   FACT-CHECKING — calificaciones fijas + afirmaciones.
   Cada afirmación admite 'enlace' (URL a nota externa) y 'enlace_texto'.
   ═══════════════════════════════════════════════════════════════════ */
window.FACT_CALIFICACIONES = [
  {
    "id": "verdadero",
    "color": "verde",
    "label": "Verdadero",
    "desc": "La afirmación está respaldada por datos oficiales."
  },
  {
    "id": "enganoso",
    "color": "naranja",
    "label": "Engañoso",
    "desc": "Mezcla datos reales con omisiones o imprecisiones que distorsionan su significado."
  },
  {
    "id": "falso",
    "color": "rojo",
    "label": "Falso",
    "desc": "Contradice información verificada."
  }
];

window.FACTS = [
  {
    "tiempo": "10:34",
    "afirmacion": '"Comenzaré por reseñar las acciones realizadas en el marco de la lucha contra la pandemia, así como los esfuerzos realizados por los sectores del Ejecutivo"',
    "veredicto": "verdadero",
    "descripcion": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation ",
    "enlace": "https://elcomercio.pe",
    "enlace_texto": "Ir a la nota"
  },
  {
    "tiempo": "12:01",
    "afirmacion": '"Fuimos uno de los primeros países en tomar esta medida, la cual fue acatada mayoritariamente, lográndose una reducción de hasta el 84% de la movilidad social…"',
    "veredicto": "verdadero",
    "descripcion": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation ",
    "enlace": "https://elcomercio.pe",
    "enlace_texto": "Ir a la nota"
  },
  {
    "tiempo": "15:05",
    "afirmacion": '"en Ayacucho, Puno, Huancavelica, Huango, Cusco, Piura, Pasco, Junín, Lima, San Martín, beneficiando a más de un millón 655 mil peruanos."',
    "veredicto": "enganoso",
    "descripcion": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation ",
    "enlace": "https://elcomercio.pe",
    "enlace_texto": "Ir a la nota"
  },
  {
    "tiempo": "15:18",
    "afirmacion": '"Asimismo, en los próximos meses entrarán en funcionamiento el Hospital de Pacasmayo en La Libertad, el Hospital de Putín en Puno, el Hospital de Chalhuahuacho…"',
    "veredicto": "enganoso",
    "descripcion": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation ",
    "enlace": "https://elcomercio.pe",
    "enlace_texto": "Ir a la nota"
  },
  {
    "tiempo": "20:34",
    "afirmacion": '"donación, y distribución de las vacunas contra el COVID. Vamos a multiplicar las gestiones externas en los ámbitos bilateral y multilateral para que el Perú…"',
    "veredicto": "falso",
    "descripcion": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation ",
    "enlace": "https://elcomercio.pe",
    "enlace_texto": "Ir a la nota"
  },
  {
    "tiempo": "24:23",
    "afirmacion": '"Durante la cuarentena hemos seguido con el monitoreo y ya se reiniciaron las visitas domiciliarias a miles de niños menores de 36 meses para prevenir y tratar…"',
    "veredicto": "falso",
    "descripcion": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation ",
    "enlace": "https://elcomercio.pe",
    "enlace_texto": "Ir a la nota"
  },
  {
    "tiempo": "29:27",
    "afirmacion": '"millones de afiliados a nivel nacional. Anuncio que para julio del dos mil veintiuno, todas las peruanas y peruanos estarán afiliados al"',
    "veredicto": "enganoso",
    "descripcion": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation ",
    "enlace": "https://elcomercio.pe",
    "enlace_texto": "Ir a la nota"
  },
  {
    "tiempo": "32:21",
    "afirmacion": '"sistema de salud. Seamos hidalgos y objetivos en este momento. Durante décadas la salud no ha sido una prioridad. Durante décadas la salud no ha estado en la…"',
    "veredicto": "falso",
    "descripcion": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation ",
    "enlace": "https://elcomercio.pe",
    "enlace_texto": "Ir a la nota"
  },
  {
    "tiempo": "41:53",
    "afirmacion": '"territorio nacional. A la fecha, el 96% de las familias peruanas han reportado que sus hijos acceden a aprendo en casa. Asimismo, para que nuestros jóvenes no…"',
    "veredicto": "falso",
    "descripcion": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation ",
    "enlace": "https://elcomercio.pe",
    "enlace_texto": "Ir a la nota"
  },
  {
    "tiempo": "42:28",
    "afirmacion": '"educación puede cambiar vidas. Hemos incrementado los beneficios de beca 18 en 56%, solo entre el 2019 y 2020, brindándole a nuestros jóvenes de menores…"',
    "veredicto": "falso",
    "descripcion": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation ",
    "enlace": "https://elcomercio.pe",
    "enlace_texto": "Ir a la nota"
  },
  {
    "tiempo": "48:34",
    "afirmacion": '"las inclemencias de las heladas. Por ello, nuestro gobierno presentó una estrategia de entrega periódica de frazadas. Cada vez que viene el invierno, gobiernos…"',
    "veredicto": "falso",
    "descripcion": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation ",
    "enlace": "https://elcomercio.pe",
    "enlace_texto": "Ir a la nota"
  },
  {
    "tiempo": "49:50",
    "afirmacion": '"Sobre la violencia a la mujer, uno de los principales objetivos de mi gestión es desterrar la violencia contra la mujer y erradicar esa cultura machista que…"',
    "veredicto": "falso",
    "descripcion": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation ",
    "enlace": "https://elcomercio.pe",
    "enlace_texto": "Ir a la nota"
  }
];
