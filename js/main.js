// ─────────────────────────────────────────────────────────────
//  DATOS — Reemplaza con el JSON generado por el Colab
// ─────────────────────────────────────────────────────────────
const DATA = {
  "meta": {
    "titulo": "Discurso Presidencial — 28 de julio de 2026",
    "duracion_total_seg": 6636,
    "duracion_total_fmt": "110:35",
    "procesado": "2026-05-22T19:44:20.619517"
  },
  "resumen_temas": [
    {
      "tema": "Otros",
      "porcentaje": 41.5,
      "duracion_seg": 2756,
      "color": "#666"
    },
    {
      "tema": "Regiones",
      "porcentaje": 26.9,
      "duracion_seg": 1783,
      "color": "#16a085"
    },
    {
      "tema": "Economía",
      "porcentaje": 23.2,
      "duracion_seg": 1540,
      "color": "#1a1a2e"
    },
    {
      "tema": "Democracia e Instituciones",
      "porcentaje": 22.0,
      "duracion_seg": 1461,
      "color": "#7f8c8d"
    },
    {
      "tema": "Infraestructura",
      "porcentaje": 12.7,
      "duracion_seg": 840,
      "color": "#8e44ad"
    },
    {
      "tema": "Educación",
      "porcentaje": 10.3,
      "duracion_seg": 682,
      "color": "#27ae60"
    },
    {
      "tema": "Seguridad",
      "porcentaje": 7.9,
      "duracion_seg": 525,
      "color": "#c0392b"
    },
    {
      "tema": "Política Exterior",
      "porcentaje": 7.8,
      "duracion_seg": 518,
      "color": "#2c3e50"
    },
    {
      "tema": "Salud",
      "porcentaje": 6.8,
      "duracion_seg": 450,
      "color": "#2980b9"
    },
    {
      "tema": "Agricultura",
      "porcentaje": 6.3,
      "duracion_seg": 419,
      "color": "#d35400"
    },
    {
      "tema": "Anticorrupción",
      "porcentaje": 5.3,
      "duracion_seg": 353,
      "color": "#e67e22"
    }
  ],
  "bloques": [
    {
      "id": 0,
      "tema": "Democracia e Instituciones",
      "inicio": 1.3,
      "fin": 167.5,
      "inicio_fmt": "00:01",
      "fin_fmt": "00:27",
      "duracion_seg": 166.2,
      "extracto": "Señora Presidenta del Congreso de la República, señoras y señores congresistas de la República, señores y señores ministros de Estado, señores miembros del Honorable Cuerpo Diplomático, dignas autoridades civiles, militares y religiosas, ilustres invitados, querido pueblo peruano. Hace 365 días, en...",
      "color": "#7f8c8d",
      "eventos": [
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Anticorrupción → Democracia e Instituciones"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Democracia e Instituciones"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Política Exterior → Democracia e Instituciones"
        }
      ]
    },
    {
      "id": 1,
      "tema": "Regiones",
      "inicio": 45.4,
      "fin": 92.1,
      "inicio_fmt": "00:45",
      "fin_fmt": "00:53",
      "duracion_seg": 46.7,
      "extracto": "Pero sí tenemos que hablar con la verdad, fue una independencia que hasta el día de hoy, gran parte de los peruanos y las peruanas la siguen esperando. A pesar de recibir un país que emerge de la pandemia con más de 230 mil peruanos fallecidos y del disgusto de quienes se creen dueños del país, segu...",
      "color": "#16a085",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Regiones"
        },
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"230 mil\""
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Regiones"
        }
      ]
    },
    {
      "id": 4,
      "tema": "Política Exterior",
      "inicio": 142.2,
      "fin": 156.4,
      "inicio_fmt": "02:22",
      "fin_fmt": "02:36",
      "duracion_seg": 14.3,
      "extracto": "Hoy, convencidos más que nunca, con la misma firmeza, venimos a informar a nuestro país el trabajo desplegado....",
      "color": "#2c3e50",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Política Exterior"
        }
      ]
    },
    {
      "id": 5,
      "tema": "Otros",
      "inicio": 167.5,
      "fin": 178.3,
      "inicio_fmt": "02:47",
      "fin_fmt": "02:58",
      "duracion_seg": 10.8,
      "extracto": "En este periodo, el que nos hemos tenido, no hemos tenido ningún minuto de tregua, vengo a informarles lo que hemos hecho y anunciarles lo que haremos....",
      "color": "#666",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Otros"
        }
      ]
    },
    {
      "id": 6,
      "tema": "Anticorrupción",
      "inicio": 179.3,
      "fin": 199.8,
      "inicio_fmt": "02:59",
      "fin_fmt": "03:06",
      "duracion_seg": 20.5,
      "extracto": "No importa que quienes deberían también informar hayan ocultado e ignoren nuestros logros y se dedican a difamar y a mentir, Y que tenemos que probar nuestra inocencia....",
      "color": "#e67e22",
      "eventos": [
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Anticorrupción"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Anticorrupción"
        }
      ]
    },
    {
      "id": 7,
      "tema": "Democracia e Instituciones",
      "inicio": 187.3,
      "fin": 217.8,
      "inicio_fmt": "03:07",
      "fin_fmt": "03:17",
      "duracion_seg": 30.5,
      "extracto": "acusándonos sin ninguna prueba y exigiéndonos en una perversa inversión de los principios elementales del derecho que problemas nuestra. Somos un país que se fundamenta en el principio constitucional de la igualdad de todos y de todas, ante la ley y dentro de la ley....",
      "color": "#7f8c8d",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Anticorrupción → Democracia e Instituciones"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Economía → Democracia e Instituciones"
        }
      ]
    },
    {
      "id": 9,
      "tema": "Otros",
      "inicio": 218.6,
      "fin": 229.8,
      "inicio_fmt": "03:38",
      "fin_fmt": "03:42",
      "duracion_seg": 11.2,
      "extracto": "Por lo que no se puede permitir privilegios que contraigan este principio. Este primer año he recibido una bofetada en una mejilla de aquellos que no aceptaron perder legítimamente....",
      "color": "#666",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Otros"
        }
      ]
    },
    {
      "id": 10,
      "tema": "Regiones",
      "inicio": 230.1,
      "fin": 283.6,
      "inicio_fmt": "03:50",
      "fin_fmt": "04:19",
      "duracion_seg": 53.6,
      "extracto": "En las elecciones presidenciales con el voto consciente del pueblo peruano, pero en este segundo año no voy a poner la otra mejilla sino extenderle la mano para trabajar juntos en beneficio del pueblo a partir de los objetivos nacionales de desarrollo que espera nuestra patria en marco de la polític...",
      "color": "#16a085",
      "eventos": [
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Regiones"
        },
        {
          "tipo": "anuncio",
          "descripcion": "Anuncio o compromiso"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Regiones"
        }
      ]
    },
    {
      "id": 12,
      "tema": "Anticorrupción",
      "inicio": 283.6,
      "fin": 312.8,
      "inicio_fmt": "04:43",
      "fin_fmt": "04:52",
      "duracion_seg": 29.2,
      "extracto": "Sin embargo, debo admitir que hemos cometido errores con algunas designaciones, así como brindar confianza. Quienes se aprovecharon y burlaron de ella, nada más opuesto y distante a mis valores, a mis principios, mi dignidad, son los actos que mis propios padres me han inculcado, tal como se ha regi...",
      "color": "#e67e22",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Anticorrupción"
        }
      ]
    },
    {
      "id": 13,
      "tema": "Democracia e Instituciones",
      "inicio": 312.8,
      "fin": 339.6,
      "inicio_fmt": "05:12",
      "fin_fmt": "05:23",
      "duracion_seg": 26.7,
      "extracto": "Por ello, reconozco el trabajo que se hace desde el Ministerio Público y el Poder Judicial, pues en esta nuestra patria padecemos sed ancestral de justicia. La que debe impartirse por igual y sin distinción de ideologías y colores políticos. El gobierno del pueblo tiene ese objetivo muy claro y vamo...",
      "color": "#7f8c8d",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Anticorrupción → Democracia e Instituciones"
        },
        {
          "tipo": "anuncio",
          "descripcion": "Anuncio o compromiso"
        }
      ]
    },
    {
      "id": 14,
      "tema": "Seguridad",
      "inicio": 340.1,
      "fin": 351.2,
      "inicio_fmt": "05:40",
      "fin_fmt": "05:51",
      "duracion_seg": 11.1,
      "extracto": "Aún cuando desde los poderes fácticos y la oligarquía existe un empeño por minar al gobierno del pueblo sin dimensionar el daño inmenso que también le infringe al país....",
      "color": "#c0392b",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Seguridad"
        }
      ]
    },
    {
      "id": 15,
      "tema": "Política Exterior",
      "inicio": 351.2,
      "fin": 363.8,
      "inicio_fmt": "05:51",
      "fin_fmt": "06:03",
      "duracion_seg": 12.6,
      "extracto": "He jurado por Dios y por la patria servir a mi país. Los insultos y las burlas no me harán retroceder, al contrario, me fortalecerán con férrea y con visión....",
      "color": "#2c3e50",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Seguridad → Política Exterior"
        }
      ]
    },
    {
      "id": 16,
      "tema": "Economía",
      "inicio": 363.9,
      "fin": 381.1,
      "inicio_fmt": "06:03",
      "fin_fmt": "06:21",
      "duracion_seg": 17.2,
      "extracto": "Mi férrea y con visión de que nos recuperaremos de esta crisis que nos azota, porque ante todo está el interés del país y nuestros compatriotas....",
      "color": "#1a1a2e",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Política Exterior → Economía"
        }
      ]
    },
    {
      "id": 17,
      "tema": "Democracia e Instituciones",
      "inicio": 381.1,
      "fin": 415.4,
      "inicio_fmt": "06:21",
      "fin_fmt": "06:30",
      "duracion_seg": 34.3,
      "extracto": "Aún cuando se injuria a mi familia a diario y se ofende la majestad de la Presidencia de la República, me someto a la justicia. Por lo que corroboraré plenamente en el marco de nuestra Constitución....",
      "color": "#7f8c8d",
      "eventos": [
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Economía → Democracia e Instituciones"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Anticorrupción → Democracia e Instituciones"
        }
      ]
    },
    {
      "id": 18,
      "tema": "Anticorrupción",
      "inicio": 390.8,
      "fin": 409.8,
      "inicio_fmt": "06:30",
      "fin_fmt": "06:49",
      "duracion_seg": 18.9,
      "extracto": "Para aclarar los delitos que se me pretenden imputar con respeto al debido proceso y no a la justicia mediática, mi deber es decir siempre la verdad, tal como me enseñaron mis padres....",
      "color": "#e67e22",
      "eventos": [
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Anticorrupción"
        }
      ]
    },
    {
      "id": 19,
      "tema": "Agricultura",
      "inicio": 416.3,
      "fin": 426.5,
      "inicio_fmt": "06:56",
      "fin_fmt": "07:06",
      "duracion_seg": 10.2,
      "extracto": "Propusimos la generación de bienestar y protección social con seguridad alimentaria, la reactivación económica y de actividades productivas con desarrollo agrario y rural....",
      "color": "#d35400",
      "eventos": [
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Agricultura"
        }
      ]
    },
    {
      "id": 21,
      "tema": "Seguridad",
      "inicio": 436.4,
      "fin": 454.5,
      "inicio_fmt": "07:16",
      "fin_fmt": "07:27",
      "duracion_seg": 18.1,
      "extracto": "Persistir en la descentralización, el fortalecimiento del sistema democrático, la recuperación de la seguridad ciudadana y la lucha contra la corrupción, el narcotráfico y el terrorismo. Propusimos igualmente la gestión eficiente de riesgos y amenazas a los derechos de las personas y su entorno....",
      "color": "#c0392b",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Educación → Seguridad"
        }
      ]
    },
    {
      "id": 22,
      "tema": "Democracia e Instituciones",
      "inicio": 454.5,
      "fin": 492.1,
      "inicio_fmt": "07:34",
      "fin_fmt": "07:38",
      "duracion_seg": 37.6,
      "extracto": "Un gobierno y transformación digital con equidad. No olvidemos que intrínseco a todo ello también se encuentra comprendida una reforma política integral de las bases constitucionales que colisionan con las necesidades del cambio. De este modo, se propuso para que se consulte a la ciudadanía de todo...",
      "color": "#7f8c8d",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Seguridad → Democracia e Instituciones"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Democracia e Instituciones"
        }
      ]
    },
    {
      "id": 25,
      "tema": "Otros",
      "inicio": 492.1,
      "fin": 510.5,
      "inicio_fmt": "08:12",
      "fin_fmt": "08:14",
      "duracion_seg": 18.4,
      "extracto": "Cuyo proyecto fue archivado. No obstante, como he dicho, los medios de comunicación, en su mayoría, se han encargado de que nos mantengamos y de mantenernos desinformados....",
      "color": "#666",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Otros"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        }
      ]
    },
    {
      "id": 26,
      "tema": "Economía",
      "inicio": 511.7,
      "fin": 555.9,
      "inicio_fmt": "08:31",
      "fin_fmt": "08:34",
      "duracion_seg": 44.2,
      "extracto": "¿Acaso se difunden las informaciones del crecimiento económico del Perú? Muy pocos lo saben, pero en lo que va del año 2022, hemos crecido en 3.5%, como lo señala el BCE. Igualmente, entre los países emergentes, también superamos la proyección del 2.5% del crecimiento económico para el año 2022. Com...",
      "color": "#1a1a2e",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Economía"
        },
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"5%\""
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Economía"
        },
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"5%\""
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Salud → Economía"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Economía"
        }
      ]
    },
    {
      "id": 29,
      "tema": "Otros",
      "inicio": 545.6,
      "fin": 615.0,
      "inicio_fmt": "09:05",
      "fin_fmt": "09:07",
      "duracion_seg": 69.3,
      "extracto": "Eso no se comunica. ¿qué se entenderán? Llegando a un 2.6%. Para el año 2022, lo que es muy inferior a lo que alcanzaremos. Nada de esto se propala. Si se presenta la información, no existe la mínima ni la real valoración del impacto de estos hechos. Solo se emiten mentiras y noticias falsas de Pedr...",
      "color": "#666",
      "eventos": [
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Economía → Otros"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Economía → Otros"
        },
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"6%\""
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Seguridad → Otros"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Anticorrupción → Otros"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Agricultura → Otros"
        }
      ]
    },
    {
      "id": 32,
      "tema": "Democracia e Instituciones",
      "inicio": 594.4,
      "fin": 606.5,
      "inicio_fmt": "09:54",
      "fin_fmt": "10:06",
      "duracion_seg": 12.1,
      "extracto": "No quieren mencionar que hemos crecido, porque eso es hablar bien del gobierno....",
      "color": "#7f8c8d",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Democracia e Instituciones"
        }
      ]
    },
    {
      "id": 34,
      "tema": "Regiones",
      "inicio": 615.4,
      "fin": 627.0,
      "inicio_fmt": "10:15",
      "fin_fmt": "10:21",
      "duracion_seg": 11.6,
      "extracto": "Y hoy, el día de hoy, contamos con un millón doscientos sesenta mil ciudadanos que son menos pobres. Y también han salido de la extrema pobreza trescientos nueve mil peruanos y peruanas....",
      "color": "#16a085",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Regiones"
        }
      ]
    },
    {
      "id": 35,
      "tema": "Economía",
      "inicio": 627.3,
      "fin": 730.1,
      "inicio_fmt": "10:27",
      "fin_fmt": "10:29",
      "duracion_seg": 102.8,
      "extracto": "¿Acaso tener menos pobreza? Como lo es que hemos recuperado los niveles de empleo que en estos momentos superan los cinco punto cinco millones de puestos de trabajo. El empleo formal a nivel nacional aumentó en un seis punto nueve por ciento interanual a mayo de este año. Y se recuperaron con ello t...",
      "color": "#1a1a2e",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Economía"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Economía"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Economía"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Economía"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Economía"
        }
      ]
    },
    {
      "id": 36,
      "tema": "Otros",
      "inicio": 629.4,
      "fin": 687.4,
      "inicio_fmt": "10:29",
      "fin_fmt": "10:31",
      "duracion_seg": 58.0,
      "extracto": "¿No es bueno para el país? Debo enfatizar que con este resultado positivo se pone de relieve que se ha superado. Estas cifras sí son reales, como lo precisa el Banco Central de Reserva....",
      "color": "#666",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Economía → Otros"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Economía → Otros"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Economía → Otros"
        }
      ]
    },
    {
      "id": 38,
      "tema": "Infraestructura",
      "inicio": 730.1,
      "fin": 782.8,
      "inicio_fmt": "12:10",
      "fin_fmt": "12:33",
      "duracion_seg": 52.7,
      "extracto": "Con la finalidad de dar un impulso significativo a la inversión privada, hemos fortalecido los mecanismos de obras por impuestos y las asociaciones público privadas para que permitan mejorar la gestión de los proyectos de infraestructura, ampliando su alcance para contribuir al cierre de brechas. Lo...",
      "color": "#8e44ad",
      "eventos": [
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Economía → Infraestructura"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Infraestructura"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Infraestructura"
        }
      ]
    },
    {
      "id": 39,
      "tema": "Democracia e Instituciones",
      "inicio": 753.9,
      "fin": 790.7,
      "inicio_fmt": "12:33",
      "fin_fmt": "12:38",
      "duracion_seg": 36.8,
      "extracto": "Asimismo, estamos trabajando en una agenda activa que destrabe la grandes. Además, debo destacar, tal como prometimos al asumir este gobierno, que hemos recuperado....",
      "color": "#7f8c8d",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Infraestructura → Democracia e Instituciones"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Infraestructura → Democracia e Instituciones"
        }
      ]
    },
    {
      "id": 40,
      "tema": "Otros",
      "inicio": 758.2,
      "fin": 773.0,
      "inicio_fmt": "12:38",
      "fin_fmt": "12:39",
      "duracion_seg": 14.8,
      "extracto": "Los grandes. En el caso de Chavimochi, en agosto quedará expedito para continuar sus operaciones paralizadas por años....",
      "color": "#666",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Otros"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Infraestructura → Otros"
        }
      ]
    },
    {
      "id": 41,
      "tema": "Economía",
      "inicio": 790.9,
      "fin": 815.4,
      "inicio_fmt": "13:10",
      "fin_fmt": "13:35",
      "duracion_seg": 24.5,
      "extracto": "Las deudas tributarias de gobiernos anteriores que ellos no quisieron cobrarla a las empresas privadas por más de 5.400 millones de soles que son utilizadas para financiar obras en educación, en salud, agua y saneamiento que tanto demanda la población....",
      "color": "#1a1a2e",
      "eventos": [
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"5.400 millones\""
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Economía"
        }
      ]
    },
    {
      "id": 42,
      "tema": "Regiones",
      "inicio": 815.4,
      "fin": 865.6,
      "inicio_fmt": "13:35",
      "fin_fmt": "13:48",
      "duracion_seg": 50.2,
      "extracto": "Sin embargo, debemos señalar que la inversión privada nacional y extranjera, así como los derechos de propiedad y contractuales de todos los peruanos, están garantizados, como también la política de justicia. Es necesario contar con estos recursos porque miles de familias en las zonas altas de los c...",
      "color": "#16a085",
      "eventos": [
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Economía → Regiones"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Lima"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Regiones"
        }
      ]
    },
    {
      "id": 43,
      "tema": "Otros",
      "inicio": 828.7,
      "fin": 839.4,
      "inicio_fmt": "13:48",
      "fin_fmt": "13:59",
      "duracion_seg": 10.7,
      "extracto": "Vamos a continuar con acciones más eficientes y severas para cobrar los más de 30.000 millones de soles pendientes....",
      "color": "#666",
      "eventos": [
        {
          "tipo": "anuncio",
          "descripcion": "Anuncio o compromiso"
        },
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"30.000 millones\""
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Otros"
        }
      ]
    },
    {
      "id": 45,
      "tema": "Economía",
      "inicio": 873.2,
      "fin": 897.7,
      "inicio_fmt": "14:33",
      "fin_fmt": "14:56",
      "duracion_seg": 24.5,
      "extracto": "Respecto a las pensiones, nuestras jubiladas y jubilados que aportaron durante toda su vida laboral reciben pensiones de miserias y otros en situaciones de pobreza pueden acceder a pensión 65, pero aproximadamente el 50% de adultos mayores de más de 65 años no reciben nada. Esta situación tiene que...",
      "color": "#1a1a2e",
      "eventos": [
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"50%\""
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Infraestructura → Economía"
        }
      ]
    },
    {
      "id": 46,
      "tema": "Democracia e Instituciones",
      "inicio": 897.7,
      "fin": 918.7,
      "inicio_fmt": "14:57",
      "fin_fmt": "15:18",
      "duracion_seg": 21.0,
      "extracto": "Mediante decreto supremo, hemos creado una comisión que en seis meses emitirá un diagnóstico y propuestas normativas para realizar las modificaciones necesarias a los regímenes previsionales públicos y privados con el objetivo de mejorar la situación de nuestros adultos mayores....",
      "color": "#7f8c8d",
      "eventos": [
        {
          "tipo": "anuncio",
          "descripcion": "Anuncio o compromiso"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Economía → Democracia e Instituciones"
        }
      ]
    },
    {
      "id": 47,
      "tema": "Economía",
      "inicio": 928.6,
      "fin": 1016.9,
      "inicio_fmt": "15:28",
      "fin_fmt": "15:37",
      "duracion_seg": 88.3,
      "extracto": "Incluiremos a los trabajadores informales que bajo las condiciones actuales no pueden acceder a un sistema de pensiones y tampoco tendrán la posibilidad de obtener pensiones. Aspiramos a que todos los peruanos puedan gozar de una pensión universal con primer piso de protección social y brindar los i...",
      "color": "#1a1a2e",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Economía"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Anticorrupción → Economía"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        }
      ]
    },
    {
      "id": 48,
      "tema": "Anticorrupción",
      "inicio": 953.3,
      "fin": 968.7,
      "inicio_fmt": "15:53",
      "fin_fmt": "16:08",
      "duracion_seg": 15.4,
      "extracto": "Que el sistema pensionario brinde mejores pensiones a los jubilados y generar mayor competencia de modo que se puedan romper los oligopolios y las injusticias en beneficio de todos los aportantes y pensionistas....",
      "color": "#e67e22",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Economía → Anticorrupción"
        }
      ]
    },
    {
      "id": 50,
      "tema": "Democracia e Instituciones",
      "inicio": 1022.8,
      "fin": 1037.2,
      "inicio_fmt": "17:02",
      "fin_fmt": "17:17",
      "duracion_seg": 14.4,
      "extracto": "Todo esto, como lo que se expresará adelante, trae por tierra todo lo que se ha anunciado y se anuncia apocalípticamente sobre lo que sería y es mi mandato gubernamental....",
      "color": "#7f8c8d",
      "eventos": [
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Democracia e Instituciones"
        }
      ]
    },
    {
      "id": 51,
      "tema": "Anticorrupción",
      "inicio": 1038.5,
      "fin": 1055.5,
      "inicio_fmt": "17:18",
      "fin_fmt": "17:35",
      "duracion_seg": 17.0,
      "extracto": "Se estabilizan y reclaman la vacancia, no por falta de resultados o por inexistentes imputaciones que nunca aprobarán, sino por defender sus intereses privados y por evitar los cambios que mi gobierno se empeña en cumplir....",
      "color": "#e67e22",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Anticorrupción"
        }
      ]
    },
    {
      "id": 52,
      "tema": "Economía",
      "inicio": 1055.7,
      "fin": 1250.1,
      "inicio_fmt": "17:35",
      "fin_fmt": "17:43",
      "duracion_seg": 194.4,
      "extracto": "Medidas frente al alza de precios. La vulnerabilidad económica que millones de compatriotas padecen como consecuencia de esta desgracia. Como consecuencia de la crisis global, los precios del petróleo, trigo, cereales han sufrido un alza afectando la canasta familiar. Especialmente a aquellos en sit...",
      "color": "#1a1a2e",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Anticorrupción → Economía"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Economía"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Economía"
        },
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"99 mil\""
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Economía"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Economía"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Infraestructura → Economía"
        }
      ]
    },
    {
      "id": 54,
      "tema": "Otros",
      "inicio": 1072.7,
      "fin": 1140.5,
      "inicio_fmt": "17:52",
      "fin_fmt": "17:56",
      "duracion_seg": 67.8,
      "extracto": "Al dolor de las pérdidas humanas se debe añadir. Frente a esto, nos movilizamos y logramos que 12 millones y medio de peruanos recibieran de manera individual 350 soles para que pudieran cubrir sus necesidades básicas. Hasta la fecha, 3.530 ollas comunes se encuentran registradas en el sistema infor...",
      "color": "#666",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Salud → Otros"
        },
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"12 mil\""
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Economía → Otros"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Economía → Otros"
        },
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"117 mil\""
        }
      ]
    },
    {
      "id": 55,
      "tema": "Otros",
      "inicio": 1207.2,
      "fin": 1237.3,
      "inicio_fmt": "20:07",
      "fin_fmt": "20:10",
      "duracion_seg": 30.0,
      "extracto": "de 1.950 millones de soles. ha significado un ahorro que benefició a los usuarios 1.000 millones de soles,...",
      "color": "#666",
      "eventos": [
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"1.950 millones\""
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Economía → Otros"
        },
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"1.000 millones\""
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Economía → Otros"
        }
      ]
    },
    {
      "id": 57,
      "tema": "Agricultura",
      "inicio": 1250.1,
      "fin": 1270.3,
      "inicio_fmt": "20:50",
      "fin_fmt": "21:10",
      "duracion_seg": 20.2,
      "extracto": "se exoneró temporalmente del impuesto general a las ventas a cinco productos, como son el pollo, huevos, pan, fideos y azúcar, y sus principales insumos,...",
      "color": "#d35400",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Economía → Agricultura"
        }
      ]
    },
    {
      "id": 58,
      "tema": "Otros",
      "inicio": 1270.3,
      "fin": 1300.9,
      "inicio_fmt": "21:10",
      "fin_fmt": "21:15",
      "duracion_seg": 30.5,
      "extracto": "con el propósito de reducir los precios, como ocurrió con la gasolina de 90 octanos. Esta cifra reducida......",
      "color": "#666",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Agricultura → Otros"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Economía → Otros"
        }
      ]
    },
    {
      "id": 59,
      "tema": "Economía",
      "inicio": 1275.7,
      "fin": 1314.6,
      "inicio_fmt": "21:15",
      "fin_fmt": "21:28",
      "duracion_seg": 38.9,
      "extracto": "Sin embargo, se ha puesto en evidencia que las malas prácticas de algunos empresarios evitaron que estas medidas y esfuerzos fiscales no se vean reflejados en su verdadera dimensión. Damos cuenta ante el país que al inicio de mi gobierno encontramos en el Fondo de Estabilización Fiscal un monto de 2...",
      "color": "#1a1a2e",
      "eventos": [
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Economía"
        },
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"1.500 millones\""
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Salud → Economía"
        }
      ]
    },
    {
      "id": 60,
      "tema": "Salud",
      "inicio": 1300.9,
      "fin": 1416.5,
      "inicio_fmt": "21:40",
      "fin_fmt": "21:45",
      "duracion_seg": 115.5,
      "extracto": "...fue consecuencia del gasto que se efectuó por la pandemia. Control y prevención de la pandemia. Estamos en la cuarta ola de la pandemia y se ha demostrado que la estrategia más efectiva para el control y prevención de esta enfermedad es la vacunación. ¿Y quién en nuestras familias no ha sido afec...",
      "color": "#2980b9",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Salud"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Economía → Salud"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Salud"
        },
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"80%\""
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Salud"
        },
        {
          "tipo": "anuncio",
          "descripcion": "Anuncio o compromiso"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Agricultura → Salud"
        }
      ]
    },
    {
      "id": 61,
      "tema": "Otros",
      "inicio": 1339.2,
      "fin": 1369.0,
      "inicio_fmt": "22:19",
      "fin_fmt": "22:20",
      "duracion_seg": 29.8,
      "extracto": "¿Quién en nuestras familias no ha sido afectado por este flagelo? Ello nos ha permitido pasar de 13.100.000 dosis aplicadas hasta julio del 2021 a más de 80 millones de dosis a la fecha. Nuestro compromiso a diciembre del presente año es alcanzar el 80% de la población mayor de 12 años......",
      "color": "#666",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Salud → Otros"
        },
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"80 mil\""
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Salud → Otros"
        },
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"80%\""
        }
      ]
    },
    {
      "id": 63,
      "tema": "Agricultura",
      "inicio": 1379.4,
      "fin": 1402.3,
      "inicio_fmt": "22:59",
      "fin_fmt": "23:07",
      "duracion_seg": 23.0,
      "extracto": "En el más breve plazo, aprobaremos la nueva Política Nacional de Desarrollo e Inclusión Social... Con esta nueva mirada en la Política de Desarrollo e Inclusión Social, revaloremos los programas sociales......",
      "color": "#d35400",
      "eventos": [
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Educación → Agricultura"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Anticorrupción → Agricultura"
        }
      ]
    },
    {
      "id": 67,
      "tema": "Economía",
      "inicio": 1433.7,
      "fin": 1447.6,
      "inicio_fmt": "23:53",
      "fin_fmt": "24:07",
      "duracion_seg": 13.9,
      "extracto": "...en situación de vulnerabilidad y pobreza, invirtiendo más de 3.000 millones de soles y ejecutando a la fecha más del 55% del presupuesto institucional....",
      "color": "#1a1a2e",
      "eventos": [
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"3.000 millones\""
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Economía"
        }
      ]
    },
    {
      "id": 68,
      "tema": "Democracia e Instituciones",
      "inicio": 1448.5,
      "fin": 1495.4,
      "inicio_fmt": "24:08",
      "fin_fmt": "24:19",
      "duracion_seg": 47.0,
      "extracto": "Asimismo, en lo que va de mi Gobierno, en respuesta a los retos de la seguridad alimentaria y nutricional, mediante el decreto legislativo 1472 del programa Caliguarma... Atendiendo a la política del sector, el Congreso de la República aprobó la Ley 13.458 y el reglamento de la ley que reconoce las...",
      "color": "#7f8c8d",
      "eventos": [
        {
          "tipo": "anuncio",
          "descripcion": "Anuncio o compromiso"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Economía → Democracia e Instituciones"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Democracia e Instituciones"
        }
      ]
    },
    {
      "id": 69,
      "tema": "Otros",
      "inicio": 1459.6,
      "fin": 1557.5,
      "inicio_fmt": "24:19",
      "fin_fmt": "24:25",
      "duracion_seg": 97.9,
      "extracto": "...este programa entregó más de 26.000 toneladas. ...de 5 a 11 kilos de productos de primera necesidad para mitigar el hambre en los hogares más vulnerables del país. No obstante a lo anterior, mediante el decreto de urgencia número 017 del 2022, se han destinado 96.8 millones de soles para atender...",
      "color": "#666",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Otros"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Anticorrupción → Otros"
        },
        {
          "tipo": "anuncio",
          "descripcion": "Anuncio o compromiso"
        },
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"96.8 millones\""
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Infraestructura → Otros"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Salud → Otros"
        },
        {
          "tipo": "anuncio",
          "descripcion": "Anuncio o compromiso"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Economía → Otros"
        }
      ]
    },
    {
      "id": 70,
      "tema": "Anticorrupción",
      "inicio": 1465.2,
      "fin": 1476.2,
      "inicio_fmt": "24:25",
      "fin_fmt": "24:36",
      "duracion_seg": 11.0,
      "extracto": "...a más de un millón de personas vulnerables, logrando entregar más de 2.500.000 canastas con alimentos que pasaron en mi Gobierno......",
      "color": "#e67e22",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Anticorrupción"
        }
      ]
    },
    {
      "id": 73,
      "tema": "Economía",
      "inicio": 1531.8,
      "fin": 1548.2,
      "inicio_fmt": "25:31",
      "fin_fmt": "25:40",
      "duracion_seg": 16.4,
      "extracto": "Para ello, en el año 2022, se logró incrementar el presupuesto de los comedores populares en 78 millones de soles... ...aumento del 67% del presupuesto que no se había dado en más de 30 años....",
      "color": "#1a1a2e",
      "eventos": [
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"78 mil\""
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Economía"
        },
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"67%\""
        }
      ]
    },
    {
      "id": 75,
      "tema": "Otros",
      "inicio": 1559.1,
      "fin": 1606.5,
      "inicio_fmt": "25:59",
      "fin_fmt": "26:11",
      "duracion_seg": 47.4,
      "extracto": "...en los próximos meses, otorgaremos un bono de apoyo alimentario a más de 6 millones de personas pobres y vulnerables con una inversión de 2.000 millones de soles. Esto ha representado la inclusión financiera de más de 2.2 millones de personas mediante las modalidades de pago, cuenta DNI y banca c...",
      "color": "#666",
      "eventos": [
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"2.000 millones\""
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Política Exterior → Otros"
        },
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"2.2 millones\""
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Economía → Otros"
        }
      ]
    },
    {
      "id": 76,
      "tema": "Regiones",
      "inicio": 1572.5,
      "fin": 1588.4,
      "inicio_fmt": "26:12",
      "fin_fmt": "26:28",
      "duracion_seg": 16.0,
      "extracto": "Implementamos una medida pública de emergencia con eficacia en tiempo récord, destinando más de 5.000 millones de soles para la entrega del apoyo económico Yanapa y Perú a más de 13.500.000 de personas....",
      "color": "#16a085",
      "eventos": [
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"5.000 millones\""
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Regiones"
        }
      ]
    },
    {
      "id": 78,
      "tema": "Educación",
      "inicio": 1606.5,
      "fin": 1669.4,
      "inicio_fmt": "26:46",
      "fin_fmt": "26:57",
      "duracion_seg": 62.9,
      "extracto": "Para asegurar la atención alimentaria escolar, el programa Cali Warma atendió a 4.197.000 estudiantes en más de 64.000 instituciones educativas a nivel nacional... ...distribuyéndose más de 93.000 toneladas de alimentos para el consumo de los niveles de educación inicial, primaria y secundaria. De i...",
      "color": "#27ae60",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Educación"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Educación"
        }
      ]
    },
    {
      "id": 80,
      "tema": "Economía",
      "inicio": 1639.0,
      "fin": 1651.0,
      "inicio_fmt": "27:18",
      "fin_fmt": "27:30",
      "duracion_seg": 12.0,
      "extracto": "El programa Pensión 65 se convertirá en una pensión del pueblo y se aumentará la subvención bimestral hasta 400 soles....",
      "color": "#1a1a2e",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Economía"
        }
      ]
    },
    {
      "id": 82,
      "tema": "Seguridad",
      "inicio": 1669.4,
      "fin": 1681.3,
      "inicio_fmt": "27:49",
      "fin_fmt": "28:01",
      "duracion_seg": 11.9,
      "extracto": "En este marco del fortalecimiento y rediseño del Sistema Nacional de Focalización de Hogares y con el fin de visibilizar a los más vulnerables......",
      "color": "#c0392b",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Educación → Seguridad"
        }
      ]
    },
    {
      "id": 84,
      "tema": "Democracia e Instituciones",
      "inicio": 1688.3,
      "fin": 1702.0,
      "inicio_fmt": "28:08",
      "fin_fmt": "28:09",
      "duracion_seg": 13.7,
      "extracto": "...públicas. En nuestro gobierno, respetamos los contratos vigentes....",
      "color": "#7f8c8d",
      "eventos": [
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Democracia e Instituciones"
        },
        {
          "tipo": "anuncio",
          "descripcion": "Anuncio o compromiso"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Economía → Democracia e Instituciones"
        }
      ]
    },
    {
      "id": 86,
      "tema": "Economía",
      "inicio": 1696.3,
      "fin": 1841.5,
      "inicio_fmt": "28:16",
      "fin_fmt": "28:17",
      "duracion_seg": 145.1,
      "extracto": "Energía y minas. Apoyamos el desarrollo de la actividad minera sostenible con integración multiactor. Aquí, los intereses de todos y todas apoyan el desarrollo del clúster minero productivo... ...generando un importante desarrollo económico en las regiones de nuestro país. Por ello, es importante re...",
      "color": "#1a1a2e",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Economía"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Economía"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Economía"
        },
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"10%\""
        },
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"15%\""
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"64%\""
        },
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"5.242 millones\""
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Economía"
        },
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"5.300 millones\""
        },
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"5.600 millones\""
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Economía"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        }
      ]
    },
    {
      "id": 89,
      "tema": "Otros",
      "inicio": 1778.7,
      "fin": 1813.5,
      "inicio_fmt": "29:38",
      "fin_fmt": "29:42",
      "duracion_seg": 34.8,
      "extracto": "Asimismo, el canon minero registró un récord histórico... ...sumando más de 7.844 millones de soles, reflejando un aumento significativo del 166% respecto a lo reportado en el año 2021. ...1.887 millones de dólares....",
      "color": "#666",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Economía → Otros"
        },
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"7.844 millones\""
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"1.887 millones\""
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Economía → Otros"
        }
      ]
    },
    {
      "id": 90,
      "tema": "Regiones",
      "inicio": 1841.5,
      "fin": 1860.4,
      "inicio_fmt": "30:41",
      "fin_fmt": "30:45",
      "duracion_seg": 19.0,
      "extracto": "...con presencia en toda la región. ...en la región de Arequipa, que produjo la pérdida de varias vidas humanas......",
      "color": "#16a085",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Economía → Regiones"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Arequipa"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Seguridad → Regiones"
        }
      ]
    },
    {
      "id": 92,
      "tema": "Economía",
      "inicio": 1860.4,
      "fin": 1922.5,
      "inicio_fmt": "31:00",
      "fin_fmt": "31:07",
      "duracion_seg": 62.1,
      "extracto": "...por esta situación, nuestro gobierno incorporó una causal de exclusión al proceso de formalización minera... ...inmersos en el proceso de formalización, a fin de que ejercen, ejecuten y proyecten el desarrollo de sus actividades mineras... ...Petro Perú continúa con el proceso de arranque gradual...",
      "color": "#1a1a2e",
      "eventos": [
        {
          "tipo": "anuncio",
          "descripcion": "Anuncio o compromiso"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Economía"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Agricultura → Economía"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Infraestructura → Economía"
        }
      ]
    },
    {
      "id": 97,
      "tema": "Otros",
      "inicio": 1922.5,
      "fin": 2011.1,
      "inicio_fmt": "32:02",
      "fin_fmt": "32:09",
      "duracion_seg": 88.6,
      "extracto": "...la misma que ya ha iniciado pruebas de garantía de su unidad de destilación primaria. Asimismo, la empresa ya ha recibido de sus principales contratistas y licenciantes más de 10 unidades y plantas que conforman este moderno complejo refinero... ...por lo que permitirá su puesta en operación... ....",
      "color": "#666",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Economía → Otros"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Otros"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Infraestructura → Otros"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Economía → Otros"
        }
      ]
    },
    {
      "id": 99,
      "tema": "Regiones",
      "inicio": 1962.1,
      "fin": 1977.6,
      "inicio_fmt": "32:42",
      "fin_fmt": "32:57",
      "duracion_seg": 15.5,
      "extracto": "...entre Petro Perú y Perú Petro marca el reingreso de Petro Perú a las actividades de explotación petrolera en la selva peruana......",
      "color": "#16a085",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Regiones"
        }
      ]
    },
    {
      "id": 100,
      "tema": "Infraestructura",
      "inicio": 1987.8,
      "fin": 2039.8,
      "inicio_fmt": "33:07",
      "fin_fmt": "33:13",
      "duracion_seg": 52.0,
      "extracto": "...fortaleciendo su desempeño cooperativo y competitividad dentro del sector hidrocarburos. ...entre otros beneficios que permita masificar el uso de estos vehículos de menores costos. Debido a que ya contamos con electrolineras instaladas en Lima, en Lima Metropolitana y en toda la Panamericana......",
      "color": "#8e44ad",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Infraestructura"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Economía → Infraestructura"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica, Lima"
        }
      ]
    },
    {
      "id": 101,
      "tema": "Economía",
      "inicio": 1996.9,
      "fin": 2018.1,
      "inicio_fmt": "33:16",
      "fin_fmt": "33:25",
      "duracion_seg": 21.2,
      "extracto": "Mi gobierno, ante el alza de precios de los combustibles como alternativa de transporte barato, limpio y moderno para el sector público y privado... ...un proyecto de ley que brinde incentivos tributarios a la importación de vehículos eléctricos......",
      "color": "#1a1a2e",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Economía"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Economía"
        }
      ]
    },
    {
      "id": 102,
      "tema": "Regiones",
      "inicio": 2039.8,
      "fin": 2117.2,
      "inicio_fmt": "33:59",
      "fin_fmt": "34:06",
      "duracion_seg": 77.4,
      "extracto": "...desde Tumbes hasta Tacna, esta estrategia acompañará el proceso de masificación de gas natural... Una necesidad y esperanza de todos los peruanos y peruanas es que, a través de la nueva política de masificación del gas natural... ...descentralicemos este recurso energético y promovamos su uso int...",
      "color": "#16a085",
      "eventos": [
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica, Tacna, Tumbes"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Infraestructura → Regiones"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Agricultura → Regiones"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Regiones"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Economía → Regiones"
        }
      ]
    },
    {
      "id": 104,
      "tema": "Economía",
      "inicio": 2049.4,
      "fin": 2106.1,
      "inicio_fmt": "34:09",
      "fin_fmt": "34:11",
      "duracion_seg": 56.8,
      "extracto": "...de la matriz energética de nuestro país. ...y contribuir a la reactivación económica nacional. Asimismo, con la implementación del programa Bono Gas del Fondo de Inclusión Social Energético......",
      "color": "#1a1a2e",
      "eventos": [
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Economía"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Economía"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Economía"
        }
      ]
    },
    {
      "id": 106,
      "tema": "Otros",
      "inicio": 2080.6,
      "fin": 2096.1,
      "inicio_fmt": "34:40",
      "fin_fmt": "34:56",
      "duracion_seg": 15.5,
      "extracto": "El 28 de julio al 28 de junio del 2022 se cuenta con más de 1.600.000 usuarios conectados al servicio de gas natural residencial......",
      "color": "#666",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Economía → Otros"
        }
      ]
    },
    {
      "id": 108,
      "tema": "Infraestructura",
      "inicio": 2126.4,
      "fin": 2157.3,
      "inicio_fmt": "35:26",
      "fin_fmt": "35:33",
      "duracion_seg": 30.9,
      "extracto": "En cuanto a la conversión de vehículos, se ha intensificado el programa Ahorro GNV... A la fecha del programa ha beneficiado la conversión de más de 38.000 vehículos. ...hemos asignado un presupuesto de 150 millones de soles para ejecutar el proyecto especial de infraestructura......",
      "color": "#8e44ad",
      "eventos": [
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Educación → Infraestructura"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Infraestructura"
        },
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"150 mil\""
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Infraestructura"
        }
      ]
    },
    {
      "id": 109,
      "tema": "Regiones",
      "inicio": 2133.2,
      "fin": 2191.3,
      "inicio_fmt": "35:33",
      "fin_fmt": "35:39",
      "duracion_seg": 58.1,
      "extracto": "...el cual viene financiando la conversión de vehículos a gas natural vehicular en 9 regiones del país. ...para la masificación del gas natural en las regiones de Acucho, Cusco, Ucayali, Huancavelica, Apurímac, Puno y Junín. Esto nos permitirá llevar los beneficios del gas natural a las nuevas regio...",
      "color": "#16a085",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Infraestructura → Regiones"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Apurímac, Cusco, Huancavelica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Infraestructura → Regiones"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Regiones"
        }
      ]
    },
    {
      "id": 111,
      "tema": "Agricultura",
      "inicio": 2178.0,
      "fin": 2201.6,
      "inicio_fmt": "36:17",
      "fin_fmt": "36:18",
      "duracion_seg": 23.7,
      "extracto": "Electrificación rural. Desde agosto del 2021 a la fecha, el Ministerio de Energías y Minas ha concluido la ejecución de 20 obras de electrificación rural......",
      "color": "#d35400",
      "eventos": [
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Agricultura"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Agricultura"
        }
      ]
    },
    {
      "id": 112,
      "tema": "Otros",
      "inicio": 2178.9,
      "fin": 2240.6,
      "inicio_fmt": "36:18",
      "fin_fmt": "36:25",
      "duracion_seg": 61.6,
      "extracto": "Se tienen 1.948 millones de soles financiando... ...por un monto de 102 millones de soles, electrificando 418 localidades y beneficiando a una población de más de 38.000 habitantes de 11 regiones del país. Asimismo... ...cuenten por primera vez con electricidad en sus viviendas....",
      "color": "#666",
      "eventos": [
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"1.948 millones\""
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Agricultura → Otros"
        },
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"102 mil\""
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Agricultura → Otros"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Otros"
        }
      ]
    },
    {
      "id": 114,
      "tema": "Regiones",
      "inicio": 2222.6,
      "fin": 2332.9,
      "inicio_fmt": "37:02",
      "fin_fmt": "37:16",
      "duracion_seg": 110.3,
      "extracto": "...que permitirán que 250.000 habitantes de las regiones de Amazonas, Ancash, Apurímac, Ayacucho, Cajamarca, Huánuco, La Libertad, Loreto, Puno, Piura y San Martín... ...por un monto de inversión de 463 millones de soles en 14 regiones del país que beneficiarán a 149.000 habitantes. ...que permitirá...",
      "color": "#16a085",
      "eventos": [
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Amazonas, Ancash, Apurímac"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Economía → Regiones"
        },
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"463 mil\""
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Infraestructura → Regiones"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Agricultura → Regiones"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Agricultura → Regiones"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Agricultura → Regiones"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Regiones"
        }
      ]
    },
    {
      "id": 115,
      "tema": "Infraestructura",
      "inicio": 2240.6,
      "fin": 2254.7,
      "inicio_fmt": "37:20",
      "fin_fmt": "37:34",
      "duracion_seg": 14.1,
      "extracto": "Además, se han convocado 33 procesos de selección para la ejecución de proyectos......",
      "color": "#8e44ad",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Infraestructura"
        }
      ]
    },
    {
      "id": 116,
      "tema": "Agricultura",
      "inicio": 2264.1,
      "fin": 2339.7,
      "inicio_fmt": "37:44",
      "fin_fmt": "37:51",
      "duracion_seg": 75.6,
      "extracto": "En lo que resta del presente año, se tiene previsto concluir 22 proyectos de electrificación rural... En lo que resta del presente año, se tiene previsto concluir 22 proyectos de electrificación rural... Segunda reforma agraria. La agricultura es una política central de mi gestión. La segunda reform...",
      "color": "#d35400",
      "eventos": [
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Agricultura"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Economía → Agricultura"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Agricultura"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Agricultura"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Agricultura"
        }
      ]
    },
    {
      "id": 122,
      "tema": "Agricultura",
      "inicio": 2350.7,
      "fin": 2399.7,
      "inicio_fmt": "39:10",
      "fin_fmt": "39:19",
      "duracion_seg": 49.1,
      "extracto": "...el padrón de productores agrarios que crea la identidad digital de los productores y productoras del país... ...que permitirá acceder a créditos de agrobanco, la valoración económica del capital agropecuario... ...acceso a fertilizantes, semillas y guano de islas, información de precios, monitore...",
      "color": "#d35400",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Infraestructura → Agricultura"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Agricultura"
        },
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"426 mil\""
        }
      ]
    },
    {
      "id": 123,
      "tema": "Otros",
      "inicio": 2377.4,
      "fin": 2421.2,
      "inicio_fmt": "39:37",
      "fin_fmt": "39:40",
      "duracion_seg": 43.7,
      "extracto": "...todas estas ventajas digitalizan... ...en 900 centros de empadronamiento, con una proyección de lograr un millón de productores empadronados a fines del 2022. Esta información nos permitirá tener un diagnóstico individual de las necesidades y potencialidades de cada productor... ...y servirá para...",
      "color": "#666",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Agricultura → Otros"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Agricultura → Otros"
        }
      ]
    },
    {
      "id": 125,
      "tema": "Agricultura",
      "inicio": 2430.2,
      "fin": 2532.1,
      "inicio_fmt": "40:30",
      "fin_fmt": "40:37",
      "duracion_seg": 101.9,
      "extracto": "En el contexto de la emergencia mundial por la escasez de fertilizantes, hemos tomado las medidas pertinentes. La compra e importación de fertilizantes, que concluirá a fines de julio, garantiza el abastecimiento de los agricultores con precios subsidiados. Estos fertilizantes llegarán... En tal raz...",
      "color": "#d35400",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Economía → Agricultura"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Agricultura"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Economía → Agricultura"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Agricultura"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Agricultura"
        },
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"30 mil\""
        }
      ]
    },
    {
      "id": 127,
      "tema": "Economía",
      "inicio": 2460.4,
      "fin": 2514.6,
      "inicio_fmt": "41:00",
      "fin_fmt": "41:17",
      "duracion_seg": 54.2,
      "extracto": "A través del Fondo Agro Perú, se destinaron 960 millones de soles en créditos con condiciones accesibles... Con ello, se ayuda a mejorar su productividad. se han destinado 60 millones de soles al cofinanciamiento de 540 planes de negocios asociados al agro....",
      "color": "#1a1a2e",
      "eventos": [
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"960 mil\""
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Agricultura → Economía"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Agricultura → Economía"
        },
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"60 mil\""
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Agricultura → Economía"
        }
      ]
    },
    {
      "id": 129,
      "tema": "Otros",
      "inicio": 2493.5,
      "fin": 2519.6,
      "inicio_fmt": "41:33",
      "fin_fmt": "41:39",
      "duracion_seg": 26.1,
      "extracto": "Disponemos de 1.400 millones para las próximas acciones. Así se beneficia a 21.273....",
      "color": "#666",
      "eventos": [
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"1.400 millones\""
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Otros"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Economía → Otros"
        }
      ]
    },
    {
      "id": 131,
      "tema": "Agricultura",
      "inicio": 2540.9,
      "fin": 2578.9,
      "inicio_fmt": "42:20",
      "fin_fmt": "42:35",
      "duracion_seg": 38.0,
      "extracto": "La siembra, cosecha, crianza de agua desde las cuencas vienen recibiendo y recibirán todo el impulso... ...en la política agropecuaria. Se dará inicio a la política de agricultura urbana y periurbana articulada a los productores y las municipalidades. Con el MINEDO se viene desarrollando la incorpor...",
      "color": "#d35400",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Anticorrupción → Agricultura"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        }
      ]
    },
    {
      "id": 133,
      "tema": "Regiones",
      "inicio": 2580.6,
      "fin": 2594.4,
      "inicio_fmt": "43:00",
      "fin_fmt": "43:06",
      "duracion_seg": 13.8,
      "extracto": "Mi gobierno ha encontrado un territorio con ríos contaminados, botadero de residuos sólidos, grandes áreas deterioradas y con pérdida de bosques y derrame de petróleo en el mar y en la Amazonía....",
      "color": "#16a085",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Infraestructura → Regiones"
        }
      ]
    },
    {
      "id": 134,
      "tema": "Otros",
      "inicio": 2594.4,
      "fin": 2640.4,
      "inicio_fmt": "43:14",
      "fin_fmt": "43:19",
      "duracion_seg": 46.0,
      "extracto": "En cuanto al derrame de petróleo en el mar de Ventanilla causado por Repsol, se le ha impuesto multas por un monto de 7.7 millones de soles Por ello, hemos desarrollado por primera vez el evento de Ciencia y Tecnología Ambiental 2022,...",
      "color": "#666",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Otros"
        },
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"7.7 millones\""
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Otros"
        }
      ]
    },
    {
      "id": 135,
      "tema": "Democracia e Instituciones",
      "inicio": 2604.8,
      "fin": 2633.4,
      "inicio_fmt": "43:24",
      "fin_fmt": "43:29",
      "duracion_seg": 28.6,
      "extracto": "y se continúa con ocho procedimientos administrativos sancionadores. El gobierno del pueblo invierte en ciencia, tecnología e innovación....",
      "color": "#7f8c8d",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Democracia e Instituciones"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Infraestructura → Democracia e Instituciones"
        }
      ]
    },
    {
      "id": 137,
      "tema": "Infraestructura",
      "inicio": 2616.6,
      "fin": 2651.2,
      "inicio_fmt": "43:36",
      "fin_fmt": "43:40",
      "duracion_seg": 34.6,
      "extracto": "contaminación ambiental contra Repsol y quienes resulten responsables. para enfrentar la crisis ambiental y climática....",
      "color": "#8e44ad",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Seguridad → Infraestructura"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Educación → Infraestructura"
        }
      ]
    },
    {
      "id": 141,
      "tema": "Democracia e Instituciones",
      "inicio": 2666.4,
      "fin": 2687.2,
      "inicio_fmt": "44:26",
      "fin_fmt": "44:33",
      "duracion_seg": 20.8,
      "extracto": "Tecnología e Innovación, que en la segunda legislatura no fue agendada. de información sistematizada e integrada,...",
      "color": "#7f8c8d",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Agricultura → Democracia e Instituciones"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Infraestructura → Democracia e Instituciones"
        }
      ]
    },
    {
      "id": 142,
      "tema": "Regiones",
      "inicio": 2673.9,
      "fin": 2777.7,
      "inicio_fmt": "44:33",
      "fin_fmt": "44:40",
      "duracion_seg": 103.8,
      "extracto": "A través del Servicio Nacional de Meteorología y Hidrología de Perú, que registra los centros poblados que podrían verse afectados ubicado en el distrito de Sachaca, Arequipa, a través de 29 estaciones de monitoreo distribuidas en las regiones de Piura, La Libertad, Ancash, Lima, Pasco, Junín, Arequ...",
      "color": "#16a085",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Regiones"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Regiones"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Arequipa, Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Regiones"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Piura"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Infraestructura → Regiones"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ancash, Arequipa, Cusco"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Regiones"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Regiones"
        }
      ]
    },
    {
      "id": 143,
      "tema": "Infraestructura",
      "inicio": 2680.3,
      "fin": 2730.1,
      "inicio_fmt": "44:40",
      "fin_fmt": "44:44",
      "duracion_seg": 49.8,
      "extracto": "CENAMI se ha implementado la plataforma hidrológica de información, a causa de la escrecía de los ríos y su posible activación de quebradas, de los niveles de los contaminantes que se miden en tiempo real a nivel nacional...",
      "color": "#8e44ad",
      "eventos": [
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Infraestructura"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Infraestructura"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Infraestructura"
        }
      ]
    },
    {
      "id": 145,
      "tema": "Otros",
      "inicio": 2698.2,
      "fin": 2824.2,
      "inicio_fmt": "44:58",
      "fin_fmt": "45:01",
      "duracion_seg": 125.9,
      "extracto": "El Instituto Geofísico del Perú, este 8 de agosto, va a inaugurar el Observatorio Vulcanológico del Sur, con una inversión de casi 19 millones de soles. CENFA ha puesto en servicio la plataforma de visualización que este primer año ha beneficiado a más de 7.000 familias Asimismo, se invertirá 78 mil...",
      "color": "#666",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Seguridad → Otros"
        },
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"19 mil\""
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Otros"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Otros"
        },
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"78 mil\""
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Otros"
        },
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"127 mil\""
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Otros"
        },
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"28 mil\""
        }
      ]
    },
    {
      "id": 147,
      "tema": "Infraestructura",
      "inicio": 2781.2,
      "fin": 2791.8,
      "inicio_fmt": "46:21",
      "fin_fmt": "46:31",
      "duracion_seg": 10.6,
      "extracto": "se modernizó la infraestructura de los desembarcaderos pesqueros ubicados en Yaxila y Cabo Blanco en la región Piura,...",
      "color": "#8e44ad",
      "eventos": [
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica, Piura"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Agricultura → Infraestructura"
        }
      ]
    },
    {
      "id": 149,
      "tema": "Infraestructura",
      "inicio": 2824.2,
      "fin": 2897.9,
      "inicio_fmt": "47:04",
      "fin_fmt": "47:11",
      "duracion_seg": 73.7,
      "extracto": "Al 2026, se habilitarán 34 infraestructuras pesqueras artesanales y acuícolas, en la sostenibilidad de las actividades pesqueras y acuícolas, la Autoridad Marítima, la Autoridad Ambiental, para garantizar el desarrollo sostenible de la actividad pesquera. los recursos hidrobiológicos a precios econó...",
      "color": "#8e44ad",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Infraestructura"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Infraestructura"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Infraestructura"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Infraestructura"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Infraestructura"
        }
      ]
    },
    {
      "id": 150,
      "tema": "Regiones",
      "inicio": 2831.1,
      "fin": 2893.5,
      "inicio_fmt": "47:11",
      "fin_fmt": "47:17",
      "duracion_seg": 62.4,
      "extracto": "con proyección estratégica a los ámbitos amazónicos y altoandinos. de fiscalización en el territorio nacional y más de 2 mil operativos especiales regionales y locales en más de 30 provincias del ámbito marítimo y 10 provincias del ámbito continental, El Programa Nacional a Comer Pescado lleva a las...",
      "color": "#16a085",
      "eventos": [
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Infraestructura → Regiones"
        },
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"2 mil\""
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Regiones"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Seguridad → Regiones"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Infraestructura → Regiones"
        }
      ]
    },
    {
      "id": 151,
      "tema": "Democracia e Instituciones",
      "inicio": 2837.5,
      "fin": 2869.3,
      "inicio_fmt": "47:17",
      "fin_fmt": "47:22",
      "duracion_seg": 31.8,
      "extracto": "Es un compromiso firme de mi Gobierno mantener un equilibrio económico, social y ambiental, En lo que va de mi periodo gubernamental, se han realizado más de 145 mil acciones con la participación de las Fiscalías especializadas en temas ambientales,...",
      "color": "#7f8c8d",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Democracia e Instituciones"
        },
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"145 mil\""
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Economía → Democracia e Instituciones"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Democracia e Instituciones"
        }
      ]
    },
    {
      "id": 154,
      "tema": "Otros",
      "inicio": 2897.9,
      "fin": 2974.8,
      "inicio_fmt": "48:17",
      "fin_fmt": "48:22",
      "duracion_seg": 76.9,
      "extracto": "con una proyección de comercialización al 2026 de 15 mil 500 toneladas, de pescado y 11 millones de conservas, a fin de reducir la desnutrición y la anemia, por 68 millones 200 mil soles, 37 MIPES por 44.8 millones de soles Al 2026 se espera atender una demanda de 1.150 millones de soles en benefici...",
      "color": "#666",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Infraestructura → Otros"
        },
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"15 mil\""
        },
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"11 mil\""
        },
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"68 mil\""
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Agricultura → Otros"
        },
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"44.8 millones\""
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Política Exterior → Otros"
        },
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"1.150 millones\""
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Economía → Otros"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Economía → Otros"
        },
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"800 mil\""
        }
      ]
    },
    {
      "id": 155,
      "tema": "Economía",
      "inicio": 2911.3,
      "fin": 2965.1,
      "inicio_fmt": "48:31",
      "fin_fmt": "48:34",
      "duracion_seg": 53.8,
      "extracto": "y promover la reactivación económica. para producción de bienes para entidades estatales, generando de forma indirecta 27.300 puestos de trabajo formal. Se creó el Fondo de Apoyo Empresarial para el Sistema Económico,...",
      "color": "#1a1a2e",
      "eventos": [
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Economía"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Economía"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Economía"
        }
      ]
    },
    {
      "id": 160,
      "tema": "Otros",
      "inicio": 2978.9,
      "fin": 3054.9,
      "inicio_fmt": "49:38",
      "fin_fmt": "49:43",
      "duracion_seg": 76.0,
      "extracto": "brindan servicios tecnológicos para el desarrollo de productos innovadores. tales como Cite Agroindustrial Brian con 12.8 millones de soles, Agroindustrial Ica con 59 millones de soles. En mi primer año de gestión suman más de 52.300 las familias Gracias al Bono Techo Propio y al Crédito Mi Vivienda...",
      "color": "#666",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Anticorrupción → Otros"
        },
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"12.8 millones\""
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Agricultura → Otros"
        },
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"59 mil\""
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Otros"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Infraestructura → Otros"
        },
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"1.500 millones\""
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"116 mil\""
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Economía → Otros"
        },
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"504 mil\""
        }
      ]
    },
    {
      "id": 162,
      "tema": "Infraestructura",
      "inicio": 3000.0,
      "fin": 3025.6,
      "inicio_fmt": "50:00",
      "fin_fmt": "50:05",
      "duracion_seg": 25.5,
      "extracto": "Vivienda digna, agua y saneamiento. En nuestro gobierno una preocupación fundamental ha sido llevar vivienda digna y segura que han podido cumplir el sueño de la casa propia en las zonas urbanas del país....",
      "color": "#8e44ad",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Infraestructura"
        },
        {
          "tipo": "anuncio",
          "descripcion": "Anuncio o compromiso"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Infraestructura"
        }
      ]
    },
    {
      "id": 165,
      "tema": "Regiones",
      "inicio": 3054.9,
      "fin": 3075.3,
      "inicio_fmt": "50:54",
      "fin_fmt": "50:58",
      "duracion_seg": 20.4,
      "extracto": "En las zonas rurales, donde las brechas sociales son más grandes hemos construido cerca de 14.700 viviendas bioclimáticas Sumahuasi, casitas calientes, a las familias de las zonas más pobres del país...",
      "color": "#16a085",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Regiones"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Regiones"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Regiones"
        }
      ]
    },
    {
      "id": 166,
      "tema": "Otros",
      "inicio": 3058.4,
      "fin": 3088.8,
      "inicio_fmt": "50:58",
      "fin_fmt": "51:00",
      "duracion_seg": 30.4,
      "extracto": "y las condiciones de vida son más duras, que ahora protegen de los efectos de las heladas y el friaje y les brinda seguridad y confort térmico. Ello ha significado una inversión de alrededor de 404 millones de soles. Sabemos que esto no es suficiente. Por esto, vamos a continuar llevando...",
      "color": "#666",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Otros"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Otros"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Otros"
        },
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"404 mil\""
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "anuncio",
          "descripcion": "Anuncio o compromiso"
        }
      ]
    },
    {
      "id": 167,
      "tema": "Infraestructura",
      "inicio": 3088.8,
      "fin": 3119.3,
      "inicio_fmt": "51:28",
      "fin_fmt": "51:33",
      "duracion_seg": 30.5,
      "extracto": "más viviendas seguras y de calidad a nuestros hermanos y hermanas A fines del 2023, esperamos construir más de 25.000 viviendas Sumahuasi. financiamos más de 450 proyectos de agua y saneamiento y de mejoramiento,...",
      "color": "#8e44ad",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Infraestructura"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Agricultura → Infraestructura"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Infraestructura"
        }
      ]
    },
    {
      "id": 169,
      "tema": "Regiones",
      "inicio": 3106.5,
      "fin": 3173.6,
      "inicio_fmt": "51:46",
      "fin_fmt": "51:51",
      "duracion_seg": 67.1,
      "extracto": "Para mejorar la calidad de vida de las familias peruanas durante este primer año de gobierno, estas obras son ejecutadas directamente por las municipalidades y los gobiernos regionales de todo el país, beneficiando a los habitantes de las 24 regiones. Mi gobierno conduce a través del Minsetur la rea...",
      "color": "#16a085",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Infraestructura → Regiones"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Economía → Regiones"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Política Exterior → Regiones"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Regiones"
        }
      ]
    },
    {
      "id": 170,
      "tema": "Otros",
      "inicio": 3119.7,
      "fin": 3196.5,
      "inicio_fmt": "51:59",
      "fin_fmt": "52:05",
      "duracion_seg": 76.7,
      "extracto": "con una inversión de más de 2.700 millones de soles. Toda su cadena de valor propició, al mes de julio, la llegada de un millón de turistas de todas las partes del mundo, A nivel de turismo interno, se han realizado 20.300.000 viajes cerca de 500 recursos turísticos inventariados. hemos adicionado 1...",
      "color": "#666",
      "eventos": [
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"2.700 millones\""
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Infraestructura → Otros"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Otros"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Economía → Otros"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Otros"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Otros"
        }
      ]
    },
    {
      "id": 171,
      "tema": "Economía",
      "inicio": 3125.1,
      "fin": 3208.0,
      "inicio_fmt": "52:05",
      "fin_fmt": "52:11",
      "duracion_seg": 82.9,
      "extracto": "En el Plan de Reactivación Económica por Inversión Pública Perú en Marcha 1 y 2, que dejaron divisas al país por un valor de 6.000 millones de soles. logrando un movimiento económico superior a los 8.000 millones de soles. Otro indicador de reactivación es el ingreso al país...",
      "color": "#1a1a2e",
      "eventos": [
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Economía"
        },
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"6.000 millones\""
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Economía"
        },
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"8.000 millones\""
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Economía"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Agricultura → Economía"
        }
      ]
    },
    {
      "id": 173,
      "tema": "Democracia e Instituciones",
      "inicio": 3179.5,
      "fin": 3189.8,
      "inicio_fmt": "52:59",
      "fin_fmt": "53:01",
      "duracion_seg": 10.3,
      "extracto": "Recibimos del gobierno anterior, Nosotros, en trabajo conjunto con gobernadores y alcaldes,...",
      "color": "#7f8c8d",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Economía → Democracia e Instituciones"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Democracia e Instituciones"
        }
      ]
    },
    {
      "id": 176,
      "tema": "Otros",
      "inicio": 3215.3,
      "fin": 3280.3,
      "inicio_fmt": "53:35",
      "fin_fmt": "53:37",
      "duracion_seg": 65.0,
      "extracto": "Hace solo un año, Restaurantes, hoteles, alojamientos diversos, Para atenuar el grave impacto, destinamos 700 millones de soles Se dieron 200 millones de soles, y hoy se tiene a disposición otros 400 millones de soles para continuar su reactivación. con las ollas y cucharones....",
      "color": "#666",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Política Exterior → Otros"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Otros"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Otros"
        },
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"700 mil\""
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Economía → Otros"
        },
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"200 mil\""
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Otros"
        },
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"400 mil\""
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Otros"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Otros"
        }
      ]
    },
    {
      "id": 178,
      "tema": "Regiones",
      "inicio": 3220.1,
      "fin": 3277.8,
      "inicio_fmt": "53:40",
      "fin_fmt": "53:42",
      "duracion_seg": 57.7,
      "extracto": "de los operadores turísticos de todo el país. organizaciones comunales, guías turísticos, artesanos. en subvenciones a más de 7.700 operadores turísticos. en microcréditos, al FAE Turismo, Compatriotas, ser reconocido como el mejor destino culinario del mundo dice mucho de este binomio de biodiversi...",
      "color": "#16a085",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Salud → Regiones"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Regiones"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Regiones"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Regiones"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Regiones"
        }
      ]
    },
    {
      "id": 180,
      "tema": "Política Exterior",
      "inicio": 3280.3,
      "fin": 3348.0,
      "inicio_fmt": "54:40",
      "fin_fmt": "54:44",
      "duracion_seg": 67.8,
      "extracto": "La ley que regula los juegos a distancia y apuestas deportivas Respecto al comercio exterior de bienes y servicios, En esa línea hemos logrado el ingreso del Perú a gran acuerdo comercial en el Tratado Integral y Progresista de Asociación Transpacífico Es un acierto haber suscrito como país el Trata...",
      "color": "#2c3e50",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Política Exterior"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Economía → Política Exterior"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Política Exterior"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Política Exterior"
        }
      ]
    },
    {
      "id": 182,
      "tema": "Economía",
      "inicio": 3293.1,
      "fin": 3319.9,
      "inicio_fmt": "54:53",
      "fin_fmt": "54:57",
      "duracion_seg": 26.8,
      "extracto": "Gracias a esta norma, el país recaudará 160 millones de soles anuales. hemos obtenido un crecimiento continuo entre julio de 2021 y del 2022, logrando un récord de exportaciones superior a los 62.000 millones de dólares, así como disponer de 5.000 productores exportados a España. así como disponer d...",
      "color": "#1a1a2e",
      "eventos": [
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"160 mil\""
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Economía"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Política Exterior → Economía"
        },
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"62.000 millones\""
        }
      ]
    },
    {
      "id": 184,
      "tema": "Otros",
      "inicio": 3334.4,
      "fin": 3375.6,
      "inicio_fmt": "55:34",
      "fin_fmt": "55:37",
      "duracion_seg": 41.2,
      "extracto": "que entró en vigor en el mes de septiembre del 2021. en comparación con el histórico de los últimos cinco años. Hemos llegado a más de 310 millones de soles al cierre del primer semestre,...",
      "color": "#666",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Política Exterior → Otros"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Economía → Otros"
        },
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"310 mil\""
        }
      ]
    },
    {
      "id": 185,
      "tema": "Salud",
      "inicio": 3353.5,
      "fin": 3441.2,
      "inicio_fmt": "55:53",
      "fin_fmt": "55:55",
      "duracion_seg": 87.7,
      "extracto": "Salud para el Perú. Proyecto de inversión en salud. Desde el Ministerio de Salud se han habilitado y transformado un total de 257 millones de soles para inversiones en salud montos para la continuidad de inversiones en Centro de Salud de Pugliura, Centro de Salud Pichari y en los hospitales de apoyo...",
      "color": "#2980b9",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Política Exterior → Salud"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Economía → Salud"
        },
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"257 mil\""
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Salud"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: San Martín"
        }
      ]
    },
    {
      "id": 186,
      "tema": "Economía",
      "inicio": 3358.6,
      "fin": 3395.1,
      "inicio_fmt": "55:58",
      "fin_fmt": "56:06",
      "duracion_seg": 36.5,
      "extracto": "En el primer semestre del 2022, el Ministerio de Salud ha ejecutado más recursos de inversiones lo cual implica una ejecución de un 32% más respecto al primer semestre del 2021. que no contaban con presupuesto al 2022,...",
      "color": "#1a1a2e",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Salud → Economía"
        },
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"32%\""
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Economía"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Salud → Economía"
        }
      ]
    },
    {
      "id": 187,
      "tema": "Regiones",
      "inicio": 3395.8,
      "fin": 3416.7,
      "inicio_fmt": "56:35",
      "fin_fmt": "56:42",
      "duracion_seg": 20.9,
      "extracto": "de los cuales 237 millones de soles corresponden a inversiones en las regiones de Loreto, Ayacucho, Amazonas, Cajamarca, Huancabelica, Huánuco, Cusco, Apurima, Lambayeque y La Libertad. Dada la importancia que tiene para mí el desarrollo de la zona del Braem,...",
      "color": "#16a085",
      "eventos": [
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"237 mil\""
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Loreto"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Economía → Regiones"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Amazonas, Ayacucho, Cajamarca"
        }
      ]
    },
    {
      "id": 188,
      "tema": "Otros",
      "inicio": 3416.7,
      "fin": 3475.0,
      "inicio_fmt": "56:56",
      "fin_fmt": "56:58",
      "duracion_seg": 58.3,
      "extracto": "se ha incluido montos... se han destinado 3 millones y medio de soles para la elaboración del expediente técnico del Hospital San Juan del Urigancho. La culminación se estima para diciembre del presente año. cuya inversión representa más de 620 millones de soles,...",
      "color": "#666",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Otros"
        },
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"3 mil\""
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Otros"
        },
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"620 mil\""
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Otros"
        }
      ]
    },
    {
      "id": 189,
      "tema": "Democracia e Instituciones",
      "inicio": 3442.1,
      "fin": 3469.8,
      "inicio_fmt": "57:22",
      "fin_fmt": "57:24",
      "duracion_seg": 27.7,
      "extracto": "Acorde al compromiso al asumir la presidencia, Previniéndose el inicio de la ejecución de la obra para el segundo semestre del año 2023,...",
      "color": "#7f8c8d",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Salud → Democracia e Instituciones"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Democracia e Instituciones"
        }
      ]
    },
    {
      "id": 190,
      "tema": "Salud",
      "inicio": 3475.0,
      "fin": 3558.2,
      "inicio_fmt": "57:54",
      "fin_fmt": "58:03",
      "duracion_seg": 83.2,
      "extracto": "que contará con 280 camas hospitalarias, 35 camas UCI, 43 camas de observación de emergencia, 10 salas de operaciones y 2 salas de partos, Hospital San Juan del Urigancho. el cual recogerá las recomendaciones de buenas prácticas internacionales para la implementación de hospitales. con un hospital e...",
      "color": "#2980b9",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Salud"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Salud"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Salud"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Lima"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Salud"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Cusco"
        }
      ]
    },
    {
      "id": 191,
      "tema": "Regiones",
      "inicio": 3486.9,
      "fin": 3509.9,
      "inicio_fmt": "58:06",
      "fin_fmt": "58:12",
      "duracion_seg": 23.0,
      "extracto": "en beneficio de más de un millón de habitantes residentes en el distrito más poblado del país. Bajo la modalidad gobierno a gobierno, el Ministerio de Salud, a través del PRONIS, en el distrito de Comas, en Lima,...",
      "color": "#16a085",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Salud → Regiones"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Salud → Regiones"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Lima"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Infraestructura → Regiones"
        }
      ]
    },
    {
      "id": 193,
      "tema": "Otros",
      "inicio": 3518.0,
      "fin": 3532.3,
      "inicio_fmt": "58:37",
      "fin_fmt": "58:45",
      "duracion_seg": 14.3,
      "extracto": "En el primer trimestre del 2023 se iniciará la ejecución física de las obras tempranas, bajo el enfoque FACS-TRAC, con el objetivo de contar con un plazo de aproximadamente dos años...",
      "color": "#666",
      "eventos": [
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Salud → Otros"
        }
      ]
    },
    {
      "id": 194,
      "tema": "Infraestructura",
      "inicio": 3558.2,
      "fin": 3578.2,
      "inicio_fmt": "59:18",
      "fin_fmt": "59:24",
      "duracion_seg": 20.0,
      "extracto": "En el presente mes se han reiniciado las obras de demolición, desmontaje, y reforzamiento de la infraestructura existente, en atención a las recomendaciones recibidas. Cabe resaltar que la construcción se desarrollará bajo un enfoque moderno y ágil, que permite ejecutar físicamente la obra,...",
      "color": "#8e44ad",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Salud → Infraestructura"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        }
      ]
    },
    {
      "id": 197,
      "tema": "Otros",
      "inicio": 3590.9,
      "fin": 3687.2,
      "inicio_fmt": "59:50",
      "fin_fmt": "59:55",
      "duracion_seg": 96.3,
      "extracto": "hemos aprobado la continuidad de 59.160, que son los 276 trabajadores contratados con el régimen CAS-COVID, con pase a CAS regular. Tal medida permite pasar de tener 34.700 profesionales de salud en el 2019, a 40.600. Se va a iniciar el proceso de nombramiento para 54.800 trabajadores de salud, Se v...",
      "color": "#666",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Salud → Otros"
        },
        {
          "tipo": "anuncio",
          "descripcion": "Anuncio o compromiso"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Otros"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Otros"
        },
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"3 mil\""
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        }
      ]
    },
    {
      "id": 200,
      "tema": "Regiones",
      "inicio": 3652.3,
      "fin": 3665.2,
      "inicio_fmt": "60:52",
      "fin_fmt": "61:05",
      "duracion_seg": 12.8,
      "extracto": "ha logrado que 25.400.000 peruanos, que representan el 99.4% de la población objetivo, se encuentren afiliados al CIS....",
      "color": "#16a085",
      "eventos": [
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"4%\""
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Salud → Regiones"
        }
      ]
    },
    {
      "id": 203,
      "tema": "Economía",
      "inicio": 3694.8,
      "fin": 3705.9,
      "inicio_fmt": "61:34",
      "fin_fmt": "61:45",
      "duracion_seg": 11.0,
      "extracto": "por un valor de más de 18 millones de soles, incrementando el 75%....",
      "color": "#1a1a2e",
      "eventos": [
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"75%\""
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Salud → Economía"
        }
      ]
    },
    {
      "id": 204,
      "tema": "Otros",
      "inicio": 3706.5,
      "fin": 3721.8,
      "inicio_fmt": "61:46",
      "fin_fmt": "61:54",
      "duracion_seg": 15.3,
      "extracto": "Las compras de medicamentos respecto al año 2021, y en el 100% al 2020. Retorno a la presencialidad....",
      "color": "#666",
      "eventos": [
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"100%\""
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Economía → Otros"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Educación → Otros"
        }
      ]
    },
    {
      "id": 205,
      "tema": "Educación",
      "inicio": 3716.1,
      "fin": 3888.7,
      "inicio_fmt": "61:56",
      "fin_fmt": "61:59",
      "duracion_seg": 172.6,
      "extracto": "Fortalecimiento del sistema educativo y recuperación de los aprendizajes. La educación es uno de los pilares fundamentales para lograr la igualdad de oportunidades para la niñez y la juventud peruana. Por ello, durante el mes de marzo del 2022, se completó el retorno a la presencialidad del 100% de...",
      "color": "#27ae60",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Educación"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Educación"
        },
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"100%\""
        },
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"8 mil\""
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Educación"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Educación"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Educación"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Economía → Educación"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Educación"
        }
      ]
    },
    {
      "id": 206,
      "tema": "Otros",
      "inicio": 3768.0,
      "fin": 3802.8,
      "inicio_fmt": "62:48",
      "fin_fmt": "62:51",
      "duracion_seg": 34.8,
      "extracto": "la cual tiene un avance del 70% a la fecha, Beca para los jóvenes. A través de PRONAVEG, desde agosto de 2021,...",
      "color": "#666",
      "eventos": [
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"70%\""
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Educación → Otros"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Educación → Otros"
        }
      ]
    },
    {
      "id": 208,
      "tema": "Economía",
      "inicio": 3852.2,
      "fin": 3903.7,
      "inicio_fmt": "64:12",
      "fin_fmt": "64:19",
      "duracion_seg": 51.5,
      "extracto": "Para ello, se ha previsto 195 millones de soles en el presupuesto público del año 2023. Mejora de condiciones remunerativas y demás beneficios laborales. se están implementando mejoras remunerativas y beneficios laborales. Igualmente, se vienen trabajando políticas remunerativas con proyección al añ...",
      "color": "#1a1a2e",
      "eventos": [
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"195 mil\""
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Educación → Economía"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Educación → Economía"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Educación → Economía"
        }
      ]
    },
    {
      "id": 210,
      "tema": "Otros",
      "inicio": 3903.9,
      "fin": 3962.1,
      "inicio_fmt": "65:03",
      "fin_fmt": "65:05",
      "duracion_seg": 58.2,
      "extracto": "para la primera escala magisterial. una bonificación excepcional por única vez de 950 soles, se le otorgará una bonificación excepcional de 500 soles por única vez y 50 soles mensuales de soporte alimentario a partir del 2023....",
      "color": "#666",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Economía → Otros"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Educación → Otros"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Otros"
        }
      ]
    },
    {
      "id": 211,
      "tema": "Educación",
      "inicio": 3905.9,
      "fin": 4010.4,
      "inicio_fmt": "65:05",
      "fin_fmt": "65:12",
      "duracion_seg": 104.5,
      "extracto": "Para ello, se propone un aumento progresivo de la remuneración del docente nombrado y contratado. A partir del presente año, los docentes y auxiliares contratados de educación básica y técnico-productiva perciben bonificación por escolaridad. los docentes y auxiliares de educación básica, tanto cont...",
      "color": "#27ae60",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Educación"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Política Exterior → Educación"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Educación"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Educación"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Anticorrupción → Educación"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Educación"
        },
        {
          "tipo": "anuncio",
          "descripcion": "Anuncio o compromiso"
        },
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"110.000 millones\""
        }
      ]
    },
    {
      "id": 216,
      "tema": "Infraestructura",
      "inicio": 4010.4,
      "fin": 4074.8,
      "inicio_fmt": "66:50",
      "fin_fmt": "66:57",
      "duracion_seg": 64.4,
      "extracto": "En el 2021, hemos realizado un total de 484 intervenciones de mitigación, reconstrucción También se culminó la construcción de otras 23 obras de infraestructura educativa en convenio de infraestructura....",
      "color": "#8e44ad",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Educación → Infraestructura"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Educación → Infraestructura"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Educación → Infraestructura"
        }
      ]
    },
    {
      "id": 217,
      "tema": "Educación",
      "inicio": 4017.8,
      "fin": 4127.5,
      "inicio_fmt": "66:57",
      "fin_fmt": "67:07",
      "duracion_seg": 109.7,
      "extracto": "y mejoramiento de instituciones educativas de los 1.114 programados, alcanzando un 72% de la meta prevista y beneficiando a más de 230.000 estudiantes de educación básica. benefician a 17.000 estudiantes. favor de 6.715 estudiantes. educativa. educativa en 288 instituciones educativas a nivel nacion...",
      "color": "#27ae60",
      "eventos": [
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"72%\""
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Infraestructura → Educación"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Economía → Educación"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Economía → Educación"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Educación"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Educación"
        },
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"4.250 millones\""
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Economía → Educación"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Educación"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        }
      ]
    },
    {
      "id": 218,
      "tema": "Otros",
      "inicio": 4033.6,
      "fin": 4095.7,
      "inicio_fmt": "67:13",
      "fin_fmt": "67:14",
      "duracion_seg": 62.1,
      "extracto": "Asimismo, Para el año 2023, proyectamos invertir cerca de 600 millones de soles en infraestructura Para el año 2023, proyectamos invertir cerca de 600 millones de soles en infraestructura Pero estaacamil sería un párrafo estereotipo efitivo que permite que los profesionales de...",
      "color": "#666",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Educación → Otros"
        },
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"600 mil\""
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Educación → Otros"
        },
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"600 mil\""
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Educación → Otros"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Educación → Otros"
        }
      ]
    },
    {
      "id": 219,
      "tema": "Economía",
      "inicio": 4034.3,
      "fin": 4085.0,
      "inicio_fmt": "67:14",
      "fin_fmt": "67:21",
      "duracion_seg": 50.7,
      "extracto": "el MINEDO construyó 20 obras directas con una inversión de 228 millones de soles que con los gobiernos regionales y locales, con una inversión de 222 millones de soles en del MINEDO se ejecutarán 75 proyectos de inversión....",
      "color": "#1a1a2e",
      "eventos": [
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"228 mil\""
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Economía"
        },
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"222 mil\""
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Infraestructura → Economía"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Infraestructura → Economía"
        }
      ]
    },
    {
      "id": 220,
      "tema": "Regiones",
      "inicio": 4127.5,
      "fin": 4194.4,
      "inicio_fmt": "68:47",
      "fin_fmt": "68:57",
      "duracion_seg": 66.8,
      "extracto": "aprobado y comprometido que el 2023 el Perú sea sede del Mundial de Fútbol de la Sub-17, así como sede de los Juegos Bolivarianos del Bicentenario Ayacucho 2024, colocando al Perú en la vitrina del mundo. Cultura y Pueblos Originarios. Política Nacional de la Lectura. el hábito lector, mientras que...",
      "color": "#16a085",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Educación → Regiones"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ayacucho"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"7%\""
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Agricultura → Regiones"
        }
      ]
    },
    {
      "id": 222,
      "tema": "Educación",
      "inicio": 4166.3,
      "fin": 4201.5,
      "inicio_fmt": "69:26",
      "fin_fmt": "69:32",
      "duracion_seg": 35.2,
      "extracto": "la Lectura, el Libro y las Bibliotecas al 2030, la cual reviste especial importancia de estudiantes del segundo grado de educación, el 16.7% de estudiantes del segundo grado de educación primaria del ámbito rural lograron niveles satisfactorios en lectura, mientras...",
      "color": "#27ae60",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Educación"
        },
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"7%\""
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Educación"
        }
      ]
    },
    {
      "id": 226,
      "tema": "Regiones",
      "inicio": 4208.5,
      "fin": 4234.1,
      "inicio_fmt": "70:08",
      "fin_fmt": "70:15",
      "duracion_seg": 25.5,
      "extracto": "primera vez en el Perú es una prioridad. Nuestra diversidad cultural. Todos los aquí una patria donde cada peruano, sin importar su condición económica, origen, etnia o género, pueda acceder a los mismos derechos y oportunidades. Para ello resulta...",
      "color": "#16a085",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Seguridad → Regiones"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Política Exterior → Regiones"
        }
      ]
    },
    {
      "id": 231,
      "tema": "Salud",
      "inicio": 4257.6,
      "fin": 4287.4,
      "inicio_fmt": "70:57",
      "fin_fmt": "71:04",
      "duracion_seg": 29.7,
      "extracto": "y el pueblo afroperuano. En esa línea, como primera tarea, nos propusimos llevar la vacunación han aplicado más de 1.239.000 dosis en las propias comunidades ubicadas en los rincones más recónditos del país....",
      "color": "#2980b9",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Salud"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Salud"
        }
      ]
    },
    {
      "id": 232,
      "tema": "Regiones",
      "inicio": 4264.3,
      "fin": 4311.9,
      "inicio_fmt": "71:04",
      "fin_fmt": "71:10",
      "duracion_seg": 47.6,
      "extracto": "contra la COVID-19 a todos los pueblos indígenas u originarios de nuestro país. Gracias a los gestores interculturales del Ministerio de Cultura y el personal médico del MINSA, quienes a la fecha aprobamos la Política Nacional del Pueblo Afroperuano 2030, cuyas acciones garantizarán el ejercicio de...",
      "color": "#16a085",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Salud → Regiones"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Regiones"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        }
      ]
    },
    {
      "id": 233,
      "tema": "Otros",
      "inicio": 4287.6,
      "fin": 4357.9,
      "inicio_fmt": "71:27",
      "fin_fmt": "71:36",
      "duracion_seg": 70.2,
      "extracto": "Asimismo, en agradecimiento a su contribución y como muestra de reivindicación histórica, el 4 de junio los golpeó duramente y para recuperarse requieren de nuestro apoyo. Para ellos, hemos aprobado el que a todos nos orgulliza....",
      "color": "#666",
      "eventos": [
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Salud → Otros"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Anticorrupción → Otros"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Otros"
        }
      ]
    },
    {
      "id": 235,
      "tema": "Anticorrupción",
      "inicio": 4318.5,
      "fin": 4340.6,
      "inicio_fmt": "71:58",
      "fin_fmt": "72:05",
      "duracion_seg": 22.0,
      "extracto": "Otro grupo con quien tenemos una gran deuda son nuestros hermanos del arte. Sabemos que la pandemia Plan de Recuperación de las Industrias Culturales, por el cual se otorgarán más de 29 millones de...",
      "color": "#e67e22",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Anticorrupción"
        },
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"29 mil\""
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Anticorrupción"
        }
      ]
    },
    {
      "id": 238,
      "tema": "Salud",
      "inicio": 4358.1,
      "fin": 4420.1,
      "inicio_fmt": "72:38",
      "fin_fmt": "72:46",
      "duracion_seg": 62.0,
      "extracto": "Mujer y poblaciones vulnerables. adolescentes, beneficiando a 19.000 huérfanos y huérfanas por la pandemia, a 638 huérfanos cuyas madres fueron víctimas de feminicidio. La Red Alivia de Conadis atendió 6.348 personas con discapacidad para el acceso a la salud,...",
      "color": "#2980b9",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Salud"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Salud"
        }
      ]
    },
    {
      "id": 242,
      "tema": "Democracia e Instituciones",
      "inicio": 4420.1,
      "fin": 4481.4,
      "inicio_fmt": "73:40",
      "fin_fmt": "73:49",
      "duracion_seg": 61.2,
      "extracto": "al empleo, a la justicia, a la educación y a la protección social. Este gobierno ha reconocido cuatro nuevas modalidades de fortaleciendo el sistema nacional. cumplimos con entregar al Congreso el proyecto de ley que crea el sistema nacional de cuidados para fortalecer la autonomía de las mujeres. H...",
      "color": "#7f8c8d",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Salud → Democracia e Instituciones"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Seguridad → Democracia e Instituciones"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Seguridad → Democracia e Instituciones"
        }
      ]
    },
    {
      "id": 243,
      "tema": "Seguridad",
      "inicio": 4429.1,
      "fin": 4460.2,
      "inicio_fmt": "73:49",
      "fin_fmt": "73:58",
      "duracion_seg": 31.1,
      "extracto": "violencia contra las mujeres e integrantes del grupo familiar. La explotación sexual de niñas, niños y adolescentes, la violencia en los servicios de salud sexual y reproductiva, el acoso a través del proceso judicial y la desaparición por particulares. Continuaremos En el proyecto especializado de...",
      "color": "#c0392b",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Seguridad"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Seguridad"
        }
      ]
    },
    {
      "id": 244,
      "tema": "Educación",
      "inicio": 4481.5,
      "fin": 4495.4,
      "inicio_fmt": "74:41",
      "fin_fmt": "74:55",
      "duracion_seg": 13.8,
      "extracto": "Alianzar políticas públicas de igualdad y desarrollo y decir que luego de 12 años cumplimos con listar los trabajos y actividades peligrosas o nocivas para nuestras adolescentes que trabajan....",
      "color": "#27ae60",
      "eventos": [
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Educación"
        }
      ]
    },
    {
      "id": 245,
      "tema": "Economía",
      "inicio": 4495.4,
      "fin": 4605.1,
      "inicio_fmt": "74:55",
      "fin_fmt": "75:10",
      "duracion_seg": 109.8,
      "extracto": "Trabajo y promoción del empleo. En el sector trabajo, nuestro gobierno ha generado más de 225 mil empleos temporales a través del programa Lurawi Perú. De igual manera, se ha capacitado y certificado a más de 204 mil personas por el portal Empleos Perú y el Programa Nacional de Empleabilidad y se ha...",
      "color": "#1a1a2e",
      "eventos": [
        {
          "tipo": "anuncio",
          "descripcion": "Anuncio o compromiso"
        },
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"225 mil\""
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Educación → Economía"
        },
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"2.6 millones\""
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"100 mil\""
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Economía"
        },
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"8.139 millones\""
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Política Exterior → Economía"
        }
      ]
    },
    {
      "id": 248,
      "tema": "Otros",
      "inicio": 4605.1,
      "fin": 4694.4,
      "inicio_fmt": "76:45",
      "fin_fmt": "76:50",
      "duracion_seg": 89.2,
      "extracto": "Se está coordinando con las empresas para que se reinicien. Con el concesionario del Aeropuerto Internacional, Jorge Chávez. Y a la fecha se culmine la culminación, sea en enero del 2025, según el contrato de concesión suscrito. Se ha concluido la modificación del expediente técnico de la obra. Puen...",
      "color": "#666",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Economía → Otros"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Otros"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Infraestructura → Otros"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Infraestructura → Otros"
        },
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"470 mil\""
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Callao"
        },
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"642 mil\""
        }
      ]
    },
    {
      "id": 249,
      "tema": "Política Exterior",
      "inicio": 4610.2,
      "fin": 4621.4,
      "inicio_fmt": "76:50",
      "fin_fmt": "77:01",
      "duracion_seg": 11.2,
      "extracto": "Y se culminen estas obras, convocando a las embajadas extranjeras como aliadas para mejorar la gestión de estas empresas y sean culminadas....",
      "color": "#2c3e50",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Política Exterior"
        }
      ]
    },
    {
      "id": 251,
      "tema": "Infraestructura",
      "inicio": 4637.7,
      "fin": 4667.9,
      "inicio_fmt": "77:17",
      "fin_fmt": "77:22",
      "duracion_seg": 30.2,
      "extracto": "Se ha concertado para que se ejecute la construcción de un solo terminal. Impulso a las inversiones de infraestructura de transportes. Se encuentran construidas 125 kilómetros de carreteras y se vienen ejecutando 11 obras para continuar con la pavimentación de 538 kilómetros....",
      "color": "#8e44ad",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Infraestructura"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Infraestructura"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Infraestructura"
        }
      ]
    },
    {
      "id": 253,
      "tema": "Democracia e Instituciones",
      "inicio": 4694.8,
      "fin": 4715.1,
      "inicio_fmt": "78:14",
      "fin_fmt": "78:22",
      "duracion_seg": 20.2,
      "extracto": "Igualmente se convocará a la contratación para ejecutar el eje Vial 4 bajo la modalidad de gobierno a gobierno. Proyecto sobre el cual hemos remitido la propuesta de ley al Congreso de la República junto con otros 15 proyectos para que su ejecución sea declarada de necesidad pública e interés nacion...",
      "color": "#7f8c8d",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Democracia e Instituciones"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        }
      ]
    },
    {
      "id": 254,
      "tema": "Otros",
      "inicio": 4715.1,
      "fin": 4727.3,
      "inicio_fmt": "78:35",
      "fin_fmt": "78:47",
      "duracion_seg": 12.2,
      "extracto": "Se está convocando al proceso de selección para la ejecución de la obra Checa Mazo Cruz con un monto de 184 millones de soles....",
      "color": "#666",
      "eventos": [
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"184 mil\""
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Otros"
        }
      ]
    },
    {
      "id": 255,
      "tema": "Infraestructura",
      "inicio": 4728.0,
      "fin": 4862.6,
      "inicio_fmt": "78:47",
      "fin_fmt": "78:54",
      "duracion_seg": 134.6,
      "extracto": "Y se va a iniciar la ejecución de la obra de acceso al aeropuerto de Chincheros por un monto de 410 millones de soles. En lo que respecta a la conservación de la red nacional hemos alcanzado el mantenimiento rutinario de 8.150 kilómetros de carreteras pavimentadas, 4.440 kilómetros de mantenimiento...",
      "color": "#8e44ad",
      "eventos": [
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"470 mil\""
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Infraestructura"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Infraestructura"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Infraestructura"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: La Libertad, Loreto"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Infraestructura"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Infraestructura"
        },
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"605 mil\""
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Infraestructura"
        }
      ]
    },
    {
      "id": 256,
      "tema": "Otros",
      "inicio": 4767.0,
      "fin": 4780.1,
      "inicio_fmt": "79:26",
      "fin_fmt": "79:30",
      "duracion_seg": 13.1,
      "extracto": "No concesionadas con conservación por niveles de servicio. Todo esto puede compararse y constatarse....",
      "color": "#666",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Infraestructura → Otros"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Infraestructura → Otros"
        }
      ]
    },
    {
      "id": 257,
      "tema": "Regiones",
      "inicio": 4794.1,
      "fin": 4818.9,
      "inicio_fmt": "79:54",
      "fin_fmt": "79:57",
      "duracion_seg": 24.8,
      "extracto": "Choquehuanca en Puno, Junín, Ayacucho, Cusco, principalmente en las regiones de Puno, Huánuco, Cusco, Ancash, Junín y Ayacucho....",
      "color": "#16a085",
      "eventos": [
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ayacucho, Cusco, Junín"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Infraestructura → Regiones"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ancash, Ayacucho, Cusco"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Infraestructura → Regiones"
        }
      ]
    },
    {
      "id": 260,
      "tema": "Regiones",
      "inicio": 4862.6,
      "fin": 4897.9,
      "inicio_fmt": "81:02",
      "fin_fmt": "81:06",
      "duracion_seg": 35.3,
      "extracto": "para la integración geográfica territorial de todos los gobiernos. Esta obra colocará al Perú a la altura de las naciones,...",
      "color": "#16a085",
      "eventos": [
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Infraestructura → Regiones"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Regiones"
        }
      ]
    },
    {
      "id": 262,
      "tema": "Otros",
      "inicio": 4875.5,
      "fin": 4950.9,
      "inicio_fmt": "81:15",
      "fin_fmt": "81:23",
      "duracion_seg": 75.4,
      "extracto": "en el planeamiento de las inversiones chinas relacionadas con el megapuerto de Changkai. y que ahora se proyecta a 3.200 millones de dólares. Antepuerto del Callao. Se iniciará en el presente año la ejecución de obras en el antepuerto del Callao Ferrocarriles. En este último tramo ya se registra ava...",
      "color": "#666",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Política Exterior → Otros"
        },
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"3.200 millones\""
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Economía → Otros"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Callao"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Política Exterior → Otros"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Callao"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Infraestructura → Otros"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Infraestructura → Otros"
        }
      ]
    },
    {
      "id": 263,
      "tema": "Economía",
      "inicio": 4883.8,
      "fin": 4908.8,
      "inicio_fmt": "81:23",
      "fin_fmt": "81:29",
      "duracion_seg": 25.0,
      "extracto": "Plataforma logística que comprende una inversión inicial de 1.200 millones de dólares y mejorará sustancialmente los niveles de intercambio comercial...",
      "color": "#1a1a2e",
      "eventos": [
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"1.200 millones\""
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Economía"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Infraestructura → Economía"
        }
      ]
    },
    {
      "id": 264,
      "tema": "Infraestructura",
      "inicio": 4898.1,
      "fin": 4964.7,
      "inicio_fmt": "81:38",
      "fin_fmt": "81:41",
      "duracion_seg": 66.6,
      "extracto": "de mayor infraestructura portuaria del Pacífico Sur para transformar 20 hectáreas para ordenar el ingreso al puerto Chalaco y descongestionar las avenidas aledañas. Se está preparando la intervención de dos tramos del tren Grau, Lima-Barranca y Lima-Ica. Se ha aprobado el diseño conceptual del ferro...",
      "color": "#8e44ad",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Infraestructura"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Infraestructura"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica, Lima"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Infraestructura"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Cusco"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Economía → Infraestructura"
        }
      ]
    },
    {
      "id": 268,
      "tema": "Democracia e Instituciones",
      "inicio": 4968.0,
      "fin": 4989.9,
      "inicio_fmt": "82:48",
      "fin_fmt": "82:49",
      "duracion_seg": 21.9,
      "extracto": "a través de la ley de inversiones de la Corte Constitucional. por la modalidad de obra pública,...",
      "color": "#7f8c8d",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Política Exterior → Democracia e Instituciones"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Democracia e Instituciones"
        }
      ]
    },
    {
      "id": 269,
      "tema": "Otros",
      "inicio": 4970.0,
      "fin": 5013.0,
      "inicio_fmt": "82:50",
      "fin_fmt": "82:54",
      "duracion_seg": 43.0,
      "extracto": "para el financiamiento del expediente técnico en el 2023. Asimismo, se ha concertado el acompañamiento técnico Se convocará el ferrocarril Huancayo-Huancavelica Se encuentra en elaboración, el mismo que concluirá en abril de 2023. Sin embargo, es de destacar que ya se está recibiendo cartas de inten...",
      "color": "#666",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Política Exterior → Otros"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Huancavelica, Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Infraestructura → Otros"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Educación → Otros"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Otros"
        }
      ]
    },
    {
      "id": 271,
      "tema": "Economía",
      "inicio": 4990.5,
      "fin": 5016.4,
      "inicio_fmt": "83:10",
      "fin_fmt": "83:14",
      "duracion_seg": 25.8,
      "extracto": "siendo una primera etapa su reactivación a través de cuatro inversiones menores para su financiamiento vía inversión privada....",
      "color": "#1a1a2e",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Economía"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Economía"
        }
      ]
    },
    {
      "id": 273,
      "tema": "Regiones",
      "inicio": 5000.4,
      "fin": 5065.6,
      "inicio_fmt": "83:20",
      "fin_fmt": "83:24",
      "duracion_seg": 65.1,
      "extracto": "el perfil técnico del ferrocarril Andahuaylas-San Juan de Marcona, al 2.090 centros poblados de Acucho, Huancabelica, Apurímac, Cusco, Lambayeque, Lima y Loreto. Se inició el servicio de Internet satelital en 1.026 centros poblados de Amazonas, Loreto, Ucayali y Madre de Dios. Beneficiando a un tota...",
      "color": "#16a085",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Regiones"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Infraestructura → Regiones"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Apurímac, Cusco, Ica"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Amazonas"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Agricultura → Regiones"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Loreto, Madre de Dios, Ucayali"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Apurímac, Ayacucho, Cusco"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Regiones"
        }
      ]
    },
    {
      "id": 278,
      "tema": "Infraestructura",
      "inicio": 5065.8,
      "fin": 5110.2,
      "inicio_fmt": "84:25",
      "fin_fmt": "84:36",
      "duracion_seg": 44.4,
      "extracto": "Se están impulsando los centros de acceso digital del Plan Todos Conectados trabajamos de manera conjunta un programa de transferencia de tecnología para avanzar hacia la puesta en servicio de un sistema con capacidad...",
      "color": "#8e44ad",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Infraestructura"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Política Exterior → Infraestructura"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Política Exterior → Infraestructura"
        }
      ]
    },
    {
      "id": 279,
      "tema": "Regiones",
      "inicio": 5076.9,
      "fin": 5182.2,
      "inicio_fmt": "84:36",
      "fin_fmt": "84:45",
      "duracion_seg": 105.4,
      "extracto": "que brindará un millón de becas para los ciudadanos de Ayacucho, Huancabelica, Apurímac, Lambayeque, Cusco y Lima. de cubrir el territorio peruano y mejorar la conectividad. Como contribución para enfrentar los retos económicos, sociales y de gobernabilidad que reconoce los esfuerzos hechos por el P...",
      "color": "#16a085",
      "eventos": [
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Apurímac, Ayacucho, Cusco"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Infraestructura → Regiones"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Infraestructura → Regiones"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Política Exterior → Regiones"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Economía → Regiones"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Regiones"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Regiones"
        }
      ]
    },
    {
      "id": 280,
      "tema": "Política Exterior",
      "inicio": 5086.1,
      "fin": 5198.0,
      "inicio_fmt": "84:46",
      "fin_fmt": "84:51",
      "duracion_seg": 111.9,
      "extracto": "Con el Ministerio de Ciencia, Tecnología e Innovación de la hermana República de Argentina En materia de fabricación satelital, tanto de observación como de comunicaciones para lanzamiento de órbita geoestacionaria Relaciones exteriores. en junio se inició el proceso de adhesión a la Organización pa...",
      "color": "#2c3e50",
      "eventos": [
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Política Exterior"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Infraestructura → Política Exterior"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Política Exterior"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Política Exterior"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Política Exterior"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Política Exterior"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Educación → Política Exterior"
        }
      ]
    },
    {
      "id": 281,
      "tema": "Democracia e Instituciones",
      "inicio": 5130.2,
      "fin": 5174.8,
      "inicio_fmt": "85:30",
      "fin_fmt": "85:30",
      "duracion_seg": 44.6,
      "extracto": "y la Comunicación. para incorporar mejores prácticas en sus políticas públicas. políticas públicas implementadas en el marco de la ODE se fijan en base a estándares elevados...",
      "color": "#7f8c8d",
      "eventos": [
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Política Exterior → Democracia e Instituciones"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Democracia e Instituciones"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Economía → Democracia e Instituciones"
        }
      ]
    },
    {
      "id": 282,
      "tema": "Economía",
      "inicio": 5131.2,
      "fin": 5167.4,
      "inicio_fmt": "85:31",
      "fin_fmt": "85:36",
      "duracion_seg": 36.2,
      "extracto": "Y el desarrollo económico OCDE, con la adopción de la hoja de ruta de análisis, discusión y difusión de experiencias en políticas sociales y económicas. Las...",
      "color": "#1a1a2e",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Economía"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Política Exterior → Economía"
        }
      ]
    },
    {
      "id": 284,
      "tema": "Educación",
      "inicio": 5182.6,
      "fin": 5206.0,
      "inicio_fmt": "86:22",
      "fin_fmt": "86:30",
      "duracion_seg": 23.4,
      "extracto": "servicios públicos, educación, ambiente y administración pública. Además, la adhesión contactos en diversos temas, tales como educación, ambiente, asuntos fiscales, comercio, inversión,...",
      "color": "#27ae60",
      "eventos": [
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Educación"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Política Exterior → Educación"
        }
      ]
    },
    {
      "id": 286,
      "tema": "Regiones",
      "inicio": 5213.0,
      "fin": 5248.1,
      "inicio_fmt": "86:53",
      "fin_fmt": "86:59",
      "duracion_seg": 35.1,
      "extracto": "de este gobierno el Perú sea un miembro de la ODE, para lo cual requerimos el trabajo El Perú será sede del 52 periodo ordinario de sesiones de la Asamblea General de la OEA, con el lema Juntos contra la Desigualdad y la Discriminación. Durante el presente año,...",
      "color": "#16a085",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Economía → Regiones"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Regiones"
        }
      ]
    },
    {
      "id": 287,
      "tema": "Democracia e Instituciones",
      "inicio": 5219.4,
      "fin": 5252.1,
      "inicio_fmt": "86:59",
      "fin_fmt": "87:00",
      "duracion_seg": 32.7,
      "extracto": "conjunto del Ejecutivo y de la ODE. el país asumirá también la presidencia,...",
      "color": "#7f8c8d",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Democracia e Instituciones"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Democracia e Instituciones"
        }
      ]
    },
    {
      "id": 288,
      "tema": "Política Exterior",
      "inicio": 5252.1,
      "fin": 5282.7,
      "inicio_fmt": "87:32",
      "fin_fmt": "87:45",
      "duracion_seg": 30.6,
      "extracto": "protémpore de la Alianza del Pacífico y de la Comunidad Andina. En el 2024 será sede del Foro de Cooperación Económica hacia Pacífico y ejercerá su presidencia. Asimismo, reforzaremos el reconocimiento internacional a la gobernabilidad democrática del país, así como el apoyo...",
      "color": "#2c3e50",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Política Exterior"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        }
      ]
    },
    {
      "id": 289,
      "tema": "Regiones",
      "inicio": 5282.7,
      "fin": 5334.9,
      "inicio_fmt": "88:02",
      "fin_fmt": "88:23",
      "duracion_seg": 52.2,
      "extracto": "de los peruanos en el exterior, sector interior. Durante mi gestión se han ejecutado 762.300 En el próximo año, el Perú será sede del Perú, con el lema Juntos contra la Desigualdad como el apoyo de los peruanos en el exterior, sector interior, sector interior, sector interior,...",
      "color": "#16a085",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Política Exterior → Regiones"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Regiones"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Seguridad → Regiones"
        }
      ]
    },
    {
      "id": 290,
      "tema": "Seguridad",
      "inicio": 5303.9,
      "fin": 5357.9,
      "inicio_fmt": "88:23",
      "fin_fmt": "88:32",
      "duracion_seg": 54.1,
      "extracto": "actos desplegados a nivel nacional, logrando la detención en flagrancia de 231.800 personas al margen de la ley, así como desarticulación de 211 organizaciones criminales, 10.000 bandas delictivas, captura de 61.000 requisitoreados, decomiso de más de 35 toneladas de pasta básica de cocaína, más de...",
      "color": "#c0392b",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Seguridad"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Seguridad"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Seguridad"
        }
      ]
    },
    {
      "id": 293,
      "tema": "Democracia e Instituciones",
      "inicio": 5364.4,
      "fin": 5388.4,
      "inicio_fmt": "89:24",
      "fin_fmt": "89:28",
      "duracion_seg": 24.0,
      "extracto": "pueblos y a nuestra comunidad. Esta iniciativa ha realizado un esfuerzo en una audiencia El equipo de deuda ha realizado una consulta, para la cual el Consejo Nacional de Seguridad También ha presentado una consulta con el Partido Popular, donde, en las largas citas...",
      "color": "#7f8c8d",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Educación → Democracia e Instituciones"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Anticorrupción → Democracia e Instituciones"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Anticorrupción → Democracia e Instituciones"
        }
      ]
    },
    {
      "id": 294,
      "tema": "Anticorrupción",
      "inicio": 5368.5,
      "fin": 5383.9,
      "inicio_fmt": "89:28",
      "fin_fmt": "89:33",
      "duracion_seg": 15.4,
      "extracto": "a la que el carente ha estado a punto con la administración del equipo de deuda. de la deuda....",
      "color": "#e67e22",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Anticorrupción"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Anticorrupción"
        }
      ]
    },
    {
      "id": 296,
      "tema": "Regiones",
      "inicio": 5379.4,
      "fin": 5422.8,
      "inicio_fmt": "89:39",
      "fin_fmt": "89:42",
      "duracion_seg": 43.4,
      "extracto": "en vuestra región para la capacitación de los peruanos para la desigualdad y la desigualdad del Perú, han respondido más de 2.000 exigentes de afectos contra la seguridad de nuestros pueblos y nuestras comunidades. El Consejo General del Perú se ha presentado tres całyos programas de relación entre...",
      "color": "#16a085",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Política Exterior → Regiones"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Regiones"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Seguridad → Regiones"
        }
      ]
    },
    {
      "id": 298,
      "tema": "Seguridad",
      "inicio": 5401.9,
      "fin": 5476.9,
      "inicio_fmt": "90:01",
      "fin_fmt": "90:03",
      "duracion_seg": 75.0,
      "extracto": "policiales y derechohabientes. Se crearán las brigadas especiales contra el crimen en los distritos con mayor incidencia delictiva, iniciando como piloto en los distritos de San Juan del Urigancho, San Martín de policial. 4. Estableceremos los mecanismos de defensa legal hacia el nivel de divisiones...",
      "color": "#c0392b",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Salud → Seguridad"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Economía → Seguridad"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: San Martín"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Seguridad"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Seguridad"
        }
      ]
    },
    {
      "id": 300,
      "tema": "Democracia e Instituciones",
      "inicio": 5422.8,
      "fin": 5449.8,
      "inicio_fmt": "90:22",
      "fin_fmt": "90:29",
      "duracion_seg": 27.0,
      "extracto": "3. Restableceremos de manera definitiva el principio de autoridad y respeto a la función En mi condición de Presidente de la República y Director de la Política General del Gobierno,...",
      "color": "#7f8c8d",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Democracia e Instituciones"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Democracia e Instituciones"
        }
      ]
    },
    {
      "id": 302,
      "tema": "Regiones",
      "inicio": 5449.8,
      "fin": 5468.5,
      "inicio_fmt": "90:49",
      "fin_fmt": "90:54",
      "duracion_seg": 18.7,
      "extracto": "a fin de unir los esfuerzos desplegados a través de los programas comunitarios, desarrollados en el ámbito de la Estrategia Vecindario Seguro y la Política Multisectorial Barrio Seguro, que se desarrollarán junto con las actividades de los gobiernos regionales y locales....",
      "color": "#16a085",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Regiones"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        }
      ]
    },
    {
      "id": 303,
      "tema": "Economía",
      "inicio": 5476.9,
      "fin": 5505.9,
      "inicio_fmt": "91:16",
      "fin_fmt": "91:23",
      "duracion_seg": 29.0,
      "extracto": "Industrial de la Marina, contribuyen al desarrollo económico del país, mediante las iniciativas Asimismo, hemos establecido la nueva escala porcentual de asignación económica para...",
      "color": "#1a1a2e",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Seguridad → Economía"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Infraestructura → Economía"
        }
      ]
    },
    {
      "id": 307,
      "tema": "Otros",
      "inicio": 5505.9,
      "fin": 5519.2,
      "inicio_fmt": "91:45",
      "fin_fmt": "91:54",
      "duracion_seg": 13.3,
      "extracto": "el personal del servicio militar acuartelado e incremento en la asignación por alimentación diaria al personal de las Fuerzas Armadas, de 8 a 12 soles....",
      "color": "#666",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Economía → Otros"
        }
      ]
    },
    {
      "id": 309,
      "tema": "Democracia e Instituciones",
      "inicio": 5525.5,
      "fin": 5603.4,
      "inicio_fmt": "92:05",
      "fin_fmt": "92:12",
      "duracion_seg": 77.9,
      "extracto": "un proyecto de ley para que un porcentaje de los recursos determinados se dedique a estos Justicia Eficiente. Justicia y Derechos Humanos. En el caso de la ciudad de Trujillo, el proyecto de ley de justicia es un proyecto de ley implementado por el Poder Judicial, cuyo proyecto piloto se puso en fun...",
      "color": "#7f8c8d",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Política Exterior → Democracia e Instituciones"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Seguridad → Democracia e Instituciones"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Trujillo"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Democracia e Instituciones"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Anticorrupción → Democracia e Instituciones"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Democracia e Instituciones"
        }
      ]
    },
    {
      "id": 310,
      "tema": "Seguridad",
      "inicio": 5532.2,
      "fin": 5559.2,
      "inicio_fmt": "92:12",
      "fin_fmt": "92:27",
      "duracion_seg": 27.0,
      "extracto": "fines. A fin de combatir la delincuencia común e implementar un servicio de justicia célere...",
      "color": "#c0392b",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Seguridad"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Seguridad"
        }
      ]
    },
    {
      "id": 311,
      "tema": "Otros",
      "inicio": 5559.2,
      "fin": 5606.3,
      "inicio_fmt": "92:39",
      "fin_fmt": "92:46",
      "duracion_seg": 47.1,
      "extracto": "y eficiente, venimos participando activamente en la implementación de las unidades de flagrancia, ZUNAR ha fortalecido sus sistemas a fin de brindar sus servicios en línea, es decir, tiempo y evitando aglomeraciones....",
      "color": "#666",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Seguridad → Otros"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Otros"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Otros"
        }
      ]
    },
    {
      "id": 315,
      "tema": "Democracia e Instituciones",
      "inicio": 5613.6,
      "fin": 5673.1,
      "inicio_fmt": "93:33",
      "fin_fmt": "93:39",
      "duracion_seg": 59.5,
      "extracto": "la cual cualquier ciudadano puede ingresar de manera gratuita para realizar consultas de personas jurídicas. acceso a la justicia. El Ministerio de Justicia y Desarrollo Humano, cumpliendo con el compromiso de promover el en los procesos judiciales....",
      "color": "#7f8c8d",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Salud → Democracia e Instituciones"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Infraestructura → Democracia e Instituciones"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Democracia e Instituciones"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Seguridad → Democracia e Instituciones"
        }
      ]
    },
    {
      "id": 317,
      "tema": "Anticorrupción",
      "inicio": 5627.1,
      "fin": 5638.4,
      "inicio_fmt": "93:47",
      "fin_fmt": "93:58",
      "duracion_seg": 11.3,
      "extracto": "De otro lado, ZUNAR ha otorgado 618.500 certificados de publicidad registral que otorgan seguridad...",
      "color": "#e67e22",
      "eventos": [
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Anticorrupción"
        }
      ]
    },
    {
      "id": 318,
      "tema": "Seguridad",
      "inicio": 5638.4,
      "fin": 5737.5,
      "inicio_fmt": "93:58",
      "fin_fmt": "94:05",
      "duracion_seg": 99.1,
      "extracto": "jurídica a la población, los mismos que se expiden mediante agente automatizado a acceso a la justicia, en especial de la población más vulnerable, brinda el servicio de asistencia legal a la ciudadanía en temas de derechos de familia y el patrocinio legal de las víctimas Reparaciones colectivas de...",
      "color": "#c0392b",
      "eventos": [
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Anticorrupción → Seguridad"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Seguridad"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Salud → Seguridad"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Seguridad"
        }
      ]
    },
    {
      "id": 319,
      "tema": "Otros",
      "inicio": 5645.9,
      "fin": 5689.5,
      "inicio_fmt": "94:05",
      "fin_fmt": "94:11",
      "duracion_seg": 43.6,
      "extracto": "través del servicio publicidad registral en línea a nivel nacional, promoviendo el En esta labor, durante el periodo comprendido entre el 28 de julio de 2021 al 6 de julio de 2022, se han atendido 294.900 consultas y 74.800 patrocinios....",
      "color": "#666",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Seguridad → Otros"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Otros"
        }
      ]
    },
    {
      "id": 321,
      "tema": "Infraestructura",
      "inicio": 5699.4,
      "fin": 5720.8,
      "inicio_fmt": "94:59",
      "fin_fmt": "95:05",
      "duracion_seg": 21.4,
      "extracto": "Como medida de reparación colectiva del Plan Integral de Reparaciones entre agosto de 2021 para la ejecución de proyectos productivos y de infraestructura de 22.000 familias integrantes...",
      "color": "#8e44ad",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Seguridad → Infraestructura"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Infraestructura"
        }
      ]
    },
    {
      "id": 322,
      "tema": "Regiones",
      "inicio": 5705.2,
      "fin": 5723.8,
      "inicio_fmt": "95:05",
      "fin_fmt": "95:13",
      "duracion_seg": 18.6,
      "extracto": "y julio de 2022, se benefició con la transferencia de 49 millones de soles a 14 gobiernos locales de 490 colectivos....",
      "color": "#16a085",
      "eventos": [
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"49 mil\""
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Infraestructura → Regiones"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Infraestructura → Regiones"
        }
      ]
    },
    {
      "id": 323,
      "tema": "Otros",
      "inicio": 5738.7,
      "fin": 5812.9,
      "inicio_fmt": "95:38",
      "fin_fmt": "95:45",
      "duracion_seg": 74.3,
      "extracto": "De julio de 2021 a junio de 2022, se dio respuesta a los familiares sobre la suerte De ellas, 225 corresponden a restituciones y entierros dignos. Tres a personas desaparecidas halladas con vida que se han reencontrado con sus familias en la región de Ayacucho, se realizó el acto de restitución de r...",
      "color": "#666",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Seguridad → Otros"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Seguridad → Otros"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ayacucho"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Otros"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Seguridad → Otros"
        }
      ]
    },
    {
      "id": 325,
      "tema": "Regiones",
      "inicio": 5766.0,
      "fin": 5776.1,
      "inicio_fmt": "96:06",
      "fin_fmt": "96:08",
      "duracion_seg": 10.0,
      "extracto": "y nueve a cierres administrativos. Se debe destacar que en el mes de mayo de 2022, en la Plaza Central del Distrito de Acomarca,...",
      "color": "#16a085",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Regiones"
        }
      ]
    },
    {
      "id": 326,
      "tema": "Democracia e Instituciones",
      "inicio": 5787.2,
      "fin": 5826.1,
      "inicio_fmt": "96:27",
      "fin_fmt": "96:30",
      "duracion_seg": 38.9,
      "extracto": "Esta entrega es representativa. del Ministerio de Justicia. De otro lado, la Secretaría Ejecutiva de la Comisión Multisectorial de Alto Nivel,...",
      "color": "#7f8c8d",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Democracia e Instituciones"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Democracia e Instituciones"
        }
      ]
    },
    {
      "id": 329,
      "tema": "Otros",
      "inicio": 5826.1,
      "fin": 5887.6,
      "inicio_fmt": "97:06",
      "fin_fmt": "97:17",
      "duracion_seg": 61.5,
      "extracto": "develó una placa de conmemoración a las víctimas en el marco del Plan Integral de Reparaciones de la Ley 28.592. que modifica la conformación del mecanismo intersectorial. Si bien tenemos el compromiso de defender y proteger la vida de todos los defensores ambientales, ambiente y cultura, nos permit...",
      "color": "#666",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Otros"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Otros"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Seguridad → Otros"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Otros"
        }
      ]
    },
    {
      "id": 330,
      "tema": "Seguridad",
      "inicio": 5837.7,
      "fin": 5865.4,
      "inicio_fmt": "97:17",
      "fin_fmt": "97:22",
      "duracion_seg": 27.7,
      "extracto": "Protección de las personas defensoras de derechos humanos. Para la protección de las personas defensoras de derechos humanos, a fin de incluir a de vida....",
      "color": "#c0392b",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Seguridad"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Seguridad"
        }
      ]
    },
    {
      "id": 333,
      "tema": "Democracia e Instituciones",
      "inicio": 5870.4,
      "fin": 5895.6,
      "inicio_fmt": "97:50",
      "fin_fmt": "97:59",
      "duracion_seg": 25.2,
      "extracto": "creemos que las medidas del mecanismo a constituir el trabajo conjunto entre el sector interior, Asimismo, hemos aprobado el proyecto de ley, de defensa y asistencia para los dirigentes comunales defensores de los derechos humanos,...",
      "color": "#7f8c8d",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Democracia e Instituciones"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Democracia e Instituciones"
        }
      ]
    },
    {
      "id": 334,
      "tema": "Seguridad",
      "inicio": 5895.6,
      "fin": 5907.0,
      "inicio_fmt": "98:15",
      "fin_fmt": "98:24",
      "duracion_seg": 11.4,
      "extracto": "transformando las cárceles en espacios productivos de resocialización, cárceles productivas....",
      "color": "#c0392b",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Seguridad"
        }
      ]
    },
    {
      "id": 335,
      "tema": "Infraestructura",
      "inicio": 5907.0,
      "fin": 5922.8,
      "inicio_fmt": "98:27",
      "fin_fmt": "98:34",
      "duracion_seg": 15.8,
      "extracto": "Tiene por finalidad reparar o preparar a los internos para su reinserción laboral y al mismo tiempo permitirles obtener ingresos para el pago de sus reparaciones civiles y sus gastos de internamiento....",
      "color": "#8e44ad",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Seguridad → Infraestructura"
        }
      ]
    },
    {
      "id": 336,
      "tema": "Otros",
      "inicio": 5922.8,
      "fin": 5938.8,
      "inicio_fmt": "98:42",
      "fin_fmt": "98:43",
      "duracion_seg": 16.0,
      "extracto": "En efecto, 22.925 internas e internos vienen desempeñándose en talleres productivos y actividades grupales e individuales....",
      "color": "#666",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Infraestructura → Otros"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Salud → Otros"
        }
      ]
    },
    {
      "id": 339,
      "tema": "Democracia e Instituciones",
      "inicio": 5948.8,
      "fin": 5981.2,
      "inicio_fmt": "99:08",
      "fin_fmt": "99:13",
      "duracion_seg": 32.4,
      "extracto": "así como eventos en identidades como el Ministerio de Justicia, Derechos Humanos, el Poder Judicial y el Ministerio de Cultura. Proyecto de ley. para posibilitar mayor eficacia a la justicia. incorpora una nueva conducta referida a aquellas personas que ceden a terceros su autorización...",
      "color": "#7f8c8d",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Democracia e Instituciones"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Seguridad → Democracia e Instituciones"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Política Exterior → Democracia e Instituciones"
        }
      ]
    },
    {
      "id": 340,
      "tema": "Seguridad",
      "inicio": 5959.4,
      "fin": 6004.1,
      "inicio_fmt": "99:19",
      "fin_fmt": "99:22",
      "duracion_seg": 44.7,
      "extracto": "La minería ilegal. El proyecto de ley sobre minería ilegal define mejor el tipo delictivo sancionándose dicha conducta de dos años de prisión preventiva de libertad. se agrega la agravante de organización criminal para el agente que comete delito de minería ilegal aplicándose ahora penas de 8 a 20 a...",
      "color": "#c0392b",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Seguridad"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Seguridad"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Política Exterior → Seguridad"
        }
      ]
    },
    {
      "id": 341,
      "tema": "Política Exterior",
      "inicio": 5974.2,
      "fin": 5990.1,
      "inicio_fmt": "99:34",
      "fin_fmt": "99:35",
      "duracion_seg": 15.9,
      "extracto": "De otro lado, De otro lado,...",
      "color": "#2c3e50",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Política Exterior"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Seguridad → Política Exterior"
        }
      ]
    },
    {
      "id": 342,
      "tema": "Otros",
      "inicio": 5981.2,
      "fin": 6015.1,
      "inicio_fmt": "99:41",
      "fin_fmt": "99:43",
      "duracion_seg": 33.9,
      "extracto": "de manera irregular, Asimismo, se establece la inhabilitación de 2 a 12 años para el tipo base e inhabilitación perpetua...",
      "color": "#666",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Otros"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Infraestructura → Otros"
        }
      ]
    },
    {
      "id": 346,
      "tema": "Democracia e Instituciones",
      "inicio": 6023.3,
      "fin": 6064.4,
      "inicio_fmt": "100:23",
      "fin_fmt": "100:26",
      "duracion_seg": 41.1,
      "extracto": "Este proyecto de ley establece plena efectiva Proyectos de ley pendientes en el Congreso de la República. Igualmente se encuentran pendientes de aprobación en el Congreso 45 proyectos de ley de distinta materia...",
      "color": "#7f8c8d",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Salud → Democracia e Instituciones"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Democracia e Instituciones"
        }
      ]
    },
    {
      "id": 347,
      "tema": "Seguridad",
      "inicio": 6026.3,
      "fin": 6047.3,
      "inicio_fmt": "100:26",
      "fin_fmt": "100:28",
      "duracion_seg": 21.0,
      "extracto": "para los delitos de hurto y receptación Se incorpora a la vez que el hurto de dichos equipos informáticos sea considerado como un agravante de hurto. se disminuye el valor del bien del delito de hurto simple,...",
      "color": "#c0392b",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Seguridad"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Educación → Seguridad"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Política Exterior → Seguridad"
        }
      ]
    },
    {
      "id": 350,
      "tema": "Otros",
      "inicio": 6047.3,
      "fin": 6081.4,
      "inicio_fmt": "100:47",
      "fin_fmt": "100:51",
      "duracion_seg": 34.0,
      "extracto": "al 50% de una remuneración mínima vital. que oportunamente hicimos llegar. seguridad alimentaria y energética,...",
      "color": "#666",
      "eventos": [
        {
          "tipo": "cifra",
          "descripcion": "Cifra: \"50%\""
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Seguridad → Otros"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Otros"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Anticorrupción → Otros"
        }
      ]
    },
    {
      "id": 351,
      "tema": "Educación",
      "inicio": 6066.4,
      "fin": 6077.4,
      "inicio_fmt": "101:06",
      "fin_fmt": "101:09",
      "duracion_seg": 11.0,
      "extracto": "Varios de ellos que están comprendidos educación,...",
      "color": "#27ae60",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Educación"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Seguridad → Educación"
        }
      ]
    },
    {
      "id": 354,
      "tema": "Anticorrupción",
      "inicio": 6077.4,
      "fin": 6113.8,
      "inicio_fmt": "101:17",
      "fin_fmt": "101:18",
      "duracion_seg": 36.5,
      "extracto": "lucha contra la corrupción, seguridad social, para garantizar los bienes,...",
      "color": "#e67e22",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Educación → Anticorrupción"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Anticorrupción"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Anticorrupción"
        }
      ]
    },
    {
      "id": 355,
      "tema": "Democracia e Instituciones",
      "inicio": 6084.4,
      "fin": 6131.1,
      "inicio_fmt": "101:24",
      "fin_fmt": "101:25",
      "duracion_seg": 46.8,
      "extracto": "justicia, y administración de justicia. Presidencia del Consejo de Ministros Modernización y fortalecimiento institucional En el Gobierno del Pueblo se aprobó la Política Nacional de Modernización de la Gestión Pública al 2030, lo cual se continuará implementando en todas las entidades del Poder Eje...",
      "color": "#7f8c8d",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Seguridad → Democracia e Instituciones"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Infraestructura → Democracia e Instituciones"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Anticorrupción → Democracia e Instituciones"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Democracia e Instituciones"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Democracia e Instituciones"
        }
      ]
    },
    {
      "id": 358,
      "tema": "Regiones",
      "inicio": 6109.8,
      "fin": 6218.2,
      "inicio_fmt": "101:49",
      "fin_fmt": "101:51",
      "duracion_seg": 108.4,
      "extracto": "los gobiernos regionales y municipalidades, necesidades a la ciudadanía, con un enfoque territorial. de cuatro nuevos Centros de Mejor Atención al Ciudadano, Centros MAC en Cajamarca, Loreto, Huánuco y Moquegua, en los departamentos de San Martín, Tacna, Tumbes, Huánuco y Lima, mediante el cual la c...",
      "color": "#16a085",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Regiones"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Regiones"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Regiones"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Salud → Regiones"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Cajamarca, Huánuco, Loreto"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Huánuco, Lima, San Martín"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Regiones"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Regiones"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Regiones"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Regiones"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Regiones"
        }
      ]
    },
    {
      "id": 359,
      "tema": "Otros",
      "inicio": 6117.8,
      "fin": 6205.2,
      "inicio_fmt": "101:57",
      "fin_fmt": "101:59",
      "duracion_seg": 87.4,
      "extracto": "respondan a las expectativas, mejorando la calidad de vida y los que se sumarán, a los siete Centros MAC que ya existen, Además, se han implementado cinco MAC Express a nivel nacional a más de 40 trámites y servicios virtualizados, A la fecha se cuenta con un total de 71 MAC Express y distritales,...",
      "color": "#666",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Otros"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Otros"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Otros"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Otros"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Otros"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Otros"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Otros"
        }
      ]
    },
    {
      "id": 362,
      "tema": "Democracia e Instituciones",
      "inicio": 6207.2,
      "fin": 6237.6,
      "inicio_fmt": "103:27",
      "fin_fmt": "103:29",
      "duracion_seg": 30.4,
      "extracto": "congresistas de la República de la sociedad civil, donde han podido expresar sus principales preocupaciones y demandas. para abordar problemáticas específicas...",
      "color": "#7f8c8d",
      "eventos": [
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Democracia e Instituciones"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Democracia e Instituciones"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Educación → Democracia e Instituciones"
        }
      ]
    },
    {
      "id": 363,
      "tema": "Política Exterior",
      "inicio": 6224.2,
      "fin": 6276.7,
      "inicio_fmt": "103:44",
      "fin_fmt": "103:48",
      "duracion_seg": 52.5,
      "extracto": "Ahora se está haciendo el seguimiento de los acuerdos adoptados entre otras, en el ámbito nacional. interdistritales, interprovinciales e interdepartamentales del país...",
      "color": "#2c3e50",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Política Exterior"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Política Exterior"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Infraestructura → Política Exterior"
        }
      ]
    },
    {
      "id": 364,
      "tema": "Regiones",
      "inicio": 6228.2,
      "fin": 6268.7,
      "inicio_fmt": "103:48",
      "fin_fmt": "103:50",
      "duracion_seg": 40.5,
      "extracto": "de estos espacios. en provincias y distritos y en los ámbitos territoriales Cusco, El Bráen, Amazonas, y Arequipa, mediante las Agendas para el Desarrollo Territorial, atienden las prioridades territoriales Ordenamiento Territorial. La PCM y los gobiernos regionales vienen trabajando en la implement...",
      "color": "#16a085",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Política Exterior → Regiones"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Regiones"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Cusco"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Regiones"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Amazonas"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Arequipa"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Regiones"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Regiones"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Regiones"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Educación → Regiones"
        }
      ]
    },
    {
      "id": 365,
      "tema": "Otros",
      "inicio": 6230.6,
      "fin": 6258.6,
      "inicio_fmt": "103:50",
      "fin_fmt": "103:52",
      "duracion_seg": 28.0,
      "extracto": "También se han constituido de Apurímac, Loreto, Ayacucho, Huancavelica Estas metas, mediante acciones inmediatas....",
      "color": "#666",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Otros"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Apurímac"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Otros"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Loreto"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ayacucho"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Huancavelica, Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Otros"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Política Exterior → Otros"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Otros"
        }
      ]
    },
    {
      "id": 366,
      "tema": "Educación",
      "inicio": 6232.6,
      "fin": 6265.7,
      "inicio_fmt": "103:52",
      "fin_fmt": "103:54",
      "duracion_seg": 33.1,
      "extracto": "20 Mesas Técnicas de Desarrollo según sus competencias...",
      "color": "#27ae60",
      "eventos": [
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Educación"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Educación"
        }
      ]
    },
    {
      "id": 368,
      "tema": "Democracia e Instituciones",
      "inicio": 6276.7,
      "fin": 6371.2,
      "inicio_fmt": "104:36",
      "fin_fmt": "104:46",
      "duracion_seg": 94.5,
      "extracto": "a través de la búsqueda de consensos. hemos presentado ante el Congreso de la República cinco propuestas normativas y una ley para fortalecer la investigación, el procesamiento y la sanción a las personas jurídicas la implementación en todos los contratos suscritos por el Estado por parte de funcion...",
      "color": "#7f8c8d",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Política Exterior → Democracia e Instituciones"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Democracia e Instituciones"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Anticorrupción → Democracia e Instituciones"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Democracia e Instituciones"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Anticorrupción → Democracia e Instituciones"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Anticorrupción → Democracia e Instituciones"
        },
        {
          "tipo": "anuncio",
          "descripcion": "Anuncio o compromiso"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Democracia e Instituciones"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Anticorrupción → Democracia e Instituciones"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Anticorrupción → Democracia e Instituciones"
        }
      ]
    },
    {
      "id": 369,
      "tema": "Anticorrupción",
      "inicio": 6286.9,
      "fin": 6368.2,
      "inicio_fmt": "104:46",
      "fin_fmt": "104:49",
      "duracion_seg": 81.2,
      "extracto": "Lucha contra la corrupción. en materia de integridad y lucha contra la corrupción. otra para prevenir conflictos de intereses y posibles actos de corrupción en el sector público de cláusulas anticorrupción la corrupción asociada a la extorsión sexual que aprobó la estrategia de integridad para la pr...",
      "color": "#e67e22",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Anticorrupción"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Anticorrupción"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Política Exterior → Anticorrupción"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Anticorrupción"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Seguridad → Anticorrupción"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Anticorrupción"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Anticorrupción"
        }
      ]
    },
    {
      "id": 370,
      "tema": "Otros",
      "inicio": 6289.7,
      "fin": 6357.2,
      "inicio_fmt": "104:49",
      "fin_fmt": "104:51",
      "duracion_seg": 67.5,
      "extracto": "En noviembre del año pasado, como parte de los 100 primeros días de gestión, Se aprobó tres de ellas con una votación contundente, Quedan pendientes otras dos propuestas que buscan, primero, A fines del año pasado,...",
      "color": "#666",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Anticorrupción → Otros"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Anticorrupción → Otros"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Seguridad → Otros"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Otros"
        }
      ]
    },
    {
      "id": 372,
      "tema": "Seguridad",
      "inicio": 6321.7,
      "fin": 6340.4,
      "inicio_fmt": "105:21",
      "fin_fmt": "105:24",
      "duracion_seg": 18.6,
      "extracto": "que incurran en estos delitos. y medidas que sancionan drásticamente...",
      "color": "#c0392b",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Seguridad"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Seguridad"
        }
      ]
    },
    {
      "id": 375,
      "tema": "Anticorrupción",
      "inicio": 6377.2,
      "fin": 6389.2,
      "inicio_fmt": "106:17",
      "fin_fmt": "106:20",
      "duracion_seg": 12.0,
      "extracto": "de la ciudadanía en materia de transparencia, probidad e integridad pública. contra la Corrupción...",
      "color": "#e67e22",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Salud → Anticorrupción"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Política Exterior → Anticorrupción"
        }
      ]
    },
    {
      "id": 376,
      "tema": "Otros",
      "inicio": 6383.2,
      "fin": 6425.9,
      "inicio_fmt": "106:23",
      "fin_fmt": "106:25",
      "duracion_seg": 42.7,
      "extracto": "Cabe resaltar también son seguros y progresivos, y nos compromete a todos. que solo favorecen a unos pocos,...",
      "color": "#666",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Anticorrupción → Otros"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Agricultura → Otros"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Otros"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Otros"
        }
      ]
    },
    {
      "id": 377,
      "tema": "Política Exterior",
      "inicio": 6385.2,
      "fin": 6416.9,
      "inicio_fmt": "106:25",
      "fin_fmt": "106:27",
      "duracion_seg": 31.7,
      "extracto": "la suscripción del Convenio Internacional de trabajar juntos...",
      "color": "#2c3e50",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Política Exterior"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Política Exterior"
        }
      ]
    },
    {
      "id": 378,
      "tema": "Democracia e Instituciones",
      "inicio": 6389.2,
      "fin": 6446.4,
      "inicio_fmt": "106:29",
      "fin_fmt": "106:31",
      "duracion_seg": 57.2,
      "extracto": "con la Organización de Estados Americanos. señores congresistas, hasta aquí las líneas de políticas generales de mi Gobierno y que este Gobierno ha implementado. que nos han elegido, no para discutir temas a lograr que se respeten los derechos...",
      "color": "#7f8c8d",
      "eventos": [
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Anticorrupción → Democracia e Instituciones"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Democracia e Instituciones"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Democracia e Instituciones"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Educación → Democracia e Instituciones"
        }
      ]
    },
    {
      "id": 379,
      "tema": "Regiones",
      "inicio": 6393.6,
      "fin": 6455.3,
      "inicio_fmt": "106:33",
      "fin_fmt": "106:35",
      "duracion_seg": 61.7,
      "extracto": "Querido pueblo peruano, pero son los que el país necesita Es hora, lo demanda el Perú, a favor de las peruanas y peruanos sino para ayudar a cada compatriota a lo largo y ancho de nuestro territorio, un país mejor y más próspero,...",
      "color": "#16a085",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Regiones"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Regiones"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Regiones"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Política Exterior → Regiones"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Regiones"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Regiones"
        }
      ]
    },
    {
      "id": 381,
      "tema": "Educación",
      "inicio": 6430.9,
      "fin": 6466.7,
      "inicio_fmt": "107:10",
      "fin_fmt": "107:12",
      "duracion_seg": 35.8,
      "extracto": "a mejorar sus vidas, a brindarles educación a sus hijas e hijos, para crear trabajo, a expresarse y prosperar. y oportunidades para todos....",
      "color": "#27ae60",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Educación"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Salud → Educación"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Educación"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Educación"
        }
      ]
    },
    {
      "id": 383,
      "tema": "Otros",
      "inicio": 6446.4,
      "fin": 6486.6,
      "inicio_fmt": "107:26",
      "fin_fmt": "107:28",
      "duracion_seg": 40.2,
      "extracto": "de todos y todas, En suma, los convoco a construir juntos de ninguna índole, hace 201 años, el sueño de nuestros grandes próceres, héroes y pensadores, Por eso,...",
      "color": "#666",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Otros"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Educación → Otros"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Política Exterior → Otros"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Otros"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Política Exterior → Otros"
        }
      ]
    },
    {
      "id": 385,
      "tema": "Política Exterior",
      "inicio": 6456.3,
      "fin": 6485.6,
      "inicio_fmt": "107:36",
      "fin_fmt": "107:38",
      "duracion_seg": 29.3,
      "extracto": "inclusivo y solidario, un país sin discriminación la patria que esperamos ustedes y nosotros, solo unidos lo podremos lograr....",
      "color": "#2c3e50",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Política Exterior"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Educación → Política Exterior"
        }
      ]
    },
    {
      "id": 389,
      "tema": "Otros",
      "inicio": 6488.6,
      "fin": 6509.3,
      "inicio_fmt": "108:08",
      "fin_fmt": "108:10",
      "duracion_seg": 20.7,
      "extracto": "que les conviene incluso y moderno, no le sirve a nadie. Por ello,...",
      "color": "#666",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Agricultura → Otros"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Política Exterior → Otros"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Economía → Otros"
        }
      ]
    },
    {
      "id": 391,
      "tema": "Política Exterior",
      "inicio": 6492.6,
      "fin": 6517.8,
      "inicio_fmt": "108:12",
      "fin_fmt": "108:15",
      "duracion_seg": 25.2,
      "extracto": "En este mundo globalizado me dirijo a ustedes, compatriotas, a las fuerzas sanas del país,...",
      "color": "#2c3e50",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Seguridad → Política Exterior"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Política Exterior"
        }
      ]
    },
    {
      "id": 395,
      "tema": "Otros",
      "inicio": 6511.8,
      "fin": 6584.6,
      "inicio_fmt": "108:31",
      "fin_fmt": "108:33",
      "duracion_seg": 72.8,
      "extracto": "con humildad, ante los hombres y mujeres de corazón limpio, que no han perdido sus sueños A todos les pido aquí presentes, es mucho más grande que sus problemas, como dijo Basadre. nuestros prejuicios, simpatías o antagonismos. hagamos historia, tengamos todas las mismas oportunidades y podamos lega...",
      "color": "#666",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Agricultura → Otros"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Política Exterior → Otros"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Educación → Otros"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Otros"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Otros"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Otros"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Otros"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Política Exterior → Otros"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Otros"
        }
      ]
    },
    {
      "id": 396,
      "tema": "Educación",
      "inicio": 6521.8,
      "fin": 6544.4,
      "inicio_fmt": "108:41",
      "fin_fmt": "108:43",
      "duracion_seg": 22.6,
      "extracto": "ante los jóvenes con la humildad que aprendí de mis padres...",
      "color": "#27ae60",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Educación"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Educación"
        }
      ]
    },
    {
      "id": 397,
      "tema": "Regiones",
      "inicio": 6525.8,
      "fin": 6597.1,
      "inicio_fmt": "108:45",
      "fin_fmt": "108:47",
      "duracion_seg": 71.3,
      "extracto": "y ansían un país mejor. de continuar con los cambios que el país necesita. para que no defraudemos a los peruanos y peruanas y batallemos juntos, porque el Perú y así logremos que estas tierras generaciones un país podamos los peruanos de todos los colores...",
      "color": "#16a085",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Regiones"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Política Exterior → Regiones"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Regiones"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Regiones"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Regiones"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Regiones"
        }
      ]
    },
    {
      "id": 398,
      "tema": "Política Exterior",
      "inicio": 6529.8,
      "fin": 6574.6,
      "inicio_fmt": "108:49",
      "fin_fmt": "108:51",
      "duracion_seg": 44.8,
      "extracto": "que nos acompañen en esta cruzada por encima de nuestras diferencias, Los invoco a trabajar unidos,...",
      "color": "#2c3e50",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Política Exterior"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Política Exterior"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Política Exterior"
        }
      ]
    },
    {
      "id": 399,
      "tema": "Democracia e Instituciones",
      "inicio": 6535.8,
      "fin": 6568.1,
      "inicio_fmt": "108:55",
      "fin_fmt": "108:57",
      "duracion_seg": 32.3,
      "extracto": "Ante ustedes, señoras y señores congresistas, que me otorgó el pueblo con su voto, los invoco Este es el momento de conversar y entendernos posturas políticas, ideologías,...",
      "color": "#7f8c8d",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Democracia e Instituciones"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Educación → Democracia e Instituciones"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Democracia e Instituciones"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Política Exterior → Democracia e Instituciones"
        }
      ]
    },
    {
      "id": 401,
      "tema": "Otros",
      "inicio": 6589.1,
      "fin": 6633.3,
      "inicio_fmt": "109:49",
      "fin_fmt": "109:51",
      "duracion_seg": 44.2,
      "extracto": "se miren como hermanos. Y como soñaba el amauta José María Arguedas, y de todas las sangres, No quiero terminar sin antes hacer dos pedidos. Entrega lo mucho de mí....",
      "color": "#666",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Educación → Otros"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Regiones → Otros"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Democracia e Instituciones → Otros"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Anticorrupción → Otros"
        }
      ]
    },
    {
      "id": 402,
      "tema": "Democracia e Instituciones",
      "inicio": 6599.1,
      "fin": 6628.7,
      "inicio_fmt": "109:59",
      "fin_fmt": "110:01",
      "duracion_seg": 29.7,
      "extracto": "vivir juntos con dignidad y justicia. Hacer una lucha frontal contra la revolución y que el Congreso de la República trabaje los proyectos de ley en este acto...",
      "color": "#7f8c8d",
      "eventos": [
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Democracia e Instituciones"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Otros → Democracia e Instituciones"
        },
        {
          "tipo": "mencion_regional",
          "descripcion": "Menciona: Ica"
        },
        {
          "tipo": "cambio_tema",
          "descripcion": "De Política Exterior → Democracia e Instituciones"
        }
      ]
    }
  ]
};

