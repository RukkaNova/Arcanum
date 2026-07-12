---
title: "How to Summarize a Long AI Roleplay Campaign (So It Actually Remembers)"
description: "A step-by-step method for compressing a long AI RPG campaign into a clean memory block — what to keep, what to prune, when to do it, and how to paste it back in so ChatGPT, Claude, or Gemini picks up exactly where you left off."
section: "guides"
pubDate: 2026-07-12
tags: ["how to summarize AI roleplay", "AI campaign memory", "compress AI chat history", "campaign memory tool", "long AI campaign", "AI RPG tips"]
faq:
  - q: "How do I summarize a long AI roleplay campaign?"
    a: "Write or generate a compact status block covering characters and their current state, active relationships, inventory, key world facts, open plot threads, and where the last scene ended — then paste that block at the start of your next session as a context anchor. Doing this every 20-30 turns keeps a campaign coherent well past the point raw conversation history would have broken down."
  - q: "What should I include in an AI campaign summary?"
    a: "Only what still matters: who's alive and what they currently want, relationships and tensions between characters, inventory and resources, key facts about the world that affect the story, unresolved plot threads, and the exact situation the last scene ended on. Leave out anything already resolved or purely atmospheric — a summary that tries to keep everything stops being compact."
  - q: "How often should I summarize my campaign?"
    a: "Every 20 to 30 turns is the general rule, or whenever you notice the model starting to blur details. Doing it too rarely lets drift set in before you catch it; doing it every single turn is unnecessary overhead for a problem that only bites in the long stretch."
  - q: "Can I automate campaign summaries instead of writing them by hand?"
    a: "Yes — the free Campaign Memory Tool tracks your campaign state in structured fields and generates a compression prompt for you, which you paste into ChatGPT, Claude, or Gemini to get a clean summary block back. It does the same job as writing one by hand, just faster and more consistently formatted."
  - q: "Where do I paste the summary once I have it?"
    a: "At the very start of a new session, before any roleplay begins — as the first message in a fresh ChatGPT chat, inside a Claude Project's custom instructions, or in a Gemini Gem's instructions field. Treat it as the opening briefing the AI reads before anything else, not a message to respond to mid-scene."
  - q: "What's the difference between a summary and a save file?"
    a: "A save file (like the Campaign Memory Tool's .arcanum export) stores your structured campaign data so you can reopen and keep editing it — it's for you. A summary is the compressed text block generated from that data, written for the AI to read as a context anchor at the start of a session. You need the save file to keep tracking state over time, and the summary to actually restore context each session."
---

Every AI roleplay campaign eventually outgrows the model's memory of it. The fix isn't a better prompt or a smarter model — it's an old, low-tech habit: periodically writing down what still matters and handing that back to the AI as a fresh starting point. This is called compression, and doing it well is the single highest-leverage skill for running a campaign past the point most AI RPGs fall apart.

This is the practical, step-by-step version — what to write down, when to do it, and exactly where it goes.

## Why Summarizing Beats Hoping the AI Remembers

A model's context window is finite, and [everything before it eventually scrolls out of view](/blog/why-llms-forget) — no amount of clever prompting keeps the entire raw history in view forever. Summarizing sidesteps the problem entirely instead of fighting it: rather than relying on the model to retain hundreds of messages of raw conversation, you extract only the facts that still affect the story into a short, dense block, and hand that back as the new baseline. The model isn't remembering the whole campaign anymore — it's reading a briefing that already did the remembering for it.

## When to Do It

Run a compression every 20 to 30 turns as a default rhythm, and additionally whenever you notice early drift — an NPC's motivation blurring, a detail getting slightly wrong, replies leaning on vague description instead of specifics. Catching drift a little early is far easier than reconstructing a campaign that's already lost the thread. If you're starting a long campaign, it's worth doing a first pass around turn 30-40 even if nothing seems wrong yet, purely to establish the habit before you need it.

## What to Keep vs What to Prune

The discipline that makes a summary actually work is deciding what's load-bearing and cutting everything else. Keep:

- **Characters** — who's alive, their role, key traits, and their current status or goal.
- **Relationships and dynamics** — trust, tension, debts, secrets between characters that would change how a scene plays out.
- **Inventory and resources** — anything the story would break continuity over if it silently vanished or reappeared.
- **Key world facts** — established truths about the setting that future scenes depend on.
- **Open plot threads** — unresolved questions or promises, explicitly marked as open.
- **The last scene** — exactly where things stood: location, immediate situation, anything mid-action.

