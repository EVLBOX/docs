---
title: "How to migrate save data"
description: "Move palworld saved games from one server to another"
---


If you have a palworld game on a different host or server and you would like to migrate it to an EVL box server, follow these steps:

:::tip
If you have any questions or would like EVLBox support to migrate your data, please contact us or create a ticket
:::
- If you are migrating from one EVL Box Server to another, you will want to login to the nitro panel, archive the 0 folder and download the data to your local machine. More information on how to do this can be found on this page: [How to Delete and Archive Save Data](/game-servers/palworld/delete-and-archive-saves) 

![palworld_0_folder.png](/palworld/palworld_0_folder.png)


## How to Upload Game Data to your Server
1. You have your save game data in a .tar or zip file on your local machine 

![downloaded_game_file.png](/palworld/downloaded_game_file.png)

2. Login to nitro.evlbox.com and click on the console. Click Stop on your server. 
3. Once you server is offline, navigate to the file manager and click on Pal/Saved/SaveGames
4. You will need to delete the 0 folder.  If there is any data within that you may want to save for future use, click on the folder and archive it first, then click on the folder again and delete it. Your screen should now be empty or only contain an archived zip file. You can rename this folder to make identification easier. 

![palworldarchived.png](/palworld/palworldarchived.png)

5. Now Select Upload and select the .tar or zip file containing the data you wish to use. If it was a previously archived file, it will appear as a new archived file. Click the three dots next to the one you want to use and select "Unarchive". You should now see both a 0 folder and the archived data. 

![unarchivesavedata.png](/palworld/unarchivesavedata.png)


6. Click on the 0 folder and click on the folder within, this screen now has the dedicated server name that you can copy in the breadcrumb. Highlight this string of characters and copy it

![server_breadcrumb.png](/palworld/server_breadcrumb.png)

7. Now click on file manager and navigate to the Pal/Saved/Config/LinuxServer folder 

![linuxfolder_navigation.png](/palworld/linuxfolder_navigation.png)

8. Scroll down and fild the "GameUserSettings.ini" file and click on it. 

![game_user_settings_file.png](/palworld/game_user_settings_file.png)

9. On Line 7 You will see "DedicatedServerName = {old number}" Delete this string and paste the new dedicated server name here. Delete any blank lines that get added and click Save Content.

![update_dedicated_server_name.png](/palworld/update_dedicated_server_name.png)

10. Go back to the Console and Start your server. Log in to the game and you should now be able to access your saved game data. 

