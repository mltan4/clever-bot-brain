## Goal

A single-page web app that presents two decks ("Shopify AI Self-Review Agent" and "WorkOS") with a persistent top nav to switch between them, keyboard + button navigation, slide counter, and progress indicator. Clean modern dark theme, no inner scrolling — each slide fits the viewport.

## Routes

- `/` — redirects to `/shopify/1`
- `/shopify/$slide` — Shopify deck
- `/workos/$slide` — WorkOS deck

Top nav is rendered in `__root.tsx` and is always visible. Active deck is highlighted.

## Layout

```
┌────────────────────────────────────────────────┐
│  Top nav: [Shopify] [WorkOS]      3 / 7        │
├────────────────────────────────────────────────┤
│  Progress bar (thin, accent color)             │
├────────────────────────────────────────────────┤
│                                                │
│             SLIDE CONTENT (fills)              │
│                                                │
├────────────────────────────────────────────────┤
│  ◀ Prev                              Next ▶    │
└────────────────────────────────────────────────┘
```

- Fixed viewport height (`h-screen`, `overflow-hidden`).
- Slides scale-to-fit using a 1920×1080 inner canvas with CSS `transform: scale()` so layout never breaks at different window sizes and content never scrolls.
- Keyboard: `←` prev, `→` next, looping disabled (clamped).

## Design system

Dark theme tokens added to `src/styles.css` (oklch):
- Background: near-black with subtle blue tint
- Foreground: off-white
- Accent: electric indigo / cyan for highlights, progress bar, highlighted chart bar
- Muted card surface for content blocks
- Mono font (JetBrains Mono via Google Fonts) for the terminal/CLI block on Shopify slide 3
- Sans (Inter) for everything else

## Files to create

- `src/routes/__root.tsx` — add top nav (deck switcher), counter, progress bar, prev/next footer wrapper around `<Outlet />`. Hook up arrow-key listener via `useEffect`.
- `src/routes/index.tsx` — `<Navigate to="/shopify/1" />`
- `src/routes/shopify.$slide.tsx` — reads `slide` param, renders the matching slide component, sets per-slide `head()` title.
- `src/routes/workos.$slide.tsx` — same pattern.
- `src/decks/shopify/index.ts` — array of 7 slide components + deck metadata (title, total).
- `src/decks/shopify/Slide1.tsx` … `Slide7.tsx` — one file per slide, content per spec.
- `src/decks/workos/index.ts` + `Slide1.tsx` … `Slide7.tsx` — same.
- `src/components/SlideFrame.tsx` — 1920×1080 canvas + scale-to-fit wrapper.
- `src/components/deck-ui/` — small shared primitives: `Chip`, `Card`, `Callout`, `StatBlock`, `Terminal` (for slide 3), `BarChart` (simple SVG, for Shopify slide 6), `PipelineFlow` (for WorkOS slide 3), `VerticalSteps` (WorkOS slide 6).
- `src/hooks/useDeckNavigation.ts` — current deck/slide, next/prev handlers, keyboard binding.

## Slide content

Each slide is built exactly per the spec in the brief (headings, bullet counts, callouts, chips, cards, columns, metrics). No content invented beyond what's specified. The bar chart on Shopify slide 6 highlights the "With AI self-review ~1.5 days" bar in the accent color; the other 3 bars in muted.

## Navigation behavior

- `useEffect` in `__root.tsx` adds `keydown` listener; uses `useNavigate` + current `useLocation` to compute next/prev within the active deck (clamped 1..7).
- Switching decks via top nav navigates to `/<deck>/1`.
- Counter and progress bar derive from the URL.

## Out of scope

- No persistence, no backend, no auth.
- No real images — pure CSS/SVG visuals (terminal mock, bar chart, pipeline flow).
- No animation beyond simple transitions on progress bar and hover states.
