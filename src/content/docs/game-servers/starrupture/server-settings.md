---
title: "StarRupture Server Settings"
description: "Configure your EVLBOX StarRupture server from the Startup tab — server name, passwords, session and save management, autosave interval, resetting the world and uploading a save."
---
The settings covered here live on the **Startup** tab of the [Nitro Panel](https://nitro.evlbox.com). Stop the server, change a value, start it again. There are no config files to edit.

:::note
StarRupture's dedicated server has a small set of settings compared to games like Palworld or 7 Days to Die. Difficulty, rupture timing and most gameplay rules are baked into the game and can't be changed server-side yet. Creepy Jar has said more options are coming during Early Access.
:::

## Settings reference

| Setting | Default | What it does |
|---|---|---|
| **Server Name** | `StarRupture Server` | The name players see once connected. |
| **Player Join Password** | *(blank)* | Password players enter on **Join Game → Dedicated Server**. Blank means anyone with the address can join. |
| **Admin Password** | *(blank)* | Protects the server's management interface. That interface is disabled by default for security, but set this anyway. |
| **Session Name** | `StarRuptureServer` | The name of your save. Becomes a folder under `StarRupture/Saved/SaveGames/`. Letters, numbers, `-` and `_` only, max 20 characters. |
| **Save Game Name** | `AutoSave0.sav` | Which file inside the session folder to load. Leave this alone unless you're restoring a specific save. |
| **Autosave Interval** | `300` | Seconds between automatic saves. 300–600 is the sensible range. Lower values cause hitching on big bases. |
| **Start New Game** / **Load Saved Game** | `true` / `false` | Leave these at their defaults. Your server works out what to do on its own — see [How saves work](#how-saves-work). |
| **Force Overwrite** | `0` | Forces a fresh world on boot, including when the session already exists. Keep at `0` except for a deliberate reset. |
| **Max Players** | `4` | StarRupture supports four players. Higher values are unsupported. |
| **Difficulty Multiplier** | `1.0` | Inactive by default. Only written if an administrator enables the experimental Game.ini block; support by the game is unverified. |


## How saves work

This is the part that trips people up on other hosts, so here's exactly what your server does on every boot:

1. It looks for a save folder matching **Session Name** in `StarRupture/Saved/SaveGames/`.
2. **If the folder exists and Force Overwrite is `0`**, it renders launch settings to load **Save Game Name**. Your world carries on.
3. **If the folder doesn't exist**, it creates a brand-new world with that session name.

That's why you don't need to touch **Start New Game** or **Load Saved Game**. A fresh server creates a world; a server with a save loads it. In the revised launcher, **Force Overwrite** set to `1` forces a new world regardless of the Start New Game and Load Saved Game fields. Keep it off during normal use. The launcher checks for a directory, not save integrity; always keep backups.

:::tip
The save folder is created the first time the game saves — either the first autosave (five minutes in by default) or the first time a player uses **ESC → Save**. If you restart within the first few minutes of a brand-new world, the server will create a fresh one again. Any progress made before the first successful save can be lost.
:::

## Reset the world

The full reset procedure and Startup switches screenshot are in [Manage Server → Reset the world](/docs/game-servers/starrupture/manage-server#reset-the-world). Back up first and follow that procedure before enabling **Force Overwrite**.

## Run more than one world

You don't have to delete a world to start another. Change **Session Name** to something new and restart — the server creates a second world alongside the first. Change it back to switch. Each session keeps its own save folder.

## Upload an existing save

You can move a co-op world from someone's PC onto the server.

1. On the hosting PC, find the save. It's usually in `%LOCALAPPDATA%\StarRupture\Saved\SaveGames\<SessionName>\`. You need both the `.sav` and the matching `.met` file.
2. Stop your server.
3. On the **Files** tab, open `StarRupture/Saved/SaveGames/` and create a folder named exactly what you'll use as **Session Name**.
4. Upload the `.sav` and `.met` files into that folder. Rename them to `AutoSave0.sav` and `AutoSave0.met` if they aren't already.
5. On the **Startup** tab, set **Session Name** to the folder name.
6. Start the server.


:::caution
Save files from a newer game version won't load on an older server, so make sure the server has updated before you upload. The server pulls the latest build on every start.
:::

![Nitro Files showing AutoSave0.sav and AutoSave0.met in the session folder](/docs/starrupture/save-files.png)

## Download a save

Same path in reverse: on the **Files** tab, open `StarRupture/Saved/SaveGames/<SessionName>/` and download the newest `AutoSave` pair. Or take a full backup from the **Backups** tab, which includes everything.

## Where did Manage Server go?

See the dedicated [Manage Server guide](/docs/game-servers/starrupture/manage-server) for why the in-game screen is disabled and where to find each control in Nitro.

## Passwords

Both passwords are set from the **Startup** tab and take effect on the next start. The launcher sends them over HTTPS to the third-party password generator at starrupture-utilities.com to produce the game's password files — you'll see `Password.json` and `PlayerPassword.json` mentioned in the console. You don't need to touch those files.

Use unique passwords that you do not use for other accounts. If the console reports a password-generation failure, stop the server and contact support; the intended password may not have been applied.

To remove a password, clear the field and restart.

## Troubleshooting

| Issue | Cause and fix |
|---|---|
| World reset itself after a restart | **Force Overwrite** was left at `1`. Set it to `0`. Restore from a backup if needed. |
| Server booted into an empty world | **Session Name** doesn't match the save folder. Check `StarRupture/Saved/SaveGames/` on the Files tab and correct the name. The console prints a warning listing the folders it did find. |
| Uploaded save doesn't load | Missing `.met` file, wrong filename, or a folder name that doesn't match **Session Name**. All three must line up. |
| Setting change didn't apply | Settings are read at start. Stop the server, change the setting, then start it again. |
| Base hitches every few minutes | That's the autosave. Raise **Autosave Interval** to 600. If it's still bad, [open a ticket](https://evlbox.com/support). |

---

Questions? Reach out on the [support Discord](https://discord.com/invite/rWF4hJhbaM) or [create a ticket](https://evlbox.com/support).
