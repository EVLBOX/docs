---
title: SEO Example Page
description: This page demonstrates how to configure rich metadata and Open Graph tags for SEO in Starlight.
head:
  - tag: meta
    attrs:
      property: og:image
      content: https://docs.evlbox.com/og-image.png
  - tag: meta
    attrs:
      property: og:type
      content: article
  - tag: meta
    attrs:
      name: twitter:card
      content: summary_large_image
  - tag: meta
    attrs:
      name: keywords
      content: EVLBOX, game server, hosting, documentation, SEO
---

# SEO Configuration Example

This page demonstrates how to set up rich metadata for SEO purposes in Starlight.

## Frontmatter Configuration

To add custom meta tags, Open Graph data, or other head elements to a page, use the `head` property in your frontmatter:

```yaml
---
title: Your Page Title
description: A compelling description for search engines (recommended 150-160 characters).
head:
  - tag: meta
    attrs:
      property: og:image
      content: https://docs.evlbox.com/your-image.png
  - tag: meta
    attrs:
      property: og:type
      content: article
  - tag: meta
    attrs:
      name: twitter:card
      content: summary_large_image
---
```

## Key SEO Fields

- **title** — The page title (appears in browser tab and search results)
- **description** — Meta description for search engines
- **head** — Array of custom tags to inject into the page `<head>`

The `title` and `description` fields in frontmatter are automatically used for the page's `<title>` tag and meta description.
