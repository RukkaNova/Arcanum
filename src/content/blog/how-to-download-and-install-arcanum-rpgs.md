---
title: "How to Download and Install an Arcanum RPG (ChatGPT, Claude & Gemini)"
description: "Every Arcanum Original is a free, two-file download — a master prompt and a world file. Here's the exact setup for ChatGPT Custom GPTs, Claude Projects, and Gemini Gems, plus which game to grab for which model."
section: "guides"
pubDate: 2026-07-10
tags: ["arcanum rpg download", "free ai rpg engine", "chatgpt rpg file setup", "how to install arcanum rpgs", "download arcanum originals", "arcanum games", "AI RPG engine"]
itemList:
  - name: "Aevum Realm Architect"
    url: "/arcanum-games/aevum"
    description: "Kingdom-builder for ChatGPT, Claude, or Gemini — rise from serf to monarch."
  - name: "The Chronicler"
    url: "/arcanum-games/the-chronicler"
    description: "Slow-burn relationship RPG for Claude Projects."
  - name: "Eirathis Strider"
    url: "/arcanum-games/eirathis"
    description: "Mature, Witcher-style open-world RPG for Gemini Gems."
  - name: "Star Freighter Drift"
    url: "/arcanum-games/star-freighter-drift"
    description: "Space-trading survival RPG for ChatGPT, Claude, or Gemini."
faq:
  - q: "How do I download an Arcanum RPG?"
    a: "Go to the game's page under Arcanum Originals and download its two files directly — a master prompt text file and a world knowledge file. There's no account, no email, and no copy-pasting from a webpage; both are real file downloads."
  - q: "Is Arcanum free?"
    a: "Yes. All four Arcanum Originals are free downloads. You only need whatever ChatGPT, Claude, or Gemini access you already have — a paid tier unlocks Custom GPTs or Projects, but the games themselves cost nothing."
  - q: "Do I need ChatGPT Plus or a paid Claude plan to play?"
    a: "You need a paid tier to create a Custom GPT (ChatGPT) or a Project (Claude), since those are the containers that hold the game's instructions and files persistently. Gemini Gems are available on a free Google account. If you don't have a paid plan, you can still paste the master prompt directly into a regular chat, though the world file won't stay attached between sessions."
  - q: "What files do I need to upload for an Arcanum RPG?"
    a: "Every game ships exactly two files: a master prompt (paste it into the Instructions field) and a world document — an Atlas, manual, or engine file (upload it as Knowledge). Both are required; the master prompt references the knowledge file constantly during play."
  - q: "Can I move an Arcanum RPG from one AI to another?"
    a: "For the two cross-model games — Aevum Realm Architect and Star Freighter Drift — yes, the same two files work on ChatGPT, Claude, or Gemini. The Chronicler is built specifically for Claude Projects and Eirathis Strider specifically for Gemini Gems, so switching those to a different model means losing some of the platform-specific tuning."
  - q: "What if the game starts forgetting things partway through?"
    a: "Every Arcanum Original ships with a /fix_state or Agency Check command that re-reads its own hidden logs and corrects drift — type it any time something feels off. For the underlying cause and deeper fixes, see our guide on why long AI campaigns lose the thread."
---

An Arcanum RPG installs as two files: a **master prompt** (the rules and game master logic, pasted as instructions) and a **world file** (an Atlas, manual, or engine document, uploaded as knowledge). No app, no account, no copy-pasting scattered across a webpage — you download both files directly and load them into whichever AI you already use. Setup takes about five minutes on any of the three major models. Here's the exact process for each.

## What You're Actually Downloading

Every [Arcanum Original](/arcanum-games) ships as a real two-file download, not a web app or a browser extension:

- **The master prompt** (`.txt`) — the complete game engine: rules, hidden state tracking, agency protocols, and the game master's instructions. This goes into the "Instructions" or "custom instructions" field of whichever platform you use.
- **The world file** (`.docx`) — an Atlas, systems manual, or relationship engine specific to that game. This gets uploaded as a knowledge file, which the AI consults as reference material rather than trying to hold in the running conversation.

That split matters: instructions tell the model *how to behave*, and the knowledge file tells it *what's true*. Keeping them separate is what lets these games stay consistent across a long campaign instead of drifting the way a single freeform prompt does.

## Which Platform Should You Use?

Two of the four Originals — **Aevum Realm Architect** and **Star Freighter Drift** — run on ChatGPT, Claude, or Gemini equally well, so pick whichever you already have access to. The other two are built for a specific model and tuned around what it does best:

| Game | Genre | Runs on |
|---|---|---|
| [Aevum Realm Architect](/arcanum-games/aevum) | Kingdom-builder, strategy | ChatGPT, Claude, Gemini |
| [The Chronicler](/arcanum-games/the-chronicler) | Relationship-driven, slow-burn | Claude only |
| [Eirathis Strider](/arcanum-games/eirathis) | Mature open-world, Witcher-style | Gemini only |
| [Star Freighter Drift](/arcanum-games/star-freighter-drift) | Space-trading survival | ChatGPT, Claude, Gemini |

