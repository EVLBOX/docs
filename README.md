# EVLBOX Documentation

The official documentation for [EVLBOX](https://evlbox.com) — powering the guides, tutorials, and references at [evlbox.com/docs](https://evlbox.com/docs).

Built with [Astro Starlight](https://starlight.astro.build/), a documentation framework on top of [Astro](https://astro.build/). Hosted on Cloudflare Pages.

---

## Contributing

We welcome contributions from the community! Whether you're fixing a typo, improving an existing guide, or writing a brand-new one — we appreciate the help.

### What we're looking for

- **Game server guides** — setup, configuration, modding, troubleshooting
- **VPS tutorials** — common tasks, best practices, getting-started walkthroughs
- **General improvements** — better explanations, updated screenshots, fixed links

If it's useful to someone running a game server or VPS through EVLBOX, it belongs here.

### Style guidelines

Keep things **practical and friendly**. These docs are read by people who just want to get their server running — not engineers parsing an RFC.

- **Be clear and direct.** Short sentences. Simple words. Say what to click and where.
- **Use step-by-step instructions** when walking through a process.
- **Add screenshots or images** when they help — a picture of the right button to click saves a paragraph of explanation.
- **Use admonitions** (`:::tip`, `:::caution`, `:::danger`) to call out important info instead of burying it in a paragraph.
- **One topic per page.** If a guide covers two unrelated things, split it into two pages.
- **Don't assume expertise.** If a step requires something non-obvious, link to the relevant page or explain briefly.
- **Keep titles short and scannable** — "How to Connect" beats "A Comprehensive Guide to Connecting to Your Server Instance."

For a live reference of all available formatting (admonitions, tabs, code blocks, cards, badges, icons, etc.), check out the **[Formatting Guide](https://evlbox.com/docs/formatting-guide/)** on the docs site itself.

### How to contribute

1. **Fork** this repo to your own GitHub account.
2. **Create a branch** in your fork with a descriptive name (e.g. `add-rust-server-guide`, `fix-palworld-typo`).
3. Make your changes — add or edit `.md` / `.mdx` files in `src/content/docs/`.
4. If you're adding a new page, add it to the sidebar in `astro.config.mjs` (see [Project structure](#project-structure) below).
5. **Test locally** to make sure the build passes (see [Running locally](#running-locally) below).
6. **Open a Pull Request** from your fork against `main` with a brief description of what you changed and why.

A maintainer will review your PR and either merge it or leave feedback. Once merged, changes deploy automatically.

### Not comfortable with GitHub?

No worries — you can also send us your guide as a **Word doc, Google Doc, PDF, or even plain text** and we'll format it for the site. Open a ticket in the **#create-a-ticket** channel on our [Discord](https://discord.com/invite/rWF4hJhbaM) and attach your content. We prefer the PR method above, but we'd rather have your guide in any format than not at all!

---

## Project Structure

```
src/content/docs/          ← All documentation pages
  getting-started/         ← Nitro Panel, onboarding
  game-servers/            ← One subfolder per game
  vps/                     ← VPS hosting guides
  billing/                 ← Billing & account
  formatting-guide.mdx     ← Formatting reference / template
public/                    ← Images and static assets
src/styles/custom.css      ← Theme overrides
astro.config.mjs           ← Sidebar navigation & site config
```

Pages are Markdown (`.md`) or MDX (`.mdx`) files with YAML frontmatter:

```yaml
---
title: Your Page Title
description: Short description for SEO and link previews.
---

Your content starts here.
```

New pages must also be added to the `sidebar` array in `astro.config.mjs` or they won't appear in the navigation.

For example, if you create `src/content/docs/game-servers/minecraft/custom-worlds.md`, add an entry to the Minecraft group in the sidebar:

```js
{
    label: 'Minecraft',
    collapsed: true,
    items: [
        { label: 'Overview', slug: 'game-servers/minecraft' },
        { label: 'How to Connect', slug: 'game-servers/minecraft/how-to-connect' },
        // ... existing entries ...
        { label: 'Custom Worlds', slug: 'game-servers/minecraft/custom-worlds' },  // ← your new page
    ],
},
```

The `slug` is the file path under `src/content/docs/` without the `.md` extension. See the [Starlight sidebar docs](https://starlight.astro.build/reference/configuration/#sidebar) for the full config reference.

---

<details>
<summary><strong>Running Locally</strong></summary>

### Prerequisites

- [Node.js](https://nodejs.org/) 18+
- npm (comes with Node)

### Setup

```bash
# Clone the repo
git clone https://github.com/evlbox/docs.git
cd docs

# Install dependencies
npm install

# Start the dev server
npm run dev
```

The site will be available at `http://localhost:4321/docs/`.

### Commands

| Command             | What it does                                 |
|---------------------|----------------------------------------------|
| `npm install`       | Install dependencies                         |
| `npm run dev`       | Start dev server at `localhost:4321`         |
| `npm run build`     | Build the production site to `./dist/`       |
| `npm run preview`   | Preview the production build locally         |

### Important

Always run `npm run build` before pushing. The build will **fail** if a sidebar slug points to a page that doesn't exist — this catches broken links and typos before they go live.

</details>

<details>
<summary><strong>Adding a New Game Section</strong></summary>

1. Create a folder under `src/content/docs/game-servers/` — e.g. `rust/`
2. Add an `index.md` as the overview page for that game
3. Add individual guide `.md` files in the same folder
4. Open `astro.config.mjs` and add a new collapsed group inside the **Game Servers** sidebar section:

```js
{
    label: 'Rust',
    collapsed: true,
    items: [
        { label: 'Overview', slug: 'game-servers/rust' },
        { label: 'How to Connect', slug: 'game-servers/rust/how-to-connect' },
    ],
},
```

5. Run `npm run build` to verify everything links up correctly.

</details>

<details>
<summary><strong>Images</strong></summary>

- Drop image files in `public/` organized by section — e.g. `public/minecraft/screenshot.png`
- Reference them in Markdown as `![alt text](/docs/minecraft/screenshot.png)`
- For optimized images, place them in `src/assets/` and use a relative import path
- Supported formats: `.png`, `.jpg`, `.webp`, `.avif`, `.gif`

</details>

---

## Links

- **Live docs** — [evlbox.com/docs](https://evlbox.com/docs)
- **EVLBOX** — [evlbox.com](https://evlbox.com)
- **Discord** — [discord.gg/rWF4hJhbaM](https://discord.gg/rWF4hJhbaM)
- **Starlight docs** — [starlight.astro.build](https://starlight.astro.build/)
- **Astro docs** — [docs.astro.build](https://docs.astro.build/)

---

## Legal

This project is [MIT licensed](LICENSE). The license applies to the site code, configuration, and original documentation text.

**Game logos, names, screenshots, and other third-party assets** included in this repository are the property of their respective rights holders and are used here solely for illustrative and informational purposes. They are **not** covered by the MIT license. All trademarks and registered trademarks are the property of their respective owners.

The EVLBOX name and logo are property of EVL Gaming, LLC.
