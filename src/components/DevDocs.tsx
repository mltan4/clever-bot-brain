import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

export function DevDocs() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-20 right-5 z-50">
      {open && (
        <div className="mb-3 w-[340px] max-h-[60vh] overflow-y-auto rounded-2xl border border-border bg-surface shadow-2xl p-5 text-sm leading-relaxed">
          <div className="flex items-center justify-between mb-3">
            <div className="font-semibold text-foreground text-base">Dev Docs</div>
            <button
              onClick={() => setOpen(false)}
              className="text-muted-foreground hover:text-foreground"
              aria-label="Close"
            >
              <X size={16} />
            </button>
          </div>

          <div className="space-y-4 text-muted-foreground">
            <section>
              <div className="text-foreground font-medium mb-1">What this is</div>
              <p>
                A simple slide deck app. Each deck (About, Shopify, Wyze, WorkOS)
                is a series of slides you flip through with arrow keys, dots, or
                the prev/next buttons.
              </p>
            </section>

            <section>
              <div className="text-foreground font-medium mb-1">How it's built</div>
              <p>
                React + TanStack Start (file-based routing, SSR on Cloudflare),
                Tailwind CSS v4 for styling with a shared design token system,
                and Radix primitives for accessible UI bits.
              </p>
            </section>

            <section>
              <div className="text-foreground font-medium mb-1">Neat design choice</div>
              <p>
                The URL is the source of truth. <code className="text-accent">/commerce/4</code>{" "}
                <em>is</em> slide 4 — no internal state, no carousel library. Each
                deck is just an array of React components, so adding a slide
                means pushing one function into the list. Keyboard, dots, and
                buttons all just change the URL.
              </p>
            </section>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors text-sm font-medium"
        aria-label="Open Dev Docs"
      >
        <MessageCircle size={16} />
        Dev Docs
      </button>
    </div>
  );
}
