---
title: "How to Install Mods on Project Zomboid"
description: "How to Install Mods on Project Zomboid"
---

# Mods for Project Zomboid


You can install individual mod files to your server or install a custom mod package that could contain over a hundred individual mods. Mods are easy to install and can easily be changed in the Nitro Panel. 

[Single Mod Installations](#how-to-add-a-mod-to-your-project-zomboid-server) 
[Mod Collection Installations](#how-to-add-a-mod-collection-to-your-project-zomboid-server)


### How to Add a Mod to your Project Zomboid Server
:::note
Adding Mods can potentially corrupt existing save files. Check Mod compatibility before installing and or Back up your data before proceeding.
:::
1. From the Steam Workshop, find the Mod you would like and copy its Workshop ID and Mod ID. 

![mod_id_pika.png](/docs/zomboid/mod_id_pika.png)

2. Log in to the Nitro Panel, Click Manage Server and Stop your server. 

![stop_server.png](/docs/zomboid/stop_server.png)

3. Click on the Files Tab

![files.png](/docs/zomboid/files.png)

4. Navigate to server-data/Server/EVLBOX.ini and click on the file. 

5. Scroll Down to Line 55 and next to Mods= enter the Mod ID that you want to add. 

![server_data_mod_.png](/docs/zomboid/server_data_mod_.png)

6. Scroll down to Line 182 and next to WorkshopItems= enter the Workship ID that you want to add .

![server_data_workshop.png](/docs/zomboid/server_data_workshop.png)

7. Scroll downa and click save content. 

![save.png](/docs/zomboid/save.png)

8. Then Start your server and Log in. 

9. If you don't have the mod installed locally, the game will prompt you to install the missing items before you connect. 

![install_mods.png](/docs/zomboid/install_mods.png)

### How to Add a Mod Collection to your Project Zomboid Server

There are many mod collections available in the steam workshop that contain hundreds of individual moods. If you are wanting to install several mods that you select, you can also create a new mod collection of your own in steamn. 

1. Copy the URL of the collection you want to add from Steam. 

![steam_collection2.png](/docs/zomboid/steam_collection2.png)

2. Go to https://pzidgrabber.com/ and paste in the URL. Click Submit. 

![pzidgrab.png](/docs/zomboid/pzidgrab.png)

3. In a separate tab, navigate to the Nitro Panel. Stop your Server and Navigate to Files and Open the .cache/Server/EVLBOX.ini file. 

4. Scroll Down to Line 55 and next to Mods= Copy and Paste the Mods list generated from pzidgrabber.com

5. Then Scroll down to line 182 and next to WorkshopItems= copy and paste the Workshop Items from pzidgrabber.com

![pzidgrab_list.png](/docs/zomboid/pzidgrab_list.png)

6. Save the Content and Start Your Server. 


:::note
Questions? Problems? Please reach out to us on the support discord or create a ticket!
:::
