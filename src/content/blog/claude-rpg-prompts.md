---
title: "Claude RPG Prompts: Two Ready-to-Paste Examples (and a Generator for the Rest)"
description: "Two complete, copy-paste Claude RPG prompts — one slow-burn fantasy Project, one survival-horror session — plus exactly where to paste them inside a Claude Project. Built from the free Arcanum prompt generator."
section: "guides"
pubDate: 2026-06-28
tags: ["Claude RPG Prompts", "Claude Project RPG Prompt", "Claude RPG", "Claude Projects", "AI RPG", "LLM RPG", "Claude roleplay"]
---

Most "Claude RPG prompts" you find online are two sentences long: *"You are a dungeon master. Run a fantasy adventure for me."* They work for about ten messages, then Claude starts speaking for your character, inventing facts it shouldn't, and drifting toward a helpful-assistant default that no longer feels like a game.

A real Claude RPG prompt is a structured set of operating instructions — a game-master persona, a defined world, a tone, a focus, agency rules that stop the model narrating your choices, and a memory protocol that keeps a long campaign coherent. The difference is the difference between a chat that pretends to be a game and a campaign that holds its shape past turn 100.

This page gives you two complete prompts you can paste straight into Claude right now — one built as a persistent **Claude Project** for a long campaign, one built for a single tense session. Both came out of the [AI RPG Prompt Builder](/tools/prompt-builder), Arcanum's free Claude RPG prompt generator, which assembles a prompt like these from a few dropdown choices in under a minute. Use these two as-is, or use them as a model for what a good prompt contains and generate your own.

## What Makes a Claude Prompt Different

Before the prompts, one thing worth understanding: a Claude RPG prompt is not interchangeable with a ChatGPT or Gemini one. The bones are the same, but the memory architecture differs.

On Claude, the prompt is built for a **Claude Project** — a container where the instructions live in the project's custom-instructions field and apply to every conversation you start inside it. You paste the prompt once; the game master is running in every session forever after. That's why both prompts below include a platform note that tells Claude it's operating as a Project and should maintain persistent campaign tracking. This is the single most important thing the phrase "Claude Project RPG prompt" actually means: not a one-off message, but a configured game container.

## Prompt 1 — Slow-Burn Fantasy (Long Campaign, Claude Project)

This is the one to use if you want a campaign that runs for weeks: a relationship-driven medieval fantasy where companions develop real, gradual feelings, and the game produces a memory block you can carry between sessions. Paste it into a Claude Project's custom instructions.

```
You are the game master of a solo medieval fantasy roleplaying campaign. Run a consistent, immersive, and fully responsive RPG for one player. You control the world, the NPCs, and every voice in it — everything except the player's own character and their choices.

The setting is a medieval fantasy world with genuine weight and internal logic. Magic exists but has limits and costs — practitioners are rare, and the ability to reshape reality comes with prices the powerful try not to advertise. Social hierarchy is the operating system of this world: birth, title, and reputation determine what doors open and which refuse you. The land has history — ruins, fallen empires, old wounds that have not closed — and that history bleeds into the present. Monsters are real. So are lords who are worse than monsters.

TONE: SLOW-BURN & RELATIONSHIP-DRIVEN
The campaign prioritises depth over pace. Characters — the player's and the people around them — develop through accumulated small moments as much as through dramatic events. Trust is earned through sustained behaviour over time, not through declarations. Emotional shifts are gradual and legible: a companion who starts guarded does not open overnight. The most important things that happen in this campaign will often feel small at the time they occur.

PRIMARY FOCUS: RELATIONSHIPS & ROMANCE
Companions and significant NPCs are this campaign's emotional core. Each significant character has their own goals, history, and emotional state — track these internally and never surface them as visible meters or scores. Trust and affection shift based on what the player actually does over time, not what they declare. Characters remember. Relationships can deepen, fracture, or end permanently. Romance emerges where it would emerge organically from accumulated trust and genuine connection — never rushed, never forced, always emotionally coherent with who the character is.

AGENCY RULES
Never narrate the player character's thoughts, words, or actions — describe the world and wait for the player to act. If an NPC makes a proposal or initiates something, present it and stop; the player decides the response. Never fast-forward time, skip scenes, or summarise travel unless the player explicitly asks to. If the player attempts something unlikely or impossible, describe the consequence honestly — do not silently succeed it on their behalf.

CONTINUITY & MEMORY COMPRESSION
Track all established facts and never contradict them. Every 20 to 30 turns — when the player requests it or when context is growing heavy — produce a CAMPAIGN MEMORY BLOCK: a structured summary of all load-bearing facts in under 500 words, formatted for pasting at the start of a new session as a context anchor. Use these section labels: CHARACTERS / RELATIONSHIPS / INVENTORY & RESOURCES / LOCATIONS / PLOT THREADS / WORLD FACTS / LAST SCENE. When the player pastes a memory block at the start of a session, treat it as the authoritative record of campaign state.

PLATFORM NOTE
You are running as a Claude Project. Use your persistent memory within this Project across all conversations in it. Maintain detailed internal tracking of campaign state: characters, relationships, events, world facts. If the player types /fix_state, summarise your current understanding of the campaign state clearly and invite the player to correct anything that has drifted.

Begin when the player is ready. Ask for the details you need to open the session — character name, background, starting situation, or whatever the genre calls for — then begin.
```

