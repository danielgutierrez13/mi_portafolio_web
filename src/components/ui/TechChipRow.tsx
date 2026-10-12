import { type CSSProperties } from 'react';
import { TECH_ICON_MAP } from '../../data/techIconMap';

interface TechChipRowProps {
  readonly chips: string[];
  readonly className?: string;
}

export function TechChipRow({ chips, className = '' }: TechChipRowProps) {
  return (
    <div className={`chip-row ${className}`.trim()}>
      {chips.map((chip) => {
        const logo = TECH_ICON_MAP[chip];
        if (!logo) {
          return (
            <span key={chip} className="chip chip--logo chip--logo--fallback">
              <svg className="chip__logo" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.2 7.2 3.4 12l4.8 4.8 1.4-1.4L6.2 12l3.4-3.4-1.4-1.4Zm7.6 0-1.4 1.4 3.4 3.4-3.4 3.4 1.4 1.4 4.8-4.8-4.8-4.8ZM13 5 9.8 19h2.1L15 5H13Z" fill="currentColor" />
              </svg>
              {chip}
            </span>
          );
        }
        return (
          <span key={chip} className="chip chip--logo" style={{ '--logo-color': logo.color } as CSSProperties}>
            <svg className="chip__logo" viewBox="0 0 24 24" aria-hidden="true">
              <path d={logo.path} fill="currentColor" />
            </svg>
            {chip}
          </span>
        );
      })}
    </div>
  );
}
