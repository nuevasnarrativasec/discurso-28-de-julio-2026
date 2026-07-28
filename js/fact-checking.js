/* ═══════════════════════════════════════════════════════════════════
   ANÁLISIS DE VIABILIDAD DE PROMESAS
   ───────────────────────────────────────────────────────────────────
   5 calificaciones (viable, ya-existe, no-manos, obligacion-legal,
   inviable). Cada promesa se asigna a una calificación mediante el
   campo 'calificacion' y admite:
     - tiempo        (opcional)  → marca de tiempo del discurso
     - titulo        (requerido) → título de la promesa (serif)
     - descripcion   (requerido) → análisis / detalle
     - fuentes       (opcional)  → arreglo de { texto, url }
                                   se listan una debajo de otra
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
    "label": "Ya existe un mecanismo similar",
    "desc": "Describe una política, programa o servicio que el Estado ya viene implementando, sin plantear una mejora medible o una meta distinta."
  },
  {
    "id": "no-manos",
    "color": "naranja",
    "label": "No depende únicamente del Ejecutivo",
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

/* Promesas analizadas (fuente: análisis editorial de El Comercio). */
window.FACTS = [

  /* ─── VIABLE ─── */
  {
    "calificacion": "viable",
    "titulo": "Implementaremos un sistema logístico de respuesta rápida.",
    "descripcion": "La organización de la capacidad estatal de respuesta como un sistema logístico dedicado es un diseño de gestión nuevo, ejecutable por el Ejecutivo con sus competencias e instituciones actuales: puede disponerse mediante la articulación de Provías, los sectores y el INDECI en el marco del SINAGERD, con maquinaria propia, arrendada o reasignada, y convenios con los gobiernos regionales para las vías de su competencia. No requiere reforma legal previa.",
    "fuentes": [
      { "texto": "INDECI", "url": "https://www.gob.pe/indeci" },
      { "texto": "Ley N.° 32513, Presupuesto 2026", "url": "https://www.mef.gob.pe" }
    ]
  },
  {
    "calificacion": "viable",
    "titulo": "Los agricultores que se vean afectados por el fenómeno climático recibirán asistencia financiera y técnica.",
    "descripcion": "El MIDAGRI puede brindar asistencia técnica y articular ayuda financiera al sector agrario mediante sus programas y entidades adscritas, por lo que no existe un impedimento constitucional para implementarla. En la práctica, la medida ya tiene precedentes en el Estado, como acciones de apoyo a productores afectados por clima y compras/auxilios agrarios anunciados por el propio MIDAGRI; sin embargo, para precisar viabilidad presupuestal se requiere verificar la asignación vigente en la Ley de Presupuesto y su ejecución en Consulta Amigable, datos que no están incluidos en los resultados proporcionados. Si existe saldo o partidas en el pliego del MIDAGRI, podría ejecutarse sin reforma legal; si no, requeriría transferencia de partidas, crédito suplementario o su incorporación en el siguiente presupuesto anual.",
    "fuentes": [
      { "texto": "Andina", "url": "https://andina.pe/agencia/noticia-elecciones-2026-keiko-fujimori-promete-restablecer-programa-de-apoyo-a-los-agricultores-1065839.aspx" },
      { "texto": "El Comercio", "url": "https://elcomercio.pe/politica/keiko-fujimori-emplaza-al-gobierno-de-jose-maria-balcazar-a-comprar-arroz-nacional-ante-paro-agrario-noticia/" },
      { "texto": "El País", "url": "https://elpais.com/america/2026-06-07/las-propuestas-de-keiko-fujimori-para-gobernar-peru-orden-inversion-privada-y-un-choque-tecnologico-contra-la-inseguridad.html" }
    ]
  },
  {
    "calificacion": "viable",
    "titulo": "Fortaleceremos los sistemas de inteligencia para desarticular estas organizaciones desde sus cabecillas y sus estructuras económicas.",
    "descripcion": "El fortalecimiento de los sistemas de inteligencia está dentro de las competencias del Ejecutivo y cuenta con marco institucional vigente: el Decreto Legislativo N.° 1141 regula el Sistema de Inteligencia Nacional bajo la rectoría de la DINI, adscrita a la PCM; la Dirección de Inteligencia del Ministerio del Interior y la DIRIN de la PNP conducen la inteligencia policial contra el crimen organizado; y la UIF-Perú produce inteligencia financiera sobre las estructuras económicas de esas organizaciones. Reforzar capacidades, presupuesto, tecnología y articulación de esos órganos es una decisión de gestión y de asignación de recursos al alcance del gobierno.",
    "fuentes": [
      { "texto": "D. Leg. N.° 1141 — Sistema de Inteligencia Nacional y DINI (SPIJ)", "url": "https://spij.minjus.gob.pe" },
      { "texto": "DINI", "url": "https://www.gob.pe/dini" },
      { "texto": "Ministerio del Interior — PNP", "url": "https://www.gob.pe/mininter" },
      { "texto": "UIF-Perú — SBS", "url": "https://www.sbs.gob.pe" }
    ]
  },
  {
    "calificacion": "viable",
    "titulo": "Instauraremos un sistema permanente de reconocimiento al mérito para el personal policial.",
    "descripcion": "El régimen de la carrera y situación del personal de la PNP ya contempla la evaluación del desempeño, los ascensos por mérito y el otorgamiento de condecoraciones y felicitaciones. Organizar esos mecanismos como un sistema permanente es una medida de gestión al alcance del Ejecutivo, sin requerir reforma legal ni habilitación presupuestal significativa en su componente honorífico.",
    "fuentes": [
      { "texto": "D. Leg. N.° 1149 — Ley de la Carrera y Situación del Personal de la PNP (SPIJ)", "url": "https://spij.minjus.gob.pe" },
      { "texto": "Ministerio del Interior", "url": "https://www.gob.pe/mininter" },
      { "texto": "MEF — Sistema Nacional de Presupuesto", "url": "https://www.mef.gob.pe/contenidos/presu_publ/capacita/guia_sistema_nacional_presupuesto.pdf" }
    ]
  },
  {
    "calificacion": "viable",
    "titulo": "Fortaleceremos y ampliaremos las unidades de flagrancia y emprenderemos una profunda reforma penitenciaria.",
    "descripcion": "La promesa es viable porque el fortalecimiento de las unidades de flagrancia y la reforma del sistema penitenciario forman parte de las competencias del Poder Ejecutivo, a través del Ministerio del Interior, el Ministerio de Justicia y el INPE. Además, las unidades de flagrancia ya existen en el país, por lo que su ampliación no requiere crear una nueva figura jurídica, sino expandir un modelo operativo vigente. En el caso de la reforma penitenciaria, el Ejecutivo puede impulsar cambios administrativos, inversiones en infraestructura y presentar proyectos de ley cuando sean necesarios.",
    "fuentes": [
      { "texto": "Plan de Gobierno 2026–2031: PERÚ CON ORDEN (Fuerza Popular)", "url": "https://fuerzapopular.com.pe/wp-content/uploads/2026/02/Plan-de-Gobierno-Reforzado_V2.pdf" },
      { "texto": "El Peruano", "url": "https://elperuano.pe/noticia/292913-keiko-fujimori-demanda-ciudadana-es-recuperar-el-orden-y-esa-es-nuestra-propuesta" },
      { "texto": "Gestión", "url": "https://gestion.pe/economia/keiko-fujimori-apunta-a-la-presidencia-por-cuarta-vez-sus-propuestas-para-combatir-el-crimen-noticia/" }
    ]
  },
  {
    "calificacion": "viable",
    "titulo": "Emitiremos decretos de urgencia para enfrentar los retos urgentes que nos trae el fenómeno El Niño y la inseguridad ciudadana.",
    "descripcion": "La emisión de decretos de urgencia es una facultad directa del Presidente de la República: el artículo 118, inciso 19, de la Constitución lo autoriza a dictar medidas extraordinarias con fuerza de ley en materia económica y financiera cuando lo exige el interés nacional, con aprobación del Consejo de Ministros y cargo de dar cuenta al Congreso. El anuncio, tal como fue formulado, promete el uso de un instrumento que está íntegramente dentro de las competencias del Ejecutivo, y que en episodios anteriores del fenómeno El Niño se ha empleado para habilitar gasto de emergencia y prevención.",
    "fuentes": [
      { "texto": "Constitución Política del Perú, art. 118, inc. 19 (SPIJ)", "url": "https://spij.minjus.gob.pe" },
      { "texto": "Ley N.° 29158, Orgánica del Poder Ejecutivo", "url": "https://spijweb.minjus.gob.pe/wp-content/uploads/2023/01/Ley-Organica-del-Poder-Ejecutivo-y-Normas-de-Organizacion-y-Funciones.pdf" }
    ]
  },
  {
    "calificacion": "viable",
    "titulo": "Aceleraremos la inversión pública y privada en infraestructura productiva.",
    "descripcion": "El anuncio describe una orientación general de política, no una obra concreta, y el Estado cuenta con los instrumentos para ejecutarla: la inversión pública se gestiona bajo el sistema Invierte.pe; las APP y los proyectos en activos se estructuran a través de ProInversión conforme al Decreto Legislativo N.° 1362; el mecanismo de Obras por Impuestos (Ley N.° 29230) permite canalizar inversión privada en infraestructura pública; y la Autoridad Nacional de Infraestructura tiene el mandato de acelerar la ejecución de proyectos priorizados. Acelerar la inversión es, en consecuencia, ejecutable con el marco vigente; el ritmo dependerá de la priorización presupuestal, la cartera de proyectos con expediente y la capacidad de ejecución de las entidades.",
    "fuentes": [
      { "texto": "MEF — Invierte.pe (Sistema Nacional de Programación Multianual y Gestión de Inversiones)", "url": "https://www.mef.gob.pe/es/inversion-publica-sp-21787" },
      { "texto": "D. Leg. N.° 1362 — marco de APP (SPIJ)", "url": "https://spij.minjus.gob.pe" },
      { "texto": "Ley N.° 29230 — Obras por Impuestos", "url": "https://www.gob.pe/proinversion" },
      { "texto": "ANIN — Autoridad Nacional de Infraestructura", "url": "https://www.gob.pe/anin" },
      { "texto": "Gestión — análisis de la cartera de proyectos anunciada", "url": "https://gestion.pe/economia/keiko-fujimori-tiene-mas-de-100-proyectos-de-infraestructura-entre-sus-promesas-para-su-gobierno-en-peru-son-viables-noticia/" }
    ]
  },
  {
    "calificacion": "viable",
    "titulo": "Expandiremos el acceso al agua potable con plantas de tratamiento y sistemas de distribución.",
    "descripcion": "La expansión del acceso a agua potable está dentro de las competencias y de los instrumentos que el Estado ya opera: el MVCS ejecuta inversiones a través de los programas nacionales de saneamiento urbano y rural, las EPS y Sedapal administran los servicios, y el marco vigente permite financiar infraestructura mediante obra pública, APP y Obras por Impuestos, en línea con las metas de cobertura del Plan Nacional de Saneamiento. El anuncio, formulado sin meta cuantificada, es ejecutable mediante la cartera de proyectos y los programas existentes, siempre que exista asignación suficiente en el pliego sectorial y priorización en la programación multianual de inversiones. No fue posible verificar en esta revisión el monto asignado en la Ley de Presupuesto 2026 al pliego Vivienda ni su ejecución en Consulta Amigable, por lo que la calificación se sustenta en la habilitación normativa e institucional, con la restricción principal en el financiamiento.",
    "fuentes": [
      { "texto": "MVCS — Programa Nacional de Saneamiento Urbano y Programa Nacional de Saneamiento Rural", "url": "https://www.gob.pe/vivienda" },
      { "texto": "Plan Nacional de Saneamiento", "url": "https://www.gob.pe/vivienda" },
      { "texto": "SUNASS — regulación de las EPS", "url": "https://www.gob.pe/sunass" },
      { "texto": "Ley N.° 32513, Presupuesto 2026 — Anexo 5", "url": "https://www.mef.gob.pe" }
    ]
  },
  {
    "calificacion": "viable",
    "titulo": "Impulsaremos sistemas de metro en Arequipa, Piura y Trujillo.",
    "descripcion": "El verbo anunciado es de promoción, no de entrega de obra, y el Ejecutivo cuenta con instrumentos para ejecutarlo: el MTC dispone del programa nacional de transporte urbano sostenible para ciudades del interior, puede financiar los estudios de preinversión, suscribir convenios con las municipalidades provinciales —titulares de la competencia de transporte urbano— y encargar la estructuración de los proyectos a ProInversión bajo la modalidad de APP. La construcción y operación de los sistemas, en cambio, excede largamente un período de gobierno: proyectos comparables, como la Línea 2 del Metro de Lima, llevan más de una década en ejecución, y para Arequipa, Piura y Trujillo no existen estudios definitivos, marco institucional específico ni asignación identificable en la Ley de Presupuesto 2026. No obstante, la magnitud de inversión (miles de millones de soles por sistema), la ausencia de estudios definitivos, la necesidad de articulación con las municipalidades provinciales titulares de la competencia y la falta de partida específica hacen que solo la fase de impulso (estudios, convenios, estructuración) sea realizable en el período; la materialización de los metros trasciende la gestión.",
    "fuentes": [
      { "texto": "MTC — transporte urbano y proyectos de movilidad", "url": "https://www.gob.pe/mtc" },
      { "texto": "Ley Orgánica de Municipalidades, competencia de transporte urbano (SPIJ)", "url": "https://spij.minjus.gob.pe" },
      { "texto": "ProInversión — cartera de APP", "url": "https://www.gob.pe/proinversion" },
      { "texto": "Gestión — análisis de los retos de la propuesta", "url": "https://gestion.pe/economia/keiko-fujimori-propone-metros-para-piura-trujillo-y-arequipa-los-retos-detras-de-la-promesa-del-gobierno-de-fuerza-popular-noticia/" }
    ]
  },
  {
    "calificacion": "viable",
    "titulo": "Reorganizaremos la administración pública para eliminar duplicidades, ordenar competencias y recuperar la eficiencia.",
    "descripcion": "La reorganización administrativa cuenta con habilitación legal vigente y en gran parte está dentro de las facultades del Ejecutivo: la Ley N.° 27658, Marco de Modernización de la Gestión del Estado, permite la fusión de direcciones, programas, organismos y entidades mediante decreto supremo, y la Secretaría de Gestión Pública de la PCM ejerce la rectoría de la modernización, con una Política Nacional de Modernización de la Gestión Pública al 2030 ya aprobada. El límite jurídico es la reestructuración de ministerios: conforme a la Ley Orgánica del Poder Ejecutivo (Ley N.° 29158), estos se crean, fusionan o suprimen por ley, por lo que una reforma de esa profundidad requeriría la aprobación del Congreso.",
    "fuentes": [
      { "texto": "Ley N.° 27658, Marco de Modernización de la Gestión del Estado (SPIJ)", "url": "https://spij.minjus.gob.pe" },
      { "texto": "Ley N.° 29158, Orgánica del Poder Ejecutivo (SPIJ)", "url": "https://spij.minjus.gob.pe" },
      { "texto": "Política Nacional de Modernización de la Gestión Pública al 2030 (D.S. 103-2022-PCM)", "url": "https://www.gob.pe/pcm" },
      { "texto": "Secretaría de Gestión Pública — PCM", "url": "https://www.gob.pe/pcm" }
    ]
  },
  {
    "calificacion": "viable",
    "titulo": "Elevaremos la remuneración mínima vital a 1,300 soles.",
    "descripcion": "La remuneración mínima vital del régimen laboral de la actividad privada se fija por decreto supremo del Ministerio de Trabajo, por lo que elevarla a S/ 1,300 es una facultad directa del Ejecutivo. Existe precedente reciente: el D.S. N.° 006-2024-TR la elevó a S/ 1,130 desde enero de 2025, y el incremento anunciado (alrededor de 15%) es de magnitud comparable a aumentos anteriores. No se identifica obstáculo constitucional ni competencial: la medida requiere un nuevo decreto supremo sustentado en criterios técnicos, económicos y laborales.",
    "fuentes": [
      { "texto": "Gob.pe — valor de la remuneración mínima vital", "url": "https://www.gob.pe/476-valor-remuneracion-minima-vital-sueldo-minimo" },
      { "texto": "D.S. N.° 006-2024-TR — incremento de la RMV a S/ 1,130 (SPIJ)", "url": "https://spij.minjus.gob.pe" },
      { "texto": "MTPE — Consejo Nacional de Trabajo y Promoción del Empleo", "url": "https://www.gob.pe/mtpe" }
    ]
  },
  {
    "calificacion": "viable",
    "titulo": "Durante nuestros primeros cien días reactivaremos PROMYPE, ampliaremos el acceso al crédito a través de COFIDE, fortaleceremos compras MYPerú, e impulsaremos el factoring.",
    "descripcion": "El anuncio fija un plazo de cien días y los cuatro componentes corresponden a instrumentos que ya existen y pueden activarse por decisión del Ejecutivo en ese período: PROMYPE es un programa de apoyo financiero a la Mype creado por el D.S. 134-2006-EF, que opera como línea de crédito del Banco de la Nación a las entidades que financian Mype, por lo que su reactivación es administrativa; la ampliación del crédito vía COFIDE se apoya en el canal ya operativo del programa de garantías creado por la Ley N.° 31658; Compras a MYPErú es un mecanismo estatal existente; y el factoring cuenta con marco legal desde la Ley N.° 30308. Dado que los verbos anunciados son de activación y no fijan una meta cuantificada, el compromiso, tal como fue formulado, es ejecutable dentro del plazo señalado.",
    "fuentes": [
      { "texto": "El País", "url": "https://www.elpais.com.uy/mundo/reordenar-el-gasto-y-atraer-inversiones-los-retos-de-keiko-fujimori-que-asume-hoy-como-presidenta-de-peru" },
      { "texto": "La República", "url": "https://www.larepublica.co/globoeconomia/asi-es-la-formula-de-keiko-fujimori-para-reactivar-la-economia-interna-de-peru-4426027" },
      { "texto": "Infobae Perú", "url": "https://www.infobae.com/peru/2026/06/30/los-primeros-retos-economicos-de-keiko-fujimori-en-su-nuevo-gobierno-deficit-fiscal-informalidad-empleo-y-crecimiento/" }
    ]
  },
  {
    "calificacion": "viable",
    "titulo": "Impulsaremos nuestros acuerdos de integración en la región como la Alianza del Pacífico para incrementar la competitividad de nuestras economías en los mercados globales.",
    "descripcion": "La conducción de la política exterior es una facultad directa del Presidente de la República (Constitución, art. 118, inc. 11), ejercida a través de la Cancillería y, en materia comercial, del MINCETUR. El Perú es miembro fundador de la Alianza del Pacífico y participa en sus órganos de decisión, incluida la presidencia pro tempore rotativa, por lo que impulsar la agenda del bloque —proponer iniciativas, promover la profundización comercial, coordinar posiciones— es una acción ejecutable con las competencias e instituciones vigentes, sin requerir habilitación legal ni presupuestal extraordinaria.",
    "fuentes": [
      { "texto": "Constitución Política del Perú, art. 118, inc. 11 (SPIJ)", "url": "https://spij.minjus.gob.pe" },
      { "texto": "Ministerio de Relaciones Exteriores", "url": "https://www.gob.pe/rree" },
      { "texto": "MINCETUR", "url": "https://www.gob.pe/mincetur" },
      { "texto": "Alianza del Pacífico", "url": "https://alianzapacifico.net" }
    ]
  },

  /* ─── YA EXISTE Y NO PROPONE ALGO NUEVO ─── */
  {
    "calificacion": "ya-existe",
    "titulo": "Vamos a establecer canales de diálogo con los gobiernos regionales y municipales para incorporar mecanismos eficientes de trabajo coordinado.",
    "descripcion": "El Ejecutivo ya cuenta con competencias y mecanismos de coordinación intergubernamental: la PCM dirige la articulación del Poder Ejecutivo con los gobiernos regionales y locales, y la Ley Orgánica tanto de Gobiernos Regionales como las municipales  prevén instancias de coordinación como los espacios GORE-Ejecutivo. El anuncio describe una práctica institucional vigente y no especifica un mecanismo, producto o meta distintos de los existentes.",
    "fuentes": [
      { "texto": "PCM — competencias del Ejecutivo y coordinación intergubernamental", "url": "https://pcm.gob.pe" },
      { "texto": "Ley Orgánica de Gobiernos Regionales y Ley Orgánica de Municipalidades (SPIJ)", "url": "https://spij.minjus.gob.pe" },
      { "texto": "Ley N.° 32513, Presupuesto del Sector Público 2026 — Anexo 5", "url": "https://www.mef.gob.pe" }
    ]
  },
  {
    "calificacion": "ya-existe",
    "titulo": "Iniciaremos de inmediato la descolmatación masiva de los ríos, la construcción de defensas ribereñas.",
    "descripcion": "La descolmatación de ríos y la construcción de defensas ribereñas forman parte de las acciones preventivas que el Estado ya ejecuta, principalmente a través de la ANA (MIDAGRI) y de programas del MVCS. La ANA reportó para 2026 intervenciones programadas por 101 km, con avances de 54.05 km en limpieza y descolmatación, y un presupuesto superior a S/ 26 millones para esas labores. Estas intervenciones cuentan además con habilitación normativa específica previa, como el DU 016-2023, que autorizó S/ 225.68 millones para limpieza y descolmatación ante el Fenómeno El Niño. El anuncio describe la continuidad de una política vigente.",
    "fuentes": [
      { "texto": "ANA — limpieza y descolmatación en Lima", "url": "https://www.gob.pe/institucion/ana/noticias/1420926-ana-mas-de-42-kilometros-de-rios-y-quebradas-fueron-limpiados-y-descolmatados-en-lima" },
      { "texto": "El Comercio — presupuesto y meta 2026 de la ANA", "url": "https://elcomercio.pe/peru/ana-intensifica-limpieza-y-descolmatacion-de-rios-ante-riesgo-de-un-nino-costero-fuerte-ultimas-noticia/" },
      { "texto": "Congreso — avances en limpieza y descolmatación", "url": "https://comunicaciones.congreso.gob.pe/noticias/informan-sobre-avances-en-limpieza-y-descolmatacion-de-rios/" },
      { "texto": "ANA — descolmatación y reducción de riesgo de desbordes", "url": "https://www.gob.pe/institucion/ana/noticias/896293-fenomeno-el-nino-descolmatacion-y-limpieza-de-rios-reduce-en-80-el-riesgo-de-desbordes" },
      { "texto": "Swissinfo (EFE) — kilómetros de ríos limpiados antes de la temporada de lluvias", "url": "https://www.swissinfo.ch/spa/unos-600-kil%C3%B3metros-de-r%C3%ADos-en-per%C3%BA-quedan-limpios-antes-de-la-temporada-de-lluvia/88621586" }
    ]
  },
  {
    "calificacion": "ya-existe",
    "titulo": "Estableceremos metas nacionales claras para que la acción del Estado cierre las enormes brechas sociales y territoriales.",
    "descripcion": "La fijación de metas nacionales para el cierre de brechas es un componente ya establecido de la gestión pública peruana: el sistema de planeamiento estratégico conducido por CEPLAN (incluido el Plan Estratégico de Desarrollo Nacional), el presupuesto por resultados y los diagnósticos de brechas que sustentan la programación multianual de inversiones cumplen esa función. El anuncio no precisa qué metas nuevas se establecerían ni en qué se diferenciarían de los instrumentos vigentes.",
    "fuentes": [
      { "texto": "CEPLAN — Plan Estratégico de Desarrollo Nacional y sistema de planeamiento", "url": "https://www.gob.pe/ceplan" },
      { "texto": "MEF — Presupuesto por Resultados", "url": "https://www.mef.gob.pe/es/presupuesto-por-resultados/ique-es-ppr" },
      { "texto": "Ley N.° 32513, Presupuesto del Sector Público 2026", "url": "https://www.mef.gob.pe" }
    ]
  },
  {
    "calificacion": "ya-existe",
    "titulo": "Aprobaremos una Política de Protección Integral de la Primera Infancia, la Niñez, la Adolescencia y la Familia.",
    "descripcion": "El Estado ya cuenta con instrumentos de política aprobados en esta materia: la Política Nacional Multisectorial para las Niñas, Niños y Adolescentes al 2030 (D.S. 008-2021-MIMP) y los lineamientos Primero la Infancia para el desarrollo infantil temprano (D.S. 010-2016-MIDIS), además de las intervenciones sectoriales presupuestadas de MIDIS, MINSA y MINEDU. El anuncio no precisa en qué se diferenciaría la nueva política de los instrumentos vigentes ni qué meta o cobertura adicional plantearía.",
    "fuentes": [
      { "texto": "MIMP — Política Nacional Multisectorial para las Niñas, Niños y Adolescentes al 2030", "url": "https://www.gob.pe/mimp" },
      { "texto": "MIDIS — Lineamientos Primero la Infancia", "url": "https://www.gob.pe/midis" },
      { "texto": "Ley N.° 32513, Presupuesto del Sector Público 2026", "url": "https://www.mef.gob.pe" }
    ]
  },
  {
    "calificacion": "ya-existe",
    "titulo": "Relanzaremos el PRONAA para garantizar que los estudiantes de los colegios públicos reciban una alimentación nutritiva.",
    "descripcion": "El servicio prometido ya opera: la alimentación de los estudiantes de colegios públicos se ejecuta a través del programa nacional de alimentación escolar del MIDIS (Wasi Mikuna, que sustituyó a Qali Warma), con cobertura nacional y presupuesto anual asignado. El PRONAA, por su parte, fue extinguido por el D.S. 007-2012-MIDIS y sus funciones de alimentación escolar fueron asumidas por los programas posteriores. Relanzarlo es jurídicamente posible —los programas nacionales se crean y suprimen por decreto supremo—, pero el anuncio, tal como fue formulado, plantea un cambio de denominación e institucionalidad sobre un servicio que el Estado ya presta, sin una meta de cobertura o calidad distinta de la vigente.",
    "fuentes": [
      { "texto": "Andina", "url": "https://andina.pe/agencia/noticia-elecciones-2026-keiko-fujimori-plantea-telemedicina-todo-pais-y-duplicar-beca-18-1077477.aspx" },
      { "texto": "Diario Correo", "url": "https://diariocorreo.pe/politica/keiko-ofrece-pension-65-para-todos-los-peruanos-noticia/" },
      { "texto": "Gestión", "url": "https://gestion.pe/peru/politica/keiko-fujimori-el-40-del-canon-se-repartira-a-la-poblacion-noticia/" }
    ]
  },
  {
    "calificacion": "ya-existe",
    "titulo": "Implementaremos un programa de expansión y mejoramiento de las escuelas.",
    "descripcion": "El Estado ya ejecuta inversión pública en infraestructura educativa de manera permanente, a través del PRONIED (MINEDU), los proyectos de inversión del sector y los recursos de mantenimiento de locales escolares que se asignan cada año en la Ley de Presupuesto. El anuncio, tal como fue formulado, no precisa metas, cronograma, pliego responsable ni fuente de financiamiento que lo distingan de la política de infraestructura educativa vigente.",
    "fuentes": [
      { "texto": "MINEDU — PRONIED (Programa Nacional de Infraestructura Educativa)", "url": "https://www.gob.pe/pronied" },
      { "texto": "Ley N.° 32513, Presupuesto del Sector Público 2026 — Anexo 5", "url": "https://www.mef.gob.pe" }
    ]
  },
  {
    "calificacion": "ya-existe",
    "titulo": "Lanzaremos un programa multisectorial para el desarrollo integral del adolescente.",
    "descripcion": "La articulación multisectorial de servicios para adolescentes ya está prevista en instrumentos vigentes del Estado, en particular la Política Nacional Multisectorial para las Niñas, Niños y Adolescentes al 2030, que involucra a educación, salud, mujer e inclusión social, y en las prestaciones sectoriales presupuestadas de MINEDU, MINSA y MIDIS. No se identifica en la Ley de Presupuesto 2026 una asignación específica para un nuevo programa con esa denominación, por lo que el anuncio coincide con la política multisectorial existente.",
    "fuentes": [
      { "texto": "MIMP — Política Nacional Multisectorial para las Niñas, Niños y Adolescentes al 2030", "url": "https://www.gob.pe/mimp" },
      { "texto": "MEF — Ley de Presupuesto del Sector Público vigente", "url": "https://www.mef.gob.pe" }
    ]
  },
  {
    "calificacion": "ya-existe",
    "titulo": "Utilizaremos herramientas digitales y sistemas de información integrados para identificar a los hogares en situación de pobreza.",
    "descripcion": "La identificación de hogares en situación de pobreza mediante sistemas de información es una función que el Estado ya ejerce: el MIDIS administra el Sistema Nacional de Focalización, el SISFOH y el Padrón General de Hogares, que cumplen exactamente ese propósito. El anuncio plantea una mejora operativa de una función existente y no requiere nuevas competencias ni reforma legal para ejecutarse.",
    "fuentes": [
      { "texto": "MIDIS — Sistema de Focalización de Hogares y Padrón General de Hogares", "url": "https://www.gob.pe/midis" },
      { "texto": "MEF — Ley de Presupuesto del Sector Público vigente", "url": "https://www.mef.gob.pe" }
    ]
  },
  {
    "calificacion": "ya-existe",
    "titulo": "Transformaremos el sistema de compras públicas, que representa el 24 % del gasto nacional, reduciremos la dispersión de procedimientos de adquisiciones, fortaleceremos los mecanismos de control y aprovecharemos el poder de compra del Estado para obtener mejores condiciones y ahorrar recursos que volverán a los ciudadanos en forma de obras y servicios.",
    "descripcion": "La reforma del sistema de compras públicas ya está en ejecución: la nueva Ley General de Contrataciones Públicas (Ley N.° 32069) y su reglamento entraron en vigor con los objetivos de simplificar procedimientos, mejorar la transparencia y promover competencia, bajo la conducción del MEF y con la participación del OECE y Perú Compras, en el marco del Sistema Nacional de Abastecimiento. El anuncio coincide con los objetivos del marco normativo vigente y no precisa medidas adicionales distintas de las ya adoptadas.",
    "fuentes": [
      { "texto": "MEF — nuevo sistema de compras estatales", "url": "https://www.gob.pe/institucion/mef/noticias/1153817-nuevo-sistema-de-compras-estatales-propicia-la-eficiencia-en-el-gasto-publico" },
      { "texto": "MEF — Ley General de Contrataciones Públicas", "url": "https://www.gob.pe/institucion/mef/noticias/977802-la-nueva-ley-general-de-contrataciones-publicas-optimizara-procesos-y-acelerara-acciones-estatales-a-favor-de-los-ciudadanos" },
      { "texto": "LP Derecho — modificación del reglamento (D.S. 001-2026-EF)", "url": "https://lpderecho.pe/modifican-reglamento-ley-general-contrataciones-publicas-ds-001-2026-ef/" }
    ]
  },
  {
    "calificacion": "ya-existe",
    "titulo": "Estableceremos mecanismos de coordinación e incentivos que permitan trabajar como un solo estado.",
    "descripcion": "Los mecanismos de coordinación e incentivos entre entidades y niveles de gobierno ya forman parte del diseño institucional vigente: el Sistema Nacional de Presupuesto contempla la articulación entre entidades, los programas presupuestales incorporan la coordinación interinstitucional y la articulación multisectorial como instrumentos de gestión, y existen esquemas de incentivos como el Programa de Incentivos a la Mejora de la Gestión Municipal del MEF. El anuncio no identifica un instrumento nuevo con asignación presupuestal propia.",
    "fuentes": [
      { "texto": "MEF — Dirección General de Presupuesto Público", "url": "https://www.mef.gob.pe/es/quienes-somos/organizacion/organos-de-linea/308-acerca-del-ministerio/organos-de-linea/534-direccion-general-de-presupuesto-publico" },
      { "texto": "MEF — Programas Presupuestales", "url": "https://www.mef.gob.pe/contenidos/presu_publ/ppr/directiva_PP2016.pdf" },
      { "texto": "MEF — Sistema Nacional de Presupuesto", "url": "https://www.mef.gob.pe/contenidos/presu_publ/guia_sistema_nacional_presupuesto.pdf" },
      { "texto": "MEF — Programa de Incentivos a la Mejora de la Gestión Municipal", "url": "https://www.mef.gob.pe/es/incentivos-para-gobiernos-locales-y-regionales/programa-de-incentivos-a-la-mejora-de-la-gestion-municipal" }
    ]
  },
  {
    "calificacion": "ya-existe",
    "titulo": "Impulsaremos también la gran reforma del servicio civil.",
    "descripcion": "La reforma del servicio civil ya está establecida por la Ley N.° 30057, que crea el régimen del servicio civil y define un tránsito progresivo de entidades y servidores al nuevo sistema, bajo la rectoría de SERVIR. La implementación viene desarrollándose mediante la estrategia de tránsito aprobada por el Ejecutivo. El anuncio de impulsarla coincide con una política estatal en ejecución y no precisa medidas, plazos o recursos adicionales que la distingan del proceso vigente.",
    "fuentes": [
      { "texto": "Ley del Servicio Civil (Ley N.° 30057)", "url": "https://lpderecho.pe/ley-servicio-civil-ley-30057-actualizada/" },
      { "texto": "SERVIR — preguntas frecuentes sobre la reforma", "url": "https://www.gob.pe/institucion/servir/informes-publicaciones/3205074-preguntas-frecuentes-sobre-aspectos-generales-de-la-reforma-del-servicio-civil" },
      { "texto": "SERVIR — implementación de la reforma", "url": "https://www.servir.gob.pe/boletin-gestionarh-n04/un-nuevo-impulso-a-la-reforma-del-servicio-civil/" }
    ]
  },

  /* ─── NO DEPENDE ÚNICAMENTE DEL EJECUTIVO ─── */
  {
    "calificacion": "no-manos",
    "titulo": "Impulsaremos un ambicioso proceso de modernización tecnológica incluyendo sistemas nacionales de videovigilancia interconectados.",
    "descripcion": "La promesa de “sistemas nacionales de videovigilancia interconectados” depende de competencias del Ejecutivo en seguridad y gestión pública, pero su implementación efectiva requiere coordinación con entidades con competencia propia (PNP/Mininter y, según el diseño, gobiernos subnacionales), no solo una decisión presidencial. En el marco presupuestario peruano, el gasto público se programa por pliegos y programas presupuestales bajo el Sistema Nacional de Presupuesto y el enfoque de presupuesto por resultados; por tanto, la viabilidad concreta depende de que exista asignación en el pliego del sector correspondiente y de que la interconexión nacional esté prevista en el presupuesto o se financie con mecanismos habilitantes.",
    "fuentes": [
      { "texto": "MEF - Decreto Legislativo del Sistema Nacional de Presupuesto", "url": "https://www.mef.gob.pe/es/por-instrumento/decreto-legislativo/18247-fe-de-erratas-239/file" },
      { "texto": "OCDE - Gestión de las Finanzas Públicas en el Perú", "url": "https://www.oecd.org/content/dam/oecd/es/publications/reports/2023/02/public-financial-management-in-peru_b83e637c/8b6b289c-es.pdf" },
      { "texto": "MEF - Marco Estratégico de Reforma de la Administración Financiera", "url": "https://www.mef.gob.pe/es/por-instrumento/resolucion-ministerial/32125-resolucion-ministerial-n-402-2023-ef-11/file" },
      { "texto": "MINSA - Programas Presupuestales", "url": "https://www.minsa.gob.pe/presupuestales/" },
      { "texto": "MEF - Reforma presupuestaria para alinear el gasto público con estándares OCDE", "url": "https://www.gob.pe/institucion/mef/noticias/1372122-mef-impulsa-reforma-presupuestaria-para-alinear-el-gasto-publico-con-estandares-de-la-ocde" }
    ]
  },
  {
    "calificacion": "no-manos",
    "titulo": "Crearemos la Autoridad Nacional Digital y otorgaremos una Identidad Digital para cada ciudadano.",
    "descripcion": "El anuncio tiene dos componentes con situaciones distintas. La creación de la Autoridad Nacional Digital requiere una ley: conforme a la Ley Orgánica del Poder Ejecutivo (Ley N.° 29158), los organismos públicos se crean por ley a iniciativa del Ejecutivo, por lo que su concreción depende de la aprobación del Congreso. El segundo componente, la identidad digital, ya está previsto en el marco vigente: el Decreto Legislativo N.° 1412 y su reglamento regulan la Identidad Digital Nacional —con el mismo valor legal que el DNI— y la plataforma ID Gob.pe, bajo rectoría de la Secretaría de Gobierno y Transformación Digital de la PCM, cuyas funciones coinciden en gran parte con las que se asignarían a la nueva autoridad.",
    "fuentes": [
      { "texto": "Ley N.° 29158, Orgánica del Poder Ejecutivo (SPIJ)", "url": "https://spij.minjus.gob.pe" },
      { "texto": "D.Leg. N.° 1412 — Ley de Gobierno Digital", "url": "https://www.gob.pe/institucion/pcm/normas-legales/289706-1412" },
      { "texto": "Reglamento de la Ley de Gobierno Digital", "url": "https://www.gob.pe/13326-reglamento-de-la-ley-de-gobierno-digital" },
      { "texto": "SGTD — PCM", "url": "https://www.gob.pe/7025-presidencia-del-consejo-de-ministros-secretaria-de-gobierno-digital" }
    ]
  },

  /* ─── ES UNA OBLIGACIÓN LEGAL ─── */
  {
    "calificacion": "obligacion-legal",
    "titulo": "Vamos a garantizar que cada sol del presupuesto público sea administrado con absoluta transparencia.",
    "descripcion": "En términos jurídicos, la transparencia del gasto ya es una obligación estatal bajo el régimen de presupuesto, control gubernamental y acceso a la información; no es una nueva facultad discrecional del Ejecutivo.",
    "fuentes": [
      { "texto": "Ley N.° 27806 — Transparencia y Acceso a la Información Pública (SPIJ)", "url": "https://spij.minjus.gob.pe" },
      { "texto": "D. Leg. N.° 1440 — Sistema Nacional de Presupuesto", "url": "https://www.mef.gob.pe/contenidos/presu_publ/guia_sistema_nacional_presupuesto.pdf" },
      { "texto": "Portal de Transparencia Económica — Consulta Amigable", "url": "https://apps5.mineco.gob.pe/transparencia/Navegador/default.aspx" },
      { "texto": "Contraloría General de la República", "url": "https://www.gob.pe/contraloria" }
    ]
  },
  {
    "calificacion": "obligacion-legal",
    "titulo": "Implementaremos un plan de contingencia nacional frente al fenómeno El Niño.",
    "descripcion": "La elaboración e implementación de planes de contingencia ante fenómenos como El Niño es un mandato de la normativa vigente: la Ley N.° 29664 crea el Sistema Nacional de Gestión del Riesgo de Desastres (SINAGERD), con la PCM como ente rector y el INDECI y el CENEPRED como organismos técnicos, y establece la obligación estatal de prevenir, prepararse y responder ante desastres. En aplicación de ese marco, el Ejecutivo aprueba de manera recurrente planes multisectoriales ante lluvias intensas y El Niño, y la comisión ENFEN realiza el monitoreo permanente del fenómeno. El anuncio corresponde, por tanto, al cumplimiento de una obligación ya establecida, no a un compromiso adicional.",
    "fuentes": [
      { "texto": "Ley N.° 29664 — SINAGERD (SPIJ)", "url": "https://spij.minjus.gob.pe" },
      { "texto": "INDECI", "url": "https://www.gob.pe/indeci" },
      { "texto": "CENEPRED", "url": "https://www.gob.pe/cenepred" },
      { "texto": "ENFEN — Comisión Multisectorial encargada del Estudio Nacional del Fenómeno El Niño", "url": "https://www.gob.pe/enfen" }
    ]
  },
  {
    "calificacion": "obligacion-legal",
    "titulo": "Destinaremos maquinaria pesada a los puntos críticos.",
    "descripcion": "La atención de puntos críticos con maquinaria corresponde a funciones que la normativa ya asigna al Estado: la Ley N.° 29664 (SINAGERD) obliga a la preparación y respuesta ante riesgos de desastre, y el mantenimiento y la atención de emergencias de la red vial nacional son funciones existentes de Provías Nacional (MTC), que se ejecutan de manera recurrente cada temporada de lluvias. El anuncio corresponde al cumplimiento de un deber ya establecido, no a un compromiso adicional.",
    "fuentes": [
      { "texto": "Ley N.° 29664 — SINAGERD (SPIJ)", "url": "https://spij.minjus.gob.pe" },
      { "texto": "Provías Nacional — MTC", "url": "https://www.gob.pe/provias-nacional" }
    ]
  },
  {
    "calificacion": "obligacion-legal",
    "titulo": "Ordenaremos las cuentas públicas, eliminaremos el gasto innecesario y utilizaremos cada sol del Estado con responsabilidad.",
    "descripcion": "El anuncio no describe una medida específica sino una conducta de gestión que la normativa vigente ya impone al Ejecutivo: la Constitución (arts. 77 y 78) ordena la programación y ejecución equilibrada del presupuesto; el Decreto Legislativo 1276 establece el Marco de la Responsabilidad y Transparencia Fiscal, cuyo cumplimiento vigila el Consejo Fiscal; y el Decreto Legislativo 1440 fija la eficiencia y la eficacia como principios del Sistema Nacional de Presupuesto. Usar los recursos públicos con responsabilidad y evitar el gasto innecesario es, por tanto, un deber legal de todo gobierno, no un compromiso adicional.",
    "fuentes": [
      { "texto": "Constitución Política del Perú, arts. 77-78 (SPIJ)", "url": "https://spij.minjus.gob.pe" },
      { "texto": "D. Leg. 1276 — Marco de la Responsabilidad y Transparencia Fiscal (SPIJ)", "url": "https://spij.minjus.gob.pe" },
      { "texto": "D. Leg. 1440 — Sistema Nacional de Presupuesto", "url": "https://www.mef.gob.pe/contenidos/presu_publ/guia_sistema_nacional_presupuesto.pdf" },
      { "texto": "Consejo Fiscal del Perú", "url": "https://cf.gob.pe" }
    ]
  },

  /* ─── INVIABLE ─── */
  {
    "calificacion": "inviable",
    "titulo": "Vamos a recuperar cada barrio, cada carretera y cada espacio público para las familias peruanas.",
    "descripcion": "La promesa de “recuperar cada barrio, cada carretera y cada espacio público” no tiene una asignación presupuestal específica visible en las fuentes aportadas y, por su redacción, exige una intervención masiva en seguridad, infraestructura vial y espacios públicos que desborda una sola política pública. En el plan de Fuerza Popular se mencionan acciones similares, pero como lineamientos generales; además, se reporta que las propuestas de seguridad y recuperación de espacios públicos podrían requerir más de S/ 25 mil millones, mientras la Nueva Carretera Central seguía sin financiamiento adicional y con un presupuesto inicial menor a S/ 200 millones, insuficiente para iniciar obras.",
    "fuentes": [
      { "texto": "RPP", "url": "https://rpp.pe/economia/economia/nueva-carretera-central-keiko-fujimori-debera-decidir-sobre-megaproyecto-sin-presupuesto-y-con-la-actual-via-colapsada-noticia-1698991" },
      { "texto": "Gestión", "url": "https://gestion.pe/economia/keiko-fujimori-tiene-mas-de-100-proyectos-de-infraestructura-entre-sus-promesas-para-su-gobierno-en-peru-son-viables-noticia/" },
      { "texto": "El Comercio", "url": "https://elcomercio.pe/politica/plan-de-gobierno-de-keiko-fujimori-y-fuerza-popular-para-el-periodo-2026-2031-expertos-analizan-sus-principales-propuestas-y-los-desafios-para-aplicarlas-elecciones-2026-elecciones-en-peru-tlcnota-noticia/" },
      { "texto": "Andina", "url": "https://andina.pe/agencia/noticia-elecciones-2026-keiko-fujimori-plantea-construir-nuevas-carreteras-para-integrar-pais-1077768.aspx" }
    ]
  },
  {
    "calificacion": "inviable",
    "titulo": "Reduciremos la desnutrición crónica y la anemia en niños menores de cinco años a la mitad.",
    "descripcion": "El Estado ya ejecuta la política de base (Plan Nacional para la reducción y control de la anemia materno-infantil y la desnutrición crónica infantil, y el programa presupuestal de salud materno-neonatal y nutrición del MINSA); sin embargo, la prevalencia de anemia infantil se ha mantenido en niveles cercanos al 40% durante más de una década pese a esos instrumentos, y no se identifica en la Ley de Presupuesto 2026 una asignación adicional diferenciada que sustente una aceleración de esa magnitud. Con los recursos y el ritmo de resultados actuales, la meta de reducción a la mitad en el período de gobierno no resulta alcanzable. [Calificación recalificada por el equipo editorial: la meta cuantificada la excluye de la categoría 'ya existe'.]",
    "fuentes": [
      { "texto": "MINSA — Plan Nacional para la reducción y control de la anemia materno-infantil y la desnutrición crónica infantil", "url": "https://www.gob.pe/institucion/minsa/informes-publicaciones/280855-plan-nacional-para-la-reduccion-y-control-de-la-anemia-materno-infantil-y-la-desnutricion-cronica-infantil-en-el-peru-2017-2021-documento-tecnico|" },
      { "texto": "INEI — ENDES (indicadores de anemia y desnutrición)", "url": "https://www.gob.pe/inei" }
    ]
  },
  {
    "calificacion": "inviable",
    "titulo": "Reduciremos la pobreza de los niños de 0 a 11 años de más del 22 % a la mitad.",
    "descripcion": "Esta promesa depende de una expansión sustantiva de programas sociales, salud y educación con financiamiento específico. En las fuentes disponibles no hay evidencia de una asignación presupuestal concreta en la Ley de Presupuesto ni de ejecución MEF para una meta focalizada en pobreza infantil 0-11; además, la propuesta se formula como un resultado agregado, no como una competencia directa exclusiva del Ejecutivo. En términos presupuestales, solo sería habilitable si se incorpora financiamiento adicional en el presupuesto del año fiscal siguiente o mediante créditos suplementarios/transferencias de partidas para MIDIS, MINSA y MINEDU, pero eso no asegura por sí solo alcanzar una reducción a la mitad.",
    "fuentes": [
      { "texto": "Plan de gobierno de Fuerza Popular (Sistema Declara JNE)", "url": "https://declara.jne.gob.pe/assets/plangobierno/fileplangobierno/16490.pdf" },
      { "texto": "Andina - Elecciones 2026: conoce el plan de gobierno de la candidata Keiko Fujimori Higuchi", "url": "https://andina.pe/agencia/noticia-elecciones-2026-conoce-plan-gobierno-de-candidata-keiko-fujimori-higuchi-1065386.aspx" },
      { "texto": "RPP - Keiko Fujimori dice que una de las metas de su agenda de gobierno es reducir la pobreza a un 15%", "url": "https://rpp.pe/politica/elecciones/keiko-fujimori-dice-que-uno-de-las-metas-de-su-agenda-de-gobierno-es-reducir-la-pobreza-a-un-15-noticia-1691683" }
    ]
  },
  {
    "calificacion": "inviable",
    "titulo": "Reduciremos las brechas en habilidades mínimas en matemáticas y lectura a la mitad.",
    "descripcion": "Este compromiso también fija una meta cuantificada sobre una política existente: el MINEDU ya ejecuta programas de aprendizajes, evaluación (ECE) y cierre de brechas educativas. Los resultados de las evaluaciones nacionales e internacionales muestran avances lentos y retrocesos post pandemia en comprensión lectora y matemática. Con los recursos y la trayectoria actual del indicador, la meta anunciada no resulta alcanzable en el plazo de la gestión.",
    "fuentes": [
      { "texto": "MINEDU — evaluaciones de logros de aprendizaje (ECE)", "url": "https://www.gob.pe/minedu" },
      { "texto": "Ley N.° 32513, Presupuesto del Sector Público 2026 — Anexo 5", "url": "https://www.mef.gob.pe" },
      { "texto": "El Comercio — análisis de expertos sobre las propuestas educativas", "url": "https://elcomercio.pe/politica/plan-de-gobierno-de-keiko-fujimori-y-fuerza-popular-para-el-periodo-2026-2031-expertos-analizan-sus-principales-propuestas-y-los-desafios-para-aplicarlas-elecciones-2026-elecciones-en-peru-tlcnota-noticia/" }
    ]
  },
  {
    "calificacion": "inviable",
    "titulo": "Aplicaremos progresivamente una pensión universal para los adultos mayores en situación de pobreza.",
    "descripcion": "La promesa de implementar progresivamente una pensión universal para adultos mayores en pobreza no es una obligación legal vigente ni una política ya existente en los términos ofrecidos; además, la universalización excede el diseño focalizado actual de Pensión 65, que según la propuesta de Fuerza Popular se ampliaría de S/ 350 a S/ 700 bimestrales y a 500 mil nuevos beneficiarios por año. El propio plan partidario reconoce que se trata de una nueva cobertura/piso mínimo de protección, lo que requiere creación o ampliación sostenida de gasto público, no solo gestión ordinaria del Ejecutivo. Sin una asignación específica en la Ley de Presupuesto vigente y sin reforma normativa/presupuestal adicional, la promesa es presupuestalmente inviable en su formulación actual.",
    "fuentes": [
      { "texto": "Plan de Gobierno 2026–2031: PERÚ CON ORDEN (Fuerza Popular)", "url": "https://fuerzapopular.com.pe/wp-content/uploads/2026/02/Plan-de-Gobierno-Reforzado_V2.pdf" },
      { "texto": "Diario Correo", "url": "https://diariocorreo.pe/politica/keiko-ofrece-pension-65-para-todos-los-peruanos-noticia/" },
      { "texto": "Gestión", "url": "https://gestion.pe/peru/politica/keiko-fujimori-apunta-a-universalizar-pension-65-si-gana-la-presidencia-noticia/" },
      { "texto": "Canal N", "url": "https://canaln.pe/actualidad/keiko-fujimori-promete-incorporar-500-mil-pensionistas-ano-n492299" },
      { "texto": "MEF - Presupuesto Aprobado / Ley de Presupuesto del Sector Público", "url": "https://www.mef.gob.pe/" }
    ]
  },
  {
    "calificacion": "inviable",
    "titulo": "Expandiremos la infraestructura social con la reorganización de los programas de agua y desagüe, electricidad, telefonía e internet.",
    "descripcion": "La promesa es de naturaleza programática y no identifica un proyecto, pliego o meta con asignación concreta en la Ley de Presupuesto vigente; con la información disponible aquí solo se observa que las intervenciones de agua, electricidad, telefonía e internet se plantean como reordenamiento de programas existentes, no como una nueva partida ya financiada. Además, la propia documentación de Fuerza Popular describe que estas acciones dependen de entidades ejecutoras y programas especializados, por lo que su implementación no es automática ni centralizada en un solo pliego. En términos actuales, no puede calificarse como ejecutable de inmediato dentro del marco presupuestal probado en las fuentes aportadas.",
    "fuentes": [
      { "texto": "Plan de Gobierno de Fuerza Popular (Sistema Declara JNE)", "url": "https://declara.jne.gob.pe/assets/plangobierno/fileplangobierno/16490.pdf" },
      { "texto": "CIDOB – Keiko Fujimori Higuchi", "url": "https://www.cidob.org/lider-politico/keiko-fujimori-higuchi" },
      { "texto": "RPP – Keiko Fujimori propone obras de agua y títulos de propiedad", "url": "https://rpp.pe/politica/elecciones/keiko-fujimori-propone-obras-de-agua-y-titulos-de-propiedad-para-fortalecer-el-estado-democratico-es-viable-noticia-1690958" },
      { "texto": "Gestión – Keiko Fujimori tiene más de 100 proyectos de infraestructura", "url": "https://gestion.pe/economia/keiko-fujimori-tiene-mas-de-100-proyectos-de-infraestructura-entre-sus-promesas-para-su-gobierno-en-peru-son-viables-noticia/" }
    ]
  },
  {
    "calificacion": "inviable",
    "titulo": "Culminaremos la Línea 2 del Metro y ejecutaremos las líneas 3, 4, 5 y 6 en Lima y Callao.",
    "descripcion": "La promesa mezcla una obra ya en ejecución con cuatro nuevas líneas de metro, pero con la evidencia disponible no se acredita una asignación presupuestal concreta en la Ley de Presupuesto vigente para ejecutar simultáneamente las líneas 3, 4, 5 y 6. El propio MTC informó que la Línea 2 estaba en 83.12% de avance físico al cierre de abril de 2026, con la Etapa 2 en 69.62%, por lo que su culminación es plausible como continuación de obra, pero no elimina la restricción fiscal para expandir el paquete completo de megaproyectos. En ausencia de recursos específicos en el Anexo 5 y dada la magnitud de inversión requerida, la promesa es hoy presupuestalmente inviable en los términos planteados.",
    "fuentes": [
      { "texto": "MTC - Línea 2 del Metro de Lima y Callao supera el 83% de avance físico de obra", "url": "https://www.gob.pe/institucion/mtc/noticias/1395210-mtc-linea-2-del-metro-de-lima-y-callao-supera-el-83-de-avance-fisico-de-obra" },
      { "texto": "Andina - Gobierno define en US$ 6500 millones inversión para Línea 2 del Metro de Lima y Callao", "url": "https://andina.pe/agencia/noticia-gobierno-define-6500-millones-inversion-para-linea-2-del-metro-lima-y-callao-470375.aspx" },
      { "texto": "Gestión - Keiko Fujimori a segunda vuelta... estas son sus propuestas sobre el gasto público", "url": "https://gestion.pe/economia/keiko-fujimori-a-segunda-vuelta-de-las-elecciones-generales-2026-estas-son-sus-propuestas-sobre-el-gasto-publico-petroperu-mypes-mineria-y-mas-noticia/" },
      { "texto": "Gestión - Keiko Fujimori tiene más de 100 proyectos de infraestructura entre sus promesas, ¿son viables?", "url": "https://gestion.pe/economia/keiko-fujimori-tiene-mas-de-100-proyectos-de-infraestructura-entre-sus-promesas-para-su-gobierno-en-peru-son-viables-noticia/" }
    ]
  },
  {
    "calificacion": "inviable",
    "titulo": "Culminaremos la Nueva Carretera Central como una obra prioritaria.",
    "descripcion": "La promesa de \"culminar\" la Nueva Carretera Central no es ejecutable con el marco y la asignación vigente: se reporta que para 2026 el proyecto quedó con menos de S/ 200 millones, insuficientes para iniciar el Túnel Pariachi, mientras el costo total supera S/ 24,000 millones y el inicio requiere al menos S/ 600 millones solo para esa etapa inicial. La obra sí está dentro de las competencias del Ejecutivo y ya figura como proyecto prioritario del sector Transportes, pero la viabilidad actual depende de financiamiento adicional y de reponer o ampliar la partida presupuestal.",
    "fuentes": [
      { "texto": "Gob.pe - Presidencia del Consejo de Ministros / Presidencia", "url": "https://www.gob.pe/institucion/presidencia/noticias/905970-nueva-carretera-central-sera-la-obra-mas-grande-de-la-historia-del-peru" },
      { "texto": "RPP Noticias", "url": "https://rpp.pe/economia/economia/nueva-carretera-central-keiko-fujimori-debera-decidir-sobre-megaproyecto-sin-presupuesto-y-con-la-actual-via-colapsada-noticia-1698991" },
      { "texto": "Diario Correo", "url": "https://diariocorreo.pe/edicion/huancayo/keiko-definiria-si-otorga-presupuesto-a-la-nueva-carretera-central-noticia/" },
      { "texto": "Arequipa Misti Press", "url": "https://arequipamistipress.com/2026/03/28/que-propuestas-plantea-la-candidata-keiko-fujimori-de-fuerza-popular-en-su-plan-de-gobierno-2026-2031/" }
    ]
  },
  {
    "calificacion": "inviable",
    "titulo": "Ejecutaremos las carreteras Oyón – Ambo, Canta – La Viuda – Unish, Puerto Ocopa – Atalaya, la Longitudinal de la Sierra.",
    "descripcion": "La promesa depende de megaproyectos viales que, según las fuentes disponibles, no cuentan con financiamiento suficiente en el presupuesto vigente: la Nueva Carretera Central tendría menos de S/ 200 millones en 2026 y requeriría alrededor de S/ 600 millones solo para iniciar el Túnel Pariachi, quedando sin recursos adicionales tras el crédito suplementario aprobado por el Congreso. Por ello, aunque el marco competencial del Ejecutivo sí permite impulsar infraestructura vial, la ejecución integral de todas las carreteras prometidas no es viable con el estado actual de asignación y requiere financiamiento adicional y/o programación multianual específica.[",
    "fuentes": [
      { "texto": "RPP - Nueva Carretera Central sin presupuesto suficiente", "url": "https://rpp.pe/economia/economia/nueva-carretera-central-keiko-fujimori-debera-decidir-sobre-megaproyecto-sin-presupuesto-y-con-la-actual-via-colapsada-noticia-1698991" },
      { "texto": "Fuerza Popular - Plan de Gobierno 2026–2031", "url": "https://fuerzapopular.com.pe/wp-content/uploads/2026/02/Plan-de-Gobierno-Reforzado_V2.pdf" },
      { "texto": "Andina - Propuestas viales de Keiko Fujimori", "url": "https://andina.pe/agencia/noticia-elecciones-2026-keiko-fujimori-plantea-construir-nuevas-carreteras-para-integrar-pais-1077768.aspx" },
      { "texto": "Gestión - Restricción fiscal para proyectos de infraestructura", "url": "https://gestion.pe/economia/keiko-fujimori-tiene-mas-de-100-proyectos-de-infraestructura-entre-sus-promesas-para-su-gobierno-en-peru-son-viables-noticia/" }
    ]
  }
];
