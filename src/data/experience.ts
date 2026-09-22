export type Modality = 'remoto' | 'hibrido' | 'presencial';

export interface ExperienceItem {
  readonly id: string;
  readonly active: boolean;
  readonly date: string;
  readonly title: string;
  readonly meta: string;
  readonly modality: Modality;
  readonly bullets: string[];
  readonly chips: string[];
  readonly certificate: string | null;
}

export interface Reference {
  readonly id: string;
  readonly name: string;
  readonly position: string;
  readonly company: string;
  readonly relationship: string;
  readonly phone: string | null;
  readonly linkedin: string | null;
  readonly email: string | null;
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 'encora',
    active: true,
    date: '2025.08 → actual',
    title: 'Software Engineer II',
    meta: 'Encora / Coforge, Lima, Perú — Cliente: Pacífico Seguros',
    modality: 'remoto',
    bullets: [
      'Desarrollo AI-First: uso de GitHub Copilot y flujos spec-driven con OpenSpec para acelerar la generación de código y la especificación de features.',
      'Diseño de APIs bajo enfoque API‑First, definiendo contratos desacoplados entre dominios.',
      'Evolución de microservicios reactivos con Spring Boot en Azure.',
      'Trunk-Based Development (TBD) con feature flags para integración continua y despliegues progresivos.',
      'Integración y orquestación de datos con Azure Logic Apps y Azure Data Factory (ADF).',
      'Observabilidad y monitoreo con Azure API Management, Dynatrace y Grafana.',
    ],
    chips: ['Spring Boot', 'Azure', 'GitHub Copilot', 'OpenSpec', 'API-First', 'TBD', 'Feature Flags', 'Logic Apps', 'ADF'],
    certificate: null,
  },
  {
    id: 'jne',
    active: false,
    date: '2025.11 → 2026.08',
    title: 'Full Stack Developer .Net / Angular',
    meta: 'JNE, Lima, Perú',
    modality: 'remoto',
    bullets: [
      'Desarrollo de APIs RESTful con .NET Framework, exponiendo servicios consumidos por módulos Angular con arquitectura por componentes.',
      'Modelado y administración de base de datos Oracle: diseño de esquemas, stored procedures y packages para encapsular lógica de negocio compleja.',
      'Construcción de vistas y flujos de usuario en Angular, integrando servicios HTTP y manejo reactivo de estado con RxJS.',
      'Implementación de capas de acceso a datos con llamadas a procedures Oracle, garantizando trazabilidad y separación de responsabilidades.',
      'Colaboración en ciclos ágiles, participando en revisión de requerimientos funcionales y entrega continua de módulos al equipo.',
    ],
    chips: ['.NET Framework', 'Angular', 'Oracle', 'RxJS', 'REST APIs'],
    certificate: null,
  },
  {
    id: 'inetum',
    active: false,
    date: '2023.10 → 2025.07',
    title: 'Java Backend Cloud',
    meta: 'Inetum Perú S.A.C., Lima, Perú — Cliente: Pacífico Seguros',
    modality: 'remoto',
    bullets: [
      'Desarrollo y mantenimiento de microservicios con Spring Boot (Java 17) en Azure.',
      'Integración con Azure Queues y Azure Data Factory (ADF).',
      'Implementación de APIs bajo enfoque API‑First.',
      'Monitoreo y análisis de métricas mediante Dynatrace y Grafana.',
    ],
    chips: ['Java 17', 'Spring Boot', 'Azure', 'ADF', 'Dynatrace'],
    certificate: '/docs/experience/inetum-certificado.pdf',
  },
  {
    id: 'devstream',
    active: false,
    date: '2023.10 → 2024.05',
    title: 'Full Stack Developer Java – Angular JS',
    meta: 'Devstream, Lima, Perú — Cliente: Redeban Colombia',
    modality: 'remoto',
    bullets: [
      'Microservicios reactivos con Spring Boot (Java 17) y frontend en Angular, orientados a escalabilidad y rendimiento.',
      'Estrategia de calidad con pruebas unitarias y de integración (JUnit, Mockito, Jasmine, Karma).',
      'Integración con ecosistema AWS (Cognito, SES, SNS) para autenticación y mensajería distribuida.',
      'Gestión de despliegues y observabilidad en AWS con CloudWatch.',
    ],
    chips: ['Spring Boot', 'Angular', 'AWS', 'JUnit', 'CloudWatch'],
    certificate: null,
  },
  {
    id: 'mdp',
    active: false,
    date: '2022.07 → 2023.09',
    title: 'FullStack Developer Java – Angular JS – React – RPA',
    meta: 'MDP Consulting, Lima, Perú — Cliente: Banco Redeban Colombia, Pacífico Seguros',
    modality: 'remoto',
    bullets: [
      'Microservicios con Spring Boot (Java 17) y programación reactiva.',
      'Frontend con Angular (Redeban) y React (Pacífico).',
      'CI/CD mediante Azure DevOps Pipelines.',
      'Automatización de procesos con UiPath: manejo de colas y control de excepciones.',
    ],
    chips: ['Spring Boot', 'Angular', 'React', 'Azure DevOps', 'UiPath'],
    certificate: '/docs/experience/mdp-certificado.pdf',
  },
  {
    id: 'pidia',
    active: false,
    date: '2022.05 → 2023.10',
    title: 'FullStack Developer PHP – Angular JS',
    meta: 'PIDIA S.R.L., Piura, Perú — Cliente: Sistemas Varios',
    modality: 'remoto',
    bullets: [
      'Backend con Symfony (PHP) bajo arquitectura modular y buenas prácticas.',
      'Frontend con AngularJS orientado a experiencia de usuario.',
      'Diseño y modelado de bases de datos en MySQL, optimizando consultas y rendimiento.',
      'Manejo centralizado de errores y notificaciones automáticas vía Telegram.',
    ],
    chips: ['Symfony', 'AngularJS', 'MySQL', 'Telegram API'],
    certificate: '/docs/experience/pidia-certificado.pdf',
  },
  {
    id: 'bootcamp',
    active: false,
    date: '2022.04 → 2022.06',
    title: 'Training Bootcamp MDP',
    meta: 'MDP Consulting, Lima, Perú',
    modality: 'remoto',
    bullets: [
      'Programa intensivo en arquitectura limpia, principios SOLID y buenas prácticas de desarrollo.',
      'Formación en backend con Java y frontend con Angular y React.',
      'Pruebas unitarias y control de versiones en entornos ágiles.',
      'Proyectos prácticos aplicando programación funcional y reactiva.',
    ],
    chips: ['SOLID', 'Java', 'Angular', 'React'],
    certificate: '/docs/experience/mdp-bootcamp.pdf',
  },
  {
    id: 'pidia-practicante',
    active: false,
    date: '2022.02 → 2022.05',
    title: 'Practicante Preprofesional FullStack Developer PHP – Angular JS',
    meta: 'PIDIA S.R.L., Piura, Perú — Cliente: Sistemas Varios',
    modality: 'remoto',
    bullets: [
      'Desarrollo de funcionalidades backend y frontend utilizando Symfony (PHP).',
      'Mantenimiento y mejora de módulos existentes del sistema.',
      'Implementación de consultas y estructuras en MySQL.',
      'Soporte en pruebas, validación de funcionalidades y corrección de incidencias.',
    ],
    chips: ['Symfony', 'MySQL'],
    certificate: '/docs/experience/pidia-practicaspre.pdf',
  },
];

export const REFERENCES: Reference[] = [
  {
    id: 'ref-pidia',
    name: 'Carlos Chininin',
    position: 'Jefe de desarrollo',
    company: 'PIDIA S.R.L.',
    relationship: 'Jefe directo',
    phone: '+51 938 170 744',
    email: null,
    linkedin: 'https://www.linkedin.com/in/carloschininin/',
  },
  {
    id: 'ref-mdp',
    name: 'Renée Maldonado',
    position: 'Project Delivery Manager',
    company: 'MDP Consulting',
    relationship: 'Jefe directo',
    phone: '+51 966 713 882',
    email: null,
    linkedin: 'https://www.linkedin.com/in/renee-del-pilar-maldonado-farfan/',
  },
];
