export interface NavLink {
  href: string;
  label: string;
  icon: string;
}

export const NAV_LINKS: NavLink[] = [
  { href: '#sobre-mi', label: 'Sobre mí', icon: 'user' },
  { href: '#stack', label: 'Stack', icon: 'terminal' },
  { href: '#servicios', label: 'Servicios', icon: 'layers' },
  { href: '#experiencia', label: 'Experiencia', icon: 'briefcase' },
  { href: '#proyectos', label: 'Proyectos', icon: 'folder' },
  { href: '#open-source', label: 'Open source', icon: 'github' },
  { href: '#formacion', label: 'Formación', icon: 'cap' },
  { href: '#contacto', label: 'Contacto', icon: 'mail' },
];
