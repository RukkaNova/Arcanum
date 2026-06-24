import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// SEO: a real site URL lets Astro emit canonical tags + sitemap.xml.
// Swap to your real domain when you have it.
export default defineConfig({
  site: 'https://arcanumrpgs.com',
  integrations: [sitemap({
    filter: (page) => !page.includes('/privacy') && !page.includes('/terms'),
  })],
});
