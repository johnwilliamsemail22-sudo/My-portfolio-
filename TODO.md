# Ahmed — Portfolio

Single-page portfolio that reproduces the design language of the reference site (warm cream canvas,
oversized taupe display name behind a cut-out portrait with sunflower accents, floating dark pill nav
with orange CTA, tilted service cards, marquee visual archive, black projects section, amber CTA band,
cream footer) while showing only a curated subset of sections and adding Ahmed's four recent client sites.

## Outcomes

### 1. Hero and floating navigation — done
- Fixed floating dark pill navigation with wordmark, in-page links (Home, Work, About, Contact) and an orange "Let's Talk" CTA; compact sticky state after 48px of scroll and active-section highlighting.
- Full-height hero on the cream canvas: 29vw taupe name behind the refined cut-out portrait, four floating sunflower cut-outs, intro block ("Hello I'm", name, positioning line) and a scroll cue.
- Portrait derived from the supplied photograph: background removed, edge fringe decontaminated, tone/sharpen refinement, soft bottom fade into the cream page.

### 2. About and services — done
- About section: one positioning paragraph plus a dark "See My Recent Work" pill and an email pill.
- Services: "What I can / Help you with?" display heading and four tilted cards (Web Design & Development, Brand Identity & Visuals, Restaurant & Hospitality Sites, SEO & Performance), each with a coloured orb art panel, numbered index and label band; cards straighten and lift on hover.

### 3. Visual archive and recent projects — done
- "Visual Archive" band: 220px watermark with two opposing infinite marquees of real project screenshots, edge-masked, pausing on hover.
- Recent Projects section on black: Le Rêve Cafe, Bar Bar Malindi, MyHire & Rentals and EME Fries, each with a real 1440×900 screenshot, name, category, location, note and arrow; every card opens the live site in a new tab.

### 4. Closing band, footer and motion — done
- Amber "Great Things Begin Together." band with supporting copy, white "Let's Connect" pill and email link.
- Cream footer with the creative-mindset statement, quick links, Instagram/LinkedIn/Email, giant name watermark and the local-craft credit line.
- Motion: staggered IntersectionObserver reveals, hero parallax, nav scroll state, smooth anchor scrolling with 96px offset, and full reduced-motion fallbacks.

### 5. Delivery — done
- `pnpm check` and `pnpm build:static` pass; `/manus-routes.json` returns `{"routes":[{"path":"/","title":"Home"}]}`; `app.config.ts` carries the uploaded logo URL; committed as a checkpoint.
