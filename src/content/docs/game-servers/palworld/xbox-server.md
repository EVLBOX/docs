---
title: "Console Crossplay: Xbox and PS5"
description: "Enable crossplay so Xbox and PS5 players can join your Palworld server"
---

# How to Enable Console Crossplay (Xbox and PS5)
Palworld dedicated servers now support full crossplay between Steam, Xbox, PS5, and Mac. Console players cannot type in an IP address — they can only join servers listed in the in-game **Community Servers** browser, so your server must be set as a community server for them to connect.

:::caution
Characters are tied to the platform account they were created on. If a player switches platforms, they will start a new character. Buildings created on the server will still exist but may not be accessible due to being in a different Guild.
:::

## Update the Server Settings
1. Login to your server in the EVLBOX Nitro Panel and Stop your server
![stop_server.png](/docs/palworld/stop_server.png)
2. Click the Startup tab under configurations and set the following:

| Setting | Value |
|---------|-------|
| Community Server (Public Lobby) | On |
| Crossplay Platforms | `Steam+Xbox+PS5+Mac` |

:::tip
Crossplay Platforms is set to allow all platforms by default. You can restrict it with the dropdown - for example `Xbox+PS5` for a console-only server.
:::
3. Go back to the console tab and Start your server. Wait for your server to finish setting up. More information is available in the Console Tab and Logs.
4. Console players can now find the server under **Join Multiplayer Game → Community Servers** in Palworld. Use the search box to find your server name. Setting a Server Password is recommended if you don't want strangers joining your listed server.
5. More information on how to login from PC can be found here: [Article - How to connect to your server](/docs/game-servers/palworld/connect-to-server)
