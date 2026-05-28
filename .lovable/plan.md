## Merge Slide 07 (Ideas table) and Slide 08 (Three Tracks) into a single slide

### Changes to `src/decks/commerce.tsx`

**1. Replace `S4` (ideas table) with the merged version:**

- Update eyebrow: `Ideas we considered`
- Update H1: `We mapped 40+ ideas — here's a subset`
- Replace the 4 rows with these 6, and add a new `Track` column:

  | Initiative | Track | Impact | Speed | Complexity |
  |---|---|---|---|---|
  | Improved submission form | Product / Eng | Medium | Fast | Low |
  | AI Self-Review Toolkit | Product / Eng | High | Medium | Medium |
  | Frontline SMEs for complex reviews | Ops | Medium | Medium | Low |
  | Smart routing by domain expertise | Ops | Medium | Medium | Low |
  | Audit 150+ requirements | Governance | High | Slow | High |
  | Critical failures → outright rejection | Governance | High | Medium | Medium |

- Change grid columns from `grid-cols-[2.2fr_1fr_1fr_1fr]` to `grid-cols-[2.4fr_1.1fr_1fr_1fr_1fr]` (header + rows) to fit the Track column.
- Append a `<Callout label="Going deeper">` below the table with: *"For this presentation I'll focus on the Product/Eng track — specifically the AI toolkit."*

**2. Remove `S5` entirely** (the three parallel tracks slide) and drop `S5` from the `commerceSlides` export array on line 760.

### Notes
- Slide numbering after `S5` (S6–S10, etc.) keeps current names; only the export array shrinks by one entry.
- No styling-token changes; reuses existing `tone()` helper, `Callout`, and `SlideFrame`.