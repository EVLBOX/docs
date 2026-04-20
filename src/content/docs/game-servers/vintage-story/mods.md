---
title: "Mods"
description: "How to install, update, and remove mods on your Vintage Story server hosted with EVLBOX."
---

Vintage Story mods are distributed through the [Vintage Story Mod Database](https://mods.vintagestory.at/). You can install them via the file manager or directly from the server console using the `/moddb` command.

:::caution
Adding or removing mods can affect existing save data. Back up your world before making changes. See [World Management](/docs/game-servers/vintage-story/world-management) for backup steps.
:::

---

## Installing Mods via Console

Vintage Story has a built-in `/moddb` command that lets you search, install, and remove mods directly from the **Console** tab — no file manager needed.

**Search for a mod compatible with your server version:**
```
/moddb searchcompatible modname
```

**Install a mod:**
```
/moddb install modid
```

**Remove a mod:**
```
/moddb remove modid
```

**List all installed mods:**
```
/moddb list
```

:::tip
The `modid` is the mod's identifier on the Mod Database (visible in the mod's URL). Run `/help moddb` for the full list of subcommands.
:::

:::note
Not all mods may be available through `/moddb`. If you can't find a mod this way, use the file upload method below.
:::

---

## Installing Mods via File Manager

1. Find and download the mod `.zip` file from the [VS Mod Database](https://mods.vintagestory.at/).
2. Log in to the EVLBOX panel and **stop your server**.
3. Navigate to the **Files** tab.
4. Open the `data` folder, then the `Mods` folder. If `Mods` doesn't exist, create it.
5. Click **Upload** and upload the mod `.zip` file — do **not** unzip it.
6. Start your server. The mod will load automatically.

![File Manager](/docs/vintage-story/panel-file-manager.png)

:::note
Most mods need to be installed on both the server **and** each player's local game to work. Check the mod's page on the Mod Database to see if it's server-side only or requires client installation too.
:::

---

## How to Update a Mod

1. Download the updated version from the [VS Mod Database](https://mods.vintagestory.at/).
2. Stop your server in the EVLBOX panel.
3. In the **Files** tab, navigate to `data/Mods`.
4. **Delete** the old mod `.zip` file.
5. **Upload** the new version.
6. Start your server.

:::tip
Check mod compatibility with your server version before updating. The mod's page on the Mod Database lists which game versions it supports.
:::

---

## How to Remove a Mod

**Via console:**
```
/moddb remove modid
```

**Via file manager:**
1. Stop your server in the EVLBOX panel.
2. In the **Files** tab, navigate to `data/Mods`.
3. Delete the mod `.zip` file you want to remove.
4. Start your server.

:::caution
Removing a mod that added blocks, items, or world generation may cause errors or missing content in your existing world. Consider starting a fresh world if removing major content mods.
:::

---

[Get a Vintage Story server](https://evlbox.com/games/vintage-story)

[Back to Vintage Story Guides](/docs/game-servers/vintage-story/)

:::note
Questions or problems? [Reach out to our support team](https://evlbox.com/help) — we're happy to help!
:::
