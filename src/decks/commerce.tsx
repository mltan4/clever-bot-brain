import { SlideFrame } from "@/components/SlideFrame";
import type { ReactNode } from "react";

/* ===== Tokens — dark navy theme (previous version styling) ===== */
const C = {
  navy: "#0F172A",
  navy2: "#1E293B",
  navy2Border: "#334155",
  slateMid: "#475569",
  muted: "#94A3B8",
  text: "#CBD5E1",
  textBright: "#E2E8F0",
  white: "#FFFFFF",
  blue: "#3B82F6",
  blue2: "#1D4ED8",
  blueM: "#60A5FA",
  blueLight: "#1E3A8A",
  green: "#10B981",
  greenL: "#34D399",
  red: "#F87171",
  purple: "#A78BFA",
  teal: "#2DD4BF",
  amber: "#F59E0B",
  grayAccent: "#94A3B8",
};

/* ===== Helpers ===== */
function Stage({ children }: { children: ReactNode }) {
  return (
    <div
      className="flex-1 flex flex-col"
      style={{ background: C.navy, margin: -96, padding: 96, color: C.text }}
    >
      {children}
    </div>
  );
}

function Divider() {
  return <div className="h-px w-full my-10" style={{ background: C.navy2Border }} />;
}

function Overline({ children, color = C.blueM }: { children: ReactNode; color?: string }) {
  return (
    <div
      className="font-semibold uppercase mb-6"
      style={{ color, fontSize: 16, letterSpacing: "0.22em" }}
    >
      {children}
    </div>
  );
}

function DarkCard({ accent, children }: { accent: string; children: ReactNode }) {
  return (
    <div
      className="rounded-xl overflow-hidden flex flex-col"
      style={{ background: C.navy2, border: `1px solid ${C.navy2Border}` }}
    >
      <div style={{ height: 10, background: accent }} />
      <div className="p-10 flex-1">{children}</div>
    </div>
  );
}

