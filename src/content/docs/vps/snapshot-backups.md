---
title: "Creating Snapshot Backups"
description: "How to take snapshot backups in virtfusion"
---

# Snapshot Backups

Snapshot backups capture an image of the state of your VPS's hard drive. EVLBOX stores snapshot backups off-site on remote storage to increase the possibility of restoring VPS's should a catastophic event occur. 

## Login To The Panel

Below is the client login URL for the VPS Panel
https://vf.evlbox.com/login

![Login Screenshot](/vps/loginlol.jpg)

### How To Backup

1. Go to VPS Management Page .
1. Find your VPS and select the "Manage" Button.
1. Select the "Backups" tab from the top navigation bar.
1. Press the "Create Backup Now" Button.
1. Wait for the backup to complete.


:::caution
It is recomended to power down your VPS before creating a backup, Backup is only for the primary disk.
:::
![Manage button](/vps/backup.gif)


### How To Restore From A Backup

To restore from a backup. 
1. Press the "Restore" button to the right of the last backup you last created.
1. Comfirm that you wish to restore using this backup.
1. Wait for the Restore procedure to complete.


![Manage button](/vps/restore.jpg)


:::tip
If you have yet to create any backups, you will be unable to restore from a prior state.
:::