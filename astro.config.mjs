import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://essajaya.com',
  integrations: [sitemap()],
  output: 'static',
  trailingSlash: 'always'
});
