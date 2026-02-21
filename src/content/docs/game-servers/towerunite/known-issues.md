---
title: "Known Tower Unite Condo Server bugs"
head:
  - tag: meta
    attrs:
      name: "keywords"
      content: "Tower Unite server issues, condo texture bug, Steam Workshop no collision, AGC not connected, TowerServer.ini, EVLBOX troubleshooting"
  - tag: meta
    attrs:
      property: "og:title"
      content: "Known Issues | Tower Unite Server Troubleshooting Guide | EVLBOX"
  - tag: meta
    attrs:
      property: "og:description"
      content: "Having issues with your Tower Unite server? Learn how to fix common problems like missing textures, Steam Workshop collisions, and AGC connection errors."
  - tag: meta
    attrs:
      property: "og:image"
      content: "https://evlbox.com/docs/tower-unite/tower_unite_issue_preview.png"
  - tag: meta
    attrs:
      property: "og:image:alt"
      content: "Tower Unite Server Issue Example"
  - tag: meta
    attrs:
      property: "og:url"
      content: "https://evlbox.com/docs/game-servers/towerunite/known-issues/"
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
      content: "Known Issues | Tower Unite Server Troubleshooting Guide | EVLBOX"
  - tag: meta
    attrs:
      name: "twitter:description"
      content: "Having issues with your Tower Unite server? Learn how to fix common problems like missing textures, Steam Workshop collisions, and AGC connection errors."
  - tag: meta
    attrs:
      name: "twitter:image"
      content: "https://evlbox.com/docs/tower-unite/tower_unite_issue_preview.png"
  - tag: meta
    attrs:
      name: "twitter:image:alt"
      content: "Tower Unite Server Issue Example"
  - tag: script
    attrs:
      type: "application/ld+json"
    content: |
      {"@context":"http://schema.org","@type":"Article","headline":"Known Issues | Tower Unite Server Troubleshooting Guide | EVLBOX","description":"Having issues with your Tower Unite server? Learn how to fix common problems like missing textures, Steam Workshop collisions, and AGC connection errors.","url":"https://evlbox.com/docs/game-servers/towerunite/known-issues/","image":"https://evlbox.com/docs/tower-unite/tower_unite_issue_preview.png","imageAlt":"Tower Unite Server Issue Example","author":{"@type":"Organization","name":"EVLBOX","url":"https://evlbox.com"},"publisher":{"@type":"Organization","name":"EVLBOX","logo":{"@type":"ImageObject","url":"https://evlbox.com/docs/favicon.png"}},"datePublished":"2025-07-22","dateModified":"2025-07-22"}
---

# Known Issues

If you're encountering problems with your Tower Unite server, you're not alone. Below are some common known issues, their causes, and quick ways to fix them.


## Steam Workshop Furniture Has No Collision

Steam Workshop items may appear correctly but exhibit **no collision detection**. This means you can walk right through them, and they might cause slight **lag or rubberbanding** while moving through affected areas.


 **Solution**
Unfortunately, this is a known bug. Monitor for game updates!


## Lots of Textures Are Black on Load-In

Upon loading into your condo, you may notice that **many surfaces appear black or missing** textures.

**Cause**

This happens when the server generates its own default `condo.map` file instead of using the one exported from your game.

**Solution**
Replace the default condo map file with the correct exported version from your game to restore proper textures and visuals.

## Frozen loading screen when joining a condo

The client screen in-game freezes when joining a tower condo, and sometimes can crash the game. 

 **Cause**
There appears to be a limit of about 12,000 total objects / items in a condo. If you exceed this your server will not crash, but you will be unable to properly join your dedicated condo. 

 **Solution**
For now the only solution is to use a condo .map file that has under 12,000 total objects. If you exceed this you run the risk of this issue happening. We hope to see a fix for this in the future!

Thanks to Mari for finding, and enduring this bug!


## AGC Not Connected Error

You may see an error labeled **"AGC Not Connected"** when trying to run your Tower Unite server.

 **Cause**
This error typically occurs when the `TowerServer.ini` file is **blank or misconfigured**.

 **Solution**
Ensure your configuration file is properly set up. In Nitro panel click "Files" then go to Tower/Saved/Config/LinuxServer/TowerServer.ini
If the file is empty, paste in the official example configuration (you may add this manually).


```[/Script/TowerNetworking.DedicatedServerOptions]
[/Script/TowerNetworking.DedicatedServerOptions]
ServerTitle=My Dedicated Condo
MaxPlayers=32
SteamLoginToken=00000000000000000000000000000000
TowerLoginToken=00000000000000000000000000000000

[Administration]
AdminSteamID=00000000000000000

[DedicatedCondoOptions]
CondoAutoSave=True
CondoBackupsEnabled=True
#CondoFile=
```

Need more help? Visit our [Support Page](https://evlbox.com/support) or [join our community Discord](https://discord.gg/evlbox) for real-time assistance.


