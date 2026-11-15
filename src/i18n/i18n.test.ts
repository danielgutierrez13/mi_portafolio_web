import { describe, expect, it } from 'vitest';
import { localize } from './useData';
import { UI } from './ui';
import { PROJECTS } from '../data/projects';
import { EXPERIENCE, REFERENCES } from '../data/experience';
import { EDUCATION } from '../data/education';
import { SERVICES } from '../data/services';
import { OPEN_SOURCE } from '../data/opensource';
import { PROJECTS_EN } from './en/projects';
import { EXPERIENCE_EN, REFERENCES_EN } from './en/experience';
import { CERTS_EN, DEGREES_EN } from './en/education';
import { SERVICES_EN, OPEN_SOURCE_EN, NAV_LABELS_EN } from './en/content';
import { NAV_LINKS } from '../data/nav';

describe('cobertura de traducciones EN', () => {
  it('todos los proyectos tienen traducción', () => {
    expect(PROJECTS.items.filter((p) => !PROJECTS_EN[p.id]).map((p) => p.id)).toEqual([]);
  });

  it('cada release de proyecto tiene título traducido', () => {
    for (const p of PROJECTS.items) {
      const en = PROJECTS_EN[p.id];
      expect(en?.releaseHistory?.length ?? 0, p.id).toBe(p.releaseHistory.length);
    }
  });

  it('cada experiencia tiene la misma cantidad de bullets', () => {
    for (const e of EXPERIENCE) {
      expect(EXPERIENCE_EN[e.id], e.id).toBeDefined();
      expect(EXPERIENCE_EN[e.id].bullets.length, e.id).toBe(e.bullets.length);
    }
  });

  it('referencias, grados, certificaciones, servicios, repos y nav tienen traducción', () => {
    expect(REFERENCES.filter((r) => !REFERENCES_EN[r.id]).map((r) => r.id)).toEqual([]);
    expect(EDUCATION.degrees.filter((d) => !DEGREES_EN[d.id]).map((d) => d.id)).toEqual([]);
    const certIds = EDUCATION.certGroups.flatMap((g) => g.certs.map((c) => c.id));
    expect(certIds.filter((id) => !CERTS_EN[id])).toEqual([]);
    expect(SERVICES.items.filter((s) => !SERVICES_EN.items[s.id]).map((s) => s.id)).toEqual([]);
    expect(OPEN_SOURCE.repos.filter((r) => !OPEN_SOURCE_EN.repos[r.id]).map((r) => r.id)).toEqual([]);
    expect(NAV_LINKS.filter((l) => !NAV_LABELS_EN[l.href]).map((l) => l.href)).toEqual([]);
  });
});

describe('localize()', () => {
  it('en inglés no queda texto español clave en nav ni hero', () => {
    const en = localize('en');
    expect(en.NAV_LINKS.map((l) => l.label)).toEqual(['About', 'Stack', 'Experience', 'Projects', 'Education', 'Contact']);
    expect(en.HERO.role.prefix).toMatch(/Software Engineer II at/);
  });

  it('conserva ids, enlaces y chips al traducir', () => {
    const es = localize('es');
    const en = localize('en');
    expect(en.PROJECTS.items.map((p) => p.id)).toEqual(es.PROJECTS.items.map((p) => p.id));
    expect(en.EXPERIENCE.map((e) => e.chips)).toEqual(es.EXPERIENCE.map((e) => e.chips));
    expect(en.EDUCATION.certGroups.flatMap((g) => g.certs.map((c) => c.links)))
      .toEqual(es.EDUCATION.certGroups.flatMap((g) => g.certs.map((c) => c.links)));
  });

  it('traduce los meses de las certificaciones', () => {
    const obtained = localize('en').EDUCATION.certGroups.flatMap((g) => g.certs.map((c) => c.obtained));
    expect(obtained.some((o) => /Ene\.|Abr\.|Ago\.|Marz\.|Set\./.test(o))).toBe(false);
  });
});

describe('textos de interfaz', () => {
  it('es y en tienen las mismas claves', () => {
    expect(Object.keys(UI.en).sort()).toEqual(Object.keys(UI.es).sort());
  });

  it('duración en meses y años', () => {
    expect(UI.es.duration(1, 2)).toBe('1 año 2 meses');
    expect(UI.en.duration(2, 0)).toBe('2 yrs');
  });
});
