interface ProjectEn {
  readonly badge?: string;
  readonly title: string;
  readonly role?: string;
  readonly releases?: string;
  readonly description: string;
  readonly bullets: string[];
  readonly linkLabel: string;
  readonly releaseHistory?: string[];
}

export const PROJECTS_META_EN = {
  eyebrow: '// featured-projects',
  heading: 'Projects and contributions',
  description: 'Projects I took part in as a developer. Click a card to see the details.',
  contribLabel: '// my contribution',
};

export const PROJECTS_EN: Record<string, ProjectEn> = {
  'proyecto-stom': {
    title: 'STOM hours reconciliation system',
    role: 'Backend Developer',
    releases: '4 releases',
    description:
      'Internal platform for managing hours, vendors and access for technology teams, built over 6 evolutionary releases.',
    bullets: [
      'Built Spring Boot microservices for the billing, vendor and hours domains.',
      'Integrated asynchronous flows with Azure Queues and Logic Apps for automated processes.',
      'Contributed to the ADF data pipeline feeding Power BI reporting.',
      'Implemented Jira and Port connectors for entity synchronization.',
    ],
    linkLabel: 'View releases',
    releaseHistory: [
      'Billing management',
      'Vendor, absence and overtime management',
      'Power BI reporting',
      'Jira and Port integrations',
    ],
  },
  'proyecto-jne-capacitaciones': {
    title: 'Training Management System',
    description:
      'System to create and track training activities, with participant registration, evidence uploads and per-activity traceability.',
    bullets: [
      'Built RESTful APIs with .NET to manage activities and their training records.',
      'Implemented the business logic for participant registration and evidence uploads.',
      'Built the Angular frontend modules with reusable components for the training flow.',
      'Modeled and administered the Oracle database schema with stored procedures for domain logic.',
    ],
    linkLabel: 'View project',
  },
  'proyecto-jne-riesgos': {
    title: 'Electoral Risk and Conflict Management',
    description:
      'Migration of a monolithic system to microservices with .NET and Angular, integrating a file server and external services for authentication and data.',
    bullets: [
      'Took part in the monolith-to-microservices migration with .NET, decoupling electoral-domain modules.',
      'Integrated connections to external services for login and institutional data consumption.',
      'Built Angular modules for the migrated system’s new interfaces.',
      'Implemented file server integration for document and evidence management.',
    ],
    linkLabel: 'View project',
  },
  'proyecto-celu-seguro': {
    title: 'Celu Seguro — Yasu',
    role: 'Backend Developer',
    description:
      'API for the complete mobile phone insurance flow: quotes by model and serial number, policyholder registration and policy issuance with payment gateway integration.',
    bullets: [
      'Took part from analysis and domain modeling through endpoint development.',
      'Built the quote flow integrating internal APIs and database data.',
      'Implemented the policy issuance endpoint with Yape and Monokera integration.',
    ],
    linkLabel: 'View project',
  },
  'proyecto-rpa-carga-afiliacion': {
    title: 'RPA Automatic Upload and Enrollment',
    description:
      'Automation of the upload and enrollment process across web and legacy desktop applications, reading from file servers and sending SMTP notifications.',
    bullets: [
      'Automated multi-screen flows on web and legacy apps using REFramework.',
      'Integrated input reading from file servers with per-item transactional processing.',
      'Configured automatic SMTP notifications with a summary of process results.',
      'Deployed to Orchestrator with queues and scheduled tasks for unattended execution.',
    ],
    linkLabel: 'View project',
  },
  'proyecto-rpa-rentas-vitalicias': {
    title: 'RPA Life Annuities',
    releases: '3 processes',
    description:
      'Automation of data upload, bulk quoting and individual quoting over legacy apps, Excel and internal websites, with reusable components and CAPTCHA solving.',
    bullets: [
      'Built the three processes on REFramework with independent per-item transactional handling.',
      'Implemented reusable login components shared across flows.',
      'Integrated TensorFlow to automatically solve CAPTCHAs on internal websites.',
      'Handled bulk Excel reads and writes as data source and input.',
    ],
    linkLabel: 'View project',
    releaseHistory: ['Data upload', 'Bulk quoting from Excel', 'One-by-one quoting in a web application'],
  },
  'proyecto-rpa-alta-codigos': {
    title: 'RPA Code Registration — Viap and Acselx',
    description:
      'Automation of code registration in legacy desktop systems, eliminating manual operation with robots orchestrated through UiPath queues.',
    bullets: [
      'Automated complex flows in legacy apps with robust selectors and fallbacks.',
      'Implemented the process on REFramework with per-item transactional control.',
      'Configured Orchestrator queues and scheduled tasks for unattended overnight runs.',
    ],
    linkLabel: 'View project',
  },
  'proyecto-entre-cuentas': {
    title: 'Entre Cuentas Web',
    description:
      'Web application for interbank transfers: entity registration, QR generation and frontend redesign with Angular.',
    bullets: [
      'Implemented sensitive data encryption on the backend with Java and Spring Boot.',
      'Built reusable Angular components for the frontend redesign.',
      'Integrated the QR generation flow connecting backend and presentation layer.',
    ],
    linkLabel: 'View project',
  },
  'proyecto-inicializaciones': {
    title: 'Initializations Web',
    description:
      'Web platform for terminal initialization management: storage administration, file uploads and approval flows.',
    bullets: [
      'Built backend modules for storage management and file uploads with AWS S3.',
      'Implemented the approval flow with state management and business validations.',
      'Built Angular views and components for the record management and approval panel.',
    ],
    linkLabel: 'View project',
  },
  'proyecto-sispro-coffee': {
    badge: 'PIDIA — Various clients',
    title: 'SISPRO Coffee — End-to-end coffee management',
    description:
      'Web system for managing the entire coffee process: receiving, transfers, dispatch, export, purchasing and grain processing, with end-to-end traceability.',
    bullets: [
      'Designed the data model and system architecture covering the full coffee cycle: lot intake, transfers between areas, dispatch and export.',
      'Built the Symfony backend with APIs for each process module, applying service and repository layers to keep business logic separate.',
      'Built the Angular frontend with per-module views (purchasing, inventory, processing, export) and reusable components for forms and management tables.',
      'Implemented real-time inventory control reflecting inflows, outflows and transfers with per-lot traceability.',
    ],
    linkLabel: 'View project',
  },
  'proyecto-restaurante': {
    badge: 'PIDIA — Various clients',
    title: 'Restaurant Management System',
    description:
      'Web system for restaurant operations: inventory control with kardex, purchasing, sales and real-time stock movements.',
    bullets: [
      'Built the Symfony backend with inventory, purchasing and sales modules, centralizing business logic in services.',
      'Implemented the inventory kardex recording every inflow and outflow with updated balance, movement type and per-product traceability.',
      'Built the Angular frontend with stock dashboards, purchase forms and movement views, prioritizing reusable components.',
      'Designed the MySQL relational model for products, categories, suppliers, movements and inventory reports.',
    ],
    linkLabel: 'View project',
  },
  'proyecto-landing-productos': {
    badge: 'PIDIA — Various clients',
    title: 'Landing Page — Product promotion',
    description:
      'Landing page built with Symfony to promote and showcase products, with a catalog, detail sections and a contact form.',
    bullets: [
      'Designed and built the full landing page in Symfony, structuring content by sections with clean routes and reusable Twig templates.',
      'Implemented the product catalog with filtering and conversion-oriented visual presentation.',
      'Integrated a contact form with backend validation and customer notifications.',
    ],
    linkLabel: 'View project',
  },
  'proyecto-cenfrocafe-planta': {
    title: 'CENFROCAFE — Processing Plant',
    description:
      'Web system for the end-to-end management of a coffee processing plant: lot receiving, physical-sensory analysis, drying, process orders, settlement, transfers, dispatch and stock control, with full traceability.',
    bullets: [
      'Built the backend with Symfony 8 and PHP 8.5 using a modular architecture with service, command and repository layers to keep business logic decoupled.',
      'Implemented the coffee production flow: receiving, physical-sensory analysis, drying, scheduling and process orders, settlement and dispatch.',
      'Built stock control with per-lot traceability, reflecting receipts, transfers and dispatches in real time.',
      'Modeled the MySQL schema with Doctrine ORM and built views with Twig and UX Live Components on Webpack Encore.',
    ],
    linkLabel: 'View project',
  },
  'proyecto-finpar': {
    badge: 'Personal project',
    title: 'FinPar — Personal and couples finance',
    role: 'Mobile Developer',
    description:
      'Mobile app for personal and couples finance management (Peru): records employment income with automatic net salary calculation and expenses by category, individual or shared with a partner.',
    bullets: [
      'Built the entire app in Flutter with a feature-first architecture, Riverpod state and go_router navigation.',
      'Implemented a custom net salary engine (Peruvian 4th and 5th category: AFP/ONP, EPS, income tax with 7 UIT deduction, family allowance), covered by unit tests.',
      'Modeled the Supabase backend (Postgres, Auth and RLS) with shared spaces: partner invitation by email and attribution of each income/expense to the right person.',
      'Built the monthly summary with balance, category breakdown and individual vs. shared contribution.',
    ],
    linkLabel: 'View project',
  },
  'proyecto-fittrack': {
    badge: 'Personal project',
    title: 'FitTrack — AI-powered fitness tracking',
    role: 'Mobile Developer',
    description:
      'Mobile fitness tracking app (training, nutrition and hydration): exercise catalog, daily routines, daily completion with timer, body progress, and AI-generated diets and routines.',
    bullets: [
      'Built the app in Flutter with Clean Architecture (data/domain/presentation), Riverpod state and 6-tab navigation with go_router.',
      'Implemented AI diet and routine plan generation, integrating Claude (Anthropic) and GPT (OpenAI) with a per-user key and a free local rule-based generator.',
      'Built the Supabase backend (Auth, Postgres with RLS, Storage and Edge Functions) with an exercise catalog, routines and progress tracking with charts.',
      'Integrated hydration reminders with schedulable local notifications and role control (user / maintainer / admin).',
    ],
    linkLabel: 'View project',
  },
  'proyecto-wordle-java': {
    badge: 'Personal project',
    title: 'Wordle — Java Console',
    description:
      'Console implementation of the Wordle game in Java, designed to scale across different word lengths and multiple dictionaries.',
    bullets: [
      'Designed the object-oriented game architecture, separating validation logic, game state and console presentation.',
      'Implemented the letter comparison engine detecting correct position, present and absent letters, replicating the original mechanic.',
      'Built the system to scale to words of any length and interchangeable dictionaries without changing the core logic.',
    ],
    linkLabel: 'View repo',
  },
};
