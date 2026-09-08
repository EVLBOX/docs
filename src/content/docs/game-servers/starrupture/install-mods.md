---
title: "How to Install Mods on StarRupture"
description: "Install pak mods on your EVLBOX StarRupture server, know which mods need to be on the server versus each player's PC, and where DLL-based mod loaders stand."
---
StarRupture has no official mod support yet, but the community has built a real scene on [Nexus Mods](https://www.nexusmods.com/games/starrupture) — stack size increases, cheaper upgrades, rail fixes, HUD tools and more. Some of it runs on your server. This guide explains which, and how.

:::caution
Back up your world before installing anything. StarRupture is in Early Access and **game updates can break mod loaders**. A mod that changes items or buildings can also make a save unloadable once it's removed. See [Creating Backups](/docs/getting-started/nitro-panel/creating-backups).
:::

## 1. Know the three kinds of StarRupture mod

| Mod type | How to spot it | Where it goes |
|---|---|---|
| **Pak mod** | The download contains `.pak` (often with `.ucas` and `.utoc`) files | Server and/or player PCs, in the `Paks/~mods` folder |
| **UE4SS script or Blueprint mod** | Contains a `Scripts` or `LogicMods` folder and requires UE4SS | Player PCs only |
| **DLL / mod-loader plugin** | Contains `.dll` files, requires AlienX's Mod Loader or similar | Player PCs; see [Mod loaders](#mod-loaders-and-dll-plugins) for the server |

Most gameplay mods on Nexus are pak mods. Start there.

## 2. Server-side or client-side?

StarRupture is a server-authoritative game. That changes what a mod needs:

- **Changes to game rules** — stack sizes, crafting costs, building stats, rail speeds — must be on the **server**. Players usually need the same pak too, or their UI shows the old values and things desync.
- **Pure HUD and visual mods** — compass bars, timers, overlays, intro skips — go on **player PCs only**. Putting them on the server does nothing.

The mod page on Nexus normally says which. If it says "multiplayer-aware" or "dedicated-server support", it belongs on the server. If it only talks about your HUD or camera, it doesn't. When in doubt, install it on both.

## 3. Install a pak mod on the server

1. Download the mod from Nexus and check the version matches the current game build. Mods built for an earlier StarRupture version often crash the server on load.
2. Log in to the [Nitro Panel](https://nitro.evlbox.com) and stop your server.
3. Open the **Files** tab and navigate to `StarRupture/Content/Paks/`.
4. Create a folder named `~mods` if it doesn't exist. The tilde is part of the name.
5. Upload the mod's `.pak` file (and `.ucas` / `.utoc` if included) into `~mods`. If the download is a zip, upload it, choose **Unarchive**, then move the pak files up so they sit directly inside `~mods`, and delete the zip.
6. Start the server.

The mod filenames below are illustrative examples, not verified mod downloads. Use the filenames supplied by your chosen mod.

```
StarRupture/
└── Content/
    └── Paks/
        ├── StarRupture-Windows.pak       ← game files, don't touch
        └── ~mods/
            ├── BiggerStacks_P.pak
            └── CheaperUpgrades_P.pak
```


:::tip
Pak mods load in alphabetical order. If two mods change the same thing, the one that sorts last wins. Rename with a `zzz_` prefix to force a mod to load last.
:::

## 4. Confirm the mod loaded

Watch the **Console** tab as the server starts. Look for a mounted-pak message containing your mod's filename. This is an illustrative log example, not captured server output:

```
LogPakFile: Display: Mounted Pak file '../../../StarRupture/Content/Paks/~mods/BiggerStacks_P.pak'
```

If your mod's filename isn't in a `Mounted Pak file` line, the server never saw it — it's in the wrong folder or the `~mods` folder is misspelled. If the server crashes immediately after mounting it, the mod isn't compatible with the current game version.

## 5. Tell your players what to install

Gameplay pak mods need to be on every player's PC too. Players install them into the same folder in their game install:

```
Steam\steamapps\common\StarRupture\StarRupture\Content\Paks\~mods\
```

Share the mod author's download link and the exact version with your players. StarRupture has no automatic mod syncing, so everyone has to match the server by hand. A player with a mismatched or missing mod will typically load in with wrong stack sizes or costs, and may desync or crash when interacting with modded content.

:::note
[Vortex](https://www.nexusmods.com/site/mods/1616) has a StarRupture extension that installs pak mods to the right folder automatically. It's a good way for players to keep their mods matching your server.
:::

## Mod loaders and DLL plugins

Tools like **AlienX's Mod Loader**, **UE4SS** and the **ServerUtility** plugin (RCON, server query, security patches) work by injecting a `.dll` into the game process. On player PCs they install like any other Windows mod.

On the server they're a different story. Your StarRupture server is the Windows build running under a compatibility layer on Linux, and DLL injection needs an override on our side to work. Ask support to confirm compatibility for the specific plugin.

If you want a DLL-based server plugin, [open a ticket](https://evlbox.com/support) and tell us which one. Don't upload `.dll` files to the server root yourself — they'll be ignored at best, and can stop the server from starting.

## Removing a mod

1. Stop the server.
2. Delete the mod's pak files from `StarRupture/Content/Paks/~mods/`.
3. Have every player remove the same files.
4. Start the server.

:::caution
Removing a mod that added or changed items can break a save that used them. Restore a backup from before the mod was installed if the world won't load.
:::

## After a game update

Expect mods to break. When StarRupture patches:

1. Check each mod's Nexus page for an update. Mod authors usually post within a day or two.
2. Remove any mod that hasn't been updated — a stale pak is the most common cause of a server that crashes on start after a patch.
3. Reinstall updated versions, and remind players to update theirs.

## Troubleshooting

| Issue | Cause and fix |
|---|---|
| No `Mounted Pak file` line for the mod | Wrong folder, or `~mods` misspelled. It must be `StarRupture/Content/Paks/~mods/`, tilde included. |
| Server crashes right after mounting a pak | Mod is built for a different game version. Remove it and check Nexus for an update. |
| Players see old stack sizes / costs | They don't have the pak installed locally, or have an older version. Match the server's files exactly. |
| Players desync or get kicked around modded machines | Same as above — a client/server mod mismatch. |
| Mod is a `.dll` or asks for a mod loader | Client-side only for now. See [Mod loaders and DLL plugins](#mod-loaders-and-dll-plugins) for the server. |
| Everything broke after Tuesday's patch | Expected. Remove mods, start the server, re-add them as authors update. |

---

Questions? Reach out on the [support Discord](https://discord.com/invite/rWF4hJhbaM) or [create a ticket](https://evlbox.com/support).
