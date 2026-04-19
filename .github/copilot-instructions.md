# Copilot instructions for EVLBOX docs

EVLBOX product documentation, built with Astro Starlight and served at `evlbox.com/docs` via a Cloudflare Worker that maps `/docs` to `./dist/` (see `wrangler.jsonc`).

## Commands

- `npm install` — install deps
- `npm run dev` — dev server at `http://localhost:4321/docs/`
- `npm run build` — production build to `./dist/`. **Always run before pushing.** This is the only validation gate: the build fails when a sidebar `slug` points to a missing page, which catches most broken internal links.
- `npm run preview` — preview the production build

There is no test suite, no linter, and no formatter configured. Do not add one unless asked.

## Base path (critical)

`astro.config.mjs` sets `site: 'https://evlbox.com'` and `base: '/docs/'`. Everything runs under `/docs/`:

- Static asset URLs in Markdown must include the prefix: `/docs/minecraft/screenshot.png`, not `/minecraft/screenshot.png`.
- The dev server URL is `http://localhost:4321/docs/`, not `/`.
- Never change `base` without coordinating with the Cloudflare Worker routing in `wrangler.jsonc`.

## Adding or moving pages

The sidebar in `astro.config.mjs` is the source of truth for navigation. Adding a file under `src/content/docs/` does **not** make it appear — you must add a `{ label, slug }` entry to the appropriate group. `slug` is the path under `src/content/docs/` without the `.md`/`.mdx` extension.

When adding a new game, create `src/content/docs/game-servers/<game>/` with an `index.md` overview and add a new `collapsed: true` group inside the **Game Servers** section of the sidebar (see existing games for the pattern).

Top-level sidebar sections (in order): Quick Links (external), Getting Started, Game Servers (one collapsed group per game), VPS Hosting, Billing & Account, Resources.

All pages are `.md` or `.mdx` with YAML frontmatter:

```yaml
---
title: Your Page Title
description: Short description for SEO and link previews.
---
```

## Assets

- Unoptimized images: drop in `public/<section>/` and reference as `/docs/<section>/file.png` (the `/docs/` prefix is required).
- Optimized images: place in `src/assets/` and use a relative import so Astro processes them.
- Supported: `.png`, `.jpg`, `.webp`, `.avif`, `.gif`.

## Theming

- `src/styles/custom.css` holds theme overrides.
- The site is dark-only — `src/components/EmptyThemeSelect.astro` replaces Starlight's theme toggle via the `components.ThemeSelect` override in `astro.config.mjs`. Don't re-introduce a theme toggle.
- SEO/social meta (OG, Twitter card) is injected via the `head` array in `astro.config.mjs` and points at `/docs/twitter-card.png`.

## Writing conventions

Audience is end users running game servers / VPS, not engineers. Style is practical, friendly, step-by-step, **one topic per page**.

- Use Starlight admonitions (`:::tip`, `:::caution`, `:::danger`) instead of burying warnings in prose.
- Prefer Starlight components (tabs, cards, badges, icons) over raw HTML. The canonical reference is `src/content/docs/formatting-guide.mdx`, rendered live at `/docs/formatting-guide/`.
- Short, scannable titles ("How to Connect", not "A Comprehensive Guide to Connecting…").
