---
title: "First Time Setup - Tower Unite Condo Server"
description: "Step-by-step guide to get your Tower Unite condo server online with EVLBOX: Steam and Tower login tokens, admins, choosing a condo map, and uploading the condo you built in single player."
head:
  - tag: meta
    attrs:
      name: "keywords"
      content: "Tower Unite condo server setup, EVLBOX condo guide, Tower Unite GSLT, Tower Unite dedicated condo, condo map export, condo admin SteamID, TowerServer.ini, Tower/Condos"
  - tag: meta
    attrs:
      property: "og:title"
      content: "How to Set Up Your Tower Unite Condo Server | EVLBOX Guide"
  - tag: meta
    attrs:
      property: "og:description"
      content: "Step-by-step guide to get your Tower Unite condo server online with EVLBOX: Steam and Tower login tokens, admins, choosing a condo map, and uploading the condo you built in single player."
  - tag: meta
    attrs:
      property: "og:image"
      content: "https://evlbox.com/docs/towerunite/gslt.png"
  - tag: meta
    attrs:
      property: "og:image:alt"
      content: "Steam GSLT Token Creation Page"
  - tag: meta
    attrs:
      property: "og:url"
      content: "https://evlbox.com/docs/game-servers/towerunite/how-to-setup-condo/"
  - tag: meta
    attrs:
      property: "og:type"
      content: "article"
  - tag: meta
    attrs:
      name: "twitter:card"
      content: "summary_large_image"
  - tag: meta
    attrs:
      name: "twitter:title"
      content: "How to Set Up Your Tower Unite Condo Server | EVLBOX Guide"
  - tag: meta
    attrs:
      name: "twitter:description"
      content: "Step-by-step guide to get your Tower Unite condo server online with EVLBOX: Steam and Tower login tokens, admins, choosing a condo map, and uploading the condo you built in single player."
  - tag: meta
    attrs:
      name: "twitter:image"
      content: "https://evlbox.com/docs/towerunite/gslt.png"
  - tag: meta
    attrs:
      name: "twitter:image:alt"
      content: "Steam GSLT Token Creation Page"
  - tag: script
    attrs:
      type: "application/ld+json"
    content: |
      {"@context":"http://schema.org","@type":"Article","headline":"How to Set Up Your Tower Unite Condo Server | EVLBOX Guide","description":"Step-by-step guide to get your Tower Unite condo server online with EVLBOX: Steam and Tower login tokens, admins, choosing a condo map, and uploading the condo you built in single player.","url":"https://evlbox.com/docs/game-servers/towerunite/how-to-setup-condo/","image":"https://evlbox.com/docs/towerunite/gslt.png","imageAlt":"Steam GSLT Token Creation Page","author":{"@type":"Organization","name":"EVLBOX","url":"https://evlbox.com"},"publisher":{"@type":"Organization","name":"EVLBOX","logo":{"@type":"ImageObject","url":"https://evlbox.com/docs/favicon.png"}},"datePublished":"2025-07-22","dateModified":"2026-10-24"}
---

If you've just picked up a **Tower Unite Condo Server** from EVLBOX, this is your first stop. Your server is installed and will boot straight away, but it will not show up in the in-game condo list until you give it two login tokens. Everything on this page is done from the **Startup** tab in [Nitro Panel](https://nitro.evlbox.com).

:::tip[What you get out of the box]
A fresh EVLBOX condo server already has its config file (`TowerServer.ini`) filled in from your Startup settings and a save folder for **every** condo map under `Tower/Condos/`. You only need to add tokens and admins.
:::

## Step 1: Create a Steam Game Server Login Token (GSLT)

