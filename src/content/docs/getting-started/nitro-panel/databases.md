---
title: "MySQL Databases"
description: "Create and manage a MySQL database for your game server through the Nitro Control Panel."
---

import { Aside } from '@astrojs/starlight/components';

# MySQL Databases

Some EVLBOX game server plans (including **Minecraft** and **TF2**) include access to a **MySQL database** powered by MariaDB. You can create and manage your database directly from the Nitro Control Panel, and access it through our web-based database manager.

---

<Aside type="danger" title="Do not store sensitive data">
Your database is accessed over the internet using a standard MySQL connection, which is inherently unencrypted. **Do not store personally identifiable information (PII), passwords, payment details, or any other sensitive data** in your EVLBOX database. It is intended for game data only — things like player stats, plugin data, and game world state.
</Aside>

---

## Creating a Database

1. Log in to the [Nitro Control Panel](https://nitro.evlbox.com) and open your server.
2. Click **Databases** in the left sidebar.
3. If your plan includes a database allocation, click **Create Database**.
4. Your database will be provisioned and you'll be shown your:
   - **Database name**
   - **Username**
   - **Password**
   - **Host / Port**

Save these credentials somewhere safe — you'll need them to connect plugins or applications to your database.

---

## Accessing Your Database (Adminer)

You can manage your database visually using our hosted Adminer instance at **[https://nitro-db.evlbox.com](https://nitro-db.evlbox.com)**.

![Adminer login page showing the MySQL/MariaDB login form with Server pre-filled as 127.0.0.1](/nitro/adminer-login.png)

<Aside type="note" title="The Server field shows 127.0.0.1 — this is correct">
Leave the **Server** field as `127.0.0.1`. It's pre-configured and will not work if changed. Only fill in your **Username**, **Password**, and **Database** from the Nitro panel.
</Aside>

**To log in:**

1. Leave **Server** as `127.0.0.1`
2. Enter your **Username**, **Password**, and **Database name** from the Nitro Control Panel
3. Click **Login**

Once logged in, you'll see your database dashboard. A freshly created database will show "No tables." — that's expected.

![Adminer database view showing an empty database with no tables](/nitro/adminer.png)

From here you can:
- Run SQL queries via **SQL command**
- **Import** a `.sql` file to restore or seed data
- **Export** your database as a backup
- Create and browse tables

---

## Backups

EVLBOX takes **once-daily off-site backups** of all databases. If you need a database restored, open a support ticket and include your server name and the date you'd like restored to.

It's also a good habit to export your own backups periodically via Adminer — especially before making major changes.

---

## Connecting a Plugin or Application

Use the credentials from your **Nitro Control Panel** when configuring a plugin or application. Most Minecraft plugins (LuckPerms, CoreProtect, etc.) have a `config.yml` where you paste these values directly.

| Field    | Value                                        |
|----------|----------------------------------------------|
| Host     | **Use the host from your Nitro panel**       |
| Port     | 3306                                         |
| Database | *(shown in Nitro panel)*                     |
| Username | *(shown in Nitro panel)*                     |
| Password | *(shown in Nitro panel)*                     |

<Aside type="caution" title="Do not use 127.0.0.1 in plugin configs">
`127.0.0.1` is only valid inside Adminer, which runs on the same server as the database. Your game server runs on a **different machine**, so plugin configs must use the **host address shown in your Nitro panel**, not `127.0.0.1`.
</Aside>
