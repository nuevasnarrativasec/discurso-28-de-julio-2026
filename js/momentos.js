/* ═══════════════════════════════════════════════════════════════════
   EL DISCURSO EN 5 MOMENTOS — CONTENIDO EDITABLE
   ───────────────────────────────────────────────────────────────────
   Este es el ÚNICO archivo que hay que tocar el día del discurso.
   Un objeto {} por momento, en orden. Edita solo el texto entre comillas.

   Campos de cada momento:
     tiempo       Badge amarillo de minutos. Formato: 'MM:SS — MM:SS'
     titulo       Título de la tarjeta de la derecha.
     descripcion  Texto de la tarjeta de la derecha.
     cita         Párrafo grande que se muestra a la izquierda.
     resaltar     Fragmento de la 'cita' que se pinta de amarillo.
                  ⚠ Debe estar escrito EXACTAMENTE igual que en la cita
                    (mismas tildes y mayúsculas). Si no coincide, no se
                    resalta pero el párrafo igual se ve. Déjalo en '' (vacío)
                    si no quieres resaltar nada.
     audio        Ruta al CLIP de audio propio de ese momento. Ej:
                    audio: 'audio/momento-1.mp3'
                  Coloca el archivo dentro de la carpeta /audio y pon aquí
                  su ruta. Al pulsar "Escuchar audio" aparece el reproductor
                  de ESE clip (no salta al audio del discurso completo).
                  Si lo dejas en '' todavía no hay clip; mientras tanto el
                  botón reproduce el audio general en el segundo 'inicio_seg'.
     inicio_seg   Segundo del audio GENERAL al que salta si 'audio' está vacío.

   Reglas:
     • No borres las comas, llaves {} ni corchetes [].
     • Si el texto lleva un apóstrofo (') escríbelo así: \'  (con la barra).
     • Deben ser 5 momentos.
   ═══════════════════════════════════════════════════════════════════ */

window.MOMENTOS = [

  // ── Momento 1 ──────────────────────────────────────────────────
  {
    tiempo:      '00:01 — 02:46',
    titulo:      'Apertura y balance del primer año',
    descripcion: 'El presidente abre el mensaje con el protocolo ante las autoridades del Estado y traza un balance del primer año de gobierno, reconociendo las dificultades heredadas y los logros alcanzados.',
    cita:        'Señora Presidenta del Congreso de la República, señoras y señores congresistas de la República, señores y señores ministros de Estado, señores miembros del Honorable Cuerpo Diplomático, dignas autoridades civiles, militares y religiosas, ilustres invitados, querido pueblo peruano. Hace 365 días, en…',
    resaltar:    'querido pueblo peruano',
    audio:       './audio/audio-test.mp3',
    inicio_seg:  1.3
  },

  // ── Momento 2 ──────────────────────────────────────────────────
  {
    tiempo:      '02:59 — 15:27',
    titulo:      'Defensa del mandato y principios constitucionales',
    descripcion: 'El discurso pasa a un tono más combativo: el presidente defiende la legitimidad de su mandato, rechaza acusaciones y reafirma el principio constitucional de igualdad ante la ley.',
    cita:        'No importa que quienes deberían también informar hayan ocultado e ignoren nuestros logros y se dedican a difamar y a mentir, y que tenemos que probar nuestra inocencia…',
    resaltar:    'probar nuestra inocencia',
    audio:       './audio/audio-test.mp3',
    inicio_seg:  179.3
  },

  // ── Momento 3 ──────────────────────────────────────────────────
  {
    tiempo:      '15:28 — 21:39',
    titulo:      'Crisis económica y medidas de austeridad',
    descripcion: 'La sección económica aborda el impacto de la pandemia y la inflación global en las familias peruanas. Se anuncian exoneraciones de IGV, subsidios y se rinde cuenta del manejo del Fondo de Estabilización Fiscal.',
    cita:        'Incluiremos a los trabajadores informales que bajo las condiciones actuales no pueden acceder a un sistema de pensiones. Aspiramos a que todos los peruanos puedan gozar de una pensión universal con primer piso de protección social.',
    resaltar:    'pensión universal',
    audio:       './audio/audio-test.mp3',
    inicio_seg:  928.6
  },

  // ── Momento 4 ──────────────────────────────────────────────────
  {
    tiempo:      '21:40 — 44:25',
    titulo:      'Salud, educación y protección social',
    descripcion: 'El bloque más extenso: avances en vacunación, reforma de programas sociales, metas en educación y logros en seguridad ciudadana. Se destacan las cifras de cobertura y los compromisos futuros.',
    cita:        'Estamos en la cuarta ola de la pandemia y se ha demostrado que la estrategia más efectiva para el control y prevención de esta enfermedad es la vacunación.',
    resaltar:    'la vacunación',
    audio:       './audio/audio-test.mp3',
    inicio_seg:  1300.9
  },

  // ── Momento 5 ──────────────────────────────────────────────────
  {
    tiempo:      '44:26 — 110:35',
    titulo:      'Regiones, infraestructura y cierre',
    descripcion: 'El tramo final recorre inversiones en infraestructura pesquera, hídrica y vial en todo el territorio. El discurso cierra con menciones a múltiples regiones y un llamado a la unidad nacional.',
    cita:        'A través del Servicio Nacional de Meteorología e Hidrología del Perú, que registra los centros poblados que podrían verse afectados, contamos con 29 estaciones de monitoreo distribuidas en las regiones de Piura, La Libertad, Áncash, Lima, Pasco, Junín y Arequipa.',
    resaltar:    '29 estaciones de monitoreo',
    audio:       './audio/audio-test.mp3',
    inicio_seg:  2666.4
  }

];
