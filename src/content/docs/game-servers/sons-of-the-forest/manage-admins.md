---
title: "Giving admin rights on Sons of the Forest"
description: "Guide on giving your players admin rights on a Sons of the Forest Dedicated Server"
---

# Adding admin users

:::note
Admin users can kick and ban players from in-game. Only set these to people you trust!
:::
### Find Steam ID's


1. You'll need to find the Steam ID's of people you'd like to add to your admin list. We suggest using [SteamID.io](https://steamid.io/ "Steam ID I/O Site"). Input your steam profile name and copy the steamID. It should look like this: "STEAM_0:0:11101"
2. Login to the [Nitro Panel](https://nitro.evlbox.com) and open your Sons of the Forest server. 
3. Click on "File Manager". Open the "serverconfig" folder. 

![serverconfig](/docs/sotf/dedicatedserver.jpg)

4. Open the ownerswhitelist.txt file and add the STEAM ID's one per line in the file. Then click Save Content.

![owners](/docs/sotf/ownerswhitelist.jpg)

5. Go to the console and restart the server. Once in-game admin users will be able to kick and ban users from the ESC menu -> Players. 
