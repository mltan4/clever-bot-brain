## Fix "daysusing" spacing on Slide 1

In `src/decks/commerce.tsx` line 17, the text `using Shopify AI toolkit` sits on a new line after `</span>`, and JSX strips that whitespace — rendering "daysusing".

**Change:** prepend a JSX space so it renders as "45 to 26 days using Shopify AI toolkit".

```tsx
Reducing wait times from <span className="text-foreground font-semibold">45 to 26 days</span>{" "}
using Shopify AI toolkit
```

No other changes.