Prune anything already resolved (a completed quest doesn't need re-stating, just its consequences if any remain), purely atmospheric detail that doesn't affect future scenes, and minor NPCs who haven't mattered in a long stretch. A summary that tries to preserve everything isn't a summary — the entire value is in ruthlessly keeping only what still carries weight.

## The Manual Method: Writing Your Own Compression Prompt

You don't need a tool to do this — you can drive it entirely from inside the chat you're already in. Near the end of a session, or when you're ready to compress, send something like:

> "We're at roughly turn 60. Read back through our conversation and produce a COMPRESSED SESSION MEMORY under 500 words: current status of each character, key relationships, inventory, open plot threads, important world facts, and exactly where we left off. Cut anything already resolved or no longer relevant."

The model reads its own context and hands back a dense block. Save that block somewhere outside the chat — a notes file, a document, wherever you keep it — and paste it as the very first message of your next session, before any roleplay resumes.

## The Tool Method: Campaign Memory Tool Walkthrough

Writing a compression prompt from scratch each time works, but it's easy to forget a field or phrase it inconsistently session to session. The free [Campaign Memory Tool](/tools/campaign-memory) turns this into structured data entry instead: separate tabs for characters, plot threads and locations, world facts and inventory, and the last scene. Fill in what's changed since your last update, hit **Generate Compression Prompt**, and it assembles the same kind of request as the manual method — but built from your structured fields instead of typed freehand, so nothing gets left out by accident. Paste the generated prompt into ChatGPT, Claude, or Gemini, and it reads your full state back and returns the compact memory block. Use **Save Scroll** to keep a `.arcanum` file of your campaign state between sessions — that's your working save file, separate from the summary block itself, so you can keep updating it as the campaign continues rather than starting from a blank tracker each time.

## Where to Paste the Result

The summary needs to be the *first* thing the AI reads in a new session, not a message sent mid-conversation. On ChatGPT, paste it as the opening message of a fresh chat, or into a Custom GPT's instructions if you want it to persist automatically. On a Claude Project, drop it into the custom instructions or Project Knowledge before you start the new session. On a Gemini Gem, the instructions field serves the same purpose. Treated as an opening briefing rather than a conversational reply, the model picks up the compressed state as its baseline for everything that follows.

## Keeping It Going Across a Long Campaign

Each compression cycle replaces the previous summary rather than stacking on top of it — the new block should already fold in everything from the last one plus what's changed since, so you're never juggling multiple overlapping summaries. Over a genuinely long campaign (hundreds of turns), this becomes a running rhythm: play a stretch, compress, paste the fresh block into the next session, repeat. It's the same manual discipline that [well-engineered AI RPG engines](/arcanum-games) build in automatically from the start — external state tracking and periodic compression baked into the system rather than left for the player to remember to do by hand. If you'd rather not maintain this yourself at all, that's the structural difference a purpose-built engine buys you.

## Frequently Asked Questions

**How do I summarize a long AI roleplay campaign?**
Write or generate a compact status block covering characters and their current state, active relationships, inventory, key world facts, open plot threads, and where the last scene ended — then paste that block at the start of your next session as a context anchor. Doing this every 20-30 turns keeps a campaign coherent well past the point raw conversation history would have broken down.

**What should I include in an AI campaign summary?**
Only what still matters: who's alive and what they currently want, relationships and tensions between characters, inventory and resources, key facts about the world that affect the story, unresolved plot threads, and the exact situation the last scene ended on. Leave out anything already resolved or purely atmospheric — a summary that tries to keep everything stops being compact.

**How often should I summarize my campaign?**
Every 20 to 30 turns is the general rule, or whenever you notice the model starting to blur details. Doing it too rarely lets drift set in before you catch it; doing it every single turn is unnecessary overhead for a problem that only bites in the long stretch.

**Can I automate campaign summaries instead of writing them by hand?**
Yes — the free Campaign Memory Tool tracks your campaign state in structured fields and generates a compression prompt for you, which you paste into ChatGPT, Claude, or Gemini to get a clean summary block back. It does the same job as writing one by hand, just faster and more consistently formatted.

**Where do I paste the summary once I have it?**
At the very start of a new session, before any roleplay begins — as the first message in a fresh ChatGPT chat, inside a Claude Project's custom instructions, or in a Gemini Gem's instructions field. Treat it as the opening briefing the AI reads before anything else, not a message to respond to mid-scene.

**What's the difference between a summary and a save file?**
A save file (like the Campaign Memory Tool's .arcanum export) stores your structured campaign data so you can reopen and keep editing it — it's for you. A summary is the compressed text block generated from that data, written for the AI to read as a context anchor at the start of a session. You need the save file to keep tracking state over time, and the summary to actually restore context each session.
