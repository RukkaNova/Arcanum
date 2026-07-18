---
title: "Claude Skills for Tabletop RPG: Package Your Ruleset as a Reusable Game Engine"
description: "Claude Skills let you package RPG rules, dice conventions, and GM behaviour into a reusable module Claude loads on demand. How Skills work, how they differ from Projects, and how to build one for your table."
section: "guides"
pubDate: 2026-07-18
tags: ["Claude Skills RPG", "Claude Skills tabletop RPG", "Claude RPG", "Claude tabletop", "Claude TRPG", "AI game master", "Claude Projects RPG", "LLM RPG"]
faq:
  - q: "What are Claude Skills?"
    a: "A Claude Skill is a packaged set of instructions — a folder containing a SKILL.md file with a name, a description, and detailed guidance — that Claude loads only when a task calls for it. Skills can also bundle reference files alongside the instructions. They work in the Claude apps on paid plans, in Claude Code, and through the API."
  - q: "Can I use Claude Skills for tabletop RPG?"
    a: "Yes, and it's one of the most natural fits for the feature. A ruleset is exactly what a skill is designed to hold: dice conventions, combat procedures, character sheet formats, and GM behaviour rules, packaged once and loaded automatically whenever you start playing. Instead of re-pasting your rules into every chat, the skill makes them a standing capability."
  - q: "Should I use a Skill or a Project for my Claude RPG campaign?"
    a: "Use both for different jobs. A Project is the campaign container — it holds persistent custom instructions and knowledge files for one specific world and keeps your sessions in one place. A Skill is the portable rules module — it travels across every chat and project, loading only when relevant. Rules that stay the same across campaigns belong in a skill; the world, characters, and campaign history belong in the Project."
  - q: "Do I need a paid Claude plan to use Skills?"
    a: "Custom skills in the Claude apps require a paid plan, same as Projects. Skills also work in Claude Code and via the API for technically-inclined players. If you're on the free tier, you can still paste a ruleset manually at the start of a session — a skill just automates and standardises that step."
  - q: "Can a Claude Skill roll real dice?"
    a: "Skills can bundle executable scripts, and in environments where Claude can run code, that means genuinely random rolls instead of the model narrating a plausible-sounding number. Even without code execution, a skill that defines an explicit dice procedure makes rolls dramatically more consistent than an unprompted model deciding outcomes by vibes."
---

**Claude Skills let you package your tabletop ruleset — dice conventions, combat procedures, GM behaviour — into a module that Claude loads automatically whenever it's time to play.** Search "Claude Skills" today and you'll find documentation about spreadsheet generation and coding workflows. Almost nobody is talking about the use case Skills might fit best: tabletop RPG.

That's the same gap we found when we wrote [the player's guide to Claude RPG](/blog/claude-rpg-guide) — the tooling conversation happens among developers while the play conversation lags a year behind. So here is the early, practical version: what Skills actually are, how they differ from the Claude Projects setup most Claude RPG players already use, and how to build a skill that turns your house ruleset into something you configure once and never paste again.

## What Claude Skills Are (and What They Aren't)

A skill is, at its core, a folder. Inside it sits a file called `SKILL.md` with two parts: a short frontmatter block containing a **name** and a **description**, and then the instructions themselves — as much detailed guidance as the task needs. A skill can also carry supporting files alongside the instructions: reference tables, format templates, even scripts.

The clever part is *when* the content loads. Claude doesn't read every skill into every conversation. It sees only the name and one-line description of each installed skill, and pulls in the full instructions the moment a task matches. Anthropic calls this progressive disclosure; for our purposes it means something simpler: **your two-thousand-word combat system costs nothing until combat starts.**

That's the key difference from pasting rules into a chat or stuffing them into custom instructions. Pasted rules occupy the model's working memory from turn one, whether or not tonight's session involves them. A skill sits dormant until the description triggers — "load this when the user wants to play or referee a tabletop RPG session" — and then arrives complete.

Skills are not a memory system, and they're not a campaign container. They don't remember what happened last session and they don't hold your world. They hold *procedure* — the stable, reusable "how this game works" layer. That distinction matters, and it's the next section.

