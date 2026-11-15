import { useMemo } from 'react';
import { useLang } from './useLang';
import { type Lang } from './LangContext';
import { NAV_LINKS } from '../data/nav';
import { HERO } from '../data/hero';
import { ABOUT } from '../data/about';
import { STACK } from '../data/stack';
import { SERVICES } from '../data/services';
import { CONTACT } from '../data/contact';
import { OPEN_SOURCE } from '../data/opensource';
import { EXPERIENCE, REFERENCES } from '../data/experience';
import { PROJECTS } from '../data/projects';
import { EDUCATION } from '../data/education';
import {
  NAV_LABELS_EN, HERO_EN, ABOUT_EN, STACK_EN, SERVICES_EN, CONTACT_EN, OPEN_SOURCE_EN,
} from './en/content';
import { EXPERIENCE_EN, REFERENCES_EN } from './en/experience';
import { PROJECTS_EN, PROJECTS_META_EN } from './en/projects';
import {
  EDUCATION_META_EN, DEGREES_EN, GROUP_LABELS_EN, CERTS_EN, monthEn,
} from './en/education';

export function localize(lang: Lang) {
  if (lang === 'es') {
    return { NAV_LINKS, HERO, ABOUT, STACK, SERVICES, CONTACT, OPEN_SOURCE, EXPERIENCE, REFERENCES, PROJECTS, EDUCATION };
  }

  return {
    NAV_LINKS: NAV_LINKS.map((l) => ({ ...l, label: NAV_LABELS_EN[l.href] ?? l.label })),
    HERO: HERO_EN,
    ABOUT: ABOUT_EN,
    STACK: {
      ...STACK,
      eyebrow: STACK_EN.eyebrow,
      heading: STACK_EN.heading,
      description: STACK_EN.description,
      metrics: STACK.metrics.map((m, i) => ({ ...m, label: STACK_EN.metricLabels[i] ?? m.label })),
      skills: STACK.skills.map((s) => ({ ...s, label: STACK_EN.skillLabels[s.id] ?? s.label })),
    },
    SERVICES: {
      ...SERVICES,
      eyebrow: SERVICES_EN.eyebrow,
      heading: SERVICES_EN.heading,
      description: SERVICES_EN.description,
      items: SERVICES.items.map((it) => ({ ...it, ...SERVICES_EN.items[it.id] })),
    },
    CONTACT: { ...CONTACT, ...CONTACT_EN },
    OPEN_SOURCE: {
      ...OPEN_SOURCE,
      eyebrow: OPEN_SOURCE_EN.eyebrow,
      heading: OPEN_SOURCE_EN.heading,
      description: OPEN_SOURCE_EN.description,
      repos: OPEN_SOURCE.repos.map((r) => ({ ...r, description: OPEN_SOURCE_EN.repos[r.id] ?? r.description })),
    },
    EXPERIENCE: EXPERIENCE.map((e) => ({ ...e, ...EXPERIENCE_EN[e.id] })),
    REFERENCES: REFERENCES.map((r) => ({ ...r, ...REFERENCES_EN[r.id] })),
    PROJECTS: {
      ...PROJECTS,
      eyebrow: PROJECTS_META_EN.eyebrow,
      heading: PROJECTS_META_EN.heading,
      description: PROJECTS_META_EN.description,
      items: PROJECTS.items.map((p) => {
        const { releaseHistory, ...tr } = PROJECTS_EN[p.id] ?? { releaseHistory: undefined };
        return {
          ...p,
          ...tr,
          contribLabel: PROJECTS_META_EN.contribLabel,
          releaseHistory: p.releaseHistory.map((r, i) => ({ ...r, title: releaseHistory?.[i] ?? r.title })),
        };
      }),
    },
    EDUCATION: {
      ...EDUCATION,
      ...EDUCATION_META_EN,
      degrees: EDUCATION.degrees.map((d) => ({ ...d, ...DEGREES_EN[d.id] })),
      certGroups: EDUCATION.certGroups.map((g) => ({
        ...g,
        label: GROUP_LABELS_EN[g.id] ?? g.label,
        certs: g.certs.map((c) => ({ ...c, ...CERTS_EN[c.id], obtained: monthEn(c.obtained) })),
      })),
    },
  };
}

const CACHE: Partial<Record<Lang, ReturnType<typeof localize>>> = {};

/** Datos del portafolio en el idioma activo (memoizados por idioma). */
export function useData() {
  const { lang } = useLang();
  return useMemo(() => (CACHE[lang] ??= localize(lang)), [lang]);
}
