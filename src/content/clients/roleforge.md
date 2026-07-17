---
title: "RoleForge"
tagline: "An AI RPG built to fix hallucination by design — a SQL database runs the world, the LLM just narrates what happened."
pricing: "free"
siteUrl: "https://roleforge.ai"
reviewSlug: "roleforge-preview"
bestFor: "Long-term solo campaigns that want strict rule adherence, earned victories, and structural persistence — once it's out of alpha."
models: "SQL engine + LLM narrator"
memoryApproach: "SQL database, persistent"
cover: "/img/roleforge.webp"
featured: true
updated: 2026-07-17
---

*Status (July 2026): RoleForge is in closed alpha and not yet available to the public. We have not played it. Per our policy of not scoring pre-release software, there is no rating here — what follows is drawn from RoleForge's own public architecture description and materials, not hands-on testing. Treat it as an informed preview of what the design is aimed at, not a verdict.*

Where other platforms rely entirely on the AI to manage world state, RoleForge's published architecture separates the narrative engine from the game mechanics, prioritizing mathematical consistency over generative interpretation. On paper, it's one of the more architecturally deliberate approaches to AI RPGs on the market — a design that, if it works as described, would count as genuinely solving the memory problem rather than papering over it.

## How It's Built

RoleForge is built on a deterministic rules engine. Per its own documentation, an SQL database tracks character progression, faction reputation, NPC relationships, inventory, and world state structurally. When a player attempts an action, the engine calculates the math — ability scores, cover bonuses, darkvision, distance — and rolls the virtual dice.

The AI's stated role is that of a "rendering engine": it narrates the outcome the code determined, without the ability to alter the numerical result. RoleForge lists support for 5e and Basic Fantasy rulesets, represented via hand-drawn genre maps with a real-time, three-state fog of war.

## What the Architecture Is Designed to Fix

If the database-first design holds up as described, its main advantage would be eliminating mechanical hallucination: because the AI can't override the database, NPCs shouldn't forget the player, and combat math should stay consistent every time. That would put RoleForge in a different category from platforms like [Friends & Fables](/clients/friends-and-fables) or [AI Dungeon](/clients/ai-dungeon), where world state lives in the model's context rather than a persistent store — the promise, at least on paper, is that a player who logs off for six months would come back to a world in exactly the state they left it.

RoleForge publicly lists 29 live features, including a "Portrait Forge" for character art and support for eight distinct narrative tones — from the epic "Grand Chronicle" to the grim "Iron and Ash." It also advertises content-safety controls, letting the game be locked to a G-rated "Family" setting or opened up to "Mature" horror themes.

## Who It's Aimed At (and Where the Gaps Likely Are)

Based on what's publicly described, RoleForge looks aimed squarely at long-term, highly consequential solo campaigns where players want strict rule adherence, earned victories, and structural persistence. If the architecture performs as advertised, that's a real gap in the market it would fill.

It's not positioned for immediate, chaotic multiplayer action. The alpha has no co-op multiplayer — it's on the roadmap but not shipped — and currently restricts play to a solo experience supplemented by AI-controlled party members.

## Open Questions

The most obvious current limitation is access: the alpha is gated behind a waitlist questionnaire about playstyle, so most players can't try it yet. Beyond that, the deterministic design implies players can't simply talk their way out of a bad dice roll with narrative creativity — the system is built to hold the line absolutely. Some players will likely find that freeing; others will find it frustrating. Whether the database backbone holds up as cleanly in practice as it does on paper is exactly the thing that can't be confirmed until it's testable — we'll revisit with a full, rated review once RoleForge reaches public release.
