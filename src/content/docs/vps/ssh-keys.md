---
title: "Add SSH keys to VPS on creation"
description: "Automatically add SSH keys to your VPS upon creation."
---

# Adding an SSH key

## Login To The Panel

Below is the client login for the VPS Panel
https://vf.evlbox.com/login

You should probably login first.

![Login Screenshot](/docs/vps/loginlol.jpg)


## Navigate to the SSH Key Tab and "Add Key"

After Logging in, you should be directed your Dashboard, at the top of the Dashboard is the navigation bar, Select the "SSH Keys" Tab and then press the "Add Key" button.
![ssh key button](/docs/vps/ssh_keys.gif)


## Name Your Key And Copy And Paste Your Key Information.

![name your key](/docs/vps/new_key_field.jpg)

In this use case, the keys are named "Key1".
 In the "Public Key" Field, an example of a Public Key is shown.

After you have you have done that press the save button at the bottom.


:::tip
An SSH key consists of two parts. Public Key and Private key.
A User connecting would use a Private Key and the server would prove its integrity using the stored Public key, this is why we upload the Public key to the server here.
:::
:::tip
If you don't have a key pair and wish to generate your key pair please generate a new key by using the "Generate Key Pair" Button
https://www.ssh.com/academy/ssh/putty/windows/puttygen
:::
## How to Use your new key.


If you are setting up your newly created VPS you can select your newly created SSH Key to automatically add it to your machine during provisioning.


Your ssh key is now uploaded and being used by the server.
