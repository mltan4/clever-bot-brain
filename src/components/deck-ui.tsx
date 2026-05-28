import type { ReactNode } from "react";

export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center px-5 py-2 rounded-full border border-border bg-surface text-muted-foreground text-[26px] font-medium whitespace-nowrap">
      {children}
    </span>
  );
}

export function Card({
  children,
  className = "",
  accent = false,
}: {
  children: ReactNode;
  className?: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border bg-surface p-12 ${
        accent ? "border-accent/60" : "border-border"
      } ${className}`}
    >
      {children}
    </div>
  );
}

export function Callout({ children, label = "Callout" }: { children: ReactNode; label?: string }) {
  return (
    <div className="rounded-2xl border-l-4 border-accent bg-surface/60 px-10 py-8">
      <div className="text-accent text-[26px] font-semibold uppercase tracking-[0.18em] mb-2">
        {label}
      </div>
      <div className="text-[34px] leading-snug text-foreground">{children}</div>
    </div>
  );
}

export function Stat({
  value,
  label,
  tone = "neutral",
}: {
  value: string;
  label: string;
  tone?: "neutral" | "positive" | "negative" | "accent";
}) {
  const toneCls =
    tone === "positive"
      ? "text-[color:var(--positive)]"
      : tone === "negative"
        ? "text-muted-foreground"
        : tone === "accent"
          ? "text-accent"
          : "text-foreground";
  return (
    <Card className="flex flex-col gap-12">
      <div className={`text-[88px] font-extrabold leading-none tracking-tight ${toneCls}`}>
        {value}
      </div>
      <div className="text-[30px] text-muted-foreground">{label}</div>
    </Card>
  );
}

export function SlideHeader({
  kicker,
  title,
}: {
  kicker?: string;
  title: string;
}) {
  return (
    <div className="mb-20">
      {kicker && (
        <div className="text-accent text-[28px] font-semibold uppercase tracking-[0.2em] mb-10">
          {kicker}
        </div>
      )}
      <h1 className="text-[72px] font-extrabold leading-[1.05] tracking-tight">
        {title}
      </h1>
    </div>
  );
}
