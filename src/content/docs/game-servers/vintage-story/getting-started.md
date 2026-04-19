---
title: "Getting Started"
description: "How to connect to your Vintage Story server, set up a whitelist, and grant admin privileges on EVLBOX."
---

This guide covers finding your server address, connecting in-game, managing your whitelist, and granting admin privileges.

---

## Finding Your Server Address

1. Log in to [nitro.evlbox.com](https://nitro.evlbox.com).

:::caution
Can't log in? When you created your first server, an email was sent from nitro@evlbox.com with a link to set your password. If that's not working, use the "Forgot Password" link on the login page.
:::

2. Select your Vintage Story server from the server list.
3. Your server's **address** is displayed on the main dashboard page. Click it to copy it to your clipboard — it will be in `hostname:port` format.

![Server Address](/docs/vintage-story/panel-ip-port.png)

---

## How to Connect to Your Server

1. Launch Vintage Story and click **Multiplayer** from the main menu.
2. Click **Add Server**.
3. Paste your server address into the **Host / IP Address** field (include the port, e.g., `us1.evlbox.com:42420`).
4. Click **Join** to connect.

![Add Server](/docs/vintage-story/game-add-server.png)

---

## How to Set Up a Whitelist

The whitelist restricts your server to approved players only. By default, EVLBOX servers start with the whitelist **off** so anyone with the address can join. You can change this from the panel or in-game.

### From the Panel (Startup Tab)

1. In the EVLBOX panel, go to the **Startup** tab.
2. Find the **Whitelist Mode** variable.
3. Set it to `2` to enable the whitelist, `1` to disable it, or `0` for the game's default behavior.
4. Restart your server for the change to take effect.

![Startup Tab](/docs/vintage-story/panel-startup-tab.png)

:::note
The Whitelist Mode setting is managed by the panel and written to `serverconfig.json` on every server start. If you change it directly in the file, it will be overwritten on the next restart.
:::

### Managing Whitelisted Players

Once the whitelist is enabled, use the server console (in the **Console** tab on the panel, or in-game chat as an admin) to add and remove players:

**Add a player to the whitelist:**
```
/player PlayerName whitelist on
```

**Remove a player from the whitelist:**
```
/player PlayerName whitelist off
```

Replace `PlayerName` with the player's exact in-game username.

---

## How to Grant Admin Privileges

Admin (operator) players have access to all server commands in-game.

1. In the EVLBOX panel, open the **Console** tab.
2. Run the following command, replacing `PlayerName` with the player's in-game name:
   ```
   /op PlayerName
   ```

![Console](/docs/vintage-story/panel-console.png)

To change a player back to a regular role:
```
/player PlayerName role suplayer
```

:::tip
Run `/help` in the console to see a full list of available server commands.
:::

---

[Back to Vintage Story Guides](/docs/game-servers/vintage-story/)

:::note
Questions or problems? [Reach out to our support team](https://evlbox.com/help) — we're happy to help!
:::
