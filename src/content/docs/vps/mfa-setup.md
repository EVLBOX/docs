---
title: "Secure your VPS Control Panel account with MFA"
description: "Add MFA to your virtualizor account for additional security"
---

# MFA VPS

## Login To The Panel

Below is the client login for the VPS Panel
https://vf.evlbox.com/login

![Login Screenshot](/docs/vps/loginlol.jpg)


## Go to Security Settings.

![Login Screenshot](/docs/vps/security_settings.gif)

At the moment you have 2 options to choose from, None (No Multifactor authentication), YubiKey OTP, or TOTP App Based.

None - No multifactor authentication, Password Only (Not recommended)

TOTP App Based - Add the QR code to any two-factor app of your choice and generate a TOTP any time you open the application on your phone.

YubiKey - Using a Hardware Authentication Key from https://www.yubico.com/, you can substitue this for a TOTP

The None option is not recommended due to your account being at risk as soon as your password is compromised.

:::caution
TOTP App Based - is ultimately the easiest choice, we recommend https://getaegis.app/ for Android and Iphone as only authenticated users can access your OTPs.
:::
## Enable App

If you choose the Enable App option, you will need a two-factor authentication app such as Google Authenticator, Authy, etc.
You must scan the QR code given on *YOUR* screen and add this as a new entry in the app. *Do not scan the below QR CODE*

![Login Screenshot](/docs/vps/enable_app.jpg)

Once you have completed this the APP will show you the OTP for this service, you must enter the unique OTP in the APP into the "Confirmation Code" field and press the submit button
