export interface NavLink {
  href: string;
  label: string;
  icon: string;
  relatedSections?: string[];
}

export const NAV_LINKS: NavLink[] = [
  { href: '#sobre-mi', label: 'Sobre mí', icon: 'user' },
  { href: '#stack', label: 'Stack', icon: 'terminal', relatedSections: ['servicios'] },
  { href: '#experiencia', label: 'Experiencia', icon: 'briefcase' },
  { href: '#proyectos', label: 'Proyectos', icon: 'folder', relatedSections: ['open-source'] },
  { href: '#formacion', label: 'Formación', icon: 'cap' },
  { href: '#contacto', label: 'Contacto', icon: 'mail' },
];
