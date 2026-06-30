import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// PILLAR 1 — PUBLIC GAMES (discovery / link-out). Filter by MODEL + GENRE.
const games = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/games' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    model: z.enum(['chatgpt', 'claude', 'gemini']),
    genres: z.array(z.string()),
    rating: z.number().min(0).max(5).optional(),
    playUrl: z.string().url().optional(),
    reviewSlug: z.string().optional(),
    releaseSlug: z.string().optional(),
    author: z.string().default('Unknown'),
    cover: z.string().optional(),
    featured: z.boolean().default(false),
    nsfw: z.boolean().default(false),
    updated: z.coerce.date(),
  }),
});

// PILLAR 2 — CLIENTS (roleplay platforms). Link-out + review link.
const clients = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/clients' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    rating: z.number().min(0).max(5).optional(),
    pricing: z.enum(['free', 'freemium', 'paid']).default('freemium'),
    siteUrl: z.string().url().optional(),
    reviewSlug: z.string().optional(),
    bestFor: z.string().optional(),
    models: z.string().optional(),
    memoryApproach: z.string().optional(),
    cover: z.string().optional(),
    featured: z.boolean().default(false),
    updated: z.coerce.date(),
    // Optional lite-facade YouTube review (no iframe on load — see VideoFacade.astro).
    video: z.object({
      id: z.string(),
      title: z.string(),
      poster: z.string(),
      duration: z.string().optional(),       // ISO 8601, e.g. PT6M29S
      uploadDate: z.coerce.date().optional(),
      description: z.string().optional(),
    }).optional(),
  }),
});

// PILLAR 3 — ARCANUM RELEASES (downloadable files only).
const releases = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/releases' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    models: z.array(z.enum(['chatgpt', 'claude', 'gemini'])),
    genres: z.array(z.string()),
    author: z.string().default('Arcanum'),
    partner: z.boolean().default(false),
    cover: z.string().optional(),
    videoId: z.string().optional(),
    rating: z.number().min(0).max(5).optional(),
    reviewSlug: z.string().optional(),
    files: z.array(z.object({
      name: z.string(),
      path: z.string(),
      label: z.string().optional(),
    })).default([]),
    version: z.string().default('1.0'),
    featured: z.boolean().default(false),
    nsfw: z.boolean().default(false),
    updated: z.coerce.date(),
  }),
});

// BLOG (Codex) — six sections via `section`.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    section: z.enum(['news', 'reviews', 'platform-reviews', 'articles', 'guides', 'lists']),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    cover: z.string().optional(),
    releaseSlug: z.string().optional(),
    rating: z.number().min(0).max(5).optional(),
    tags: z.array(z.string()).default([]),
    // Optional FAQ — renders a second FAQPage JSON-LD block. Each answer must
    // mirror the visible FAQ text on the page (plain text, no markdown links).
    faq: z.array(z.object({ q: z.string(), a: z.string() })).optional(),
    // Optional lite-facade YouTube review (no iframe on load — see VideoFacade.astro).
    video: z.object({
      id: z.string(),
      title: z.string(),
      poster: z.string(),
      duration: z.string().optional(),       // ISO 8601, e.g. PT6M29S
      uploadDate: z.coerce.date().optional(),
      description: z.string().optional(),
    }).optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { games, clients, releases, blog };
