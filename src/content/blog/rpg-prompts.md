---
title: "The Best RPG Prompts for ChatGPT, Claude & Gemini (Free Generator)"
description: "What actually makes an RPG prompt work — the six-part structure every good one shares — plus a free generator and a complete worked example for ChatGPT, Claude, or Gemini."
section: "guides"
pubDate: 2026-07-07
tags: ["RPG prompts", "roleplaying prompts", "role playing prompts", "AI RPG prompt", "system prompt RPG", "AI RPG", "LLM RPG"]
faq:
  - q: "What are the best RPG prompts for ChatGPT, Claude, and Gemini?"
    a: "The best ones share the same six-part structure regardless of model: a defined game-master persona and world, a tone, a primary focus, agency rules, a memory protocol, and a platform note. The free AI RPG Prompt Builder assembles all six for whichever model you choose, and each model has its own page of ready-to-paste worked examples."
  - q: "Is there a free RPG prompt generator?"
    a: "Yes. The AI RPG Prompt Builder builds a complete system prompt in under a minute — pick your model, genre, tone, focus, and memory approach. It runs entirely client-side: no account, no API call, nothing sent anywhere."
  - q: "What's the difference between a roleplaying prompt and a character prompt?"
    a: "An RPG prompt configures the AI to be the game master — the world, the rules, every NPC. A character prompt (sometimes called a character card) defines a single companion or persona the AI plays inside that game. You generally need the first before the second matters."
  - q: "Do RPG prompts work differently on ChatGPT, Claude, and Gemini?"
    a: "The core structure is identical, but the container and the platform note differ: ChatGPT prompts are built for a Custom GPT, Claude prompts for a Claude Project, and Gemini prompts for a Gemini Gem. Each container gives the prompt persistent memory across sessions in a slightly different way."
  - q: "Can I use one RPG prompt on any AI model?"
    a: "Yes — a prompt without a platform note will work in any chat window, though you'll lose the persistent-container advantages (Custom GPT, Project, or Gem). It's the fastest way to test a prompt before committing it to a specific model's container."
  - q: "Why do most RPG prompts stop working after a while?"
    a: "Because most are a single sentence with no agency rules and no memory protocol. The model starts narrating your choices for you and forgetting earlier facts as the context fills up. A structured prompt with an explicit memory-compression instruction is what prevents this — see why AI campaigns fall apart at turn 50."
---

An **RPG prompt** is the system prompt that turns a general-purpose AI model into a dedicated game master for a specific campaign — not a single sentence, but a structured set of instructions covering the world, the tone, the rules of engagement, and how the campaign remembers itself over time. Search "rpg prompts" or "roleplaying prompts" and most of what comes back is the single-sentence kind: *"you are a dungeon master, run a game for me."* It's not wrong, exactly. It's just incomplete, and incomplete is why it stops working around session two.

This page covers what a real RPG prompt actually contains, gives you one complete worked example, and points you to the free tool that builds one for your exact model and genre in under a minute.

## The Six Parts Every Real RPG Prompt Needs

Every worked prompt on this site — for ChatGPT, Claude, or Gemini — is built from the same six pieces. Understanding them is more useful than memorising any single example, because it's what lets you fix a prompt that isn't working or write your own from scratch.

1. **A game-master persona and world.** The AI needs to know it's *running* a game, not narrating a story alongside you — and it needs a concrete setting with real internal logic, not "a fantasy world" left undefined.
2. **A tone.** Dark and gritty plays by different rules than lighthearted and adventurous. Naming the tone explicitly stops the AI from drifting toward a generic, safe middle register by turn twenty.
3. **A primary focus.** Combat, relationships, exploration, politics, survival — pick one. A prompt that tries to emphasise everything ends up emphasising nothing, and the AI defaults to whatever's easiest to generate.
4. **Agency rules.** The single most commonly missing piece, and the one that causes the most frustration: explicit instructions that the AI never narrates your character's thoughts, words, or actions — it describes the world and waits for you to act.
5. **A memory protocol.** Either a simple continuity instruction ("track established facts, never contradict them") for a short session, or a full memory-compression block for a long campaign that periodically summarises state into a portable block.
6. **A platform note.** What the container is — a Custom GPT, a Claude Project, a Gemini Gem, or nothing at all — and how the model should use whatever persistent memory that container gives it.

Leave out agency rules and the AI plays your character for you within a dozen messages. Leave out the memory protocol and a campaign that's alive at turn 30 is unrecognisable by turn 80. Every genuinely durable RPG prompt has all six; almost none of the one-liners have more than the first.

## A Complete Worked Example

Here's what all six parts look like assembled — a model-agnostic version (no platform note) so you can see the anatomy clearly before picking a specific model. This one runs an open-world exploration campaign:

```
You are the game master of a solo open world adventure roleplaying campaign. Run a consistent, immersive, and fully responsive RPG for one player. You control the world, the NPCs, and every voice in it — everything except the player's own character and their choices.

The setting is a wide world with no fixed destination. Regions differ genuinely — different cultures, climates, dangers, and opportunities — and the player character moves through them on their own terms. There is no prescribed quest and no scripted endpoint. The world was here before the player character arrived and will persist after — and it has opinions about being disturbed.

TONE: HEROIC & EPIC
The campaign operates at mythic scale. The player character is capable of extraordinary things, but those things must be earned — the obstacles are real, and victories only feel like victories because they are genuinely hard.

PRIMARY FOCUS: EXPLORATION & DISCOVERY
The world rewards curiosity. Unknown regions, sealed chambers, ruined structures, and forgotten histories are genuinely waiting to be found — carrying real content: lore, objects, danger, opportunity. Travel is not a loading screen.

AGENCY RULES
Never narrate the player character's thoughts, words, or actions — describe the world and wait for the player to act. If an NPC makes a proposal or initiates something, present it and stop; the player decides the response. Never fast-forward time or summarise travel unless the player explicitly asks to.

CONTINUITY
Track all established facts — character names, world details, promises made, events that occurred — and never contradict them. If you are uncertain whether something was established, say so and ask rather than invent.

Begin when the player is ready. Ask for the details you need to open the session — character name, background, starting situation, or whatever the genre calls for — then begin.
```

