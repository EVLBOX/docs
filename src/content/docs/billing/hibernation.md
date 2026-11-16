---
title: "Server Hibernation"
description: "Taking a break from a game? Hibernate your game server for a small monthly fee and keep your world, files, mods and server address until you wake it."
---

Hibernation puts your game server to sleep for a small monthly fee. The server stops, and everything on it is kept exactly as you left it: your world, your files, your mods, your settings and your server address. When you want to play again you wake it, and it comes back as it was.

- **It's for a break.** A few weeks or a few months away from a game, without paying for a full server and without losing anything.
- **It's the alternative to cancelling.** A cancelled server is deleted. A hibernating one is waiting for you.
- **You wake it whenever you like.** There is no minimum or maximum time.

:::note[Can my server hibernate?]
Hibernation is for game servers. If your server's page in your billing area shows a **Hibernate** button, you can hibernate it. Voice servers and bots don't have it.
:::

## What's kept and what stops

| | While it hibernates |
|---|---|
| World, saves, files, mods, configuration | Kept, untouched |
| Server address (IP and port) | Kept. Players use the same address after it wakes |
| Location | Kept. The server stays in the data centre it is in |
| Sub-users and schedules | Kept |
| Storage | Kept as it is |
| Backups you already have | Kept |
| Starting the server | Not possible. Pressing Start in Nitro Panel shows an error, and that is expected |
| Players connecting | Not possible until it is awake |
| New backups | Not taken, apart from the one [safety backup](#the-safety-backup) |
| File manager and SFTP | Still work. You can download, upload and edit files while it sleeps |

:::caution
Files you change while the server sleeps are not backed up until it is awake again and backups are running.
:::

Schedules are kept but do nothing. A scheduled start or backup simply doesn't run while the server sleeps.

## How to hibernate

1. Log in to your billing area at [portal.evlbox.com](https://portal.evlbox.com/clientarea.php).
2. Select the server you want to hibernate.
3. Press **Hibernate**. It sits on the **Your server** card, under the server address.

   ![The Hibernate button on the Your server card in the billing area](/docs/billing/hibernate-button.png)

4. Check the order summary. It shows your current game plan, the Hibernate plan, and what it costs. Nothing has changed yet.
5. Confirm. The server stops and goes to sleep, usually within a minute.

You don't need to stop the server first. We stop it for you.

Once it's asleep you get an email confirming the server is hibernating, with your server address and a **Wake my server** button.

![The email confirming a server is hibernating](/docs/billing/hibernate-email.png)

### What changes on your account

- **It stays the same service.** Your server is switched to a Hibernate plan in your billing area. Nothing is cancelled and nothing new is ordered.
- **Your billing cycle and renewal date stay the same.** Monthly stays monthly, yearly stays yearly.
- **The price is shown before you confirm.** That includes any difference for the time you have already paid for.

### No Hibernate button?

One of three things:

- Hibernation isn't available for that server yet.
- A cancellation has already been requested for it. See [Thinking of cancelling?](#thinking-of-cancelling)
- It's already hibernating. The card shows **Wake my server** instead.

## The safety backup

Shortly after a server goes to sleep we take one extra backup of it, just in case.

- **When.** Within a short while of hibernating. The server is locked for a few minutes while the backup is taken, and during those minutes the file manager and SFTP are unavailable. After that they work again.
- **Where.** It's stored off your server. In Nitro Panel it appears on the GameSwap page as **Hibernation snapshot**, marked as an extra slot. It doesn't use one of your own GameSwap slots.
- **What it's for.** Nothing, normally. Waking a server doesn't use it; your server wakes with the files that are on it. It exists so that if something looks wrong after you wake up, you have a copy from the moment you went to sleep.
- **How long.** It can be restored once the server is awake, for about a week after waking. After that it's removed on its own. It can't be restored while the server is still asleep.

![The Hibernation snapshot card on the GameSwap page](/docs/nitro/hibernate-gameswap.png)

Restoring it replaces what is on the server with the copy, like any GameSwap restore. Follow the [restore steps in the GameSwap guide](/docs/getting-started/nitro-panel/gameswap/#restoring-a-frozen-game).

## Waking up

Waking takes about a minute, and you can do it whenever you like.

1. Press **Wake my server**, in the hibernating email or on the server's page in your billing area.
2. Pick the game plan and billing cycle you want.
3. Confirm the order. As soon as it's paid, the server gets the memory, CPU and storage of that plan, usually within a minute.
4. We start it for you and email you to say it's awake. If it isn't online a few minutes later, open Nitro Panel and press Start.

### Good to know

- **You get what you pick now, not what you had before.** The plan you wake on decides memory, CPU, storage and backups. It can be bigger or smaller than the one you left. You can also add more memory or storage after waking, from the server's page in your billing area.
- **Same address, same files.** Nothing needs to be set up again and players connect as before.
- **Location doesn't change.** The server is where it always was. If you're offered plans in several locations, pick the one for the location your server is in. The hibernating email and the server's page both name it. Picking another location's plan doesn't move the server; a server in another location is a new order.
- **Woke up very soon after hibernating?** If the safety backup is still being taken, the server gets its resources straight away and starts a few minutes later, once the backup is done.

:::caution[Check your storage]
If the plan you wake on has less storage than your files take up, the server won't start until you add storage or remove some files. Nothing is deleted for you, and Nitro Panel tells you when storage is the reason.
:::

## What you see while it sleeps

**In your billing area**, the server's card says "This server is hibernating", names its location, and shows **Wake my server**.

**In Nitro Panel**, the server is still there with all its files. A banner at the top says it's hibernating, with a **Wake server** button that takes you to your billing area. The Start button doesn't work.

![A hibernating server in Nitro Panel](/docs/nitro/hibernate-panel.png)

**On the GameSwap page**, you'll find the Hibernation snapshot card, with Restore greyed out until the server is awake.

## Thinking of cancelling?

If you're cancelling because you're taking a break, hibernate instead. A cancelled server is deleted, along with its files and its address.

:::caution
Hibernate *before* you request a cancellation. Once a cancellation has been submitted, the Hibernate button is no longer shown for that server.
:::

Already submitted one and would rather keep the server? [Contact support](https://evlbox.com/help) as soon as you can. A server whose plan has ended is only kept for a few days before it's removed, and after that it can't be brought back.

## Keeping a hibernating server

A hibernating server is a paid service like any other. Hibernation keeps your server for as long as the Hibernate plan is active. If the plan goes unpaid and ends, the server is removed for good a few days later, along with its safety backup.

## FAQ

### Will I lose my world?

No. Your world, saves, files, mods and settings are kept untouched. See [What's kept and what stops](#whats-kept-and-what-stops).

### Will my server address change?

No. The server keeps its IP and port, so players use the same address after it wakes.

### Can my friends still join while it hibernates?

No, not until it wakes.

### Can I still get to my files?

Yes. The file manager and SFTP keep working, apart from a few minutes while the safety backup is taken.

### How long can a server hibernate?

As long as the Hibernate plan is paid.

### How fast is waking up?

About a minute after payment.

### Do I get my old plan back when I wake?

You pick a plan when you wake, and the server gets the memory, CPU and storage of that plan. See [Waking up](#waking-up).

### Can I move to another location when I wake?

No. The server stays in the location it's in. A server in another location is a new order.

### Why can't I press Start?

The server is hibernating. Wake it from your billing area.

### Why did my server not start after waking?

Usually storage: the plan you woke on has less storage than your files take up. Add storage or remove some files, then press Start. If that isn't it, [contact support](https://evlbox.com/help).

### What is the "Hibernation snapshot" on my GameSwap page?

It's the safety backup taken when your server went to sleep. It sits in an extra slot, not one of yours. See [The safety backup](#the-safety-backup).

### Why is there no Hibernate button on my server?

Hibernation isn't available for that server yet, a cancellation has already been requested for it, or it's already hibernating. See [No Hibernate button?](#no-hibernate-button)

### I have several servers. Which one hibernates?

Only the one whose Hibernate button you pressed.
