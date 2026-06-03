// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// marcoajello.ai is the hub, served at the apex custom domain. DNS (GoDaddy
// apex A records → GitHub Pages, www CNAME → marcoajello.github.io) is live, so
// the site serves at the root: `base: '/'` and public/CNAME carries the custom
// domain into every deploy.
export default defineConfig({
  site: 'https://marcoajello.ai',
  base: '/',
  vite: {
    plugins: [tailwindcss()],
  },
});
