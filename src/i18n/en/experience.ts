interface ExperienceEn {
  readonly title: string;
  readonly meta: string;
  readonly bullets: string[];
}

export const EXPERIENCE_EN: Record<string, ExperienceEn> = {
  encora: {
    title: 'Software Engineer II',
    meta: 'Encora / Coforge, Lima, Peru — Client: Pacífico Seguros',
    bullets: [
      'AI-First development: GitHub Copilot and spec-driven flows with OpenSpec to speed up code generation and feature specification.',
      'API design with an API-First approach, defining decoupled contracts between domains.',
      'Evolution of reactive microservices with Spring Boot on Azure.',
      'Trunk-Based Development (TBD) with feature flags for continuous integration and progressive deployments.',
      'Data integration and orchestration with Azure Logic Apps and Azure Data Factory (ADF).',
      'Observability and monitoring with Azure API Management, Dynatrace and Grafana.',
    ],
  },
  jne: {
    title: 'Full Stack Developer .Net / Angular',
    meta: 'JNE, Lima, Peru',
    bullets: [
      'RESTful API development with .NET Framework, exposing services consumed by Angular modules with a component-based architecture.',
      'Oracle database modeling and administration: schema design, stored procedures and packages encapsulating complex business logic.',
      'Built Angular views and user flows, integrating HTTP services and reactive state handling with RxJS.',
      'Implemented data access layers calling Oracle procedures, ensuring traceability and separation of concerns.',
      'Collaboration in agile cycles, reviewing functional requirements and continuously delivering modules to the team.',
    ],
  },
  inetum: {
    title: 'Java Backend Cloud',
    meta: 'Inetum Perú S.A.C., Lima, Peru — Client: Pacífico Seguros',
    bullets: [
      'Development and maintenance of microservices with Spring Boot (Java 17) on Azure.',
      'Integration with Azure Queues and Azure Data Factory (ADF).',
      'Implementation of APIs with an API-First approach.',
      'Monitoring and metrics analysis with Dynatrace and Grafana.',
    ],
  },
  devstream: {
    title: 'Full Stack Developer Java – Angular JS',
    meta: 'Devstream, Lima, Peru — Client: Redeban Colombia',
    bullets: [
      'Reactive microservices with Spring Boot (Java 17) and an Angular frontend, focused on scalability and performance.',
      'Quality strategy with unit and integration tests (JUnit, Mockito, Jasmine, Karma).',
      'Integration with the AWS ecosystem (Cognito, SES, SNS) for authentication and distributed messaging.',
      'Deployment management and observability on AWS with CloudWatch.',
    ],
  },
  mdp: {
    title: 'FullStack Developer Java – Angular JS – React – RPA',
    meta: 'MDP Consulting, Lima, Peru — Clients: Banco Redeban Colombia, Pacífico Seguros',
    bullets: [
      'Microservices with Spring Boot (Java 17) and reactive programming.',
      'Frontend with Angular (Redeban) and React (Pacífico).',
      'CI/CD with Azure DevOps Pipelines.',
      'Process automation with UiPath: queue handling and exception control.',
    ],
  },
  pidia: {
    title: 'FullStack Developer PHP – Angular JS',
    meta: 'PIDIA S.R.L., Piura, Peru — Client: Various systems',
    bullets: [
      'Backend with Symfony (PHP) using a modular architecture and best practices.',
      'Frontend with AngularJS focused on user experience.',
      'MySQL database design and modeling, optimizing queries and performance.',
      'Centralized error handling and automatic notifications via Telegram.',
    ],
  },
  bootcamp: {
    title: 'Training Bootcamp MDP',
    meta: 'MDP Consulting, Lima, Peru',
    bullets: [
      'Intensive program on clean architecture, SOLID principles and development best practices.',
      'Training in backend with Java and frontend with Angular and React.',
      'Unit testing and version control in agile environments.',
      'Hands-on projects applying functional and reactive programming.',
    ],
  },
  'pidia-practicante': {
    title: 'Pre-professional Intern FullStack Developer PHP – Angular JS',
    meta: 'PIDIA S.R.L., Piura, Peru — Client: Various systems',
    bullets: [
      'Backend and frontend feature development using Symfony (PHP).',
      'Maintenance and improvement of existing system modules.',
      'Implementation of MySQL queries and structures.',
      'Support in testing, feature validation and incident fixing.',
    ],
  },
};

export const REFERENCES_EN: Record<string, { position: string; relationship: string }> = {
  'ref-pidia': { position: 'Head of Development', relationship: 'Direct manager' },
  'ref-mdp': { position: 'Project Delivery Manager', relationship: 'Direct manager' },
};
