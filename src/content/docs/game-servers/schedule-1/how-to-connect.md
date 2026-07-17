---
title: "How to Connect — Schedule I"
description: "Install MelonLoader and the S1 client mod to connect to your Schedule I dedicated server."
---

# How to Connect

To join a Schedule I dedicated server, you need two things installed on your game client:

1. **[MelonLoader](https://github.com/LavaGang/MelonLoader)** — the mod loader that injects mods into Schedule I
2. **[S1 DedicatedServerMod](https://github.com/ifBars/S1DedicatedServers)** — the client mod that lets you join dedicated servers

## Step 1: Install MelonLoader

MelonLoader is a universal mod loader for Unity games. The installer handles everything automatically.

1. Go to the [MelonLoader Releases](https://github.com/LavaGang/MelonLoader/releases) page
2. Download **MelonLoader.Installer.exe**
3. Run the installer and click **SELECT** — browse to your Schedule I installation folder
   - Steam default: `C:\Program Files (x86)\Steam\steamapps\common\Schedule I`
4. Make sure **LATEST** is selected and click **INSTALL**
5. The installer downloads .NET 6 and sets up MelonLoader automatically

:::caution
MelonLoader requires .NET 6 Desktop Runtime. The installer downloads it for you, but if it fails, install it manually from [Microsoft .NET 6.0](https://dotnet.microsoft.com/en-us/download/dotnet/6.0).
:::

## Step 2: Install S1 DedicatedServerMod

The S1 DedicatedServerMod adds dedicated server support to your game client.

1. Go to the [S1 DedicatedServers Releases](https://github.com/ifBars/S1DedicatedServers/releases) page
2. Download the correct client zip for your game build:

   :::tip
   Not sure which build you have? In Steam, right-click Schedule I → **Properties** → **Betas**. If it says "None", you're on the default IL2CPP build. If it says "alternate", you're on the Mono build.
   :::

   | Build | Download |
   |-------|----------|
   | Default (IL2CPP) | `Il2cpp_Client.zip` |
   | Alternate (Mono) | `Mono-Client.zip` |

3. Extract the zip into your Schedule I installation folder
4. The `Mods` folder from the zip merges with your existing `Mods` folder
5. Verify that `Mods/DedicatedServerMod_Il2cpp_Client.dll` (or Mono) is present

## Step 3: Connect

1. Launch Schedule I
2. From the main menu, select **Multiplayer** → **Direct Connect**
3. Enter your server's IP address and port
   - Find this in the Nitro Panel **Console** tab — look for `Server running on port XXXX`
4. Click **Connect**

:::tip
Having trouble connecting? Check that your client mod version matches the server mod version. Both should use the same release from the S1 DedicatedServers page.
:::
