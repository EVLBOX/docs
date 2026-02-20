---
title: "How to Add and Remove Admin Permissions"
description: "How to Add and Remove Admin Permissions"
---

# Project Zomboid Admin Permissions

### How to Add Admin Permissions to your project zomboid server

1. Login to the Nitro Panel click manage server and got to the console tab. 

![console.png](/zomboid/console.png)


2. Scroll down to the command line and enter in the following: setaccesslevel [Account Username] admin

The account username is the name used to log in to the Project Zomboid server

![set_admin.png](/zomboid/set_admin.png)

3. Upon success you will see a line in the console log confirming the admin access

![admin_success.png](/zomboid/admin_success.png)


### How to Remove Admin Permission 

1. Log in to the Nitro Panel, click manage server and go to the console tab.

2. Scroll down to the command line and enter in the following: setaccesslevel [Account Username] none

![set_admin_none.png](/zomboid/set_admin_none.png)

3. You will see a line in the console log confirming the removal of admin access

![no_admin_success.png](/zomboid/no_admin_success.png)