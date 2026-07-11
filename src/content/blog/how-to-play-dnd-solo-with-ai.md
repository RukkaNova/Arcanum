---
title: "How to Play D&D Solo With AI: A Step-by-Step Guide (2026)"
description: "A step-by-step walkthrough for playing D&D solo with an AI Dungeon Master — session zero, character creation, running your first scene, handling combat, and keeping a long campaign from falling apart."
section: "guides"
pubDate: 2026-07-11
tags: ["play D&D solo with AI", "solo D&D AI", "AI Dungeon Master solo", "ChatGPT dungeon master", "how to play D&D alone", "AI D&D 2026", "solo D&D guide"]
faq:
  - q: "How do I start playing D&D solo with AI tonight?"
    a: "Pick a route: a dedicated platform like AI Realm needs no setup beyond an account. Running it yourself on ChatGPT, Claude, or Gemini needs one thing first — a structured Dungeon Master system prompt, not an improvised one-liner. The free AI RPG Prompt Builder generates that prompt in under a minute; paste it into a fresh chat (or a Custom GPT/Project) and you can be rolling a character within five minutes."
  - q: "Can ChatGPT actually run a full D&D session by itself?"
    a: "Yes, for the format most solo players actually want — a one-shot or short arc. It will describe the world, voice NPCs, and adjudicate a 5e-style ruleset if the system prompt tells it to enforce checks and track state rather than narrate freely. It won't reliably run dozens of continuous sessions without help managing memory — that's a model limitation, not a ChatGPT-specific one."
  - q: "What's Session Zero when I'm playing alone?"
    a: "The setup exchange before the story starts: telling the AI your character concept, the world's tone, and the ground rules (does it roll dice itself, can you retcon a bad turn, how graphic should combat get). Skipping this is the single most common reason a solo AI campaign goes off the rails in the first ten minutes — the AI has no table to read your expectations from, so you have to state them."
  - q: "How do I stop my AI Dungeon Master from forgetting things?"
    a: "You can't stop it entirely — every model has a finite context window, and a long campaign eventually holds more state than that window fits. What you can do is manage it deliberately: recap key facts every few sessions, keep a running notes file outside the chat, or use a tool like the Campaign Memory Tool, which tracks your world state and generates a clean compression prompt to re-anchor the AI when it starts drifting."
  - q: "Do I need a dedicated app, or can I just use ChatGPT?"
    a: "Either works, and they trade off differently. A dedicated platform (AI Realm, Taverna, Friends & Fables) resolves dice and combat in code, so the AI can't fudge outcomes, at the cost of a new account and often a subscription. Running it yourself on a model you already pay for is free and flexible, but the AI is doing the rules-adjudication as well as the narration, so it's more prone to drift on the mechanical side."
  - q: "What if I don't know 5e rules at all?"
    a: "Tell the AI that in Session Zero and ask it to run a lighter, narrative-first version — most models handle this well, resolving actions by outcome rather than by strict rules math. If you want the real ruleset without reading a rulebook, a platform with a built-in character-creation wizard, like AI Realm, walks you through it step by step."
---

**Playing D&D solo with AI** means running a Dungeons & Dragons–style campaign by yourself, with a language model acting as your Dungeon Master instead of a human — no group, no scheduling, playable the moment you decide to start. This is a step-by-step walkthrough of actually doing it: setting up Session Zero, creating a character, running your first scene, handling combat, and — the part every guide skips — keeping a long campaign from quietly falling apart.

If you want the wider picture first — what AI D&D is, what it's good at, and which dedicated platforms exist — start with our [AI D&D guide](/blog/ai-dnd). This post assumes you've decided to play and just want the actual steps.

> **A quick note before we start.** *Dungeons & Dragons* and *D&D* are registered trademarks of Wizards of the Coast LLC. Arcanum is an independent site with no affiliation with, endorsement from, or sponsorship by Wizards of the Coast or Hasbro. We use the terms here only to describe rules compatibility. Full disclaimer at the end.

## Step 1: Pick Your Route

There are two honest paths, and the right one depends on how much setup you want to do tonight.

**Route A — a dedicated AI D&D platform.** [AI Realm](/clients/ai-realm) is built specifically for solo 5e-style play: a real character-creation wizard, a point-buy ability system, and combat resolved in code so the AI can't quietly fudge a roll. Create an account, answer a few setup questions, and you're playing. **[Full review](/blog/ai-realm-review)** (rated 3.5/5).

