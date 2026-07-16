# HANDOFF.md

> Rewritten at the end of every session. Describes the state of the repo *right now*.
> New session: read `AGENTS.md` first (especially the Design Contract and the
> "how this project got burned" section), then `PLAN.md`, then this.

**Last session:** 2026-07-15 (late) — nature redesign reverted; scene-scroll
Calvin & Hobbes site built and verified.

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
