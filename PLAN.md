# PLAN.md — Personal Website Build Plan

Single long scroll page: **Hero → About → Experience → Projects & Papers → Contact**.
Clean minimal light design. Live R3F 3D hero + Higgsfield-generated media accents.
Hosted on GitHub Pages at `<username>.github.io` (username TBD — Toby is renaming his account).

Read `AGENTS.md` before touching code. Update `HANDOFF.md` at the end of every session.

## Status

- [x] Phase 0 — Workspace: Vite react-ts scaffold, three/@react-three/fiber/@react-three/drei
      installed, git init, build green, planning docs written. (2026-07-13)
- [ ] Phase 1 — Theme & layout shell
- [ ] Phase 2 — Content data model
- [ ] Phase 3 — Static sections
- [ ] Phase 4 — Hero 3D scene
- [ ] Phase 5 — Scroll reveals & motion polish
- [ ] Phase 6 — Higgsfield media slots + generation doc
- [ ] Phase 7 — Deploy workflow
- [ ] Phase 8 — Go live (manual gates with Toby)

## Phases

### Phase 1 — Theme & layout shell
Replace Vite demo (App.tsx, App.css, index.css, demo assets). Create `src/styles/global.css`
with light-theme design tokens (background near-white, one accent color, type scale,
spacing scale), base typography, and the single-page section skeleton in `App.tsx`
(empty `<section>` per site section, nav/footer optional-minimal).
**Done when:** dev server shows a styled empty page shell, build green.

### Phase 2 — Content data model
`src/data/content.ts`: typed content for the whole site — `bio`, `experience[]`,
`works[]` (projects and papers share one type; papers use optional `venue`, `paperUrl`,
`orcid` fields), `links` (LinkedIn, ORCID, Instagram). Fill with clearly-marked
placeholder content shaped like a real resume until Toby provides the real thing
(resume file path + pasted content — see Open items).
**Done when:** all section content comes from this one file.

### Phase 3 — Static sections
`src/sections/` — `Hero.tsx` (text layer only for now), `About.tsx`, `Experience.tsx`
(timeline list), `Work.tsx` (project/paper cards), `Contact.tsx` (links + email).
No motion yet. Semantic HTML, accessible headings.
**Done when:** full page reads well top-to-bottom with placeholder content, mobile 375px OK.

### Phase 4 — Hero 3D scene
`src/three/HeroScene.tsx`: R3F `<Canvas>` behind/beside the hero text. Hero **concept is
Toby's open decision** — until then build a swappable abstract-geometric placeholder
(light-toned floating forms, subtle mouse parallax). Keep the scene isolated in this one
component so the final concept drops in without touching anything else.
Static fallback + no animation under `prefers-reduced-motion`.
**Done when:** scene renders 60fps on desktop, page still builds and loads fast.

### Phase 5 — Scroll reveals & motion polish
One small `useInView` hook (native IntersectionObserver) + CSS transitions for section
reveals. No animation libraries. Respect `prefers-reduced-motion` everywhere.
**Done when:** scrolling feels alive, Lighthouse perf stays high.

### Phase 6 — Higgsfield media slots + generation doc
`public/media/` placeholder slots where generated assets will live. `docs/HIGGSFIELD.md`:
account signup, CLI install/auth, the exact generation prompts per slot, and compression
rules (short loops, H.264/AV1, target ≤5 MB per file — GitHub Pages limits).
**Higgsfield account creation, credit purchase, and generation runs are manual — Toby does
them.** Site must look finished without these assets.
**Done when:** doc is followable start-to-finish and every slot has a graceful placeholder.

### Phase 7 — Deploy workflow
`.github/workflows/deploy.yml` using official `actions/configure-pages` /
`actions/upload-pages-artifact` / `actions/deploy-pages` on push to `main`.
Vite `base` stays `/` (user site = domain root).
**Done when:** workflow file lints clean; can't test until the repo exists (Phase 8).

### Phase 8 — Go live (manual gates — walk Toby through, don't do for him)
1. Toby finalizes his new GitHub username.
2. Toby creates public repo named exactly `<username>.github.io`.
3. Add remote, push `main`.
4. GitHub → Settings → Pages → Source: **GitHub Actions**.
5. Verify Actions run green and https://<username>.github.io loads.
**Done when:** site is live.

## Open items (need Toby's input)

| Item | Needed by |
|---|---|
| New GitHub username | Phase 7–8 |
| Resume file path (or pasted content) + display name + public email | Phase 2 |
| LinkedIn / ORCID / Instagram URLs | Phase 2 |
| Hero visual concept decision | Phase 4 (placeholder until then) |
| Higgsfield account + credits | Phase 6 (placeholders until then) |
| Papers format details (abstracts? BibTeX?) | Phase 2–3 |
