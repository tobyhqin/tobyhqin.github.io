# HANDOFF.md

> Rewritten at the end of every session. Describes the state of the repo *right now*.
> New session: read `AGENTS.md` first, then `PLAN.md`, then this.

**Last session:** 2026-07-15 — Phases 2–7 in one pass (Toby unblocked all decisions)

## Current state

- **Site is feature-complete against the plan, with SVG stand-ins for character art.**
- Phase 2: `src/data/content.ts` — all real content from Toby's resume; email
  toby@bffofamerica.org; links (LinkedIn/GitHub/ORCID/Instagram).
- Phase 3: `src/sections/` — Hero, About, Experience (timeline), Work (cards), Contact.
- Phase 4: live 3D hero **dropped** per Toby; three/@react-three deps still in
  package.json but unimported (possible future easter egg; safe to remove).
- Phase 5: `CharacterStage` (fixed layer, pose per section via `useActiveSection`
  IntersectionObserver hook, wagon scroll-ride in Experience, `StandInDuo` ink-line SVG
  fallback) + `useRevealOnScroll` fade-ups with a 2s fail-safe so content can never be
  permanently hidden.
- Phase 6: `@higgsfield/cli` verified (inspected tarball — clean official binary
  downloader) and installed globally (`higgsfield`/`higgs`/`hf`). `docs/HIGGSFIELD.md`
  has per-slot prompts + compression rules. `public/media/characters/` slots empty.
- Phase 7: `.github/workflows/deploy.yml` (official Pages actions).
- Verified: build green; full-page content, stand-in render, fail-safe, and 375px
  no-overflow checked in the preview pane. **Pose-swap choreography NOT visually
  verified** — the preview pane's renderer never fires IntersectionObserver (also
  breaks screenshots); needs an eyeball in a real browser.
- Toby's decisions this session: real C&H imagery (risk explained + accepted),
  email above, no 3D hero.
- Also: 9 Vercel agent-skills installed to `.agents/skills`; `claude` CLI login done
  but Remote Control blocked by org policy on Toby's account.

## Next steps (in order)

1. **Toby: `higgsfield auth login`** in a terminal → then `hf workspace set <id>`.
2. Generate assets per `docs/HIGGSFIELD.md` (CLI for video, CLI or nano banana 2 for
   stills), compress, drop into `public/media/characters/`.
3. Toby eyeballs the site in a real browser (pose swaps + wagon ride).
4. Phase 8 go-live: create public repo `tobyhqin.github.io`, push, Pages → GitHub Actions.

## Blocked on Toby

- Higgsfield OAuth login (blocks asset generation)
- Repo creation on github.com/tobyhqin (blocks deploy)

## Warnings / gotchas

- The desktop-app preview pane never fires IntersectionObserver and times out on
  screenshots — verify scroll behavior in a real browser, not the pane.
- One 404 per missing character asset in console is expected (fallback probing).
- Patrick Hand SC must stay `font-weight: 400`; h2 is inline-block for the wobbly
  underline (see session-1 notes).
