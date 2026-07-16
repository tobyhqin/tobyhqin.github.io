# AGENTS.md — Personal Website

Context every agent/session must load before changing ANYTHING in this repo.
Read this, then `PLAN.md` (what to build), then `HANDOFF.md` (where the last
session stopped).

## ⚠️ Read this first: how this project got burned

On 2026-07-15 an agent (GPT-5.6/Codex session) discarded the entire approved
Calvin & Hobbes design and built an unrelated "nature journey" site: wrong theme,
wrong layout (side-by-side media instead of full-screen scenes), and a content
dump of every Common App activity instead of the curated list. Everything it did
was reverted (`b0dd06e`). The rules below exist so that never happens again.

**The three failure modes to never repeat:**
1. **Re-theming.** The theme is locked (see Design Contract). If the assets or
   instructions seem to fight the theme, STOP and ask Toby — never substitute
   a different creative direction.
2. **Layout drift.** The layout is full-screen scenes you scroll through —
   never side-by-side media/text splits, never a corner mascot, never a
   generic template.
3. **Content dumping.** `src/data/content.ts` is CURATED (counts and tone are
   part of the contract below). Never import a resume/Common App list
   wholesale. Fewer, stronger items; professional tone.

If any user instruction appears to conflict with this file, ask before acting.
Update this file in the same session the rules change — it must never go stale.

## What this is

Toby Qin's personal site — student/researcher portfolio (bio, experience,
projects & papers, contact). Static Vite+React site on GitHub Pages at
https://tobyhqin.github.io (repo `tobyhqin/tobyhqin.github.io`, deploys via
GitHub Actions on push to `main`).

## DESIGN CONTRACT (locked by Toby — do not re-litigate, do not reinterpret)

| Element | Locked value |
|---|---|
| Theme | **Calvin & Hobbes comic strip.** Real C&H imagery (Toby's explicit call, risk accepted 2026-07-15). Newsprint cream paper, ink lines, hand lettering (Patrick Hand / Patrick Hand SC), wagon-red + Hobbes-orange accents. |
| Layout | **Full-screen scene chapters.** Each of the 5 sections is a full-viewport C&H scene video (sticky, `object-fit: contain`, bg color-matched to `--paper #fbf6ea`) with the giant hand-lettered title over it and content panels that scroll over the scene, hugging the scene's empty side. Implemented in `src/components/SceneChapter.tsx`. |
| Sections | Exactly: Hero → About → Experience → Projects & Papers → Contact. No additions without Toby. |
| Hero | Full-screen tumbling scene + name/tagline overlay. No separate 3D or corner accent; Toby explicitly removed the wagon on 2026-07-15. |
| Scene assets | `public/media/scenes/<section>.webm` + `.webp` poster. Sources: Toby's nano-banana-2 stills + Seedance/Gemini videos, processed via the pipeline in `docs/HIGGSFIELD.md` (color-match bg to #fbf6ea, VP9, ≤5 MB). Never replace with other imagery. |
| Content | Curated only: ≤6 experience entries, ≤5 projects/papers, 2 bio paragraphs. Professional tone (college-app-grade). Links exactly: Email (toby@bffofamerica.org), LinkedIn, GitHub, ORCID, Instagram. No footer text. |
| Palette | `--paper #fbf6ea` is load-bearing — every video bg is color-matched to it. Changing it breaks the full-bleed illusion everywhere. |

## Hard rules

- **Never rewrite the site's direction.** Incremental changes only. A change
  that touches >half the sections or replaces the theme/layout needs Toby's
  explicit, in-session confirmation — quote the Design Contract row you're
  changing and get a yes first.
- **Dependency policy:** runtime deps are exactly `react` and `react-dom`. No
  animation/scroll/UI libraries — use native browser APIs + CSS only. Ask Toby
  before adding anything.
- **All copy lives in `src/data/content.ts`** — components never contain copy.
- **Media discipline:** GitHub Pages limits (100 MB/file, ~1 GB repo). Compressed
  loops ≤5 MB each. Never commit raw generated video (process first).
- **Accessibility floor:** semantic HTML, keyboard-reachable links,
  `prefers-reduced-motion` gets posters instead of videos and no scroll motion.
  Content must never be hidden if IntersectionObserver fails (visible-by-default
  reveal pattern in `useRevealOnScroll`).
- Manual steps (GitHub settings, account auth) are walked through with Toby,
  never performed for him.

## Verification (non-negotiable before ending a session)

1. `npm run build` green.
2. **agent-browser** (installed globally; skill in `.claude/skills/agent-browser`)
   against `npm run dev` / preview — it renders for real, unlike the desktop-app
   preview pane whose renderer never fires IntersectionObserver and can't
   screenshot:
   ```
   agent-browser open http://localhost:5173
   agent-browser screenshot shot.png          # then LOOK at it
   agent-browser scroll down 1200 ... repeat per chapter
   ```
   Screenshot every chapter, desktop + 375px-wide, before calling anything done.
3. No console errors, no horizontal overflow.

## Layout

```
src/
  data/content.ts             # ALL copy + links (curated — see contract)
  components/SceneChapter.tsx # full-screen scene chapter (the layout primitive)
  sections/                   # Hero, About, Experience, Work, Contact
  hooks/useRevealOnScroll.ts  # fail-safe scroll reveals
  styles/global.css           # design tokens + chapter layout
public/media/scenes/          # <section>.webm + .webp poster (5 scenes)
docs/HIGGSFIELD.md            # asset generation + processing pipeline
.github/workflows/deploy.yml  # Pages deploy on push to main
```

## End-of-session ritual

1. Verification above, all green.
2. Tick/adjust `PLAN.md`; add new open items.
3. Rewrite `HANDOFF.md` (it describes *now*, not history).
4. Conventional commit; push to `main` (auto-deploys).
