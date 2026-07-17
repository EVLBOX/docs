---
title: "Server Settings — Schedule I"
description: "Configure your Schedule I dedicated server settings — gameplay, authentication, messaging, and more."
---

# Server Settings

All server settings are managed from the **Startup** tab in the Nitro control panel. Changes are applied automatically every time your server starts — no file editing required.

:::caution
Settings in the Startup tab overwrite the server config file on every start. Always use the Startup tab to make changes — manual file edits will be lost.
:::

## How to Change Settings

1. Log in to the Nitro Panel and **stop your server**
2. Go to the **Startup** tab
3. Edit any settings you want to change
4. **Start** the server — changes take effect immediately

## Server Core

| Setting | Default | Description |
|---------|---------|-------------|
| Max Players | `16` | Maximum player slots. Range: 1–64. |
| Server Password | *(empty)* | If set, players must enter this password to connect. Leave empty for an open server. |

## Authentication

Schedule I supports Steam Game Server authentication for public servers, or no authentication for private servers.

| Setting | Default | Description |
|---------|---------|-------------|
| Auth Provider | `steam_game_server` | `steam_game_server` for public servers. `None` for private/LAN servers. |
| Auth Timeout | `60` | Seconds to wait for Steam ticket handshake. Range: 30–120. |
| Steam GS Anonymous | `true` | Use anonymous Steam game server login. Recommended — keep enabled. |
| Steam GS Token | *(empty)* | Steam server token. Only needed if anonymous login is disabled. |

## Messaging

Controls how the server communicates with clients.

| Setting | Default | Description |
|---------|---------|-------------|
| Messaging Backend | `SteamNetworkingSockets` | `SteamNetworkingSockets` (recommended) or `FishNetRpc` for container deployments. |
| SNS Virtual Port | `0` | Steam Networking virtual port. Leave at 0. |
| SNS Max Payload | `1200` | Maximum message size in bytes. |

## Gameplay

| Setting | Default | Description |
|---------|---------|-------------|
| Time Multiplier | `1.0` | Game time speed. `1.0` = normal, `0.5` = half speed, `2.0` = double speed. |
| Allow Sleeping | `true` | Let players sleep in beds to advance time. |
| Pause When Empty | `false` | Pause the world simulation when no players are connected. |
| Quest Bootstrap | `StartFromBeginning` | New player quest start mode. `StartFromBeginning` or `StartPostIntro`. |
| Ignore Ghost Host | `true` | Ignore the dedicated server's loopback player for sleep voting. Keep `true`. |

## Autosave

| Setting | Default | Description |
|---------|---------|-------------|
| Enable Auto-Save | `true` | Save the world automatically on a timer. |
| Save Interval | `15.0` | Minutes between automatic saves. Range: 1–120. |
| Save on Player Join | `true` | Trigger a save when a player connects. |
| Save on Player Leave | `true` | Trigger a save when a player disconnects. |

## Performance

| Setting | Default | Description |
|---------|---------|-------------|
| Target Frame Rate | `60` | Server tick rate. Lower values reduce CPU usage. Range: 10–120. |

## Mod Setup

| Setting | Default | Description |
|---------|---------|-------------|
| Runtime | `il2cpp` | The game build type. `il2cpp` for default Steam branch, `mono` for alternate branch. |

:::caution
Changing the Runtime setting requires a full **reinstall** — the correct S1DS mod DLL is downloaded during installation. Stop the server, change the setting, then click **Reinstall**.
:::

## Mod Verification

| Setting | Default | Description |
|---------|---------|-------------|
| Mod Verification | `true` | Verify that client mods match the server's mod list. |
| Verification Timeout | `20` | Seconds to wait for client mod verification. Range: 5–60. |
| Block Risky Mods | `true` | Reject players with known cheat mods. |
| Allow Unpaired Mods | `true` | Allow players to use personal client mods not installed on the server. |
