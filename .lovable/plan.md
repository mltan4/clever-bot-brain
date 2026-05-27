All changes are in `src/decks/commerce.tsx`. Slide numbers below = deck position (current order: S1, S2, SVideo, S3, SDemo, S4, S5, S6, S7, SDemo, S8, S9, S10).

### Slide 2 — Business Context (S2)
- Title → `Scaling Crisis: App Volume Outpaced Our Review Capacity`
- Increase font size of the "$1.3B in commerce…" paragraph (text-[26px] → text-[32px])
- Add a highlighted call-out block: *"AI dramatically lowered the barrier to building apps, causing submission volume to outpace review capacity."*

### Slide 4 — Role & Mandate (S3)
- Remove the left-side 01–06 numbered list (redundant with funnel)
- Keep the funnel diagram (right column)
- Replace the left column with a 2-sided tension diagram:
  - LEFT — **Increase App Volume**: faster approvals · lower friction · ecosystem growth
  - RIGHT — **Protect Marketplace Integrity**: merchant trust · fraud prevention · quality standards · platform safety

### Slide 5 — Replace SDemo with "Diagnostic Framework"
Replace the demo slide content (at this position only) with a funnel diagram:
Developer Submission → Pre-Submission Validation → Internal Review Queue → Policy & Compliance Checks → Publish to Store
Then a "Bottlenecks" annotation block:
- ❌ Poor quality submissions entering queue
- ❌ Inefficient reviewer routing
- ❌ Outdated / overlapping requirements

(The second SDemo at position 10 stays as-is.)

### Slide 6 — Ideas we considered (S4)
Replace the 3-column card grid with a table:

| Initiative | Impact | Speed | Complexity |
|---|---|---|---|
| Improve submission communication | Medium | Fast | Low |
| AI pre-submission toolkit | High | Medium | Medium |
| Reviewer specialization routing | Medium | Medium | Low |
| Rewrite 150+ policies | High | Slow | High |

### Slide 7 — Three parallel tracks (S5)
- Title → `Three parallel tracks — Ownership Model`
- Increase bullet text size and number them (1., 2., …)
- Re-order Product/Eng bullets: 1) Improved submission form, 2) AI Self-Review Toolkit

### Slide 8 — Improving the submission flow (S6)
- Increase bullet text size and number them
- Replace "What the Data Showed" bullets with:
  1. We reduced wait time from 45 to 40 days (12%)
  2. But developers were still submitting apps without testing
  3. Communication improved, but we need more solution

### Slide 9 — (S7)
- Title → `Shopify AI Self-Review Toolkit`
- Increase font size of bullets

### Slide 11 — Principle (currently S8)
- Replace the quoted blockquote `"We are the steward of this marketplace, not just the operator."` with: **Short-term wins have long-term consequences** (no quotes)

### Slide 12 — Outcomes (currently S9)
- Replace "MCP Adoption" row label with "AI Toolkit"
- Increase the description text size for the Ops and Policy track cards

### Slide 13 — Learnings (S10)
Turn into 5 numbered points (bold headline + supporting sentence):
1. **Define governing principles before generating solutions.** In multi-stakeholder environments, principles are a prioritization tool.
2. **Ship lean, read the data, then decide where to invest.** A lean v1 is a hypothesis test. The data tells you whether to invest more or move on.
3. **AI judgment is only as good as the human judgment you embed in it.** SME collaboration and human-in-the-loop allow for fine-tuning early products effectively.
4. **Parallel workstreams are an ops strategy, not a compromise.** Complex operational problems rarely have one root cause. Design for parallel progress, not sequential perfection.
5. **Nemawashi (根回し) works wonders.**

### Final reorder
Swap slides 11 and 12 → Outcomes appears before Principle.

New `commerceSlides` order:
`[S1, S2, SVideo, S3, SDiagnostic, S4(table), S5, S6, S7, SDemo, S9(Outcomes), S8(Principle), S10]`

No other files change; deck total stays at 13.
