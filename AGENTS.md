# Black Badger Website — Project Contract (LOCAL)

Local rules for this repo. Global behavioral policy is NOT inlined here; it is fetched at
boot and signed (hash + nonce). This file is the local map only.

rules: mcp://localhost:8888/mcp/hermes/rules@1

## What this is
An avant-garde, premium single-page digital platform for Black Badger (James Thompson's design studio, Gothenburg), bridging high-end art gallery and raw industrial workshop (README.md). Built with Vite 8 + React 19 + Vanilla CSS (README.md:5).

## Non-negotiable (local)
- Stack is fixed: Vite 8 + React 19 + **Vanilla CSS** — no CSS framework, styling via custom properties and a bespoke design system (README.md:17-20).
- Signature UI systems must be preserved: `BlueprintGrid` (30px base grid wrapper), `ProvenanceCards`, and `LumeToggle` Day/Night toggle (README.md:24-26).
- Tests run under Vitest + Testing Library with a jsdom environment and shared setup file (`vite.config.js`: `test.globals`, `environment: 'jsdom'`, `setupFiles: './src/test/setup.js'`).
- Public production site — no indexation/auth restrictions documented in-repo.

## Commands
- `npm run dev` (Vite dev server, http://localhost:5173 per README.md:48)
- `npm run build`
- `npm run preview`
- `npm run test` (vitest run)

## Code graph
The repo is indexed in `.mex/graph.db`. First action on a task: `mex graph scope "<task>"`.
Never naive-grep the whole tree; expand nodes with `mex graph get <id> --detail source` and
check impact with `mex impact <symbol|file>`.

## Navigation
At session start read `.mex/ROUTER.md` + relevant `.mex/context/*` before acting. Update the
vault project card (10-Projects/Black Badger Website.md) when status/architecture changes.
