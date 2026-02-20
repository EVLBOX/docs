---
title: "Palworld Hosting"
---


![palworld_header.jpg](/palworld/palworld_header.jpg)
[Palworld Servers](https://evlbox.com/amazing-palworld-hosting-6gb-ram/)


## Hosting Guides


[Article - Connect to your Server](/game-servers/palworld/connect-to-server)
[Article - Change your Server Name and Password](/game-servers/palworld/server-name-and-password)
[Article - Change your Server Settings](/game-servers/palworld/server-settings)
[Article - Admin Commands](/game-servers/palworld/admin-commands)
[Article - How to Delete and Archive Save Data](/game-servers/palworld/delete-and-archive-saves)
[Article - How to Change your Server RAM and CPU](/game-servers/palworld/change-server-specs)
[Article - How to Migrate Save Data](/game-servers/palworld/migrate-save-data)
[Article - How to Restore Saves from Backup Data](/game-servers/palworld/restore-saves)
[Article - How to Enable Automatic Updates](/game-servers/palworld/update-server)
[Article - How to Schedule Automatic Server Starts](/game-servers/palworld/scheduled-start)
[Article - How to Setup RCON Commands](/game-servers/palworld/rcon-commands)
[Article - How to Update Your Server for Xbox](/game-servers/palworld/xbox-server)

## Updates

---
**6/27/24**
Version 0.3.1 is here! With the Sakurajimma update there are many new changes to explore including dedicated servers for Xbox. See the article above for more information on how to update your server to connect to Xbox. 


**1/25/24**
:::caution
With the latest Palworld Update, some people are seeing an error about running an incompatible version of the game when they try to connect to their dedicated server
:::
To Fix this, enable automatic updates on startup for your server and then restart it. On server startup you will see some details in the log about updates and a success message once the the changes are fully installed. 

You may also want to set up a schedule for automatic server restarts. Please see the guide for more information on how to create a schedule. 

**1/22/24**
> **Memory Leak information:**
What we know so far is that having more bases, having more pals out at your base working, having a high number of bases, and going into dungeons causes the memory leak to get worse. 


As of right now there are a few changes that can be made to potentially help this issue. 
- As an option, you can turn off raids in the server settings. To turn these off, set the "bEnableInvaderEnemy" variable in the server settings to False. See the guide on how to change your Server Settings for more information.
- Customers can upgrade/downgrade their RAM at any time. Any value between 8GB and 16GB RAM. Upgrading the ram won't solve the memory leak but it can increase the time between crashes. For more information, see the guide on how to change your server RAM and CPU. 
- Scheduling automatic server starts can help prevent the server from crashing, see the guide on how to schedule automatic server starts for more information.

If you are running into issues logging into to a password protected server see this link: 
[Workaround for Direct IP Connect to a Password Enabled Server](https://docs.google.com/document/d/1PjlSBt3FyiqlpmNtkOiXWXK25mV4KjpsL38DxR-SAto/edit?pli=1)