Paste that into any chat window on any model and it will run a coherent session. What it's missing is the platform note — the piece that makes a Custom GPT, Claude Project, or Gemini Gem remember this setup permanently instead of just for one conversation. That's model-specific, and it's what the generator adds automatically.

## Generate One for Your Exact Model, Free

The [AI RPG Prompt Builder](/tools/prompt-builder) builds all six parts for you in under a minute — no account, no API call, nothing sent anywhere. Choose your model, a genre (medieval fantasy, sci-fi, cyberpunk, horror, and five others), a tone, a primary focus, and whether you want a standard or long-campaign memory protocol. It assembles a complete prompt with the correct platform note for whichever model you picked.

## Pick Your Model

The anatomy above is identical everywhere, but the container — and which model suits which kind of campaign — differs enough to matter:

- **[ChatGPT RPG prompts](/blog/chatgpt-rpg-prompts)** — built for a Custom GPT, the largest ready-made game library of any model (the GPT Store), and the gentlest on-ramp if you've never built a system prompt before.
- **[Claude RPG prompts](/blog/claude-rpg-prompts)** — built for a Claude Project, and the strongest pick if prose quality and holding a complex rule set across a long session matter most to you.
- **[Gemini RPG prompts](/blog/gemini-rpg-prompts)** — built for a Gemini Gem, and the best choice for the longest campaigns thanks to Gemini's context window, which runs up to 2 million tokens in its most capable configurations.

Each of those pages has two complete, ready-to-paste prompts in different genres, plus exactly where to paste them. For the full model-by-model breakdown — strengths, weaknesses, and which one wins for what kind of roleplay — see [best LLM for roleplay](/blog/best-llm-for-roleplay).

## Roleplaying Prompts vs. D&D Prompts vs. Character Prompts

"RPG prompts" is a broad search, and it's worth being precise about what you actually want:

- **A general RPG prompt** (this page) configures the AI as a game master for any genre — fantasy, sci-fi, horror, whatever you choose.
- **A D&D-specific prompt** layers a 5e-style rules framework — ability scores, initiative, hit points — on top of the same structure. See the [free ChatGPT D&D prompt generator](/blog/chatgpt-dnd-prompts) and the fuller [AI D&D guide](/blog/ai-dnd).
- **A character prompt** (or character card) defines a single companion or persona for the AI to play *inside* a game, rather than the game itself. See [how to write a character card](/blog/how-to-write-a-character-card) and [roleplay character ideas](/blog/roleplay-character-ideas) once your RPG prompt is running.

## Turning a Prompt Into a Full Session

A generated prompt is a starting point, not a finished game. Once you've pasted one in, add specifics — your character's name, a concrete premise, factions you care about, house rules — the prompt gives the AI its operating instructions, and everything that makes the campaign *yours* is layered on top. If you'd rather run a plain chat with no container at all, [AI RPG chat](/blog/ai-rpg-chat) covers exactly how to keep a freeform session on the rails. And if a long campaign starts drifting, the free [Campaign Memory Tool](/tools/campaign-memory) tracks world state and generates a compression prompt to hand the AI a clean summary.

If you'd rather skip prompt engineering altogether, the [Arcanum Originals](/arcanum-games) are complete, fully-engineered RPG systems — the prompt, the world bible, and the memory management all built in — free to download and load into ChatGPT, Claude, or Gemini.

## Frequently Asked Questions

**What are the best RPG prompts for ChatGPT, Claude, and Gemini?**
The best ones share the same six-part structure regardless of model: a defined game-master persona and world, a tone, a primary focus, agency rules, a memory protocol, and a platform note. The free [AI RPG Prompt Builder](/tools/prompt-builder) assembles all six for whichever model you choose, and each model has its own page of ready-to-paste worked examples.

**Is there a free RPG prompt generator?**
Yes. The AI RPG Prompt Builder builds a complete system prompt in under a minute — pick your model, genre, tone, focus, and memory approach. It runs entirely client-side: no account, no API call, nothing sent anywhere.

**What's the difference between a roleplaying prompt and a character prompt?**
An RPG prompt configures the AI to be the game master — the world, the rules, every NPC. A character prompt (sometimes called a character card) defines a single companion or persona the AI plays inside that game. You generally need the first before the second matters.

**Do RPG prompts work differently on ChatGPT, Claude, and Gemini?**
The core structure is identical, but the container and the platform note differ: ChatGPT prompts are built for a Custom GPT, Claude prompts for a Claude Project, and Gemini prompts for a Gemini Gem. Each container gives the prompt persistent memory across sessions in a slightly different way.

**Can I use one RPG prompt on any AI model?**
Yes — a prompt without a platform note will work in any chat window, though you'll lose the persistent-container advantages (Custom GPT, Project, or Gem). It's the fastest way to test a prompt before committing it to a specific model's container.

**Why do most RPG prompts stop working after a while?**
Because most are a single sentence with no agency rules and no memory protocol. The model starts narrating your choices for you and forgetting earlier facts as the context fills up. A structured prompt with an explicit memory-compression instruction is what prevents this — see [why AI campaigns fall apart at turn 50](/blog/why-llms-forget).
