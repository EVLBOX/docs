---
title: "How to Connect to your 7 Days to Die Server"
description: "Name your 7 Days to Die server, set a password, and join it from the in-game browser, by direct IP, or from PlayStation and Xbox with crossplay."
head:
  - tag: meta
    attrs:
      property: "og:title"
      content: "How to Connect | EVLBOX 7 Days to Die Server"
  - tag: meta
    attrs:
      property: "og:description"
      content: "Name your 7 Days to Die server, set a password, and join it from the in-game browser, by direct IP, or from PlayStation and Xbox with crossplay."
  - tag: meta
    attrs:
      property: "og:image"
      content: "https://evlbox.com/docs/7dtd/header.jpg"
  - tag: meta
    attrs:
      property: "og:url"
      content: "https://evlbox.com/docs/game-servers/7-days-to-die/how-to-connect/"
  - tag: meta
    attrs:
      name: "twitter:card"
      content: "summary_large_image"
  - tag: meta
    attrs:
      name: "twitter:image"
      content: "https://evlbox.com/docs/7dtd/header.jpg"
---



This guide covers naming your server, setting a password, and every way to join it — from PC, by direct IP, and from a console.

:::note
On first start your server downloads about 13 GB of game files, then generates the world if you're using a random map. Expect 15 to 30 minutes, and a console that looks idle while it works. Later starts take about a minute.
:::

## 1. Set the server name and password

1. Log in to the [Nitro Panel](https://nitro.evlbox.com) and open your 7 Days to Die server.
2. Stop the server if it's running.
3. Open the **Startup** tab.
4. In **Server Name**, enter the name players will search for. Be specific — something like `Server` gets buried under thousands of others.
5. In **Server Password**, set a password if you want the server private. Leave it blank for an open server.
6. Go to the **Console** tab and start the server.

![Nitro panel Startup tab with the Server Name and Server Password fields](/docs/7dtd/startup-name-password.png)

:::caution
Changing **Save Name** or **Game World** doesn't rename your world — it starts a new one. Your old save isn't deleted, but nobody will be standing in it. Only touch those when you actually want a fresh start.
:::

## 2. Join from the in-game server browser

This is the easiest route and works for most players.

1. Check the **Console** tab and confirm the server has finished starting.
2. Launch 7 Days to Die and choose **Join a Game**.
3. Type your server name, or part of it, into the search field.
4. Set the filter dropdowns to show everything rather than leaving them on the defaults. The browser hides servers by ping, player count and modded status out of the box — this is the most common reason people can't find their own server.
5. Select your server and click **Connect**. Enter your password if you set one.

![7 Days to Die Join a Game screen with a server name filter applied](/docs/7dtd/server-browser-filter.png)

:::tip
Once you've joined, click the star next to the server name to favourite it. It'll sit at the top of the browser every time after that.
:::

## 3. Join by direct IP

Use this when the browser won't show your server, or when your server visibility is set to friends-only or unlisted.

1. In the Nitro panel, find your server address and port on the **Console** tab — it looks like `lunar.evlbox.com:26900`.
2. In game, choose **Join a Game**.
3. At the bottom of the screen, enter the address in the **IP** field and the port in the **Port** field.
4. Click **Connect to IP**.

![Nitro panel Console tab showing the server address and port](/docs/7dtd/console-ip-port.png)

![7 Days to Die Connect to IP fields at the bottom of the Join a Game screen](/docs/7dtd/connect-to-ip.png)

:::note
Use the port shown in the panel, not the default. If your server was allocated something other than 26900, that's the one to enter.
:::

## 4. Join from PlayStation or Xbox

Console players can join, but only if your server meets every requirement The Fun Pimps set. Miss one and consoles simply won't see the server — usually with no error to explain why.

| Setting (Startup tab) | Required value |
|---|---|
| **Allow Crossplay** | `true` |
| **EasyAntiCheat** | `true` |
| **Max Players** | 8 or fewer |
| **Server Visibility** | `2` (public) |
| Mods installed | None |

1. Stop the server.
2. On the **Startup** tab, set **Allow Crossplay** to `true` and **EasyAntiCheat** to `true`.
3. Make sure the `Mods` folder is empty. Any mod present blocks console players even if everything else is right.
4. Start the server, then search for it by name in the console server browser.

:::danger
Turning EasyAntiCheat on to enable crossplay stops client-side mods from working. Crossplay and mods can't run on the same server — if you want both, you need two servers.
:::

The full requirements are published by The Fun Pimps at [Crossplay Server Requirements](https://7daystodie.com/crossplay-server-requirements/).

## Troubleshooting

| Issue | What to check |
|---|---|
| Server isn't in the browser at all | Set every browser filter to show everything. Confirm **Server Visibility** is `2`. Give a freshly started server two or three minutes to register. |
| Not in the browser, but direct IP works | Almost always a client-side filter, or **Server Visibility** set to `1` or `0`. |
| Shows in the browser but every join times out | If the console shows no errors and your password is right, this is a network setting on our side. [Open a ticket](https://evlbox.com/help) and say the server is **visible but unjoinable** — that detail points us straight at the cause. |
| "Server is still loading", or a timeout | The server is generating a world or downloading an update. Watch the **Console** tab until output stops scrolling. |
| Wrong password with the correct password | Trailing space in the **Server Password** field. Retype it and restart. |
| Console players can't see it | Work through the table in step 4. Check for leftover files in `Mods`. |
| Kicked for a version mismatch | Your client updated before the server did, or the reverse. Restart the server to pull the latest build. |
| Stuck on "Creating player" | Usually a client-side mod mismatch. See [How to Install Mods](/docs/game-servers/7-days-to-die/install-mods). |

---

Questions? Reach out on the [support Discord](https://discord.com/invite/rWF4hJhbaM) or [create a ticket](https://evlbox.com/help).
