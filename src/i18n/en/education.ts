export const EDUCATION_META_EN = {
  eyebrow: '// education-and-certifications',
  heading: 'Education and training',
  description:
    'Academic foundation and continuous learning in architecture, security, data and product development. Click any course to see its certificate.',
};

export const DEGREES_EN: Record<string, { degree: string; date: string }> = {
  'unp-titulo': { degree: 'Professional Degree in Computer Engineering', date: 'Thesis defense · Jul. 2026' },
  unp: { degree: "Bachelor's Degree in Computer Engineering", date: 'Mar. 2018 — Mar. 2023' },
};

export const GROUP_LABELS_EN: Record<string, string> = {
  inetum: '// inetum peru',
};

interface CertEn {
  readonly name?: string;
  readonly title?: string;
  readonly detail: string;
}

export const CERTS_EN: Record<string, CertEn> = {
  'encora-genai': {
    detail:
      'From generative AI fundamentals to expert use: language models, advanced prompt engineering, LLM integration into enterprise workflows and result evaluation.',
  },
  'coursera-vertex-flutter': {
    detail:
      'Building generative AI agents with Google Cloud Vertex AI, integrated into Flutter apps for conversational mobile experiences.',
  },
  'coursera-genai-dev-career': {
    detail:
      'Applying generative AI across the development lifecycle: code generation, automated review, testing and DevOps acceleration.',
  },
  'coursera-genai-agents-org': {
    detail:
      'Designing and implementing generative AI agents to automate business workflows and improve organizational decision-making.',
  },
  'coursera-genai-intro-ibm': {
    detail:
      'Generative AI fundamentals: language, image and multimodal models; industry use cases and a methodology to apply them in real environments.',
  },
  'coursera-ai-system-design': {
    detail:
      'AI-assisted system design: modern architectures, LLM integration patterns and best practices for building intelligent products.',
  },
  'coursera-agentic-langgraph-crewai': {
    detail:
      'Multi-agent systems with LangGraph, CrewAI, AutoGen and BeeAI: orchestration, shared memory, external tools and autonomous collaborative flows.',
  },
  'coursera-team-sw-ai': {
    detail:
      'Integrating AI into engineering teams: pair programming with LLMs, assisted code review, automatic documentation and augmented collaboration.',
  },
  'coursera-agentic-langchain': {
    detail:
      'Intelligent agents with LangChain and LangGraph: reasoning chains, state graphs, persistent memory and external tool integration.',
  },
  'coursera-genai-sw-intro': {
    name: 'GenAI for Devs',
    detail:
      'Hands-on introduction to generative AI for developers: using LLMs to generate, debug and document code in real workflows.',
  },
  'coursera-rag-langchain': {
    detail:
      'Fundamentals of agents with RAG (Retrieval-Augmented Generation) and LangChain: embeddings, vector stores and intelligent context retrieval pipelines.',
  },
  'coursera-advanced-prompt': {
    detail:
      'Advanced prompt engineering techniques: chain-of-thought, few-shot, structured reasoning and strategies to maximize LLM accuracy.',
  },
  'coursera-genai-everyone': {
    detail:
      'Overview of generative AI: what LLMs are, how they work and how to integrate GenAI into projects and organizations effectively.',
  },
  'coursera-genai-llm-aws': {
    name: 'GenAI with LLMs',
    detail:
      'Deep dive into LLMs: Transformer architecture, fine-tuning, RLHF, scalable deployment on AWS and performance and cost considerations in production.',
  },
  'coursera-prompt-basics': {
    detail:
      'Prompt engineering basics: prompt structure, zero-shot and few-shot learning, output control and best practices for accurate responses.',
  },
  'inetum-seguridad': {
    name: 'Information security',
    title: 'Information security',
    detail:
      'Cybersecurity principles applied to software development: risk management, data protection and regulatory compliance.',
  },
  'mdp-devseguro': {
    name: 'Secure software development',
    title: 'Secure software development',
    detail:
      'Secure coding best practices: OWASP Top 10, input validation, safe credential handling and code review.',
  },
  'bcp-finanzas': {
    name: 'Personal finance',
    title: 'Personal finance',
    detail:
      'Personal budget management, saving, basic investing and short- and long-term financial planning.',
  },
  'uipath-foundation': {
    detail:
      'RPA automation fundamentals: workflow design, selectors, exception handling and bot deployment in Orchestrator.',
  },
  'uipath-advanced': {
    detail:
      'Advanced automation: REFramework, Orchestrator queues, API integrations and robust exception handling in enterprise scenarios.',
  },
  'platzi-git': {
    name: 'Git and GitHub',
    title: 'Professional Git and GitHub Course',
    detail:
      'Version control with Git: branching, merging, rebase, pull requests and collaborative workflows with GitHub.',
  },
  'platzi-symfony': {
    title: 'Symfony Framework Course',
    detail:
      'Web application development with Symfony: MVC architecture, routing, Doctrine ORM, services, security and modern PHP ecosystem best practices.',
  },
  'platzi-js': {
    name: 'JavaScript Fundamentals',
    title: 'Basic JavaScript Course',
    detail:
      'JavaScript language basics: data types, functions, scope, closures, DOM manipulation and asynchronous programming fundamentals.',
  },
  'platzi-js-practico': {
    name: 'Practical JavaScript',
    title: 'Practical JavaScript Course',
    detail:
      'Practical JavaScript: real projects, API consumption, advanced DOM manipulation and clean, reusable code patterns.',
  },
  'platzi-codestream': {
    title: 'Modern Development Workflow with CodeStream Course',
    detail:
      'Integrating code review tools, team collaboration and a modern workflow with CodeStream.',
  },
  'kb-disenio': {
    name: 'Advertising design',
    title: 'Advertising design',
    detail:
      'Graphic design fundamentals, visual composition and editing tools for digital and printed advertising material.',
  },
  'kb-java': {
    detail:
      'Object-oriented programming with Java: classes, inheritance, polymorphism, collections and application development fundamentals.',
  },
  'kb-phpmysql': {
    name: 'PHP and MySQL',
    title: 'PHP and MySQL',
    detail:
      'Backend web development with PHP and relational database management with MySQL: queries, procedures and schema design.',
  },
  'kb-bd': {
    name: 'DB modeling',
    title: 'Database structure and modeling',
    detail:
      'Database design principles: normalization, ER diagrams, referential integrity and query optimization.',
  },
};

const MONTHS: Record<string, string> = {
  'Ene.': 'Jan.',
  'Abr.': 'Apr.',
  'Ago.': 'Aug.',
  'Marz.': 'Mar.',
  'Set.': 'Sep.',
};

/** Traduce abreviaturas de mes en español ("Ene. 2026") a inglés ("Jan. 2026"). */
export function monthEn(text: string): string {
  return text.replace(/^(\S+\.)/, (m) => MONTHS[m] ?? m);
}
