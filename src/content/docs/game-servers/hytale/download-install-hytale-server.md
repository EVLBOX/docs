---
title: "Download & Install Hytale Server"
description: "LEarn how to download and install the Hytale server"
---

# Download and Install Hytale Server

:::caution
You must own a copy of Hytale in order to setup and use an EVLBOX Hytale server. Visit the [Hytale Store](https://store.hytale.com/) to purchase a copy.
:::
### Authenticate the Installer and Download Server

After [ordering](https://evlbox.com/games/hytale) your Hytale server, sign into the EVLBOX Nitro Panel

1. Login to [nitro.evlbox.com](https://nitro.evlbox.com)
2. Click on your server and go to the Terminal window. 
3. Start your server by clicking the Green Triangle "Start" button. 
4. The console displays a message "Please visit the following URL to authenticate" Click on the first link.

![hytale-auth-downloader](/docs/hytale/hytale-auth-downloader.png)

5. The link takes you to Hytale's website. Login to the account that owns a copy of Hytale, then click on Approve. 

![hytale-download-approval](/docs/hytale/hytale-auth-approve.png)

6. Once approved, the download starts and takes about 1-2 minutes. When complete you should see a green "Hytale Server Booted!" You now must Authorize the server (see below steps) 

![hytale-booted](/docs/hytale/booted.png)

### Authenticate your Hytale Server

This binds your Hytale account to your game server as required by [Hytale's server documentation](https://support.hytale.com/hc/en-us/articles/45326769420827-Hytale-Server-Manual). 

1. Once your server has booted up type in `/auth login device` and press enter 

![auth-login](/docs/hytale/auth-login.png)

2. Click the second link which contains the device code. Click Approve on the Hytale webpage.

![hytale-approve](/docs/hytale/hytale-auth-approve.png)

You should then see a message like this: 

![hytale-success](/docs/hytale/hytale-succeed.png)

:::caution
This step is critically important! If you skip this step you will have to authenticate on every server restart!!!
:::
3. In the console you must now type `/auth persistence Encrypted` this will save your authentication to your server

![hytale-store](/docs/hytale/store.png)

### Connect to your server

1. In the Nitro panel, click into your servers' terminal screen. 
2. On the right side you'll see `Address` click on it to copy

![login-hytale](/docs/hytale/login.png)

In the example the address `scorpio.evlbox.com:27017` is what you need to copy

3. Launch Hytale and click on `Servers`

![servers-hytale](/docs/hytale/servers.png)

4. Click `Add Server` in the bottom right corner. 

![servers-add](/docs/hytale/addserver.png)

5. Paste the connection address from Nitro Panel. Set a label for your server. 

![server-details](/docs/hytale/servername.png)

6. To join your newly added server double click it from the list. 

![double-click](/docs/hytale/doubleclick.png)

You should now be connected to your server! If you need further assistance, please reach out to our support team on [Discord](https://discord.com/invite/rWF4hJhbaM)

[**Grab your own Hytale Server**](https://evlbox.com/games/hytale/)
