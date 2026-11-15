import { useScrollReveal } from '../../../hooks/useScrollReveal';
import { useT } from '../../../i18n/ui';
import { useData } from '../../../i18n/useData';

function Timestamp({ locale }: { locale: string }) {
  const now = new Date();
  const opts: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' };
  return <span>{now.toLocaleString(locale, opts)}</span>;
}

const K = ({ children }: { children: string }) => <span className="tok-key">&quot;{children}&quot;</span>;
const S = ({ children }: { children: string }) => <span className="tok-str">&quot;{children}&quot;</span>;

function buildApiLines(keys: ReturnType<typeof useT>['apiKeys'], location: string, role: string, name: string, available: string) {
  return [
    <>{'{'}</>,
    <>{'  '}<K>{keys.name}</K>{': '}<S>{name}</S>{','}</>,
    <>{'  '}<K>{keys.role}</K>{': '}<S>{role}</S>{','}</>,
    <>{'  '}<K>{keys.location}</K>{': '}<S>{location}</S>{','}</>,
    <>{'  '}<K>{keys.stack}</K>{': ['}</>,
    <>{'    '}<S>Java</S>{', '}<S>Spring Boot</S>{','}</>,
    <>{'    '}<S>Angular</S>{', '}<S>Azure</S></>,
    <>{'  ],'}</>,
    <>{'  '}<K>{keys.years}</K>{': '}<span className="tok-num">4</span>{','}</>,
    <>{'  '}<K>{keys.availability}</K>{': '}<S>{available}</S></>,
    <>{'}'}</>,
  ];
}

export function ApiCard() {
  const ref = useScrollReveal();
  const t = useT();
  const { HERO } = useData();
  const API_LINES = buildApiLines(t.apiKeys, t.apiLocation, 'Software Engineer II', HERO.name.replace('\n', ' '), 'open_to_opportunities');

  return (
    <div className="hero__panel reveal" ref={ref}>
      <div className="api-card">
        <div className="api-card__bar">
          <span className="api-card__dot--get">GET</span>
          <span className="api-card__path">{t.apiPath}</span>
        </div>
        <div className="api-card__status">
          <span className="status-pill--ok">200 OK</span>
          <span>34ms</span>
          <Timestamp locale={t.apiLocale} />
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