## Skills vs Projects: Two Layers of the Same Game

Most serious Claude RPG players already use [Claude Projects](/blog/claude-rpg-guide) as the game container: custom instructions hold the master prompt, knowledge files hold the world bible, and every chat inside the Project starts with the game already running. Skills don't replace that. They sit underneath it.

| | Claude Project | Claude Skill |
|---|---|---|
| **Holds** | One campaign: world, tone, characters, knowledge files | One capability: rules, procedures, formats |
| **Scope** | Chats inside that Project only | Every chat, every Project |
| **Loading** | Instructions always active | Loads on demand when relevant |
| **Best for** | The world and the story | The system and the mechanics |
| **Analogy** | The campaign binder | The rulebook |

The tabletop analogy is almost exact. A Project is your campaign binder — the map, the NPC notes, the session history for *this* game. A Skill is the rulebook on the shelf — the same combat chapter serves your grim fantasy campaign, your space-trading run, and the one-shot you improvise on a Tuesday.

The practical payoff: if you run multiple campaigns, or if you like starting fresh one-shots without ceremony, the rules stop being something you copy between containers. Build the dice-and-combat skill once, and every new Project — or even a bare chat with no Project at all — can invoke it. Your master prompt shrinks to what's actually unique about the world.

## Three Ways to Use Skills at the Table

**1. The solo-play game engine.** Package your system — resolution mechanics, status-sheet format, GM behaviour rules like "never speak or act for the player" — as a skill. Any conversation becomes a playable session the moment you say "let's play." This is the same engineering philosophy behind the [Arcanum Originals](/arcanum-games): the intelligence lives in a carefully built instruction set, not in the model winging it. A skill is simply a new, more portable delivery mechanism for that instruction set.

**2. The GM's toolkit.** You don't have to put the whole game in one skill. Smaller, sharper skills work well: an NPC generator that follows your naming conventions and stat format, an encounter builder balanced to your party, a session-recap formatter that produces the same structured summary after every session. Because each skill declares when it applies, they coexist without stepping on each other.

**3. The rules lawyer for a real table.** Skills aren't only for AI-as-GM play. If you run a physical table, a skill loaded with your system's procedures *and your house rules* turns Claude into a rules consultant that answers the way your table actually plays — not the way the base rulebook reads. Mid-session disputes get settled in seconds, by your own documented rulings.

## How to Build a Tabletop RPG Skill

The format is deliberately simple. Here's the skeleton of a solo-play engine skill:

```markdown
---
name: grimdark-gm
description: Run tabletop RPG sessions as a game master using the
  table's dice, combat, and player-agency rules. Load whenever the
  user wants to play, resume, or referee an RPG session.
---

# Grimdark GM

## Dice
- All checks: d20 + modifier vs difficulty (easy 8 / normal 12 / hard 16).
- State every roll explicitly: "[Roll: 14 + 2 = 16 vs 12 — success]".
- Never skip a roll for dramatic convenience. Failure is content.

## Combat
- Initiative once per encounter. Track HP numerically for every
  combatant, shown at the end of each combat turn.
- Enemies act on their own goals, not to feed the player victories.

## Player agency
- Never narrate the player character's words, thoughts, or decisions.
- End every GM turn with the situation, then "What do you do?"

## Status sheet
- Every 5 turns, output the sheet: HP, conditions, inventory,
  active quests — same format each time.
```

Three things do most of the work here:

**The description is the trigger — write it like one.** Claude decides whether to load your skill from the description alone. "Rules for my game" is too vague to fire reliably; "Load whenever the user wants to play, resume, or referee an RPG session" fires every time. Say *when*, not just *what*.

**Be specific to the point of pedantry.** The same rule applies to skills as to master prompts: vague instructions produce vague play. "Combat should feel dangerous" gives the model nothing; "track HP numerically and display it every combat turn" gives it a procedure it can actually follow. Everything we've learned building [engineered system prompts](/blog/claude-rpg-prompts) transfers directly.

**Bundle reference files for the heavy tables.** Loot tables, bestiaries, and spell lists can live as separate files inside the skill folder, referenced from the instructions. Claude consults them when needed rather than carrying them in every turn — the same consulted-canon behaviour that makes Project knowledge files work.

