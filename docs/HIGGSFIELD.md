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
- [x] CLI authentication works for the `bffofamerica@gmail.com` account.
- [x] Private workspace selected: `b3183bbf-b803-438a-b3d8-2eb2672a02fa`.
- [ ] Seedance 2.0 entitlement sync: the CLI currently reports `plus` / 10 credits
      and rejects the model with `free_trial_model_requires_plan`; Toby must resolve
      this before the five jobs can run.

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

## Seedance 2.0 generation workflow (Session 6)

- **Stills: Toby generates them in nano banana 2** using the prompts below, then hands
  the files over (any folder path works).
- **Video: run Seedance 2.0 through the authenticated Higgsfield CLI.** The installed
  launcher is `higgsfield` (aliases are `higgs` and `hf`; on this Windows shell there
  is no separate `hf` shim). Check the params first:

  `higgsfield model get seedance_2_0`

  The CLI quirk is important: numeric-looking string params can mis-parse. Omit
  optional numeric flags and use the model defaults (720p, 5 seconds) rather than
  passing values such as `--resolution "768"`. Local paths are auto-uploaded, so each
  job can use its original high-resolution Downloads still directly:

  `higgsfield generate create seedance_2_0 --prompt "<slot prompt>" --start-image "C:\Users\tobyh\Downloads\<slot>image.png"`

  Then wait for each result:

  `higgsfield generate wait <job_id>`

  Source stills: `heroimage.png`, `aboutimage.png`, `experienceimage.png`,
  `workimage.png`, `contactimage.png` in `C:\Users\tobyh\Downloads`.

### Prompt template (append the per-slot action)

> Calvin and Hobbes in the classic Bill Watterson pen-and-ink comic strip style,
> clean black ink linework, flat watercolor-style color, plain solid cream background
> (#fbf6ea), full body, no panel border, no text, no speech bubbles. ACTION: …

Append to every slot prompt: the first frame must exactly equal the supplied start
image, with no fade-in from black or transition; use a locked-off static camera and
fixed framing; keep the characters anchored in place and the background unchanged;
animate only a steady, readable motion cycle of roughly two seconds designed to loop
cleanly.

Per-slot actions:
- **hero:** "Calvin and Hobbes tumbling head over heels in a gleeful tangle, arms and legs flying"
- **about:** "Hobbes lying on his back lazily reading a book while Calvin stands pointing upward excitedly"
- **experience:** "Calvin and Hobbes racing downhill in a red wagon, Calvin steering, Hobbes gripping the sides"
- **work:** "Calvin as Spaceman Spiff in his red spacesuit and goggles, peering curiously at something off-screen"
- **contact:** "Calvin and Hobbes seen from behind, walking away together through fresh snow, Calvin waving back over his shoulder"

## Post-processing (GitHub Pages limits: keep each file ≤2 MB, never commit raw video)

- Stills → WebP with transparency where possible:
  `magick input.png -fuzz 4% -transparent "#fbf6ea" -resize 800x800 output.webp`
  (or leave the cream background — it matches the page)
- Each result → trim to a stable loop or ping-pong it, color-match the plain background
  to `#fbf6ea` with an ffmpeg `lutrgb` filter, then encode muted VP9 WebM at no more
  than 600px wide and target ≤2 MB:

  `ffmpeg -i raw.mp4 -vf "trim=duration=4,setpts=PTS-STARTPTS,lutrgb=r='val*1.02':g='val*1.00':b='val*0.93',scale=600:-2" -an -c:v libvpx-vp9 -b:v 0 -crf 44 -deadline good -row-mt 1 output.webm`

  Use a ping-pong input when a forward-only clip does not close cleanly. Alpha video
  (VP9 + `-pix_fmt yuva420p`) plays in Chrome/Firefox only; Safari gets the matching
  still poster via the `onError`/poster fallback — acceptable.
- Sanity-check size: everything in `public/media/` should total well under 20 MB.

## Verify

Drop files in, `npm run dev`, scroll each section: pose swaps, no 404 spam in console
(one failed probe per missing asset is expected — that's the fallback working).
