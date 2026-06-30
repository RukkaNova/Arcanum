---
title: "How to Write a Character Card That Actually Holds Up (2026 Guide)"
description: "A practical, field-by-field guide to writing AI character cards for Janitor AI, SillyTavern, and beyond — what each field does, why specificity beats word count, and the mistakes that flatten a character by hour two."
section: "guides"
pubDate: 2026-06-30
tags: ["character card", "how to write a character card", "AI character card", "character card guide", "Janitor AI character card", "SillyTavern character card", "character card example dialogue", "write AI roleplay character"]
faq:
  - q: "What is a character card?"
    a: "A character card is a structured document that defines an AI roleplay persona — its personality, voice, scenario, opening message, and example dialogue. The model reads the card and plays that character. The same card format works across most modern roleplay tools, including Janitor AI and SillyTavern."
  - q: "What fields does a character card have?"
    a: "The common fields are: name, a description or personality block, a scenario that sets the scene, a first message that opens the chat, and example dialogue that demonstrates the character's voice. Many cards also carry a system prompt, creator notes, tags, and an attached lorebook for deeper world detail."
  - q: "Why does my character lose its personality after a while?"
    a: "Usually one of two reasons: the personality was written in vague, impressionistic terms the model can drift away from, or the conversation has outgrown the context window so the card is being squeezed out. Tight, specific instructions hold identity longer, and managing memory deliberately handles the rest."
  - q: "How long should a character card be?"
    a: "Long enough to be specific, short enough to stay in context. A tight 300 to 600 word personality block of concrete traits, speech patterns, and hard limits beats a 2000 word biography of soft adjectives. Every token you spend competes with the actual conversation for the model's attention."
  - q: "Do character cards work on both Janitor AI and SillyTavern?"
    a: "Largely yes. Both read the widely-used community card format, so a well-made card moves between them. SillyTavern gives you more control over how the card is injected and supports attached lorebooks; Janitor AI offers a browser library with no setup. The craft of writing the card is the same on either."
  - q: "What is the {{char}} and {{user}} syntax in a character card?"
    a: "Those are macros. {{char}} is replaced with the character's name and {{user}} with the player's name when the card is loaded. Writing example dialogue and the first message with these macros keeps a card portable, so it reads correctly no matter what the character or player is named."
---

**A character card is a structured document that tells an AI exactly who to be** — its personality, how it speaks, the scene it's in, and how it opens — so the model can play a consistent persona instead of a generic chatbot. It's the single most important artifact in modern AI roleplay, and it's also where most people quietly sabotage their own sessions.

The frustrating part is that card quality, not model quality, is usually what decides whether a character feels alive or hollow. A strong card can make a budget model hold a believable identity for an hour; a weak card will make even a frontier model drift into mush by turn twenty. This guide walks through what every field actually does, the craft principles that separate cards that hold up from cards that don't, and the specific mistakes that flatten a character — so you can write one that survives a real session.

---

## What a Character Card Actually Is

A character card is a portable bundle of instructions and content that defines a roleplay persona. You load it into a tool — [Janitor AI](/blog/janitor-ai), [SillyTavern](/blog/sillytavern-guide), or any platform that reads the format — and the model treats the card as the ground truth for who it's playing.

The reason the card matters so much comes down to how language models work. The model has no memory of your character beyond what's in front of it. The card *is* the character, re-read on every single turn. Everything the model knows about how this persona thinks, talks, and reacts comes from the words you put on the card — which means vague words produce a vague character, and precise words produce a precise one. There's no hidden personality the model is drawing on; there's only the card.

Almost every serious tool reads the same community card format, so a well-written card is portable: write it once and it works across platforms. That's why learning to write cards well is a better investment than learning any one app.

---

## The Anatomy of a Character Card

Cards vary by tool, but the core fields are consistent. Here's what each one is for:

