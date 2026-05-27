import { SlideFrame } from "@/components/SlideFrame";
import { Card, Callout, Stat, SlideHeader } from "@/components/deck-ui";

/* -------------------- Slide 1 — Title -------------------- */
function S1() {
  return (
    <SlideFrame>
      <div className="flex-1 flex items-center">
        <div className="w-2 h-64 bg-accent rounded-full mr-12 shrink-0" />
        <div className="flex flex-col">
          <h1 className="text-[88px] font-extrabold leading-[1.02] tracking-tight mb-8 max-w-[1600px]">
            Scaling the Shopify App Store
          </h1>
          <p className="text-[36px] text-muted-foreground max-w-[1500px] leading-snug mb-16">
            From <span className="text-foreground font-semibold">45 days to 2 weeks</span>,
            AI-powered self-review toolkit
          </p>
          <div className="text-[22px] uppercase tracking-[0.22em] text-muted-foreground">
            Mark Tan
          </div>
        </div>
      </div>
    </SlideFrame>
  );
}

/* -------------------- Slide 2 — Business Context -------------------- */
function S2() {
  return (
    <SlideFrame>
      <SlideHeader
        kicker="Business Context"
        title="App Submission Volume Outpaced Our Capacity to Review"
      />
      <p className="text-[26px] text-muted-foreground leading-snug max-w-[1700px] mb-8">
        <span className="text-foreground font-semibold">How App Review works:</span> A
        3P dev submits, auto checks run first, then our QA team checks it against
        150+ requirements. Feedback goes to email, and the cycle repeats until the
        app passes.
      </p>
      <div className="grid grid-cols-3 gap-8 mb-10">
        <Stat value="40%" label="spike in app submission volume" tone="accent" />
        <Stat value="45 days" label="SLA at peak (benchmark: 11 days)" tone="negative" />
        <Stat value="23K" label="existing + new developers affected, vocal on social" tone="accent" />
      </div>
      <p className="text-[26px] text-muted-foreground leading-snug max-w-[1700px]">
        These developers serve merchants generating{" "}
        <span className="text-accent font-semibold">$1.3B in commerce</span>. Slow
        reviews were a reputational and ecosystem risk with leadership visibility.
      </p>
    </SlideFrame>
  );
}

