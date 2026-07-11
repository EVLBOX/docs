---
title: "Server Settings (.evlbox.toml)"
description: "Control your automatic backups and request support directly from your server's files with the .evlbox.toml settings file."
---

Every supported game server includes a small settings file, `.evlbox.toml`, in the root of its files. Edit it in the File Manager and save — that's how you control your automatic backups and light the Support Beacon when you need help. No extra logins or dashboards. Changes apply automatically within about 10 minutes.

![file-manager-showing-evlbox-files](/docs/nitro/evlbox-files.png)

## The two files

| File | Who writes it | What it's for |
|---|---|---|
| `.evlbox.toml` | You | Your settings. We create it once with defaults, then never touch it again. |
| `.evlbox-status.txt` | EVLBOX | Read-only report: what the system is doing, backup status, and Support Beacon codes. Don't edit it — it gets rewritten. |

:::tip
Deleting `.evlbox.toml` doesn't reset anything — it comes back within ~10 minutes with the same settings. This also means a full server wipe or reinstall keeps your backup preferences. If you save a typo (broken TOML), nothing breaks: your previous settings stay in force and `.evlbox-status.txt` explains what's wrong.
:::

## Backup settings

![editing-evlbox-toml-in-the-file-editor](/docs/nitro/evlbox-toml.png)

```toml
[backups]
enabled = true
interval = "8h"        # one of: 2h, 6h, 8h, daily. "" = plan default
extra_ignores = [      # extra folders/files to EXCLUDE from backups
  "dynmap/",
]
```

- **`enabled`** — set to `false` to stop scheduled backups for this server, `true` to turn them back on. This has the same effect as toggling the EVLBOX backup schedule in the panel.
- **`interval`** — how often backups run. The fastest allowed interval depends on your plan's backup slots: 1 slot → daily, 2–6 → 8h, 7–11 → 6h, 12+ → 2h. Asking for faster than your plan supports isn't an error — it's adjusted to your plan's minimum and noted in `.evlbox-status.txt`. Slower is always allowed.
- **`extra_ignores`** — extra exclude patterns (gitignore-style) for things you don't need backed up, like rendered maps or media dumps. Up to 50 patterns; you can only exclude *more*, never re-include files EVLBOX already excludes.

![evlbox-added-backup-schedule](/docs/nitro/scheduled-backup.png)

:::caution
If backups were turned off via the panel schedule while the file already says `enabled = true`, re-enable them with a deliberate toggle: set it to `false`, save, then back to `true`, save. Or just re-enable the schedule in the panel.

![edit-schedule-enabled-toggle](/docs/nitro/schedule-toggle.png)
:::

Backups auto-rotate at your slot limit (oldest unlocked backup is deleted first) — a faster interval doesn't grant more storage, it just cycles your slots faster.

## The Support Beacon

Need help with your game server? Light the beacon:

```toml
[support]
beacon = "server crashes every night around 3am"
discord = "yourdiscordname"    # optional, helps staff reach you
```

1. Write a short description of the problem into `beacon` (up to 60 characters) and save the file.
2. Within 5–10 minutes, a support code appears in `.evlbox-status.txt` — it looks like `EMBER-4821` and is valid for 24 hours.

   ![status-file-showing-support-beacon-lit](/docs/nitro/evlbox-status.png)

3. The server owner also gets a confirmation email from `noreply@evlbox.com` with the code — even if a subuser lit the beacon. A beacon does **not** open a ticket by itself.

   ![beacon-confirmation-email](/docs/nitro/status-email.png)

4. Open a ticket in the [EVLBOX Discord](https://evlbox.com/discord) or at [portal.evlbox.com](https://portal.evlbox.com) and paste the code. Staff instantly see which server it is and what's wrong — no twenty questions.

To light the beacon again later, *change* the text. Limit: one beacon per server per hour (edits within the hour are ignored — the first message is the one staff see).

:::note
The beacon replaces the old support-PIN step for **game server** tickets only. Billing and account matters (cancellation, payment, ownership) still verify through the billing panel as before.
:::

## Supported games

Automatic backups (and the settings file) are currently live for:

- **Tower Unite**
- **Satisfactory**
- **Palworld**
- **Minecraft** — all variants we host (Paper, Forge, NeoForge, Fabric)

More games are coming. If your server doesn't have a `.evlbox.toml` file yet, its game isn't supported — there's nothing to configure.

Backups cover your save/world data and configuration — never reinstallable game files, mods, caches, or logs. That's why a Minecraft backup is megabytes even when the server folder is gigabytes.
