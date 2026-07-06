---
title: "Exclusive: The Developers Behind Craft on Leaving D&D 5e, Starting Over From Friends & Fables, and Betting Everything on Worldbuilders"
description: "An exclusive interview with the team building Craft, the closed-beta successor to Friends & Fables — on going system-agnostic, why they rebuilt instead of patched, and their answer to the AI RPG memory problem."
section: "news"
pubDate: 2026-07-06
tags: ["Craft interview", "Craft AI RPG", "Friends and Fables developers", "Craft beta", "AI game master", "system agnostic RPG", "AI RPG memory problem", "worldbuilders"]
---

*Access disclosure: the developers provided closed-beta access and a subscription for our [first look](/blog/craft-first-look) at Craft. That same relationship is what made this interview possible. No conditions were attached to either — this coverage is independent and unpaid.*

We've spent time inside Craft's closed beta, [reported on the rough patches and the fast fixes](/blog/craft-first-look), and come away convinced it's one of the more ambitious builds in the AI RPG space right now. What we hadn't done yet was ask the team building it *why* — why they walked away from a working product to start over, and why every major decision in Craft points at the same word: worldbuilders. We put those questions directly to the developers behind Craft and [Friends & Fables](/clients/friends-and-fables). Here's what they told us.

## From D&D 5e to System-Agnostic

Friends & Fables was built on Dungeons & Dragons 5th Edition — a real ruleset, played straight, with Franz handling the orchestration underneath. Craft drops that constraint entirely; it's designed to run whatever system a worldbuilder wants to build in, not just D&D.

We asked what the 5e years taught them that made system-agnosticism feel necessary rather than optional. The answer wasn't an internal epiphany — it was the players. According to the team, it was suggestions and direct player feedback that pushed them toward this shift: worldbuilders on Friends & Fables kept asking for the platform to do things 5e wasn't built to do, and they weren't all asking for the same thing. Some wanted Pathfinder's crunch. Others wanted Call of Cthulhu's sanity mechanics, or systems that don't exist in tabletop at all. Once enough of your creator base is asking you to be a different game, the honest answer isn't picking a second system — it's stopping being locked to any one system.

That's a meaningful signal on its own: a platform's biggest architectural pivot traced back to what its community was actually asking for, not a top-down redesign decision.

## Why Rebuild Instead of Renovate

The obvious question for any studio with a live product is why you'd start a second one from scratch instead of evolving the first. We asked directly what Craft could do that Friends & Fables fundamentally couldn't.

The team's answer was blunt: Friends & Fables was built by older, less capable models, and the result was a platform that was too limited and very hard to modernize. Rather than fight that foundation, they started fresh with Craft. That tracks with what we already knew about the industry side of this — the gap between what a frontier model can do today versus what was available when F&F's architecture was first designed is enormous, and orchestration systems built around older models tend to calcify around their limitations. Rebuilding gave them a clean foundation instead of a renovation project with a ceiling baked into the walls.

It also explains something we noted in our [Friends & Fables review](/blog/friends-and-fables-review): the studio's parallel work on Craft has created some community uncertainty about long-term support for the current product. That tension is real, but it's the predictable cost of a team that decided a ground-up rebuild was worth more than patching something structurally capped.

## The Memory Problem: Passing the Responsibility Down

Every AI RPG eventually hits the same wall — campaigns degrading as context fills, the game master forgetting things it shouldn't. We asked how Craft approaches this, and what they'd tried that didn't work.

The answer is the most distinctive thing we heard in this interview. Craft doesn't ship a single, prescribed memory system. Instead, the team gave worldbuilders the ability to write their own memory structures in markdown, with the platform's systems built to support whatever a creator designs rather than enforce one universal approach. The reasoning: they believe worldbuilders, working across hundreds of different worlds and use cases, will land on more creative solutions collectively than any one internal team could design in isolation.

It's a genuine bet, and the team was candid that it isn't finished — when we asked what's still the hardest design problem in the beta right now, the answer was immediate: context management. That matches exactly what we observed hands-on during our first 24 hours — a DM with a short memory, and a visible seam between the tactical map state and what the narrator actually remembers. The difference between Craft's approach and the industry norm is that most competitors are trying to solve memory *for* the player. Craft is trying to build the toolkit and let its worldbuilders solve it *for themselves* — a bet on distributed creativity over centralized engineering, and one whose payoff won't be clear until enough worldbuilders have actually shipped worlds on it.

## Franz Is Gone. Here's What Replaces Him

Friends & Fables had a single, consistent face: Franz, the orchestrated AI Game Master that ran every table the same way. We asked how that experience changes in Craft, and what the team thinks makes a good AI GM.

There's no single Franz-equivalent in Craft. Instead, worldbuilders can create and customize their own narrators for the worlds they build — voice, tone, and behavior included. Asked what makes a good AI GM, the team's answer refused to universalize: it depends on the worldbuilder's own vision for their world. There's no house style being imposed from above.

That's a real departure, and it cuts both ways. Franz's consistency was Friends & Fables' signature strength — you knew what you were getting. Craft trades that consistency for range: a worldbuilder running a grim survival campaign and one running a lighthearted heist story can build narrators that don't sound anything alike, because neither is being forced through the same orchestration personality. Whether that's a net win depends entirely on execution quality across thousands of worldbuilder-authored narrators — which is a much harder quality bar to hold than perfecting one.

## Who Craft Is Actually Built For

We asked the team to describe the player who's going to love Craft. The answer was one word: worldbuilders.

Every design choice in this interview reinforces that answer. The system-agnostic ruleset, the markdown-based memory tooling, the customizable narrators — none of it is aimed primarily at the player who wants to drop in and play a pre-built campaign. It's aimed at the creator who wants to build the campaign, and Craft's bet is that a strong enough creator layer produces a stronger player experience downstream than trying to design that experience directly. Players who just want to sit down and play will still find worlds to join — but the product's center of gravity is clearly the person building the world, not the person playing in it.

## What They're Proudest of — And Nobody's Asked

We closed by asking what they're proud of that hasn't come up yet. Not a feature. The community.

The team's framing: creators are the lifeblood of the product, and worldbuilders on the platform have learned to debug their own worlds and come up with their own solutions, without needing to escalate every problem back to the studio. Given everything else in this interview — a memory system deliberately left open-ended for worldbuilders to solve, narrators handed to creators to define — that's not a throwaway answer. A platform built around distributing responsibility to its creators only works if that creator base is actually capable of picking it up. According to the team, it already is.

## What This Means Going Into Launch

Put together, this interview reads as one coherent thesis rather than seven separate answers: every hard problem Craft has — memory, narrator design, even long-term product direction — gets pushed down to the worldbuilder layer rather than solved centrally. That's a real bet, not a marketing line; it shows up in the architecture, in the tooling, and in what the team says they're proudest of.

It's also exactly the bet we flagged as unresolved in our [hands-on first look](/blog/craft-first-look): the map-and-narrator seam we saw in the beta is a symptom of context management still being worked out, and this interview confirms that's the team's own top priority right now, not something we're reading into gameplay from the outside. We'll be watching how that resolves before Craft leaves closed beta — and our full, rated review will follow at launch, alongside our existing [Friends & Fables review](/blog/friends-and-fables-review) for anyone deciding what to play today.