- **Name.** What the character is called. Throughout the rest of the card you'll often refer to the character as `{{char}}` and to the player as `{{user}}` — these are macros that get swapped in automatically, which keeps the card portable.
- **Description / Personality.** The heart of the card. Who the character is: traits, values, backstory, speech patterns, mannerisms, and — crucially — hard limits on what they will and won't do. This block does the most work and deserves the most care.
- **Scenario.** The situation the roleplay opens in. Where are we, what's the relationship between character and player, what's the immediate context? It frames the scene without scripting it.
- **First message (greeting).** The character's opening turn. This sets tone, voice, and pacing more than any other single field, because it's the example the model imitates most directly.
- **Example dialogue.** Sample exchanges that demonstrate how the character actually talks. This is the most underused high-leverage field on the entire card.
- **System prompt / post-history instructions.** Optional, tool-dependent. Higher-priority instructions about format and behaviour that some platforms inject differently from the description.
- **Creator notes, tags, and an attached lorebook.** Metadata for humans, plus an optional [lorebook](/blog/sillytavern-guide) of world detail that only gets injected when relevant.

The next sections cover how to write the three that decide everything: personality, the first message, and example dialogue.

---

## Writing the Personality: Specific Beats Long

The single most common mistake is writing personality as a list of soft adjectives. "Kind, mysterious, intelligent, caring, a bit shy but opens up over time" tells the model almost nothing it can act on. Every character is some blend of nice adjectives. What makes a character *this* character is the specifics.

Compare:

> *Vague:* Kael is a gruff, guarded mercenary with a hidden heart of gold.

> *Specific:* Kael answers questions with the fewest words possible and changes the subject when anyone asks about his past. He never says "thank you" — he repays kindness with action instead. He trusts competence over warmth, and the fastest way to lose his respect is to lie about something he can verify.

The second one gives the model concrete behaviours to reproduce. Note what it does: it specifies *how he talks* (terse, deflects), *what he values* (competence, honesty), and *how he shows feeling* (action, not words). Those are reproducible. "Heart of gold" is not.

A few principles that hold across every good personality block:

- **Show behaviour, not labels.** "Interrupts when excited" beats "enthusiastic."
- **Define hard limits explicitly.** If there's something the character would never do, say so. Models follow concrete prohibitions far better than they infer them.
- **Specify speech patterns.** Sentence length, vocabulary, verbal tics, what they call the player. Voice is what readers feel first.
- **Keep it tight.** A focused 300–600 words of concrete traits outperforms a 2,000-word biography. Every token on the card competes with the live conversation for the model's attention — and a card that's too long gets squeezed out of context first, which is part of [why long sessions fall apart](/blog/why-llms-forget).

This is exactly the difference our [Janitor AI review](/blog/janitor-ai) flags between cards that hold their identity and cards that shift to match whatever tone the conversation drifts into: the ones with tight, specific instructions hold; the impressionistic ones dissolve.

---

## The First Message: Your Most Powerful Lever

The first message is the character's opening turn, and the model treats it as the master example of how this character writes. Length, formatting, point of view, how much it narrates versus speaks, whether it uses *italics for actions* — the model will mirror all of it for the rest of the session. If your first message is three tight paragraphs in third-person past tense with dialogue and action interleaved, that's what you'll keep getting. If it's a one-line "Hey, what's up?", don't be surprised when the character stays shallow.

Write the first message as the platonic ideal of a turn in this roleplay. Set the scene, establish voice, give the player something concrete to respond to (a question, a situation, a choice), and demonstrate the exact format and density you want back. Use `{{user}}` rather than a hardcoded name so the greeting reads correctly for everyone.

---

## Example Dialogue: The Field Everyone Skips

Example dialogue is sample exchanges showing the character in action, and it's the highest-leverage field most people leave blank. Where the personality block *tells* the model who the character is, example dialogue *shows* it — and models imitate examples far more reliably than they follow descriptions.

Write two or three short exchanges that capture range: one ordinary moment, one emotional or high-stakes moment, maybe one that demonstrates a hard limit being enforced. Use the `{{user}}`/`{{char}}` macros and match the exact format and voice you want. A character described as "terse" but given example dialogue full of long flowery speeches will produce long flowery speeches — the examples win when they conflict with the description, so make them agree.

This is the field that most reliably fixes a character who "doesn't sound right." Before you rewrite the whole personality, add example dialogue.

---

## Common Mistakes That Flatten a Character

- **Adjective soup.** Lists of vague traits with no behaviour attached. Fixed by showing, not labeling.
- **No example dialogue.** Leaving the single most imitated field empty.
- **A throwaway first message.** Wasting the turn the model copies most.
- **Writing the player's lines.** Don't script what `{{user}}` says or feels — it railroads the human and breaks immersion fast.
- **Contradictions across fields.** A personality that says "cold and distant" with a warm, chatty first message. The model splits the difference and you get neither.
- **Card bloat.** A 3,000-word backstory the player will never surface, eating context that the live scene needs. Move deep world detail into a [lorebook](/blog/sillytavern-guide) that's only injected when relevant.

