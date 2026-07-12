---
title: "The AI Roleplay Glossary: Context Window, Character Card, Lorebook, Tokens & More Explained"
description: "Every AI roleplay term explained in plain language — context window, tokens, temperature, prompt, character card, lorebook, world state, and compression — with a link to the deeper guide or free tool for each."
section: "lists"
pubDate: 2026-07-12
tags: ["AI roleplay glossary", "context window", "character card", "lorebook", "tokens", "temperature", "AI roleplay terms", "AI RPG terms", "prompt engineering"]
faq:
  - q: "What is a context window in AI roleplay?"
    a: "The context window is the total amount of conversation a model can see at once, measured in tokens. Once your roleplay grows past it, the oldest messages fall out of view entirely and the model can no longer see them — this is the root cause of an AI RPG forgetting earlier events."
  - q: "What is a character card?"
    a: "A character card is a structured text profile — name, personality, scenario, opening message, and example dialogue — that defines an AI persona so it behaves consistently every time it's loaded. It's the portable format most character-chat platforms, including Janitor AI and SillyTavern, are built around."
  - q: "What is a lorebook?"
    a: "A lorebook, also called World Info, is a dynamic reference system used by front ends like SillyTavern that inserts relevant background details into the AI's context only when a trigger keyword appears in the conversation, instead of keeping the entire world bible loaded at all times."
  - q: "What does temperature mean in AI settings?"
    a: "Temperature controls how predictable or varied a model's word choices are. Low temperature produces safe, repetitive output; higher temperature produces more varied, creative output, at the cost of occasional incoherence if pushed too far."
  - q: "What are tokens in AI roleplay?"
    a: "Tokens are the small chunks of text — often close to a word, sometimes a word fragment — that a model actually reads and generates. A model's context window is measured in tokens, not messages or words, which is why a handful of long, detailed replies can fill it faster than expected."
  - q: "What is prompt compression for AI roleplay?"
    a: "Compression is the practice of condensing a long roleplay history into a short, dense summary of only the facts that still matter, so it can be pasted back in as a fresh context anchor once the original conversation grows too long for the model to see in full."
itemList:
  - name: "Tokens"
    description: "The unit of text a model actually reads and generates — roughly a word or word-fragment."
  - name: "Context Window"
    url: "/blog/why-llms-forget"
    description: "The total tokens a model can see at once; older content falls out of view once a campaign grows past it."
  - name: "Temperature"
    url: "/blog/ai-roleplay-repetition-loop"
    description: "A generation setting controlling how predictable or varied a model's word choices are."
  - name: "Prompt"
    url: "/tools/prompt-builder"
    description: "The instructions — persona, world, tone, rules — that define how an AI runs a roleplay session."
  - name: "Character Card"
    url: "/tools/character-card-generator"
    description: "A structured profile that defines an AI persona so it plays consistently every time it's loaded."
  - name: "Lorebook"
    url: "/blog/sillytavern-guide"
    description: "A dynamic reference system that injects relevant world details only when a trigger keyword appears."
  - name: "World State"
    url: "/tools/campaign-memory"
    description: "The full set of facts — characters, inventory, relationships — that make a campaign coherent."
  - name: "Compression"
    url: "/blog/how-to-summarize-ai-roleplay-campaign"
    description: "Condensing a long campaign into a dense summary that restores context in a new session."
---

AI roleplay has its own working vocabulary, and most guides use these terms without ever stopping to define them. This page is the reference: every term explained in one place, in plain language, with a link to the deeper guide or free tool if you want to go further on any one of them.

## Tokens

A **token** is the actual unit of text a language model reads and generates — roughly a word, sometimes a smaller word-fragment, sometimes a whole short word. Models don't count in characters or messages; every limit that matters — how much a model can see at once, how a platform prices API usage — is measured in tokens. This matters practically because a handful of long, richly detailed replies can burn through a token budget far faster than the message count alone suggests.

## Context Window

The **context window** is the total number of tokens a model can hold in view at one time — your entire conversation, prompt instructions, and any injected reference material, all competing for the same finite space. As a roleplay grows past that limit, the oldest content doesn't get summarized or archived automatically — it simply falls out of the model's view, as if it had never been said. This is the single most important concept for understanding why long AI campaigns break down; [why LLMs forget](/blog/why-llms-forget) covers the full mechanics and the fixes.

## Temperature

