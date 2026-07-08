---
title: "How to Install SillyTavern: Complete 2026 Setup Guide (Windows, Mac, Linux)"
description: "Step-by-step SillyTavern installation guide — installing Node.js and Git, launching on Windows, Mac, or Linux, connecting a cloud or local model, and fixing the errors that stop most beginners."
section: "guides"
pubDate: 2026-07-08
tags: ["how to install SillyTavern", "SillyTavern installation guide", "SillyTavern setup", "install SillyTavern Windows", "SillyTavern Node.js", "SillyTavern not opening", "SillyTavern update"]
faq:
  - q: "How do I install SillyTavern?"
    a: "Install Node.js (LTS version) and Git, clone the official SillyTavern repository (or download it as a zip), run the start script for your platform — Start.bat on Windows, start.sh on Mac and Linux — and open the local address it prints in your browser, typically http://localhost:8000. Then connect a model under API Connections before you can chat."
  - q: "Is SillyTavern free to install and run?"
    a: "Yes. SillyTavern itself is free, open-source software with no signup and no license fee. The only cost is whatever model you connect it to — free if you run a local open-weight model on your own hardware, or per-token API fees if you connect a cloud model like Claude, GPT, or DeepSeek."
  - q: "Do I need to know how to code to install SillyTavern?"
    a: "No. The install is copy-paste-and-run: install two programs (Node.js and Git), run one command to download SillyTavern, then double-click a start script. No programming knowledge is required, though basic comfort with a terminal window helps if something goes wrong."
  - q: "Can I run SillyTavern on Mac or Android?"
    a: "Yes to both. SillyTavern officially supports Windows, macOS, and Linux with the same install process on each (just a different start script). It also runs on Android through Termux, a terminal app, though that path is more technical and best suited to users already comfortable with a command line."
  - q: "Why won't SillyTavern open or why is it stuck on a blank page?"
    a: "The most common causes are an outdated Node.js version, a port already in use by another program, or a browser cache issue. Update Node.js to the current LTS release, close whatever else might be using port 8000, and try a hard refresh or a different browser before reinstalling anything."
  - q: "How do I update SillyTavern?"
    a: "If you installed with Git, open a terminal in the SillyTavern folder and run a git pull to fetch the latest release, then restart it with the start script. If you installed from a zip, download the newest release and extract it over your existing folder, keeping your data and config files intact."
---

**Installing SillyTavern takes about ten minutes and three steps: install Node.js, download SillyTavern, and run the start script.** The install itself is simple — it's the step right after (connecting a model) that trips people up, because SillyTavern ships with no AI of its own. This guide covers the full install on Windows, Mac, and Linux, connecting your first model, updating later, and the handful of errors that account for almost every "SillyTavern won't open" search.

If you're not sure what SillyTavern even is or whether it's the right tool for you, start with our [SillyTavern guide](/blog/sillytavern-guide) — this page picks up right where that one's install section leaves off, with the full walkthrough and troubleshooting.

## What You Need Before You Start

Three things, all free:

- **Node.js** — the JavaScript runtime SillyTavern is built on. Install the **LTS (Long-Term Support)** version, not the "current/experimental" one — LTS is what SillyTavern targets and testing skips a category of odd bugs.
- **Git** (recommended, not strictly required) — a version-control tool. Installing SillyTavern via Git makes future updates a one-command affair (`git pull`) instead of re-downloading and merging files by hand.
- **A model to connect it to** — either a cloud API (Claude, GPT, DeepSeek, or an aggregator like OpenRouter) or a local model running on your own GPU. This guide covers the cloud path; for local models, this cluster has two dedicated deep-dives: [SillyTavern + KoboldCpp](/blog/sillytavern-kobold-setup) and [SillyTavern + Ollama](/blog/sillytavern-ollama-setup).

No coding knowledge is required. If you can copy a command into a terminal and double-click a file, you can install SillyTavern.

## Step-by-Step Install

The process is identical in shape across Windows, Mac, and Linux — only the start script's filename changes.

