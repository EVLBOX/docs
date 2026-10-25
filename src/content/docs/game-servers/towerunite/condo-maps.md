---
title: "Condo Maps & Save Files - Tower Unite"
description: "Every Tower Unite condo map a dedicated condo server can run, the exact folder and .map file name each one loads, and how to use a custom save file name."
head:
  - tag: meta
    attrs:
      name: "keywords"
      content: "Tower Unite condo maps, C_Condo, C_lobbyOne, C_IcePlanet, condo map file name, Tower/Condos, dedicated condo save file, CondoFile, EVLBOX"
  - tag: meta
    attrs:
      property: "og:title"
      content: "Tower Unite Condo Maps & Save File Names | EVLBOX"
  - tag: meta
    attrs:
      property: "og:description"
      content: "Every Tower Unite condo map a dedicated condo server can run, the exact folder and .map file name each one loads, and how to use a custom save file name."
  - tag: meta
    attrs:
      property: "og:url"
      content: "https://evlbox.com/docs/game-servers/towerunite/condo-maps/"
  - tag: meta
    attrs:
      property: "og:type"
      content: "article"
---

Your condo server runs one condo map at a time. You pick the map on the **Startup** tab in Nitro (the **Condo Map** dropdown), and the server loads that map's build from a `.map` save file in a folder named after the map.

The rule is simple: **folder name = file name = map name.**

```text
Tower/Condos/<MapName>/<MapName>.map
```

## All condo maps

| Condo | Map name (Startup tab) | Save file the server loads |
|---|---|---|
| Condo | `C_Condo` | `Tower/Condos/C_Condo/C_Condo.map` |
| House | `C_House` | `Tower/Condos/C_House/C_House.map` |
| Smooth Dirt | `C_SmoothDirt` | `Tower/Condos/C_SmoothDirt/C_SmoothDirt.map` |
| Suite | `C_lobbyOne` | `Tower/Condos/C_lobbyOne/C_lobbyOne.map` |
| Resort | `C_Lobby1` | `Tower/Condos/C_Lobby1/C_Lobby1.map` |
| Smooth Autumn | `C_SmoothAutumn` | `Tower/Condos/C_SmoothAutumn/C_SmoothAutumn.map` |
| Underwater | `C_Underwater` | `Tower/Condos/C_Underwater/C_Underwater.map` |
| Highrise | `C_Highrise` | `Tower/Condos/C_Highrise/C_Highrise.map` |
| Art Studio | `C_Studio` | `Tower/Condos/C_Studio/C_Studio.map` |
| Theatre | `C_Theatre` | `Tower/Condos/C_Theatre/C_Theatre.map` |
| Courtyard | `C_Courtyard` | `Tower/Condos/C_Courtyard/C_Courtyard.map` |
| Ice Moon | `C_IcePlanet` | `Tower/Condos/C_IcePlanet/C_IcePlanet.map` |

:::caution[Watch the capitalisation]
The Suite is `C_lobbyOne` (lower-case **l**) and the Resort is `C_Lobby1` (capital **L**). The names come from the game and a mismatch means the server cannot find your save.
:::

EVLBOX servers come with all twelve folders already created under `Tower/Condos/`, plus a `README.txt` in that folder with this same table. If a folder is missing (for example on an older server), just create it with the **Files** tab.

## What loads when there is no save file

If the folder for the map you selected has no `.map` file, the server starts the map as a **fresh condo** and prints this in the console:

```text
[EVLBOX] No condo save at Tower/Condos/C_Condo/C_Condo.map - starting C_Condo as a fresh condo.
```

A little later the game itself logs `FAILED TO LOAD CONDO DATA: ../../../Tower/Condos/C_Condo/C_Condo.map`. On a new server that is expected and harmless.

That is fine for a brand-new server. Once you (or anyone with build permissions) place items, the server saves them into that file automatically, as long as `CondoAutoSave=True` is set in `TowerServer.ini` (it is, by default). To start from a condo you already built in single player, follow [Importing an existing condo](/docs/game-servers/towerunite/how-to-setup-condo/#importing-an-existing-condo-from-single-player).

## Using a different file name

You do not have to rename your export. Set `CondoFile` in `Tower/Saved/Config/LinuxServer/TowerServer.ini` to the file name **without** `.map`, and the server loads that file from the selected map's folder:

```ini
[DedicatedCondoOptions]
CondoAutoSave=True
CondoBackupsEnabled=True
CondoFile=MyAwesomeCondo
```

With **Condo Map** set to `C_SmoothDirt`, the server now loads `Tower/Condos/C_SmoothDirt/MyAwesomeCondo.map`. Remove the line (or comment it out with `#`) to go back to the default name.

## Switching maps

Changing the **Condo Map** dropdown and restarting swaps the whole condo. Each map keeps its own save file, so you can switch back later and your other build is still there. Only one map is online at a time; run a second server if you want two condos listed at once.

## Related

- [First time setup](/docs/game-servers/towerunite/how-to-setup-condo/)
- [Known issues](/docs/game-servers/towerunite/known-issues/)
- [PixelTail's official Linux dedicated condo guide](https://towerunite.com/guides/condo_dedicated_linux.html)
