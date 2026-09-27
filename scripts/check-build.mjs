import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import { join } from 'node:path';

const sitemap = await readFile('dist/sitemap.xml', 'utf8');
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
assert.equal(urls.length, 10);
assert.equal(new Set(urls).size, urls.length);
const titles = new Set();
for (const url of urls) {
  const { pathname, origin } = new URL(url);
  assert.equal(origin, 'https://hughhuynh.com');
  const html = await readFile(join('dist', pathname.slice(1), 'index.html'), 'utf8');
  assert.equal((html.match(/<h1\b/g) || []).length, 1, `${pathname}: expected one H1`);
  assert.ok(html.includes(`<link rel="canonical" href="${url}"`));
  assert.ok(!html.includes('<div id="root"></div>'));
  assert.ok(html.includes('href="/about"'));
  if (pathname !== '/') assert.ok(html.includes('TECHNOLOGY ECOSYSTEM') || html.includes('CAREER HIGHLIGHTS'));
  titles.add(html.match(/<title>(.*?)<\/title>/)[1]);
  for (const [, asset] of html.matchAll(/(?:src|href)="(\/assets\/[^"#]+)"/g)) {
    await access(join('dist', asset.slice(1)));
  }
  for (const [, link] of html.matchAll(/<a\b[^>]*href="(\/[^"#]*)"/g)) {
    await access(join('dist', link.slice(1), 'index.html'));
  }
}
assert.equal(titles.size, urls.length, 'Each page needs its own title');
const robots = await readFile('dist/robots.txt', 'utf8');
assert.ok(robots.includes('User-agent: *\nAllow: /'));
assert.ok(robots.includes('Sitemap: https://hughhuynh.com/sitemap.xml'));
console.log(`Verified ${urls.length} pre-rendered pages, metadata, local assets, internal links, sitemap, and crawler access.`);
