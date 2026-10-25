---
title: "Known Tower Unite Condo Server bugs"
description: "Having issues with your Tower Unite server? Learn how to fix common problems like a condo that is not listed, FAILED TO LOAD CONDO DATA, black textures, Steam Workshop collisions, and AGC connection errors."
head:
  - tag: meta
    attrs:
      name: "keywords"
      content: "Tower Unite server issues, condo not showing in list, FAILED TO LOAD CONDO DATA, condo texture bug, Steam Workshop no collision, AGC not connected, TowerServer.ini, EVLBOX troubleshooting"
  - tag: meta
    attrs:
      property: "og:title"
      content: "Known Issues | Tower Unite Server Troubleshooting Guide | EVLBOX"
  - tag: meta
    attrs:
      property: "og:description"
      content: "Having issues with your Tower Unite server? Learn how to fix common problems like a condo that is not listed, FAILED TO LOAD CONDO DATA, black textures, Steam Workshop collisions, and AGC connection errors."
  - tag: meta
    attrs:
      property: "og:image"
      content: "https://evlbox.com/docs/towerunite/logo2.png"
  - tag: meta
    attrs:
      property: "og:image:alt"
      content: "Tower Unite Condo Servers by EVLBOX"
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
      content: "Having issues with your Tower Unite server? Learn how to fix common problems like a condo that is not listed, FAILED TO LOAD CONDO DATA, black textures, Steam Workshop collisions, and AGC connection errors."
  - tag: meta
    attrs:
      name: "twitter:image"
      content: "https://evlbox.com/docs/towerunite/logo2.png"
  - tag: meta
    attrs:
      name: "twitter:image:alt"
      content: "Tower Unite Condo Servers by EVLBOX"
  - tag: script
    attrs:
      type: "application/ld+json"
    content: |
      {"@context":"http://schema.org","@type":"Article","headline":"Known Issues | Tower Unite Server Troubleshooting Guide | EVLBOX","description":"Having issues with your Tower Unite server? Learn how to fix common problems like a condo that is not listed, FAILED TO LOAD CONDO DATA, black textures, Steam Workshop collisions, and AGC connection errors.","url":"https://evlbox.com/docs/game-servers/towerunite/known-issues/","image":"https://evlbox.com/docs/towerunite/logo2.png","imageAlt":"Tower Unite Condo Servers by EVLBOX","author":{"@type":"Organization","name":"EVLBOX","url":"https://evlbox.com"},"publisher":{"@type":"Organization","name":"EVLBOX","logo":{"@type":"ImageObject","url":"https://evlbox.com/docs/favicon.png"}},"datePublished":"2025-07-22","dateModified":"2026-10-24"}
---

If you're running into problems with your Tower Unite condo server, you're not alone. Below are the common ones, what causes them, and the quickest fix. Most answers are in the **Console** tab, so start there: lines beginning with `[EVLBOX]` are written by your server's start-up checks and point straight at the problem.

## My condo is not in the condo list

The server runs, people can join by invite, but it never shows up in the in-game list.

**Cause**
One or both login tokens are missing or wrong. The console tells you on every start:

```text
[EVLBOX] WARNING: Steam Login Token / Tower Login Token are not set. The condo will run but will NOT appear in the Tower Unite condo list.
```

and the game itself keeps logging `CT auth token not set! Connection to AGC aborted.` With a token that Steam or PixelTail rejects you see `LogAGC: Disconnect - Disconnecting from AGC` instead.

