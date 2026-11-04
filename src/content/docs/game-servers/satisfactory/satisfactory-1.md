---
title: "Satisfactory 1.2 and Crossplay on Dedicated Servers"
description: "Does Satisfactory crossplay work on a dedicated server? What PS5, Xbox and PC players can do, and how to run Satisfactory 1.2 on your EVLBOX server."
head:
  - tag: meta
    attrs:
      name: "keywords"
      content: "Satisfactory crossplay, Satisfactory dedicated server crossplay, Satisfactory PS5 dedicated server, Satisfactory Xbox dedicated server, Satisfactory 1.2 server"
  - tag: meta
    attrs:
      property: "og:title"
      content: "Satisfactory 1.2 and Crossplay on Dedicated Servers"
  - tag: meta
    attrs:
      property: "og:description"
      content: "Does Satisfactory crossplay work on a dedicated server? What PS5, Xbox and PC players can do, and how to run Satisfactory 1.2 on your EVLBOX server."
  - tag: meta
    attrs:
      property: "og:image"
      content: "https://evlbox.com/static/images/blog/satisfactory/outpost.webp"
  - tag: meta
    attrs:
      property: "og:image:alt"
      content: "Satisfactory Desert Outpost"
  - tag: meta
    attrs:
      property: "og:url"
      content: "https://evlbox.com/docs/game-servers/satisfactory/satisfactory-1/"
  - tag: meta
    attrs:
      property: "og:type"
      content: "article"
  - tag: meta
    attrs:
      name: "twitter:card"
      content: "summary_large_image"
  - tag: meta
    attrs:
      name: "twitter:title"
      content: "Satisfactory 1.2 and Crossplay on Dedicated Servers"
  - tag: meta
    attrs:
      name: "twitter:description"
      content: "Does Satisfactory crossplay work on a dedicated server? What PS5, Xbox and PC players can do, and how to run Satisfactory 1.2 on your EVLBOX server."
  - tag: meta
    attrs:
      name: "twitter:image"
      content: "https://evlbox.com/static/images/blog/satisfactory/outpost.webp"
  - tag: meta
    attrs:
      name: "twitter:image:alt"
      content: "Satisfactory Desert Outpost"
  - tag: script
    attrs:
      type: "application/ld+json"
    content: |
      {"@context":"http://schema.org","@type":"Article","headline":"Satisfactory 1.2 and Crossplay on Dedicated Servers","description":"Does Satisfactory crossplay work on a dedicated server? What PS5, Xbox and PC players can do, and how to run Satisfactory 1.2 on your EVLBOX server.","url":"https://evlbox.com/docs/game-servers/satisfactory/satisfactory-1/","image":"https://evlbox.com/static/images/blog/satisfactory/outpost.webp","imageAlt":"Satisfactory Desert Outpost","author":{"@type":"Organization","name":"EVLBOX","url":"https://evlbox.com"},"publisher":{"@type":"Organization","name":"EVLBOX","logo":{"@type":"ImageObject","url":"https://evlbox.com/docs/favicon.png"}},"datePublished":"2024-01-04","dateModified":"2026-11-04"}
---

Satisfactory 1.2 is on the stable branch, so your server doesn't need the experimental branch to run it. Crossplay with PS5 and Xbox arrived in patch 1.2.5.0 on November 4, 2026, but it doesn't work on dedicated servers.

## Does crossplay work on a dedicated server?

**No. PS5 and Xbox players can't join a dedicated server, including your EVLBOX server.**

The new crossplay between PC and console only works in sessions hosted by a player (a listen server). Coffee Stain's patch notes say:

> Dedicated Server is currently only available on PC and therefore not available during Crossplay

Coffee Stain hasn't given a date for changing this.

| Your group | Can you use a dedicated server? |
|---|---|
| Everyone plays on PC | Yes |
| Anyone plays on PS5 or Xbox | No. One player has to host the session in-game. |

:::note[Steam and Epic players]
Steam and Epic players can still play together on your server. Patch 1.2.5.0 didn't change that.
:::

### If someone in your group plays on console

One player needs to host the session from their own game. Our [Satisfactory crossplay guide](https://evlbox.com/blog/satisfactory-crossplay) and Coffee Stain's [crossplay FAQ](https://www.satisfactorygame.com/support/) cover the setup. A few rules apply:

- Crossplay needs a free Epic Games account.
- Only unmodded sessions can use crossplay.
- Saves stay on the host's platform. You can't move a console save to PC, or upload one to your EVLBOX server.

## Run Satisfactory 1.2 on your server

1. Log in to the [Nitro Panel](https://nitro.evlbox.com) and open your server's **Startup** tab.
2. Make sure **Automatic Updates** is on and **Game Branch** is set to **public**.
3. Restart your server. It installs any available update as it starts.

:::tip
When the game updates, restart your server to pick up the new version. Automatic Updates only runs when the server starts.
:::

If your server is still on the experimental branch, [download a copy of your saves](/docs/game-servers/satisfactory/manage-saves) first, then [switch back to public](/docs/game-servers/satisfactory/switch-to-experimental).

## Game Modes

Satisfactory 1.2 added Game Modes, which change things like recipe costs, power consumption and resource node placement. They work on dedicated servers, but you can only set them when you create a new game. You can't add them to an existing save.

## Known issues

- **Big saves failing to join:** Coffee Stain says patch 1.2.5.0 includes potential fixes, but that some issues remain. If players time out while joining, raise **Join Timeout** on the **Startup** tab and restart your server.
- **Mods after a game update:** mods can stop working until their authors update them. See [Mod Setup](/docs/game-servers/satisfactory/modsetup).

## Need more help?

Ask in the [EVLBOX Discord](https://evlbox.com/discord) or open a ticket at [portal.evlbox.com](https://portal.evlbox.com).
