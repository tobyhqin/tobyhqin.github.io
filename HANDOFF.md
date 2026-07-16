# HANDOFF.md

> Rewritten at the end of every session. Describes the state of the repo right now.
> New session: read `AGENTS.md` first, then `PLAN.md`, then this.

## Current state — 2026-07-15

The complete nature-journey redesign is implemented locally and is waiting on Toby's visual
and content approval.

- The page is now a selective public profile rather than a full résumé. Public copy follows the
  Common App draft supplied 2026-07-15 and prioritizes DECA, BFFA, finance leadership, three
  research tracks, selected service/competition work, and four awards.
- Unverified projections are excluded. UCSC and Cornell papers are described as in progress;
  paper links remain an open item until publication status is confirmed.
- Hallmark direction: editorial genre, Narrative Workflow macrostructure, Garden theme,
  Photographic Fold hero, N9 edge-aligned navigation, and Ft6 letter close.
- The retired comic/character/3D direction is absent from the active implementation.

## Scroll and media implementation

- Hero video fills the opening fold behind the title.
- Wide desktop (≥1201px) uses a sticky 16:10 media rail beside the four content chapters.
- `useActiveScene` uses `IntersectionObserver` around the viewport center; scenes crossfade as
  their chapters become active.
- Mobile/tablet uses one inline 16:9 scene per chapter and no sticky rail.
- Hero, sticky, and inline video observers ensure only visible/active footage plays.
- Reduced-motion users receive paused poster frames and near-instant transitions.
- Media sources are ordered WebM VP9 then H.264 MP4, with exact first-frame WebP posters.

Optimized assets are in `public/media/nature/`:

| Scene | WebM | MP4 | Poster |
|---|---:|---:|---:|
| Hero | 168 KB | 166 KB | 47 KB |
| About | 423 KB | 349 KB | 103 KB |
| Experience | 354 KB | 249 KB | 67 KB |
| Work | 129 KB | 130 KB | 51 KB |
| Contact | 132 KB | 136 KB | 36 KB |

All videos are 960×540, 24fps, five seconds, muted, and under 2MB. Raw generator outputs remain
in Downloads and are not committed.

## Content architecture

- All public copy, metrics, research statuses, scene captions, and links live in
  `src/data/content.ts`.
- `src/components/SceneMedia.tsx` owns media playback and rendering.
- `src/hooks/useActiveScene.ts` owns chapter activation.
- `src/hooks/useMediaQuery.ts` owns responsive and reduced-motion media queries.
- `tokens.css` is the single token source; `src/styles/global.css` contains the layout and state
  rules plus the Hallmark audit stamp.

## Verification completed

- `npm run build` — pass.
- `npx tsc --noEmit` — pass.
- `npm run lint` — pass.
- `npm audit --audit-level=high` — 0 vulnerabilities.
- `git diff --check` — pass (Git reports only expected LF→CRLF checkout warnings).
- Secret and debug-log scan — clean.
- Hallmark 58-gate slop test — pass.
- Contrast checks — 15.54:1 ink/paper, 6.65:1 muted/paper, 7.66:1 accent/paper,
  16.24:1 light/ink.
- Browser QA — no horizontal overflow at 320, 375, 414, 768, 1280, or 1440px; hero content
  fits 1280×800; desktop scene activation and mobile inline playback verified; no console errors.
- No automated test script exists in this project; behavior was verified in the browser.

## Current manual barrier

Toby should review the local site for:

1. The hero crop and overall nature footage tone.
2. The curated activity list and exact public wording/metrics.
3. Whether the three research status descriptions are accurate enough to publish.

After approval: adjust any copy/crops, add confirmed paper links if available, create a follow-up
commit, and push when Toby explicitly requests it. Toby will then set GitHub Pages to GitHub
Actions. A custom favicon remains optional before launch.
