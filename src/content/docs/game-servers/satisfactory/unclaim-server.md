---
title: "How to Unclaim or Reset Your Satisfactory Server | Change Admin Password and Settings Without Wiping Saves"
description: "Learn how to reset or unclaim your Satisfactory server, change the admin password, and modify settings without wiping your save files. Follow this guide to manage your server safely."
head:
  - tag: meta
    attrs:
      name: "keywords"
      content: "reset admin password, unclaim server, change server settings, preserve save files, Satisfactory server management"
  - tag: meta
    attrs:
      property: "og:title"
      content: "How to Unclaim or Reset Your Satisfactory Server | Change Admin Password and Settings Without Wiping Saves"
  - tag: meta
    attrs:
      property: "og:description"
      content: "Learn how to reset or unclaim your Satisfactory server, change the admin password, and modify settings without wiping your save files. Follow this guide to manage your server safely."
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
      content: "https://evlbox.com/docs/game-servers/satisfactory/unclaim-server/"
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
      content: "How to Unclaim or Reset Your Satisfactory Server | Change Admin Password and Settings Without Wiping Saves"
  - tag: meta
    attrs:
      name: "twitter:description"
      content: "Learn how to reset or unclaim your Satisfactory server, change the admin password, and modify settings without wiping your save files. Follow this guide to manage your server safely."
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
      {"@context":"http://schema.org","@type":"Article","headline":"How to Unclaim or Reset Your Satisfactory Server | Change Admin Password and Settings Without Wiping Saves","description":"Learn how to reset or unclaim your Satisfactory server, change the admin password, and modify settings without wiping your save files. Follow this guide to manage your server safely.","url":"https://evlbox.com/docs/game-servers/satisfactory/unclaim-server/","image":"https://evlbox.com/static/images/blog/satisfactory/outpost.webp","imageAlt":"Satisfactory Desert Outpost","author":{"@type":"Organization","name":"EVLBOX","url":"https://evlbox.com"},"publisher":{"@type":"Organization","name":"EVLBOX","logo":{"@type":"ImageObject","url":"https://evlbox.com/docs/favicon.png"}},"datePublished":"2024-01-04","dateModified":"2025-05-08"}
---

#  Unclaim - Reset Admin Password -- Satisfactory

When you first join the server, you set an admin password and choose a server name. To undo this and be able to create a new server, you will need to unclaim the server. This will not delete any save files on the server. 

1. Login to [nitro.evlbox.com](https://nitro.evlbox.com) and find your server. 
2. Click the "Files" tab. 
3. Browse to this directory: .config/Epic/FactoryGame/Saved/SaveGames
4. Delete the only ServerSettings file in this directory (note the trailing digits may not match this screenshot)

![delete-server-settings-file](/satisfactory/unclaim.png)

5. Restart the server. The server can now be claimed by the next person to join it. 