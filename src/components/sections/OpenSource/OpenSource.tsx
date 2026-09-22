import { useScrollReveal } from '../../../hooks/useScrollReveal';
import { SectionHead } from '../../ui/SectionHead';
import { Icon } from '../../ui/Icon';
import { Section } from '../../layout/Section';
import { OPEN_SOURCE, type Repo } from '../../../data/opensource';

function RepoCard({ name, description, language, url }: Repo) {
  const ref = useScrollReveal<HTMLAnchorElement>();
  return (
    <a className="repo-card reveal" ref={ref} href={url} target="_blank" rel="noopener">
      <div className="repo-card__head">
        <Icon id="github" />
        <span className="repo-card__name">{name}</span>
        <Icon id="external" className="repo-card__ext" />
      </div>
      <p>{description}</p>
      <span className="repo-card__lang">
        <span className="repo-card__dot" aria-hidden="true" />
        {language}
      </span>
    </a>
  );
}

export function OpenSource() {
  const ref = useScrollReveal<HTMLAnchorElement>();
  const { eyebrow, heading, description, user, profileUrl, repos } = OPEN_SOURCE;

  return (
    <Section id="open-source" bg={['github', 'star', 'fork', 'terminal']}>
      <SectionHead eyebrow={eyebrow} heading={heading} description={description} />
      <div className="opensource-grid">
        <a className="gh-profile reveal" ref={ref} href={profileUrl} target="_blank" rel="noopener">
          <span className="gh-profile__icon" aria-hidden="true">
            <Icon id="github" />
          </span>
          <span className="gh-profile__user">@{user}</span>
          <span className="gh-profile__cta">
            Ver perfil en GitHub <Icon id="arrow" />
          </span>
        </a>
        {repos.map((repo) => (
          <RepoCard key={repo.id} {...repo} />
        ))}
      </div>
    </Section>
  );
}