Visit [Steam Game Server Token Management](https://steamcommunity.com/dev/managegameservers).

- Use **App ID: 394690** (that is Tower Unite's game App ID, not the server download).
- Add a short memo, e.g. "EVLBOX Condo".
- Click **Create** and copy the 32-character token.

![GSLT Creation](/docs/towerunite/gslt.png)

The token is tied to **your** Steam account, so EVLBOX cannot generate it for you. Each dedicated condo needs its own token.

## Step 2: Generate a Tower Unite Server Token

Visit [Tower Unite Server Management](https://moderation.towerunite.com/manage_game_servers.php) and sign in through Steam.

- Click **Add Server** and copy the token it gives you.

:::danger[Treat both tokens like passwords]
Anyone with your tokens can run a server that pretends to be yours. If a token leaks, click **Regenerate** on the page that issued it and update your server.
:::

## Step 3: Enter the tokens in Nitro Panel

1. Open your server in [Nitro Panel](https://nitro.evlbox.com) and go to the **Startup** tab.
2. Paste the GSLT from Step 1 into **Steam Login Token**.
3. Paste the token from Step 2 into **Tower Unite Login Token**.
4. Set **Condo Title** to the name you want in the condo list. Add `18+` to the title if you host mature content, PixelTail delists unlabeled mature condos.
5. **Restart** the server. Startup settings are written into `TowerServer.ini` on every start.

Until both tokens are set the console shows this reminder each start, and the server runs as an unlisted condo:

```text
[EVLBOX] WARNING: Steam Login Token / Tower Login Token are not set. The condo will run but will NOT appear in the Tower Unite condo list.
```

:::caution[Paste the real token or leave the field empty]
With an empty token the server starts and simply stays off the list. With a **wrong** token (a typo, a token from another server, or a placeholder) the server waits for Steam forever and never gets past *Starting*. If your server hangs on start, check the two token fields first.
:::

## Step 4: Give yourself admin

Admins can edit the condo, change settings, kick and ban. You need your **SteamID64**, the 17-digit number for your account:

1. Open [steamid.io](https://steamid.io) (or [steamidfinder.com](https://www.steamidfinder.com)), paste your profile link, and copy the **steamID64** value.
2. On the **Startup** tab, paste it into **Admin SteamIDs**. Several admins? Separate the IDs with commas: `76561198000000001, 76561198000000002`.
3. Restart the server. Each ID is added to the `[Administration]` section of `TowerServer.ini` and the console confirms it:

```text
[EVLBOX] Added admin 76561198000000001 to TowerServer.ini
```

IDs are only ever **added**, never removed, so you can also manage the list by hand: open **Files → Tower/Saved/Config/LinuxServer/TowerServer.ini** and add one `AdminSteamID=` line per admin under `[Administration]`. Delete a line to remove that admin.

![Admin lines in TowerServer.ini](/docs/towerunite/admins.png)

Once you are an admin, press **Tab** in your condo and open **Settings → Player Permissions** to hand out finer-grained permissions (build, move, moderator tag) to individual players without making them full admins.

## Step 5: Pick your condo map

The **Condo Map** dropdown on the **Startup** tab chooses which condo the server runs: Condo, House, Smooth Dirt, Suite, Resort, Smooth Autumn, Underwater, Highrise, Art Studio, Theatre, Courtyard or Ice Moon. The list shows the game's internal names (`C_Condo`, `C_House`, …); the full translation table is on the [Condo Maps & Save Files](/docs/game-servers/towerunite/condo-maps/) page.

If you have not uploaded a save yet, the map starts as a fresh, empty condo. On that first start the console prints `FAILED TO LOAD CONDO DATA: ../../../Tower/Condos/C_Condo/C_Condo.map` once; that is expected when the file does not exist yet. Anything built on the server is saved into `Tower/Condos/<Map>/<Map>.map` from then on.

## Step 6: Start and find your condo

Start the server and wait for the console to print `Engine Initialization`. In Tower Unite, open the condo browser; your condo appears under the title you chose. Press **Tab** in the condo for the scoreboard, where the gear icon gives you the condo settings and the **Saves** menu.

## Importing an existing condo from single player

Built something in single player that you want online? Move the save over.

### Export the condo in-game

1. Load your condo in Tower Unite.
2. Press **Tab**, then **Saves → Export Condo**.
3. The game writes a `.map` file to `Tower Unite/Workshop/Condo Exports/` inside your Steam library (usually `C:\Program Files (x86)\Steam\steamapps\common\Tower Unite\Workshop\Condo Exports\`).

:::note
Your export must come from the **same condo map** you select on the server. A House export will not load on the Condo map.
:::

### Upload it to the server

1. In Nitro Panel open **Files → Tower → Condos** and enter the folder for your map, e.g. `C_Condo`.
2. Upload the exported file and rename it to exactly `<MapName>.map`, e.g. `C_Condo.map`.

```text
Tower/Condos/C_Condo/C_Condo.map
```

![Condo Map Folder Example](/docs/towerunite/condo-map.png)

3. On the **Startup** tab set **Condo Map** to the same map (`C_Condo`).
4. Restart the server. The console should show `LOADING CONDO DATA: ../../../Tower/Condos/C_Condo/C_Condo.map`.

Prefer to keep your own file name? Set `CondoFile=` in `TowerServer.ini` instead of renaming, see [Using a different file name](/docs/game-servers/towerunite/condo-maps/#using-a-different-file-name).

:::caution[Stop the server before replacing a save]
Replacing `C_Condo.map` while the server is running is risky: the next autosave can overwrite your upload with the old build. Stop, upload, start.
:::

## Server settings reference

`Tower/Saved/Config/LinuxServer/TowerServer.ini` is the server's only config file. EVLBOX creates it for you and re-creates it if it ever goes missing.

```ini
[/Script/TowerNetworking.DedicatedServerOptions]
ServerTitle=EVLBOX.COM New Condo Server
MaxPlayers=32
SteamLoginToken=
TowerLoginToken=

[DedicatedCondoOptions]
CondoAutoSave=True
CondoBackupsEnabled=True
#CondoFile=

[Administration]
AdminSteamID=76561198000000001
```

| Setting | Where to change it | Notes |
|---|---|---|
| `ServerTitle`, `MaxPlayers`, `SteamLoginToken`, `TowerLoginToken` | **Startup** tab | Re-written from the Startup tab on every start, so edit them there, not in the file. Max players is 2-64. Tokens are empty on a new server. |
| `AdminSteamID` | **Startup** tab (added) or the file (added/removed) | One line per admin. |
| `CondoAutoSave` | the file | `True` saves the condo periodically after changes. Recommended. |
| `CondoBackupsEnabled` | the file | `True` keeps a backup copy each time the condo is saved. Turn off if disk space is tight; EVLBOX also takes [scheduled server backups](/docs/getting-started/nitro-panel/server-settings/). |
| `CondoFile` | the file | Load a save with a different file name from the selected map's folder. |

Bans live in `Tower/Saved/Config/LinuxServer/TowerBans.ini` (one `SteamID=<id>,0` line per ban under `[Bans]`), and the server writes joins, leaves and chat to `Tower/TowerServer_Chat.txt`.

## Your condo server is ready!

You're now hosting a persistent condo online. Invite friends, show off your space, and enjoy your custom condo experience. Something not working? Check [Known Issues](/docs/game-servers/towerunite/known-issues/) or head back to the [Tower Unite hub](/docs/game-servers/towerunite/).
