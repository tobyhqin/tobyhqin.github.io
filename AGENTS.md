# AGENTS.md — Personal Website

Context every agent/session must have before changing anything in this repo.
Read this, then `PLAN.md` (what to build, in what order), then `HANDOFF.md`
(where the last session left off).

## What this is

Toby's personal website: bio, background, experience, and the projects & papers he's
working on. One long scrolling page with a 3D hero. Deployed as a **static site** on
GitHub Pages at `<username>.github.io`.

## Locked decisions (from the planning interview — do not re-litigate)

| Decision | Value |
|---|---|
| Stack | Vite + React + TypeScript |
| 3D | Hybrid: live three.js via @react-three/fiber + drei, plus Higgsfield-generated media assets |
| Structure | Single long scroll page: Hero → About → Experience → Projects & Papers → Contact |
| Design | **Calvin & Hobbes comic theme** (Toby's decision 2026-07-15, supersedes "clean minimal"): newsprint paper, ink panels, hand lettering, character duo that changes pose/activity per section on scroll — see PLAN.md "Character choreography" |
| Hosting | GitHub Pages user site `tobyhqin.github.io`, deployed by GitHub Actions from `main`; Vite `base: '/'` |
| Projects & papers | One combined section; shared card type with optional paper fields (venue, paperUrl) |
| Contact links | LinkedIn, ORCID, Instagram |

## Placeholder policy (things intentionally TBD)

Username is **`tobyhqin`** (confirmed 2026-07-15); most content inputs are now resolved —
see PLAN.md "Resolved inputs". Still TBD: public email, C&H-vs-lookalike copyright call,
3D-hero keep/drop, favicon. Use clearly-marked placeholders (`TODO(toby): ...`) for those
and keep them listed in PLAN.md "Open items". Real content lands in
`src/data/content.ts` only — components never contain copy.

## Hard rules

- **Dependency policy:** allowed runtime deps are exactly `react`, `react-dom`, `three`,
  `@react-three/fiber`, `@react-three/drei`. No animation/scroll/UI libraries — use
  native IntersectionObserver + CSS. Adding any dep requires asking Toby first.
- **Higgsfield:** Toby has an account (2026-07-15) and OK'd CLI generation. Before any
  `npm install -g @higgsfield/cli`, verify the package on the npm registry (publisher,
  downloads, repo link) — unverified global installs are a squatting vector. Auth/login
  is still Toby's manual step. Code against placeholder assets in `public/media/`; the
  workflow lives in `docs/HIGGSFIELD.md` (Phase 6).
- **GitHub Pages limits:** 100 MB max per file, ~1 GB repo soft cap. Media must be
  compressed short loops (target ≤5 MB each). Never commit raw generated video.
- **Accessibility floor:** semantic HTML, keyboard-reachable links, `prefers-reduced-motion`
  disables parallax/scroll motion and autoplaying media; the 3D canvas has a static fallback.
- **All site content flows from `src/data/content.ts`** — one typed file, sections render it.
- The 3D hero lives only in `src/three/HeroScene.tsx` so the (undecided) final concept
  can be swapped in without touching the rest of the site.
- Manual steps (repo creation, Pages settings, DNS, Higgsfield) are walked through with
  Toby, never performed for him.

## Layout

```
src/
  data/content.ts      # ALL copy + links (Phase 2)
  sections/            # Hero, About, Experience, Work, Contact (Phase 3)
  three/HeroScene.tsx  # the only R3F scene (Phase 4)
  styles/global.css    # design tokens + base styles (Phase 1)
public/media/          # Higgsfield asset slots (Phase 6)
docs/HIGGSFIELD.md     # manual generation workflow (Phase 6)
```

## Verify before ending any session

`npm run build` green, then eyeball `npm run preview` in the browser (desktop + 375px
mobile width, no console errors).

## End-of-session ritual

1. Build green (above).
2. Tick/adjust phase status in `PLAN.md`; add any new open items.
3. Rewrite `HANDOFF.md` (it describes *now*, not history).
4. Commit with a conventional message (`feat:`, `fix:`, `docs:`, `chore:`).
