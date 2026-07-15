# PLAN.md — Personal Website Build Plan

Single long scroll page: **Hero → About → Experience → Projects & Papers → Contact**.
**Calvin & Hobbes comic theme** (decided 2026-07-15, replaces "clean minimal"): newsprint
paper, ink-line panels, hand lettering — and a pair of comic characters who accompany you
down the page, changing pose/activity per section (see "Character choreography" below).
Hosted on GitHub Pages at `tobyhqin.github.io` (username confirmed 2026-07-15).

## Character choreography (the core design idea)

A fixed, pointer-events-none `CharacterStage` layer shows the duo beside the content.
An IntersectionObserver watches sections; when a new section becomes active the pose
swaps (crossfade + slide, CSS transform/opacity only). Rough pose script:

| Section | Pose / activity |
|---|---|
| Hero | Duo tumbles/dances in beside the name (hero slot may be a video loop) |
| About | Tiger lounging; boy pointing up at the bio text |
| Experience | Duo rides the red wagon down the timeline as you scroll |
| Projects & Papers | Spaceman-style explorer investigating the cards |
| Contact | The two walk off into the snow, waving — "let's go exploring" |

Assets: transparent-background stills (WebP) generated with nano banana 2, plus 1–2
short Higgsfield video loops for the hero. Alpha-channel video is Chrome/Firefox-only
(VP9 webm); Safari needs HEVC-alpha or falls back to a still — doc this in HIGGSFIELD.md.
`prefers-reduced-motion`: single static pose, no swaps.

**Copyright note (open decision for Toby):** Calvin & Hobbes was never licensed;
publishing AI-generated images of the actual characters carries real infringement risk.
Safer: an original boy-and-tiger duo drawn in the same visual style. Architecture is
identical either way — decide before generating final assets (Phase 6).

Read `AGENTS.md` before touching code. Update `HANDOFF.md` at the end of every session.

## Status

- [x] Phase 0 — Workspace: Vite react-ts scaffold, three/@react-three/fiber/@react-three/drei
      installed, git init, build green, planning docs written. (2026-07-13)
- [x] Phase 1 — Theme & layout shell: C&H design tokens + five-section skeleton,
      build green, 375px OK. (2026-07-15)
- [x] Phase 2 — Content data model: `src/data/content.ts` from real resume. (2026-07-15)
- [x] Phase 3 — Static sections: Hero/About/Experience/Work/Contact. (2026-07-15)
- [x] Phase 4 — Hero: live 3D dropped per Toby; comic hero, character media carries it. (2026-07-15)
- [x] Phase 5 — Character choreography + scroll reveals: CharacterStage, pose swaps,
      wagon scroll ride, SVG stand-ins, reveal fail-safe. (2026-07-15)
- [x] Phase 6 — CLI verified+installed, media slots, docs/HIGGSFIELD.md.
      **Generation blocked on `higgsfield auth login` (Toby).** (2026-07-15)
- [x] Phase 7 — Deploy workflow: .github/workflows/deploy.yml. (2026-07-15)
- [ ] Phase 8 — Go live (manual gates with Toby)

## Phases

### Phase 1 — Theme & layout shell
Replace Vite demo (App.tsx, App.css, index.css, demo assets). Create `src/styles/global.css`
with **Calvin & Hobbes design tokens** (newsprint-cream paper, ink black, wagon-red accent,
hand-lettered heading font + hand-written body font via Google Fonts, wobbly comic-panel
border treatment, type/spacing scales), base typography, and the single-page section
skeleton in `App.tsx` (empty `<section>` per site section, minimal nav/footer).
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
`src/three/HeroScene.tsx`: R3F `<Canvas>` behind/beside the hero text. **Open question:
does live 3D still fit the 2D comic theme?** Candidates: comic-shaded low-poly red wagon
with mouse parallax, drifting paper panels — or drop R3F entirely and let the character
video loop carry the hero. Until decided, build a swappable comic-toned placeholder.
Keep the scene isolated in this one component so the final concept drops in without
touching anything else.
Static fallback + no animation under `prefers-reduced-motion`.
**Done when:** scene renders 60fps on desktop, page still builds and loads fast.

### Phase 5 — Character choreography + scroll reveals
The heart of the theme. One small `useInView`/`useActiveSection` hook (native
IntersectionObserver) drives both section reveals AND the `CharacterStage` pose swaps
per the choreography table above. Wagon ride in Experience = scroll-progress transform
(rAF, compositor-friendly). No animation libraries. `prefers-reduced-motion` = static.
Built against placeholder art first (simple ink-line SVG stand-ins) so it works before
any asset generation.
**Done when:** scrolling through the page visibly changes what the duo is doing.

### Phase 6 — Character assets: nano banana 2 stills + Higgsfield loops
`public/media/characters/` slots per pose (naming: `<section>-<pose>.webp`, video
`<slot>.webm`). `docs/HIGGSFIELD.md`: CLI install (**verify `@higgsfield/cli` on the npm
registry before any global install — unverified name, squatting risk**), auth, exact
generation prompts per pose/slot, and compression rules (short loops, target ≤5 MB per
file — GitHub Pages limits; never commit raw generated video).
Toby has a Higgsfield account (2026-07-15) and nano banana 2 access for stills.
Site must look finished with the SVG stand-ins if generation stalls.
**Done when:** every pose slot is filled or gracefully falls back.

### Phase 7 — Deploy workflow
`.github/workflows/deploy.yml` using official `actions/configure-pages` /
`actions/upload-pages-artifact` / `actions/deploy-pages` on push to `main`.
Vite `base` stays `/` (user site = domain root).
**Done when:** workflow file lints clean; can't test until the repo exists (Phase 8).

### Phase 8 — Go live (manual gates — walk Toby through, don't do for him)
1. ~~Toby finalizes his new GitHub username~~ → **`tobyhqin`** (2026-07-15).
2. Toby creates public repo named exactly `tobyhqin.github.io`.
3. Add remote, push `main`.
4. GitHub → Settings → Pages → Source: **GitHub Actions**.
5. Verify Actions run green and https://<username>.github.io loads.
**Done when:** site is live.

## Resolved inputs (2026-07-15)

| Item | Value |
|---|---|
| GitHub username | `tobyhqin` → repo `tobyhqin.github.io` |
| Display name | Toby Qin |
| Resume | `C:\Users\tobyh\Documents\Toby Qin - Official Resume.docx` (content extracted; use for Phase 2) |
| LinkedIn | https://www.linkedin.com/in/tobyq/ |
| ORCID | 0009-0007-8119-4386 |
| Instagram | https://instagram.com/toby.qin |
| GitHub | https://github.com/tobyhqin |
| Higgsfield | Account exists; CLI claimed to be `npm install -g @higgsfield/cli` — **verify on registry first** |
| Image generation | nano banana 2 available for character stills |

## Decisions from Toby (2026-07-15, session 3)

| Item | Decision |
|---|---|
| Copyright call | **Real Calvin & Hobbes imagery.** Risk was explained (unlicensed = higher exposure, not lower); Toby accepts it for a personal non-commercial site. |
| Public email | toby@bffofamerica.org |
| 3D hero | **Drop live R3F 3D.** Hero stays comic-themed; character media carries it. three/@react-three deps stay installed but unused for now (possible future easter egg). |

## Open items (need Toby's input)

| Item | Needed by |
|---|---|
| Papers format details (abstracts? BibTeX?) | Phase 2–3 |
| Custom favicon (current is Vite default) | Phase 6 |