Where does it go? In the Claude apps, custom skills are added through the capabilities settings on paid plans. In Claude Code, a skill is literally a folder in your skills directory. Via the API, skills attach to requests for developers building on top. For most players the app path is the relevant one — and if you're on the free tier, the skeleton above still works fine pasted at the top of a session; the skill just saves you the paste.

## The Combined Setup: Skill + Project

The strongest configuration we can currently sketch for a long Claude campaign uses both layers:

1. **The skill holds the system** — dice, combat, agency protocol, status-sheet format. Stable across every campaign you'll ever run.
2. **The Project holds the campaign** — the world bible as knowledge files, the tone and cast in custom instructions, and every session in one place.
3. **Play happens in chats inside the Project**, with the skill loading automatically when the session starts.

This division of labour also helps with the oldest problem in AI campaigns: degradation over long sessions. A model juggling one enormous undifferentiated prompt starts dropping rules by midgame — it's a large part of [why AI campaigns fall apart around turn 50](/blog/why-llms-forget). Splitting procedure (skill) from world (Project knowledge) keeps each layer smaller, better organised, and easier for the model to consult accurately.

## Honest Limitations

Skills are new enough that the tabletop use case is still mostly unexplored territory, so temper expectations on three points.

First, **triggering isn't guaranteed.** Claude decides when a skill is relevant, and a poorly-described skill may simply not fire. Naming the skill in your first message ("use the grimdark-gm skill — new session") is a reliable workaround while you tune the description.

Second, **skills don't add memory.** Your campaign history still lives in the conversation and the Project. A skill will make session fifty *run by the same rules* as session one; it won't make Claude remember session one. For that you still need the Project layer and good [campaign memory practices](/tools/campaign-memory).

Third, **this is a moving feature.** Skills started life in Anthropic's developer tooling and are still visibly evolving. Details of where they're managed and what they can bundle may shift; the underlying format — a folder, a SKILL.md, a trigger description — has been stable, and anything you build in that shape should carry forward.

## Frequently Asked Questions

**What are Claude Skills?**
A Claude Skill is a packaged set of instructions — a folder containing a SKILL.md file with a name, a description, and detailed guidance — that Claude loads only when a task calls for it. Skills can also bundle reference files alongside the instructions. They work in the Claude apps on paid plans, in Claude Code, and through the API.

**Can I use Claude Skills for tabletop RPG?**
Yes, and it's one of the most natural fits for the feature. A ruleset is exactly what a skill is designed to hold: dice conventions, combat procedures, character sheet formats, and GM behaviour rules, packaged once and loaded automatically whenever you start playing. Instead of re-pasting your rules into every chat, the skill makes them a standing capability.

**Should I use a Skill or a Project for my Claude RPG campaign?**
Use both for different jobs. A Project is the campaign container — it holds persistent custom instructions and knowledge files for one specific world and keeps your sessions in one place. A Skill is the portable rules module — it travels across every chat and project, loading only when relevant. Rules that stay the same across campaigns belong in a skill; the world, characters, and campaign history belong in the Project. [The Claude RPG guide](/blog/claude-rpg-guide) covers the Project side in full.

**Do I need a paid Claude plan to use Skills?**
Custom skills in the Claude apps require a paid plan, same as Projects. Skills also work in Claude Code and via the API for technically-inclined players. If you're on the free tier, you can still paste a ruleset manually at the start of a session — a skill just automates and standardises that step.

**Can a Claude Skill roll real dice?**
Skills can bundle executable scripts, and in environments where Claude can run code, that means genuinely random rolls instead of the model narrating a plausible-sounding number. Even without code execution, a skill that defines an explicit dice procedure makes rolls dramatically more consistent than an unprompted model deciding outcomes by vibes.

---

Skills are the newest layer in the Claude RPG stack, and right now almost nobody at the tabletop end is using them. That's an advantage. Build the rules module once, keep your campaigns in [Projects](/blog/claude-rpg-guide), and if you want a finished, engineered game to see what disciplined instructions can do — [the Arcanum Originals are free](/arcanum-games) and built for exactly this kind of play.
