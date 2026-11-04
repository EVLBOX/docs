---
title: "How to Manage Satisfactory Saves | Set Autosave Intervals and Save Settings | EVLBOX"
description: "Learn how to manage your Satisfactory saves and configure autosave intervals on EVLBOX Game Server. Follow these simple steps to optimize your save settings."
head:
  - tag: meta
    attrs:
      name: "keywords"
      content: "manage saves, Satisfactory save settings, EVLBOX game server, autosave interval, game server save management"
  - tag: meta
    attrs:
      property: "og:title"
      content: "How to Manage Satisfactory Saves | Set Autosave Intervals and Save Settings | EVLBOX"
  - tag: meta
    attrs:
      property: "og:description"
      content: "Learn how to manage your Satisfactory saves and configure autosave intervals on EVLBOX Game Server. Follow these simple steps to optimize your save settings."
  - tag: meta
    attrs:
      property: "og:image"
      content: "https://evlbox.com/static/images/blog/satisfactory/outpost.webp"
  - tag: meta
    attrs:
      property: "og:url"
      content: "https://evlbox.com/docs/game-servers/satisfactory/manage-saves/"
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
      content: "How to Manage Satisfactory Saves | Set Autosave Intervals and Save Settings | EVLBOX"
  - tag: meta
    attrs:
      name: "twitter:description"
      content: "Learn how to manage your Satisfactory saves and configure autosave intervals on EVLBOX Game Server. Follow these simple steps to optimize your save settings."
  - tag: meta
    attrs:
      name: "twitter:image"
      content: "https://evlbox.com/static/images/blog/satisfactory/outpost.webp"
  - tag: script
    attrs:
      type: "application/ld+json"
    content: |
      {"@context":"http://schema.org","@type":"Article","headline":"How to Manage Satisfactory Saves | Set Autosave Intervals and Save Settings | EVLBOX","description":"Learn how to manage your Satisfactory saves and configure autosave intervals on EVLBOX Game Server. Follow these simple steps to optimize your save settings.","url":"https://evlbox.com/docs/game-servers/satisfactory/manage-saves/","image":"https://evlbox.com/static/images/blog/satisfactory/outpost.webp","author":{"@type":"Organization","name":"EVLBOX","url":"https://evlbox.com"},"publisher":{"@type":"Organization","name":"EVLBOX","logo":{"@type":"ImageObject","url":"https://evlbox.com/docs/favicon.png"}},"datePublished":"2024-01-04","dateModified":"2026-11-04"}
---

#  Save File Management


The admin of the server can use the in-game Server Manager to load and create save games with ease.

1. Click Server Manager in-game.
2. Select your server, and choose "Manage Saves"

![manage-saves](/docs/satisfactory/manage-saves.png)

3. You can access loading or saving from here. If you choose load your current changes may not be saved.

:::note
Need to upload your singleplayer save? Check out our [singleplayer upload guide](/docs/game-servers/satisfactory/upload-singleplayer-save)
:::

### Download a save

1. Login to the [Nitro Panel](https://nitro.evlbox.com), choose your server and click **Files**.
2. Browse to `.config/Epic/FactoryGame/Saved/SaveGames/server/`
3. Open the menu next to the `.sav` file and download it.

Your server also takes automatic backups. You can control them with the [`.evlbox.toml` settings file](/docs/getting-started/nitro-panel/server-settings).

### Change auto save interval

1. From the Server Manager, choose your server and open **Server Settings**.
2. Change **Autosave Interval**. The default is 5 minutes.

You can also set this from the console:

1. From the Server Manager, choose your server and select **Console**.
2. At the bottom of the window, enter `FG.AutosaveInterval 300`. The number is the time between autosaves in seconds.
3. You should see a response echoing your command, confirming the setting is applied.

![console](/docs/satisfactory/console.jpg)

### Change how many autosaves are kept

1. In the Nitro Panel, open your server's **Startup** tab.
2. Change **Rotating Autosaves**. The default is 3.
3. Restart your server.
