---
title: "Janitor AI Not Working? Every Fix for 2026 (Errors, Blank Replies, Outages)"
description: "Janitor AI not working? The full 2026 troubleshooting guide — network errors, blank replies, invalid API key, insufficient balance, rate limits, the site not loading, and the one-minute test that tells you where the problem really is."
section: "guides"
pubDate: 2026-07-01
tags: ["Janitor AI not working", "Janitor AI network error", "Janitor AI error", "Janitor AI down", "Janitor AI not responding", "Janitor AI fix", "Janitor AI troubleshooting"]
faq:
  - q: "Why is Janitor AI not working?"
    a: "Most Janitor AI problems are configuration issues, not platform outages. If you've connected your own model, the usual causes are a wrong base URL or model name, an invalid or unfunded API key, or the model being briefly overloaded. The fastest way to tell is to switch to the free Janitor LLM — if that works and your model doesn't, the problem is in your API settings, not the platform or your internet."
  - q: "Why does Janitor AI say network error?"
    a: "A network error on your own model almost always means Janitor AI couldn't reach the endpoint you gave it — usually a wrong base URL, a wrong model name, or the model being temporarily overloaded. Re-check the base URL and model ID against your provider's current docs, make sure your API key is valid and funded, and retry after a moment. If it happens on the free Janitor LLM instead, it's more likely temporary platform load."
  - q: "Is Janitor AI down right now?"
    a: "Sometimes the problem really is on Janitor AI's side — high load or a temporary outage. If the site won't load or errors on the free built-in model for everyone, waiting is the fix. But if the free model works and only your connected model fails, it isn't an outage — it's your API configuration."
  - q: "Why is Janitor AI not responding or giving blank replies?"
    a: "Blank or cut-off replies usually come from the connected model, not the platform: an overloaded model, a context that's grown too large, or a temperature set very high. Try regenerating the reply, lower the temperature a little if answers are chaotic, and trim or summarise a very long chat. On the free model, a blank reply is more often temporary load — wait and retry."
  - q: "Why does Janitor AI say invalid API key?"
    a: "An invalid-key or authentication error means the key Janitor AI is sending isn't being accepted. Re-copy the key with no stray spaces, confirm it's from the same provider as your base URL (a DeepSeek key won't work on an OpenAI URL, and vice versa), and check the key hasn't been revoked. Generating a fresh key from your provider and pasting it again fixes most cases."
  - q: "Why does Janitor AI stop working after a few messages?"
    a: "If it works at first and then fails, the most common cause is running out of API credit — your provider account hit zero mid-session. Top up your balance and it resolves. The other possibility is the conversation growing past the model's context limit, which can cause errors or dropped memory; starting a fresh chat or summarising helps."
---

"Janitor AI not working" is one of the most-searched things about the platform, and the frustrating part is that the error messages rarely tell you *which* thing broke. The good news: almost every problem falls into a short list of causes, and one quick test usually points straight at the culprit. This guide walks the full list in order — from the fastest diagnostic to the specific fixes for each error.

If you haven't set the platform up yet, the [complete Janitor AI setup guide](/blog/how-to-use-janitor-ai) covers the whole process; this page is for when something that *should* work isn't.

## Start Here: The One-Minute Diagnostic

Before touching any setting, run this single test, because it splits every problem into one of two buckets:

**Switch to the free, built-in Janitor LLM and send a message.**

- **If the free model works but your connected model doesn't** → the problem is in your **bring-your-own-model (BYOM) settings**, not your internet, not the platform. Skip to the API sections below.
- **If the free model also fails** → it's more likely **temporary platform load or an outage**, or something local like your browser or connection. Skip to "The Site Itself Won't Load."

This one step saves most people twenty minutes of checking the wrong thing. Nine times out of ten, "Janitor AI not working" is really "my API configuration has one wrong field."

## Network Error / "Failed to Fetch" / Blank Reply on Your Own Model

This is the most common BYOM error, and it almost always means Janitor AI couldn't reach the endpoint you gave it. Check these in order:

1. **Base URL.** One wrong character here breaks everything. Confirm it exactly matches your provider's current documentation (for example, a direct DeepSeek connection versus an OpenRouter one use completely different URLs). Copy it fresh rather than trusting memory.
2. **Model name.** The model ID must be exactly what your provider lists — including the `provider/model` format that aggregators like OpenRouter require. A typo or an outdated model name produces the same silent failure.
3. **Model overloaded.** Popular models occasionally get swamped. If your URL and model name are definitely right, wait a moment and retry before assuming your setup is broken.

The [proxy setup guide](/blog/janitor-ai-proxy) covers the base-URL-and-model-name pairing in full, and the [API key guide](/blog/janitor-ai-api-key) covers getting a working key — the two fields this error is usually about.

## "Invalid API Key" / Authentication Error

This means the key itself is being rejected. The fixes:

- **Re-copy the key** with no stray spaces or line breaks — a trailing space is a classic cause.
- **Match key to URL.** Your key and base URL must be from the *same* provider. A DeepSeek key on an OpenAI URL (or vice versa) will always fail authentication.
- **Check it hasn't been revoked.** If you regenerated or deleted the key in your provider's dashboard, the old one stops working instantly. Generate a fresh key and paste it in.

