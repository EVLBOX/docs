---
title: "First Time Setup - Tower Unite Condo Server"
description: "Step-by-step guide to get your Tower Unite condo server running. Includes token setup, admin configuration, and uploading your single-player condo."
head:
  - tag: meta
    attrs:
      name: "keywords"
      content: "Tower Unite condo server setup, EVLBOX condo guide, Tower Unite GSLT, Tower Unite dedicated condo, condo map export, condo admin SteamID, TowerServer.ini"
  - tag: meta
    attrs:
      property: "og:title"
      content: "How to Set Up Your Tower Unite Condo Server | EVLBOX Guide"
  - tag: meta
    attrs:
      property: "og:description"
      content: "Step-by-step guide to get your Tower Unite condo server running. Includes token setup, admin configuration, and uploading your single-player condo."
  - tag: meta
    attrs:
      property: "og:image"
      content: "https://evlbox.com/docs/towerunite/gslt.png"
  - tag: meta
    attrs:
      property: "og:image:alt"
      content: "Steam GSLT Token Creation Page"
  - tag: meta
    attrs:
      property: "og:url"
      content: "https://evlbox.com/docs/game-servers/towerunite/how-to-setup-condo/"
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
      content: "How to Set Up Your Tower Unite Condo Server | EVLBOX Guide"
  - tag: meta
    attrs:
      name: "twitter:description"
      content: "Step-by-step guide to get your Tower Unite condo server running. Includes token setup, admin configuration, and uploading your single-player condo."
  - tag: meta
    attrs:
      name: "twitter:image"
      content: "https://evlbox.com/docs/towerunite/gslt.png"
  - tag: meta
    attrs:
      name: "twitter:image:alt"
      content: "Steam GSLT Token Creation Page"
  - tag: script
    attrs:
      type: "application/ld+json"
    content: |
      {"@context":"http://schema.org","@type":"Article","headline":"How to Set Up Your Tower Unite Condo Server | EVLBOX Guide","description":"Step-by-step guide to get your Tower Unite condo server running. Includes token setup, admin configuration, and uploading your single-player condo.","url":"https://evlbox.com/docs/game-servers/towerunite/how-to-setup-condo/","image":"https://evlbox.com/docs/towerunite/gslt.png","imageAlt":"Steam GSLT Token Creation Page","author":{"@type":"Organization","name":"EVLBOX","url":"https://evlbox.com"},"publisher":{"@type":"Organization","name":"EVLBOX","logo":{"@type":"ImageObject","url":"https://evlbox.com/docs/favicon.png"}},"datePublished":"2025-07-22","dateModified":"2025-07-22"}
---

## How to Set Up Your Tower Unite Condo Server

If you've just purchased a **Tower Unite Condo Server** from EVLBOX, this is your first stop! These steps will also work for most other hosting providers. If you're planning to host your condo on your own machine, we recommend following [PixelTail’s official guide](https://towerunite.com/guides/condo_dedicated.html).


## **Step-by-Step Setup Instructions**

### **Step 1: Create a Steam Game Server Login Token (GSLT)**

Visit [Steam Game Server Token Management](https://steamcommunity.com/dev/managegameservers)

- Use **App ID: 394690**
- Add a short memo (e.g. "Tower Condo")
- Submit to get your GSLT

This token is tied to your **Steam account**. EVLBOX cannot provide this for you.

![GSLT Creation](/docs/towerunite/gslt.png)

Save your token—you'll use it in Step 3.


### **Step 2: Generate a Tower Unite Server Token**

Visit [Tower Unite Server Management](https://moderation.towerunite.com/manage_game_servers.php) and sign in via Steam.

- Click **Add Server** to generate your server token.

Copy the token for use in Step 3.


### **Step 3: Apply Server Tokens in Nitro Panel**

1. Go to [**Nitro Control Panel**](https://nitro.evlbox.com)
2. Click your Tower Unite server
3. **Stop** the server if it is running
4. Go to the **Startup** tab
5. Paste your:
   - **Steam Login Token** (from Step 1)
   - **Tower Unite Login Token** (from Step 2)
6. Click **Start** to launch your server


### **Step 4: Add an Admin Steam ID**

To enable in-game admin tools, you need your **Steam64 ID**:

1. Visit [SteamID Finder](https://www.steamidfinder.com)
2. Paste your Steam profile link
3. Copy the **SteamID64 (Dec)** value
4. In Nitro click Files and browse to Tower/Saved/Config/LinuxServer -- Click on TowerServer.ini
5. Paste in your SteamID 64 (DEC) value from SteamID finder into the `AdminSteamID=` section
6. *(optional)* If you want multiple admins just add multiple lines of `AdminSteamID=` you can have as many as you like. 
![GSLT Creation](/docs/towerunite/admins.png)


### **Step 6: Launch and Access Your Condo**

Once setup is complete, **start your server**. In-game, press **Tab**, then click the **gear icon** at the top right of the scoreboard labeled **"My Condo"** to access condo settings.


## **Importing an Existing Condo from Single Player**

If you've built a condo in single player and want to move it to your server, follow these steps:

### **Export the Condo from Tower Unite**

1. Launch your condo in Tower Unite
2. Open **Saves > Export Condo** from the scoreboard menu (Tab key)
3. This saves a `.map` file to:  
`Tower Unite/Workshop/Condo Exports/`


### **Upload to Your Server**

1. Create a folder in your server files at:  
`Tower/Condos/C_Condo/` (or the name of the map)
2. Upload the `.map` file to this folder

> Example path:  
> `Tower/Condos/C_Condo/C_Condo.map`

Make sure the file name and folder match the map name exactly.

![Condo Map Folder Example](/docs/towerunite/condo-map.png)


### **Set the Condo Map in Nitro**

In the **Startup** tab of Nitro:

- Set **Map Name** to match the `.map` file name (e.g. `C_Condo`, no extension)


## ✅ Your Condo Server is Ready!

You’re now hosting your own persistent condo online. Invite friends, show off your space, and enjoy your custom condo experience.

Want more? Check out our [**Tower Unite Condos Hub**](/docs/game-servers/towerunite) for more guides and support.

---

