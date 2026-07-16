# HIGGSFIELD.md — scene asset generation

> **CURRENT PIPELINE (2026-07-16, scroll-scrub design):** assets are full-screen
> scene videos in `public/media/scenes/<section>.mp4` + `.webp` poster.
> 1. Toby generates a 16:9 still (nano banana 2) and a 5 s cyclic video from it
>    (Gemini Omni / Seedance). Prompt constraints that matter: first frame =
>    exactly the input still (no fade-in from black), static camera, characters
>    anchored in place, steady ~2 s motion cycle, background unchanged.
> 2. Processing: sample bg
>    at (10,10) of frame 0 → ffmpeg `lutrgb` gains to map bg → `#fbf6ea` →
>    `scale=1152:-2`, `-an`, then all-intra H.264 (`-c:v libx264 -g 1
>    -keyint_min 1 -sc_threshold 0 -pix_fmt yuv420p -movflags +faststart`). Tune
>    CRF until ≤5 MB/file. Every frame must be a keyframe so scroll seeks land
>    immediately; export frame 0 as the `.webp` poster.
> 3. Drop into `public/media/scenes/`, verify with agent-browser, commit.
>
> Everything below is the older corner-character workflow — superseded, kept for
> the CLI setup notes and prompt language.

# (superseded) character asset generation

How the Calvin & Hobbes character assets get made and installed. The site works
without any of these (ink-line SVG stand-ins render instead), so this can be done
incrementally.

**Copyright status:** Toby decided (2026-07-15) to use real Calvin & Hobbes imagery,
after the infringement risk was explained (the strip was never licensed; this is a
personal, non-commercial site).

## Setup (done / remaining)

- [x] `@higgsfield/cli` verified on npm (official higgsfield-ai publisher, inspected
      tarball — clean binary-downloader) and installed globally (2026-07-15).
      Binaries: `higgsfield`, `higgs`, `hf`.
- [ ] **Toby: run `higgsfield auth login`** (browser OAuth) — blocks all generation.
- [ ] `hf workspace list` → `hf workspace set <id>` after login.
- [ ] Check credits: `hf account status`.

## Asset slots

All files land in `public/media/characters/`. The `CharacterStage` component tries
`<section>.webm` (hero only), then `<section>.webp`, then falls back to the SVG stand-in.
Transparent or plain-cream (#fbf6ea) backgrounds only — the page background is cream.

| File | Content |
|---|---|
| `hero.webm` + `hero.webp` poster | Calvin & Hobbes tumbling/dancing in, short seamless loop (2–4 s) |
| `about.webp` | Hobbes lounging reading; Calvin pointing up |
| `experience.webp` | Both in the red wagon, mid-descent, terrified-gleeful |
| `work.webp` | Spaceman Spiff pose, investigating |
| `contact.webp` | The two walking away through snow, waving (final-strip vibe) |

## Generation workflow (division of labor decided 2026-07-15)

- **Stills: Toby generates them in nano banana 2** using the prompts below, then hands
  the files over (any folder path works).
- **Video: Claude generates via Higgsfield CLI** (authenticated 2026-07-15, workspace
  `Private`, free plan — **10 credits**; check `hf generate cost` before running jobs):
  1. `hf upload` Toby's hero still → get `upload_id`.
  2. `hf model list --video` → pick an image-to-video model within credit budget.
  3. `hf generate create <model> --prompt "<hero motion prompt>" --image <upload_id>`.
  4. `hf generate wait <job_id>`, download, compress (below).

### Prompt template (append the per-slot action)

> Calvin and Hobbes in the classic Bill Watterson pen-and-ink comic strip style,
> clean black ink linework, flat watercolor-style color, plain solid cream background
> (#fbf6ea), full body, no panel border, no text, no speech bubbles. ACTION: …

Per-slot actions:
- **hero:** "Calvin and Hobbes tumbling head over heels in a gleeful tangle, arms and legs flying"
- **about:** "Hobbes lying on his back lazily reading a book while Calvin stands pointing upward excitedly"
- **experience:** "Calvin and Hobbes racing downhill in a red wagon, Calvin steering, Hobbes gripping the sides"
- **work:** "Calvin as Spaceman Spiff in his red spacesuit and goggles, peering curiously at something off-screen"
- **contact:** "Calvin and Hobbes seen from behind, walking away together through fresh snow, Calvin waving back over his shoulder"

## Post-processing (GitHub Pages limits: keep each file ≤5 MB, never commit raw video)

- Stills → WebP with transparency where possible:
  `magick input.png -fuzz 4% -transparent "#fbf6ea" -resize 800x800 output.webp`
  (or leave the cream background — it matches the page)
- Hero loop → VP9 WebM, short + small:
  `ffmpeg -i raw.mp4 -t 4 -an -c:v libvpx-vp9 -b:v 0 -crf 40 -vf scale=720:-2 hero.webm`
  Alpha video (VP9 + `-pix_fmt yuva420p`) plays in Chrome/Firefox only; Safari gets the
  `hero.webp` poster via the `onError`/poster fallback — acceptable.
- Sanity-check size: everything in `public/media/` should total well under 20 MB.

## Verify

Drop files in, `npm run dev`, scroll each section: pose swaps, no 404 spam in console
(one failed probe per missing asset is expected — that's the fallback working).
