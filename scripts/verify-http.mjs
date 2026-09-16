import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';

const base = new URL(process.env.TEST_BASE_URL || 'http://localhost:4173/');
const basePath = base.pathname.replace(/\/$/, '');
const origin = base.origin;
const at = (path) => new URL(`${basePath}${path}`, origin);
const assetAt = (path) => new URL(path.startsWith(basePath) ? path : `${basePath}${path}`, origin);

const catalog = JSON.parse(await readFile('public/data/archive.json'));
const routes = ['/', '/rivers', '/timeline', '/network', '/bayu', '/about', '/assistant', ...catalog.rivers.map((r) => '/rivers/' + r.id)];
const pages = new Map();
const assets = new Set([
  '/data/archive.json',
  '/data/research.json',
  '/data/chongqing.geojson',
  '/data/sichuan.geojson',
  '/data/dazhou.geojson',
  '/data/spatial-metadata.json',
  ...catalog.media.map((m) => m.src),
]);

for (const route of routes) {
  const response = await fetch(at(route));
  assert.equal(response.status, 200, route);
  const html = await response.text();
  assert(html.includes('河流生命档案'), route + ' unexpected page');
  if (route === '/') assert(html.includes('进入河流档案'));
  const river = catalog.rivers.find((r) => route === '/rivers/' + r.id);
  if (river) assert(html.includes(river.name), route + ' wrong dossier');
  pages.set(route, html);
  for (const m of html.matchAll(/(?:src|href)="(\/[^"]+)"/g)) {
    const p = m[1].replaceAll('&amp;', '&');
    if (/\.(?:css|js|jpg|jpeg|png|svg|json|geojson)(?:\?|$)/.test(p)) assets.add(p);
  }
}

for (const [route, html] of pages) {
  for (const m of html.matchAll(/href="([^"]+)"/g)) {
    const href = m[1].replaceAll('&amp;', '&');
    if (!href.startsWith('/') && !href.startsWith('#')) continue;
    const pageUrl = new URL(route === '/' ? `${basePath}/` : `${basePath}${route}/`, origin);
    const u = new URL(href, pageUrl);
    const pathname = (u.pathname.startsWith(basePath) ? u.pathname.slice(basePath.length) : u.pathname).replace(/\/$/, '') || '/';
    if (u.hash && pages.has(pathname)) {
      assert(pages.get(pathname).includes('id="' + decodeURIComponent(u.hash.slice(1)) + '"'), route + ' broken anchor ' + href);
    }
  }
}

for (const path of assets) {
  const r = await fetch(assetAt(path));
  assert.equal(r.status, 200, path);
  if (path.endsWith('.json') || path.endsWith('.geojson')) await r.json();
  else if (/\.(jpg|jpeg|png)$/.test(path)) assert(r.headers.get('content-type')?.startsWith('image/'), path + ' MIME');
}
assert.equal((await fetch(at('/rivers/no-such-river'))).status, 404);
console.log(`PASS: ${routes.length} real routes, ${assets.size} assets, dossier content, evidence anchors and unknown-route 404`);
