# marcoajello.ai

The **center / hub** of the Alter/Me/A/I ecosystem.

This site hosts **Alter/Me/A/I** — the open-source cortex that mediates
between every input and every tool, encrypts the private side locally, and lets
you decide what crosses to the public side, every time. It anchors the
hub-and-spokes fractal: each spoke is a paired public / private vertex at a new
domain of life, and the engine at the center is the only thing that touches both
sides.

> Architecture is canonical in `../cortex/docs/SUITE-MAP.md` (the extension
> folder may be renamed `cortex → alter_me_a_i`). Glyph rule: slash `/` =
> infrastructure layer (the hub); dash `-` = user-facing surfaces (alter-me,
> my-alter). Filesystem tokens use underscores.

## Stack

- [Astro](https://astro.build) — static-fast, component-based, trivially deployable
- [Tailwind CSS v4](https://tailwindcss.com) — via the `@tailwindcss/vite` plugin

## Develop

```bash
npm install      # first time only
npm run dev      # http://localhost:4321
npm run build    # static output -> ./dist
npm run preview  # serve the production build locally
```

## Structure

```
src/
  pages/index.astro          the center landing page
  layouts/Base.astro         html shell, meta, global css
  components/HubDiagram.astro data-driven radial SVG of the fractal
  components/SpokeCard.astro  a public/private vertex pair
  styles/global.css          design tokens (Synthwave-derived) + Tailwind
public/
  favicon.svg, CNAME
```

Adding a spoke is one entry in the `spokes` array in `index.astro` and one in
the `vertices` array in `HubDiagram.astro` — the recursion is a design
constraint, so the page is built to grow.

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and
publishes to GitHub Pages. Enable Pages (Settings → Pages → Source: GitHub
Actions) and point DNS for `marcoajello.ai` at Pages; the `public/CNAME` file
preserves the custom domain across deploys.
