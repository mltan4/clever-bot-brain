import { SlideFrame } from "@/components/SlideFrame";
import { Chip, Card, Callout, Stat, SlideHeader } from "@/components/deck-ui";

/* -------------------- Slide 1 — Title -------------------- */
function S1() {
  return (
    <SlideFrame>
      <div className="flex-1 flex flex-col justify-center">
        <div className="text-accent text-[28px] font-semibold uppercase tracking-[0.22em] mb-8">
          Shopify App Store · Case Study
        </div>
        <h1 className="text-[88px] font-extrabold leading-[1.02] tracking-tight mb-8 max-w-[1600px]">
          Scaling the Shopify App Store
        </h1>
        <p className="text-[36px] text-muted-foreground max-w-[1500px] leading-snug mb-16">
          How we cut review SLA from{" "}
          <span className="text-foreground font-semibold">45 days to 2 weeks</span>{" "}
          using an AI-powered self-review toolkit.
        </p>
        <div className="text-[22px] uppercase tracking-[0.22em] text-muted-foreground">
          Project 1 of 2 · Mark Tan
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
        title="The Problem: A Good Problem That Became a Serious One"
      />
      <div className="grid grid-cols-3 gap-8 mb-12">
        <Stat value="40%" label="spike in app submission volume" tone="accent" />
        <Stat value="45 days" label="SLA at peak (benchmark: 11 days)" tone="negative" />
        <Stat value="23,000" label="developers affected — all vocal on social" tone="accent" />
      </div>
      <Callout label="Why It Mattered">
        These developers serve merchants generating{" "}
        <span className="text-accent font-semibold">$1.3B in commerce</span>. Slow
        reviews weren't just an ops problem — they were a reputational and
        ecosystem risk with CEO-level visibility.
      </Callout>
    </SlideFrame>
  );
}

