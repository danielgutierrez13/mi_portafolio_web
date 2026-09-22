import { useScrollReveal } from '../../../hooks/useScrollReveal';
import { useCountUp } from '../../../hooks/useCountUp';
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
  const { ref, display } = useCountUp(num);
  return (
    <div className="metric-tile">
      <span className="num" ref={ref}>{display}</span>
      <span className="label">{label}</span>
    </div>
  );
}

function SkillCard({ label, chips, index }: SkillGroup & { index: number }) {
  const ref = useScrollReveal<HTMLDivElement>();
  return (
    <div className="skill-card reveal" ref={ref} style={{ transitionDelay: `${(index % 3) * 0.08}s` }}>
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
        {skills.map((skill, i) => (
          <SkillCard key={skill.id} index={i} {...skill} />
        ))}
      </div>
    </Section>
  );
}
