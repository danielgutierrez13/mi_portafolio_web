// Genera src/data/officialIcons.ts con paths oficiales de simple-icons para las marcas elegidas.
// Uso: node scripts/gen-official-icons.mjs
import * as si from 'simple-icons';
import { writeFileSync } from 'node:fs';

// chip -> [slug de simple-icons, color override opcional]
const MAP = {
  Claude: ['siClaude'],
  Supabase: ['siSupabase'],
  RxJS: ['siReactivex'],
  'GitHub Copilot': ['siGithubcopilot', '#8957E5'],
  'Swagger Hub': ['siSwagger'],
  UiPath: ['siUipath'],
  'RPA UiPath': ['siUipath'],
  Orchestrator: ['siUipath'],
  REFramework: ['siUipath'],
  '.NET': ['siDotnet'],
  '.Net': ['siDotnet'],
  '.NET Framework': ['siDotnet'],
  Dynatrace: ['siDynatrace'],
  Grafana: ['siGrafana'],
  Symfony: ['siSymfony', '#000000'],
  Telegram: ['siTelegram'],
  'Telegram API': ['siTelegram'],
  Postman: ['siPostman'],
  JUnit: ['siJunit5'],
};

const out = {};
for (const [chip, [slug, override]] of Object.entries(MAP)) {
  const icon = si[slug];
  if (!icon) { console.warn('missing', slug); continue; }
  out[chip] = { color: override ?? `#${icon.hex}`, path: icon.path };
}
const body = Object.entries(out)
  .map(([k, v]) => `  ${JSON.stringify(k)}: { color: ${JSON.stringify(v.color)}, path: ${JSON.stringify(v.path)} },`)
  .join('\n');
writeFileSync('src/data/officialIcons.ts',
`// Generado por scripts/gen-official-icons.mjs (simple-icons, CC0). No editar a mano.
import type { TechIcon } from './techIconMap';

export const OFFICIAL_ICONS: Record<string, TechIcon> = {
${body}
};
`);
console.log('ok', Object.keys(out).length);