If you're choosing a model rather than a game, our guides on [ChatGPT](/blog/chatgpt-rpg-guide), [Claude](/blog/claude-rpg-guide), and [Gemini](/blog/gemini-rpg-guide) for roleplay cover what each does best before you commit to a setup.

## Install on ChatGPT (Custom GPT)

You need ChatGPT Plus to create a Custom GPT — this is what turns a game into a persistent container rather than a one-off chat.

1. In the ChatGPT sidebar, click **Explore GPTs**, then **+ Create** (top right).
2. Switch to the **Configure** tab.
3. Name it after the game and add a short description.
4. Paste the entire **master prompt** into the **Instructions** box.
5. Under **Knowledge**, click **Upload files** and add the game's world document.
6. Click **Create** / **Save**, then open it and play.

The GPT persists after this — every time you reopen it, it starts from the same instructions and knowledge base, with nothing to re-paste.

## Install on Claude (Project)

You need a paid Claude plan to use Projects.

1. In the Claude sidebar, click **Projects**, then **+ Create Project**.
2. Name it after the game and create it.
3. Open the project's **custom instructions** setting and paste in the entire **master prompt**.
4. In the project's **Knowledge** panel, upload the game's world document.
5. Start a new chat inside the project — the instructions and world file now apply to every conversation you begin there.

## Install on Gemini (Gem)

Gems are available on a free Google account.

1. Open Gemini, find **Gems** in the side panel, then open the **Gem manager** and choose **New Gem**.
2. Name it after the game.
3. Paste the entire **master prompt** into the **Instructions** field.
4. Use the **add knowledge / upload files** option to attach the game's world document.
5. Save the Gem, then select it from your Gems list to start playing.

Gemini's large context window is a genuine advantage here — it tends to hold onto a big knowledge file's details longer than the other two models over an extended campaign, which our [Gemini RPG guide](/blog/gemini-rpg-guide) covers in more depth.

## The Four Arcanum Originals

A quick reference for what you're downloading and where to get it:

- **[Aevum Realm Architect](/arcanum-games/aevum)** — rise from serf to monarch in a deterministic, 30,000-word medieval world. Best for players who want strategy-game depth.
- **[The Chronicler](/arcanum-games/the-chronicler)** — a relationship-driven campaign where trust is earned, never unlocked. Claude Projects only.
- **[Eirathis Strider](/arcanum-games/eirathis)** — a mature, Witcher-style open world with dice-less tactical combat. Gemini Gems only.
- **[Star Freighter Drift](/arcanum-games/star-freighter-drift)** — a space-trading survival RPG where the profitable move is always the dangerous one.

Each game's own page has the exact download links and a genre-specific first-move walkthrough beyond what's covered here.

## If the Game Starts Drifting

Every Arcanum Original ships with a built-in correction command — `/fix_state` or `Agency Check`, depending on the game — that re-reads its own hidden logs and hands you back a corrected status. Use it any time something feels off, whether that's a wrong gold count or an NPC who shouldn't remember something. This is a patch for the moment, not a cure — for the underlying reason every long AI campaign eventually drifts, and the engineering that prevents it, see [why AI campaigns fall apart at turn 50](/blog/why-llms-forget). If you want a manual backup for any AI, not just Arcanum's own games, the free [Campaign Memory Tool](/tools/campaign-memory) tracks state and generates a compression prompt you can paste back in.

## Frequently Asked Questions

**How do I download an Arcanum RPG?**
Go to the game's page under [Arcanum Originals](/arcanum-games) and download its two files directly — a master prompt text file and a world knowledge file. There's no account, no email, and no copy-pasting from a webpage; both are real file downloads.

**Is Arcanum free?**
Yes. All four Arcanum Originals are free downloads. You only need whatever ChatGPT, Claude, or Gemini access you already have — a paid tier unlocks Custom GPTs or Projects, but the games themselves cost nothing.

**Do I need ChatGPT Plus or a paid Claude plan to play?**
You need a paid tier to create a Custom GPT (ChatGPT) or a Project (Claude), since those are the containers that hold the game's instructions and files persistently. Gemini Gems are available on a free Google account. If you don't have a paid plan, you can still paste the master prompt directly into a regular chat, though the world file won't stay attached between sessions.

**What files do I need to upload for an Arcanum RPG?**
Every game ships exactly two files: a master prompt (paste it into the Instructions field) and a world document — an Atlas, manual, or engine file (upload it as Knowledge). Both are required; the master prompt references the knowledge file constantly during play.

**Can I move an Arcanum RPG from one AI to another?**
For the two cross-model games — Aevum Realm Architect and Star Freighter Drift — yes, the same two files work on ChatGPT, Claude, or Gemini. The Chronicler is built specifically for Claude Projects and Eirathis Strider specifically for Gemini Gems, so switching those to a different model means losing some of the platform-specific tuning.

**What if the game starts forgetting things partway through?**
Every Arcanum Original ships with a `/fix_state` or `Agency Check` command that re-reads its own hidden logs and corrects drift — type it any time something feels off. For the underlying cause and deeper fixes, see our guide on [why long AI campaigns lose the thread](/blog/why-llms-forget).
