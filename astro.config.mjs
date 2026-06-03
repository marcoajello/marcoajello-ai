// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// marcoajello.ai is the hub. The end state is the apex custom domain with
// `base: '/'` and a public/CNAME file.
//
// TEMPORARY (preview phase, until DNS for marcoajello.ai is live):
// this is a *project* GitHub Pages site served at
// https://marcoajello.github.io/marcoajello-ai/, so `base` must be the repo
// path for assets to resolve, and public/CNAME is removed so the github.io
// URL works (a CNAME file would force the not-yet-resolving custom domain).
//
// GO-LIVE REVERT (when DNS is set): change `base` back to '/', re-add
// public/CNAME containing `marcoajello.ai`, and set the custom domain in
// repo Settings → Pages.
export default defineConfig({
  site: 'https://marcoajello.github.io',
  base: '/marcoajello-ai/',
  vite: {
    plugins: [tailwindcss()],
  },
});
