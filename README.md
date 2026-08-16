# Juan David Cano — Site (Next.js clone of the Framer site)

Code-based clone of [juandavidcano.com](https://juandavidcano.com), built to fix bugs found on the live
Framer site and to be deployable on Vercel.

## Bugs fixed vs. the live Framer site

1. **Desktop nav "Projects" link had no `href`** — did nothing on click. Now links to `/#case-study`.
2. **`/about-me` served the homepage's HTML** (confirmed via a raw HTTP request, not just in-browser) —
   the page never actually existed distinctly. Now a real route with its own content.
3. **Mobile menu links didn't navigate** — same root causes as #1 and #2, plus the overlay now closes
   itself on navigation instead of staying open over the new page.

## Stack

Next.js 16 (App Router) + TypeScript + Tailwind CSS. Content lives in [`lib/content.ts`](lib/content.ts) —
edit it directly and redeploy to update copy (no CMS wired up, matching how the original site's content
rarely changes).

## Run locally

```bash
npm install
npm run dev
```

## Deploy

Import this repo in Vercel (framework preset: Next.js, no extra config). Point a preview subdomain
(e.g. `preview.juandavidcano.com`) at it for review before touching the main `juandavidcano.com` domain,
which still points at Framer.
