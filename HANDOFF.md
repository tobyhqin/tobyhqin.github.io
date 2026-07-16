# HANDOFF.md

> Rewritten at the end of every session. Describes the state of the repo *right now*.
> New session: read `AGENTS.md`, then `PLAN.md`, then this file.

**Last session:** 2026-07-16 — Hero/About copy + centered headshot favicon.
**SITE IS LIVE at https://tobyhqin.github.io**. The current revision is pushed to
`main` and deploys through GitHub Actions.

## Current state

- Five full-screen Calvin & Hobbes scene chapters remain exactly as contracted:
  Hero → About → Experience → Projects & Papers → Contact.
- Scene videos are all-intra H.264 MP4s. `SceneChapter.tsx` waits for decoded
  data, never replaces an in-flight seek, resumes from `seeked`, and uses a tiny
  media fragment so paused iOS video has an initial frame.
- Mobile Experience and Projects use `45svh` gaps between opaque panels. The
  sticky scene remains fully visible between cards, and the extra chapter height
  provides a longer touch-scrub runway.
- `scrollScrub.ts` owns scroll mapping, refresh-rate-independent smoothing, and
  the seek gate. Its tests cover mapping, clamping, smoothing, and seek gating.
- Experience is exactly: NC DECA, BFF of America, UCSC SIP, Cornell SC Johnson,
  and NCYSS, in that order. BFF's current impact bullet reports 10,000+ students,
  500,000+ social media impressions, and 5,000+ collected items. Its advocacy
  bullet describes an Allen Buansi proposal planned for introduction next year.
- Projects & Papers is exactly: FAFSA preprint (linked to SSRN), Cornell automatic-
  gratuity paper, NCYSS stormwater paper, ICE IGSA study, and NC DECA app. The app
  description is present tense and identifies 2,000+ users plus event selection
  across levels of competition.
- The Projects scene is translated `-18%` on desktop so Calvin and stuffed Hobbes
  sit fully left of the card columns.
- Michael Lynn's current official Cornell wording is reflected as Michael D.
  Johnson and Family Professor of Services Marketing Emeritus.
- Contact shows LinkedIn, GitHub, and Instagram as links on one row, then
  `toby@bffofamerica.org` as plain text with no `mailto:` link.
- Hero welcomes visitors to the portfolio. About identifies East Chapel Hill HS,
  NCSSM Online, NC DECA, BFF of America, UCSC research, Misty, and the gym.
- `public/favicon-headshot.png` is a centered 128×128 face crop from Toby's
  supplied headshot. Its new filename avoids stale browser favicon caches.

## Verification

- `npm test`: 5/5 passed.
- `npm run test:coverage`: 100% for `scrollScrub.ts` and `content.ts`.
- `npm run lint`: passed.
- `npm run build`: passed.
- `npm audit --audit-level=high`: 0 vulnerabilities.
- Agent-browser screenshots inspected for all five chapters at 1440×900 and
  375×812. No horizontal overflow, page errors, or console errors. Mobile scene
  gaps compute to 365.4px at the tested 812px viewport.
- Mobile timing sample produced 21 distinct video times during one smooth scroll,
  then settled exactly on target at `readyState = 4` with no pending seek.
- Reduced-motion check renders five posters, zero videos, and no hidden reveals.

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
