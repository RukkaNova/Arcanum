---
title: "How to Use DeepSeek with Janitor AI (2026): The Cheap, Step-by-Step Setup"
description: "Connect DeepSeek to Janitor AI in minutes. The exact two routes — direct DeepSeek API and OpenRouter — with base URLs, model names, the best settings, costs, and fixes for when it won't connect."
section: "guides"
pubDate: 2026-07-01
tags: ["Janitor AI DeepSeek", "DeepSeek Janitor AI", "how to use DeepSeek on Janitor AI", "Janitor AI DeepSeek proxy", "DeepSeek API Janitor AI", "Janitor AI proxy setup", "cheap Janitor AI model"]
faq:
  - q: "How do I use DeepSeek with Janitor AI?"
    a: "Get a DeepSeek API key (or an OpenRouter key), then in Janitor AI open the API/proxy settings and choose the custom or proxy option. Enter the provider's base URL, paste your key, and set the model name to a DeepSeek model. Save and send a test message. DeepSeek connects through the proxy route rather than a one-click button because it's an OpenAI-compatible API."
  - q: "Is DeepSeek free on Janitor AI?"
    a: "The DeepSeek API itself is paid, but it's extremely cheap — often pennies for a long session, far less than routing Claude or GPT. The main free path is through OpenRouter, which has at times offered free or very low-cost access to a DeepSeek model. Janitor AI's own platform is free; the cost is only the DeepSeek API usage."
  - q: "Which DeepSeek model is best for Janitor AI?"
    a: "For roleplay, the standard chat model (deepseek-chat) is usually the better pick — it writes naturally and responds quickly. The reasoning model (deepseek-reasoner) thinks harder before answering, which can help with complex logic but is slower and sometimes reads less like natural prose. Most Janitor AI users stick with the chat model for roleplay."
  - q: "What is the DeepSeek base URL for Janitor AI?"
    a: "For a direct DeepSeek connection the base URL is typically https://api.deepseek.com, with a model name like deepseek-chat. Through OpenRouter the base URL is https://openrouter.ai/api/v1 with a model name like deepseek/deepseek-chat. Always confirm the current values in your provider's own documentation, since model IDs occasionally change."
  - q: "Why is DeepSeek not working on Janitor AI?"
    a: "The usual causes are a wrong base URL or model name, an invalid or unfunded API key, or the model being briefly overloaded. Double-check the base URL and model ID against your provider's docs, confirm your key is valid and has credit, and retry after a moment if the model is busy. If Janitor's free model works but DeepSeek doesn't, the problem is in your API settings, not the platform."
  - q: "Is DeepSeek good for Janitor AI roleplay?"
    a: "Yes — it's the most popular budget choice for a reason. It writes far better than Janitor's free in-house model, follows character instructions more reliably, and is more permissive with dramatic and mature scenes, all at a tiny fraction of the cost of a frontier model. For the price, it's the sweet spot for Janitor AI roleplay."
---

If Janitor AI's free model left you unimpressed, **DeepSeek is the upgrade most people reach for** — it writes dramatically better, follows characters more faithfully, and costs almost nothing per message. It's the single most popular bring-your-own-model choice on the platform, and this guide is the exact, no-fluff walkthrough for connecting it.

This is the deep version of the DeepSeek step in our [complete Janitor AI setup guide](/blog/how-to-use-janitor-ai) — two connection routes, the base URLs and model names, the best settings, the cost, and what to do when it won't connect. For *why* DeepSeek punches so far above its price for roleplay in general, see our [DeepSeek for roleplay](/blog/deepseek-roleplay) guide.

## Why DeepSeek Is the Go-To Budget Model for Janitor AI

Three reasons it dominates the budget tier:

- **Quality.** It's a genuine step up from Janitor's in-house Janitor LLM — longer, more textured replies that hold character instructions across a real conversation.
- **Price.** It's strikingly cheap per message — typically pennies for a long session, where the same play on Claude or GPT might cost meaningfully more.
- **Permissiveness.** It refuses dramatic, dark, and mature scenes far less often than the frontier models' default behaviour, which matters for storytelling with real stakes. (The wider no-filter picture is in the [uncensored AI roleplay](/blog/uncensored-ai-roleplay) guide.)

In short: most of the quality of a frontier model, at a small fraction of the cost. That's why it's the default recommendation.

## What You'll Need

Just two things:

1. **A Janitor AI account** (free). If you're brand new to the platform, start with the [full setup guide](/blog/how-to-use-janitor-ai) and come back here for the DeepSeek part.
2. **Access to DeepSeek through an API** — either a **direct DeepSeek API key** or an **OpenRouter key**. The two routes are below; pick one.

DeepSeek connects through Janitor AI's **custom/proxy** configuration (not a one-click provider button), because it's an OpenAI-compatible API. "Proxy" sounds technical, but it just means: an endpoint you point Janitor AI at, defined by a base URL, a key, and a model name.

