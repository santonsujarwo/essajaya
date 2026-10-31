import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const root = 'dist';
const errors = [];
const locked = {
  '/': {
    title: 'Distributor panel lantai mojokerto - essajaya',
    h1: 'Distributor panel lantai mojokerto',
  },
  '/harga-panel-lantai-2026/': {
    title: 'Harga Panel Lantai per M² Terbaru 2026 - essajaya',
    h1: 'Harga panel lantai mojokerto',
    description:
      'Cek kisaran harga panel lantai per m² harga material & terpasang. Distributor panel lantai Mojokerto – Essa Jaya. Survey gratis, hubungi sekarang!',
  },
  '/jasa-renovasi/': {
    title: 'Jasa Renovasi Rumah Mojokerto - essajaya',
    h1: 'Jasa Renovasi Rumah Mojokerto',
  },
};

function htmlFiles(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);
    return entry.isDirectory() ? htmlFiles(path) : entry.name === 'index.html' ? [path] : [];
  });
}

if (!existsSync(root)) {
  console.error('dist/ not found. Run npm run build first.');
  process.exit(1);
}

const files = htmlFiles(root);
const byPath = new Map(
  files.map((file) => {
    const relative = file.slice(root.length).replace(/index\.html$/, '');
    return [relative || '/', readFileSync(file, 'utf8')];
  }),
);

for (const [route, expected] of Object.entries(locked)) {
  const html = byPath.get(route);
  if (!html) {
    errors.push(`Missing built route: ${route}`);
    continue;
  }
  if (!html.includes(`<title>${expected.title}</title>`)) {
    errors.push(`Title mismatch: ${route}`);
  }
  if (!html.includes(`<h1>${expected.h1}</h1>`)) {
    errors.push(`H1 mismatch: ${route}`);
  }
  if (expected.description && !html.includes(`content="${expected.description}"`)) {
    errors.push(`Meta description mismatch: ${route}`);
  }
  if (!html.includes('rel="canonical"')) errors.push(`Canonical missing: ${route}`);
  if (!html.includes('67914276d10857afe139a44ffbe5ff814b9afe922509b7e1414653d4f76673c5')) {
    errors.push(`Ahrefs verification missing: ${route}`);
  }
}

const allHtml = [...byPath.values()].join('\n');
for (const forbidden of ['628226440796', '081233516411', 'href="#"', 'E-E-A-T']) {
  if (allHtml.includes(forbidden)) errors.push(`Forbidden content found: ${forbidden}`);
}
if (!allHtml.includes('6282264460796'))
  errors.push('Correct WhatsApp number not found in built HTML.');

if (errors.length) {
  console.error(errors.map((error) => `- ${error}`).join('\n'));
  process.exit(1);
}
console.log(`SEO parity smoke checks passed for ${Object.keys(locked).length} locked routes.`);
