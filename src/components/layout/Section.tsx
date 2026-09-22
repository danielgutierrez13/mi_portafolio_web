import { type ReactNode } from 'react';
import { Container } from './Container';
import { SectionBackground } from '../ui/SectionBackground';
import { type TechLogo } from '../../data/techLogos';

interface SectionProps {
  readonly id: string;
  readonly alt?: boolean;
  readonly dark?: boolean;
  readonly children: ReactNode;
  readonly className?: string;
  readonly bg?: string[];
  readonly bgLogos?: TechLogo[];
}

export function Section({ id, alt = false, dark = false, children, className = '', bg, bgLogos }: SectionProps) {
  const cls = [
    dark ? 'contact' : 'section',
    alt && !dark ? 'section--alt' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <section id={id} className={cls}>
      {(bg || bgLogos) && <SectionBackground icons={bg} logos={bgLogos} />}
      <Container>{children}</Container>
    </section>
  );
}