**Route B — run it yourself on a model you already have.** If you have ChatGPT, Claude, or Gemini, you don't need another subscription. The missing piece is a proper Dungeon Master system prompt — not a copy-pasted one-liner from a forum, which reliably degrades by the second session. The free [AI RPG Prompt Builder](/tools/prompt-builder) generates a structured prompt (persona, ruleset, agency rules, memory protocol) in under a minute. On ChatGPT specifically, the [free ChatGPT D&D prompt generator](/blog/chatgpt-dnd-prompts) layers a 5e-style SRD ruleset on top of the same builder with a full worked example.

The rest of this guide covers Route B in detail, since it's the one with actual steps to walk through — Route A's whole point is that the platform handles this for you.

## Step 2: Run Session Zero

Session Zero is the setup conversation before the story starts, and skipping it is the single most common reason a solo AI campaign goes sideways in the first ten minutes. At a real table, a human DM reads the room; an AI has no table to read, so you have to state your expectations directly.

Cover these before your first real turn:

- **Character concept.** Who are you? Even a sentence — "a disgraced paladin looking for a way back into her order's good graces" — gives the AI something to build scenes around.
- **Tone.** Grim and consequence-heavy, or lighter and forgiving? Say so explicitly; the model will otherwise guess, and often guesses generic high-fantasy.
- **Rules handling.** Ask it to roll dice itself (or narrate a roll and ask you to confirm the number if you're rolling physical dice) and to enforce checks rather than narrate around them.
- **Content boundaries.** State anything you want dialed up or down — combat gore, romance, horror — up front rather than discovering the model's defaults mid-scene.
- **How much rules knowledge you have.** If you don't know 5e, say so and ask for a narrative-first version that resolves actions by outcome rather than strict rules math.

A good opening prompt states all of this in one message before you take your first in-character action. It costs two minutes and saves the session.

## Step 3: Create Your Character

If you're using a generated system prompt from the Prompt Builder, the AI will typically walk you through this: ability scores, class, background, starting gear. Two things matter more than people expect:

- **Give the model constraints, not just flavor.** "A cynical rogue" is a personality note. "A cynical rogue who took this job to pay off a debt to someone dangerous" is a plot hook the AI can actually use later.
- **State your starting scene, even loosely.** "I'm arriving in a port town looking for work" gives the model an anchor. A blank "begin the adventure" prompt tends to produce the most generic possible opening.

## Step 4: Run Your First Scene

Type what your character does, in second person or first person, consistently. Some practical habits that make a real difference in output quality:

- **Wrap actions and dialogue distinctly** — most models pick up on `*I draw my sword*` versus plain dialogue as a signal for what's action versus speech, which keeps scenes cleaner.
- **Act, don't direct.** "I try to persuade the guard to let us through" plays better than "make the guard let us through" — the second removes the stakes the model needs to generate a real check.
- **Let a failed roll matter.** If you told the AI to enforce checks in Session Zero, a failed persuasion check should have a real consequence, not a soft do-over. This is what actually makes it feel like a game instead of a very polite conversation.

## Step 5: Handle Combat Without It Turning Into a Slog

Combat is where self-run AI D&D shows its rough edges fastest, because the model is doing narration *and* rules adjudication at once. A few things that keep it from bogging down:

- Ask upfront for initiative order to be tracked explicitly and restated each round.
- Have the AI state enemy HP thresholds narratively (bloodied, staggering, near death) rather than exact numbers, which reads more naturally and is easier for the model to track consistently.
- If a fight feels like it's dragging or the model is losing track of positioning, it's fine to say so directly — "let's resolve this faster, describe the next two rounds and get to the outcome." You're allowed to direct pacing; a human DM would do the same.

If tactical precision — a real grid, line-of-sight, exact positioning — matters more to you than narrative combat, that's the point where a dedicated platform like [Friends & Fables](/clients/friends-and-fables) genuinely does something a self-run chat can't.

## Step 6: Keep the Campaign From Falling Apart

This is the step every quick-start guide skips, and it's the one that actually determines whether you're still playing in week four. Every model has a finite context window, and a long campaign accumulates more lore, NPCs, and state than that window holds. Left unmanaged, this shows up as an NPC forgetting a grudge, a resolved plot thread quietly reopening, or a rule enforced correctly in session one getting fumbled by session six. We cover exactly why this happens in [why AI campaigns fall apart at turn 50](/blog/why-llms-forget) — it's architecture, not a bug you can nag the model out of.

What actually works:

- **Recap deliberately, every few sessions.** A short "here's what's happened so far" message, written by you, re-anchors the model far more reliably than hoping it remembers.
- **Keep a notes file outside the chat.** Track key NPCs, open threads, and inventory yourself. It's manual, but it's the most reliable memory system that exists right now.
- **Use a tool built for this.** The free [Campaign Memory Tool](/tools/campaign-memory) tracks your world state as you play and generates a clean compression prompt to hand the AI when things start slipping — effectively doing the recap step for you.
- **Scope your ambitions to the format.** A tight 6-10 session arc holds together far better than an open-ended "forever campaign." If you want a genuinely long-form game with less manual upkeep, a platform with built-in state tracking — [AI Realm](/clients/ai-realm) or [Friends & Fables](/clients/friends-and-fables) — is doing this work for you at the architecture level.

## Which Model Should You Run This On?

All three frontier models can do this; they lean differently. Claude tends to hold complex rule sets most consistently across a long session, Gemini's larger context window suits longer single sittings, and ChatGPT has by far the deepest library of prebuilt games if you'd rather start from something built than build your own. Each has a dedicated guide: [Claude RPG guide](/blog/claude-rpg-guide), [ChatGPT RPG guide](/blog/chatgpt-rpg-guide), [Gemini RPG guide](/blog/gemini-rpg-guide).

If you'd rather skip building your own system entirely, the [Arcanum Originals](/arcanum-games) are complete, pre-engineered RPG systems you load into any of the three — no prompt-writing required.

## Frequently Asked Questions

**How do I start playing D&D solo with AI tonight?**
Pick a route: a dedicated platform like AI Realm needs no setup beyond an account. Running it yourself on ChatGPT, Claude, or Gemini needs one thing first — a structured Dungeon Master system prompt, not an improvised one-liner. The free AI RPG Prompt Builder generates that prompt in under a minute; paste it into a fresh chat (or a Custom GPT/Project) and you can be rolling a character within five minutes.

**Can ChatGPT actually run a full D&D session by itself?**
Yes, for the format most solo players actually want — a one-shot or short arc. It will describe the world, voice NPCs, and adjudicate a 5e-style ruleset if the system prompt tells it to enforce checks and track state rather than narrate freely. It won't reliably run dozens of continuous sessions without help managing memory — that's a model limitation, not a ChatGPT-specific one.

**What's Session Zero when I'm playing alone?**
The setup exchange before the story starts: telling the AI your character concept, the world's tone, and the ground rules (does it roll dice itself, can you retcon a bad turn, how graphic should combat get). Skipping this is the single most common reason a solo AI campaign goes off the rails in the first ten minutes — the AI has no table to read your expectations from, so you have to state them.

**How do I stop my AI Dungeon Master from forgetting things?**
You can't stop it entirely — every model has a finite context window, and a long campaign eventually holds more state than that window fits. What you can do is manage it deliberately: recap key facts every few sessions, keep a running notes file outside the chat, or use a tool like the Campaign Memory Tool, which tracks your world state and generates a clean compression prompt to re-anchor the AI when it starts drifting.

**Do I need a dedicated app, or can I just use ChatGPT?**
Either works, and they trade off differently. A dedicated platform (AI Realm, Taverna, Friends & Fables) resolves dice and combat in code, so the AI can't fudge outcomes, at the cost of a new account and often a subscription. Running it yourself on a model you already pay for is free and flexible, but the AI is doing the rules-adjudication as well as the narration, so it's more prone to drift on the mechanical side.

**What if I don't know 5e rules at all?**
Tell the AI that in Session Zero and ask it to run a lighter, narrative-first version — most models handle this well, resolving actions by outcome rather than strict rules math. If you want the real ruleset without reading a rulebook, a platform with a built-in character-creation wizard, like AI Realm, walks you through it step by step.

---

*Disclaimer: Dungeons & Dragons, D&D, and related marks are trademarks of Wizards of the Coast LLC, a subsidiary of Hasbro, Inc. Arcanum is an independent publication and is not affiliated with, endorsed by, sponsored by, or otherwise associated with Wizards of the Coast or Hasbro. References to "D&D" and "5e" describe rules compatibility and are used nominatively. "5e-style" play here refers to the rules framework published in the open System Reference Document under a Creative Commons license. The platforms mentioned are independent third parties, and their licensing and compliance are their own responsibility.*