**Temperature** is a generation setting that controls how willing a model is to choose a less-obvious next word. Near zero, a model consistently picks its safest, most predictable continuation — which is exactly what repetitive, samey output looks like. Pushed higher, output gets more varied and creative, though too high can turn incoherent. Hosted chat platforms (ChatGPT, Claude, Gemini) don't expose this directly, but self-hosted front ends like SillyTavern do — see [why AI roleplay keeps repeating itself](/blog/ai-roleplay-repetition-loop) for how temperature interacts with that specific problem.

## Prompt

A **prompt** is the instruction that defines what an AI should do — in roleplay, usually a **system prompt**: the persona, world, tone, and rules set once at the start of a session rather than typed fresh every message. A vague one-line prompt leaves the model guessing at the frame; a structured prompt with a defined game-master persona, genre, agency rules, and memory approach holds up over an entire campaign instead of degrading after a few exchanges. The free [AI RPG Prompt Builder](/tools/prompt-builder) assembles a structured one for ChatGPT, Claude, Gemini, or Grok in under a minute — see [the anatomy of a good RPG prompt](/blog/rpg-prompts) for what the six parts actually do.

## Character Card

A **character card** is a structured profile — name, personality, scenario, opening message, and example dialogue — that defines an AI persona so it plays consistently every time it's loaded, rather than drifting session to session. It's the open format most character-chat platforms converge on, portable between Janitor AI, SillyTavern, and others. [How to write a character card](/blog/how-to-write-a-character-card) covers the craft field by field, or the free [AI Character Card Generator](/tools/character-card-generator) rolls a complete, paste-ready one instantly.

## Lorebook

A **lorebook** — also called **World Info** — is a reference system, most associated with SillyTavern, that holds background facts about your world and only injects the relevant entries into the model's context when a matching keyword appears in the conversation. Rather than keeping an entire world bible loaded at all times (eating into your context window for details that may never come up), it surfaces exactly what's relevant, exactly when it's relevant. The [SillyTavern guide](/blog/sillytavern-guide) covers where this fits into the platform's broader setup.

## World State

**World state** is the full set of facts that make a campaign coherent at any given moment — who's alive, what they want, what's in your inventory, what's happened that still matters. A model doesn't track this as a separate structure by default; it's implicitly scattered across the raw conversation, which is exactly why it degrades as older messages fall out of the context window. Tracking world state explicitly, outside the running chat, is the fix — see the [Campaign Memory Tool](/tools/campaign-memory) for a structured way to do it.

## Compression

**Compression** is the technique of condensing everything in your world state into a short, dense summary — under 500 words is typical — that captures only what still matters and discards what's resolved or irrelevant. Pasted back in at the start of a new session, it restores full context in a fraction of the space the original raw conversation would have taken. [How to summarize a long AI roleplay campaign](/blog/how-to-summarize-ai-roleplay-campaign) walks through doing this by hand or with the Campaign Memory Tool's built-in generator.

## Frequently Asked Questions

**What is a context window in AI roleplay?**
The context window is the total amount of conversation a model can see at once, measured in tokens. Once your roleplay grows past it, the oldest messages fall out of view entirely and the model can no longer see them — this is the root cause of an AI RPG forgetting earlier events.

**What is a character card?**
A character card is a structured text profile — name, personality, scenario, opening message, and example dialogue — that defines an AI persona so it behaves consistently every time it's loaded. It's the portable format most character-chat platforms, including Janitor AI and SillyTavern, are built around.

**What is a lorebook?**
A lorebook, also called World Info, is a dynamic reference system used by front ends like SillyTavern that inserts relevant background details into the AI's context only when a trigger keyword appears in the conversation, instead of keeping the entire world bible loaded at all times.

**What does temperature mean in AI settings?**
Temperature controls how predictable or varied a model's word choices are. Low temperature produces safe, repetitive output; higher temperature produces more varied, creative output, at the cost of occasional incoherence if pushed too far.

**What are tokens in AI roleplay?**
Tokens are the small chunks of text — often close to a word, sometimes a word fragment — that a model actually reads and generates. A model's context window is measured in tokens, not messages or words, which is why a handful of long, detailed replies can fill it faster than expected.

**What is prompt compression for AI roleplay?**
Compression is the practice of condensing a long roleplay history into a short, dense summary of only the facts that still matter, so it can be pasted back in as a fresh context anchor once the original conversation grows too long for the model to see in full.
