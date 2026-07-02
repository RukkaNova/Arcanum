import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readFileSync, existsSync } from 'node:fs';

// Sitemap lastmod: derive each content page's date from its frontmatter
// (updatedDate/pubDate for blog, `updated` for games/clients/releases).
// Pages without a mapped content file simply omit lastmod.
const CONTENT_DATES = {
  '/blog/': { dir: './src/content/blog', keys: ['updatedDate', 'pubDate'] },
  '/games/': { dir: './src/content/games', keys: ['updated'] },
  '/clients/': { dir: './src/content/clients', keys: ['updated'] },
  '/arcanum-games/': { dir: './src/content/releases', keys: ['updated'] },
};

function lastmodFor(url) {
  const path = new URL(url).pathname;
  for (const [prefix, cfg] of Object.entries(CONTENT_DATES)) {
    if (!path.startsWith(prefix)) continue;
    const slug = path.slice(prefix.length).replace(/\/$/, '');
    if (!slug) return null;
    const file = `${cfg.dir}/${slug}.md`;
    if (!existsSync(file)) return null;
    const src = readFileSync(file, 'utf8');
    for (const key of cfg.keys) {
      const m = src.match(new RegExp(`^${key}:\\s*["']?(\\d{4}-\\d{2}-\\d{2})`, 'm'));
      if (m) return m[1];
    }
    return null;
  }
  return null;
}

export default defineConfig({
  site: 'https://arcanumrpgs.com',
  integrations: [sitemap({
    filter: (page) => !page.includes('/privacy') && !page.includes('/terms'),
    serialize(item) {
      const lastmod = lastmodFor(item.url);
      if (lastmod) item.lastmod = lastmod;
      return item;
    },
  })],
});
