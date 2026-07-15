# PLAN.md — Personal Website

Single long-scroll portfolio: **Hero → About → Experience → Projects & Papers → Contact**.
The current direction is a simple, realistic nature-exploration theme: mountain ridges,
forest trails, field notes, trail maps, and quiet outdoor light. The visual system should
feel curious and grounded rather than ornamental.

## Nature-exploration direction

- No people, avatars, character IP, comic styling, or personal likeness in generated media.
- Five connected scenes tell one journey: trailhead, forest path, mountain route, basecamp
  worktable, and sunset summit.
- Use realistic editorial photography or cinematic landscape stills with a restrained palette:
  warm cream paper, forest green, moss, slate, sky blue, and muted sunset orange.
- Generated media belongs in `public/media/nature/`; every motion asset needs a matching still
  poster for Safari, reduced motion, slow connections, and mobile fallback.
- Prompt source and generation constraints live in `docs/NATURE-EXPLORATION.md`.

## Responsive design requirements

Mobile is the baseline, not a later adaptation.

- Verify at **375px wide** and at least one desktop viewport around **1280–1440px**.
- No horizontal scrolling, clipped controls, unreadable text, or essential content hidden
  behind media at either size.
- The desktop hero may use a two-column text/landscape composition; below 768px it must
  stack naturally with text first and the landscape below it.
- Navigation must remain keyboard accessible and usable on narrow screens; it may scroll
  horizontally rather than wrap into an unstable multi-row header.
- Project cards become one column on narrow screens and a fluid grid on larger screens.
- Use `clamp()` for type and spacing, a centered max-width for desktop reading measure,
  generous touch targets, and safe image crops with the focal subject inside the center 70%.
- Media should be lazy-loaded where appropriate, never force page width, and degrade to a
  still image under `prefers-reduced-motion: reduce`.
- Test touch-sized links, keyboard focus, contrast, 200% text zoom, and landscape mobile.

## Status

- [x] Phase 0 — Workspace: Vite React TypeScript scaffold, content model, and deployment base.
- [x] Phase 1 — Nature shell: responsive tokens, typography, navigation, sections, and CSS
      mountain placeholder. (2026-07-15)
- [x] Phase 2 — Content data model: all site copy and links in `src/data/content.ts`.
- [x] Phase 3 — Static sections: Hero, About, Experience, Work, and Contact.
- [ ] Phase 4 — Generate and integrate the five nature scenes from
      `docs/NATURE-EXPLORATION.md`; add optimized stills and optional short loops.
- [ ] Phase 5 — Connect scene media to scroll transitions, add posters/fallbacks, and perform
      desktop/mobile visual QA.
- [x] Phase 6 — GitHub Pages deployment workflow.
- [ ] Phase 7 — Go live: Toby sets the repository Pages source to GitHub Actions.

## Content and architecture

- All site copy and links flow from `src/data/content.ts`; components do not own biography,
  experience, project, or contact copy.
- Keep sections semantic and content-focused. Generated nature media should be replaceable
  without changing section copy.
- Use native CSS and browser APIs only. Do not add animation, UI, scroll, or image libraries
  without asking Toby first.
- Keep the site static and GitHub Pages-friendly. Never commit raw generated video.

## Resolved inputs

| Item | Value |
|---|---|
| GitHub username | `tobyhqin` → `tobyhqin.github.io` |
| Display name | Toby Qin |
| Resume | `C:\Users\tobyh\Documents\Toby Qin - Official Resume.docx` |
| LinkedIn | https://www.linkedin.com/in/tobyq/ |
| ORCID | 0009-0007-8119-4386 |
| Instagram | https://instagram.com/toby.qin |
| GitHub | https://github.com/tobyhqin |
| Public email | toby@bffofamerica.org |

## Open items

| Item | Needed by |
|---|---|
| Final five nature images and optional loops | Phase 4 |
| Exact media layout per section | Phase 5 |
| Custom favicon | Before launch |
| GitHub Pages source set to GitHub Actions | Phase 7 |
