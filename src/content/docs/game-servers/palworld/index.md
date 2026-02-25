---
title: "Palworld Hosting"
description: "Host your Palworld server with EVLBOX. Guides for connecting, server settings, admin commands, save management, RCON, and Xbox support."
head:
  - tag: meta
    attrs:
      name: "keywords"
      content: "Palworld hosting, EVLBOX Palworld server, Palworld dedicated server, Palworld multiplayer, Palworld Xbox server, Palworld admin commands, Palworld save management"
  - tag: meta
    attrs:
      property: "og:title"
      content: "Palworld Server Hosting | Catch & Battle with EVLBOX"
  - tag: meta
    attrs:
      property: "og:description"
      content: "Host your Palworld server with EVLBOX. Guides for connecting, server settings, admin commands, save management, RCON, and Xbox support."
  - tag: meta
    attrs:
      property: "og:image"
      content: "https://evlbox.com/docs/palworld/palworld_header.jpg"
  - tag: meta
    attrs:
      property: "og:image:alt"
      content: "Palworld Game Header"
  - tag: meta
    attrs:
      property: "og:url"
      content: "https://evlbox.com/docs/game-servers/palworld/"
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
      content: "Palworld Server Hosting | Catch & Battle with EVLBOX"
  - tag: meta
    attrs:
      name: "twitter:description"
      content: "Host your Palworld server with EVLBOX. Guides for connecting, server settings, admin commands, save management, RCON, and Xbox support."
  - tag: meta
    attrs:
      name: "twitter:image"
      content: "https://evlbox.com/docs/palworld/palworld_header.jpg"
  - tag: meta
    attrs:
      name: "twitter:image:alt"
      content: "Palworld Game Header"
  - tag: script
    attrs:
      type: "application/ld+json"
    content: |
      {"@context":"http://schema.org","@type":"Article","headline":"Palworld Server Hosting | Catch & Battle with EVLBOX","description":"Host your Palworld server with EVLBOX. Guides for connecting, server settings, admin commands, save management, RCON, and Xbox support.","url":"https://evlbox.com/docs/game-servers/palworld/","image":"https://evlbox.com/docs/palworld/palworld_header.jpg","imageAlt":"Palworld Game Header","author":{"@type":"Organization","name":"EVLBOX","url":"https://evlbox.com"},"publisher":{"@type":"Organization","name":"EVLBOX","logo":{"@type":"ImageObject","url":"https://evlbox.com/docs/favicon.png"}}}
---


![palworld_header.jpg](/docs/palworld/palworld_header.jpg)
[Palworld Servers](https://evlbox.com/games/palworld)


## Hosting Guides

- [Connect to your Server](/docs/game-servers/palworld/connect-to-server/)
- [Change your Server Name and Password](/docs/game-servers/palworld/server-name-and-password/)
- [Change your Server Settings](/docs/game-servers/palworld/server-settings/)
- [Admin Commands](/docs/game-servers/palworld/admin-commands/)
- [Delete and Archive Save Data](/docs/game-servers/palworld/delete-and-archive-saves/)
- [Change your Server RAM and CPU](/docs/game-servers/palworld/change-server-specs/)
- [Migrate Save Data](/docs/game-servers/palworld/migrate-save-data/)
- [Restore Saves from Backup Data](/docs/game-servers/palworld/restore-saves/)
- [Enable Automatic Updates](/docs/game-servers/palworld/update-server/)
- [Schedule Automatic Server Starts](/docs/game-servers/palworld/scheduled-start/)
- [Setup RCON Commands](/docs/game-servers/palworld/rcon-commands/)
- [Update Your Server for Xbox](/docs/game-servers/palworld/xbox-server/)

## Updates

---
**6/27/24**
Version 0.3.1 is here! With the Sakurajimma update there are many new changes to explore including dedicated servers for Xbox. See the article above for more information on how to update your server to connect to Xbox. 


**1/25/24**
:::caution
With the latest Palworld Update, some people are seeing an error about running an incompatible version of the game when they try to connect to their dedicated server
:::
To Fix this, enable automatic updates on startup for your server and then restart it. On server startup you will see some details in the log about updates and a success message once the the changes are fully installed. 

You may also want to set up a schedule for automatic server restarts. Please see the guide for more information on how to create a schedule. 

**1/22/24**
> **Memory Leak information:**
What we know so far is that having more bases, having more pals out at your base working, having a high number of bases, and going into dungeons causes the memory leak to get worse. 


As of right now there are a few changes that can be made to potentially help this issue. 
- As an option, you can turn off raids in the server settings. To turn these off, set the "bEnableInvaderEnemy" variable in the server settings to False. See the guide on how to change your Server Settings for more information.
- Customers can upgrade/downgrade their RAM at any time. Any value between 8GB and 16GB RAM. Upgrading the ram won't solve the memory leak but it can increase the time between crashes. For more information, see the guide on how to change your server RAM and CPU. 
- Scheduling automatic server starts can help prevent the server from crashing, see the guide on how to schedule automatic server starts for more information.

If you are running into issues logging into to a password protected server see this link: 
[Workaround for Direct IP Connect to a Password Enabled Server](https://docs.google.com/document/d/1PjlSBt3FyiqlpmNtkOiXWXK25mV4KjpsL38DxR-SAto/edit?pli=1)

