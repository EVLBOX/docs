---
title: "Server Privacy — Schedule I"
description: "Configure your Schedule I server as private or public, manage authentication, and set up Steam game server tokens."
---

# Server Privacy

Schedule I servers can run in two modes: **public** (visible on Steam's server browser, requires authentication) or **private** (LAN/direct connect only, no authentication required).

## Public Server (Steam Authentication)

For public servers that appear on the Steam server browser:

1. Set **Auth Provider** to `steam_game_server`
2. Set **Steam GS Anonymous** to `true`
3. The server registers with Steam's game server API

:::caution
Steam game server authentication requires the server to communicate with Valve's servers. In Docker/Wine containers, this may not work reliably. If players can see your server but can't join, switch to Private mode.
:::

## Private Server (No Authentication)

For private servers or LAN play:

1. Set **Auth Provider** to `None`
2. Authentication is disabled — players connect directly by IP
3. Optionally set a **Server Password** to control access

:::tip
Private mode with a server password is the most reliable setup for containerized servers. No Steam API dependency, no authentication issues.
:::

## Steam Game Server Token

If you need to run a **public server with non-anonymous authentication**:

1. Go to [Steam Game Server Account Management](https://steamcommunity.com/dev/managegameservers)
2. Sign in with the Steam account that owns Schedule I (App ID 3164500)
3. Click **Create a Game Server Account**
4. Enter a memo (e.g. "My Schedule I Server") and set a login token
5. Copy the generated token

In your Nitro Panel Startup tab:

| Setting | Value |
|---------|-------|
| Auth Provider | `steam_game_server` |
| Steam GS Anonymous | `false` |
| Steam GS Token | *(your generated token)* |

:::tip
Most users don't need a Steam game server token. Anonymous login (`Steam GS Anonymous = true`) is sufficient for public servers in most cases. Only use a token if you specifically need non-anonymous registration.
:::

## Port Configuration

| Port | Protocol | Purpose |
|------|----------|---------|
| Primary (e.g. 15637) | UDP + TCP | Game traffic and status queries |
| 27016 | UDP | Steam server browser query port (optional) |

The primary port is your server allocation — found in the Nitro Panel **Network** tab. The Steam query port is configured in the server settings and does not need its own allocation.
