---
title: "Server Privacy — Schedule I"
description: "Configure your Schedule I server as public or private, and manage server passwords."
---

# Server Privacy

Schedule I servers can run in two modes. Both support setting a server password.

:::tip
We recommend running a **public server with a password**. Steam authentication verifies players are real Steam users, and the password adds a second layer of security. Private mode is simpler but skips Steam verification entirely.
:::

## Public Server (Recommended)

Steam game server authentication verifies that players own Schedule I. The server also appears on the Steam server browser (accessible from the Steam client, not in-game).

In-game, players use **Direct Connect** to join by IP and port. Once connected, they can save the server as a favorite for easy rejoin.

| Setting | Value |
|---------|-------|
| Auth Provider | `steam_game_server` |
| Steam GS Anonymous | `true` |
| Server Password | *(your password)* |

## Private Server (No Authentication)

Skipping Steam authentication means anyone with the IP can connect — no Steam ownership check. A password is strongly recommended if using this mode.

| Setting | Value |
|---------|-------|
| Auth Provider | `None` |
| Server Password | *(your password)* |

## Server Password

Set a password from the Startup tab under **Server Core → Server Password**. Leave empty for no password. A password works in both public and private mode.
