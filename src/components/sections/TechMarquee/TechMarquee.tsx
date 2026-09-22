import { TECH_LOGOS } from '../../../data/techLogos';
import { TechLogo } from '../../ui/TechLogo';

export function TechMarquee() {
  const loop = [...TECH_LOGOS, ...TECH_LOGOS];
  return (
    <div className="tech-marquee" aria-hidden="true">
      <div className="tech-marquee__track">
        {loop.map((logo, i) => (
          <span className="tech-marquee__item" key={`${logo.title}-${i}`}>
            <TechLogo logo={logo} className="tech-marquee__logo" />
            <span className="tech-marquee__label">{logo.title}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
