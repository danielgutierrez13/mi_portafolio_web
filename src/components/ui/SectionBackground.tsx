import { type CSSProperties } from 'react';
import { Icon } from './Icon';
import { TechLogo } from './TechLogo';
import { type TechLogo as TechLogoData } from '../../data/techLogos';

interface SectionBackgroundProps {
  readonly icons?: string[];
  readonly logos?: TechLogoData[];
}

const POSITIONS = [
  { top: '10%', left: '4%', size: 44, dur: 9, delay: 0 },
  { top: '22%', left: '84%', size: 52, dur: 11, delay: 1.2 },
  { top: '68%', left: '8%', size: 40, dur: 10, delay: 0.5 },
  { top: '78%', left: '72%', size: 48, dur: 12, delay: 2 },
  { top: '12%', left: '58%', size: 34, dur: 10, delay: 0.8 },
  { top: '54%', left: '90%', size: 42, dur: 11, delay: 0.3 },
  { top: '86%', left: '30%', size: 38, dur: 9, delay: 2.2 },
  { top: '32%', left: '22%', size: 36, dur: 12, delay: 1 },
  { top: '50%', left: '64%', size: 42, dur: 10, delay: 0.6 },
  { top: '72%', left: '46%', size: 34, dur: 11, delay: 1.8 },
  { top: '16%', left: '38%', size: 38, dur: 10, delay: 2.5 },
];

export function SectionBackground({ icons, logos }: SectionBackgroundProps) {
  return (
    <div className="section-bg" aria-hidden="true">
      {POSITIONS.map((pos, i) => (
        <span
          key={i}
          className="section-bg__item"
          style={{
            top: pos.top,
            left: pos.left,
            width: pos.size,
            height: pos.size,
            animationDuration: `${pos.dur}s`,
            animationDelay: `${pos.delay}s`,
          } as CSSProperties}
        >
          {logos
            ? <TechLogo logo={logos[i % logos.length]} className="section-bg__icon" />
            : <Icon id={icons![i % icons!.length]} className="section-bg__icon" />}
        </span>
      ))}
    </div>
  );
}
