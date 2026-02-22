---
title: "Connect to your Foundry Server"
description: "Learn how to connect to your FOUNDRY server hosted by EVLBOX. Follow our guide to join directly by IP or browse for your server in-game."
head:
  - tag: meta
    attrs:
      name: "keywords"
      content: "connect to foundry server, foundry direct connection, foundry server browser, EVLBOX foundry hosting, foundry multiplayer, foundry port IP, server_name foundry"
  - tag: meta
    attrs:
      property: "og:title"
      content: "How to Connect to Your FOUNDRY Server | EVLBOX Hosting Guide"
  - tag: meta
    attrs:
      property: "og:description"
      content: "Learn how to connect to your FOUNDRY server hosted by EVLBOX. Follow our guide to join directly by IP or browse for your server in-game."
  - tag: meta
    attrs:
      property: "og:image"
      content: "https://evlbox.com/docs/foundry/foundry-multiplayer.png"
  - tag: meta
    attrs:
      property: "og:image:alt"
      content: "FOUNDRY Multiplayer Connection Menu"
  - tag: meta
    attrs:
      property: "og:url"
      content: "https://evlbox.com/docs/game-servers/foundry/how-to-connect-to-foundry/"
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
      content: "How to Connect to Your FOUNDRY Server | EVLBOX Hosting Guide"
  - tag: meta
    attrs:
      name: "twitter:description"
      content: "Learn how to connect to your FOUNDRY server hosted by EVLBOX. Follow our guide to join directly by IP or browse for your server in-game."
  - tag: meta
    attrs:
      name: "twitter:image"
      content: "https://evlbox.com/docs/foundry/foundry-multiplayer.png"
  - tag: meta
    attrs:
      name: "twitter:image:alt"
      content: "FOUNDRY Multiplayer Connection Menu"
  - tag: script
    attrs:
      type: "application/ld+json"
    content: |
      {"@context":"http://schema.org","@type":"Article","headline":"How to Connect to Your FOUNDRY Server | EVLBOX Hosting Guide","description":"Learn how to connect to your FOUNDRY server hosted by EVLBOX. Follow our guide to join directly by IP or browse for your server in-game.","url":"https://evlbox.com/docs/game-servers/foundry/how-to-connect-to-foundry/","image":"https://evlbox.com/docs/foundry/foundry-multiplayer.png","imageAlt":"FOUNDRY Multiplayer Connection Menu","author":{"@type":"Organization","name":"EVLBOX","url":"https://evlbox.com"},"publisher":{"@type":"Organization","name":"EVLBOX","logo":{"@type":"ImageObject","url":"https://evlbox.com/docs/favicon.png"}},"datePublished":"2025-06-16","dateModified":"2025-06-16"}
---

# **How to Connect to Your FOUNDRY Server**

Connecting to your **FOUNDRY server** hosted by **EVLBOX** is simple, whether you prefer the **direct connection method** or using the **in-game server browser**. We recommend using the **direct method** for the most reliable experience.

---

## ðŸ”— **Direct Connection (Recommended)**

The direct method uses your serverâ€™s IP and port and is the most consistent way to join your server.

### **Step-by-Step Instructions**

1. **Log in to Nitro Panel**  
   Go to the [**EVLBOX Nitro Control Panel**](https://nitro.evlbox.com) and log in with your credentials.

2. **Access Your Server**  
   On the dashboard, click on your **FOUNDRY server** to open its management interface.

3. **Copy the Server Address**  
   In the **Terminal** section, click on the **address string**â€”this will automatically copy the IP and port to your clipboard.  
   ![copy-foundry-address](/docs/foundry/copy-address.jpg)

4. **Launch the Game**  
   Open **FOUNDRY**, and from the main menu click on **Multiplayer**.  
   ![foundry-multiplayer.png](/docs/foundry/select-multiplayer.jpg)

5. **Open the Direct Connection Window**  
   Select the **IP Direct Connect** button.  
   ![foundry-direct-connect-button](/docs/foundry/ip-direct-connect.jpg)

6. **Enter IP and Port**  
   Paste the IP in the **Address** field and the port in the **Port** field (do **not** include the port in the address field).
   ![foundry-direct-connect-window](/docs/foundry/direct-connect.jpg)

7. **Enter Password (If Needed)**  
   If your server is password-protected, enter the password when prompted.

---

## ðŸŒ **Connecting via the Server Browser**

This method allows you to browse public servers, including yoursâ€”but it may be harder to find due to current limitations.

1. **Open the Server Browser**  
   From the main menu, click **Multiplayer**, then select the **tiny button next to Direct Connect** to open the **Server Browser**.
   ![foundry-server-browser-button](/docs/foundry/browse.jpg)

2. **Sort by Latency**  
   Since there is currently no search function, sorting by **Latency** helps bring your server closer to the top.

3. **Check Server Name in App.cfg**  
   Your serverâ€™s name is defined in the `App.cfg` file inside Nitro â†’ Files. Look for the `server_name=` field. You can **edit this name** to something memorable.  


4. **Find and Join Your Server**  
   Once found, click your server, enter the password (if applicable), and start playing!

---

### ðŸ’¡ Need More Help?

If youâ€™re still having trouble connecting, check out our other helpful guides or reach out to our support team. [**Get a FOUNDRY server today**](https://evlbox.com/games/foundry) and enjoy reliable hosting with built-in support from EVLBOX!