/* -------------------- Slide 3 — Role & Metrics -------------------- */
function S3() {
  const funnel = [
    "Apps in the store",
    "Developers actively publishing",
    "SLA (time to process)",
    "Pass / reject rate",
    "Violations reported post-publish",
    "Reviews and ratings",
  ];
  return (
    <SlideFrame>
      <SlideHeader
        kicker="Role & Metrics"
        title="My Role: Grow the Store. Protect the Ecosystem."
      />
      <div className="grid grid-cols-2 gap-12 flex-1 min-h-0">
        <div className="flex flex-col justify-center">
          <p className="text-[30px] leading-snug text-muted-foreground">
            As lead PM for the Shopify App Store, my mandate was to{" "}
            <span className="text-foreground font-semibold">
              increase the number of apps published
            </span>{" "}
            while{" "}
            <span className="text-foreground font-semibold">
              maintaining integrity of the ecosystem
            </span>
            .
          </p>
          <p className="text-[30px] leading-snug text-muted-foreground mt-6">
            Two things in <span className="text-accent font-semibold">direct tension</span>{" "}
            when volume spikes.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          {funnel.map((label, i) => {
            const width = 100 - i * 11;
            return (
              <div
                key={label}
                className="rounded-lg border border-border bg-surface flex items-center justify-center px-6 py-3"
                style={{ width: `${width}%` }}
              >
                <span className="text-accent font-mono text-[18px] mr-3">
                  0{i + 1}
                </span>
                <span className="text-[20px] font-medium text-foreground text-center">
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

/* -------------------- Slide 4 — What Didn't Go as Planned -------------------- */
function S4() {
  const cols = [
    {
      label: "Hypothesis",
      body: "Back-and-forth communication is the bottleneck. With 150+ requirements, email threads were unmanageable.",
    },
    {
      label: "What We Built",
      body: "In-admin submission feedback tool — replaced free-form email with structured per-issue checklists.",
    },
    {
      label: "What Actually Happened",
      body: "Bounce rate didn't improve. Developers were submitting undercooked apps and relying on our QA team to catch issues for them.",
    },
  ];
  return (
    <SlideFrame>
      <SlideHeader
        kicker="What Didn't Go as Planned"
        title="We Solved the Wrong Problem First"
      />
      <div className="grid grid-cols-3 gap-8 mb-10">
        {cols.map((c, i) => (
          <Card key={c.label}>
            <div className="text-accent font-mono text-[24px] mb-3">
              0{i + 1}
            </div>
            <div className="text-[26px] uppercase tracking-[0.14em] text-foreground font-semibold mb-5">
              {c.label}
            </div>
            <div className="text-[24px] text-muted-foreground leading-snug">
              {c.body}
            </div>
          </Card>
        ))}
      </div>
      <Callout label="Real Insight">
        The root cause wasn't communication friction — developers weren't
        testing before submitting. <span className="text-accent font-semibold">We pivoted.</span>
      </Callout>
    </SlideFrame>
  );
}

/* -------------------- Slide 5 — The Solution -------------------- */
function S5() {
  return (
    <SlideFrame>
      <SlideHeader
        kicker="The Solution"
        title="Building Something Trustworthy, Not Just Smart"
      />
      <div className="flex-1 flex flex-col gap-10 min-h-0">
        <Card>
          <p className="text-[30px] leading-snug text-foreground">
            We didn't just point an LLM at 150 requirements and ship it. We
            partnered with our{" "}
            <span className="text-accent font-semibold">
              internal review SMEs
            </span>{" "}
            — people who had done this manually for years — to teach the system
            what good judgment actually looks like.
          </p>
          <p className="text-[26px] leading-snug text-muted-foreground mt-5">
            That shaped the logic, the confidence thresholds, and the language.
          </p>
        </Card>
        <Callout label="Why 'Likely Passing' Instead of 'Passing'">
          Developers treat Shopify's word as truth. Being{" "}
          <span className="text-[color:var(--negative)] font-semibold">
            wrong with confidence
          </span>{" "}
          is worse than being{" "}
          <span className="text-[color:var(--positive)] font-semibold">
            right with nuance
          </span>
          . The language was a deliberate trust decision.
        </Callout>
      </div>
    </SlideFrame>
  );
}

/* -------------------- Slide 6 — Execution -------------------- */
function S6() {
  const pods = [
    {
      horizon: "Short-term",
      title: "Submission Form",
      body: "Kept at MVP. Structured per-issue feedback replacing email. Still shipped — but descoped from multi-phase to lean v1 once we identified the real root cause.",
      accent: false,
    },
    {
      horizon: "Medium-term",
      title: "AI Toolkit",
      body: "AI self-review tool: runs against a developer's codebase in ~2 min. Checks all mechanical compliance requirements. Paired with a Partner Dashboard tracker that blocks resubmission until all issues resolved.",
      accent: true,
    },
    {
      horizon: "Longer-term",
      title: "Agentic Review (in progress)",
      body: "Agent that installs and tests apps end-to-end. Challenge: every app is unique. Focused on common patterns first — sign-in, login, plan selection — building specialization from there.",
      accent: false,
    },
  ];
  return (
    <SlideFrame>
      <SlideHeader kicker="Execution" title="Three Pods. Three Time Horizons." />
      <div className="grid grid-cols-3 gap-8 mb-10 flex-1 min-h-0">
        {pods.map((p) => (
          <Card key={p.title} accent={p.accent} className="flex flex-col">
            <div
              className={`text-[20px] uppercase tracking-[0.18em] mb-3 ${
                p.accent ? "text-accent" : "text-muted-foreground"
              }`}
            >
              {p.horizon}
            </div>
            <div className="text-[32px] font-bold mb-5 leading-tight">
              {p.title}
            </div>
            <div className="text-[22px] text-muted-foreground leading-snug">
              {p.body}
            </div>
          </Card>
        ))}
      </div>
      <div className="text-center text-[24px] text-muted-foreground">
        <span className="uppercase tracking-[0.18em] text-accent font-semibold">
          Prioritization:
        </span>{" "}
        Time to market{" "}
        <span className="text-foreground mx-2">→</span> Impact{" "}
        <span className="text-foreground mx-2">→</span> Complexity
      </div>
    </SlideFrame>
  );
}

/* -------------------- Slide 7 — Stakeholder Management -------------------- */
function S7() {
  const groups = [
    { icon: "◇", t: "App Developers", d: "23K, external, vocal" },
    { icon: "§", t: "Governance & Legal", d: "Policy + risk" },
    { icon: "◎", t: "Operations / QA Team", d: "Frontline reviewers" },
    { icon: "▲", t: "Internal Leadership", d: "Directors → VP" },
  ];
  return (
    <SlideFrame>
        <SlideHeader
        kicker="Stakeholder Management"
        title="Four Groups. One Principle That Ended the Hardest Debate."
      />
      <div className="grid grid-cols-2 gap-10 flex-1 min-h-0">
        <div className="flex flex-col gap-4 justify-center">
          {groups.map((g) => (
            <div
              key={g.t}
              className="flex items-center gap-6 rounded-xl border border-border bg-surface px-6 py-5"
            >
              <div className="w-14 h-14 rounded-lg bg-accent/15 text-accent flex items-center justify-center text-[28px] font-bold shrink-0">
                {g.icon}
              </div>
              <div>
                <div className="text-[28px] font-bold leading-tight">{g.t}</div>
                <div className="text-[20px] text-muted-foreground">{g.d}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <Callout label="Some Challenges">
            A VP proposed{" "}
            <span className="text-foreground font-semibold">
              opening the gates
            </span>{" "}
            — let all apps in, let the marketplace self-regulate. Faster SLA,
            fewer resources. But it violated ecosystem integrity.
            <div className="mt-5 text-[26px] text-muted-foreground">
              We aligned with a principle:
            </div>
            <div className="mt-3 text-accent text-[30px] font-semibold leading-snug">
              "We are the steward of this marketplace, not just the operator."
            </div>
            <div className="mt-5 text-[22px] uppercase tracking-[0.18em] text-muted-foreground">
              Principles move faster than debate.
            </div>
          </Callout>
        </div>
      </div>
    </SlideFrame>
  );
}

/* -------------------- Slide 8 — Outcomes + Reflection -------------------- */
function S8() {
  const rows = [
    { metric: "SLA", before: "45 days", after: "2 weeks" },
    {
      metric: "Developer adoption",
      before: "—",
      after: "13% using the MCP at launch",
    },
    {
      metric: "Reception",
      before: "—",
      after: "Positive developer posts on partner forums",
    },
  ];
  return (
    <SlideFrame>
      <SlideHeader
        kicker="Outcomes"
        title="Results and the Lesson I'd Apply Earlier Next Time"
      />
      <Card className="mb-8">
        <div className="grid grid-cols-[1.2fr_1fr_1.5fr] gap-6 text-[22px] uppercase tracking-[0.16em] text-muted-foreground pb-4 border-b border-border">
          <div>Metric</div>
          <div>Before</div>
          <div>After</div>
        </div>
        {rows.map((r) => (
          <div
            key={r.metric}
            className="grid grid-cols-[1.2fr_1fr_1.5fr] gap-6 py-5 border-b border-border last:border-b-0 items-center"
          >
            <div className="text-[26px] font-semibold text-foreground">
              {r.metric}
            </div>
            <div className="text-[26px] text-muted-foreground font-mono">
              {r.before}
            </div>
            <div className="text-[26px] text-[color:var(--positive)] font-semibold">
              {r.after}
            </div>
          </div>
        ))}
      </Card>
      <Callout label="What I'd Do Differently">
        We evaluated 40–50 ideas before aligning. Some took weeks to kill —
        like the "open the gates" proposal — because we hadn't established
        governing principles upfront.{" "}
        <span className="text-accent font-semibold">
          Define principles before generating solutions.
        </span>{" "}
        They do the work of alignment faster than any stakeholder meeting.
      </Callout>
    </SlideFrame>
  );
}

export const commerceSlides = [S1, S2, S3, S4, S5, S6, S7, S8];
