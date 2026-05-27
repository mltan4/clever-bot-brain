import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useLocation,
  useNavigate,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useMemo } from "react";

import appCss from "../styles.css?url";

const DECKS = {
  about: { label: "About", total: 1 },
  commerce: { label: "Shopify AI Toolkit", total: 12 },
  wyze: { label: "Wyze Growth", total: 8 },
  workos: { label: "WorkOS", total: 7 },
} as const;

const PLAYGROUND_URL = "https://nextcraft.life/";

type DeckId = keyof typeof DECKS;

function parseLocation(pathname: string): { deck: DeckId; slide: number } | null {
  const m = pathname.match(/^\/(about|commerce|workos|wyze)\/(\d+)/);
  if (!m) return null;
  return { deck: m[1] as DeckId, slide: parseInt(m[2], 10) };
}

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <p className="mt-2 text-sm text-muted-foreground">Page not found.</p>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold text-foreground">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Something went wrong.</p>
        <button
          onClick={() => { router.invalidate(); reset(); }}
          className="mt-6 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Product Decks" },
      { name: "description", content: "Shopify AI Toolkit, Wyze Scaling Release, and WorkOS presentation decks" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <DeckShell />
    </QueryClientProvider>
  );
}

function DeckShell() {
  const location = useLocation();
  const navigate = useNavigate();
  const parsed = useMemo(() => parseLocation(location.pathname), [location.pathname]);

  const deck = parsed?.deck;
  const slide = parsed?.slide ?? 1;
  const total = deck ? DECKS[deck].total : 0;

  useEffect(() => {
    if (!deck) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" && slide < total) {
        navigate({ to: "/$deck/$slide" as any, params: { deck, slide: String(slide + 1) } as any });
      } else if (e.key === "ArrowLeft" && slide > 1) {
        navigate({ to: "/$deck/$slide" as any, params: { deck, slide: String(slide - 1) } as any });
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [deck, slide, total, navigate]);

  const go = (delta: number) => {
    if (!deck) return;
    const next = Math.min(total, Math.max(1, slide + delta));
    navigate({ to: "/$deck/$slide" as any, params: { deck, slide: String(next) } as any });
  };

  const progress = total > 0 ? (slide / total) * 100 : 0;

  return (
    <div className="h-screen w-screen flex flex-col bg-background text-foreground overflow-hidden">
      {/* Top nav */}
      <header className="flex items-center justify-between px-6 py-3 border-b border-border bg-surface/40 backdrop-blur z-10">
        <nav className="flex items-center gap-2">
          {(Object.keys(DECKS) as DeckId[]).map((id) => {
            const isActive = deck === id;
            return (
              <button
                key={id}
                onClick={() => navigate({ to: `/${id}/$slide`, params: { slide: "1" } } as never)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-surface"
                }`}
              >
                {DECKS[id].label}
              </button>
            );
          })}
          <a
            href={PLAYGROUND_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-md text-sm font-medium transition-colors text-muted-foreground hover:text-foreground hover:bg-surface"
          >
            Playground ↗
          </a>
        </nav>
        <div className="flex items-center gap-4">
          {/* Dots */}
          {deck && (
            <div className="flex items-center gap-1.5">
              {Array.from({ length: total }).map((_, i) => (
                <div
                  key={i}
                  className={`h-2 rounded-full transition-all ${
                    i + 1 === slide ? "bg-accent w-6" : "bg-surface-2 w-2"
                  }`}
                />
              ))}
            </div>
          )}
          <div className="text-sm font-mono tabular-nums text-muted-foreground min-w-[60px] text-right">
            {deck ? `${slide} / ${total}` : ""}
          </div>
        </div>
      </header>

      {/* Progress bar */}
      <div className="h-[2px] w-full bg-surface relative">
        <div
          className="h-full bg-accent transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Slide */}
      <main className="flex-1 min-h-0 relative">
        <Outlet />
      </main>

      {/* Footer nav */}
      <footer className="flex items-center justify-between px-6 py-3 border-t border-border bg-surface/40 z-10">
        <button
          onClick={() => go(-1)}
          disabled={!deck || slide <= 1}
          className="px-4 py-2 rounded-md text-sm font-medium bg-surface border border-border text-foreground hover:bg-surface-2 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          ◀ Prev
        </button>
        <div className="text-xs text-muted-foreground hidden sm:block">
          Use ← → arrow keys to navigate
        </div>
        <button
          onClick={() => go(1)}
          disabled={!deck || slide >= total}
          className="px-4 py-2 rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          Next ▶
        </button>
      </footer>
    </div>
  );
}
