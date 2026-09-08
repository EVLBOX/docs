---
title: "How to Connect to your StarRupture Server"
description: "Name your StarRupture server, set a join password, and connect from the game client using your server's numeric IP and assigned port. Covers first boot and troubleshooting."
---
This guide covers naming your server, setting a join password, and getting your crew into the world.

:::note
On first start your server downloads about 21 GB of game files. Expect 10 to 20 minutes, and a console that looks idle for stretches while it verifies files. Later starts take about a minute. The panel flips to **Running** the moment the world is ready.
:::

## 1. Set the server name and passwords

1. Log in to the [Nitro Panel](https://nitro.evlbox.com) and open your StarRupture server.
2. Stop the server if it's running.
3. Open the **Startup** tab.
4. In **Server Name**, enter the name players will see once they connect.
5. In **Player Join Password**, set a password if you want the server private. Leave it blank for an open server.
6. In **Admin Password**, set a strong password. This protects the server's management interface. It's disabled by default for security, but set the password anyway so nobody can claim the server if it's ever enabled.
7. Go to the **Console** tab and start the server.


:::caution
**Session Name** is the name of your save, not your server. Changing it points the server at a different (empty) save folder. Only change it when you deliberately want to switch worlds — see [Server Settings](/docs/game-servers/starrupture/server-settings).
:::

![Blank password fields in the Nitro Startup tab](/docs/starrupture/password-fields.png)

## 2. Find your server address

1. In the Nitro panel, open the **Console** tab.
2. Find your server address and assigned port, for example `203.0.113.10:26900`.
3. Use the **numeric IP and port** together. If the Console shows a hostname instead, ask support for the corresponding numeric IP and keep the assigned port.

![Nitro Console showing the Server address field and an example assigned port](/docs/starrupture/console-address.png)

*Example panel location. This capture shows a hostname; use your own server's numeric IP with its assigned port in the game.*


:::note
Always include your allocated port. It may differ from `7777` and from the ports in these example screenshots. StarRupture also uses Epic Online Services for session discovery.
:::

## 3. Join from the game

Players join the dedicated session using the numeric IP and assigned port.

1. Check the **Console** tab and confirm the server shows **Running**.
2. Launch StarRupture and choose **Join Game**.
3. Select **Dedicated Server**.
4. Enter the full `IP:port` for your server.
5. Enter the **Player Join Password** if you set one. Leave it blank if you didn't.
6. Click **Confirm**.


![The in-game Join Session form with an example IP:port and password field](/docs/starrupture/join-dedicated-server.png)

*Use your own assigned port, even if this example shows `7777`.*

The first player into a brand-new server lands in a fresh world. The server autosaves every five minutes by default, and you can force a save at any time with **ESC → Save**.

:::tip
StarRupture's client can't join a server that's on the same network, and there's no LAN option. If you're testing from the same connection your friends will use, don't worry — that's a home-hosting problem. Your EVLBOX server is on our network, so everyone connects the same way.
:::

## 4. Coming back after a restart

Nothing to do. With the default Startup settings, an existing session loads the file selected by **Save Game Name** (normally `AutoSave0.sav`). There's no "empty session" step, no Manage Server screen, no re-entering passwords. Players just join.

:::note
If you've read guides for other hosts that tell you to open **Manage Server** after every restart and load the save by hand, that doesn't apply here. We turned that interface off because of a known security issue, and the server loads your world on its own instead.
:::

## Troubleshooting

| Issue | What to check |
|---|---|
| Server not found while Running | Re-copy your numeric IP and allocated port. If it still fails, contact support and report that the server is running but not found. |
| Connection times out on first boot | Wait until the panel shows **Running**; initial downloads can take 10–20 minutes. |
| Manage Server times out | That interface is disabled. See the [Manage Server guide](/docs/game-servers/starrupture/manage-server) for the panel equivalents. |
| "Wrong password" with the correct password | Trailing space in the **Player Join Password** field. Retype it and restart. |
| Joined, but the world is empty | The server started a fresh session. Check that **Session Name** on the Startup tab matches the folder in `StarRupture/Saved/SaveGames/` on the Files tab. |
| Everyone was kicked at once | Check the console for a restart, crash or resource limit. If it repeats, [open a ticket](https://evlbox.com/support) and we'll look at resources. |
| Client says the server version doesn't match | Your game updated before the server did, or the reverse. Restart the server to pull the latest build. |
| Server is stuck on Starting for 30+ minutes | Watch the Console tab. If SteamCMD is still downloading, wait. If the log stops after `Running on Debian`, restart it once, then [open a ticket](https://evlbox.com/support). |

---

Questions? Reach out on the [support Discord](https://discord.com/invite/rWF4hJhbaM) or [create a ticket](https://evlbox.com/support).