/* -------------------- Slide 3 — Role & Mandate -------------------- */
function S3() {
  const funnel = [
    "Apps in the store",
    "Developers actively publishing",
    "SLA (time to process a submission)",
    "Pass / reject rate",
    "Violations reported post-publish",
    "Reviews & ratings",
  ];
  return (
    <SlideFrame>
      <SlideHeader
        kicker="Role & Mandate"
        title="Mission: Grow the app store without compromising integrity"
      />
      <div className="grid grid-cols-2 gap-12 flex-1 min-h-0">
        <div className="flex flex-col justify-center">
          <p className="text-[26px] leading-snug text-muted-foreground mb-8">
            As Shopify App Store lead, my mandate was to increase apps while
            maintaining quality: two things in{" "}
            <span className="text-accent font-semibold">direct tension</span>{" "}
            when volume spikes.
          </p>
          <div className="text-[24px] font-bold text-foreground mb-5">
            I owned a full performance funnel:
          </div>
          <ol className="space-y-3">
            {funnel.map((item, i) => (
              <li
                key={item}
                className={`text-[22px] flex gap-4 ${
                  i === 0 ? "text-accent font-semibold" : "text-muted-foreground"
                }`}
              >
                <span className="font-mono">{String(i + 1).padStart(2, "0")}</span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </div>
        <div className="flex flex-col items-center justify-center gap-3">
          {funnel.map((label, i) => {
            const width = 100 - i * 10;
            return (
              <div
                key={label}
                className="rounded-lg border border-border flex items-center justify-center px-6 py-5"
                style={{
                  width: `${width}%`,
                  backgroundColor: `color-mix(in oklab, var(--accent) ${
                    24 - i * 2
                  }%, var(--surface))`,
                }}
              >
                <span className="text-accent font-mono text-[20px] mr-4">
                  0{i + 1}
                </span>
                <span className="text-[24px] font-semibold text-foreground text-center">
                  {label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </SlideFrame>
  );
}

/* -------------------- Slide 4 — Ideas We Considered -------------------- */
function S4() {
  const cards = [
    {
      title: "Risk-Based Review",
      accent: "var(--accent)",
      items: [
        "Fast-track lanes for trusted partners",
        "Audit-heavy model: post-publish enforcement",
        "Domain expertise tiers (L1/L2/L3)",
      ],
    },
    {
      title: "Dev Tooling & Submission",
      accent: "#3B82F6",
      items: [
        "Inline validation in submission UI",
        "Developer pre-submission test environment",
        "Actionable partner dashboard feedback",
        "AI pre-check against 150+ requirements",
      ],
    },
    {
      title: "Policy, Legal & Governance",
      accent: "#F59E0B",
      items: [
        "Severity framework (minor → critical)",
        "Audit & reduce 150+ requirements",
        "Post-publish remediation for non-critical issues",
      ],
    },
  ];
  return (
    <SlideFrame>
      <div className="text-accent text-[22px] font-semibold uppercase tracking-[0.2em] mb-4">
        Ideas we considered
      </div>
      <h1 className="text-[60px] font-extrabold leading-[1.05] tracking-tight mb-12">
        We mapped 40+ ideas into three categories before deciding
      </h1>
      <div className="grid grid-cols-3 gap-8 items-start">
        {cards.map((c) => (
          <div
            key={c.title}
            className="rounded-2xl border border-border bg-surface flex flex-col overflow-hidden"
          >
            <div className="h-2" style={{ backgroundColor: c.accent }} />
            <div className="p-8 flex flex-col gap-5">
              <div className="text-[30px] font-bold leading-tight">{c.title}</div>
              <ul className="space-y-3">
                {c.items.map((it) => (
                  <li
                    key={it}
                    className="text-[24px] text-muted-foreground leading-snug flex gap-3"
                  >
                    <span className="text-accent shrink-0">·</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </SlideFrame>
  );
}

/* -------------------- Slide 5 — Three Parallel Tracks -------------------- */
function S5() {
  const tracks = [
    {
      title: "Product / Eng",
      accent: "var(--accent)",
      items: [
        "AI-powered self-review toolkit",
        "Improved submission form",
      ],
    },
    {
      title: "Ops",
      accent: "#3B82F6",
      items: [
        "Frontline SMEs for complex reviews",
        "Smart routing by domain expertise",
      ],
    },
    {
      title: "Policy",
      accent: "#F59E0B",
      items: [
        "Audit 150+ requirements",
        "Critical failures → outright rejection",
      ],
    },
  ];
  return (
    <SlideFrame>
      <div className="text-accent text-[22px] font-semibold uppercase tracking-[0.2em] mb-4">
        Three parallel tracks we committed to
      </div>
      <h1 className="text-[60px] font-extrabold leading-[1.05] tracking-tight mb-12">
        Three parallel tracks — one team accountable for each
      </h1>
      <div className="grid grid-cols-3 gap-8 mb-8 items-start">
        {tracks.map((t) => (
          <div
            key={t.title}
            className="rounded-2xl border border-border bg-[#0b0f1a] flex flex-col overflow-hidden"
          >
            <div className="h-2" style={{ backgroundColor: t.accent }} />
            <div className="p-8 flex flex-col gap-5">
              <div className="text-[32px] font-bold leading-tight">{t.title}</div>
              <ul className="space-y-3">
                {t.items.map((it) => (
                  <li
                    key={it}
                    className="text-[24px] text-muted-foreground leading-snug flex gap-3"
                  >
                    <span className="text-accent shrink-0">·</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <Callout label="Going deeper">
        For this presentation I'll focus on the Product/Eng track — specifically
        the AI toolkit.
      </Callout>
    </SlideFrame>
  );
}

/* -------------------- Slide 6 — Improving the Submission Flow -------------------- */
function S6() {
  const cols = [
    {
      title: "The Hypothesis",
      items: [
        "150+ requirements, all feedback via email",
        "One long thread per submission",
        "Back-and-forth until resolved",
      ],
    },
    {
      title: "What We Built & Shipped",
      items: [
        "Replaced email with per-issue checklist",
        "Developers track resolution in portal",
        "Launched as planned",
      ],
    },
    {
      title: "What the Data Showed",
      items: [
        "Bounce rate didn't move",
        "Developers submitting apps without self-testing",
        "Communication wasn't the core problem",
      ],
    },
  ];
  return (
    <SlideFrame>
      <SlideHeader title="Improving the submission flow" />
      <div className="grid grid-cols-3 gap-8 mb-8 flex-1 min-h-0">
        {cols.map((c, i) => (
          <Card key={c.title} className="flex flex-col">
            <div className="text-accent font-mono text-[22px] mb-3">
              0{i + 1}
            </div>
            <div className="text-[28px] font-bold mb-5 leading-tight">
              {c.title}
            </div>
            <ul className="space-y-3">
              {c.items.map((it) => (
                <li
                  key={it}
                  className="text-[22px] text-muted-foreground leading-snug flex gap-2"
                >
                  <span className="text-accent shrink-0">·</span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
      <Callout label="The decision">
        Redirect investment to pre-submission assessment
      </Callout>
    </SlideFrame>
  );
}

/* -------------------- Slide 7 — Improving the Quality of Submission -------------------- */
function S7() {
  return (
    <SlideFrame>
      <SlideHeader title="Improving the quality of submission" />
      <div className="flex flex-col gap-8 flex-1 min-h-0">
        <div className="rounded-2xl border border-border bg-[#0b0f1a] p-10">
          <ul className="space-y-4">
            {[
              "Partnered with QA SMEs who'd reviewed apps manually for years",
              "Taught the system: nuance, edge cases, what a borderline fail looks like",
              "Their input shaped the logic, confidence thresholds, and language",
            ].map((it) => (
              <li
                key={it}
                className="text-[26px] text-foreground leading-snug flex gap-3"
              >
                <span className="text-accent shrink-0">·</span>
                <span>{it}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-border bg-[#0b0f1a] p-10">
          <div className="text-accent text-[22px] font-semibold uppercase tracking-[0.18em] mb-5">
            How it works
          </div>
          <ul className="space-y-4">
            {[
              "Runs against developer codebase in ~2 min",
              "Checks all 150+ mechanical compliance requirements",
              "Blocks resubmission until every flagged issue is resolved",
            ].map((it) => (
              <li
                key={it}
                className="text-[26px] text-foreground leading-snug flex gap-3"
              >
                <span className="text-accent shrink-0">·</span>
                <span>{it}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SlideFrame>
  );
}

/* -------------------- Slide 8 — Stakeholder Management -------------------- */
function S8() {
  const groups = [
    { t: "App Developers", d: "23K external developers · vocal on social media" },
    { t: "Governance & Legal", d: "Ecosystem integrity and policy compliance" },
    { t: "Operations / QA", d: "Internal review team conducting manual testing" },
    { t: "Internal Leadership", d: "Directors → VP of Engineering & Product Design" },
  ];
  return (
    <SlideFrame>
      <SlideHeader title="Principle: Shopify Is a Steward, Not Just an Operator" />
      <div className="grid grid-cols-2 gap-10 flex-1 min-h-0">
        <div className="flex flex-col gap-4 justify-center">
          {groups.map((g) => (
            <div
              key={g.t}
              className="flex items-stretch rounded-xl border border-border bg-surface overflow-hidden"
            >
              <div className="w-1.5 bg-accent shrink-0" />
              <div className="px-6 py-5">
                <div className="text-[26px] font-bold leading-tight">{g.t}</div>
                <div className="text-[20px] text-muted-foreground mt-1">{g.d}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="rounded-2xl border border-border bg-[#0b0f1a] p-10 flex flex-col justify-center">
          <div className="text-accent text-[20px] font-semibold uppercase tracking-[0.18em] mb-4">
            Challenges
          </div>
          <p className="text-[24px] text-muted-foreground leading-snug mb-8">
            A VP proposed opening the gates: let all apps in, let the marketplace
            self-regulate. On paper: faster SLA, fewer resources. In practice:
            copycat apps, low-quality submissions, eroded merchant trust.
          </p>
          <div className="rounded-xl border-l-4 border-accent bg-accent/10 px-6 py-5">
            <div className="text-accent text-[28px] font-semibold leading-snug">
              "We are the steward of this marketplace, not just the operator."
            </div>
          </div>
        </div>
      </div>
    </SlideFrame>
  );
}

/* -------------------- Slide 9 — Outcomes -------------------- */
function S9() {
  const rows = [
    { metric: "SLA", before: "45 days", after: "2 weeks" },
    { metric: "MCP Adoption", before: "—", after: "13% at launch" },
    { metric: "Reception", before: "—", after: "Positive dev forums" },
  ];
  return (
    <SlideFrame>
      <div className="text-accent text-[22px] font-semibold uppercase tracking-[0.2em] mb-4">
        Outcomes
      </div>
      <h1 className="text-[60px] font-extrabold leading-[1.05] tracking-tight mb-10">
        Results across all three tracks
      </h1>
      <div className="flex flex-col gap-6 flex-1 min-h-0">
        <div className="flex items-stretch rounded-2xl border border-border bg-surface overflow-hidden">
          <div className="w-1.5 bg-accent shrink-0" />
          <div className="p-8 flex-1">
            <div className="text-accent text-[20px] font-semibold uppercase tracking-[0.18em] mb-4">
              Product / Eng
            </div>
            <div className="grid grid-cols-[1.2fr_1fr_1.5fr] gap-6 text-[16px] uppercase tracking-[0.16em] text-muted-foreground pb-3 border-b border-border">
              <div>Metric</div>
              <div>Before</div>
              <div>After</div>
            </div>
            {rows.map((r) => (
              <div
                key={r.metric}
                className="grid grid-cols-[1.2fr_1fr_1.5fr] gap-6 py-3 border-b border-border last:border-b-0 items-center"
              >
                <div className="text-[22px] font-semibold text-foreground">
                  {r.metric}
                </div>
                <div className="text-[22px] text-muted-foreground font-mono">
                  {r.before}
                </div>
                <div className="text-[22px] text-[color:var(--positive)] font-semibold">
                  {r.after}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-stretch rounded-2xl border border-border bg-surface overflow-hidden">
          <div className="w-1.5 bg-accent shrink-0" />
          <div className="p-8 flex-1">
            <div className="text-accent text-[20px] font-semibold uppercase tracking-[0.18em] mb-3">
              Ops
            </div>
            <p className="text-[22px] text-muted-foreground leading-snug">
              Frontline ops team built for the most complex submissions — removed
              the bottleneck of generalist reviewers on nuanced cases.
            </p>
          </div>
        </div>
        <div className="flex items-stretch rounded-2xl border border-border bg-surface overflow-hidden">
          <div className="w-1.5 bg-accent shrink-0" />
          <div className="p-8 flex-1">
            <div className="text-accent text-[20px] font-semibold uppercase tracking-[0.18em] mb-3">
              Policy
            </div>
            <p className="text-[22px] text-muted-foreground leading-snug">
              Critical failures category introduced — apps with critical issues
              rejected outright, giving developers clearer signal on what truly
              blocks publication.
            </p>
          </div>
        </div>
      </div>
      <div className="text-[18px] uppercase tracking-[0.2em] text-muted-foreground mt-8">
        Jan → Apr 2026 · 4 months end to end
      </div>
    </SlideFrame>
  );
}

/* -------------------- Slide 10 — What I'd Do Differently -------------------- */
function S10() {
  return (
    <SlideFrame>
      <div className="text-accent text-[22px] font-semibold uppercase tracking-[0.2em] mb-4">
        What I'd do differently
      </div>
      <h1 className="text-[60px] font-extrabold leading-[1.05] tracking-tight mb-10">
        What I'd do differently
      </h1>
      <div className="rounded-2xl border border-border bg-surface p-12 flex-1 flex flex-col justify-center">
        <div className="text-[30px] font-bold text-foreground mb-5 leading-tight">
          Define governing principles before generating solutions.
        </div>
        <p className="text-[24px] text-muted-foreground leading-snug mb-6">
          We evaluated 40–50 ideas before aligning. Some took weeks to kill
          because we hadn't established governing principles upfront. The
          principle we should have led with:{" "}
          <span className="text-foreground font-semibold">
            "We are stewards of the marketplace. Quality is non-negotiable.
            Ecosystem integrity beats short-term throughput."
          </span>{" "}
          Used as a filter from day one, those principles would have eliminated
          half the idea list in week one and accelerated consensus across legal,
          governance, and leadership.
        </p>
        <div className="rounded-xl border-l-4 border-accent bg-accent/10 px-6 py-5">
          <div className="text-accent text-[24px] font-semibold leading-snug">
            Lesson: In multi-stakeholder environments, principles are a
            prioritization tool.
          </div>
        </div>
      </div>
    </SlideFrame>
  );
}

/* -------------------- Demo Slide — AI Self-Review Agent -------------------- */
function SDemo() {
  return (
    <SlideFrame>
      <div className="text-accent text-[22px] font-semibold uppercase tracking-[0.2em] mb-4">
        The Solution · Demo
      </div>
      <h1 className="text-[60px] font-extrabold leading-[1.05] tracking-tight mb-10">
        AI self-review agent — here's what it looks like
      </h1>
      <div className="flex-1 flex items-center justify-center min-h-0">
        {/* Terminal mock */}
        <div className="w-full max-w-[1100px] rounded-2xl border border-border bg-[#0b0f1a] overflow-hidden flex flex-col">
          <div className="flex items-center gap-3 px-6 py-4 border-b border-border bg-[#0a0e18]">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
            <span className="ml-4 text-muted-foreground font-mono text-[16px]">
              commerce-review · zsh
            </span>
          </div>
          <div className="p-8 font-mono text-[16px] leading-relaxed flex-1">
            <div className="text-foreground">
              <span className="text-accent">$</span> commerce app review --self
            </div>
            <div className="text-muted-foreground mb-5">
              Running compliance checks...
            </div>
            <div className="rounded-xl border border-border bg-[#0a0e18] p-6">
              <div className="text-foreground font-semibold mb-4 text-[18px]">
                Compliance Report
              </div>
              <div className="grid grid-cols-3 gap-4 mb-5">
                <div>
                  <div className="text-[color:var(--positive)] text-[40px] font-bold leading-none">29</div>
                  <div className="text-muted-foreground text-[14px] mt-1">Likely passing</div>
                </div>
                <div>
                  <div className="text-[#F59E0B] text-[40px] font-bold leading-none">3</div>
                  <div className="text-muted-foreground text-[14px] mt-1">Needs review</div>
                </div>
                <div>
                  <div className="text-[#ef4444] text-[40px] font-bold leading-none">1</div>
                  <div className="text-muted-foreground text-[14px] mt-1">Likely failing</div>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="text-foreground">
                    <span className="text-[#ef4444] mr-2">x</span>
                    webhooks/orders.create — invalid endpoint
                  </div>
                  <div className="text-muted-foreground text-[13px] ml-6">
                    returns 500 on test payload · recommended fix: verify HMAC
                  </div>
                </div>
                <div>
                  <div className="text-foreground">
                    <span className="text-[#F59E0B] mr-2">?</span>
                    GraphQL version 2023-04 is deprecated
                  </div>
                  <div className="text-muted-foreground text-[13px] ml-6">
                    upgrade to 2024-10 before submission
                  </div>
                </div>
                <div>
                  <div className="text-foreground">
                    <span className="text-[color:var(--positive)] mr-2">✓</span>
                    listing.screenshots — all 5 present, correct dimensions
                  </div>
                  <div className="text-muted-foreground text-[13px] ml-6">
                    1600×900 · PNG
                  </div>
                </div>
                <div>
                  <div className="text-foreground">
                    <span className="text-[color:var(--positive)] mr-2">✓</span>
                    oauth scopes — minimal & justified
                  </div>
                  <div className="text-muted-foreground text-[13px] ml-6">
                    read_products, write_orders
                  </div>
                </div>
              </div>
            </div>
            <div className="text-accent mt-5">$ _</div>
          </div>
        </div>
      </div>
    </SlideFrame>
  );
}

export const commerceSlides = [S1, S2, S3, SDemo, S4, S5, S6, S7, SDemo, S8, S9, S10];
