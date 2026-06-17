# Arcanum — three-pillar build

## The three pillars
1. **Public Games** (`src/content/games/`) — public AI RPGs, link-out. Fields: model (chatgpt/claude/gemini), genres, rating, playUrl, reviewSlug.
2. **Clients** (`src/content/clients/`) — roleplay platforms, link-out + review. Fields: rating, pricing, siteUrl, reviewSlug, bestFor.
3. **Arcanum Originals** (`src/content/releases/`) — your downloadable games. Fields: models[], genres, files[], videoId (optional). Files live in `public/files/`.

## Blog (Codex) — six sections
Set `section:` in each post to one of: news, reviews, platform-reviews, articles, guides, lists.

## Add content (all via GitHub web editor → commit → auto-deploys)
- New public game: add a .md in src/content/games/ (copy midnight-precinct.md)
- New client: add a .md in src/content/clients/ (copy janitor.md)
- New Arcanum Original: add a .md in src/content/releases/ + put the actual files in public/files/<name>/
- New blog post: add a .md in src/content/blog/ with a `section`

## Replace placeholders
- Images: swap the /public/img/placeholder-*.svg references for real images in public/img/
- Download files: replace the placeholders in public/files/fourth-age/ with your real engine files
- Video: set `videoId` on a release to a YouTube id for a click-to-play thumbnail

## Build / deploy
`npm install` then `npm run build`. Already wired to Cloudflare Pages — commit to main and it rebuilds.
