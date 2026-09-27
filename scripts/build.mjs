import { build } from 'vite';
import { mkdir, readFile, writeFile, mkdtemp, rm } from 'node:fs/promises';
import { resolve, join } from 'node:path';
import { pathToFileURL } from 'node:url';

const escape = (value) => value.replace(/[&<>"']/g, (char) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
}[char]));

await build();
// Keep the temporary server module near node_modules for dependency resolution.
const temporary = await mkdtemp(resolve('node_modules/.portfolio-prerender-'));
try {
  await build({
    build: {
      ssr: 'src/entry-server.tsx',
      outDir: temporary,
      copyPublicDir: false,
      rollupOptions: { output: { entryFileNames: 'render.mjs' } },
    },
  });
  const { render, publicPaths, getMetadata, siteOrigin } = await import(pathToFileURL(join(temporary, 'render.mjs')));
  const template = await readFile('dist/index.html', 'utf8');
  for (const path of publicPaths) {
    const { title, description, url } = getMetadata(path);
    const head = `
  <link rel="canonical" href="${escape(url)}" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="${escape(title)}" />
  <meta property="og:description" content="${escape(description)}" />
  <meta property="og:url" content="${escape(url)}" />`;
    const html = template
      .replace(/<title>.*?<\/title>/s, () => `<title>${escape(title)}</title>`)
      .replace(/<meta name="description"[^>]*>/, () => `<meta name="description" content="${escape(description)}" />`)
      .replace('</head>', `${head}\n</head>`)
      .replace('<div id="root"></div>', () => `<div id="root">${render(path)}</div>`);
    const directory = join('dist', path.slice(1));
    await mkdir(directory, { recursive: true });
    await writeFile(join(directory, 'index.html'), html);
  }
  await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${publicPaths.map((path) => `  <url><loc>${escape(new URL(path, siteOrigin).href)}</loc></url>`).join('\n')}
</urlset>\n`);
  await writeFile('dist/robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${siteOrigin}/sitemap.xml\n`);
  console.log(`Pre-rendered ${publicPaths.length} pages for ${siteOrigin}.`);
} finally {
  await rm(temporary, { recursive: true, force: true });
}