1. **Install Node.js.** Download the LTS installer from the official Node.js site and run it, accepting the defaults. On Windows, this also gives you access to a Node-aware terminal.
2. **Install Git** (if you're going the recommended route). Download it from the official Git site and install with defaults.
3. **Get SillyTavern.** Open a terminal, navigate to where you want it installed, and clone the official repository's release branch. If you'd rather skip Git entirely, download the latest release as a zip from the project's GitHub releases page and extract it — just be aware you'll be re-downloading and manually merging your settings on every future update, rather than running one command.
4. **Avoid protected folders.** On Windows specifically, don't install into `Program Files`, `System32`, or other permission-locked directories — Windows' file permissions there cause install and update failures that look like SillyTavern bugs but aren't. Your user folder or a dedicated drive is the safe choice.
5. **Run the start script.** Windows: double-click `Start.bat`. Mac/Linux: run `./start.sh` from a terminal in the SillyTavern folder. The first run downloads and installs all remaining dependencies automatically — this can take a few minutes and is normal.
6. **Open the local address it prints.** Typically `http://localhost:8000`. That's SillyTavern running, entirely on your own machine.

For exact commands and any platform-specific edge case, the project's own documentation at **docs.sillytavern.app** is the source of truth — it's maintained by the developers and stays current with releases in a way no third-party guide can promise to. There's also an official "SillyTavern Launcher" that wraps most of the above into a guided installer, if you'd rather not touch a terminal at all.

## Connecting Your First Model

An empty SillyTavern window asking for an "API connection" is the single most common point of confusion for new users — it's not broken, it's waiting for you to tell it what should generate the text.

1. Click the **plug icon** (API Connections) in the top toolbar.
2. **Choose your path:**
   - **Cloud API** — the fast on-ramp. Select your provider (or "Chat Completion" with a custom OpenAI-compatible source for aggregators like OpenRouter), paste your API key, pick a model, and you're connected in under a minute. No powerful hardware needed; you pay per token. Our [best LLM for roleplay](/blog/best-llm-for-roleplay) guide breaks down which model to pick for quality, budget, or content freedom.
   - **Local model** — full privacy and zero content restrictions, at the cost of needing a capable GPU and a backend server running the model. The two most common backends are **KoboldCpp** (portable, no-install, GGUF-focused) and **Ollama** (one-command, simplest on-ramp). We cover each in full depth: [SillyTavern + KoboldCpp setup](/blog/sillytavern-kobold-setup) and [SillyTavern + Ollama setup](/blog/sillytavern-ollama-setup).
3. **Save the connection**, then load any character and send a message. A reply confirms everything is wired correctly.

## Your First Session

Once connected, click **Characters** and either import a character card (a `.png` or `.json` file from a community library) or build one from scratch. If you want to write your own from the ground up, [how to write a character card](/blog/how-to-write-a-character-card) walks the craft, or the free [AI Character Card Generator](/tools/character-card-generator) hands you a paste-ready one in a click. Everything you load here also works in other card-compatible front-ends, so nothing you build is locked in.

## How to Update SillyTavern

Keeping current matters — updates bring bug fixes, new features, and compatibility with newer models.

- **If you installed via Git:** open a terminal in your SillyTavern folder and run `git pull`, then restart with the start script. This is the entire reason the Git install route is recommended over a zip download.
- **If you installed from a zip:** download the latest release and extract it over your existing installation, which preserves your `data` and `config` folders (that's where your characters, chats, and settings live). Always keep a backup of that folder before a manual update, just in case.

## Troubleshooting the Install

Almost every "SillyTavern won't start" or "blank page" report traces back to one of these:

- **Blank page or the app won't load in the browser.** Try a hard refresh (clear cache) or a different browser first. If that doesn't fix it, confirm the terminal window shows no errors and that you're opening the exact address it printed (port matters).
- **"Port already in use" or the server won't start.** Something else on your machine is using port 8000. Close other local dev servers, or check SillyTavern's config for how to change its port.
- **Outdated Node.js.** SillyTavern tracks the current Node LTS. If you installed Node a while ago, update it — an old version is a frequent, silent cause of install failures.
- **Installed inside a protected Windows folder.** As above — move the install out of `Program Files` or similar and reinstall.
- **Dependencies fail to install on first run.** Usually a flaky connection during the automatic first-run install. Close it and re-run the start script; it resumes where it left off.
- **Connected but no reply from the model.** This isn't an install problem — it's an API connection problem. Double-check your key, base URL, and model name (cloud), or confirm your backend server is actually running (local) — see the KoboldCpp and Ollama guides linked above for backend-specific fixes.

If none of that resolves it, the official docs and the active **r/SillyTavernAI** community are the two best places to paste your exact error, since installs occasionally break on brand-new releases before third-party guides (including this one) catch up.

## What's Next

With SillyTavern installed and a model connected, the rest is tuning: lorebooks for persistent world facts, personas, group chats, and the extension ecosystem are all covered in the [full SillyTavern guide](/blog/sillytavern-guide). If long campaigns are the goal, [why LLMs forget](/blog/why-llms-forget) explains the context-window limit every setup eventually hits, and the free [Campaign Memory Tool](/tools/campaign-memory) helps track state across sessions regardless of which backend you're running.

And if what you actually want, once it's all running, is a *structured* game rather than open character chat — mechanics, persistent world state, a designed campaign — that's a different category from what SillyTavern gives you out of the box. The free [Arcanum Originals](/arcanum-games) are engineered RPG systems built for exactly that, and they run on any model you'd connect here, cloud or local.

## Frequently Asked Questions

**How do I install SillyTavern?**
Install Node.js (LTS version) and Git, clone the official SillyTavern repository (or download it as a zip), run the start script for your platform — `Start.bat` on Windows, `start.sh` on Mac and Linux — and open the local address it prints in your browser, typically `http://localhost:8000`. Then connect a model under API Connections before you can chat.

**Is SillyTavern free to install and run?**
Yes. SillyTavern itself is free, open-source software with no signup and no license fee. The only cost is whatever model you connect it to — free if you run a local open-weight model on your own hardware, or per-token API fees if you connect a cloud model like Claude, GPT, or DeepSeek.

**Do I need to know how to code to install SillyTavern?**
No. The install is copy-paste-and-run: install two programs (Node.js and Git), run one command to download SillyTavern, then double-click a start script. No programming knowledge is required, though basic comfort with a terminal window helps if something goes wrong.

**Can I run SillyTavern on Mac or Android?**
Yes to both. SillyTavern officially supports Windows, macOS, and Linux with the same install process on each (just a different start script). It also runs on Android through Termux, a terminal app, though that path is more technical and best suited to users already comfortable with a command line.

**Why won't SillyTavern open or why is it stuck on a blank page?**
The most common causes are an outdated Node.js version, a port already in use by another program, or a browser cache issue. Update Node.js to the current LTS release, close whatever else might be using port 8000, and try a hard refresh or a different browser before reinstalling anything.

**How do I update SillyTavern?**
If you installed with Git, open a terminal in the SillyTavern folder and run a `git pull` to fetch the latest release, then restart it with the start script. If you installed from a zip, download the newest release and extract it over your existing folder, keeping your data and config files intact.
