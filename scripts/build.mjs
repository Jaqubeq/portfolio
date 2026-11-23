import { cp, mkdir, rm, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import vm from 'node:vm';
import { execFileSync } from 'node:child_process';
const root = fileURLToPath(new URL('../', import.meta.url));
execFileSync(process.execPath, [path.join(root, 'scripts/test.cjs')], { stdio: 'inherit' });
// Usuwamy wyłącznie własny katalog wynikowy w folderze portfolio.
const dist = path.join(root, 'dist');
if (path.dirname(dist) !== path.resolve(root)) throw new Error('Unexpected output path');
await rm(dist, { recursive: true, force: true });
await mkdir(dist);
for (const entry of ['index.html', 'styles.css', 'app.js', 'config.js', 'robots.txt', 'assets']) await cp(path.join(root, entry), path.join(dist, entry), { recursive: true });
const context = { window: {} };
vm.runInNewContext(await readFile(path.join(root, 'config.js'), 'utf8'), context);
const config = context.window.PORTFOLIO_CONFIG;
// Kontakt jest też w HTML, dzięki czemu działa bez JavaScript.
const escape = value => value.replace(/[&<>"']/g, c => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' })[c]);
let html = await readFile(path.join(dist, 'index.html'), 'utf8');
html = html.replaceAll('jakubkrol721@gmail.com', escape(config.email));
html = html.replaceAll('https://github.com/Jaqubeq', escape(config.github));
if (!config.github) html = html.replace(/<a\b[^>]*data-github[^>]*>.*?<\/a>/s, '');
if (config.siteUrl) {
  const url = new URL(config.siteUrl);
  if (url.protocol !== 'https:' || url.username || url.password) throw new Error('siteUrl must be a public HTTPS URL');
  html = html.replace('</head>', `<link rel="canonical" href="${escape(url.href)}"><meta property="og:url" content="${escape(url.href)}"></head>`);
  await writeFile(path.join(dist, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${escape(url.href)}</loc></url></urlset>`);
  await writeFile(path.join(dist, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${new URL('sitemap.xml', url).href}\n`);
}
await writeFile(path.join(dist, 'index.html'), html);
console.log('Ready: dist/ - upload these files to a static host.');
