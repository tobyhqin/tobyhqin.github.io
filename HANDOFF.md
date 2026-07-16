# HANDOFF.md

> Rewritten at the end of every session. Describes the state of the repo *right now*.
> New session: read `AGENTS.md` first (especially the Design Contract and the
> "how this project got burned" section), then `PLAN.md`, then this.

**Last session:** 2026-07-16 — scroll cinematics + design-review pass; **SITE IS
LIVE at https://tobyhqin.github.io** (verified with agent-browser screenshots).

## Session-9 delta — go-live debugging (read if deploys break again)

- Root causes fixed, in order: (1) Pages source was "branch" → served raw repo
  source; Toby flipped to GitHub Actions. (2) Actions were disabled repo-wide →
  workflow registered but zero runs ever; Toby enabled. (3) `npm ci` failed on
  linux: Windows-generated lockfile omits `@emnapi/*` transitive deps of the
  linux rolldown bindings → workflow now uses `npm install` (keep it that way
  while lockfiles are regenerated on Windows). Deploy run green; live page
  serves the built app, 5 videos, no 404s.
- CI failure output is now surfaced as `::error` annotations (readable via the
  public API without repo admin) — `shell: bash` matters, default step shell
  has no pipefail and tee masks failures.
- Phase 8 COMPLETE. Remaining niceties: Toby's own-device scroll-through,
  optional contact-scene regen, custom favicon, nav active-state underline.

## Session-8 delta

- Scroll-driven cinematics added (native CSS `animation-timeline`, no deps):
  scene drift/zoom via a named `--chapter` view-timeline, title slap-in with
  hand-drawn tilt, hero copy floats away on exit, springy staggered panel
  reveals. 3D wagon wheels spin with scroll; wagon leans with scroll velocity.
- Independent design-subagent review ran (verdict: SHIP WITH FIXES); all six
  fixes applied — notably: the reveal fail-safe no longer disarms the panel
  animation (clearTimeout on first IO callback), reduced-motion now removes
  timeline animations outright (`animation: none`, since duration tricks don't
  stop scroll-mapped progress), and `mix-blend-mode: multiply` on scenes melts
  any residual bg mismatch into the paper (this replaced visible media edges).
- Nav masthead solid paper + feather; mobile hero recomposed (copy top, scene
  band low via `object-position`, smaller wagon); contact panel narrowed off
  the characters; UI copy moved to `content.ts` (`ui` export).
- Deferred nit (fine to add later): active-section underline in the nav.
- Pages source was still "branch" at session start (site served raw repo!);
  Toby flipped it — verify runs named **"Deploy to GitHub Pages"** (the
  built-in "pages build and deployment" = wrong source setting).

## Current state

- **The site is the intended design, verified with real screenshots:** five
  full-screen C&H scene chapters (SceneChapter primitive), giant hand-lettered
  titles over the scenes, panels scrolling over each scene's empty side, 3D toon
  wagon accent in the hero, curated professional content, no footer.
- All five scene videos processed and committed (`public/media/scenes/`,
  0.7–4.3 MB each + posters). Contact scene is the weakest (model recomposed the
  still) — Toby accepted it for now; regeneration prompt notes in HIGGSFIELD.md.
- Old corner-CharacterStage design fully retired (components deleted, character
  webps removed); the scenes replace it.
- Verification was done with **agent-browser** (global CLI + project skill) —
  use it, not the desktop-app preview pane (broken renderer: no
  IntersectionObserver, no screenshots). Chapters screenshotted at desktop
  width; content solid, characters visible, no overflow, no console errors.
- Everything committed and pushed to `main`.

## Toby's outstanding items (nothing else blocks go-live)

1. Repo **Settings → Pages → Source: "GitHub Actions"** → site goes live at
   https://tobyhqin.github.io on the already-pushed commit.
2. A personal scroll-through in his own browser (mobile too) for sign-off.
3. Optional: regenerate the contact scene video if it still bothers him.

## Warnings / gotchas

- **Do not re-theme, re-layout, or content-dump. See AGENTS.md Design Contract.**
  The previous agent did; everything it made was reverted (`b0dd06e`).
- `--paper #fbf6ea` is color-matched into every video background — changing the
  token breaks the full-bleed illusion.
- Desktop-app preview pane cannot verify this site (dead renderer) — agent-browser
  only.
- Patrick Hand SC must stay `font-weight: 400` (synthesized bold distorts it).
- Higgsfield CLI is installed + authed (workspace Private). `--resolution "768"`
  style numeric-string params mis-parse — omit flags for defaults.
- 4 Higgsfield credits remain (below cheapest video job); Seedance "unlimited"
  claim was never verified this session — check `hf account status` before
  planning generation there. Gemini Omni (Toby's side) produced the current videos.
