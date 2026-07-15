# HIGGSFIELD.md — character asset generation

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

## Generation workflow

1. `hf model list` / `hf model list --video` — pick current best image + video models.
2. Stills: `hf generate create <image-model> --prompt "<prompt below>"`.
   Video: generate the hero still first, `hf upload` it, then image-to-video with
   `--image <upload_id>` for a consistent loop.
3. `hf generate wait <job_id>` then download the result.
4. Alternative for stills: nano banana 2 (Toby has access) — same prompts.

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
