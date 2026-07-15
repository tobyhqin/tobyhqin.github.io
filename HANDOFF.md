# HANDOFF.md

> Rewritten at the end of every session. Describes the state of the repo *right now*.
> New session: read `AGENTS.md` first, then `PLAN.md`, then this.

**Last session:** 2026-07-15 — Phase 1 (theme & layout shell) + major direction pivot

## Current state

- **Design direction changed by Toby: Calvin & Hobbes comic theme.** Newsprint paper,
  ink panels, hand lettering, and a character duo that changes pose per section on
  scroll. Full choreography table + copyright caveat live in PLAN.md.
- Phase 1 done: `src/styles/global.css` (C&H design tokens, wobbly-panel treatment,
  reduced-motion floor), five-section skeleton in `App.tsx`, Google Fonts
  (Patrick Hand / Patrick Hand SC) in `index.html`. Vite demo files deleted.
- Verified: build green, dev server renders all sections, fonts load, no console
  errors, no horizontal overflow at 375px. (Browser-pane screenshots were timing out
  this session — verification done via DOM/computed-style checks; eyeball it next time.)
- Most content inputs are resolved (username `tobyhqin`, links, resume path/content) —
  see PLAN.md "Resolved inputs".
- `.claude/launch.json` added (`dev` = `npm run dev` on :5173) for browser preview.
- No GitHub remote yet (repo will be `tobyhqin.github.io`, Phase 8).

## Next step

**Phase 2 (PLAN.md): content data model** — `src/data/content.ts` typed content from
Toby's real resume (extracted content is summarized in PLAN "Resolved inputs"; source
docx at `C:\Users\tobyh\Documents\Toby Qin - Official Resume.docx`).

## Blocked on Toby (see PLAN.md "Open items")

- Copyright call: actual C&H characters vs. original boy-and-tiger look-alike (Phase 6)
- Public email for Contact section (resume only has school email)
- Keep live 3D hero or let character video carry the hero (Phase 4)

## Warnings / gotchas

- `@higgsfield/cli` npm package name is unverified — check the registry (publisher,
  repo link, downloads) before any global install (Phase 6). Toby has an account;
  login/auth is his manual step.
- Never bold the Patrick Hand SC face (`font-weight: 400` is set on headings —
  browser-synthesized bold distorts it).
- h2 elements use `display: inline-block` for the wobbly underline — keep them the
  only inline-level child of their row or the border stretches oddly.
