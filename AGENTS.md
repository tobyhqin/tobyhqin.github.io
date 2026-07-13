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
| Design | Clean minimal **light** — near-white background, restrained type, whitespace, 3D as accent (not dark/cinematic, not playful) |
| Hosting | GitHub Pages user site, deployed by GitHub Actions from `main`; Vite `base: '/'` |
| Projects & papers | One combined section; shared card type with optional paper fields (venue, paperUrl) |
| Contact links | LinkedIn, ORCID, Instagram |

## Placeholder policy (things intentionally TBD)

Toby is renaming his GitHub account — **`<username>` is a placeholder everywhere**;
never hardcode an account name. Also TBD: display name, public email, link URLs, real
resume content, hero visual concept. Use clearly-marked placeholders (`TODO(toby): ...`)
and keep them all listed in PLAN.md "Open items". Real content lands in
`src/data/content.ts` only — components never contain copy.

## Hard rules

- **Dependency policy:** allowed runtime deps are exactly `react`, `react-dom`, `three`,
  `@react-three/fiber`, `@react-three/drei`. No animation/scroll/UI libraries — use
  native IntersectionObserver + CSS. Adding any dep requires asking Toby first.
- **Higgsfield is a manual gate.** Toby has no account yet. Never attempt signup, auth,
  or generation calls. Code against placeholder assets in `public/media/`; the human
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
