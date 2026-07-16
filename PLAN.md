# PLAN.md — Personal Website

Single long-scroll portfolio: **Hero → About → Experience → Research & Work → Contact**.
The site uses a realistic nature journey as a quiet visual thread, while the content stays
focused on Toby's strongest research, leadership, education, and service work.

## Product goal

Help an admissions reader, research collaborator, or organization understand Toby's highest-
impact work in under two minutes, then give them direct routes to LinkedIn, ORCID, Instagram,
GitHub, or email. This is a selective public profile, not a complete résumé.

## Editorial direction

- Hallmark macrostructure: **Narrative Workflow**.
- Theme: **Garden** — warm paper, forest ink, field-note rules, restrained typography.
- Hero: **Photographic Fold** using Toby's generated mountain footage.
- Navigation: **N9 Edge-aligned minimal** — name at left, one contact action at right.
- Close: **Ft6 Letter close** — a short invitation followed by direct links.
- No people, avatars, character IP, comic styling, glass cards, decorative badges, aurora
  gradients, stock icons, or filler copy.
- Generated media lives in `public/media/nature/`; raw generation outputs stay outside git.

## Content hierarchy

1. **Hero** — Toby's name and one precise positioning sentence.
2. **About** — a short introduction plus four proof points.
3. **Experience** — six selected leadership/service roles, with supporting activities condensed
   into a single secondary list.
4. **Research & work** — three research tracks and four high-signal awards.
5. **Contact** — concise invitation plus LinkedIn, ORCID, Instagram, GitHub, and email.

The Common App draft supplied 2026-07-15 is the public-content source of truth. Projected
metrics are excluded. In-progress papers are described as in progress, not published.

## Scroll choreography

The five videos are atmospheric section markers, not transition footage between different
locations. The page creates continuity through layout and crossfades:

1. Hero footage fills the opening fold behind the title.
2. As the hero exits, a desktop two-column journey begins: media remains sticky on the left
   while content chapters move on the right.
3. A native `IntersectionObserver` watches the chapter crossing the viewport center.
4. The active chapter's video fades in over the previous one; inactive clips pause.
5. A thin progress rule and stage count advance with the active chapter.
6. On mobile/tablet, sticky media is removed. Each chapter receives its own inline video so
   text is never covered and videos play only while visible.

Motion primitives are deliberately limited to three: scene crossfade, chapter heading reveal,
and active progress movement. Only `opacity` and `transform` animate. Under
`prefers-reduced-motion`, videos remain paused on their poster frames and transitions become
near-instant.

## Responsive requirements

Mobile and desktop are equal first-class targets.

- Verify **320, 375, 414, 768, 1280, and 1440px** widths.
- No horizontal overflow, clipped controls, text under media, or multi-row unstable navigation.
- Use `clamp()` for type and spacing, readable line lengths, and 44px minimum touch targets.
- Wide desktop (≥1201px): sticky 16:9 media rail plus independently scrolling content column.
- Mobile/tablet/compact desktop (≤1200px): inline 16:9 media before each chapter; no sticky stage.
- Preserve the central 70% of each video when cropped and keep text outside the image focal area.
- Respect keyboard navigation, visible focus, semantic headings, 200% text zoom, landscape
  mobile, and reduced motion.
- Only the active/visible video may play. Hero preloads metadata; later videos use `preload=none`.
- Every loop has an optimized WebM, H.264 fallback, and WebP poster. Target ≤2MB per video file.

## Implementation constraints

- Vite + React + TypeScript; static GitHub Pages output.
- Runtime dependencies remain exactly `react` and `react-dom`.
- Native CSS and browser APIs only; no scroll, animation, UI, or icon libraries.
- All biography, experience, research, award, media-caption, and link copy lives in
  `src/data/content.ts`.
- Media components own playback behavior but not prose.
- Never commit raw generated video.

## Status

- [x] Phase 0 — Vite/React/TypeScript scaffold and GitHub Pages workflow.
- [x] Phase 1 — Nature direction and five-scene generation plan.
- [x] Phase 2 — Five stills and five videos generated and visually reviewed.
- [x] Phase 3 — Hallmark editorial redesign and curated Common App content. (2026-07-15)
- [x] Phase 4 — Web media compression, poster generation, and responsive integration. (2026-07-15)
- [x] Phase 5 — Scroll choreography, reduced-motion behavior, and playback lifecycle. (2026-07-15)
- [x] Phase 6 — Build, lint, type, security, and multi-viewport browser verification. (2026-07-15)
- [ ] Phase 7 — Toby reviews the finished local site and confirms content/crops.
- [ ] Phase 8 — Toby sets the GitHub Pages source to GitHub Actions.

## Resolved inputs

| Item | Value |
|---|---|
| GitHub username | `tobyhqin` → `tobyhqin.github.io` |
| Display name | Toby Qin |
| Public content authority | Common App rough draft supplied 2026-07-15 |
| LinkedIn | https://www.linkedin.com/in/tobyq/ |
| ORCID | 0009-0007-8119-4386 |
| Instagram | https://instagram.com/toby.qin |
| GitHub | https://github.com/tobyhqin |
| Public email | toby@bffofamerica.org |

## Open items

| Item | Needed by |
|---|---|
| Toby's visual/content approval after local QA | Phase 7 |
| Confirm final publication status and links for research papers | Before adding paper links |
| Replace projected DECA app reach with verified analytics when available | Future update |
| Custom favicon | Before launch |
| GitHub Pages source set to GitHub Actions | Phase 8 |
