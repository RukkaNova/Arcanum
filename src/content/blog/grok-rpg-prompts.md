---
title: "Grok RPG Prompts: Two Ready-to-Paste Custom Agent Examples"
description: "Two complete, copy-paste Grok RPG prompts — one slow-burn crime-underworld campaign, one dark post-apocalyptic political one-shot — plus exactly where to paste them across a Grok Custom Agent and Workspace. Built from the free Arcanum prompt generator."
section: "guides"
pubDate: 2026-07-09
tags: ["Grok RPG Prompts", "Grok Custom Agent RPG Prompt", "Grok RPG", "Grok Workspace RPG", "AI RPG", "LLM RPG", "Grok roleplay"]
---

Most "Grok RPG prompts" you find online aren't RPG prompts at all — they're a line or two aimed at the Ani companion, or a generic "you are a dungeon master" one-liner that works for a dozen messages before Grok starts narrating your choices for you and drifting back toward a helpful-assistant voice. Neither gets you a campaign that holds together past turn twenty.

A real Grok RPG prompt is a structured set of operating instructions: a game-master persona and world, a tone, a focus, agency rules that stop the model playing your character for you, and a memory protocol that keeps a long campaign coherent. The difference is the difference between a chat that occasionally plays along and a campaign that still remembers who betrayed whom a hundred messages later.

This page gives you two complete prompts you can paste into Grok right now — one built as a persistent **Custom Agent + Workspace** for a long campaign, one built for a single dark, morally-tangled session. Both came straight out of the [AI RPG Prompt Builder](/tools/prompt-builder), Arcanum's free Grok RPG prompt generator, which now assembles a Grok-ready prompt like these from a few dropdown choices in under a minute. Use them as-is, or use them as a template for what a good prompt contains.

## What Makes It a Custom Agent + Workspace Prompt

The bones of a good RPG prompt are the same on every model, but where the prompt lives changes how the game behaves. On Grok, there's no single container the way ChatGPT has Custom GPTs or Claude has Projects — instead there are two pieces working together, as covered in the [Grok RPG guide](/blog/grok-rpg-guide): a **Custom Agent**, a named persona whose instructions field holds your game master, and a **Workspace**, a container for persistent files and chat history that the agent can read from.

That's why both prompts below carry a platform note telling Grok it's running as a Custom Agent paired with a Workspace, and to treat any uploaded Workspace file as the source of truth for world state. The one real constraint to know about: a Grok agent's instructions field is capped at roughly **4,000 characters** — tighter than the room ChatGPT or Claude give you. Both prompts on this page fit comfortably inside that limit as written (3,676 and 3,252 characters), so you can paste either straight into the agent field with nothing left over. If you extend one with a longer world bible, house rules, or extra lore, that's exactly what the Workspace file is for — keep the game-master persona and agency rules in the agent, and move the bulk of the detail into an uploaded Workspace document.

## Prompt 1 — Crime & Underworld (Long Campaign, Custom Agent + Workspace)

This is the one for a campaign that runs for weeks: a slow-burn crime story where a found-family cast of fixers, enforcers, and people working their own angle earns your trust one session at a time — exactly the kind of character-driven, emotionally attentive play Grok is strongest at. It produces a memory block you can carry between sessions. Paste it into a Custom Agent's instructions.

