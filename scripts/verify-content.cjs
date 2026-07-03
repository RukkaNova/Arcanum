// Post-build content verification. Run after `npm run build`:
//   npm run verify
// Checks every page in dist/: (1) all internal links resolve to a built route
// or a real file in dist/, (2) every JSON-LD block parses as valid JSON.
const fs = require('fs');
const path = require('path');

const DIST = path.join(__dirname, '..', 'dist');
if (!fs.existsSync(DIST)) {
  console.error('dist/ not found — run `npm run build` first.');
  process.exit(1);
}

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name === 'index.html') out.push(p);
  }
  return out;
}

const pages = walk(DIST);
let errors = 0;

for (const page of pages) {
  const html = fs.readFileSync(page, 'utf8');
  const rel = path.relative(DIST, page).replace(/\\/g, '/');

  // JSON-LD blocks must parse
  for (const m of html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)) {
    try {
      JSON.parse(m[1]);
    } catch (e) {
      console.error(`JSON-LD PARSE ERROR in ${rel}: ${e.message}`);
      errors++;
    }
  }

  // Internal links must resolve
  const hrefs = [...html.matchAll(/(?:href|src)="(\/[^"]*)"/g)].map((x) => x[1]);
  for (const raw of new Set(hrefs)) {
    const clean = decodeURIComponent(raw.replace(/[#?].*$/, '')).replace(/\/$/, '');
    if (!clean) continue; // bare "/" = homepage
    const asRoute = path.join(DIST, clean, 'index.html');
    const asFile = path.join(DIST, clean);
    if (!fs.existsSync(asRoute) && !fs.existsSync(asFile)) {
      console.error(`BROKEN LINK in ${rel}: ${raw}`);
      errors++;
    }
  }
}

console.log(`Checked ${pages.length} pages.`);
if (errors) {
  console.error(`${errors} problem(s) found.`);
  process.exit(1);
}
console.log('All internal links resolve; all JSON-LD parses.');
