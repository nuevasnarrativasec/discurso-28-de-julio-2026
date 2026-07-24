/* ═══════════════════════════════════════════════════════════════════
   ANÁLISIS DE VIABILIDAD DE PROMESAS
   ───────────────────────────────────────────────────────────────────
   5 calificaciones (viable, ya-existe, no-manos, obligacion-legal,
   inviable). Cada promesa se asigna a una calificación mediante el
   campo 'calificacion' y admite:
     - tiempo        (opcional)  → marca de tiempo del discurso
     - titulo        (requerido) → título de la promesa (serif)
     - descripcion   (requerido) → análisis / detalle
     - enlace        (opcional)  → URL a nota externa
     - enlace_texto  (opcional)  → texto del enlace
   ═══════════════════════════════════════════════════════════════════ */

/* Definición de las 5 calificaciones (orden = orden de aparición).
   'color' referencia la clase de estilo del acordeón en style.css. */
window.FACT_CALIFICACIONES = [
  {
    "id": "viable",
    "color": "azul",
    "label": "Viable",
    "desc": "Anuncio que puede ejecutarse dentro del período de gobierno con los recursos y el marco normativo existentes."
  },
  {
    "id": "ya-existe",
    "color": "ambar",
    "label": "Ya existe y no propone algo nuevo",
    "desc": "Describe una política, programa o servicio que el Estado ya viene implementando, sin plantear una mejora medible o una meta distinta."
  },
  {
    "id": "no-manos",
    "color": "naranja",
    "label": "No está en sus manos",
    "desc": "Compromiso cuya ejecución recae en otras instituciones del Estado, gobiernos regionales o locales, o poderes distintos al Ejecutivo."
  },
  {
    "id": "obligacion-legal",
    "color": "rojo",
    "label": "Es una obligación legal",
    "desc": "Acción que la normativa vigente ya le impone al Ejecutivo, independientemente de que sea anunciada como novedad."
  },
  {
    "id": "inviable",
    "color": "granate",
    "label": "Inviable",
    "desc": "Compromiso que enfrenta obstáculos legales, presupuestales o institucionales que impiden su realización."
  }
];

/* Promesas analizadas.
   NOTA: contenido de ejemplo (placeholder). Reemplazar por las promesas
   reales manteniendo la estructura de campos. */
window.FACTS = [
  /* ─── VIABLE ─────────────────────────────────────────────── */
  {
    "calificacion": "viable",
    "tiempo": "15:25",
    "titulo": "La inversión extranjera aumentó en un 35%",
    "descripcion": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
    "enlace": "https://elcomercio.pe",
    "enlace_texto": "Ir a la nota"
  },
  {
    "calificacion": "viable",
    "tiempo": "15:25",
    "titulo": "Se han construido 30 hospitales en los últimos dos años",
    "descripcion": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
    "enlace": "https://elcomercio.pe",
    "enlace_texto": "Ir a la nota"
  },
  {
    "calificacion": "viable",
    "tiempo": "15:25",
    "titulo": "Se ampliará la cobertura de agua potable a zonas rurales",
    "descripcion": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
    "enlace": "https://elcomercio.pe",
    "enlace_texto": "Ir a la nota"
  },

  /* ─── YA EXISTE Y NO PROPONE ALGO NUEVO ──────────────────── */
  {
    "calificacion": "ya-existe",
    "tiempo": "22:10",
    "titulo": "Se entregarán frazadas ante las heladas cada invierno",
    "descripcion": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
    "enlace": "https://elcomercio.pe",
    "enlace_texto": "Ir a la nota"
  },
  {
    "calificacion": "ya-existe",
    "tiempo": "24:23",
    "titulo": "Continuarán las visitas domiciliarias a menores de 36 meses",
    "descripcion": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
    "enlace": "https://elcomercio.pe",
    "enlace_texto": "Ir a la nota"
  },

  /* ─── NO ESTÁ EN SUS MANOS ───────────────────────────────── */
  {
    "calificacion": "no-manos",
    "tiempo": "29:27",
    "titulo": "Todos los peruanos estarán afiliados a un seguro de salud",
    "descripcion": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
    "enlace": "https://elcomercio.pe",
    "enlace_texto": "Ir a la nota"
  },
  {
    "calificacion": "no-manos",
    "tiempo": "33:40",
    "titulo": "Se avanzará con el proceso de concesiones de transporte",
    "descripcion": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
    "enlace": "https://elcomercio.pe",
    "enlace_texto": "Ir a la nota"
  },

  /* ─── ES UNA OBLIGACIÓN LEGAL ────────────────────────────── */
  {
    "calificacion": "obligacion-legal",
    "tiempo": "41:53",
    "titulo": "Se garantizará el acceso a la educación a distancia",
    "descripcion": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
    "enlace": "https://elcomercio.pe",
    "enlace_texto": "Ir a la nota"
  },
  {
    "calificacion": "obligacion-legal",
    "tiempo": "49:50",
    "titulo": "Se erradicará la violencia contra la mujer",
    "descripcion": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
    "enlace": "https://elcomercio.pe",
    "enlace_texto": "Ir a la nota"
  },

  /* ─── INVIABLE ───────────────────────────────────────────── */
  {
    "calificacion": "inviable",
    "tiempo": "20:34",
    "titulo": "Se multiplicarán las gestiones para adquirir vacunas",
    "descripcion": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
    "enlace": "https://elcomercio.pe",
    "enlace_texto": "Ir a la nota"
  },
  {
    "calificacion": "inviable",
    "tiempo": "42:28",
    "titulo": "Se incrementarán los beneficios de Beca 18 en 56%",
    "descripcion": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
    "enlace": "https://elcomercio.pe",
    "enlace_texto": "Ir a la nota"
  }
];
