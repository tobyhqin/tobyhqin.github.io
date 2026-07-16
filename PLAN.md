# PLAN.md — Personal Website Build Plan

One long scroll page of **five full-screen Calvin & Hobbes scene chapters**:
Hero → About → Experience → Projects & Papers → Contact. The Design Contract in
`AGENTS.md` is the authority on theme/layout/content — read it first.

Live repo: https://github.com/tobyhqin/tobyhqin.github.io → https://tobyhqin.github.io

## The design in one paragraph

Each section is a chapter: a 5-second looping C&H scene video fills the viewport
(sticky, `object-fit: contain`; its cream background is color-matched to the page
paper so the whole screen reads as one comic page), the section title sits over it
in giant hand lettering, and the content — wobbly ink-bordered panels — scrolls
over the scene, hugging whichever side of the composition is empty. Scenes:
tumbling (hero, + 3D wagon accent), Hobbes reading/Calvin pointing (about), red
wagon downhill (experience), Spaceman Spiff (work), walking into the snow
(contact). Inspiration reference: motionsites.ai premium scroll landings — full-
bleed media, huge display type, numbered-chapter scrollytelling.

## Status

- [x] Phases 0–7 (2026-07-13 → 15): scaffold, C&H tokens, curated content model,
      sections, 3D wagon hero, deploy workflow, Higgsfield CLI verified+authed.
- [x] Character stills generated (nano banana 2) + processed. (2026-07-15)
- [x] ~~Nature redesign by other agent~~ — **reverted in full** (`b0dd06e`).
- [x] Scene-scroll redesign (this session, 2026-07-15): SceneChapter primitive,
      five Seedance/Gemini scene videos processed (color-matched, VP9, 0.7–4.3 MB
      + posters), per-chapter content alignment, corner CharacterStage retired.
      Verified with agent-browser screenshots per chapter.
- [ ] **Phase 8 — Go live:** Toby sets repo Settings → Pages → Source: "GitHub
      Actions". Everything else is already pushed.

## Asset ledger (what exists, what's replaceable)

| Slot | Video | Poster | Note |
|---|---|---|---|
| hero | scenes/hero.webm (3.0 MB) | hero.webp | tumbling; loops clean |
| about | scenes/about.webm (0.8 MB) | about.webp | reading/pointing idle |
| experience | scenes/experience.webm (4.2 MB) | experience.webp | wagon downhill |
| work | scenes/work.webm (0.8 MB) | work.webp | Spaceman Spiff idle |
| contact | scenes/contact.webm (1.9 MB) | contact.webp | **weakest** — model recomposed vs. still (added horizon/clouds); Toby may regenerate later; prompt constraints in docs/HIGGSFIELD.md |

Source files (Toby's machine): `~/Downloads/<slot>video.mp4` + `<slot>image.png`.
Processing pipeline: docs/HIGGSFIELD.md (color-match bg → #fbf6ea via ffmpeg
lutrgb, scale 1280, VP9 crf 41, poster = frame 0).

## Open items

| Item | Needed by |
|---|---|
| Toby: Pages → Source: GitHub Actions (only go-live blocker) | Phase 8 |
| Toby: real-browser scroll-through sign-off | Phase 8 |
| Optional: regenerate contact scene (see ledger) | post-launch |
| Custom favicon (still Vite default) | post-launch |
| Papers: venue/PDF links when published | post-launch |
