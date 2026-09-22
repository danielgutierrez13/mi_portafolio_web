import { useScrollReveal } from '../../../hooks/useScrollReveal';
import { Icon } from '../../ui/Icon';
import { Eyebrow } from '../../ui/Eyebrow';
import { SectionBackground } from '../../ui/SectionBackground';
import { ABOUT, type AboutFact, type Language } from '../../../data/about';

function Monogram() {
  return (
    <div className="monogram" role="img" aria-label="Daniel Gutiérrez">
      <span className="monogram__mark">
        <span className="monogram__prompt">~/</span>d<span className="monogram__cursor">_</span>
      </span>
    </div>
  );
}

interface FactListProps {
  readonly facts: AboutFact[];
}

function FactList({ facts }: FactListProps) {
  return (
    <ul className="fact-list">
      {facts.map(({ icon, label, value }) => (
        <li key={label}>
          <Icon id={icon} /><span>
            <span className="fact-label">{label}</span>
            <span className="fact-value">{value}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}

interface LangBarsProps {
  readonly languages: Language[];
}
function LangBars({ languages }: LangBarsProps) {
  return (
    <div className="lang-bars">
      {languages.map(({ name, level, pct }) => (
        <div key={name}>
          <div className="lang-bar__head">
            <span>{name}</span>
            <span>{level}</span>
          </div>
          <div className="lang-bar__track">
            <div className="lang-bar__fill" style={{ width: `${pct}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}

interface AboutBioProps {
  readonly paragraphs: string[];
}
function AboutBio({ paragraphs }: AboutBioProps) {
  return (
    <div className="about__text">
      {paragraphs.map((html) => (
        <p key={html.slice(0, 40)} dangerouslySetInnerHTML={{ __html: html }} />
      ))}
    </div>
  );
}

export function About() {
  const leftRef = useScrollReveal();
  const rightRef = useScrollReveal();
  const { facts, languages, bio } = ABOUT;

  return (
    <section className="section" id="sobre-mi">
      <SectionBackground icons={['user', 'cap', 'globe', 'pin', 'bolt']} />
      <div className="container">
        <div className="about__grid">
          <div className="reveal" ref={leftRef}>
            <Monogram />
            <FactList facts={facts} />
            <LangBars languages={languages} />
          </div>
          <div className="reveal" ref={rightRef}>
            <Eyebrow>{'// sobre-mi'}</Eyebrow>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(26px,3.6vw,34px)', fontWeight: 700, marginBottom: 22, letterSpacing: '-0.01em' }}>
              Construyo software que sigue funcionando mucho después del primer despliegue
            </h2>
            <AboutBio paragraphs={bio} />
          </div>
        </div>
      </div>
    </section>
  );
}
