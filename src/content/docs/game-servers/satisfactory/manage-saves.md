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
      {"@context":"http://schema.org","@type":"Article","headline":"How to Manage Satisfactory Saves | Set Autosave Intervals and Save Settings | EVLBOX","description":"Learn how to manage your Satisfactory saves and configure autosave intervals on EVLBOX Game Server. Follow these simple steps to optimize your save settings.","url":"https://evlbox.com/docs/game-servers/satisfactory/manage-saves/","image":"https://evlbox.com/static/images/blog/satisfactory/outpost.webp","author":{"@type":"Organization","name":"EVLBOX","url":"https://evlbox.com"},"publisher":{"@type":"Organization","name":"EVLBOX","logo":{"@type":"ImageObject","url":"https://evlbox.com/docs/favicon.png"}},"datePublished":"2024-01-04","dateModified":"2025-05-08"}
---

#  Save File Management


The admin of the server can use the in-game Server Manager to load and create save games with ease. 

1. Click Server Manager in-game. 
2. Select your server, and choose "Manage Saves"

![manage-saves](/satisfactory/manage-saves.png)

3. You can access loading or saving from here. If you choose load your current changes may not be saved.

:::note
Need to upload your singleplayer save? Check out our [singleplayer upload guide](/game-servers/satisfactory/upload-singleplayer-save)
:::
### Change auto save interval 

1. From the server manager, choose your server and select console. 
2. At the bottom window enter *FG.autosaveinterval 300* The number is the time in seconds to perform an auto save. By default this is 600 seconds (5 minutes). 
3. You should set a response back echoing your command, confirming the setting is applied. 

![console](/satisfactory/console.jpg)