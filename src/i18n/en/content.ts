import type { Hero } from '../../data/hero';
import type { About } from '../../data/about';
import type { Stack } from '../../data/stack';
import type { Services } from '../../data/services';
import type { Contact } from '../../data/contact';
import type { OpenSource } from '../../data/opensource';

export const NAV_LABELS_EN: Record<string, string> = {
  '#sobre-mi': 'About',
  '#stack': 'Stack',
  '#experiencia': 'Experience',
  '#proyectos': 'Projects',
  '#formacion': 'Education',
  '#contacto': 'Contact',
};

export const HERO_EN: Hero = {
  eyebrow: '// software engineer · backend cloud & microservices',
  name: 'Cesar Daniel\nGutiérrez Villegas',
  role: { prefix: 'Software Engineer II at ', company: 'Encora / Coforge', suffix: ' — Java · Spring Boot · Azure' },
  pitch:
    'I design APIs with an API-First approach and evolve reactive microservices in the cloud. 4+ years connecting backend, frontend and automation with solid engineering practices and rigorous documentation.',
  meta: [
    { icon: 'pin', text: 'Piura, Peru' },
    { icon: 'live', text: 'Open to new challenges' },
    { icon: 'globe', text: 'Spanish (C2) · English (A2)' },
  ],
};

export const ABOUT_EN: About = {
  facts: [
    { icon: 'pin', label: 'Location', value: 'Piura, Peru' },
    { icon: 'cap', label: 'Education', value: 'Computer Engineer — UNP' },
    { icon: 'bolt', label: 'Focus', value: 'Backend cloud, microservices & RPA' },
  ],
  languages: [
    { name: 'Spanish', level: 'C2 · Native', pct: 100 },
    { name: 'English', level: 'A2 · Pre-intermediate', pct: 30 },
  ],
  bio: [
    "I'm a Computer Engineer with experience building enterprise software: reactive microservices, well-documented APIs and RPA automations that remove manual work. I move comfortably between <strong>backend with Java and Spring Boot</strong>, <strong>frontend with Angular and React</strong>, and the cloud on <strong>Azure and AWS</strong>.",
    'I work <strong>API-First</strong>: I define clear contracts between domains before writing business logic, and document with flow and sequence diagrams so anyone on the team can understand and evolve the system without code archaeology.',
    "I care as much about something working today as about it still working in production — that's why I prioritize <strong>observability, automated testing and DevOps practices</strong> in every project I take part in.",
  ],
};

export const STACK_EN: Pick<Stack, 'eyebrow' | 'heading' | 'description'> & {
  metricLabels: string[];
  skillLabels: Record<string, string>;
} = {
  eyebrow: '// tech-stack',
  heading: 'Tech stack',
  description:
    'Technologies I use to design, build, deploy and monitor software, organized like a status panel.',
  metricLabels: ['technologies in use', 'companies / clients', 'years of experience'],
  skillLabels: {
    lenguajes: '// languages',
    frontend: '// frontend',
    backend: '// backend & automation',
    cloud: '// cloud & devops',
    db: '// databases',
    calidad: '// quality & monitoring',
  },
};

export const SERVICES_EN: Pick<Services, 'eyebrow' | 'heading' | 'description'> & {
  items: Record<string, { title: string; description: string }>;
} = {
  eyebrow: '// services',
  heading: 'How I can help',
  description:
    'I design, build and maintain software end to end. These are the areas where I add the most value.',
  items: {
    backend: {
      title: 'Backend & cloud microservices',
      description:
        'REST APIs with an API-First approach, reactive microservices with Spring Boot and .NET, and Azure and AWS integrations focused on resilience and observability.',
    },
    frontend: {
      title: 'Frontend & web applications',
      description:
        'Modern interfaces and reusable components with React and Angular: responsive SPAs, state management and API consumption with a focus on user experience.',
    },
    rpa: {
      title: 'Process automation (RPA)',
      description:
        'Robots that eliminate repetitive manual work: unattended processes with UiPath over web and legacy apps, Orchestrator queues and exception handling.',
    },
    mobile: {
      title: 'Mobile applications',
      description:
        'Cross-platform mobile apps with Flutter and a Supabase backend: clean architecture, Riverpod state and production-ready features.',
    },
    ia: {
      title: 'AI & agent integration',
      description:
        'I bring LLMs and agent workflows into real products: assisted generation, RAG and Claude and GPT integrations wired into business logic.',
    },
  },
};

export const CONTACT_EN: Pick<Contact, 'eyebrow' | 'heading' | 'description' | 'location'> = {
  eyebrow: '// contact',
  heading: 'Shall we build something together?',
  description: "Open to new opportunities as a backend / full stack developer. Drop me a line and I'll reply shortly.",
  location: 'Piura, Peru',
};

export const OPEN_SOURCE_EN: Pick<OpenSource, 'eyebrow' | 'heading' | 'description'> & {
  repos: Record<string, string>;
} = {
  eyebrow: '// github',
  heading: 'Open source',
  description: 'Personal projects and experiments I publish on GitHub. Explore them or check out my full profile.',
  repos: {
    'mi-portafolio-web':
      'This very portfolio: a React 19 + TypeScript SPA, vanilla CSS with design tokens, animations and interactions, and zero UI libraries. Open source under the MIT license.',
    'wordle-game':
      'Console implementation of the Wordle game in Java, designed to scale across different word lengths and multiple dictionaries.',
  },
};
