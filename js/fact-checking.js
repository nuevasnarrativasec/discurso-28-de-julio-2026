/* ═══════════════════════════════════════════════════════════════════
   FACT-CHECKING — CALIFICACIONES + AFIRMACIONES (CONTENIDO EDITABLE)
   ═══════════════════════════════════════════════════════════════════ */

/* ── 1) LAS 3 CALIFICACIONES ─────────────────────────────────────────
   Son los recuadros de color (que además funcionan como filtros).
   El contador de cada uno se calcula solo. Puedes editar 'label' y 'desc'.
   NO cambies 'id' ni 'color' salvo que sepas lo que haces:
     id     → valor que usarás en cada afirmación (campo 'veredicto').
     color  → verde | naranja | rojo (define el color del recuadro/badge).
     label  → texto grande en mayúsculas.
     desc   → texto descriptivo que va DEBAJO, dentro del recuadro.
──────────────────────────────────────────────────────────────────── */
window.FACT_CALIFICACIONES = [
  {
    id:    'verdadero',
    color: 'verde',
    label: 'Verdadero',
    desc:  'La afirmación está respaldada por datos oficiales.'
  },
  {
    id:    'enganoso',
    color: 'naranja',
    label: 'Engañoso',
    desc:  'Mezcla datos reales con omisiones o imprecisiones que distorsionan su significado.'
  },
  {
    id:    'falso',
    color: 'rojo',
    label: 'Falso',
    desc:  'Contradice información verificada.'
  }
];

/* ── 2) LAS AFIRMACIONES (acordeones) ───────────────────────────────
   Un objeto {} por afirmación. Campos:
     tiempo       Marca de tiempo. Ej: '18:30'
     afirmacion   La frase analizada (título del acordeón).
     veredicto    Debe ser uno de los 'id' de arriba:
                    'verdadero' | 'enganoso' | 'falso'
     descripcion  Texto que aparece al abrir el acordeón (el análisis).

   Reglas: no borres comas, llaves {} ni corchetes []. Apóstrofo → \'
──────────────────────────────────────────────────────────────────── */
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
    veredicto:   'enganoso',
    descripcion: 'Se iniciaron obras en 30 establecimientos de salud, pero solo una parte está operativa a la fecha; presentar la cifra como hospitales terminados distorsiona el avance real.'
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
    veredicto:   'enganoso',
    descripcion: 'Hubo una reducción de la pobreza, pero de menor magnitud; la cifra citada omite el margen de medición del INEI y sobreestima el avance.'
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
    veredicto:   'enganoso',
    descripcion: 'El programa tuvo cobertura nacional, pero la distribución fue muy desigual y algunas regiones recibieron un número marginal de beneficiarios.'
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
