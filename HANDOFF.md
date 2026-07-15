# HANDOFF.md

> Rewritten at the end of every session. Describes the state of the repo right now.
> New session: read `AGENTS.md` first, then `PLAN.md`, then this.

## Current session status — 2026-07-15

- The visual direction is now a simple, realistic nature-exploration journey with no people
  or avatars in generated media.
- The retired character, comic, and 3D hero implementation has been removed from the active
  source tree. The old generated media files are also removed from the working tree.
- `src/App.tsx` now renders only the five semantic sections. `Hero.tsx` uses a lightweight CSS
  mountain placeholder until final media is generated; no WebGL or character layer remains.
- `src/styles/global.css` now contains the responsive nature palette, typography, cards,
  mountain placeholder, mobile navigation behavior, and reduced-motion rules.
- The five detailed scene prompts and media constraints are in `docs/NATURE-EXPLORATION.md`.
- Responsive requirements are recorded in `PLAN.md`: 375px mobile, 1280–1440px desktop,
  no horizontal overflow, stacked mobile hero, fluid cards, touch-safe links, and still-image
  fallbacks for motion media.

## Nature scene sequence

1. Hero — trailhead and mountain overlook at first light.
2. About — shaded forest path with a creek and field-guide atmosphere.
3. Experience — rocky switchback route through layered mountain terrain.
4. Work — practical basecamp table with maps, compass, notebook, and gear.
5. Contact — quiet summit at sunset with an open route continuing into the distance.

## Next steps

1. Generate the five still images using `docs/NATURE-EXPLORATION.md`.
2. Review crops on desktop and mobile; keep the focal region inside the central safe area.
3. Add optimized stills to `public/media/nature/` and optional muted short loops if desired.
4. Integrate the scenes into the sections with posters, lazy loading, and reduced-motion fallbacks.
5. Run the full build/lint/browser verification loop, then set GitHub Pages to GitHub Actions.

## Verification

The redesign is in progress. Re-run `npm run build`, `npx tsc --noEmit`, `npm run lint`,
`git diff --check`, and browser checks at desktop and 375px mobile before the next commit.