Keys are free to regenerate, so when in doubt, make a new one. (For why you should only ever use a key from an official provider — never a stranger's shared proxy — see [is Janitor AI safe](/blog/is-janitor-ai-safe).)

## "Insufficient Balance" / Quota Errors — The Silent One

This is the sneakiest failure because it often appears *mid-session*: everything works for a while, then suddenly errors. The cause is simple — **your API account ran out of credit.** BYOM is pay-per-use, so an empty balance stops generation cold.

The fix is just as simple: top up your provider account. Budget models like DeepSeek cost so little per message that a few dollars lasts a very long time, so this is usually a rare, cheap fix once you know to look for it.

## "Rate Limited" / "Model Overloaded" / 429 or 503 Errors

These mean the provider is temporarily refusing requests — either you're sending them too fast, or the model is under heavy demand. Neither is a broken setup:

- **Wait a few seconds and retry.** Most rate limits clear quickly.
- **On free tiers** (like some OpenRouter free models), limits are stricter — if you hit them constantly, a small amount of credit or a different model removes the ceiling.

## Blank, Cut-Off, or Repeating Replies

Sometimes it "works" but the output is broken — empty messages, replies that stop mid-sentence, or the character repeating itself. These aren't connection errors; they're generation issues:

- **Regenerate** the reply first — a single bad generation is often a one-off.
- **Temperature too high** can produce chaotic or garbled output; nudge it down for steadier replies.
- **Context too full.** A very long conversation can strain the model, cause dropped memory, or trigger errors. Summarising or starting a fresh chat helps — and this ceiling is inherent to every model, as explained in [why LLMs forget](/blog/why-llms-forget).
- **Repeating itself instead of erroring out.** If the character keeps echoing the same phrase or gesture rather than failing outright, that's a distinct pattern-locking issue, not a connection problem — [why AI roleplay keeps repeating itself](/blog/ai-roleplay-repetition-loop) covers the fix, including the temperature and repetition-penalty settings BYOM setups expose.

## The Site Itself Won't Load

If Janitor AI won't open at all, or the free model fails for everyone, the problem is likely on the platform or your browser:

- **Check whether it's just you.** If others are reporting it down, it's a platform issue and waiting is the only fix.
- **Clear cache / try another browser or incognito.** Rules out a stale local state.
- **Disable aggressive extensions** (ad blockers, script blockers) that can interfere with the site loading.
- **Confirm you're on the official site.** Lookalike and clone domains behave unpredictably and can be outright unsafe — make sure you're on the genuine platform, not a copycat ([more on that here](/blog/is-janitor-ai-safe)).

## Mobile-Specific Issues

On phones, most "not working" reports come down to the same handful of things: a flaky mobile connection, a browser cache that needs clearing, or an aggressive data-saver/extension interfering. Try switching between Wi-Fi and mobile data, clear the browser cache, and avoid unofficial "Janitor AI app" downloads — the real platform is the website, and fake apps are a known risk.

## When It Works But Disappoints

Not every "it's not working" is an error — sometimes the platform runs fine but the *writing* is flat, short, or off-character. That's usually not a bug; it's the free Janitor LLM. The single biggest upgrade is connecting your own model:

- **[DeepSeek](/blog/janitor-ai-deepseek)** is the cheap, popular choice that dramatically improves the writing for pennies a session.
- **A frontier model** ([best LLM for roleplay](/blog/best-llm-for-roleplay)) is the quality option if cost isn't the concern.

And if what you actually want is a world that *remembers* you — persistent state, mechanics, stakes that carry across sessions — no character-chat setup provides that, however well it's configured. The free [Arcanum Originals](/arcanum-games) are engineered RPG systems built for exactly that, running inside the same AI you'd connect here.

## Frequently Asked Questions

**Why is Janitor AI not working?**
Most Janitor AI problems are configuration issues, not platform outages. If you've connected your own model, the usual causes are a wrong base URL or model name, an invalid or unfunded API key, or the model being briefly overloaded. The fastest way to tell is to switch to the free Janitor LLM — if that works and your model doesn't, the problem is in your API settings, not the platform or your internet.

**Why does Janitor AI say network error?**
A network error on your own model almost always means Janitor AI couldn't reach the endpoint you gave it — usually a wrong base URL, a wrong model name, or the model being temporarily overloaded. Re-check the base URL and model ID against your provider's current docs, make sure your API key is valid and funded, and retry after a moment. If it happens on the free Janitor LLM instead, it's more likely temporary platform load.

**Is Janitor AI down right now?**
Sometimes the problem really is on Janitor AI's side — high load or a temporary outage. If the site won't load or errors on the free built-in model for everyone, waiting is the fix. But if the free model works and only your connected model fails, it isn't an outage — it's your API configuration.

**Why is Janitor AI not responding or giving blank replies?**
Blank or cut-off replies usually come from the connected model, not the platform: an overloaded model, a context that's grown too large, or a temperature set very high. Try regenerating the reply, lower the temperature a little if answers are chaotic, and trim or summarise a very long chat. On the free model, a blank reply is more often temporary load — wait and retry.

**Why does Janitor AI say invalid API key?**
An invalid-key or authentication error means the key Janitor AI is sending isn't being accepted. Re-copy the key with no stray spaces, confirm it's from the same provider as your base URL (a DeepSeek key won't work on an OpenAI URL, and vice versa), and check the key hasn't been revoked. Generating a fresh key from your provider and pasting it again fixes most cases.

**Why does Janitor AI stop working after a few messages?**
If it works at first and then fails, the most common cause is running out of API credit — your provider account hit zero mid-session. Top up your balance and it resolves. The other possibility is the conversation growing past the model's context limit, which can cause errors or dropped memory; starting a fresh chat or summarising helps.
