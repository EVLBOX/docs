---
title: "Transfer singleplayer save to Foundry Server"
description: "Learn how to transfer your singleplayer save to your Foundry dedicated server with this easy step-by-step EVLBOX guide."
---

# **How to Transfer a Singleplayer Save to Your Foundry Server**

Want to continue your singleplayer factory world on your **Foundry dedicated server**? Follow this simple guide to migrate your save and pick up exactly where you left offâ€”now with friends!

---

## **Step-by-Step Instructions**

### **1. Locate Your Singleplayer Save**

Your local Foundry saves are stored here:

**C:\Users\your-username\AppData\LocalLow\Channel 3 Entertainment\Foundry\save**

Each folder here contains multiple saves, including autosaves.

![list-of-local-saves](/docs/foundry/app-data-saves.jpg)

For this example we'll use Jeer_178174133. You can rename this if you like, but just remember the name for step 5!

---

### **2. Prepare Your Save File**

- Choose the save folder you want.
- Right-click on it and select **Send to > Compressed (zipped) folder**.

---

### **3. Upload Your Save to Nitro Panel**

1. Go to the [**Nitro Control Panel**](https://nitro.evlbox.com).
2. Click your **Foundry server**.
3. Navigate to:  
   **Files > serverfiles > save**

![Save Folder Location](/docs/foundry/saves.jpg)

---

### **4. Upload and Extract Your Save**

- Drag and drop your ZIP file into the folder.
- Select the ZIP, checkmark it, then choose **Unarchive**.

> âš ï¸ Note: Save files are large and may take time to upload. Check progress via the cloud icon near â€œCreate Directoryâ€. See below screenshot for the upload "spinner"

![Uploading Save](/docs/foundry/loading.jpg)  
![Unarchiving Save](/docs/foundry/unarchive.jpg)

---

### **5. Configure Your Server to Use the Save**

Ensure the **server is stopped** before proceeding.

1. Go to the **Startup tab**.
2. Find the **Server World Name** field.
3. Enter the **name of the folder** you just unzipped.

---

### **6. Start the Server and Join the Game**

- Click **Start**.
- Launch Foundry and join your server.

Need help? See our article on [**How to Connect to Your Foundry Server**](/docs/game-servers/foundry/how-to-connect-to-foundry)

![In-Game Screenshot](/docs/foundry/screenshot-game.jpg)

---

## **Get a Foundry Server**

Havenâ€™t ordered your server yet? Get your own high-performance server now on [**EVLBOX Foundry Hosting**](https://evlbox.com/games/foundry).
