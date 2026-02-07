import { Lesson } from '../types';

export const COUNSELING_LESSON: Lesson = {
  id: 'clase-4-motivacion',
  title: 'Consejería Cristiana - Clase 4',
  subtitle: 'Motivación: ¿Por qué hacemos lo que hacemos?',
  totalSlides: 13,
  slides: [
    {
      id: 'c4-s1-intro',
      type: 'intro',
      title: 'El Enigma de la Conducta',
      subtitle: '¿Por qué fallan nuestras resoluciones?',
      visual: {
        type: 'image',
        source: 'https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/b6e7e3db-ff72-4121-963e-6f6fd023e08c_rw_1920.jpg?h=1a86ffa880751a0d6e4f79d09c0449fb',
        position: 'background',
        effect: 'overlay-dark'
      },
      content: 'Muchas personas están confundidas acerca de su propia conducta. El apóstol Pablo expresó esta perplejidad en Romanos 7: hacemos precisamente lo que no queremos hacer.'
    },
    {
      id: 'c4-s2-puzzle',
      type: 'tabs-reveal',
      title: 'Patrones Desconcertantes',
      subtitle: 'Ejemplos de la lucha diaria',
      visual: { type: 'icon', source: 'Shuffle' },
      interaction: {
        type: 'side-reveal',
        revealItems: [
          {
            title: 'El Hombre Colérico',
            text: 'Promesas rotas en minutos.',
            icon: 'Flame',
            longContent: 'Un hombre intenta honestamente no perder el control, pero pronto está gritando a su esposa. Existe una "ley" en su personalidad que opera opuesta a sus intenciones conscientes.',
            image: 'https://cdn.shopify.com/s/files/1/0801/0612/7661/files/angry_man_1024x1024.jpg?v=1711197707'
          },
          {
            title: 'El Matrimonio Muerto',
            text: 'Del amor al silencio.',
            icon: 'HeartOff',
            longContent: 'Parejas que se juran amor sincera y años después yacen de espaldas en la cama, preguntándose en qué momento murió la relación a pesar de sus deseos iniciales.',
            image: 'https://s10.s3c.es/imag/_v0/770x420/7/0/a/Matrimonio-roto-tarta.jpg'
          },
          {
            title: 'La Madre Exasperada',
            text: 'Gritos tras el arrepentimiento.',
            icon: 'Megaphone',
            longContent: 'Una madre se promete no levantar la voz, pero ante la arrogancia de un adolescente o el desorden de un niño, rompe su promesa con un grito ensordecedor.',
            image: 'https://cdn.aarp.net/content/dam/aarpe/es/home/hogar-familia/familia-bienestar/info-2022/padre-madre-helicoptero/_jcr_content/root/container_main/container_body_main/container_body1/container_body_cf/container_image/articlecontentfragment/cfimage.coreimg.50.932.jpeg/content/dam/aarp/home-and-family/family-and-friends/2022/09/1140-teen-and-nagging-mom-esp.jpg'
          }
        ]
      }
    },
    {
      id: 'c4-s3-propositions',
      type: 'keynote-cards',
      title: '5 Proposiciones de la Motivación',
      subtitle: 'Leyes fundamentales de la conducta',
      visual: { type: 'icon', source: 'List' },
      interaction: {
        type: 'grid-cards',
        revealItems: [
          {
            title: 'PROPOSICIÓN 1',
            text: 'Estado de Necesidad',
            icon: 'Zap',
            longContent: 'La motivación depende típicamente de un estado de necesidad. Nos vemos impulsados a satisfacer aquello que sentimos que nos falta para funcionar.',
            image: 'https://psicologiaanagarciarey.com/wp-content/uploads/2021/07/motivacion-2.jpg'
          },
          {
            title: 'PROPOSICIÓN 2',
            text: 'Energía Mental',
            icon: 'BrainCircuit',
            longContent: 'La energía motivadora pasa por la mente. Allí toma dirección: hago lo que CREO en mi mente que cumplirá mi necesidad.',
            image: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=800'
          },
          {
            title: 'PROPOSICIÓN 3',
            text: 'Conducta Dirigida',
            icon: 'Target',
            longContent: 'Toda conducta va hacia una meta. Mi meta es aquello que mi mente ha identificado como el satisfactor de mi necesidad.',
            image: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&q=80&w=800'
          },
          {
            title: 'PROPOSICIÓN 4',
            text: 'Desequilibrio',
            icon: 'AlertTriangle',
            longContent: 'Cuando no se puede alcanzar la meta, se produce ansiedad. Si no logro lo que necesito para sentirme seguro, me siento inútil.',
            image: 'https://eepsicologia.com/wp-content/uploads/estabilidad-emocional.jpg'
          }
        ]
      }
    },
    {
      id: 'c4-s4-prop5',
      type: 'split-visual',
      title: 'Proposición 5: Todo está Motivado',
      subtitle: 'No hay conducta sin sentido',
      visual: {
        type: 'image',
        source: 'https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/070cd00b-4599-4a16-a4f7-7f63f805ae9f_rw_1920.jpg?h=c839a25c50638eb5539490cd43945e04',
        position: 'right'
      },
      content: 'Incluso la pereza o la indecisión tienen un motivo: protegerse de sentimientos de inutilidad.',
      bullets: [
        'Toda conducta tiene sentido, aunque sea pecaminosa o extraña.',
        'La clave: Saber qué necesidad la motivó.',
        'Las ideas erradas sobre qué satisface la necesidad crean metas falsas.',
        'La transformación requiere la renovación de la mente, no solo el cambio de conducta.'
      ]
    },
    {
      id: 'c4-s5-maslow',
      type: 'pyramid-reveal',
      title: 'Jerarquía de Necesidades según Maslow',
      subtitle: 'Análisis de la Estructura Humana',
      visual: { type: 'icon', source: 'Triangle' },
      interaction: {
        type: 'pyramid',
        revealItems: [
          { 
            title: 'AUTORREALIZACIÓN', 
            text: 'Nivel Superior: Madurez', 
            longContent: 'Expresión de las más altas cualidades de humanidad. En el cristianismo: adoración libre y servicio mediante dones espirituales.',
            icon: 'Crown', 
            color: '#1a1c23' 
          },
          { 
            title: 'PROPÓSITO', 
            text: 'Nivel 4: Significancia', 
            longContent: 'Necesidad de valor personal. Crabb sostiene que solo se satisface plenamente en la relación con Dios.',
            icon: 'Compass', 
            color: '#3b82f6' 
          },
          { 
            title: 'AMOR', 
            text: 'Nivel 3: Seguridad', 
            longContent: 'Sentirse amado y aceptado. Es la base relacional necesaria antes de buscar un propósito externo.',
            icon: 'Heart', 
            color: '#10b981' 
          },
          { 
            title: 'SEGURIDAD FÍSICA', 
            text: 'Nivel 2: Confianza Futura', 
            longContent: 'Confianza en que las necesidades físicas del mañana también estarán resueltas.',
            icon: 'Shield', 
            color: '#f59e0b' 
          },
          { 
            title: 'NECESIDADES FÍSICAS', 
            text: 'Nivel 1: Supervivencia', 
            longContent: 'Alimento, agua y techo. Deben ser satisfechas antes de que la persona busque los niveles superiores.', 
            icon: 'Apple', 
            color: '#ef4444' 
          }
        ]
      }
    },
    {
      id: 'c4-s6-logic',
      type: 'drag-drop',
      title: 'Déficit vs Expresión (Repaso)',
      subtitle: 'Clasificando motivaciones',
      visual: { type: 'icon', source: 'ArrowRight' },
      interaction: {
        type: 'drag-drop',
        dragItems: [
          { id: 'm1', label: 'Egocentrismo', categoryId: 'deficit' },
          { id: 'm2', label: 'Búsqueda de Amor', categoryId: 'deficit' },
          { id: 'm3', label: 'Servicio Abnegado', categoryId: 'expresion' },
          { id: 'm4', label: 'Adoración Libre', categoryId: 'expresion' },
          { id: 'm5', label: 'Tomar de Otros', categoryId: 'deficit' },
          { id: 'm6', label: 'Dar por Gracia', categoryId: 'expresion' }
        ],
        dragCategories: [
          { id: 'deficit', title: 'Motivación por Déficit' },
          { id: 'expresion', title: 'Motivación por Expresión' }
        ]
      }
    },
    {
      id: 'c4-s7-case-study',
      type: 'hotspot-reveal',
      title: 'El Ídolo del Dinero',
      subtitle: 'Raíces de la Ambición',
      visual: {
        type: 'image',
        source: 'https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?auto=format&fit=crop&q=80&w=1600',
        position: 'background'
      },
      interaction: {
        type: 'hotspots',
        revealItems: [
          {
            title: 'Creencia Errada',
            text: 'Dinero = Valor',
            longContent: 'La idea inconsciente de que mi significado depende de mi cuenta bancaria impulsa mi conducta pecaminosa.',
            icon: 'XCircle',
            x: 25,
            y: 40
          },
          {
            title: 'Meta Falsa',
            text: 'Fortuna Terrenal',
            longContent: 'No se puede renunciar a la meta sin rechazar primero la idea que la originó.',
            icon: 'Target',
            x: 75,
            y: 45
          },
          {
            title: 'Transformación',
            text: 'Cambio de Mente',
            longContent: 'Enfocar el esfuerzo en la renovación mental, no solo en reprimir la conducta externa.',
            icon: 'RefreshCw',
            x: 50,
            y: 65
          }
        ]
      }
    },
    {
      id: 'c4-s8-simulator',
      type: 'mirror-case-simulator',
      title: 'Laboratorio de Casos Espejo',
      subtitle: 'Diagnóstico de la Motivación',
      visual: { type: 'icon', source: 'Search' },
      mirrorCases: [
        {
          id: 'case-ira',
          title: 'Caso 1: El Ciclo de la Ira',
          icon: 'Flame',
          steps: [
            {
              id: 'ira-s1',
              context: 'Un hombre promete solemnemente no volver a explotar contra su esposa, pero a los pocos minutos está gritando de nuevo.',
              question: 'Según la Proposición 1, ¿cuál es la "necesidad" que probablemente está activada en este déficit?',
              options: [
                { id: 'a', text: 'Necesidad de control/seguridad personal', points: 2, feedback: '¡Correcto! La conducta agresiva suele ser un intento desesperado por recuperar un sentido de seguridad que se siente amenazado.', biblicalRefs: ['Fil 4:6-7', 'Ro 12:2'] },
                { id: 'b', text: 'Necesidad física insatisfecha', points: 0, feedback: 'Incorrecto. Aunque el cansancio influye, la raíz motivacional en este contexto es personal (seguridad/significancia).', biblicalRefs: ['Ro 12:2'] },
                { id: 'c', text: 'Autorrealización plena ya alcanzada', points: 0, feedback: 'Incorrecto. La autorrealización (Nivel 5) produce paz y mansedumbre, no explosiones de ira.', biblicalRefs: ['Ro 12:2'] }
              ]
            },
            {
              id: 'ira-s2',
              context: 'El hombre piensa internamente: "Si mi esposa no me respeta o no hace lo que digo, entonces no valgo nada como hombre".',
              question: 'Identifique la Creencia Errada (Proposición 2) en juego:',
              options: [
                { id: 'a', text: '“Mi valor depende de ser obedecido/respetado”', points: 2, feedback: '¡Exacto! Esta suposición errada es la que dirige la energía mental hacia la meta de controlar al otro.', biblicalRefs: ['Ro 12:2', 'Ro 8:38-39'] },
                { id: 'b', text: '“Dios me ama incondicionalmente en Cristo”', points: 0, feedback: 'Incorrecto. Esta es una verdad bíblica, pero no es la creencia que motiva la ira en este caso.', biblicalRefs: ['Ro 8:38-39'] },
                { id: 'c', text: '“Puedo aprender a ser más manso”', points: 1, feedback: 'Parcial. Es una intención correcta, pero no identifica la creencia raíz que está causando el desequilibrio.', biblicalRefs: ['Ro 12:2'] }
              ]
            },
            {
              id: 'ira-s3',
              context: 'Ante la percepción de falta de respeto, el hombre grita para imponer su voluntad de inmediato.',
              question: 'Según la Proposición 3, ¿cuál es la "meta" inmediata en esta conducta?',
              options: [
                { id: 'a', text: 'Lograr control/obediencia para calmar su inseguridad', points: 2, feedback: 'Correcto. La meta es el satisfactor que la mente ha identificado para suplir la necesidad de valor.', biblicalRefs: ['Mt 6:33-34', 'Ro 12:2'] },
                { id: 'b', text: 'Servir a su esposa aunque ella no cambie', points: 1, feedback: 'Parcial. Esta sería la meta de una motivación por expresión, pero no es lo que ocurre en este déficit.', biblicalRefs: ['Ef 2:10'] },
                { id: 'c', text: 'Ninguna, la explosión fue "sin motivo"', points: 0, feedback: 'Incorrecto. La Proposición 5 dice que TODA conducta tiene sentido y está motivada.', biblicalRefs: ['Ro 12:2'] }
              ]
            },
            {
              id: 'ira-s4',
              context: 'Para romper este ciclo, el hombre necesita pasar de la Motivación por Déficit a la de Expresión.',
              question: '¿Qué describe mejor una respuesta madura basada en la renovación de la mente?',
              options: [
                { id: 'a', text: 'Reconocer la necesidad, reorientar la identidad hacia Cristo y hablar con mansedumbre', points: 2, feedback: '¡Excelente! Esto implica rechazar la idea errada y actuar desde la plenitud que Dios ya proveyó.', biblicalRefs: ['Ro 12:2', 'Fil 4:6-7'] },
                { id: 'b', text: 'Callar siempre y evitar el conflicto para no gritar', points: 1, feedback: 'Parcial. Evitar la conducta externa no renueva la mente; la presión interna de inutilidad seguirá ahí.', biblicalRefs: ['Ro 12:2'] },
                { id: 'c', text: 'Justificar el enojo porque realmente le faltaron al respeto', points: 0, feedback: 'Incorrecto. Esto refuerza la creencia errada de que el valor depende del trato de los demás.', biblicalRefs: ['Ro 12:2'] }
              ]
            }
          ],
          summary: {
            need: 'Seguridad / Significancia personal',
            belief: 'Mi valor depende del respeto y obediencia de los demás.',
            goal: 'Controlar al prójimo para validar mi importancia.',
            conduct: 'Explosiones de ira y manipulación.',
            alternative: 'Descansar en la identidad dada por Dios (Motivación por Expresión).',
            biblicalSupport: 'Ro 12:2'
          }
        },
        {
          id: 'case-matrimonio',
          title: 'Caso 2: El Matrimonio Frío',
          icon: 'HeartOff',
          steps: [
            {
              id: 'mat-s1',
              context: 'Una pareja que se juró amor eterno ahora vive en un silencio resentido y distancia emocional.',
              question: '¿Qué necesidad fundamental (Maslow Nivel 3/4) suele estar detrás de esta retracción?',
              options: [
                { id: 'a', text: 'Seguridad emocional y Amor', points: 2, feedback: 'Correcto. El alejamiento suele ser una medida de protección cuando la necesidad de ser amado se siente frustrada.', biblicalRefs: ['Ro 8:38-39'] },
                { id: 'b', text: 'Solo necesidad física de espacio', points: 0, feedback: 'Incorrecto. La Proposición 4 sugiere que el desequilibrio surge de necesidades personales, no solo físicas.', biblicalRefs: ['Ro 8:38-39'] },
                { id: 'c', text: 'No hay necesidad, es simplemente mala suerte', points: 0, feedback: 'Incorrecto. Contradice la Proposición 5; la indiferencia es una conducta con un propósito protector.', biblicalRefs: ['Ro 12:2'] }
              ]
            },
            {
              id: 'mat-s2',
              context: 'Uno de ellos piensa: "Si mi cónyuge no me demuestra afecto como yo espero, mi seguridad está en peligro".',
              question: '¿Cuál es la Creencia Errada que impide la Motivación por Expresión?',
              options: [
                { id: 'a', text: '“Mi seguridad depende totalmente del desempeño del otro”', points: 2, feedback: '¡Exacto! Es una fuente de significación falsa que genera dependencia y ansiedad.', biblicalRefs: ['Fil 4:6-7', 'Ro 8:38-39'] },
                { id: 'b', text: '“Dios es quien suple mi necesidad de amor”', points: 0, feedback: 'Incorrecto. Esta es la verdad sanadora, no la creencia errada que causa el problema.', biblicalRefs: ['Ro 8:38-39'] },
                { id: 'c', text: '“Simplemente necesitamos mejores técnicas de comunicación”', points: 1, feedback: 'Parcial. Las técnicas ayudan, pero no resuelven el déficit motivacional profundo del corazón.', biblicalRefs: ['Ro 12:2'] }
              ]
            },
            {
              id: 'mat-s3',
              context: 'La persona decide distanciarse emocionalmente para "castigar" al otro o evitar ser lastimada de nuevo.',
              question: '¿Cuál es la meta principal de esta conducta de retiro?',
              options: [
                { id: 'a', text: 'Forzar un cambio en el otro para yo sentirme seguro/a', points: 2, feedback: 'Correcto. Es una estrategia de Proposición 4 para reducir el sentimiento de insignificancia.', biblicalRefs: ['Ef 2:10', 'Ro 12:2'] },
                { id: 'b', text: 'Amar abnegadamente aunque el otro no responda', points: 1, feedback: 'Parcial. Es el ideal bíblico, pero el distanciamiento es lo opuesto a esta meta.', biblicalRefs: ['Ef 2:10'] },
                { id: 'c', text: 'La conducta no tiene ninguna meta real', points: 0, feedback: 'Incorrecto. Toda conducta (incluyendo el silencio) busca satisfacer una necesidad o proteger el valor.', biblicalRefs: ['Ro 12:2'] }
              ]
            },
            {
              id: 'mat-s4',
              context: 'La transformación requiere renovar la mente para ver al cónyuge no como un "suplidor de valor", sino como alguien a quien servir.',
              question: '¿Cuál es el paso más maduro según la Motivación por Expresión?',
              options: [
                { id: 'a', text: 'Reafirmar seguridad en Dios y dar un paso concreto de amor responsable', points: 2, feedback: '¡Excelente! Al estar lleno en Dios (Nivel 5), puedes dar sin la "necesidad por déficit" de recibir.', biblicalRefs: ['Ro 12:2', 'Fil 4:6-7'] },
                { id: 'b', text: 'Retirarse para evitar más dolor hasta que el otro pida perdón', points: 1, feedback: 'Parcial. Puede ser un límite temporal, pero sin amor se convierte en una maniobra de defensa egoísta.', biblicalRefs: ['Ro 12:2'] },
                { id: 'c', text: 'Usar el sarcasmo para equilibrar la relación', points: 0, feedback: 'Incorrecto. Es una conducta pecaminosa motivada por el déficit de valor personal.', biblicalRefs: ['Ro 12:2'] }
              ]
            }
          ],
          summary: {
            need: 'Amor y Seguridad Incondicional',
            belief: 'Mi bienestar depende de que mi cónyuge me valide constantemente.',
            goal: 'Manipular o castigar para obtener afecto o protección.',
            conduct: 'Indiferencia, resentimiento y distancia emocional.',
            alternative: 'Amar desde la plenitud de Cristo, sin depender del retorno inmediato.',
            biblicalSupport: 'Ro 8:38-39'
          }
        },
        {
          id: 'case-culpa',
          title: 'Caso 3: La Lucha de la Culpa',
          icon: 'Lock',
          steps: [
            {
              id: 'culpa-s1',
              context: 'Un creyente lucha con pensamientos o hábitos recurrentes que le generan un profundo remordimiento posterior.',
              question: 'Más allá de lo físico, ¿qué necesidad personal suele buscar aliviar este tipo de conducta?',
              options: [
                { id: 'a', text: 'Alivio temporal de ansiedad, soledad o inseguridad', points: 2, feedback: 'Correcto. El hábito pecaminoso suele ser una "anestesia" para un dolor o vacío de valor más profundo.', biblicalRefs: ['Fil 4:6-7'] },
                { id: 'b', text: 'Necesidad de alimento y supervivencia física', points: 0, feedback: 'Incorrecto. No confunda necesidades biológicas con el uso de la conducta para suplir vacíos personales.', biblicalRefs: ['Fil 4:6-7'] },
                { id: 'c', text: 'Ninguna; es una conducta totalmente irracional', points: 0, feedback: 'Incorrecto. Según la Proposición 5, incluso el pecado tiene un "sentido" motivacional para quien lo comete.', biblicalRefs: ['Ro 12:2'] }
              ]
            },
            {
              id: 'culpa-s2',
              context: 'La persona se dice: "Como he fallado de nuevo, Dios me rechaza y no sirvo para nada".',
              question: '¿Qué Creencia Errada está reforzando el ciclo de derrota?',
              options: [
                { id: 'a', text: '“Mi valor y aceptación dependen de mi desempeño perfecto”', points: 2, feedback: '¡Exacto! Esta es una suposición mundana que ignora la gracia y genera más ansiedad (Prop. 4).', biblicalRefs: ['Ro 8:38-39', 'Ro 5:8'] },
                { id: 'b', text: '“Nada me puede separar del amor de Dios en Cristo”', points: 0, feedback: 'Incorrecto. Esta es la verdad bíblica que libera, no la creencia que atrapa en la culpa.', biblicalRefs: ['Ro 8:38-39'] },
                { id: 'c', text: '“Debo esconder mi lucha para que nadie sepa que soy débil”', points: 1, feedback: 'Parcial. Es una estrategia de protección, pero la raíz es la creencia sobre el origen del valor.', biblicalRefs: ['Ro 12:2'] }
              ]
            },
            {
              id: 'culpa-s3',
              context: 'La persona usa el hábito para "desconectarse" del estrés o la sensación de inutilidad.',
              question: 'Identifique la "meta" de esta conducta según el marco de Crabb:',
              options: [
                { id: 'a', text: 'Calmar el malestar interno de forma rápida y artificial', points: 2, feedback: 'Correcto. Es una meta de gratificación inmediata que intenta suplir un déficit de paz real.', biblicalRefs: ['Ro 12:2', 'Fil 4:6-7'] },
                { id: 'b', text: 'Adorar a Dios desde un corazón pleno y satisfecho', points: 1, feedback: 'Parcial. Es el objetivo final del creyente, pero no es la meta operativa en el momento de la caída.', biblicalRefs: ['Ro 12:2'] },
                { id: 'c', text: 'No hay ninguna meta, es puro impulso ciego', points: 0, feedback: 'Incorrecto. Todo impulso está dirigido hacia algo que la mente cree (erradamente) que satisfará una necesidad.', biblicalRefs: ['Ro 12:2'] }
              ]
            },
            {
              id: 'culpa-s4',
              context: 'El camino de salida no es el moralismo (esfuerzo propio), sino la renovación de la mente (Ro 12:2).',
              question: '¿Cuál es el primer paso realista para una Motivación por Expresión?',
              options: [
                { id: 'a', text: 'Identificar la necesidad, confesar, y reemplazar la creencia errada con la verdad de Dios', points: 2, feedback: '¡Brillante! El cambio real empieza cuando la mente deja de creer que el pecado satisface su necesidad de valor.', biblicalRefs: ['Ro 12:2', 'Ro 8:38-39'] },
                { id: 'b', text: 'Repetir frases religiosas rápidas para que el deseo se vaya', points: 0, feedback: 'Incorrecto. Crabb llama a esto "clichés evangélicos inútiles" que no renuevan la mente.', biblicalRefs: ['Ro 12:2'] },
                { id: 'c', text: 'Rendirse y asumir que el cambio es imposible para uno', points: 0, feedback: 'Incorrecto. Esto niega el poder de la renovación mental y la suficiencia de Cristo.', biblicalRefs: ['Ro 8:38-39'] }
              ]
            }
          ],
          summary: {
            need: 'Paz, Aceptación y Alivio del Dolor',
            belief: 'Solo valgo si soy perfecto; el pecado me da el alivio que Dios no me da.',
            goal: 'Anestesiar la ansiedad de insignificancia rápidamente.',
            conduct: 'Hábitos compulsivos y culpa paralizante.',
            alternative: 'Vivir desde la justificación por gracia y la paz que sobrepasa entendimiento.',
            biblicalSupport: 'Ro 5:8'
          }
        }
      ]
    },
    {
      id: 'c4-s9-verses',
      type: 'hermeneutics',
      title: 'La Base de la Fe',
      subtitle: 'Satisfechos en Dios',
      visual: {
        type: 'image',
        source: 'https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/70ae6ed5-329b-4618-9b9b-fa764f07f481_rw_1920.png?h=92e35c4ab1015963495c7ac487c7c61c',
        position: 'left'
      },
      content: 'Dios ha prometido suplir cada necesidad de la lista de Maslow.',
      interaction: {
        type: 'grid-cards',
        revealItems: [
          { title: 'Físicas', text: 'Mt 6:33 - Todas estas cosas serán añadidas.', icon: 'Sun' },
          { title: 'Seguridad', text: 'Ro 8:35 - Nada nos separará del amor de Cristo.', icon: 'Shield' },
          { title: 'Significado', text: 'Sal 103:4 - Rescata del hoyo tu vida.', icon: 'Star' },
          { title: 'Mañana', text: 'Flp 4:19 - Mi Dios suplirá todo lo que os falta.', icon: 'Calendar' }
        ]
      }
    },
    {
      id: 'c4-s10-logic-flow',
      type: 'timeline',
      title: 'El Límite del No Cristiano',
      subtitle: 'Condenados al Déficit',
      visual: { type: 'icon', source: 'Activity' },
      interaction: {
        type: 'side-reveal',
        revealItems: [
          {
            title: 'Búsqueda de Valor',
            text: 'Niveles 3 y 4',
            icon: 'AlertCircle',
            longContent: 'Sin Cristo, el hombre busca seguridad en personas y significancia en logros temporales.',
            image: 'https://www.peoplefirst.blog/wp-content/uploads/2017/11/personas_con_valores.jpg'
          },
          {
            title: 'Egocentrismo',
            text: 'Motivación por Déficit',
            icon: 'Lock',
            longContent: 'Está atrapado en tomar recursos para sí mismo porque sus necesidades fundamentales nunca se llenan.',
            image: 'https://lamenteesmaravillosa.com/wp-content/uploads/2013/10/egocentrismo-420x280.jpg?auto=format%2Ccompress&quality=75&width=3840&height=2160&fit=cover&gravity=center&sharp=true&progressive=true'
          }
        ]
      }
    },
    {
      id: 'c4-s11-psychosomatic',
      type: 'tabs-reveal',
      title: 'Mecanismos de Defensa',
      subtitle: 'Amortiguando el Fracaso',
      visual: { type: 'icon', source: 'ShieldAlert' },
      interaction: {
        type: 'side-reveal',
        revealItems: [
          {
            title: 'Síntomas',
            text: 'Función Psicológica',
            icon: 'Activity',
            longContent: 'Los mareos o dolores sirven para evitar admitir que se carece de valor: "Si no estuviera enfermo, sería exitoso".',
            image: 'https://medicinadeldolor.es/wp-content/uploads/2023/04/Dolor-de-cabeza-y-mareos-1024x512.jpeg'
          },
          {
            title: 'Suicidio',
            text: 'La Maniobra Final',
            icon: 'AlertTriangle',
            longContent: 'Cuando ya no se puede proteger el sentido de valía, el suicidio se vuelve una "alternativa racional" errada.',
            image: 'https://www.centroeleia.edu.mx/blog/wp-content/uploads/2019/11/slider_home_prevenir_suicidio.jpg'
          }
        ]
      }
    },
    {
      id: 'c4-s12-switch',
      type: 'internal-switch',
      title: 'EL INTERRUPTOR INTERNO',
      subtitle: 'Decisión Consciente y Compromiso',
      visual: { type: 'icon', source: 'Zap' },
      switchData: {
        situation: 'Cuando no me siento respetado o valorado por los demás...',
        trigger: 'Respeto / Valor',
        options: {
          deficit: {
            text: 'Actúo para llenar lo que siento que me falta.',
            feedback: 'Esta respuesta es comprensible, pero nace de una creencia no examinada. El déficit nunca se sacia; solo se gestiona momentáneamente.'
          },
          expression: {
            text: 'Actúo desde lo que ya he recibido en Dios.',
            feedback: 'Esta respuesta no nace de sentirte lleno, sino de creer que lo estás. La madurez cristiana comienza aquí.'
          }
        }
      }
    },
    {
      id: 'c4-s13-completion',
      type: 'completion',
      title: 'Clase 4 Concluida',
      subtitle: '¡Felicidades!',
      visual: {
        type: 'image',
        source: 'https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/b6e7e3db-ff72-4121-963e-6f6fd023e08c_rw_1920.jpg?h=1a86ffa880751a0d6e4f79d09c0449fb',
        position: 'background'
      },
      content: '“No siempre controlas lo que sientes, pero siempre puedes elegir qué creencia gobierna tu respuesta.”'
    }
  ]
};