function DarkPanel({
  accent,
  children,
  className = "",
}: {
  accent: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex overflow-hidden rounded-xl ${className}`}
      style={{ background: C.navy2, border: `1px solid ${C.navy2Border}` }}
    >
      <div style={{ width: 12, background: accent, flexShrink: 0 }} />
      <div className="p-10 flex-1">{children}</div>
    </div>
  );
}

function Callout({ children }: { children: ReactNode }) {
  return (
    <div
      className="flex overflow-hidden rounded-xl"
      style={{
        background: "rgba(59,130,246,0.12)",
        border: `1px solid ${C.blue2}`,
      }}
    >
      <div style={{ width: 10, background: C.blue, flexShrink: 0 }} />
      <div className="p-8 flex-1" style={{ fontSize: 24, color: C.textBright, lineHeight: 1.5 }}>
        {children}
      </div>
    </div>
  );
}

function Bullets({
  items,
  color = C.text,
  size = 22,
}: {
  items: string[];
  color?: string;
  size?: number;
}) {
  return (
    <ul className="space-y-3">
      {items.map((b, i) => (
        <li key={i} style={{ color, fontSize: size, lineHeight: 1.5 }}>
          <span style={{ color: C.muted, marginRight: 12 }}>·</span>
          {b}
        </li>
      ))}
    </ul>
  );
}

/* =================== Slide 1 — Title =================== */
function S1() {
  return (
    <SlideFrame>
      <Stage>
        <div className="flex-1 flex items-center">
          <div className="flex items-stretch gap-12 max-w-[1500px]">
            <div style={{ width: 8, background: C.blue, borderRadius: 4 }} />
            <div className="flex flex-col justify-center">
              <h1 style={{ fontSize: 88, fontWeight: 800, color: C.white, lineHeight: 1.05, letterSpacing: "-0.02em" }}>
                Scaling the Shopify App Store
              </h1>
              <p style={{ fontSize: 36, color: C.muted, marginTop: 28 }}>
                From 45 days to 2 weeks — AI-powered self-review toolkit
              </p>
            </div>
          </div>
        </div>
        <div style={{ fontSize: 22, color: C.muted }}>
          Project 1 of 2 · Mark Tan · Product Operations Case Study
        </div>
      </Stage>
    </SlideFrame>
  );
}

/* =================== Slide 2 — Business Context =================== */
function S2() {
  const stats = [
    { value: "40%", label: "spike in app submission volume", color: C.blue },
    { value: "45 days", label: "SLA at peak (benchmark: 11 days)", color: C.red },
    { value: "23K", label: "existing + new developers affected, vocal on social", color: C.green },
  ];
  return (
    <SlideFrame>
      <Stage>
        <h1 style={{ fontSize: 54, fontWeight: 700, color: C.white, lineHeight: 1.15 }}>
          App Submission Volume Outpaced Our Capacity to Review
        </h1>
        <Divider />
        <p style={{ fontSize: 24, color: C.text, lineHeight: 1.55, marginBottom: 48, maxWidth: 1600 }}>
          How App Review works: a 3P developer submits, auto-checks run first, then our QA team validates against
          150+ requirements. Feedback goes to email, and the cycle repeats until the app passes.
        </p>
        <div className="grid grid-cols-3 gap-10 mb-12">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-xl overflow-hidden text-center"
              style={{ background: C.navy2, border: `1px solid ${C.navy2Border}` }}
            >
              <div style={{ height: 10, background: s.color }} />
              <div className="px-8 py-12">
                <div style={{ fontSize: 96, fontWeight: 800, color: s.color, lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontSize: 22, color: C.text, marginTop: 16, lineHeight: 1.4 }}>{s.label}</div>
              </div>
            </div>
          ))}
        </div>
        <p style={{ fontSize: 26, color: C.textBright, lineHeight: 1.45 }}>
          These developers serve merchants generating{" "}
          <span style={{ fontWeight: 700, color: C.green }}>$1.3B in commerce</span>. Slow reviews weren't just an ops problem —
          they were a reputational and ecosystem risk with leadership visibility.
        </p>
      </Stage>
    </SlideFrame>
  );
}

/* =================== Slide 3 — Role & Mandate =================== */
function S3() {
  const items = [
    "Apps in the store",
    "Developers actively publishing",
    "SLA (time to process a submission)",
    "Pass / reject rate",
    "Violations reported post-publish",
    "Reviews & ratings",
  ];
  const shades = ["#1E3A8A", "#1D4ED8", "#2563EB", "#3B82F6", "#60A5FA", "#93C5FD"];
  return (
    <SlideFrame>
      <Stage>
        <h1 style={{ fontSize: 54, fontWeight: 700, color: C.white, lineHeight: 1.15 }}>
          Mission: Grow the app store without compromising integrity
        </h1>
        <Divider />
        <div className="grid grid-cols-2 gap-16 flex-1 min-h-0">
          <div className="flex flex-col justify-center">
            <p style={{ fontSize: 26, color: C.text, lineHeight: 1.5, marginBottom: 32 }}>
              As Shopify App Store lead, my mandate was to increase apps while maintaining quality — two things
              in direct tension when volume spikes.
            </p>
            <div style={{ fontSize: 26, fontWeight: 700, color: C.white, marginBottom: 20 }}>
              I owned a full performance funnel:
            </div>
            <ol className="space-y-3">
              {items.map((it, i) => (
                <li
                  key={it}
                  style={{
                    fontSize: 24,
                    color: i === 0 ? C.blueM : C.text,
                    fontWeight: i === 0 ? 700 : 400,
                  }}
                >
                  {i + 1}. {it}
                </li>
              ))}
            </ol>
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
            {items.map((it, i) => {
              const width = 100 - i * 11;
              return (
                <div
                  key={it}
                  className="rounded-md flex items-center justify-center"
                  style={{
                    width: `${width}%`,
                    background: shades[i],
                    padding: "22px 24px",
                  }}
                >
                  <span
                    style={{
                      color: "#fff",
                      fontSize: 22,
                      fontWeight: i === 0 ? 700 : 500,
                      textAlign: "center",
                    }}
                  >
                    {i + 1}. {it}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </Stage>
    </SlideFrame>
  );
}

/* =================== Slide 4 — Ideas We Considered =================== */
function S4() {
  const cols = [
    {
      title: "Risk-Based Review",
      accent: C.grayAccent,
      bullets: [
        "Fast-track lanes for trusted partners",
        "Audit-heavy model: post-publish enforcement",
        "Domain expertise tiers (L1 / L2 / L3)",
      ],
    },
    {
      title: "Dev Tooling & Submission",
      accent: C.blue,
      bullets: [
        "Inline validation in submission UI",
        "Developer pre-submission test environment",
        "Actionable partner dashboard feedback",
        "AI pre-check against 150+ requirements",
      ],
    },
    {
      title: "Policy, Legal & Governance",
      accent: C.purple,
      bullets: [
        "Severity framework (minor → critical)",
        "Audit & reduce 150+ requirements",
        "Post-publish remediation for non-critical issues",
      ],
    },
  ];
  return (
    <SlideFrame>
      <Stage>
        <Overline>Ideas We Considered</Overline>
        <h1 style={{ fontSize: 48, fontWeight: 700, color: C.white, lineHeight: 1.15 }}>
          We mapped 40+ ideas into three categories before deciding
        </h1>
        <Divider />
        <div className="grid grid-cols-3 gap-8 flex-1 min-h-0">
          {cols.map((c) => (
            <DarkCard key={c.title} accent={c.accent}>
              <div style={{ fontSize: 28, fontWeight: 700, color: c.accent, marginBottom: 24 }}>
                {c.title}
              </div>
              <Bullets items={c.bullets} color={C.text} size={22} />
            </DarkCard>
          ))}
        </div>
      </Stage>
    </SlideFrame>
  );
}

/* =================== Slide 5 — Three Parallel Tracks =================== */
function S5() {
  const tracks = [
    {
      title: "Product / Eng",
      accent: C.blue,
      bullets: ["AI-powered self-review toolkit", "Improved submission form"],
    },
    {
      title: "Ops",
      accent: C.teal,
      bullets: ["Frontline SMEs for complex reviews", "Smart routing by domain expertise"],
    },
    {
      title: "Policy",
      accent: C.purple,
      bullets: ["Audit 150+ requirements", "Critical failures → outright rejection"],
    },
  ];
  return (
    <SlideFrame>
      <Stage>
        <Overline>Three Parallel Tracks We Committed To</Overline>
        <h1 style={{ fontSize: 48, fontWeight: 700, color: C.white, lineHeight: 1.15 }}>
          Three parallel tracks — one team accountable for each
        </h1>
        <Divider />
        <div className="grid grid-cols-3 gap-8 mb-12">
          {tracks.map((t) => (
            <DarkCard key={t.title} accent={t.accent}>
              <div style={{ fontSize: 28, fontWeight: 700, color: "#fff", marginBottom: 24 }}>
                {t.title}
              </div>
              <Bullets items={t.bullets} color={C.text} size={22} />
            </DarkCard>
          ))}
        </div>
        <Callout>
          <span style={{ color: C.blueM, fontWeight: 700 }}>Going deeper: </span>
          For this presentation I'll focus on the Product / Eng track — specifically the AI toolkit.
        </Callout>
      </Stage>
    </SlideFrame>
  );
}

/* =================== Slide 6 — Improving the Submission Flow =================== */
function S6() {
  const cards = [
    {
      title: "The Hypothesis",
      accent: C.blue,
      bullets: [
        "150+ requirements, all feedback via email",
        "One long thread per submission",
        "Back-and-forth until resolved",
      ],
    },
    {
      title: "What We Built & Shipped",
      accent: C.green,
      bullets: [
        "Replaced email with per-issue checklist",
        "Developers track resolution in portal",
        "Launched as planned",
      ],
    },
    {
      title: "What the Data Showed",
      accent: C.amber,
      bullets: [
        "Bounce rate didn't move",
        "Developers submitting apps without self-testing",
        "Communication wasn't the core problem",
      ],
    },
  ];
  return (
    <SlideFrame>
      <Stage>
        <h1 style={{ fontSize: 48, fontWeight: 700, color: C.white, lineHeight: 1.15 }}>
          Improving the submission flow
        </h1>
        <Divider />
        <div className="grid grid-cols-3 gap-8 mb-10 flex-1 min-h-0">
          {cards.map((c) => (
            <DarkCard key={c.title} accent={c.accent}>
              <div style={{ fontSize: 26, fontWeight: 700, color: c.accent, marginBottom: 24 }}>
                {c.title}
              </div>
              <Bullets items={c.bullets} color={C.text} size={22} />
            </DarkCard>
          ))}
        </div>
        <Callout>
          <span style={{ color: C.blueM, fontWeight: 700 }}>The decision: </span>
          Redirect investment to pre-submission assessment.
        </Callout>
      </Stage>
    </SlideFrame>
  );
}

/* =================== Slide 7 — Improving the Quality of Submission =================== */
function S7() {
  return (
    <SlideFrame>
      <Stage>
        <h1 style={{ fontSize: 60, fontWeight: 700, color: "#fff", lineHeight: 1.15, marginBottom: 56 }}>
          Improving the quality of submission
        </h1>
        <div className="flex flex-col gap-8 flex-1 min-h-0">
          <div
            className="rounded-xl p-10"
            style={{ background: C.navy2, border: `1px solid ${C.navy2Border}` }}
          >
            <Bullets
              items={[
                "Partnered with QA SMEs who'd reviewed apps manually for years",
                "Taught the system: nuance, edge cases, what a borderline fail looks like",
                "Their input shaped the logic, confidence thresholds, and language",
              ]}
              color="#fff"
              size={28}
            />
          </div>
          <DarkPanel accent={C.blue}>
            <div style={{ fontSize: 30, fontWeight: 700, color: C.blueM, marginBottom: 20 }}>
              How it works
            </div>
            <Bullets
              items={[
                "Runs against developer codebase in ~2 min",
                "Checks all 150+ mechanical compliance requirements",
                "Blocks resubmission until every flagged issue is resolved",
              ]}
              color="#fff"
              size={26}
            />
          </DarkPanel>
        </div>
      </Stage>
    </SlideFrame>
  );
}

/* =================== Slide 8 — Stakeholder Management =================== */
function S8() {
  const groups = [
    { label: "App Developers", desc: "23K external developers · vocal on social media", color: C.blue },
    { label: "Governance & Legal", desc: "Ecosystem integrity and policy compliance", color: C.purple },
    { label: "Operations / QA", desc: "Internal review team conducting manual testing", color: C.teal },
    { label: "Internal Leadership", desc: "Directors → VP of Engineering & Product Design", color: C.grayAccent },
  ];
  return (
    <SlideFrame>
      <Stage>
        <h1 style={{ fontSize: 50, fontWeight: 700, color: C.white, lineHeight: 1.15 }}>
          Principle: Shopify Is a Steward, Not Just an Operator
        </h1>
        <Divider />
        <div className="grid grid-cols-2 gap-12 flex-1 min-h-0">
          <div className="flex flex-col justify-center gap-5">
            {groups.map((g) => (
              <div
                key={g.label}
                className="flex rounded-xl overflow-hidden"
                style={{ background: C.navy2, border: `1px solid ${C.navy2Border}` }}
              >
                <div style={{ width: 10, background: g.color }} />
                <div className="p-6">
                  <div style={{ fontSize: 28, fontWeight: 700, color: C.white }}>{g.label}</div>
                  <div style={{ fontSize: 20, color: C.text, marginTop: 6 }}>{g.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <DarkPanel accent={C.blue} className="flex flex-col">
            <div style={{ fontSize: 26, fontWeight: 700, color: C.blueM, marginBottom: 20 }}>
              Challenges
            </div>
            <p style={{ fontSize: 22, color: C.text, lineHeight: 1.55, marginBottom: 16 }}>
              A VP proposed opening the gates — let all apps in, let the marketplace self-regulate.
            </p>
            <p style={{ fontSize: 22, color: C.text, lineHeight: 1.55, marginBottom: 16 }}>
              On paper: faster SLA, fewer resources. In practice: copycat apps, low-quality submissions,
              eroded merchant trust.
            </p>
            <p style={{ fontSize: 22, color: C.text, lineHeight: 1.55, marginBottom: 20 }}>
              The counter wasn't a feature comparison. It was a principle:
            </p>
            <div
              className="rounded-lg px-6 py-6 text-center"
              style={{ background: C.blue2, color: "#fff", fontStyle: "italic", fontWeight: 700, fontSize: 24, lineHeight: 1.4 }}
            >
              "We are the steward of this marketplace, not just the operator."
            </div>
          </DarkPanel>
        </div>
      </Stage>
    </SlideFrame>
  );
}

/* =================== Slide 9 — Outcomes =================== */
function S9() {
  const rows = [
    { metric: "SLA", before: "45 days", after: "2 weeks" },
    { metric: "MCP Adoption", before: "—", after: "13% at launch" },
    { metric: "Reception", before: "—", after: "Positive dev forums" },
  ];
  return (
    <SlideFrame>
      <Stage>
        <Overline>Outcomes</Overline>
        <h1 style={{ fontSize: 52, fontWeight: 700, color: "#fff", lineHeight: 1.15, marginBottom: 48 }}>
          Results across all three tracks
        </h1>
        <div className="flex flex-col gap-6 flex-1 min-h-0">
          <DarkPanel accent={C.blue}>
            <div style={{ fontSize: 18, fontWeight: 700, color: C.blueM, letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: 18 }}>
              Product / Eng
            </div>
            <div className="grid grid-cols-[1.2fr_1fr_1.5fr] gap-6" style={{ fontSize: 18, color: C.muted, letterSpacing: "0.16em", textTransform: "uppercase", paddingBottom: 12, borderBottom: `1px solid ${C.navy2Border}` }}>
              <div>Metric</div><div>Before</div><div>After</div>
            </div>
            {rows.map((r) => (
              <div
                key={r.metric}
                className="grid grid-cols-[1.2fr_1fr_1.5fr] gap-6 items-center"
                style={{ padding: "16px 0", borderBottom: `1px solid ${C.navy2Border}` }}
              >
                <div style={{ fontSize: 24, color: "#fff", fontWeight: 600 }}>{r.metric}</div>
                <div style={{ fontSize: 22, color: C.muted, fontFamily: "monospace" }}>
                  {r.before} <span style={{ color: C.muted }}>→</span>
                </div>
                <div style={{ fontSize: 24, color: C.greenL, fontWeight: 700 }}>{r.after}</div>
              </div>
            ))}
          </DarkPanel>
          <div className="grid grid-cols-2 gap-6">
            <DarkPanel accent={C.teal}>
              <div style={{ fontSize: 18, fontWeight: 700, color: C.teal, letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: 14 }}>
                Ops
              </div>
              <p style={{ fontSize: 22, color: C.text, lineHeight: 1.5 }}>
                Frontline ops team built for the most complex submissions — removed the bottleneck of
                generalist reviewers on nuanced cases.
              </p>
            </DarkPanel>
            <DarkPanel accent={C.purple}>
              <div style={{ fontSize: 18, fontWeight: 700, color: C.purple, letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: 14 }}>
                Policy
              </div>
              <p style={{ fontSize: 22, color: C.text, lineHeight: 1.5 }}>
                Critical-failures category introduced — apps with critical issues rejected outright, giving
                developers clearer signal on what truly blocks publication.
              </p>
            </DarkPanel>
          </div>
        </div>
        <div style={{ fontSize: 20, fontStyle: "italic", color: C.muted, marginTop: 32 }}>
          Jan → Apr 2026 · 4 months end to end
        </div>
      </Stage>
    </SlideFrame>
  );
}

/* =================== Slide 10 — What I'd Do Differently =================== */
function S10() {
  return (
    <SlideFrame>
      <Stage>
        <Overline>What I'd Do Differently</Overline>
        <h1 style={{ fontSize: 56, fontWeight: 700, color: "#fff", lineHeight: 1.15, marginBottom: 56 }}>
          What I'd do differently
        </h1>
        <DarkPanel accent={C.blue} className="flex-1">
          <div className="flex flex-col gap-8 justify-center h-full">
            <p style={{ fontSize: 26, color: C.text, lineHeight: 1.55 }}>
              We evaluated 40–50 ideas before aligning. Some took weeks to kill because we hadn't
              established governing principles upfront.
            </p>
            <p style={{ fontSize: 22, color: C.muted, fontStyle: "italic" }}>
              The principle we should have led with:
            </p>
            <p style={{ fontSize: 30, color: C.blueM, fontWeight: 700, fontStyle: "italic", lineHeight: 1.4 }}>
              "We are stewards of the marketplace. Quality is non-negotiable. Ecosystem integrity beats
              short-term throughput."
            </p>
            <p style={{ fontSize: 26, color: C.text, lineHeight: 1.55 }}>
              Used as a filter from day one, those principles would have eliminated half the idea list in
              week one and accelerated consensus across legal, governance, and leadership.
            </p>
            <p style={{ fontSize: 22, color: C.muted, fontStyle: "italic" }}>
              Lesson: In multi-stakeholder environments, principles are a prioritization tool — not just a
              values statement.
            </p>
          </div>
        </DarkPanel>
      </Stage>
    </SlideFrame>
  );
}

export const commerceSlides = [S1, S2, S3, S4, S5, S6, S7, S8, S9, S10];