// ─────────────────────────────────────────────────────────────
//  ESTADO GLOBAL
// ─────────────────────────────────────────────────────────────
const audio       = document.getElementById('audio-el');
let audioLoaded   = true;
let selectedBlock = null;   // bloque con panel abierto
let playingBlock  = null;   // bloque que está sonando ahora
const SPEEDS      = [0.75, 1, 1.25, 1.5, 2];
let speedIdx      = 1;
const DURACION    = DATA.meta.duracion_total_seg;
const TICKS       = 7;
const LABEL_W_PX  = 148; // debe coincidir con --label-w


// ─────────────────────────────────────────────────────────────
//  UTILIDADES
// ─────────────────────────────────────────────────────────────
function fmt(sec) {
  const t = Math.floor(sec);
  const h = Math.floor(t / 3600);
  const m = Math.floor((t % 3600) / 60);
  const s = t % 60;
  if (h > 0) return `${h}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  return `${m}:${String(s).padStart(2,'0')}`;
}

function pct(seg) { return (seg / DURACION * 100).toFixed(4) + '%'; }

function bloqueEnTiempo(t) {
  return DATA.bloques.find(b => t >= b.inicio && t < b.fin) || null;
}

// ─────────────────────────────────────────────────────────────
//  AUDIO — precargado + player sticky
// ─────────────────────────────────────────────────────────────
document.getElementById('btn-play-block').classList.remove('no-audio');
document.getElementById('axis-hint').classList.add('visible');

// El player permanece únicamente dentro de la sección "Timeline interactivo"
// (se eliminó el comportamiento sticky en el bottom de la landing).

// ─────────────────────────────────────────────────────────────
//  CONTROLES DEL PLAYER
// ─────────────────────────────────────────────────────────────
function togglePlay() {
  if (!audioLoaded) return;
  audio.paused ? audio.play() : audio.pause();
}

function seekTo(sec) {
  if (!audioLoaded) return;
  audio.currentTime = Math.max(0, Math.min(sec, audio.duration || DURACION));
  if (audio.paused) audio.play();
}

function seekRelative(delta) { seekTo((audio.currentTime || 0) + delta); }

function cycleSpeed() {
  speedIdx = (speedIdx + 1) % SPEEDS.length;
  audio.playbackRate = SPEEDS[speedIdx];
  document.getElementById('btn-speed').textContent = SPEEDS[speedIdx] + '×';
}

// Volumen
document.getElementById('player-vol').addEventListener('input', function() {
  audio.volume = parseFloat(this.value);
});

// Scrubber click / drag
const scrubberWrap = document.getElementById('scrubber-wrap');
let scrubbing = false;

function scrubFromEvent(e) {
  const rect = scrubberWrap.getBoundingClientRect();
  const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
  const dur = audio.duration || DURACION;
  seekTo(ratio * dur);
}
scrubberWrap.addEventListener('mousedown', e => { scrubbing = true; scrubFromEvent(e); });
document.addEventListener('mousemove', e => { if (scrubbing) scrubFromEvent(e); });
document.addEventListener('mouseup',   () => { scrubbing = false; });

// Clic en el eje de tiempo → seek
document.getElementById('time-axis').addEventListener('click', function(e) {
  if (!audioLoaded) return;
  const rect = this.getBoundingClientRect();
  const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
  seekTo(ratio * (audio.duration || DURACION));
});

// ─────────────────────────────────────────────────────────────
//  ACTUALIZACIÓN EN TIEMPO REAL (timeupdate)
// ─────────────────────────────────────────────────────────────
const playhead     = document.getElementById('playhead');
const playheadTime = document.getElementById('playhead-time');
const scrubFill    = document.getElementById('scrubber-fill');
const playerCur    = document.getElementById('player-current');
const playerTema   = document.getElementById('player-tema-name');

audio.addEventListener('timeupdate', () => {
  const t = audio.currentTime;
  const dur = audio.duration || DURACION;

  // Scrubber fill
  const ratio = t / dur;
  scrubFill.style.width = (ratio * 100).toFixed(3) + '%';

  // Tiempo en el player
  playerCur.textContent = fmt(t);

  // Posición del cabezal en el Gantt
  const rowsEl = document.getElementById('timeline-rows');
  const trackW = rowsEl.offsetWidth - LABEL_W_PX;
  const headPx = LABEL_W_PX + trackW * ratio;
  playhead.style.left = headPx + 'px';
  playhead.style.display = 'block';
  playheadTime.textContent = fmt(t);

  // Ajustar tooltip del cabezal para que no se salga por la derecha
  playheadTime.style.left = ratio > 0.85 ? 'auto' : '4px';
  playheadTime.style.right = ratio > 0.85 ? '4px' : 'auto';

  // Bloque actual
  const bloque = bloqueEnTiempo(t);
  if (bloque) {
    playerTema.textContent = bloque.tema;
    if (bloque !== playingBlock) {
      // Quitar clase playing del bloque anterior
      if (playingBlock) {
        document.querySelectorAll(`.tema-block[data-id="${playingBlock.id}"]`)
          .forEach(el => el.classList.remove('playing'));
      }
      // Poner clase playing en el nuevo bloque
      document.querySelectorAll(`.tema-block[data-id="${bloque.id}"]`)
        .forEach(el => el.classList.add('playing'));
      playingBlock = bloque;

      // Auto-abrir panel si no hay ninguno seleccionado manualmente
      if (!selectedBlock) abrirDetalle(bloque, null, false);
    }
  } else {
    if (playingBlock) {
      document.querySelectorAll(`.tema-block[data-id="${playingBlock.id}"]`)
        .forEach(el => el.classList.remove('playing'));
      playingBlock = null;
    }
    playerTema.textContent = '—';
  }
});

audio.addEventListener('loadedmetadata', () => {
  document.getElementById('player-total').textContent = fmt(audio.duration);
});

audio.addEventListener('play',  () => {
  document.getElementById('icon-play').style.display  = 'none';
  document.getElementById('icon-pause').style.display = '';
});
audio.addEventListener('pause', () => {
  document.getElementById('icon-play').style.display  = '';
  document.getElementById('icon-pause').style.display = 'none';
});
audio.addEventListener('ended', () => {
  document.getElementById('icon-play').style.display  = '';
  document.getElementById('icon-pause').style.display = 'none';
  if (playingBlock) {
    document.querySelectorAll(`.tema-block[data-id="${playingBlock.id}"]`)
      .forEach(el => el.classList.remove('playing'));
    playingBlock = null;
  }
  playhead.style.display = 'none';
});

// ─────────────────────────────────────────────────────────────
//  RENDER — Leyenda
// ─────────────────────────────────────────────────────────────
const legendEl = document.getElementById('legend-temas');
DATA.resumen_temas.forEach(t => {
  const el = document.createElement('span');
  el.className = 'legend-item';
  el.innerHTML = `<span class="legend-swatch" style="background:${t.color}"></span>${t.tema}`;
  legendEl.insertBefore(el, legendEl.children[legendEl.children.length - 5]);
});

// ─────────────────────────────────────────────────────────────
//  RENDER — Barras de porcentaje
// ─────────────────────────────────────────────────────────────
const barsContainer = document.getElementById('bars-container');
DATA.resumen_temas.forEach(t => {
  const row = document.createElement('div');
  row.className = 'bar-row';
  row.dataset.tema = t.tema;
  row.innerHTML = `
    <span class="bar-label">${t.tema}</span>
    <div class="bar-track">
      <div class="bar-fill" data-pct="${t.porcentaje}" style="background:${t.color}"></div>
    </div>
    <span class="bar-pct">${t.porcentaje}%</span>
  `;
  barsContainer.appendChild(row);
});

const barObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      document.querySelectorAll('.bar-fill').forEach(el => { el.style.width = el.dataset.pct + '%'; });
      barObserver.disconnect();
    }
  });
}, { threshold: 0.3 });
barObserver.observe(barsContainer);

// ─────────────────────────────────────────────────────────────
//  RENDER — Eje de tiempo
// ─────────────────────────────────────────────────────────────
const axisEl = document.getElementById('time-axis');
for (let i = 0; i < TICKS; i++) {
  const seg = Math.round(DURACION / (TICKS - 1) * i);
  const tick = document.createElement('span');
  tick.className = 'time-tick';
  tick.textContent = fmt(seg);
  axisEl.appendChild(tick);
}

// ─────────────────────────────────────────────────────────────
//  RENDER — Timeline de puntos (dot-strip)
// ─────────────────────────────────────────────────────────────
const temaMap = {};
DATA.bloques.forEach(b => {
  if (!temaMap[b.tema]) temaMap[b.tema] = [];
  temaMap[b.tema].push(b);
});

const rowsContainer = document.getElementById('timeline-rows');
const CLUSTER_GAP = DURACION * 0.009;   // separación máx. entre puntos de un grupo
const CLUSTER_PAD = DURACION * 0.0045;  // margen horizontal de la cápsula

DATA.resumen_temas.forEach(({ tema, color }) => {
  const bloques = temaMap[tema];
  if (!bloques) return;

  const row = document.createElement('div');
  row.className = 'tema-row';
  row.dataset.tema = tema;

  const nameEl = document.createElement('div');
  nameEl.className = 'tema-name';
  nameEl.textContent = tema;

  const track = document.createElement('div');
  track.className = 'tema-track';

  // 1) Reunir los puntos: un punto de bloque (color del tema) y, si el
  //    bloque contiene eventos, un punto de evento (rojo) representativo.
  const dots = [];
  bloques.forEach(bloque => {
    dots.push({ x: bloque.inicio, kind: 'block', bloque });
    if (bloque.eventos && bloque.eventos.length) {
      const mid = bloque.inicio + (bloque.fin - bloque.inicio) * 0.5;
      dots.push({ x: Math.min(mid, bloque.fin - 1), kind: 'event', bloque, ev: bloque.eventos[0] });
    }
  });
  dots.sort((a, b) => a.x - b.x);

  // 2) Cápsulas para grupos de puntos cercanos (>= 2)
  let i = 0;
  while (i < dots.length) {
    let j = i;
    while (j + 1 < dots.length && dots[j + 1].x - dots[j].x < CLUSTER_GAP) j++;
    if (j > i) {
      const minX = dots[i].x, maxX = dots[j].x;
      const cap = document.createElement('div');
      cap.className = 'tema-cluster';
      cap.style.left  = pct(Math.max(0, minX - CLUSTER_PAD));
      cap.style.width = pct((maxX - minX) + CLUSTER_PAD * 2);
      track.appendChild(cap);
    }
    i = j + 1;
  }

  // 3) Puntos
  dots.forEach(d => {
    if (d.kind === 'block') {
      const dot = document.createElement('div');
      dot.className = 'tema-block';
      dot.dataset.id = d.bloque.id;
      dot.style.left = pct(d.x);
      dot.style.background = color;
      dot.style.color = color;
      dot.title = `${d.bloque.tema} · ${d.bloque.inicio_fmt} → ${d.bloque.fin_fmt}\nClic para ir al audio`;
      dot.addEventListener('click', () => abrirDetalle(d.bloque, null, true));
      track.appendChild(dot);
    } else {
      const m = document.createElement('div');
      m.className = 'event-marker';
      m.dataset.tipo = d.ev.tipo;
      m.style.left = pct(d.x);
      m.title = d.ev.descripcion + '\nClic para ir al audio';
      m.addEventListener('click', e => {
        e.stopPropagation();
        abrirDetalle(d.bloque, d.ev, true);
      });
      track.appendChild(m);
    }
  });

  row.appendChild(nameEl);
  row.appendChild(track);
  rowsContainer.appendChild(row);
});

// ─────────────────────────────────────────────────────────────
//  FILTROS
// ─────────────────────────────────────────────────────────────
let activeTemas = new Set();   // vacío = todos visibles

function aplicarFiltros() {
  const allTemaRows = document.querySelectorAll('.tema-row');
  const allBarRows  = document.querySelectorAll('.bar-row');
  const allMarkers  = document.querySelectorAll('.event-marker');

  // ── Gantt rows & bar rows ──
  allTemaRows.forEach(row => {
    const match = activeTemas.size === 0 || activeTemas.has(row.dataset.tema);
    row.classList.toggle('dimmed', !match);
  });
  allBarRows.forEach(row => {
    const match = activeTemas.size === 0 || activeTemas.has(row.dataset.tema);
    row.classList.toggle('dimmed', !match);
  });

  // ── Event markers: ocultar los de filas no activas ──
  allMarkers.forEach(m => {
    const temaRow = m.closest('.tema-row');
    const tema = temaRow ? temaRow.dataset.tema : null;
    const visible = activeTemas.size === 0 || (tema && activeTemas.has(tema));
    m.classList.toggle('ev-hidden', !visible);
  });

  // ── Reset button visibility ──
  document.getElementById('chip-reset-tema').classList.toggle('visible', activeTemas.size > 0);
}

// Generar chips de tema
const chipsTemaContainer = document.getElementById('filter-chips-tema');
DATA.resumen_temas.forEach(t => {
  const chip = document.createElement('button');
  chip.className = 'chip-tema';
  chip.dataset.tema = t.tema;
  chip.innerHTML = `<span class="chip-dot" style="background:${t.color}"></span>${t.tema}`;
  chip.addEventListener('click', () => {
    if (activeTemas.has(t.tema)) {
      activeTemas.delete(t.tema);
      chip.classList.remove('active');
      chip.style.background = '';
      chip.style.borderColor = '';
    } else {
      activeTemas.add(t.tema);
      chip.classList.add('active');
      chip.style.background = t.color;
      chip.style.borderColor = t.color;
    }
    aplicarFiltros();
  });
  chipsTemaContainer.appendChild(chip);
});

document.getElementById('chip-reset-tema').addEventListener('click', () => {
  activeTemas.clear();
  document.querySelectorAll('.chip-tema').forEach(c => {
    c.classList.remove('active');
    c.style.background = '';
    c.style.borderColor = '';
  });
  aplicarFiltros();
});

// ─────────────────────────────────────────────────────────────
//  PANEL DE DETALLE
// ─────────────────────────────────────────────────────────────
const panel     = document.getElementById('detail-panel');
const dTema     = document.getElementById('d-tema');
const dTime     = document.getElementById('d-time');
const dExtracto = document.getElementById('d-extracto');
const btnPlay   = document.getElementById('btn-play-block');

function abrirDetalle(bloque, eventoFocus, seekAudio) {
  // Quitar selected anterior
  document.querySelectorAll('.tema-block.selected').forEach(el => el.classList.remove('selected'));
  // Marcar selected en el bloque nuevo
  document.querySelectorAll(`.tema-block[data-id="${bloque.id}"]`)
    .forEach(el => el.classList.add('selected'));

  selectedBlock = bloque;

  dTema.textContent = bloque.tema.toUpperCase();
  dTema.style.color = bloque.color;
  panel.style.borderLeftColor = bloque.color;
  dTime.textContent = `${bloque.inicio_fmt} — ${bloque.fin_fmt}`;
  dExtracto.textContent = bloque.extracto;

  // Botón del panel
  btnPlay.onclick = () => seekTo(bloque.inicio);

  panel.classList.add('visible');

  // Seek al audio si se pide
  if (seekAudio) {
    seekTo(bloque.inicio);
  }

  if (seekAudio) {
    panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

function cerrarDetalle() {
  panel.classList.remove('visible');
  document.querySelectorAll('.tema-block.selected').forEach(el => el.classList.remove('selected'));
  selectedBlock = null;
}

// Keyboard: espacio = play/pause, escape = cerrar panel
document.addEventListener('keydown', e => {
  if (e.code === 'Space' && e.target === document.body) {
    e.preventDefault();
    togglePlay();
  }
  if (e.code === 'Escape') cerrarDetalle();
  if (e.code === 'ArrowLeft')  seekRelative(-15);
  if (e.code === 'ArrowRight') seekRelative(15);
});


// ═══════════════════════════════════════════════════════════════
//  EXPLORADOR DEL DISCURSO
// ═══════════════════════════════════════════════════════════════
(function () {

  // ── Config tipos ──────────────────────────────────────────────
  const TIPOS = [
    { id: 'anuncio',  label: 'Anuncio',  color: '#e67e22', dot: '#e67e22' },
    { id: 'cifra',    label: 'Cifra',    color: '#2980b9', dot: '#2980b9' },
    { id: 'contexto', label: 'Contexto', color: '#7f8c8d', dot: '#7f8c8d' },
  ];

  // ── Preprocesar bloques ───────────────────────────────────────
  // Añadimos: tipos[], regiones[]
  const bloques = DATA.bloques.map(b => {
    const tiposEv = (b.eventos || []).map(e => e.tipo);
    const tipos = [];
    if (tiposEv.includes('anuncio')) tipos.push('anuncio');
    if (tiposEv.includes('cifra'))   tipos.push('cifra');
    if (tipos.length === 0)          tipos.push('contexto');

    const regiones = [];
    (b.eventos || []).forEach(e => {
      if (e.tipo === 'mencion_regional') {
        const desc = e.descripcion.replace('Menciona: ', '');
        desc.split(', ').forEach(r => {
          const rr = r.trim();
          if (rr && !regiones.includes(rr)) regiones.push(rr);
        });
      }
    });
    return { ...b, _tipos: tipos, _regiones: regiones };
  });

  // ── Estado ────────────────────────────────────────────────────
  let filTemas   = new Set();
  let filTipos   = new Set();
  let filRegion  = null;   // solo una a la vez
  let filQuery   = '';
  let pageSize   = 20;
  let showing    = pageSize;

  // ── DOM refs ──────────────────────────────────────────────────
  const elSearch   = document.getElementById('exp-search');
  const elCount    = document.getElementById('exp-count');
  const elReset    = document.getElementById('exp-reset');
  const elResults  = document.getElementById('exp-results');
  const elLoadMore = document.getElementById('exp-load-more');

  // ── Helpers ───────────────────────────────────────────────────
  function escHtml(s) {
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }

  function highlightText(text, query) {
    if (!query) return escHtml(text);
    const safe = escHtml(text);
    const re = new RegExp('(' + query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
    return safe.replace(re, '<mark>$1</mark>');
  }

  function tipoLabel(id) {
    const t = TIPOS.find(x => x.id === id);
    return t ? t.label.toUpperCase() : id.toUpperCase();
  }
  function tipoColor(id) {
    const t = TIPOS.find(x => x.id === id);
    return t ? t.color : '#999';
  }

  // ── Filtrar ───────────────────────────────────────────────────
  function filtrar() {
    const q = filQuery.toLowerCase().trim();
    return bloques.filter(b => {
      if (filTemas.size > 0 && !filTemas.has(b.tema)) return false;
      if (filTipos.size > 0 && !b._tipos.some(t => filTipos.has(t))) return false;
      if (filRegion && !b._regiones.includes(filRegion)) return false;
      if (q && !b.extracto.toLowerCase().includes(q)) return false;
      return true;
    });
  }

  // ── Renderizar resultados ─────────────────────────────────────
  function render() {
    const resultados = filtrar();
    const total = resultados.length;
    const slice = resultados.slice(0, showing);

    // Count
    elCount.innerHTML = `<strong>${total}</strong> fragmento${total !== 1 ? 's' : ''} encontrado${total !== 1 ? 's' : ''}`;

    // Reset btn
    const anyFilter = filTemas.size > 0 || filTipos.size > 0 || filRegion || filQuery;
    elReset.classList.toggle('hidden', !anyFilter);

    // Results
    if (total === 0) {
      elResults.innerHTML = '<div class="exp-empty">No se encontraron fragmentos con los filtros seleccionados.</div>';
      elLoadMore.style.display = 'none';
      return;
    }

    const q = filQuery.trim();
    elResults.innerHTML = slice.map(b => {
      const badgeTipos = b._tipos.map(t =>
        `<span class="exp-badge">
          <span class="exp-badge-dot" style="background:${tipoColor(t)}"></span>
          ${tipoLabel(t)}
        </span>`
      ).join('<span class="exp-badge-sep">·</span>');

      const regionStr = b._regiones.length
        ? `<span class="exp-badge-sep">·</span><span class="exp-badge-region">${escHtml(b._regiones.join(', '))}</span>`
        : '';

      const extractoHL = highlightText(b.extracto, q);

      return `<div class="exp-card" data-id="${b.id}">
        <div class="exp-card-left">
          <div class="exp-card-badges">
            ${badgeTipos}
            <span class="exp-badge-sep">|</span>
            <span class="exp-badge-tema" style="color:${b.color}">${escHtml(b.tema)}</span>
            ${regionStr}
          </div>
          <p class="exp-card-extracto">${extractoHL}…</p>
          <div class="exp-card-time">${b.inicio_fmt} — ${b.fin_fmt}</div>
        </div>
        <div class="exp-card-right">
          <button class="exp-card-play" data-inicio="${b.inicio}">
            <svg viewBox="0 0 10 10"><polygon points="0,0 10,5 0,10"/></svg>
            Escuchar
          </button>
        </div>
      </div>`;
    }).join('');

    // Botón "cargar más"
    if (total > showing) {
      elLoadMore.style.display = 'block';
      elLoadMore.textContent = `Cargar más (${total - showing} restantes)`;
    } else {
      elLoadMore.style.display = 'none';
    }

    // Eventos en tarjetas
    elResults.querySelectorAll('.exp-card').forEach(card => {
      card.addEventListener('click', e => {
        if (e.target.closest('.exp-card-play')) return; // handled separately
        const id = parseInt(card.dataset.id);
        const b = bloques.find(x => x.id === id);
        if (b) abrirDetalle(b, null, false);
        card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      });
    });
    elResults.querySelectorAll('.exp-card-play').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        const inicio = parseFloat(btn.dataset.inicio);
        seekTo(inicio);
        // Scroll al player
        document.getElementById('audio-player').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      });
    });
  }

  // ── Chips: Tema ───────────────────────────────────────────────
  const cTema = document.getElementById('exp-chips-tema');
  DATA.resumen_temas.forEach(t => {
    const btn = document.createElement('button');
    btn.className = 'exp-chip';
    btn.dataset.tema = t.tema;
    btn.innerHTML = `<span class="chip-dot" style="background:${t.color}"></span>${t.tema}`;
    btn.addEventListener('click', () => {
      if (filTemas.has(t.tema)) {
        filTemas.delete(t.tema);
        btn.classList.remove('active');
        btn.style.background = '';
        btn.style.borderColor = '';
      } else {
        filTemas.add(t.tema);
        btn.classList.add('active');
        btn.style.background = t.color;
        btn.style.borderColor = t.color;
      }
      showing = pageSize;
      render();
    });
    cTema.appendChild(btn);
  });

  // ── Chips: Tipo ───────────────────────────────────────────────
  const cTipo = document.getElementById('exp-chips-tipo');
  TIPOS.forEach(t => {
    const btn = document.createElement('button');
    btn.className = 'exp-chip';
    btn.innerHTML = `<span class="chip-dot" style="background:${t.color}"></span>${t.label}`;
    btn.addEventListener('click', () => {
      if (filTipos.has(t.id)) {
        filTipos.delete(t.id);
        btn.classList.remove('active');
        btn.style.background = '';
        btn.style.borderColor = '';
      } else {
        filTipos.add(t.id);
        btn.classList.add('active');
        btn.style.background = t.color;
        btn.style.borderColor = t.color;
      }
      showing = pageSize;
      render();
    });
    cTipo.appendChild(btn);
  });

  // ── Chips: Región ─────────────────────────────────────────────
  const REGIONES = [...new Set(
    bloques.flatMap(b => b._regiones)
  )].sort();

  const cRegion = document.getElementById('exp-chips-region');
  REGIONES.forEach(r => {
    const btn = document.createElement('button');
    btn.className = 'exp-chip';
    btn.textContent = r;
    btn.addEventListener('click', () => {
      if (filRegion === r) {
        filRegion = null;
        btn.classList.remove('active');
        btn.style.background = '';
        btn.style.borderColor = '';
      } else {
        // Limpiar anterior selección
        cRegion.querySelectorAll('.exp-chip').forEach(c => {
          c.classList.remove('active');
          c.style.background = '';
          c.style.borderColor = '';
        });
        filRegion = r;
        btn.classList.add('active');
        btn.style.background = '#2c3e50';
        btn.style.borderColor = '#2c3e50';
      }
      showing = pageSize;
      render();
    });
    cRegion.appendChild(btn);
  });

  // ── Búsqueda ──────────────────────────────────────────────────
  let searchTimer;
  elSearch.addEventListener('input', () => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      filQuery = elSearch.value;
      showing = pageSize;
      render();
    }, 220);
  });

  // ── Reset ─────────────────────────────────────────────────────
  elReset.addEventListener('click', () => {
    filTemas.clear();
    filTipos.clear();
    filRegion = null;
    filQuery = '';
    elSearch.value = '';
    document.querySelectorAll('#exp-chips-tema .exp-chip, #exp-chips-tipo .exp-chip, #exp-chips-region .exp-chip').forEach(c => {
      c.classList.remove('active');
      c.style.background = '';
      c.style.borderColor = '';
    });
    showing = pageSize;
    render();
  });

  // ── Cargar más ────────────────────────────────────────────────
  elLoadMore.addEventListener('click', () => {
    showing += pageSize;
    render();
  });

  // ── Render inicial ────────────────────────────────────────────
  render();

})();

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

// ═══════════════════════════════════════════════════════════════
//  MÓDULO A — barras de distribución temática
// ═══════════════════════════════════════════════════════════════
(function() {
  const container = document.getElementById('modA-bars');
  if (!container) return;

  DATA.resumen_temas.forEach(function(t) {
    const row = document.createElement('div');
    row.className = 'modA-bar-row';
    row.innerHTML =
      '<div class="modA-bar-label">' +
        '<span class="modA-bar-dot" style="background:' + t.color + '"></span>' +
        t.tema +
      '</div>' +
      '<div class="modA-bar-track">' +
        '<div class="modA-bar-fill" data-pct="' + t.porcentaje + '" style="background:' + t.color + '"></div>' +
      '</div>' +
      '<span class="modA-bar-pct">' + t.porcentaje + '%</span>';
    container.appendChild(row);
  });

  const obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) {
        document.querySelectorAll('.modA-bar-fill').forEach(function(el) {
          el.style.width = el.dataset.pct + '%';
        });
        obs.disconnect();
      }
    });
  }, { threshold: 0.2 });
  obs.observe(container);
})();

// ═══════════════════════════════════════════════════════════════
//  MÓDULO B — narrativa en 5 momentos
// ═══════════════════════════════════════════════════════════════
(function() {
  // El contenido editable de los 5 momentos vive en ./js/momentos.js
  // (se carga ANTES que este archivo y define window.MOMENTOS).
  var NARRATIVA = (window.MOMENTOS && window.MOMENTOS.length) ? window.MOMENTOS : [];
  if (!NARRATIVA.length) return;

  var colores = {};
  DATA.resumen_temas.forEach(function(t) { colores[t.tema] = t.color; });

  // ── Carrusel: track horizontal fluido ─────────────────────
  var track   = document.getElementById('rz-track');
  if (!track) return;
  var elStart = document.querySelector('.rz-time-start');
  var btnPrev = document.getElementById('rz-prev');
  var btnNext = document.getElementById('rz-next');

  // Límites de tiempo (seg) de cada momento, para extraer texto del discurso
  var starts = NARRATIVA.map(function(m) { return m.inicio_seg; });
  function escapeHtml(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  // Cita (una sola, concisa) real del discurso dentro del rango del momento
  function momentoCita(i) {
    if (NARRATIVA[i].cita) return NARRATIVA[i].cita;
    var lo = starts[i];
    var hi = (i + 1 < starts.length) ? starts[i + 1] : Infinity;
    var bloques = (typeof DATA !== 'undefined' && DATA.bloques) ? DATA.bloques : [];
    var pick = '';
    for (var k = 0; k < bloques.length; k++) {
      var bl = bloques[k];
      if (bl.inicio >= lo && bl.inicio < hi) {
        var t = (bl.extracto || '').trim();
        if (t.length > 120) { pick = t; break; }
        if (!pick) pick = t;
      }
    }
    return pick.replace(/\s*\.{2,}$/, '…');
  }
  // Envuelve la frase a analizar en <mark> (texto ya escapado)
  function conResaltado(textoEsc, frase) {
    if (!frase) return textoEsc;
    var f = escapeHtml(frase);
    var pos = textoEsc.indexOf(f);
    if (pos < 0) return textoEsc;
    return textoEsc.slice(0, pos) + '<mark class="rz-mark">' + f + '</mark>' + textoEsc.slice(pos + f.length);
  }

  var AUDIO_SVG = '<svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>';

  // Reproductores de clip por momento. Solo uno puede sonar a la vez.
  var players = [];
  function pausarOtros(excepto) {
    // Pausa el audio del discurso general…
    if (typeof audio !== 'undefined' && audio && audio !== excepto) {
      try { audio.pause(); } catch (e) {}
    }
    // …y cualquier otro clip de momento.
    players.forEach(function(p) { if (p !== excepto) p.pause(); });
  }
  function pausarTodosLosClips() { players.forEach(function(p) { p.pause(); }); }
  // Si arranca el audio general, callar los clips.
  if (typeof audio !== 'undefined' && audio) {
    audio.addEventListener('play', pausarTodosLosClips);
  }

  // Construir los 5 paneles (uno por momento) dentro del track
  NARRATIVA.forEach(function(b, i) {
    var cita  = momentoCita(i) || b.descripcion;
    var quote = conResaltado(escapeHtml(cita), b.resaltar);
    var tiempo = escapeHtml(b.tiempo.replace(/—/g, '-'));
    var panel = document.createElement('div');
    panel.className = 'rz-slide-panel';
    panel.innerHTML =
      '<div class="rz-slide-marker">' +
        '<div class="rz-slide-num">' + (i + 1) + '</div>' +
        '<div class="rz-slide-line"></div>' +
      '</div>' +
      '<div class="rz-slide-main">' +
        '<span class="rz-slide-time">' + tiempo + '</span>' +
        '<div class="rz-slide-quote"><p class="rz-quote-p">' + quote + '</p></div>' +
        '<div class="rz-slide-audio-wrap">' +
          '<button class="rz-slide-audio rz-float-audio" type="button">' + AUDIO_SVG + ' ESCUCHAR AUDIO</button>' +
          '<audio class="rz-slide-player" controls preload="none"></audio>' +
        '</div>' +
      '</div>' +
      '<div class="rz-float-card">' +
        '<div class="rz-float-rule"></div>' +
        '<h4 class="rz-float-title">' + escapeHtml(b.titulo) + '</h4>' +
        '<p class="rz-float-desc">' + escapeHtml(b.descripcion) + '</p>' +
        '<div class="rz-float-rule"></div>' +
      '</div>';

    var wrap   = panel.querySelector('.rz-slide-audio-wrap');
    var player = panel.querySelector('.rz-slide-player');
    if (b.audio) player.src = b.audio;
    players.push(player);
    // Refuerzo: al reproducir un clip, callar todos los demás audios.
    player.addEventListener('play', function() { pausarOtros(player); });

    panel.querySelector('.rz-slide-audio').addEventListener('click', function() {
      if (b.audio) {
        // Clip propio del momento → mostrar su player inline y reproducir.
        pausarOtros(player);
        wrap.classList.add('is-playing');
        player.play().catch(function() {});
      } else {
        // Aún no hay clip: reproducir el audio general en su segundo.
        seekTo(b.inicio_seg);
        var tl = document.getElementById('timeline');
        if (tl) tl.scrollIntoView({ behavior: 'smooth' });
      }
    });
    track.appendChild(panel);
  });

  var idx = 0, snapTimer = null;
  // Paso = ancho de un panel + gap entre paneles (medido en vivo)
  function stepW() {
    var ps = track.querySelectorAll('.rz-slide-panel');
    if (ps.length > 1) return ps[1].offsetLeft - ps[0].offsetLeft;
    return track.clientWidth || 1;
  }
  function currentIndex(){ return Math.round(track.scrollLeft / stepW()); }
  function setBadge(i)   {
    if (elStart) elStart.classList.toggle('is-hidden', i !== 0);  // "Inicio discurso" solo en el 1er momento
  }

  function goTo(i, smooth) {
    idx = Math.max(0, Math.min(NARRATIVA.length - 1, i));
    if (smooth) {
      // Snap desactivado durante la animación para que sea suave y no dé tirón;
      // se reactiva al terminar (ya alineado, sin salto).
      track.style.scrollSnapType = 'none';
      clearTimeout(snapTimer);
      snapTimer = setTimeout(function() { track.style.scrollSnapType = ''; }, 550);
    }
    track.scrollTo({ left: idx * stepW(), behavior: smooth ? 'smooth' : 'auto' });
    setBadge(idx);
  }

  btnPrev.addEventListener('click', function() { goTo(currentIndex() - 1, true); });
  btnNext.addEventListener('click', function() { goTo(currentIndex() + 1, true); });

  // Actualiza el badge de tiempo mientras se desplaza (throttle con rAF)
  var ticking = false;
  track.addEventListener('scroll', function() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function() {
      var i = currentIndex();
      if (i !== idx) { idx = i; setBadge(idx); pausarTodosLosClips(); }  // al cambiar de momento, callar clips
      ticking = false;
    });
  }, { passive: true });

  // ── Arrastre con mouse mantenido (fluido). En táctil el scroll es nativo ──
  var down = false, decided = false, horiz = false, sx = 0, sy = 0, startLeft = 0;
  track.addEventListener('pointerdown', function(e) {
    if (e.pointerType !== 'mouse') return;           // táctil/pen → scroll nativo
    if (e.button !== 0) return;
    if (e.target.closest('button')) return;          // flechas / audio
    down = true; decided = false; horiz = false;
    sx = e.clientX; sy = e.clientY; startLeft = track.scrollLeft;
  });
  track.addEventListener('pointermove', function(e) {
    if (!down) return;
    if (e.buttons === 0) { down = false; return; }
    var dx = e.clientX - sx, dy = e.clientY - sy;
    if (!decided) {
      if (Math.abs(dx) < 6 && Math.abs(dy) < 6) return;
      decided = true;
      horiz = Math.abs(dx) > Math.abs(dy);           // vertical → scroll del texto
      if (horiz) {
        try { track.setPointerCapture(e.pointerId); } catch (_) {}
        track.classList.add('is-dragging');
        track.style.scrollSnapType = 'none';         // desactivar snap mientras se arrastra
        clearTimeout(snapTimer);
      }
    }
    if (horiz) { track.scrollLeft = startLeft - dx; e.preventDefault(); }
  });
  function endDrag() {
    if (!down) return;
    down = false;
    if (horiz) {
      track.classList.remove('is-dragging');
      goTo(currentIndex(), true);                    // ajuste suave al más cercano
    }
    decided = false; horiz = false;
  }
  track.addEventListener('pointerup', endDrag);
  track.addEventListener('pointercancel', endDrag);

  window.addEventListener('resize', function() { goTo(idx, false); });

  // Si la sección sale de la vista al hacer scroll, pausar los clips.
  if ('IntersectionObserver' in window) {
    var seccion = track.closest('.rz-momentos') || track;
    new IntersectionObserver(function(entries) {
      entries.forEach(function(e) { if (!e.isIntersecting) pausarTodosLosClips(); });
    }, { threshold: 0 }).observe(seccion);
  }
  // Respaldo: si la pestaña se oculta, también pausar.
  document.addEventListener('visibilitychange', function() {
    if (document.hidden) pausarTodosLosClips();
  });

  setBadge(0);
})();

// ═══════════════════════════════════════════════════════════════
//  MÓDULO A (rediseño) — barras de temas + animaciones al entrar
// ═══════════════════════════════════════════════════════════════
(function() {
  var metrics = document.querySelector('.rz-metrics');
  if (!metrics) return;

  // Distribución del tiempo por tema (barra por tema con % y color propio)
  var barsBox = document.getElementById('rz-theme-bars');
  if (barsBox && typeof DATA !== 'undefined' && DATA.resumen_temas) {
    var temas = DATA.resumen_temas;
    temas.forEach(function(t) {
      var nombre = t.tema.replace('Democracia e Instituciones', 'Democracia');
      var row = document.createElement('div');
      row.className = 'rz-tb-row';
      row.innerHTML =
        '<span class="rz-tb-name">' + nombre + '</span>' +
        '<div class="rz-tb-track">' +
          '<span class="rz-tb-fill" data-w="' + t.porcentaje + '" style="background:' + t.color + '"></span>' +
        '</div>' +
        '<span class="rz-tb-pct">' + t.porcentaje + '%</span>';
      barsBox.appendChild(row);
    });
  }

  function animate() {
    metrics.classList.add('is-in');
    var donut = metrics.querySelector('.rz-donut');
    if (donut) donut.classList.add('is-in');
    metrics.querySelectorAll('.rz-ref-fill').forEach(function(el) {
      el.style.width = (el.dataset.pct || 0) + '%';
    });
    metrics.querySelectorAll('.rz-tb-fill').forEach(function(el) {
      el.style.width = (el.dataset.w || 0) + '%';
    });
    metrics.querySelectorAll('.rz-face-arc').forEach(function(el) {
      var full = el.getTotalLength();
      var dash = parseFloat(el.dataset.dash || 0);
      el.style.strokeDasharray = dash + ' ' + full;
    });
  }

  var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) { animate(); obs.disconnect(); }
    });
  }, { threshold: 0.15 });
  obs.observe(metrics);
})();

// ═══════════════════════════════════════════════════════════════
//  NAV — active link al hacer scroll
// ═══════════════════════════════════════════════════════════════
(function() {
  var sections = ['inicio','resumen','narrativa','timeline','datos','emociones','explorador','verificacion'];
  var links = {};
  sections.forEach(function(id) {
    links[id] = document.querySelector('.nav-link[href="#' + id + '"]');
  });

  function updateNav() {
    var current = 'inicio';
    sections.forEach(function(id) {
      var el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= 80) current = id;
    });
    sections.forEach(function(id) {
      if (links[id]) links[id].classList.toggle('active', id === current);
    });
  }

  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();
})();

// ═══════════════════════════════════════════════════════════════
//  MÓDULO 05 — Animación barras de gestos al hacer scroll
// ═══════════════════════════════════════════════════════════════
(function() {
  var perfil = document.getElementById('perfil');
  if (!perfil) return;
  var animated = false;
  var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting && !animated) {
        animated = true;
        document.querySelectorAll('.modE-gesture-fill').forEach(function(el) {
          el.style.width = el.dataset.pct + '%';
        });
        obs.disconnect();
      }
    });
  }, { threshold: 0.2 });
  obs.observe(perfil);
})();

// ═══════════════════════════════════════════════════════════════
//  STORIES — "Qué dicen nuestros editores"
//  Visor tipo Instagram con carga perezosa de video (async),
//  pausa al mantener presionado y control de sonido/mute.
//  Rellena EDITORES con tus archivos: avatar (img) y video (mp4 vertical).
// ═══════════════════════════════════════════════════════════════
(function() {
  var EDITORES = [
    { handle: 'Hector Villalobos', categoria: 'Política',  avatar: './img/editores/politica.jpg',  video: './video/editores/politica.mp4'  },
    { handle: 'Maro Villalobos', categoria: 'Economía',  avatar: './img/editores/economia.jpg',  video: './video/editores/economia.mp4'  },
    { handle: 'Ariana Lira', categoria: 'ECData',    avatar: './img/editores/ecdata.jpg',    video: './video/editores/ecdata.mp4'    },
    { handle: 'Juan Pablo León', categoria: 'Nacional',  avatar: './img/editores/nacional.jpg',  video: './video/editores/nacional.mp4'  }
  ];
  var FALLBACK_SECS = 6;    // duración de la barra si el video no carga
  var HOLD_MS = 220;        // umbral para distinguir "tap" de "mantener presionado"

  var row = document.getElementById('stories-row');
  if (!row) return;

  // ── Círculos ────────────────────────────────────────────────
  EDITORES.forEach(function(e, i) {
    var btn = document.createElement('button');
    btn.className = 'story-item';
    btn.type = 'button';
    btn.setAttribute('aria-label', 'Ver historia de ' + e.categoria);
    var inicial = (e.categoria || '?').charAt(0).toUpperCase();
    btn.innerHTML =
      '<span class="story-ring"><span class="story-avatar">' +
        (e.avatar
          ? '<img src="' + e.avatar + '" alt="" loading="lazy" onerror="this.remove()">'
          : '') +
        '<span class="story-avatar-fallback">' + inicial + '</span>' +
      '</span></span>' +
      '<span class="story-caption"><span class="story-handle">' + e.handle +
      '</span>  <span class="story-cat">' + e.categoria + '</span></span>';
    btn.addEventListener('click', function() { open(i); });
    row.appendChild(btn);
  });

  // ── Visor (overlay) — se construye una sola vez ─────────────
  var viewer, videoEl, barsEl, headAv, headTxt, muteBtn;
  var current = -1, usingFallback = false, muted = false;
  var rafId = null, fbElapsed = 0, lastTs = 0, paused = false;
  var ICON_SOUND = '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>';
  var ICON_MUTE  = '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg>';

  function build() {
    viewer = document.createElement('div');
    viewer.className = 'stviewer';
    viewer.innerHTML =
      '<div class="stviewer-stage">' +
        '<div class="stviewer-bars"></div>' +
        '<div class="stviewer-head">' +
          '<span class="stviewer-head-av"></span>' +
          '<span class="stviewer-head-txt"></span>' +
        '</div>' +
        '<button class="stviewer-mute" aria-label="Silenciar">' + ICON_SOUND + '</button>' +
        '<button class="stviewer-close" aria-label="Cerrar">&times;</button>' +
        '<video class="stviewer-video" playsinline preload="none" webkit-playsinline></video>' +
        '<div class="stviewer-spinner"></div>' +
        '<button class="stviewer-nav prev" aria-label="Anterior"></button>' +
        '<button class="stviewer-nav next" aria-label="Siguiente"></button>' +
      '</div>';
    document.body.appendChild(viewer);
    videoEl = viewer.querySelector('.stviewer-video');
    barsEl  = viewer.querySelector('.stviewer-bars');
    headAv  = viewer.querySelector('.stviewer-head-av');
    headTxt = viewer.querySelector('.stviewer-head-txt');
    muteBtn = viewer.querySelector('.stviewer-mute');

    EDITORES.forEach(function() {
      var b = document.createElement('div');
      b.className = 'stviewer-bar';
      b.innerHTML = '<span></span>';
      barsEl.appendChild(b);
    });

    viewer.querySelector('.stviewer-close').addEventListener('click', close);
    viewer.addEventListener('click', function(e){ if (e.target === viewer) close(); });

    // Sonido / mute
    muteBtn.addEventListener('click', function(e){ e.stopPropagation(); setMuted(!muted); });

    // Navegación + mantener presionado para pausar
    wireHold(viewer.querySelector('.stviewer-nav.prev'), -1);
    wireHold(viewer.querySelector('.stviewer-nav.next'), +1);

    videoEl.addEventListener('waiting',  function(){ viewer.classList.add('loading'); });
    videoEl.addEventListener('playing',  function(){ viewer.classList.remove('loading'); });
    videoEl.addEventListener('loadeddata', function(){ viewer.classList.remove('loading'); });
    videoEl.addEventListener('ended',    function(){ go(current + 1); });
    videoEl.addEventListener('error',    startFallback);
  }

  // ── Tap vs mantener presionado ──────────────────────────────
  function wireHold(zone, dir) {
    var holdTimer = null, holding = false;
    function down(e) {
      e.preventDefault();
      holding = false;
      holdTimer = setTimeout(function(){ holding = true; pause(); }, HOLD_MS);
    }
    function up() {
      clearTimeout(holdTimer);
      if (holding) { holding = false; resume(); }
      else { go(current + dir); }   // tap corto = navegar
    }
    zone.addEventListener('pointerdown', down);
    zone.addEventListener('pointerup', up);
    zone.addEventListener('pointercancel', function(){ clearTimeout(holdTimer); if (holding){ holding=false; resume(); } });
    zone.addEventListener('pointerleave', function(){ if (holding){ holding=false; resume(); } clearTimeout(holdTimer); });
  }

  function pause() {
    paused = true;
    if (!usingFallback) videoEl.pause();
    viewer.classList.add('paused');
  }
  function resume() {
    paused = false;
    lastTs = 0;
    if (!usingFallback) { var p = videoEl.play(); if (p && p.catch) p.catch(function(){}); }
    viewer.classList.remove('paused');
  }

  // ── Sonido ──────────────────────────────────────────────────
  function setMuted(m) {
    muted = m;
    if (videoEl) videoEl.muted = m;
    if (muteBtn) {
      muteBtn.innerHTML = m ? ICON_MUTE : ICON_SOUND;
      muteBtn.setAttribute('aria-label', m ? 'Activar sonido' : 'Silenciar');
    }
  }

  // ── Carga perezosa ──────────────────────────────────────────
  function loadInto(video, url) {
    if (url && video.getAttribute('src') !== url) video.setAttribute('src', url);
  }
  var prefetchEl = null;
  function prefetchNext(i) {
    var n = EDITORES[i + 1];
    if (!n || !n.video) return;
    if (!prefetchEl) { prefetchEl = document.createElement('video'); prefetchEl.preload = 'auto'; }
    if (prefetchEl.getAttribute('src') !== n.video) prefetchEl.setAttribute('src', n.video);
  }

  function open(i) {
    if (!viewer) build();
    document.body.style.overflow = 'hidden';
    viewer.classList.add('open');
    document.addEventListener('keydown', onKey);
    go(i);
  }
  function close() {
    if (!viewer) return;
    stopProgress();
    videoEl.pause();
    videoEl.removeAttribute('src');
    videoEl.load();
    viewer.classList.remove('open', 'loading', 'paused');
    document.body.style.overflow = '';
    document.removeEventListener('keydown', onKey);
    current = -1;
  }

  function go(i) {
    if (i < 0) return;
    if (i >= EDITORES.length) { close(); return; }
    current = i;
    var e = EDITORES[i];

    var bars = barsEl.querySelectorAll('.stviewer-bar > span');
    bars.forEach(function(s, idx){ s.style.transition = 'none'; s.style.width = idx < i ? '100%' : '0%'; });

    headTxt.innerHTML = '<b>' + e.handle + '</b> <span>· ' + e.categoria + '</span>';
    headAv.innerHTML = e.avatar ? '<img src="' + e.avatar + '" alt="" onerror="this.remove()">' : '';

    stopProgress();
    usingFallback = false;
    paused = false;
    viewer.classList.remove('paused');
    viewer.classList.add('loading');
    videoEl.pause();

    if (e.video) {
      loadInto(videoEl, e.video);
      try { videoEl.currentTime = 0; } catch (_) {}
      videoEl.muted = muted;
      var p = videoEl.play();
      if (p && p.catch) p.catch(function(){
        // autoplay con sonido bloqueado → reintenta en silencio
        setMuted(true);
        var p2 = videoEl.play();
        if (p2 && p2.catch) p2.catch(function(){ startFallback(); });
      });
      startProgress();
    } else {
      startFallback();
    }
    prefetchNext(i);
  }

  // ── Progreso unificado (respeta la pausa) ───────────────────
  function activeBar() {
    return barsEl.querySelectorAll('.stviewer-bar > span')[current] || null;
  }
  function startProgress() {
    stopProgress();
    var el = activeBar(); if (!el) return;
    el.style.transition = 'none';
    lastTs = 0;
    function tick() {
      if (!paused && !usingFallback) {
        var d = videoEl.duration, t = videoEl.currentTime;
        if (d && isFinite(d) && d > 0) {
          viewer.classList.remove('loading');
          el.style.width = Math.min(100, (t / d) * 100) + '%';
        }
      }
      rafId = requestAnimationFrame(tick);
    }
    rafId = requestAnimationFrame(tick);
  }
  function startFallback() {
    if (usingFallback) return;
    usingFallback = true;
    viewer.classList.remove('loading');
    var el = activeBar(); if (!el) return;
    stopProgress();
    el.style.transition = 'none';
    fbElapsed = 0; lastTs = 0;
    function tick(ts) {
      if (!lastTs) lastTs = ts;
      if (!paused) fbElapsed += ts - lastTs;
      lastTs = ts;
      var pct = Math.min(100, (fbElapsed / (FALLBACK_SECS * 1000)) * 100);
      el.style.width = pct + '%';
      if (pct >= 100) { go(current + 1); return; }
      rafId = requestAnimationFrame(tick);
    }
    rafId = requestAnimationFrame(tick);
  }
  function stopProgress() {
    if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
  }

  function onKey(e) {
    if (e.key === 'Escape') close();
    else if (e.key === 'ArrowRight') go(current + 1);
    else if (e.key === 'ArrowLeft') go(current - 1);
    else if (e.key === 'm' || e.key === 'M') setMuted(!muted);
    else if (e.key === ' ') { e.preventDefault(); paused ? resume() : pause(); }
  }
})();


// ═══════════════════════════════════════════════════════════════
//  MÓDULO F — Fact-checking: filtros clicables + acordeones
// ═══════════════════════════════════════════════════════════════
(function() {
  var filtersBox = document.getElementById('modF-filters');
  var listBox    = document.getElementById('modF-acc-list');
  if (!filtersBox || !listBox) return;
  var FACTS = (window.FACTS && window.FACTS.length) ? window.FACTS : [];
  if (!FACTS.length) return;

  function escapeHtml(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  // Veredicto → color (clase) + etiqueta
  var META = {
    verdadero: { cls: 'verde',    label: 'Verdadero' },
    parcial:   { cls: 'amarillo', label: 'Parcial'   },
    exagerado: { cls: 'naranja',  label: 'Exagerado' },
    falso:     { cls: 'rojo',     label: 'Falso'     }
  };
  var ORDEN = ['verdadero', 'parcial', 'exagerado', 'falso'];

  // ── Filtros (con contadores calculados) ───────────────────
  var counts = { verdadero: 0, parcial: 0, exagerado: 0, falso: 0 };
  FACTS.forEach(function(f) {
    var v = (f.veredicto || '').toLowerCase();
    if (counts[v] != null) counts[v]++;
  });
  var activo = null;   // veredicto filtrado actualmente (o null = todos)

  ORDEN.forEach(function(v) {
    var m = META[v];
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'modF-filter ' + m.cls;
    btn.setAttribute('data-veredicto', v);
    btn.innerHTML =
      '<span class="modF-filter-count">' + counts[v] + '</span>' +
      '<span class="modF-filter-label">' + m.label + '</span>';
    btn.addEventListener('click', function() {
      activo = (activo === v) ? null : v;   // toggle
      aplicarFiltro();
    });
    filtersBox.appendChild(btn);
  });

  // ── Acordeones ────────────────────────────────────────────
  FACTS.forEach(function(f, i) {
    var v = (f.veredicto || '').toLowerCase();
    var m = META[v] || { cls: '', label: f.veredicto || '' };
    var item = document.createElement('div');
    item.className = 'modF-acc-item';
    item.setAttribute('data-veredicto', v);
    item.innerHTML =
      '<button class="modF-acc-head" type="button" aria-expanded="false">' +
        '<span class="modF-acc-headtext">' +
          '<span class="modF-acc-time">' + escapeHtml(f.tiempo || '') + '</span>' +
          '<span class="modF-acc-claim">' + escapeHtml(f.afirmacion || '') + '</span>' +
        '</span>' +
        '<span class="modF-badge ' + m.cls + '">' + escapeHtml(m.label) + '</span>' +
      '</button>' +
      '<div class="modF-acc-body"><div class="modF-acc-body-inner">' +
        '<p class="modF-acc-desc">' + escapeHtml(f.descripcion || '') + '</p>' +
      '</div></div>';
    var head = item.querySelector('.modF-acc-head');
    var body = item.querySelector('.modF-acc-body');
    head.addEventListener('click', function() { toggle(item, body, head); });
    listBox.appendChild(item);
  });

  function abrir(item, body, head) {
    item.classList.add('is-open');
    head.setAttribute('aria-expanded', 'true');
    body.style.maxHeight = body.scrollHeight + 'px';
  }
  function cerrar(item, body, head) {
    item.classList.remove('is-open');
    head.setAttribute('aria-expanded', 'false');
    body.style.maxHeight = '';
  }
  function toggle(item, body, head) {
    if (item.classList.contains('is-open')) { cerrar(item, body, head); return; }
    // Acordeón: cerrar los demás
    listBox.querySelectorAll('.modF-acc-item.is-open').forEach(function(otro) {
      cerrar(otro, otro.querySelector('.modF-acc-body'), otro.querySelector('.modF-acc-head'));
    });
    abrir(item, body, head);
  }

  function aplicarFiltro() {
    filtersBox.querySelectorAll('.modF-filter').forEach(function(btn) {
      var v = btn.getAttribute('data-veredicto');
      btn.classList.toggle('is-active', activo === v);
      btn.classList.toggle('is-dim', activo !== null && activo !== v);
    });
    listBox.querySelectorAll('.modF-acc-item').forEach(function(item) {
      var v = item.getAttribute('data-veredicto');
      var visible = (activo === null || activo === v);
      item.style.display = visible ? '' : 'none';
      if (!visible && item.classList.contains('is-open')) {
        cerrar(item, item.querySelector('.modF-acc-body'), item.querySelector('.modF-acc-head'));
      }
    });
  }

  // Abrir la primera afirmación por defecto
  var primero = listBox.querySelector('.modF-acc-item');
  if (primero) abrir(primero, primero.querySelector('.modF-acc-body'), primero.querySelector('.modF-acc-head'));

  // Recalcular alturas al redimensionar (por si cambia el ancho del texto)
  window.addEventListener('resize', function() {
    var open = listBox.querySelector('.modF-acc-item.is-open .modF-acc-body');
    if (open) open.style.maxHeight = open.scrollHeight + 'px';
  });
})();