---

## Portability: One Card, Many Tools

Because most platforms read the same community card format, a good card travels. The same file you build for [Janitor AI](/blog/janitor-ai)'s browser library can be loaded into [SillyTavern](/blog/sillytavern-guide) for far more control over how it's injected, parameter tuning, and attached lorebooks. The craft doesn't change between them — a specific personality, a strong first message, and real example dialogue work identically on either.

What *does* change is what each tool does with the card. SillyTavern lets you control prompt order, attach a World Info lorebook, and tune sampling; Janitor AI keeps it simple and browser-based with a built-in community. If you're deciding where to run your card, the [best AI roleplay platforms](/blog/best-ai-roleplay-platforms) guide maps the landscape, and which model you connect matters as much as the card itself — see [best LLM for roleplay](/blog/best-llm-for-roleplay).

---

## Keeping the Character Consistent Over a Long Session

A great card gets you a great *start*. What erodes a character over a long campaign isn't bad writing — it's the model's finite context window. As the conversation grows, the oldest content (often including parts of the card) falls out of the model's view, and the character starts to drift. That's [why LLMs forget](/blog/why-llms-forget), and no card alone can prevent it.

Two habits keep a character coherent over the long haul. First, move durable world and relationship facts into a lorebook rather than the card body, so they're recalled on demand without permanently occupying context. Second, track your canonical state deliberately — the free [Campaign Memory Tool](/tools/campaign-memory) holds your character and world facts and generates a clean compression prompt to re-anchor the model when it starts to drift, and it works alongside any front-end.

---

## Test, Then Tighten

No card is finished when you write it; it's finished when it survives a session. Load it, play ten or fifteen turns, and watch for the failure modes: Does the voice match what you intended? Does it hold under an emotional scene? Does it respect its hard limits when pushed? Wherever it slips, the fix is almost always *more specific* — a concrete behaviour added to the personality, a sharper example exchange, a clearer limit.

If you'd rather start from a structured scaffold than a blank field, the free [AI RPG Prompt Builder](/tools/prompt-builder) generates a system prompt you can adapt into a card or drop straight into SillyTavern. And if what you're really after isn't a single character but a whole designed *game* — persistent world, mechanics, real stakes — a card isn't the right tool; the [Arcanum Originals](/arcanum-games) are complete downloadable RPG systems built for exactly that.

Write specific, show don't tell, never skip example dialogue, and test before you trust it. Do that and your character will hold up long after the ones built from adjective soup have dissolved.

---

## Frequently Asked Questions

**What is a character card?**
A character card is a structured document that defines an AI roleplay persona — its personality, voice, scenario, opening message, and example dialogue. The model reads the card and plays that character. The same card format works across most modern roleplay tools, including [Janitor AI](/blog/janitor-ai) and [SillyTavern](/blog/sillytavern-guide).

**What fields does a character card have?**
The common fields are: name, a description or personality block, a scenario that sets the scene, a first message that opens the chat, and example dialogue that demonstrates the character's voice. Many cards also carry a system prompt, creator notes, tags, and an attached lorebook for deeper world detail.

**Why does my character lose its personality after a while?**
Usually one of two reasons: the personality was written in vague, impressionistic terms the model can drift away from, or the conversation has outgrown the context window so the card is being squeezed out. Tight, specific instructions hold identity longer, and managing memory deliberately handles the rest.

**How long should a character card be?**
Long enough to be specific, short enough to stay in context. A tight 300 to 600 word personality block of concrete traits, speech patterns, and hard limits beats a 2,000 word biography of soft adjectives. Every token you spend competes with the actual conversation for the model's attention.

**Do character cards work on both Janitor AI and SillyTavern?**
Largely yes. Both read the widely-used community card format, so a well-made card moves between them. SillyTavern gives you more control over how the card is injected and supports attached lorebooks; Janitor AI offers a browser library with no setup. The craft of writing the card is the same on either.

**What is the {{char}} and {{user}} syntax in a character card?**
Those are macros. `{{char}}` is replaced with the character's name and `{{user}}` with the player's name when the card is loaded. Writing example dialogue and the first message with these macros keeps a card portable, so it reads correctly no matter what the character or player is named.
