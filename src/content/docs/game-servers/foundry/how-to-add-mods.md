---
title: "How to add Mods to Foundry Dedicated Server"
description: "Learn how to install and manage Foundry mods on your EVLBOX server. Step-by-step tutorial for uploading workshop mods, using the mod loader, and troubleshooting issues."
head:
  - tag: meta
    attrs:
      name: "keywords"
      content: "Foundry mods, Foundry server mods, EVLBOX Foundry mod loader, how to install mods Foundry, Steam Workshop Foundry mods, mods-upload folder Foundry, EVLBOX server hosting"
  - tag: meta
    attrs:
      property: "og:title"
      content: "How to Add Mods to Your Foundry Server | EVLBOX Hosting Guide"
  - tag: meta
    attrs:
      property: "og:description"
      content: "Install and manage Steam Workshop mods for your Foundry server hosted by EVLBOX. This guide shows how to upload, activate, and troubleshoot mods with ease."
  - tag: meta
    attrs:
      property: "og:image"
      content: "https://evlbox.com/docs/foundry/workshop-content.jpg"
  - tag: meta
    attrs:
      property: "og:image:alt"
      content: "Workshop Content Directory for Foundry Mods"
  - tag: meta
    attrs:
      property: "og:url"
      content: "https://evlbox.com/docs/game-servers/foundry/how-to-add-mods/"
  - tag: meta
    attrs:
      property: "og:type"
      content: "article"
  - tag: meta
    attrs:
      name: "twitter:card"
      content: "summary_large_image"
  - tag: meta
    attrs:
      name: "twitter:title"
      content: "How to Add Mods to Your Foundry Server | EVLBOX Hosting Guide"
  - tag: meta
    attrs:
      name: "twitter:description"
      content: "Install and manage Steam Workshop mods for your Foundry server hosted by EVLBOX. Step-by-step tutorial with images and troubleshooting tips."
  - tag: meta
    attrs:
      name: "twitter:image"
      content: "https://evlbox.com/docs/foundry/workshop-content.jpg"
  - tag: meta
    attrs:
      name: "twitter:image:alt"
      content: "Workshop Content Directory for Foundry Mods"
  - tag: script
    attrs:
      type: "application/ld+json"
    content: |
      {"@context":"http://schema.org","@type":"Article","headline":"How to Add Mods to Your Foundry Server | EVLBOX Hosting Guide","description":"Install and manage Steam Workshop mods for your Foundry server hosted by EVLBOX. Learn how to zip and upload mods, use the EVLBOX mod loader, and remove or troubleshoot mods.","url":"https://evlbox.com/docs/game-servers/foundry/how-to-add-mods/","image":"https://evlbox.com/docs/foundry/workshop-content.jpg","imageAlt":"Workshop Content Directory for Foundry Mods","author":{"@type":"Organization","name":"EVLBOX","url":"https://evlbox.com"},"publisher":{"@type":"Organization","name":"EVLBOX","logo":{"@type":"ImageObject","url":"https://evlbox.com/docs/favicon.png"}},"datePublished":"2025-06-16","dateModified":"2025-06-16"}
---

# **How to Add Mods to Your Foundry Server**

Want to spice up your **Foundry server** with mods? This guide walks you through the step-by-step process of uploading and activating **Steam Workshop mods** using the **EVLBOX Foundry Mod Loader**. Let's get started!

---

## **Step-by-Step Guide: Uploading Mods to Your Foundry Server**

### **1. Power Off the Server**
Before doing anything, make sure your server is **stopped** from the [**EVLBOX Nitro Panel**](https://nitro.evlbox.com).

---

### **2. Download Your Workshop Mods**

- Go to Steam and **subscribe** to the mods you want.
- On your computer, navigate to:

`Steam\steamapps\workshop\content\983870\`

> The `983870` folder is specific to **Foundry**.

Mods are often found under this path:

`C:\Program Files (x86)\Steam\steamapps\`

…but may be located on a different drive. Refer to the image below if you're unsure:

![Workshop Content Path](/docs/foundry/workshop-content.jpg)

---

### **3. Zip the Workshop Mods**

- Inside the `983870` folder, select the mods you want.
- Right-click and choose:  
  **Send to → Compressed (zipped) folder**

> ✅ You can zip **one** or **multiple** mods. The EVLBOX Mod Loader handles both formats.

![Zip Workshop Mods](/docs/foundry/zip-workshop-content.jpg)

---

### **4. Upload to the mods-upload Folder**

- Log in to the [**EVLBOX Nitro Panel**](https://nitro.evlbox.com).
- Go to **Files** for your server.
- Open the `mods-upload` folder (not the `Mods` folder).

![Mods Upload Directory](/docs/foundry/mod-upload.jpg)

---

### **5. Drag and Drop Your Zip Files**

- Drop your zipped mod files into `mods-upload`.
- **Do not extract** them!

![Drag and Drop Mods](/docs/foundry/drag-and-drop.jpg)

---

### **6. Restart Your Server via Terminal**

- In the Nitro Panel, click **Terminal** from the left navigation.
- Click **Restart**.

The console will launch the **EVLBOX Foundry Mod Loader**, showing installed mods.

> ⚠️ Sometimes multi-mod zips show duplicate mods. This is normal and won’t cause issues.

---

## **Important Notes About Mod Compatibility**

### **No Automatic Syncing**
Foundry does **not support auto-syncing mods** with players. Everyone who joins your server must have **the exact same mods installed**.

We strongly recommend using a **Steam Workshop Collection** to make this easy.

👉 [**How to Create a Steam Collection for Mod Syncing**](/docs/game-servers/foundry/create-collection-for-mod-syncing)

---

### **Most Mods Require the "Unfoundry" Mod**
To work correctly, most server mods need **Unfoundry**:  
👉 [Unfoundry on Steam Workshop](https://steamcommunity.com/sharedfiles/filedetails/?id=3297627927)

---

### **Not All Mods Are Supported**
Some mods are **not compatible** with servers and may be **auto-deleted** during loading.

---

### **How to Remove Mods**

1. Stop your server.
2. Go to the `/Mods` folder.
3. Check the mod folders you want to remove.
4. Use the **trash icon** or right-click → **Delete**.

Also clear the matching zip files from `mods-upload` to prevent reloading.

---

### **Early Access Warning**
Mods for Foundry are still in **early access**. They may be buggy or unstable.

---

### **Need Help Connecting?**
See our companion guide:  
👉 [**How to Connect to a Foundry Server**](/docs/game-servers/foundry/how-to-connect-to-foundry)

---

Ready to mod your world? Upload your favorites and enjoy a customized Foundry experience with EVLBOX!