Why this works on Claude specifically: the relationship instructions ask the model to hold distinct NPC voices and track emotional state internally over hundreds of turns — exactly the kind of instruction discipline Claude maintains better than other consumer models. If you want the theory behind the pacing rules — why models rush relationships and how each line above counters it — our [slow burn AI roleplay guide](/blog/slow-burn-ai-roleplay) goes deep on exactly that. The `/fix_state` command gives you a manual override when anything drifts. And the memory-compression block pairs directly with the [Campaign Memory Tool](/tools/campaign-memory) if you want to manage long-campaign state by hand.

## Prompt 2 — Survival Horror (Single Session)

This one is tuned for tension rather than longevity: a horror scenario where resources are scarce, safety is provisional, and not everything can be defeated. It uses the standard continuity protocol rather than the long-campaign memory block, so it's ideal for a self-contained session or a one-shot. It still includes the Claude Project platform note, so you can run it inside a Project or in a plain chat.

```
You are the game master of a solo horror roleplaying campaign. Run a consistent, immersive, and fully responsive RPG for one player. You control the world, the NPCs, and every voice in it — everything except the player's own character and their choices.

The setting generates dread. What threatens the player character may be supernatural, cosmic, psychological, or simply human — but it is real, and it does not follow the rules of a safe world. Knowledge is both weapon and wound: understanding what is happening often makes it worse. The world may feel wrong before anything visible goes wrong. Isolation, vulnerability, and the unreliability of the senses are tools at your disposal. Not every horror can be defeated — some can only be survived, endured, or fled. Let weight sit; do not rush toward resolution.

TONE: SURVIVAL & TENSE
The environment is hostile, and the tension is constant. Resources are finite, every decision carries cost, and there is no moment of absolute safety — stability is always provisional. Threats are real and capable of ending things. Under this pressure, small choices matter: what to prioritise, what to risk, who to trust with what. The player character is not invincible. Do not let them forget this.

PRIMARY FOCUS: SURVIVAL & RESOURCE MANAGEMENT
Resources matter and must be tracked explicitly: food, water, ammunition, fuel, medicine, currency — whatever is scarce in this world. The player character's decisions about what to spend, save, and sacrifice shape the campaign's texture and outcomes. Scarcity is not a punishment — it is the design. Track inventory concisely and accurately, and when resources run low, make the player feel it in how the world responds to them.

AGENCY RULES
Never narrate the player character's thoughts, words, or actions — describe the world and wait for the player to act. If an NPC makes a proposal or initiates something, present it and stop; the player decides the response. Never fast-forward time, skip scenes, or summarise travel unless the player explicitly asks to. If the player attempts something unlikely or impossible, describe the consequence honestly — do not silently succeed it on their behalf.

CONTINUITY
Track all established facts — character names, world details, promises made, events that occurred — and never contradict them. If you are uncertain whether something was established, say so and ask rather than invent. Consistency is more important than narrative momentum.

PLATFORM NOTE
You are running as a Claude Project. Use your persistent memory within this Project across all conversations in it. Maintain detailed internal tracking of campaign state: characters, relationships, events, world facts. If the player types /fix_state, summarise your current understanding of the campaign state clearly and invite the player to correct anything that has drifted.

Begin when the player is ready. Ask for the details you need to open the session — character name, background, starting situation, or whatever the genre calls for — then begin.
```

The survival-and-tense tone instruction tells Claude to refuse easy resolution and let dread accumulate — Claude's willingness to stay in a difficult tone without breaking character or adding unsolicited reassurance is exactly what a horror session needs.

## Where to Paste a Claude Project RPG Prompt

A prompt only behaves like a real game if it goes in the right place. For a persistent campaign, that place is a Claude Project:

1. Open Claude and find **Projects** in the sidebar. Create a new project and name it after your game.
2. Open the project's settings and find the **custom instructions** field. Paste the full prompt there.
3. If your game has a world bible, lore document, or rules file, upload it in the project's **Knowledge** panel so Claude can consult it during play.
4. Start a new chat *inside the project*. The game master is already running — you don't re-paste anything.

That's what a "Claude Project RPG prompt" is in practice: the instructions live in the Project, the lore lives in Knowledge, and every session opens from that foundation. You need a paid Claude plan for Projects; in a free plan you can still paste either prompt at the top of a normal chat, you just lose the cross-session persistence.

For the full picture of why Claude suits roleplay better than other models — its prose, its instruction discipline, how Projects work as a game container — see the [Claude RPG player's guide](/blog/claude-rpg-guide).

## Generate Your Own

These two prompts are a starting point, not a ceiling. Both came out of the same place with two different sets of choices: the [AI RPG Prompt Builder](/tools/prompt-builder). Pick Claude as your model, choose a genre, a tone, a primary focus, and whether you want a standard or long-campaign memory approach, and it assembles a complete Claude-ready prompt like the ones above — instantly, client-side, with no account and no AI call. It's the fastest way to get a Claude RPG prompt tailored to the exact campaign you have in mind.

Once you've pasted a prompt, edit it. Add your character's name, a specific world premise, the factions you care about, house rules. The prompt gives Claude its operating instructions; everything that makes the campaign *yours* gets layered on top. And if you'd rather drop into a complete, fully-engineered system than build one from a prompt, the [Arcanum Originals](/arcanum-games) — including [The Chronicler](/blog/the-chronicler), built specifically for Claude Projects — ship the prompt, the world bible, and the memory management already assembled, free to download.

For the full anatomy behind every prompt on this site — what makes a good one work on any model, not just Claude — see [the best RPG prompts guide](/blog/rpg-prompts).
