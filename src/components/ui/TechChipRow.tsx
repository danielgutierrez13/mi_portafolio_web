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
        if (!logo) return <span key={chip} className="chip">{chip}</span>;
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