## Option 1: Connect DeepSeek Directly (Cheapest)

The lowest-cost route, straight from the source:

1. **Create a DeepSeek API account** on DeepSeek's official platform and **add a small amount of credit** (a few dollars goes a very long way).
2. **Generate an API key** and copy it somewhere safe. Treat it like a password — and use a key from an official provider rather than a stranger's proxy ([here's why that matters](/blog/is-janitor-ai-safe)).
3. **In Janitor AI, open the API settings** and choose the **custom / proxy / OpenAI-compatible** option.
4. **Enter the connection details:**
   - **Base URL:** typically `https://api.deepseek.com`
   - **API key:** the key you just generated
   - **Model name:** `deepseek-chat` (the standard chat model — see the model section below)
5. **Save and send a test message.** A reply means you're running on DeepSeek.

Because it's billed directly by DeepSeek with no middleman, this is the cheapest way to run it.

## Option 2: Connect DeepSeek via OpenRouter (One Key, Sometimes Free)

[OpenRouter](/blog/best-llm-for-roleplay) is an aggregator that exposes DeepSeek — and dozens of other models — behind a single key, and it has at times offered free or very low-cost access to a DeepSeek model. It's the better route if you want to A/B different models later without juggling separate accounts.

1. **Create an OpenRouter account**, add credit (or use a free model if one is available), and **generate a key**.
2. **In Janitor AI's API settings, choose the custom / proxy option** again.
3. **Enter the connection details:**
   - **Base URL:** `https://openrouter.ai/api/v1`
   - **API key:** your OpenRouter key
   - **Model name:** `deepseek/deepseek-chat` (OpenRouter uses a `provider/model` format)
4. **Save and test.**

Either route lands you in the same place — DeepSeek doing the writing. Direct is cheapest; OpenRouter is the most flexible. Always confirm the **current** base URLs and model IDs in your provider's own documentation, as those are the details that occasionally change.

## Which DeepSeek Model Should You Use?

DeepSeek offers two relevant models, and the right pick for roleplay isn't the obvious one:

- **`deepseek-chat`** — the standard model. It writes naturally, replies quickly, and is the right default for almost all roleplay. **Start here.**
- **`deepseek-reasoner`** — a reasoning model that "thinks" before answering. It can handle complex logic better, but it's slower and its prose can read more analytical than novelistic, which isn't always what you want in a scene.

For character roleplay, most people are happiest on `deepseek-chat`. Reach for the reasoner only if you specifically want heavier logical consistency and don't mind the slower, more deliberate feel.

## Best Settings for DeepSeek on Janitor AI

You don't need to fuss much, but two settings are worth a look:

- **Temperature:** DeepSeek can run a touch hot. If your character drifts off-personality or gets chaotic, nudge temperature **down** for steadier, more on-character replies; if responses feel repetitive, nudge it up slightly.
- **Context size:** larger context lets the model remember more of the conversation, at a slightly higher per-message cost. DeepSeek's pricing is low enough that a generous context is usually affordable — though no setting beats the underlying [context-window limit](/blog/why-llms-forget) forever.

Good character + `deepseek-chat` + a sane temperature is the whole recipe.

## Troubleshooting DeepSeek on Janitor AI

Almost every DeepSeek-on-Janitor problem is one of these:

- **Network error / blank reply.** Most often a wrong **base URL** or **model name**, or the model briefly overloaded. Re-check both against your provider's docs and retry.
- **Authentication / invalid key.** Re-copy the key with no stray spaces, and confirm it's from the matching account (DeepSeek key with DeepSeek URL; OpenRouter key with OpenRouter URL — they aren't interchangeable).
- **Insufficient balance.** The quiet one: your API account is out of credit. Top it up.
- **Wrong model format.** Direct DeepSeek uses `deepseek-chat`; OpenRouter uses `deepseek/deepseek-chat`. Mixing the format with the wrong URL is a common slip.
- **Works on Janitor LLM but not DeepSeek.** That isolates the issue to your API config — not your connection or the platform.

## Is It Worth It?

For the price, DeepSeek is the easiest big upgrade you can make to Janitor AI. It turns the platform's "this is kind of flat" first impression into something genuinely good, for pennies a session. If you outgrow it, the next steps up are a frontier model (compared in our [best LLM for roleplay](/blog/best-llm-for-roleplay) guide) or moving to a more powerful front-end like [SillyTavern](/blog/sillytavern-guide).

And if you find yourself wanting a world that *remembers* — persistent state, mechanics, stakes that carry across sessions — that's something no character-chat setup provides, however good the model. The free [Arcanum Originals](/arcanum-games) are engineered RPG systems built for exactly that, running on the same kind of model you just connected.
