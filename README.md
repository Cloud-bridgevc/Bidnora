# Bidnora

**Procurement documents, checked before decisions.**

Bidnora helps procurement teams organise and check complex submissions. Its AI connects requirements to supporting documents so reviewers can investigate gaps consistently.

> Bidnora is a proposed startup concept. The team is fictional, pricing is illustrative and the prototype uses fictional data. Named organisation types are prospective customers with no implied affiliation. The domain `www.bidnora.com` and email `hello@bidnora.com` are placeholders — check availability with a registrar before use.

Categories: AI · Procurement · Compliance

## What's here

- **Marketing site** (`/`): hero, purpose and stakes (with sourced statistics), problem, solution, how it works, customers, public-sector angle, AI safeguards, principles, founders' letter, vision, pricing, proposed AWS architecture, team, FAQ and an early-access form.
- **Interactive prototype** (`/app`): a review workspace on fictional findings. Switch roles with *Demo as*, open a record to see AI flags with evidence and confidence, assign reviewers, add notes and record decisions (a reason is required). Every change is written to an audit log you can export as CSV. A grounded assistant answers only from the records and refuses decisions that belong to people. Changes persist in `localStorage`.
- **Legal drafts**: `/privacy` and `/terms` (review drafts; operator details to be confirmed).

## Team

- **Ngozi Udeh** — Founder/CEO. Procurement professional with infrastructure tender experience.
- **Kabiru Sani** — Co-founder. Commercial contracts specialist.
- **Temilade Ogunleye** — CTO. NLP engineer focused on document extraction and evidence retrieval.

## Sources for the statistics

- $13trn — Estimated amount governments spend each year on public contracts. ([World Bank blog](https://blogs.worldbank.org/voices/hidden-1-trillion-halting-waste-public-procurement))
- ~12% — Approximate share of global GDP spent through public procurement. ([World Bank blog](https://blogs.worldbank.org/developmenttalk/how-large-public-procurement))
- $1trn — Hidden cost of waste in public procurement each year, as framed by the World Bank. ([World Bank blog](https://blogs.worldbank.org/voices/hidden-1-trillion-halting-waste-public-procurement))

## Develop

```bash
npm install
npm run dev
```

```bash
npm run build   # Vite build, server render, and static prerender of /, /app, /privacy, /terms and 404.html
npm test        # Engine and content tests (node --test)
npm run preview
```

The build output in `dist/` is fully static. `public/_headers` and `public/_redirects` cover Netlify/Cloudflare Pages; `vercel.json` covers Vercel.

### Early-access form

Without configuration the form saves the request in the browser and offers a pre-filled email to hello@bidnora.com. To send submissions to HubSpot, set `VITE_HUBSPOT_PORTAL_ID` and `VITE_HUBSPOT_FORM_GUID` at build time, and update the privacy notice first.

### Motion

Scroll reveals, word-by-word manifesto lighting, count-up statistics, timeline and step lines, card tilt and magnetic buttons live in `src/motion.js`. Content is server-rendered and fully visible without JavaScript; motion is skipped when the visitor prefers reduced motion.

## Structure

```
src/content.js        all site copy (edit here)
src/seed.js           fictional prototype records
src/theme.css         colours and fonts
src/App.jsx           marketing pages
src/Purpose.jsx       purpose, stakes, principles, letter, vision
src/app/engine.js     prototype rules (permissions, decisions, audit, assistant)
src/app/Prototype.jsx prototype UI
scripts/prerender.mjs static HTML for every route
```
