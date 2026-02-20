---
title: "How to Copy a Singlplayer World to your Server"
description: "Use SFTP to copy a singleplayer world to your server"
---

# How to Upload a Singleplayer world to your Server

### Upload your local File via SFTP
We suggest using [Cyberduck](https://cyberduck.io/download/ "Cyberduck Download page") (it's free). The built in file manager in nitro panel can't upload multiple files at a time or folders. Install Cyberduck and then proceed with directions below. 

1. Login to the Nitropanel and click Manage Server for Project Zomboid. Stop your server then on the Dashboard you will see SFTP details. Scroll down and Click Launch SFTP
![sftp_details.png](/zomboid/sftp_details.png)
2. The browswer will prompt you to open cyberduck. Click Open and then click allow on the following fingerprint message. Then, enter in your Nitro Panel Password and Login. 

![fingerprint.png](/zomboid/fingerprint.png)
![cyberduck_login.png](/zomboid/cyberduck_login.png)

3. Navigate to the .cache folder. If it is not viewalbe, in the menu, click View, Show Hidden Files. 
![show_hidden_files.png](/zomboid/show_hidden_files.png)

4. Then Navigate to .cache/Saves/Multiplayer

![multiplayer_saves.png](/zomboid/multiplayer_saves.png)

4. In a new file explorer window navigate to Users/Username/Zomboid/Saves/Mode
You will need to select the folder for the mode of the game you would like to upload like Builder, Survival, Etc. 

![save_file_local_location.png](/zomboid/save_file_local_location.png)

5. Drag and Drop or Copy and Paste this local folder into the Saves/Multiplayer Folder in the Cyberduck Window. It will prompt you for permisson to copy the file. Click allow and wait for the file to upload. 

![upload_world.png](/zomboid/upload_world.png)

### Update your dedicated Server
1. In the NitroPanel Under Configuration, Click on the Startup Tab. 

2. In here you will want to update the name of your World.

![update_server_world.png](/zomboid/update_server_world.png)

3. Start your Server and Check the Console Tab to confirm that the world installed sucessfully. 

:::note
If you have any questions or run into issues, please do not hesitate to reach out to us with a ticket or in the EVLBOX Support Discord.
:::