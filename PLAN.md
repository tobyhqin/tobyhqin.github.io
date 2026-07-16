# PLAN.md — Personal Website Build Plan

One long scroll page of **five full-screen Calvin & Hobbes scene chapters**:
Hero → About → Experience → Projects & Papers → Contact. The Design Contract in
`AGENTS.md` is the authority on theme/layout/content — read it first.

Live repo: https://github.com/tobyhqin/tobyhqin.github.io → https://tobyhqin.github.io

## The design in one paragraph

Each section is a chapter: a 5-second C&H scene video fills the viewport
(sticky, `object-fit: contain`; its cream background is color-matched to the page
paper so the whole screen reads as one comic page), the section title sits over it
in giant hand lettering, and the content — wobbly ink-bordered panels — scrolls
over the scene, hugging whichever side of the composition is empty. Scrolling
scrubs each all-intra MP4 forward or backward with a short eased catch-up so wheel
and touch deltas do not appear as hard frame jumps. Scenes: tumbling (hero), Hobbes
reading/Calvin pointing (about), red wagon downhill (experience), Spaceman Spiff
(work), walking into the snow (contact).

## Status

- [x] Phases 0–7 (2026-07-13 → 15): scaffold, C&H tokens, curated content model,
      sections, 3D wagon hero, deploy workflow, Higgsfield CLI verified+authed.
- [x] Character stills generated (nano banana 2) + processed. (2026-07-15)
- [x] ~~Nature redesign by other agent~~ — **reverted in full** (`b0dd06e`).
- [x] Scene-scroll redesign (this session, 2026-07-15): SceneChapter primitive,
      five Seedance/Gemini scene videos processed (initially VP9, later converted
      to all-intra H.264), per-chapter content alignment, corner CharacterStage retired.
      Verified with agent-browser screenshots per chapter.
- [x] **Phase 8 — Go live:** GitHub Pages deploys from Actions; site is live.
- [x] Scroll-scrub hardening (2026-07-16): all-intra H.264 scene assets, proper
      chapter runway, and time-based smoothing for forward/reverse scrubbing.
- [x] Content refresh (2026-07-16): five requested experience entries, FAFSA and
      Cornell, NCYSS, and ICE papers, the 2,000+ user NC DECA app, and plain-text
      contact email.
- [x] Mobile scene persistence (2026-07-16): seeks wait for decoded data and no
      longer overlap; large mobile panel gaps keep each sticky scene visible.
- [x] Custom centered headshot favicon and refreshed Hero/About copy (2026-07-16).

## Asset ledger (what exists, what's replaceable)

| Slot | Video | Poster | Note |
|---|---|---|---|
| hero | scenes/hero.mp4 (2.1 MB) | hero.webp | tumbling |
| about | scenes/about.mp4 (2.0 MB) | about.webp | reading/pointing idle |
| experience | scenes/experience.mp4 (2.7 MB) | experience.webp | wagon downhill |
| work | scenes/work.mp4 (1.8 MB) | work.webp | Spaceman Spiff idle |
| contact | scenes/contact.mp4 (2.4 MB) | contact.webp | **weakest** — model recomposed vs. still; Toby may regenerate later |

Source files (Toby's machine): `~/Downloads/<slot>video.mp4` + `<slot>image.png`.
Processing pipeline: docs/HIGGSFIELD.md (color-match bg → #fbf6ea, scale 1152,
all-intra H.264 for exact seeks, poster = frame 0).

## Open items

| Item | Needed by |
|---|---|
| Toby: real-iPhone sign-off on the mobile scrub after deployment | current revision |
| Optional: regenerate contact scene (see ledger) | post-launch |
| Cornell paper: link when a public preprint is available | post-launch |
