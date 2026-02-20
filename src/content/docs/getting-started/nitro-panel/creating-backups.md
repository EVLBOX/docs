---
title: "Creating Backups"
description: "How to create backups in the Nitro Control Panel"
---

# Backups

It's important to backup your hard work! Use our backups feature to store multiple copies of your game server so that you can quickly recover or revert back to an older version.

## Backup Slots

All game server customers are provided with at least one backup slot for free. Backup slots hold a single backup copy and aren't restricted by size. If you have only one backup slot you may only store one backup at once. You can purchase additional backup slots, just contact support. 


## Taking a manual backup
Sometimes it's advised to take a backup of your game server before you make major changes. You can quickly do this manually.  

To take a manual backup, just click "Backups" then choose create backup. 

![click-the-backup-link](/nitro/backup1.png)

Set the name, and include any files or paths you want to exclude. Such as /plugins/dynmap/*

![screenshot-backup-prompt](/nitro/backup2.png)

## Restoring a backup


### Selectively restore files

If you aren't recovering the entire server and only need to retrieve a few files from your backup it's best to download your backup file to your computer, extract it, and then upload the files you want back to your server. 

First, in the context menu on the backup you wish to download choose download. 

![download-backup](/nitro/downloadbackup.png)

The file is downloaded in a tar.gz archive format. For windows users, you'll need a file archival manager like [7-Zip](https://www.7-zip.org/) (suggested for most users) or WinRar to open it.

7-Zip users can right click the tar.gz file and open the archive

![7-zip-open-archive](/nitro/open-archive.png)

From the open archive highlight the files you'd like to choose (ctrl+click to select multiple) then choose extract. 

![7-zip-extract-files](/nitro/archive.png)

Finally upload the extract files to your Game server through the file manager or an SFTP client. 

![upload-files](/nitro/upload.png)


### Restore your entire server 


:::danger
This will over-write all files on the server! Please take caution when using this option!
:::
Click the context menu on the backup you'd like to restore. Then choose restore. 

![restore-menu](/nitro/restore1.png)

If you are certain the backup contains all the files you need it's suggested to check the *Remove all files and folders before restoring this backup*. If you aren't sure, you may want to take a backup before proceeding. 

![restore-menu-prompt](/nitro/restore2.png)
