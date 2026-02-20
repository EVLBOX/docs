# EVLBOX Documentation

Official documentation site for [EVLBOX](https://evlbox.com) game server and VPS hosting.

Built with [Astro Starlight](https://starlight.astro.build/).

## Local Development

### Prerequisites

- Node.js 18+ 
- npm

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:4321`

## Adding Documentation

Create `.md` or `.mdx` files in `src/content/docs/`:

```
src/content/docs/
├── index.mdx                    # Homepage
├── getting-started/             # Getting started guides
├── game-servers/                # Per-game documentation
│   ├── minecraft/
│   ├── palworld/
│   └── ...
├── vps/                         # VPS documentation
└── billing/                     # Billing & account docs
```

### Frontmatter

Each page should include frontmatter:

```yaml
---
title: Page Title
description: Brief description for SEO (150-160 characters recommended)
---
```

For custom SEO/Open Graph tags, use the `head` property. See `getting-started/seo-example.md` for an example.

## Production Build

```bash
# Build static site
npm run build

# Preview build locally
npm run preview
```

Output is generated to the `dist/` directory.

## Deployment (Cloudflare Pages)

1. Connect this GitHub repository to Cloudflare Pages
2. Set build command: `npm run build`
3. Set output directory: `dist/`
4. Deploy

The site includes a `public/_headers` file for proper caching of static assets.

## Commands

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Start dev server at `localhost:4321`         |
| `npm run build`   | Build production site to `./dist/`           |
| `npm run preview` | Preview production build locally             |
| `npm run astro`   | Run Astro CLI commands                       |

## License

Private repository - All rights reserved.
