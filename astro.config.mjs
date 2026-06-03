// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// marcoajello.ai is the hub. It will deploy to GitHub Pages behind the custom
// domain marcoajello.ai, so `base` stays at the root. (DNS / CNAME wired
// separately — see public/CNAME.)
export default defineConfig({
  site: 'https://marcoajello.ai',
  vite: {
    plugins: [tailwindcss()],
  },
});
