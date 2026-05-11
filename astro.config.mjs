import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://navbridge.io',
  output: 'static',
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
  integrations: [sitemap()],
  adapter: vercel({
    webAnalytics: { enabled: false },
  }),
});
