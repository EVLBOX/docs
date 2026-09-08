---
title: "StarRupture Manage Server"
description: "Why StarRupture's in-game Manage Server screen is disabled on EVLBOX, and how to manage passwords, sessions and worlds through the Nitro panel instead."
---

Use the [Nitro Panel](https://nitro.evlbox.com) to manage your EVLBOX StarRupture server. The in-game **Manage Server** screen is disabled in this setup, so a timeout there is expected.

To play, use **Join Game → Dedicated Server** with your server's full numeric **IP:port** and **Player Join Password**. See [How to Connect](/docs/game-servers/starrupture/how-to-connect) for the steps and screenshots.

## Why is Manage Server disabled?

The in-game management interface uses a remote-control service with a reported security issue. EVLBOX's configuration disables that interface and handles session loading and password setup through the panel.

You do not need to open the management TCP port or enable remote control to join your world. If **Join Game** fails too, follow the connection guide or contact support; a Manage Server timeout by itself does not mean the game server is offline.

## Where to find each control

| What you want to do | Use this in the Nitro panel |
| --- | --- |
| Start, stop or restart the server | **Console** tab |
| Set the admin password | **Startup → Admin Password** |
| Set the password players use to join | **Startup → Player Join Password** |
| Create the first session | Automatic on startup when the session directory does not exist |
| Load an existing session | Automatic on startup with **Force Overwrite** set to `0` |
| Switch to another world | Stop the server, change **Startup → Session Name**, then start |
| Choose a save file to load | **Startup → Save Game Name**, inside the selected session folder |
| Adjust automatic saving | **Startup → Autosave Interval** |
| Upload or download saves | **Files → StarRupture/Saved/SaveGames/** |
| Start a new world over an existing session | Follow the full [reset procedure](#reset-the-world) |

![Nitro Startup variables showing session, save and password fields, with Force Overwrite enabled for a reset example](/docs/starrupture/startup-reset-example.png)

:::caution
This screenshot shows an **example reset configuration**, including demonstration passwords. For normal operation, keep **Force Overwrite** at `0` (off). Some help text in this older panel capture predates the current launcher; follow the instructions in this guide.
:::

## Set passwords through the panel

1. Open your server in Nitro and stop it.
2. Go to **Startup**.
3. Set **Admin Password** and **Player Join Password** as needed.
4. Start the server to apply the changes.

![Admin Password and Player Join Password fields in the Nitro panel](/docs/starrupture/password-fields.png)

The player password is the one your friends enter when joining. Setting an admin password does not enable the disabled Manage Server screen.

Use unique game-only passwords. The launcher sends them over HTTPS to the approved community password generator at starrupture-utilities.com to create the game's password files. See [Password settings](/docs/game-servers/starrupture/server-settings#passwords) for removal and failure handling.

## What happens after a restart?

With **Force Overwrite** at `0`, an existing session directory is loaded using **Save Game Name**. If the session directory does not exist, the launcher creates a new world. You do not need to open Manage Server and load the session by hand.

**Session Name** identifies the save folder, not the server's display name. Changing it can select a different world. Before switching or uploading a save, follow [Server Settings](/docs/game-servers/starrupture/server-settings).

:::caution
Keep **Force Overwrite** at `0` during normal use. Setting it to `1` forces a new world on startup. It is not a fix for a connection problem or a Manage Server timeout.
:::

## Reset the world

Use the **Startup** tab to start over with a new world in the current session. You do not need the in-game Manage Server screen.

1. Stop the server.
2. Take a backup before resetting — see [Creating Backups](/docs/getting-started/nitro-panel/creating-backups).
3. On **Startup**, set **Start New Game** to `true`, **Load Saved Game** to `false`, and **Force Overwrite** to `1` (on).
4. Start the server and join the new world. Make a save and confirm the save files exist before restarting.
5. Stop the server. Set **Force Overwrite** back to `0` (off), **Start New Game** to `false`, and **Load Saved Game** to `true`. Start it again.

:::danger
Leaving **Force Overwrite** at `1` can create a new world on every restart, regardless of the other save switches. Return it to `0` after the reset, before starting again.
:::

To keep the old world and start a separate session instead, see [Run more than one world](/docs/game-servers/starrupture/server-settings#run-more-than-one-world).

## When to contact support


If the panel shows **Running** but **Join Game → Dedicated Server** cannot find the server, recheck your numeric IP and assigned port. If it still fails, [contact support](https://evlbox.com/support) with the error message and whether the panel shows Running or Starting. Do not include passwords.

If you can join but see the wrong world, stop the server and check **Session Name**, **Save Game Name** and your backups before changing reset settings.
