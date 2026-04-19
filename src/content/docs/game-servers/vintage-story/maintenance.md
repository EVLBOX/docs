---
title: "Server Maintenance"
description: "How to change your Vintage Story server version, update the server, and configure scheduled restarts on EVLBOX."
---

This guide covers updating your server, switching versions, and setting up automatic restarts.

---

## How to Update Your Server

When a new version of Vintage Story is released, you can update your server through the EVLBOX panel.

1. Log in to the EVLBOX panel and **stop your server**.
2. Go to the **Startup** tab.
3. Confirm the **Release Version** is set to `latest` and the **Release Branch** is set to `stable`.
4. Go to **Settings** and click **Reinstall Server**.

![Reinstall Server](/docs/vintage-story/panel-reinstall.png)

5. Wait for the installation to complete, then start your server.

:::note
The panel will warn you that "some files may be deleted or modified" — this is normal. The reinstall process only replaces the Vintage Story server application files. **Your world saves, mods, and configuration are not deleted.** Everything in the `data/` folder is preserved.
:::

:::tip
It's still good practice to back up your world before updating, just in case. See [World Management](/docs/game-servers/vintage-story/world-management) for steps.
:::

:::caution
Downgrading to an older version after playing on a newer one may cause world corruption. Avoid downgrading unless necessary.
:::

---

## How to Change the Server Version

If you need a specific version of Vintage Story (e.g., for mod compatibility):

1. Stop your server in the EVLBOX panel.
2. Go to the **Startup** tab.
3. Change **Release Version** from `latest` to the specific version number (e.g., `1.20.7`).
4. If you need a pre-release or unstable build, change **Release Branch** to `unstable` or `pre`.
5. Go to **Settings** and click **Reinstall Server**.
6. Wait for the installation to complete, then start your server.

![Startup Tab](/docs/vintage-story/panel-startup-tab.png)

:::note
The `pre` release branch requires a specific version number — `latest` will not work with it. The `stable` and `unstable` branches support both `latest` and specific version numbers.
:::

:::note
Make sure all players and mods are compatible with the version you select before switching. Check mod compatibility on the [VS Mod Database](https://mods.vintagestory.at/).
:::

---

## How to Set Up Scheduled Restarts

Regular restarts help keep server performance stable. You can configure automatic restarts through the EVLBOX panel's scheduling system.

1. In the EVLBOX panel, go to the **Schedules** tab.
2. Click **Create Schedule**.
3. Set the schedule name (e.g., "Daily Restart") and configure the timing. For a daily restart at 4:00 AM:
   - Minute: `0`
   - Hour: `4`
   - Day of Month: `*`
   - Month: `*`
   - Day of Week: `*`
4. Add a task to the schedule and set the action to **Restart the Server**.
5. Save the schedule.

![Schedules](/docs/vintage-story/panel-schedules.png)

:::tip
You can warn your players before a scheduled restart by adding a **Send Command** task that runs a few minutes before the restart:
```
/announce Server restarting in 5 minutes for maintenance.
```
:::

---

## Useful Console Commands

| Command | Description |
|---|---|
| `/announce <message>` | Broadcast a message to all connected players |
| `/autosavenow` | Force-save the current world state |
| `/genbackup [filename]` | Create a backup of the current save in the Backups folder |
| `/stop` | Gracefully shut down the server |
| `/info` | Display server information |
| `/stats` | Show server performance stats |
| `/list` | Show connected players, banned players, roles, or privileges |
| `/op <player>` | Grant admin privileges to a player |
| `/kick <player> [reason]` | Kick a player from the server |
| `/ban <player> <duration> [reason]` | Ban a player from the server |
| `/serverconfig` | Read or change server configuration values at runtime |
| `/help` | List all available server commands |

:::tip
Run `/help [commandname]` in the console to see detailed usage for any command.
:::

---

[Get a Vintage Story server](https://evlbox.com/games/vintage-story)

[Back to Vintage Story Guides](/docs/game-servers/vintage-story/)

:::note
Questions or problems? [Reach out to our support team](https://evlbox.com/help) — we're happy to help!
:::
