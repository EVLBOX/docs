---
title: "Satisfactory 1.0 Mod Setup"
description: "A guide to installing the satisfactory mod manager and connecting to your dediccated server"
---

# Satisfactory 1.0 Mod Setup Guide

#### Customers on Satisfactory 1.1 experimental should avoid mods until the 1.1 update hits the stable branch. 

If you are wanting to add custom mods to your satisfactory dedicated server, complete the following steps. If you run into any issues or have any questions, check out the EVL Discord Server or create a ticket for additional support. Official Support Documentation can also be found here: https://docs.ficsit.app/satisfactory-modding/latest/ForUsers/DedicatedServerSetup.html#ServerClientConsistency 

## Install the Satisfactory Mod Manager and Download the Mods

1. Go to https://ficsit.app/ and click Download. 
![download_manager.png](/satisfactory/download_manager.png)

2. Open the Executable file from your downloads. 
3. Follow the directions in the installer and once complete, open the app. 
![managersetup.png](/satisfactory/managersetup.png)

4. Select the Mods you would like to use and download them. 
![mods_installed.png](/satisfactory/mods_installed.png)

## Get Your Server Information
1. Login to the Nitro Panel https://nitro.evlbox.com/ 
2. You will need your Nitro Panel Password for the Mod Manager. If you do not have a separate password for the Nitro Panel setup, you will need to create one. Do this by logging in with your Billing Account and changing the password in Account Settings or by clicking on Forgot Password. 
![login_nitro.png](/satisfactory/login_nitro.png)
3. Once you are logged in, Go to Manager Server and Stop your Server. 
4. Then, find the SFTP details, you will need to enter this address and port number into the Mod Manger
![sftp_details.png](/satisfactory/sftp_details.png)

## Add your dedicated Server to the Mod Manager
1. In the Mod Manager Window, Click Manage Servers
2. In the Drop Down Menu Select SFTP
3. Enter your user name, Nitro Panel Password, the SFTP address and Port Number
![add_server.png](/satisfactory/add_server.png)
4. If all the information is correct, you will be able to click Add. 
5. Once it has been validated you will see a listing with your connection information with the option to delete it. 
6. Click Close on the Manage Server Window and Select your server from the drop down Select Game Installation Menu
![server_drop_down.png](/satisfactory/server_drop_down.png)
7. From here you can add the mods you have previously downloaded and install additional mods. Press the Play button to extract the mod to your server. 

## Restart your Server and Confirm Installation
1. Go to the Nitro Panel and Start your Server. 
2. To view the Mods installed go to the Files Tab. Then navigate to Factory Game/Mods and you will see a list of installed mods. 
![file_manager.png](/satisfactory/file_manager.png)
3. Launch the Game, Connect to your Server and Enjoy!