---
title: "How to Upload a Singleplayer Save to EVLBOX Game Server | Satisfactory Save Upload Guide"
description: "Learn how to upload your Satisfactory singleplayer or multiplayer save to EVLBOX Game Server with this easy step-by-step guide. Get your save up and running quickly!"
head:
  - tag: meta
    attrs:
      name: "keywords"
      content: "satisfactory, upload singleplayer save, EVLBOX game server, multiplayer save upload, Satisfactory server setup"
  - tag: meta
    attrs:
      property: "og:title"
      content: "How to Upload a Singleplayer Save to EVLBOX Game Server | Satisfactory Save Upload Guide"
  - tag: meta
    attrs:
      property: "og:description"
      content: "Learn how to upload your Satisfactory singleplayer or multiplayer save to EVLBOX Game Server with this easy step-by-step guide. Get your save up and running quickly!"
  - tag: meta
    attrs:
      property: "og:image"
      content: "https://evlbox.com/_next/image?url=%2Fstatic%2Fimages%2Fblog%2Fsatisfactory%2Ftrain.webp&w=1920&q=75"
  - tag: meta
    attrs:
      property: "og:url"
      content: "https://evlbox.com/docs/game-servers/satisfactory/upload-singleplayer-save/"
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
      content: "How to Upload a Singleplayer Save to EVLBOX Game Server | Satisfactory Save Upload Guide"
  - tag: meta
    attrs:
      name: "twitter:description"
      content: "Learn how to upload your Satisfactory singleplayer or multiplayer save to EVLBOX Game Server with this easy step-by-step guide. Get your save up and running quickly!"
  - tag: meta
    attrs:
      name: "twitter:image"
      content: "https://evlbox.com/_next/image?url=%2Fstatic%2Fimages%2Fblog%2Fsatisfactory%2Ftrain.webp&w=1920&q=75"
  - tag: script
    attrs:
      type: "application/ld+json"
    content: |
      {"@context":"http://schema.org","@type":"Article","headline":"How to Upload a Singleplayer Save to EVLBOX Game Server | Satisfactory Save Upload Guide","description":"Learn how to upload your Satisfactory singleplayer or multiplayer save to EVLBOX Game Server with this easy step-by-step guide. Get your save up and running quickly!","url":"https://evlbox.com/docs/game-servers/satisfactory/upload-singleplayer-save/","image":"https://evlbox.com/_next/image?url=%2Fstatic%2Fimages%2Fblog%2Fsatisfactory%2Ftrain.webp&w=1920&q=75","author":{"@type":"Organization","name":"EVLBOX","url":"https://evlbox.com"},"publisher":{"@type":"Organization","name":"EVLBOX","logo":{"@type":"ImageObject","url":"https://evlbox.com/docs/favicon.png"}},"datePublished":"2025-05-08","dateModified":"2025-05-08"}
---

#  Satisfactory Save Upload Guide

There are two methods of copying a singleplayer or multiplayer save to your new dedicated server. 
If your save already exists in your Satisfactory game, it's very easy to copy it over. If you don't have the save, or another person has it, you might find it easier to use the Nitro control panel to manually upload the file. 


### In-Game transfer

*Haven't claimed your server? [Start Here](/game-servers/satisfactory/first-time-setup) first*

1. Open the Server Manager in the Satisfactory Game
2. Click your server, then choose "Manage Saves", then "Upload Save"

![upload](/satisfactory/upload.jpg)

3. Your local saves will be shown, select the local save you wish to upload, and choose "Upload Game"
4. You can now find that save in your Manage Saves -> load saves section. 

### Nitro Panel transfer

1. Login to [Nitro panel](https://nitro.evlbox.com)
2. Choose your server and click "Files"
3. Browse to this directory: .config/Epic/FactoryGame/Saved/SaveGames/server/

![nitro-upload](/satisfactory/upload-saves.png)

4. Drag and drop any .sav files you wish to use to this directory. There may already be files here from any previous session you've played on your server. 
5. Restart the server from the Nitro Panel. 
6. In game, go to the server manager, and select manage saves, then load saves. Your new saves should be listed. 

[**Grab your own Satisfactory Server**](https://evlbox.com/satisfactory)