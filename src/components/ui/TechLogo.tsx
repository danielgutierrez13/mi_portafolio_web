import { type CSSProperties } from 'react';
import { type TechLogo as TechLogoData } from '../../data/techLogos';

interface TechLogoProps {
  readonly logo: TechLogoData;
  readonly className?: string;
}

export function TechLogo({ logo, className }: TechLogoProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      role="img"
      aria-label={logo.title}
      style={{ '--logo-color': logo.color } as CSSProperties}
    >
      <title>{logo.title}</title>
      <path d={logo.path} fill="currentColor" />
    </svg>
  );
}
