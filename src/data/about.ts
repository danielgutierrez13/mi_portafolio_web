export interface AboutFact {
  readonly icon: string;
  readonly label: string;
  readonly value: string;
}

export interface Language {
  readonly name: string;
  readonly level: string;
  readonly pct: number;
}

export interface About {
  readonly facts: AboutFact[];
  readonly languages: Language[];
  readonly bio: string[];
}

export const ABOUT: About = {
  facts: [
    { icon: 'pin', label: 'Ubicación', value: 'Piura, Perú' },
    { icon: 'cap', label: 'Educación', value: 'Ingeniero Informático — UNP' },
    { icon: 'bolt', label: 'Enfoque', value: 'Backend cloud, microservicios & RPA' },
  ],
  languages: [
    { name: 'Español', level: 'C2 · Nativo', pct: 100 },
    { name: 'English', level: 'A2 · Pre‑intermedio', pct: 30 },
  ],
  bio: [
    'Soy Ingeniero Informático con experiencia construyendo software empresarial: microservicios reactivos, APIs bien documentadas y automatizaciones RPA que eliminan trabajo manual. Me muevo cómodo entre el <strong>backend con Java y Spring Boot</strong>, el <strong>frontend con Angular y React</strong>, y la nube en <strong>Azure y AWS</strong>.',
    'Trabajo bajo un enfoque <strong>API‑First</strong>: defino contratos claros entre dominios antes de escribir lógica de negocio, y documento con diagramas de flujo y de secuencia para que cualquier persona del equipo pueda entender y evolucionar el sistema sin arqueología de código.',
    'Me importa tanto que algo funcione hoy como que siga funcionando en producción — por eso priorizo <strong>observabilidad, pruebas automatizadas y prácticas DevOps</strong> en cada proyecto en el que participo.',
  ],
};
