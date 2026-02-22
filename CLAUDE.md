# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

No test framework is currently configured.

## Architecture

**Stash Panda Tag** is a Next.js App Router application for generating and printing DYMO file folder labels. Users enter a location code, the app generates a label ID, and opens a popup print window.

### Key flows

1. **Label generation** (`app/page.tsx` → `app/components/card-generate-new-label.tsx`): User inputs a location, app generates an ID in format `{LOCATION}-{YYYYMMDD}-{HHMMSS}` (via `app/lib/generate-label-id.ts`), then opens `/label?id={labelId}` in a popup.

2. **Label printing** (`app/label/page.tsx`): Receives `id` via query param, renders the label at exact DYMO file folder dimensions (3.4375" × 0.5625"), auto-calls `window.print()` on load, and closes the popup after printing.

### Routes

| Route | Purpose |
|-------|---------|
| `/` | Home — label generation form |
| `/label?id=...` | Print preview — opens as popup |
| `/settings` | Referenced in nav but not yet implemented |

### State and persistence

- No database is active yet — Prisma + `@prisma/adapter-better-sqlite3` are installed but no `schema.prisma` exists
- `localStorage` is used for `lastLocation` (prefill) and `visited` (intro modal shown flag)

### Print styling

Print-specific CSS lives in `app/globals.css`. The label renders at exactly 3.4375" × 0.5625" using Segoe UI Bold 24px. Do not alter these dimensions without testing on a DYMO printer.

### DYMO integration

The DYMO Connect Framework is vendored at `app/vendor/dymo/dymo.connect.framework.js`. It is loaded client-side; the `"use client"` directive is required on any component that touches it.

### Component conventions

- Client components are marked with `"use client"` at the top
- Styling uses Tailwind CSS + DaisyUI component classes
- Path alias `@/*` maps to the repo root
