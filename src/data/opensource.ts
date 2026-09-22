export interface Repo {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly language: string;
  readonly url: string;
}

export interface OpenSource {
  readonly eyebrow: string;
  readonly heading: string;
  readonly description: string;
  readonly user: string;
  readonly profileUrl: string;
  readonly repos: Repo[];
}

export const OPEN_SOURCE: OpenSource = {
  eyebrow: '// github',
  heading: 'Código abierto',
  description:
    'Proyectos personales y experimentos que publico en GitHub. Explóralos o revisa mi perfil completo.',
  user: 'danielgutierrez13',
  profileUrl: 'https://github.com/danielgutierrez13',
  repos: [
    {
      id: 'mi-portafolio-web',
      name: 'mi_portafolio_web',
      description:
        'Este mismo portafolio: SPA en React 19 + TypeScript, CSS vanilla con design tokens, animaciones e interacciones, y cero librerías de UI. Open source bajo licencia MIT.',
      language: 'TypeScript',
      url: 'https://github.com/danielgutierrez13/mi_portafolio_web',
    },
    {
      id: 'wordle-game',
      name: 'wordle-game',
      description:
        'Implementación del juego Wordle en consola con Java, diseñada de forma escalable para distintas longitudes de palabra y múltiples diccionarios.',
      language: 'Java',
      url: 'https://github.com/danielgutierrez13/wordle-game',
    },
  ],
};
