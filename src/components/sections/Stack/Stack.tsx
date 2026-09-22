import { useScrollReveal } from '../../../hooks/useScrollReveal';
import { SectionHead } from '../../ui/SectionHead';
import { ChipRow } from '../../ui/Chip';
import { Section } from '../../layout/Section';
import { STACK, type SkillGroup } from '../../../data/stack';
import { TECH_LOGOS } from '../../../data/techLogos';

interface MetricTileProps {
  readonly num: string;
  readonly label: string;
}
function MetricTile({ num, label }: MetricTileProps) {
  return (
    <div className="metric-tile">
      <span className="num">{num}</span>
      <span className="label">{label}</span>
    </div>
  );
}

function SkillCard({ label, chips }: SkillGroup) {
  const ref = useScrollReveal();
  return (
    <div className="skill-card reveal" ref={ref}>
      <div className="skill-card__head">
        <span className="dot" aria-hidden="true" />
        {label}
      </div>
      <ChipRow chips={chips} />
    </div>
  );
}

export function Stack() {
  const ref = useScrollReveal();
  const { eyebrow, heading, description, metrics, skills } = STACK;

  return (
    <Section id="stack" alt bgLogos={TECH_LOGOS}>
      <SectionHead eyebrow={eyebrow} heading={heading} description={description} />
      <div className="metrics reveal" ref={ref}>
        {metrics.map(({ num, label }) => (
          <MetricTile key={label} num={num} label={label} />
        ))}
      </div>
      <div className="skills-grid">
        {skills.map((skill) => (
          <SkillCard key={skill.id} {...skill} />
        ))}
      </div>
    </Section>
  );
}
