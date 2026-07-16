# HANDOFF.md

> Rewritten at the end of every session. Describes the state of the repo *right now*.
> New session: read `AGENTS.md`, then `PLAN.md`, then this file.

**Last session:** 2026-07-16 — eased scene scrubbing + curated content refresh.
**SITE IS LIVE at https://tobyhqin.github.io**, but this session's commit is local
until Toby explicitly approves a push.

## Current state

- Five full-screen Calvin & Hobbes scene chapters remain exactly as contracted:
  Hero → About → Experience → Projects & Papers → Contact.
- Scene videos are all-intra H.264 MP4s. Scroll still controls video time in both
  directions, but `SceneChapter.tsx` now eases toward the target over successive
  animation frames instead of hard-seeking once per wheel/touch delta.
- `scrollScrub.ts` owns both the scroll mapping and refresh-rate-independent
  smoothing. `test/scrollScrub.test.ts` covers mapping, clamping, and smoothing.
- Experience is exactly: NC DECA, BFF of America, UCSC SIP, Cornell SC Johnson,
  and NCYSS, in that order. Counts reflect Toby's 2026-07-16 Common App update.
- Projects & Papers is exactly: FAFSA preprint (linked to SSRN), Cornell automatic-
  gratuity paper, NC DECA app, NC DECA Blueprint/mentorship hub, and BFF personal-
  finance app.
- Michael Lynn's current official Cornell wording is reflected as Michael D.
  Johnson and Family Professor of Services Marketing Emeritus.
- Contact shows LinkedIn, GitHub, ORCID, and Instagram as links, then
  `toby@bffofamerica.org` as plain text with no `mailto:` link.

## Verification

- `npm test`: 3/3 passed.
- `npm run test:coverage`: 100% for `scrollScrub.ts`.
- `npm run lint`: passed.
- `npm run build`: passed.
- Agent-browser screenshots inspected for all five chapters at 1440×900 and
  375×812. No horizontal overflow or page errors; all five videos reached
  `readyState = 4`.
- Live timing sample: a wheel-sized hero jump produced 23 intermediate video
  times over 24 animation frames, monotonically approaching the target.
- Reduced-motion check renders five posters and zero videos.

## Deploy gotchas

- Pages source must remain **GitHub Actions**.
- Keep `.github/workflows/deploy.yml` on `npm install`; the Windows-generated
  lockfile previously caused missing Linux rolldown transitive dependencies with
  `npm ci`.
- Verify deploys under the workflow named **Deploy to GitHub Pages**.

## Warnings

- Do not re-theme, re-layout, or import the rest of the Common App activity list.
- Keep `--paper #fbf6ea`; scene backgrounds are color-matched to it.
- Use agent-browser for visual verification; the desktop-app preview renderer is
  not reliable for this site.