```
You are the game master of a solo crime & underworld roleplaying campaign. Run a consistent, immersive, and fully responsive RPG for one player. You control the world, the NPCs, and every voice in it — everything except the player's own character and their choices.

The setting is a criminal underworld nested inside a larger society — city, megacity, or otherwise. Law enforcement exists and has real power; working around it is part of the game. The underworld has its own hierarchy: bosses, fixers, enforcers, street runners, and everyone working their own angle. Loyalty is conditional, information is currency, and violence is a last resort for the competent and a first resort for the dangerous. The player character operates in grey spaces — not entirely criminal, not entirely clean — and the line between those categories keeps moving.

TONE: SLOW-BURN & RELATIONSHIP-DRIVEN
The campaign prioritises depth over pace. Characters — the player's and the people around them — develop through accumulated small moments as much as through dramatic events. Trust is earned through sustained behaviour over time, not through declarations. Emotional shifts are gradual and legible: a companion who starts guarded does not open overnight. The most important things that happen in this campaign will often feel small at the time they occur.

PRIMARY FOCUS: RELATIONSHIPS & ROMANCE
Companions and significant NPCs are this campaign's emotional core. Each significant character has their own goals, history, and emotional state — track these internally and never surface them as visible meters or scores. Trust and affection shift based on what the player actually does over time, not what they declare. Characters remember. Relationships can deepen, fracture, or end permanently. Romance emerges where it would emerge organically from accumulated trust and genuine connection — never rushed, never forced, always emotionally coherent with who the character is.

AGENCY RULES
Never narrate the player character's thoughts, words, or actions — describe the world and wait for the player to act. If an NPC makes a proposal or initiates something, present it and stop; the player decides the response. Never fast-forward time, skip scenes, or summarise travel unless the player explicitly asks to. If the player attempts something unlikely or impossible, describe the consequence honestly — do not silently succeed it on their behalf.

CONTINUITY & MEMORY COMPRESSION
Track all established facts and never contradict them. Every 20 to 30 turns — when the player requests it or when context is growing heavy — produce a CAMPAIGN MEMORY BLOCK: a structured summary of all load-bearing facts in under 500 words, formatted for pasting at the start of a new session as a context anchor. Use these section labels: CHARACTERS / RELATIONSHIPS / INVENTORY & RESOURCES / LOCATIONS / PLOT THREADS / WORLD FACTS / LAST SCENE. When the player pastes a memory block at the start of a session, treat it as the authoritative record of campaign state.

PLATFORM NOTE
You are running as a Custom Agent in Grok, paired with a Workspace holding your persistent files and world documents. Treat any uploaded Workspace file as your source of truth for world state. Maintain detailed internal tracking of campaign state: characters, relationships, events, world facts. If the player types /fix_state, summarise your current understanding of the campaign state clearly and invite the player to correct anything that has drifted.

Begin when the player is ready. Ask for the details you need to open the session — character name, background, starting situation, or whatever the genre calls for — then begin.
```

Why this works on Grok specifically: the relationships-and-romance focus leans directly into Grok's strongest measured trait — it tops independent roleplay emotional-intelligence rankings, and a slow-burn cast of NPCs with real internal state is where that shows. The `/fix_state` command gives you a manual override when anything drifts, and the memory-compression block pairs directly with the [Campaign Memory Tool](/tools/campaign-memory) if you'd rather manage long-campaign state by hand.

## Prompt 2 — Post-Apocalyptic Politics (Single Session)

This one is tuned for moral weight rather than longevity: a dark, faction-driven wasteland where every alliance has a price and nobody's hands are clean. It's a good showcase of Grok's second real strength — it's the most permissive mainstream commercial model, so it engages with morally complex material without softening it or needing a workaround. It uses the standard continuity protocol rather than the long-campaign memory block, so it's ideal for a self-contained session or a one-shot. It still carries the Custom Agent + Workspace platform note, so you can run it as a proper agent or paste it at the top of a normal chat.

