---
title: "Upload SOTF Save to a server"
description: "Discover how to upload your singleplayer sons of the forest save to a dedicated server so that you can play online with your friends"
---

# Upload an existing save file

:::caution
If you've been playing peer-to-peer with others, you'll need to ask the host to send you their save. While all players have a copy of their inventory, only the host player has the complete save files. If you skip this part you may lose your buildings and structures.
:::
### Upload your local save via SFTP to Save Slot 2

We suggest using [Cyberduck](https://cyberduck.io/download/ "Cyberduck Download page") (it's free) for this tutorial. The built in file manager in nitro panel can't upload multiple files at a time or folders. 


1. Login to nitro.evlbox.com, and locate your Sons of the Forest server. 
2. Click the settings menu, and copy the SFTP details into the cyberduck client. Click connect. Click allow on the Unknown Fingerprint prompt. 

![nitro-settings](/docs/sotf/sftp-settings.jpg)

![cyberduck](/docs/sotf/cyberduck-settings.jpg)

![fingerprint](/docs/sotf/sftp-fingerprint.jpg)

3. Browse to serverconfig/Saves/DedicatedServer/Multiplayer 

![serverconfig](/docs/sotf/serverconfig.jpg)

![savesfolder](/docs/sotf/save.jpg)

4. Sons of the Forest uses "save slots". Save slot 1 is named "0000000001", Save slot 2 is named "0000000002" and so on. Create a new save slot folder. Make a new folder in cyberduck File -> New Folder. Name it "0000000002" (or higher if you've already used Save slot 2)
5. On your local computer browse to C:\Users\[YOUR USERNAME]\AppData\LocalLow\Endnight\SonsOfTheForest\Saves it should look like this: 

![app-data](/docs/sotf/app-data.jpg)

6. Find the save folder you want to upload. In this screenshot, we open folder "2084132701". Inside the contents looks like this: 

![save-content](/docs/sotf/save-files.jpg)

7. Select all of the files in this folder, drag and drop them into the "0000000002" folder  (note, you can also just drag the entire save folder, then rename it to 0000000002)

![drag-and-drop](/docs/sotf/drag-and-drop.jpg)

8. Your save Slot 2 folder should look like this in cyberduck:

![finish](/docs/sotf/finished.jpg)

### Update your dedicatedserver.cfg 

You must now tell your dedicated server to use Save slot 2 with your existing save data. 

1. Go to the file manager tab, open the "serverconfig" folder

![serverconfig-folder](/docs/sotf/dedicatedserver.jpg)

2. Click on "dedicatedserver.cfg" file to edit it. Set "SaveSlot" from 1 to 2. Remember that 1 = "0000000001" and 2 = "0000000002" in serverconfig/Saves/DedicatedServer/Multiplayer. Be sure to set this accordingly. 

![saveslot2](/docs/sotf/save-slot.jpg)

3. Once changed, make sure to click "Save Content". Click the Console tab and click "Restart" to start the server. 

![consolebutton](/docs/sotf/console-buttons.jpg)

:::note
You will likely have to re-watch the intro cinematic. This doesn't mean your save didn't import. Since this is an early access game there are sometimes bugs when using the dedicated server.
:::
