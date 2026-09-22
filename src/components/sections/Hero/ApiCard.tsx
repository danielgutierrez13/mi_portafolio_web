import { useScrollReveal } from '../../../hooks/useScrollReveal';

function Timestamp() {
  const now = new Date();
  const opts: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' };
  return <span>{now.toLocaleString('es-PE', opts)}</span>;
}

const K = ({ children }: { children: string }) => <span className="tok-key">&quot;{children}&quot;</span>;
const S = ({ children }: { children: string }) => <span className="tok-str">&quot;{children}&quot;</span>;

const API_LINES = [
  <>{'{'}</>,
  <>{'  '}<K>nombre</K>{': '}<S>Cesar Daniel Gutiérrez Villegas</S>{','}</>,
  <>{'  '}<K>rol</K>{': '}<S>Software Engineer II</S>{','}</>,
  <>{'  '}<K>ubicacion</K>{': '}<S>Piura, Perú</S>{','}</>,
  <>{'  '}<K>stack_principal</K>{': ['}</>,
  <>{'    '}<S>Java</S>{', '}<S>Spring Boot</S>{','}</>,
  <>{'    '}<S>Angular</S>{', '}<S>Azure</S></>,
  <>{'  ],'}</>,
  <>{'  '}<K>experiencia_anios</K>{': '}<span className="tok-num">4</span>{','}</>,
  <>{'  '}<K>disponibilidad</K>{': '}<S>open_to_opportunities</S></>,
  <>{'}'}</>,
];

export function ApiCard() {
  const ref = useScrollReveal();

  return (
    <div className="hero__panel reveal" ref={ref}>
      <div className="api-card">
        <div className="api-card__bar">
          <span className="api-card__dot--get">GET</span>
          <span className="api-card__path">/perfil/daniel-gutierrez</span>
        </div>
        <div className="api-card__status">
          <span className="status-pill--ok">200 OK</span>
          <span>34ms</span>
          <Timestamp />
        </div>
        <pre className="api-card__body">
          <code>
            {API_LINES.map((line, i) => (
              <span className="api-card__line" key={i} style={{ animationDelay: `${0.18 + i * 0.09}s` }}>
                {line}
                {i === API_LINES.length - 1 && <span className="cursor-blink">|</span>}
              </span>
            ))}
          </code>
        </pre>
      </div>
    </div>
  );
}