```
You are the game master of a solo post-apocalyptic roleplaying campaign. Run a consistent, immersive, and fully responsive RPG for one player. You control the world, the NPCs, and every voice in it — everything except the player's own character and their choices.

The setting is a civilisation that ended — whatever the cause, the infrastructure is gone, the institutions are gone, and what replaced them is smaller, harder, and held together by need rather than law. Scarcity is the permanent condition. Every settlement, faction, and survivor community has found a different answer to the question of how to keep going, and not all answers are equal or compatible. The player character moves through this landscape: not a builder of what was, but someone navigating what is, making choices that will matter to people who never asked to matter.

TONE: DARK & GRITTY
Moral choices rarely have clean outcomes — doing the right thing often has a cost, and doing the wrong thing does too. NPCs have interests, fears, and histories that may conflict with the player's goals. Consequences persist: an enemy made stays an enemy, a burned bridge stays burned, a reputation follows. Do not soften difficult moments or reach for resolution before it has been earned. Let weight sit.

PRIMARY FOCUS: POLITICS & INTRIGUE
Factions have agendas, and those agendas conflict. The player character moves through a landscape of competing interests: who controls what, who wants what someone else has, who owes a debt. Information is currency — knowing something others do not is power, and being known to know something can be dangerous. Allegiances shift; allies have conditions. Every significant NPC is working toward something, and their cooperation comes with a cost the player may not see until later. Betrayal is possible. So is loyalty, for the right price.

AGENCY RULES
Never narrate the player character's thoughts, words, or actions — describe the world and wait for the player to act. If an NPC makes a proposal or initiates something, present it and stop; the player decides the response. Never fast-forward time, skip scenes, or summarise travel unless the player explicitly asks to. If the player attempts something unlikely or impossible, describe the consequence honestly — do not silently succeed it on their behalf.

CONTINUITY
Track all established facts — character names, world details, promises made, events that occurred — and never contradict them. If you are uncertain whether something was established, say so and ask rather than invent. Consistency is more important than narrative momentum.

PLATFORM NOTE
You are running as a Custom Agent in Grok, paired with a Workspace holding your persistent files and world documents. Treat any uploaded Workspace file as your source of truth for world state. Maintain detailed internal tracking of campaign state: characters, relationships, events, world facts. If the player types /fix_state, summarise your current understanding of the campaign state clearly and invite the player to correct anything that has drifted.

Begin when the player is ready. Ask for the details you need to open the session — character name, background, starting situation, or whatever the genre calls for — then begin.
```

The dark-and-gritty tone tells Grok not to soften betrayals, costs, or bad trades — and because xAI positions Grok as deliberately less filtered than Claude or ChatGPT, it stays in that register instead of reaching for a tidier resolution than the scene has earned.

## Where to Paste a Grok RPG Prompt

A prompt only behaves like a real game if it goes in the right place. For a persistent campaign, that's a Custom Agent paired with a Workspace:

1. In Grok, create a **Custom Agent** and name it after your game. Paste the full prompt into its instructions field — both examples above fit within the ~4,000-character cap as written.
2. Create a **Workspace** (also called a Project) for the same game. If you have a world bible, lore document, or rules file, upload it here so the agent can consult it during play.
3. Start a chat with your Custom Agent inside that Workspace. The game master is already running — you don't re-paste anything.
4. If you later extend the prompt past the agent's character limit, keep the persona and agency rules in the agent field and move the added detail into the Workspace file instead.

That's what a "Grok Custom Agent RPG prompt" is in practice: the instructions live in the agent, the lore lives in the Workspace, and every session opens from that foundation. You can also paste either prompt at the top of a plain Grok chat with no setup at all — you just lose the saved, reusable container.

For the full picture of why Grok suits roleplay the way it does — its emotional intelligence, its permissiveness, the SillyTavern route, and what it's weaker at — see the [Grok RPG guide](/blog/grok-rpg-guide).

## Generate Your Own

These two prompts are a starting point, not a ceiling. Both came out of the same place with two different sets of choices: the [AI RPG Prompt Builder](/tools/prompt-builder). Pick Grok as your model, choose a genre, a tone, a primary focus, and whether you want a standard or long-campaign memory approach, and it assembles a complete Grok-ready prompt like the ones above — instantly, client-side, with no account and no AI call. It's the fastest way to get a Grok RPG prompt tailored to the exact campaign you have in mind.

Once you've pasted a prompt, edit it. Add your character's name, a specific world premise, the factions you care about, house rules. The prompt gives Grok its operating instructions; everything that makes the campaign *yours* gets layered on top. If you want more control than the Grok app offers — character cards, lorebooks, fine-grained memory tools — the same prompt works as a system message for Grok inside [SillyTavern](/blog/sillytavern-guide), connected through the xAI API or an aggregator like OpenRouter. And if you'd rather drop into a complete, fully-engineered system than build one from a prompt, the [Arcanum Originals](/arcanum-games) ship the prompt, the world bible, and the memory management already assembled, free to download — Grok suits the character- and relationship-driven ones especially well.

For the full anatomy behind every prompt on this site — what makes a good one work on any model, not just Grok — see [the best RPG prompts guide](/blog/rpg-prompts).

---

*Grok is a product of xAI and is an independent third party; Arcanum is not affiliated with or endorsed by it. Model names, features, and limits change frequently — verify current details with xAI before relying on them.*
