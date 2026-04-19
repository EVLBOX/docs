# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

EVLBOX documentation site, built with Astro Starlight. Source of truth for [evlbox.com/docs](https://evlbox.com/docs).

## Deployment

The built site is served at `evlbox.com/docs` via a Cloudflare Worker that routes `/docs` traffic to the static assets from `./dist/` (see `wrangler.jsonc`). The site config uses `site: 'https://evlbox.com'` with `base: '/docs/'` — all internal links, asset paths, and the dev server run under `/docs/`. Never change `base` without coordinating with the Cloudflare Worker routing.

## Commands

- `npm run dev` — Astro dev server at `http://localhost:4321/docs/`
- `npm run build` — Production build to `./dist/`. **Run before pushing.** Build fails if a sidebar `slug` points to a missing page — this is the primary check for broken internal links.
- `npm run preview` — Preview the production build locally

There are no tests or lint scripts. Build success is the gate.

## Architecture

- **Content** lives in `src/content/docs/` as `.md` / `.mdx` with YAML frontmatter (`title`, `description`).
- **Navigation** is defined explicitly in `astro.config.mjs` under the Starlight `sidebar` array. Adding a page under `src/content/docs/` does **not** surface it automatically — you must add a `{ label, slug }` entry in the appropriate group. `slug` is the content path without the `.md` extension.
- **Top-level sidebar sections**: Quick Links (external), Getting Started, Game Servers (one collapsed group per game), VPS Hosting, Billing & Account, Resources.
- **Assets**: drop unoptimized images in `public/<section>/` and reference as `/docs/<section>/file.png` (the `/docs/` prefix is required because of the base path). Use `src/assets/` + relative imports for images that should go through Astro's optimizer.
- **Styling**: `src/styles/custom.css` for theme overrides. `src/components/EmptyThemeSelect.astro` replaces Starlight's theme toggle (site is dark-only).
- **SEO/social**: OG + Twitter card meta is injected via the `head` array in `astro.config.mjs` and points at `/docs/twitter-card.png`.

## Writing conventions

See `src/content/docs/formatting-guide.mdx` (rendered at `/docs/formatting-guide/`) for the canonical reference on admonitions, tabs, cards, badges, and icons available via Starlight. Prefer those over raw HTML.

Content style (from README): practical, friendly, step-by-step, one topic per page, use admonitions (`:::tip`, `:::caution`, `:::danger`) instead of burying warnings in prose.
