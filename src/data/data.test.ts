import { describe, expect, it } from 'vitest';
import { EXPERIENCE } from './experience';
import { STACK } from './stack';
import { SERVICES } from './services';
import { PROJECTS } from './projects';
import { TECH_ICON_MAP } from './techIconMap';
import { TECH_LOGOS } from './techLogos';
import { NAV_LINKS } from './nav';

const HEX = /^#[0-9a-fA-F]{6}$/;

const allChips = [
  ...EXPERIENCE.flatMap((e) => e.chips),
  ...STACK.skills.flatMap((s) => s.chips),
  ...SERVICES.items.flatMap((s) => s.chips),
  ...PROJECTS.items.flatMap((p) => p.chips),
];

describe('iconos de tecnologías', () => {
  it('cada chip de Experiencia, Stack y Servicios tiene icono', () => {
    const missing = [...new Set(allChips)].filter((chip) => !TECH_ICON_MAP[chip]);
    expect(missing).toEqual([]);
  });

  it('todos los iconos tienen color hex y path no vacío', () => {
    for (const [name, icon] of Object.entries(TECH_ICON_MAP)) {
      expect(icon.color, name).toMatch(HEX);
      expect(icon.path.length, name).toBeGreaterThan(10);
    }
  });

  it('los logos del marquee tienen color hex y path', () => {
    for (const logo of TECH_LOGOS) {
      expect(logo.color, logo.title).toMatch(HEX);
      expect(logo.path.length, logo.title).toBeGreaterThan(10);
    }
  });
});

describe('integridad de datos', () => {
  it('los ids de experiencia son únicos', () => {
    const ids = EXPERIENCE.map((e) => e.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('las constancias apuntan a PDFs existentes', async () => {
    const { existsSync } = await import('node:fs');
    for (const { id, certificate } of EXPERIENCE) {
      if (certificate) expect(existsSync(`public${certificate}`), id).toBe(true);
    }
  });

  it('cada enlace del nav apunta a una sección con id', () => {
    for (const { href } of NAV_LINKS) expect(href).toMatch(/^#[a-z-]+$/);
  });
});
