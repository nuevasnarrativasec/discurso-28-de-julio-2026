/* ═══════════════════════════════════════════════════════════════════
   FACT-CHECKING — AFIRMACIONES VERIFICADAS (CONTENIDO EDITABLE)
   ───────────────────────────────────────────────────────────────────
   Un objeto {} por afirmación. Los contadores de los filtros
   (VERDADERO / PARCIAL / EXAGERADO / FALSO) se calculan solos según
   cuántas afirmaciones haya de cada tipo. No hay que tocar números.

   Campos de cada afirmación:
     tiempo       Marca de tiempo que se muestra arriba. Ej: '18:30'
     afirmacion   La frase analizada (título del acordeón).
     veredicto    Uno de: 'verdadero' | 'parcial' | 'exagerado' | 'falso'
                  (en minúsculas, sin tildes). Define el color y el filtro.
     descripcion  Texto que aparece al abrir el acordeón (el análisis).

   Reglas:
     • No borres comas, llaves {} ni corchetes [].
     • Si el texto lleva un apóstrofo (') escríbelo así: \'
   ═══════════════════════════════════════════════════════════════════ */

window.FACTS = [

  {
    tiempo:      '18:30',
    afirmacion:  'El PBI creció 4.5% en el último año',
    veredicto:   'verdadero',
    descripcion: 'Las cifras del Banco Central de Reserva confirman un crecimiento del Producto Bruto Interno en el rango señalado. El dato es consistente con los reportes trimestrales oficiales.'
  },
  {
    tiempo:      '29:15',
    afirmacion:  'Se han construido 30 hospitales en los últimos dos años',
    veredicto:   'parcial',
    descripcion: 'Se iniciaron obras en 30 establecimientos de salud, pero solo una parte está operativa a la fecha; el resto se encuentra en construcción o equipamiento.'
  },
  {
    tiempo:      '22:45',
    afirmacion:  'La inversión extranjera aumentó en un 35%',
    veredicto:   'falso',
    descripcion: 'Las estadísticas de ProInversión no respaldan esa magnitud. La variación real del período es considerablemente menor a la afirmada.'
  },
  {
    tiempo:      '56:20',
    afirmacion:  'El índice de pobreza se redujo en 5 puntos porcentuales',
    veredicto:   'exagerado',
    descripcion: 'Hubo una reducción de la pobreza, pero de menor magnitud que la mencionada. La cifra citada sobreestima el avance reportado por el INEI.'
  },
  {
    tiempo:      '11:40',
    afirmacion:  'El empleo formal aumentó 6.9% interanual a mayo',
    veredicto:   'verdadero',
    descripcion: 'El dato coincide con los registros de planilla electrónica del Ministerio de Trabajo para el período indicado.'
  },
  {
    tiempo:      '48:05',
    afirmacion:  'Se entregaron becas a jóvenes en todas las regiones',
    veredicto:   'parcial',
    descripcion: 'El programa de becas tuvo cobertura nacional, pero la distribución fue desigual y algunas regiones recibieron un número marginal de beneficiarios.'
  },
  {
    tiempo:      '1:02:10',
    afirmacion:  'La producción agrícola alcanzó un récord histórico',
    veredicto:   'verdadero',
    descripcion: 'Los volúmenes reportados por el Ministerio de Desarrollo Agrario superan los máximos registrados en campañas anteriores.'
  },
  {
    tiempo:      '39:50',
    afirmacion:  'La deuda pública se mantuvo estable respecto al PBI',
    veredicto:   'falso',
    descripcion: 'Los indicadores del Marco Macroeconómico Multianual muestran un incremento del ratio deuda/PBI en el período, contrario a lo afirmado.'
  }

];
