/**
 * Datos de las propuestas para la candidatura a representante
 * de la tecnología en desarrollo de software.
 */
const proposals = [
  {
    id: 1,
    title: "Canal directo de comunicación con estudiantes",
    problem: "Muchos estudiantes no cuentan con un medio claro para expresar inquietudes o sugerencias relacionadas con el programa.",
    objective: "Establecer un mecanismo de comunicación permanente entre los estudiantes y la representación estudiantil.",
    actions: "Implementar un canal digital donde los estudiantes puedan reportar problemáticas académicas, sugerencias o propuestas que posteriormente puedan ser gestionadas ante la coordinación del programa.",
    expectedResult: "Mayor participación estudiantil y una gestión más efectiva de las necesidades del programa."
  },
  {
    id: 2,
    title: "Encuesta semestral del programa",
    problem: "La percepción de los estudiantes sobre las materias y metodologías no siempre se recopila de forma sistemática.",
    objective: "Recopilar información que permita identificar oportunidades de mejora en el programa.",
    actions: "Diseñar y aplicar encuestas semestrales que recojan la opinión de los estudiantes sobre asignaturas, carga académica, metodologías y recursos educativos.",
    expectedResult: "Información clara que permita presentar propuestas de mejora ante la coordinación académica."
  },
  {
    id: 3,
    title: "Repositorio académico colaborativo",
    problem: "El material académico suele quedar limitado a cada semestre y no siempre se comparte entre estudiantes.",
    objective: "Facilitar el acceso a recursos académicos que apoyen el aprendizaje.",
    actions: "Promover la creación de un repositorio digital donde los estudiantes puedan compartir apuntes, ejercicios, proyectos y recursos de aprendizaje relacionados con el programa.",
    expectedResult: "Mayor apoyo académico entre estudiantes y fortalecimiento del aprendizaje colaborativo."
  },
  {
    id: 4,
    title: "Talleres de herramientas tecnológicas",
    problem: "Algunas herramientas utilizadas en el sector tecnológico no se abordan en profundidad dentro del plan académico.",
    objective: "Complementar la formación académica con conocimientos prácticos relevantes para la industria.",
    actions: "Gestionar talleres o charlas sobre tecnologías actuales y herramientas de desarrollo utilizadas en el ámbito profesional.",
    expectedResult: "Estudiantes con mayor preparación técnica y mejor adaptación a las exigencias del mercado laboral."
  },
  {
    id: 5,
    title: "Preparación para prácticas y empleo",
    problem: "Muchos estudiantes enfrentan dificultades al momento de postularse a prácticas o empleos en el sector tecnológico.",
    objective: "Fortalecer la preparación profesional de los estudiantes del programa.",
    actions: "Promover espacios de orientación sobre creación de portafolios, elaboración de hojas de vida y preparación para entrevistas técnicas.",
    expectedResult: "Estudiantes con mayores posibilidades de inserción laboral."
  },
  {
    id: 6,
    title: "Charlas con egresados del programa",
    problem: "Existe poca interacción entre estudiantes actuales y egresados del programa.",
    objective: "Acercar a los estudiantes a experiencias reales del ámbito laboral.",
    actions: "Organizar encuentros o charlas donde egresados compartan su experiencia profesional y recomendaciones para el desarrollo de carrera.",
    expectedResult: "Mayor orientación profesional para los estudiantes."
  },
  {
    id: 7,
    title: "Eventos de programación y retos tecnológicos",
    problem: "Los espacios prácticos para aplicar conocimientos fuera del aula son limitados.",
    objective: "Fomentar la práctica de habilidades técnicas y el trabajo colaborativo.",
    actions: "Promover la realización de retos de programación, hackathons o actividades similares dentro del programa.",
    expectedResult: "Mayor desarrollo de habilidades técnicas y fortalecimiento del trabajo en equipo."
  },
  {
    id: 8,
    title: "Feria de proyectos estudiantiles",
    problem: "Muchos proyectos académicos no tienen visibilidad dentro del programa.",
    objective: "Reconocer y difundir el trabajo realizado por los estudiantes.",
    actions: "Organizar una feria donde los estudiantes puedan presentar sus proyectos académicos o personales relacionados con el desarrollo de software.",
    expectedResult: "Mayor motivación estudiantil y visibilización del talento del programa."
  },
  {
    id: 9,
    title: "Mejora en el acceso a recursos tecnológicos",
    problem: "Algunos estudiantes enfrentan limitaciones en el acceso a herramientas tecnológicas necesarias para su formación.",
    objective: "Mejorar las condiciones de aprendizaje dentro del programa.",
    actions: "Gestionar ante la institución mejoras relacionadas con laboratorios, software académico y recursos tecnológicos disponibles para los estudiantes.",
    expectedResult: "Mejores condiciones para el desarrollo de actividades académicas."
  },
  {
    id: 10,
    title: "Comunidad estudiantil del programa",
    problem: "La interacción entre estudiantes de diferentes semestres es limitada.",
    objective: "Fortalecer la colaboración y el sentido de comunidad dentro del programa.",
    actions: "Promover espacios de interacción donde los estudiantes puedan compartir conocimientos, experiencias y oportunidades académicas o laborales.",
    expectedResult: "Mayor integración entre estudiantes del programa."
  },
  {
    id: 11,
    title: "Espacios de diálogo con docentes",
    problem: "Las inquietudes académicas de los estudiantes no siempre se discuten de manera colectiva.",
    objective: "Mejorar la comunicación entre estudiantes y docentes.",
    actions: "Promover reuniones periódicas donde los estudiantes puedan expresar inquietudes o propuestas relacionadas con las materias o metodologías de enseñanza.",
    expectedResult: "Mejor comprensión mutua entre estudiantes y docentes."
  },
  {
    id: 12,
    title: "Difusión de oportunidades tecnológicas",
    problem: "Muchos estudiantes desconocen oportunidades académicas o profesionales disponibles en el sector tecnológico.",
    objective: "Mantener informada a la comunidad estudiantil sobre oportunidades relevantes.",
    actions: "Compartir información sobre eventos tecnológicos, becas, concursos, cursos y oportunidades relacionadas con el desarrollo de software.",
    expectedResult: "Mayor participación de estudiantes en actividades externas al programa."
  },
  {
    id: 13,
    title: "Grupos de apoyo académico",
    problem: "Algunas asignaturas presentan altos niveles de dificultad para los estudiantes.",
    objective: "Promover el apoyo académico entre compañeros.",
    actions: "Fomentar la creación de grupos de estudio donde estudiantes de semestres avanzados puedan apoyar a quienes cursan materias complejas.",
    expectedResult: "Mejor desempeño académico y fortalecimiento de la colaboración entre estudiantes."
  },
  {
    id: 14,
    title: "Seguimiento a compromisos del programa",
    problem: "En ocasiones los estudiantes desconocen los avances o gestiones realizadas por la representación estudiantil.",
    objective: "Garantizar transparencia en el ejercicio de la representación.",
    actions: "Publicar informes periódicos donde se comuniquen las gestiones realizadas, avances obtenidos y asuntos pendientes.",
    expectedResult: "Mayor confianza de los estudiantes en la representación."
  },
  {
    id: 15,
    title: "Fortalecimiento de la identidad del programa",
    problem: "El sentido de pertenencia hacia el programa puede ser limitado entre algunos estudiantes.",
    objective: "Promover la integración y la identidad académica del programa.",
    actions: "Impulsar actividades académicas y de integración que fomenten la participación y el orgullo de pertenecer al programa.",
    expectedResult: "Mayor compromiso de los estudiantes con el desarrollo del programa."
  },
  {
    id: 16,
    title: "Mayor participación y visibilidad de la jornada especial o nocturna",
    problem: "En ocasiones la administración y el programa no tienen suficientemente en cuenta a los estudiantes de la jornada especial o nocturna, lo que limita su participación y el reconocimiento de sus necesidades.",
    objective: "Lograr que la administración tenga más en cuenta a los estudiantes de la jornada especial o nocturna y promover su mayor participación en las decisiones y actividades del programa.",
    actions: "Gestionar ante la coordinación y la administración que las actividades, comunicaciones y espacios de participación contemplen de forma explícita a la jornada especial o nocturna; promover canales y horarios que faciliten su involucramiento y visibilizar sus necesidades en los espacios de representación estudiantil.",
    expectedResult: "Mayor participación de los estudiantes de jornada especial o nocturna y que la administración los tenga más en cuenta en las decisiones y oferta del programa."
  },
  {
    id: 17,
    title: "Conexión con comunidades de desarrollo de software y tecnología en la región",
    problem: "Los estudiantes del programa tienen poco contacto con las comunidades, grupos y colectivos de la región que se enfocan en el desarrollo de software y la tecnología.",
    objective: "Vincular a los estudiantes con las comunidades locales de tecnología y desarrollo de software para ampliar su red, aprendizaje y oportunidades.",
    actions: "Identificar y difundir comunidades, meetups, grupos de usuarios y espacios de la región enfocados en desarrollo de software y tecnología; promover la participación de los estudiantes en estos espacios y gestionar alianzas o actividades conjuntas entre el programa y dichas comunidades.",
    expectedResult: "Estudiantes más conectados con el ecosistema tecnológico regional y mayor intercambio entre el programa y las comunidades de la región."
  }
];