**Solution**
Follow Steps 1-3 of the [setup guide](/docs/game-servers/towerunite/how-to-setup-condo/): create a GSLT with App ID **394690**, create a Tower token, paste both into the **Startup** tab and restart. If it still does not list, check [Ban Appeals](https://towerunite.com/guides/ban_appeals.html) for an active condo ban on your account, and make sure the same Steam token is not in use by another server.

## Server stuck on "Starting" and never reaches Engine Initialization

The console gets as far as `LogLoad: Game class is 'Condo_Gamemode_C'` and then nothing more happens, for minutes. The server never shows as **Running**.

**Cause**
One of the login tokens is **wrong**: a typo, a token that belongs to another server, or a made-up placeholder. The server waits for Steam to accept the token and Steam never answers. (An *empty* token does not do this; the server then starts unlisted.)

**Solution**
**Stop** (or **Kill**) the server, open the **Startup** tab, and re-paste both tokens straight from [Steam Game Server Token Management](https://steamcommunity.com/dev/managegameservers) and [Tower Unite Server Management](https://moderation.towerunite.com/manage_game_servers.php). If in doubt, clear both fields, start the server to confirm it boots, then add the tokens one at a time.

## AGC Not Connected error

**Cause**
`Tower/Saved/Config/LinuxServer/TowerServer.ini` is blank or missing, so the server starts with no title and no tokens. Older servers could end up like this after a reinstall.

**Solution**
Just **restart** the server. If the file is missing or empty it is re-created from your Startup settings and the console prints:

```text
[EVLBOX] TowerServer.ini was missing - recreated it from your Startup settings.
```

If you would rather fix it by hand, open **Files → Tower/Saved/Config/LinuxServer/TowerServer.ini** and paste in this template, then restart (the title, player count and tokens are filled from the Startup tab on start):

```ini
[/Script/TowerNetworking.DedicatedServerOptions]
ServerTitle=My Dedicated Condo
MaxPlayers=32
SteamLoginToken=
TowerLoginToken=

[DedicatedCondoOptions]
CondoAutoSave=True
CondoBackupsEnabled=True
#CondoFile=

[Administration]
AdminSteamID=00000000000000000
```

## FAILED TO LOAD CONDO DATA

The console shows `FAILED TO LOAD CONDO DATA` and your uploaded build is not there, or the server started a fresh condo even though you uploaded a `.map`.

:::note
This line is normal on a **brand-new** server that has no save file yet. It only means something is wrong when you *have* uploaded a `.map` for the selected map.
:::

**Cause**
The folder name, the file name and the selected map do not match. The server only loads `Tower/Condos/<MapName>/<MapName>.map` for the map chosen under **Startup → Condo Map**. Common slips: a file still called `Condo Exports.map` or `C_Condo (1).map`, a `.map.txt` extension, the Suite/Resort mix-up (`C_lobbyOne` vs `C_Lobby1`), or an export made on a different map than the one selected.

**Solution**
Compare your path with the table on [Condo Maps & Save Files](/docs/game-servers/towerunite/condo-maps/), rename the file to exactly `<MapName>.map`, pick the same map on the Startup tab, and restart. The console confirms a good load with `LOADING CONDO DATA: ../../../Tower/Condos/C_Condo/C_Condo.map`. If you do not want to rename the file, set `CondoFile=` in `TowerServer.ini` instead.

## Lots of textures are black on load-in

Upon loading into your condo, many surfaces appear black or missing textures.

**Cause**
The server is running a condo save it generated itself (a fresh condo that was later decorated on the server) rather than a build exported from your game, and the materials for some default surfaces are not in that save.

**Solution**
Export the condo from your own game (**Tab → Saves → Export Condo**), stop the server, replace `Tower/Condos/<MapName>/<MapName>.map` with the export, and start again. See [Importing an existing condo](/docs/game-servers/towerunite/how-to-setup-condo/#importing-an-existing-condo-from-single-player).

## Frozen loading screen when joining a condo

The client freezes on the loading screen when joining a dedicated condo, and sometimes crashes.

**Cause**
There appears to be a limit of about **12,000 total items** in a condo. Above that the server keeps running but clients cannot load in.

**Solution**
Trim the build to under 12,000 items in single player and re-export. We hope to see a fix for this in a future game update.

Thanks to Mari for finding, and enduring, this bug!

## Steam Workshop furniture has no collision

Workshop items look right but players walk straight through them, sometimes with lag or rubber-banding around them.

**Cause**
PixelTail's own guide notes that Workshop collision is not compatible with dedicated condos yet.

**Solution**
Place invisible **blocking volumes** around the items you need to be solid, and watch for game updates.

## My changes were gone after a restart

**Cause**
`CondoAutoSave` was turned off in `TowerServer.ini`, so the condo was only saved when an admin saved it manually.

**Solution**
Set `CondoAutoSave=True` under `[DedicatedCondoOptions]` in **Files → Tower/Saved/Config/LinuxServer/TowerServer.ini**. New EVLBOX servers ship with it on. You can also save at any time from the **Saves** menu on the scoreboard, and roll back with the panel's [scheduled backups](/docs/getting-started/nitro-panel/server-settings/).

## Players cannot join

**Cause**
Almost always the wrong address. The condo uses the game port shown on your server's **Console** tab header (not 7777), and players should join from the in-game condo list rather than by IP.

**Solution**
Make sure the condo is listed (see the first issue above) and have players join from the condo browser. If you changed **Max Players**, the game only accepts 2-64.

Need more help? Visit our [Support Page](https://evlbox.com/support) or [join our community Discord](https://discord.gg/evlbox) for real-time assistance.
