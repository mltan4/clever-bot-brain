import { SlideFrame } from "@/components/SlideFrame";
import { Chip, Card, Callout, Stat, SlideHeader } from "@/components/deck-ui";

/* -------------------- Slide 1 -------------------- */
function S1() {
  return (
    <SlideFrame>
      <div className="flex-1 flex flex-col justify-center">
        <div className="text-accent text-[28px] font-semibold uppercase tracking-[0.22em] mb-6">
          Commerce · Case Study
        </div>
        <div className="text-[180px] font-extrabold leading-none tracking-tight text-foreground mb-2">
          10<span className="text-accent">%</span>
        </div>
        <div className="text-[32px] text-muted-foreground mb-12 max-w-[1400px]">
          of Commerce developers adopted the tool within weeks of launch
        </div>
        <h1 className="text-[80px] font-extrabold leading-[1.05] tracking-tight mb-6">
          Commerce AI Self-Review Agent
        </h1>
        <p className="text-[32px] text-muted-foreground max-w-[1500px] leading-snug mb-10">
          An AI-native compliance tool that collapsed 3–6 week review cycles to
          days by moving quality upstream — before submission.
        </p>
        <div className="flex flex-wrap gap-3">
          <Chip>Commerce App Store PM</Chip>
          <Chip>AI-Native Tool</Chip>
          <Chip>Ops + Product</Chip>
          <Chip>Cross-Functional</Chip>
        </div>
      </div>
    </SlideFrame>
  );
}

/* -------------------- Slide 2 -------------------- */
function S2() {
  const problems = [
    {
      n: "01",
      t: "Volume tripled",
      d: "App submission volume tripled in 12 months — reviewers were overloaded.",
    },
    {
      n: "02",
      t: "Mechanical rejections",
      d: "Half of rejections were mechanical — wrong webhooks, stale GraphQL versions, missing listing fields. Things a linter could catch in seconds.",
    },
    {
      n: "03",
      t: "Zero visibility",
      d: "Developers had zero visibility until after rejection. Submit, wait 4–7 days, get rejected, fix, resubmit, wait again. 3–6 week cycles.",
    },
  ];
  return (
    <SlideFrame>
      <SlideHeader kicker="Business Context" title="The review loop was broken" />
      <div className="grid grid-cols-3 gap-8 mb-12">
        {problems.map((p) => (
          <Card key={p.n}>
            <div className="text-accent font-mono text-[28px] mb-4">{p.n}</div>
            <div className="text-[34px] font-bold mb-4 leading-tight">{p.t}</div>
            <div className="text-[24px] text-muted-foreground leading-snug">{p.d}</div>
          </Card>
        ))}
      </div>
      <Callout label="Root Cause">
        Developers weren't submitting high-quality apps because they had no way
        to know what compliant meant <em>before</em> hitting submit.
      </Callout>
    </SlideFrame>
  );
}

/* -------------------- Slide 3 -------------------- */
function Terminal() {
  const Row = ({
    status,
    label,
    detail,
  }: {
    status: "pass" | "review" | "fail";
    label: string;
    detail: string;
  }) => {
    const color =
      status === "pass"
        ? "text-[color:var(--positive)]"
        : status === "review"
          ? "text-amber-400"
          : "text-[color:var(--negative)]";
    const icon = status === "pass" ? "✓" : status === "review" ? "?" : "✗";
    return (
      <div className="flex items-start gap-3 py-1">
        <span className={`${color} font-bold w-6 shrink-0`}>{icon}</span>
        <div className="flex-1 min-w-0">
          <div className="text-foreground">{label}</div>
          <div className="text-muted-foreground text-[18px] pl-0">{detail}</div>
        </div>
      </div>
    );
  };
  return (
    <div className="rounded-2xl border border-border bg-[oklch(0.12_0.02_265)] overflow-hidden font-mono text-[20px]">
      <div className="flex items-center gap-2 px-5 py-3 border-b border-border bg-surface/80">
        <span className="w-3 h-3 rounded-full bg-red-500/80" />
        <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <span className="w-3 h-3 rounded-full bg-green-500/80" />
        <span className="ml-3 text-muted-foreground text-[16px]">
          commerce-review · zsh
        </span>
      </div>
      <div className="p-6 leading-relaxed">
        <div className="text-muted-foreground">
          <span className="text-accent">$</span> commerce app review --self
        </div>
        <div className="text-muted-foreground">Running compliance checks...</div>
        <div className="mt-4 border border-border rounded-lg p-4 bg-surface/40">
          <div className="text-[22px] font-bold mb-3 text-foreground">
            Compliance Report
          </div>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div>
              <div className="text-[40px] font-bold text-[color:var(--positive)]">29</div>
              <div className="text-[16px] text-muted-foreground">Likely passing</div>
            </div>
            <div>
              <div className="text-[40px] font-bold text-amber-400">3</div>
              <div className="text-[16px] text-muted-foreground">Needs review</div>
            </div>
            <div>
              <div className="text-[40px] font-bold text-[color:var(--negative)]">1</div>
              <div className="text-[16px] text-muted-foreground">Likely failing</div>
            </div>
          </div>
          <Row
            status="fail"
            label="webhooks/orders.create — invalid endpoint"
            detail="returns 500 on test payload · recommended fix: verify HMAC"
          />
          <Row
            status="review"
            label="GraphQL version 2023-04 is deprecated"
            detail="upgrade to 2024-10 before submission"
          />
          <Row
            status="pass"
            label="listing.screenshots — all 5 present, correct dimensions"
            detail="1600×900 · PNG"
          />
          <Row
            status="pass"
            label="oauth scopes — minimal & justified"
            detail="read_products, write_orders"
          />
        </div>
        <div className="mt-3 text-muted-foreground">
          <span className="text-accent">$</span>{" "}
          <span className="opacity-60">_</span>
        </div>
      </div>
    </div>
  );
}
function S3() {
  return (
    <SlideFrame>
      <SlideHeader
        kicker="The Solution · Demo"
        title="AI self-review agent — here's what it looks like"
      />
      <div className="grid grid-cols-2 gap-10 flex-1 min-h-0">
        <Terminal />
        <div className="flex flex-col gap-5">
          {[
            {
              t: "Recommendation, not a blocker",
              d: "Preserves trust if the tool is wrong — developers stay in control of submission.",
            },
            {
              t: "Softened language",
              d: "\"Likely passing\" / \"likely failing\" — never absolute. Calibrated to confidence.",
            },
            {
              t: "Unlimited runs",
              d: "Fix and re-run as many times as you want. The onus is on the developer.",
            },
          ].map((c, i) => (
            <Card key={c.t}>
              <div className="flex items-start gap-5">
                <div className="text-accent text-[36px] font-bold font-mono leading-none">
                  0{i + 1}
                </div>
                <div>
                  <div className="text-[30px] font-bold mb-2">{c.t}</div>
                  <div className="text-[22px] text-muted-foreground leading-snug">
                    {c.d}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </SlideFrame>
  );
}

/* -------------------- Slide 4 -------------------- */
function S4() {
  const options = [
    { t: "Automate pre-submission checks", chosen: false },
    { t: "Deploy better docs & tooling", chosen: false },
    { t: "Change the requirements", chosen: false },
    { t: "AI self-review agent", chosen: true },
  ];
  return (
    <SlideFrame>
      <SlideHeader kicker="Key Decision" title="Why this, not something else" />
      <div className="grid grid-cols-2 gap-10 flex-1 min-h-0">
        <div>
          <div className="text-[22px] uppercase tracking-[0.2em] text-muted-foreground mb-5">
            Options considered
          </div>
          <div className="flex flex-col gap-4">
            {options.map((o) => (
              <div
                key={o.t}
                className={`flex items-center gap-5 rounded-xl border px-6 py-5 ${
                  o.chosen
                    ? "border-accent bg-accent/10"
                    : "border-border bg-surface"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-[20px] font-bold ${
                    o.chosen ? "bg-accent text-accent-foreground" : "bg-surface-2 text-muted-foreground"
                  }`}
                >
                  {o.chosen ? "✓" : ""}
                </div>
                <div
                  className={`text-[28px] ${
                    o.chosen ? "font-bold text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {o.t}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="text-[22px] uppercase tracking-[0.2em] text-muted-foreground">
            Why this one
          </div>
          <Card accent>
            <p className="text-[30px] leading-snug text-foreground">
              The others treated <span className="text-muted-foreground">symptoms</span>.
              <br />
              This one changed <span className="text-accent font-semibold">developer behavior upstream</span>.
            </p>
            <p className="text-[24px] text-muted-foreground mt-5 leading-snug">
              Root cause: developers weren't submitting high-quality apps. Fix the input,
              not the review queue.
            </p>
          </Card>
          <Callout label="Stakeholders to align">
            External developers · Internal review ops · Product + Engineering + Design leadership.
          </Callout>
        </div>
      </div>
    </SlideFrame>
  );
}

/* -------------------- Slide 5 -------------------- */
function S5() {
  const groups = [
    {
      t: "Developer Community",
      d: "Primary beneficiary — and the source of accountability if the tool was wrong.",
    },
    {
      t: "App Review Team",
      d: "Had to show this reduces burden, not undermines the role. AI handles mechanical; humans handle judgment.",
    },
    {
      t: "Product & Eng Leadership",
      d: "Hardest alignment — multiple credible alternatives existed. Made the case this was root cause, not symptom.",
    },
    {
      t: "Design Leadership",
      d: "Output format had to be actionable, not just accurate. How it reads matters as much as what it says.",
    },
  ];
  return (
    <SlideFrame>
      <SlideHeader
        kicker="Cross-Functional Influence"
        title="Four stakeholder groups. One alignment problem."
      />
      <div className="grid grid-cols-2 gap-8 flex-1 min-h-0">
        {groups.map((g, i) => (
          <Card key={g.t}>
            <div className="flex items-start gap-5">
              <div className="text-accent font-mono text-[28px] leading-none">
                0{i + 1}
              </div>
              <div>
                <div className="text-[32px] font-bold mb-3">{g.t}</div>
                <div className="text-[22px] text-muted-foreground leading-snug">
                  {g.d}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </SlideFrame>
  );
}

/* -------------------- Slide 6 -------------------- */
function BarChart() {
  const data = [
    { label: "Initial wait", days: 7, hl: false },
    { label: "Fix cycle 1", days: 5, hl: false },
    { label: "Fix cycle 2", days: 4, hl: false },
    { label: "With AI self-review", days: 1.5, hl: true },
  ];
  const max = 8;
  return (
    <Card className="h-full flex flex-col">
      <div className="text-[24px] font-semibold mb-2">Days per stage</div>
      <div className="text-[18px] text-muted-foreground mb-6">
        Old cycle vs. with AI self-review
      </div>
      <div className="flex-1 flex items-end gap-6">
        {data.map((d) => {
          const h = (d.days / max) * 100;
          return (
            <div key={d.label} className="flex-1 flex flex-col items-center gap-3">
              <div
                className={`text-[24px] font-bold ${
                  d.hl ? "text-accent" : "text-muted-foreground"
                }`}
              >
                {d.days}d
              </div>
              <div className="w-full flex-1 flex items-end">
                <div
                  className={`w-full rounded-t-md ${
                    d.hl ? "bg-accent" : "bg-surface-2"
                  }`}
                  style={{ height: `${h}%` }}
                />
              </div>
              <div
                className={`text-[18px] text-center leading-tight ${
                  d.hl ? "text-foreground font-semibold" : "text-muted-foreground"
                }`}
              >
                {d.label}
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
function S6() {
  return (
    <SlideFrame>
      <SlideHeader kicker="Outcomes" title="10% adoption. Review cycles collapsed." />
      <div className="grid grid-cols-3 gap-8 mb-10">
        <Stat value="3–6 wks" label="Old review cycle" tone="negative" />
        <Stat value="~Days" label="New cycle for clean submissions" tone="positive" />
        <Stat value="10%" label="Developer adoption within weeks" tone="accent" />
      </div>
      <div className="flex-1 min-h-0">
        <BarChart />
      </div>
    </SlideFrame>
  );
}

/* -------------------- Slide 7 -------------------- */
function S7() {
  return (
    <SlideFrame>
      <SlideHeader
        kicker="What Didn't Go as Planned"
        title="When you ship a recommendation, you own every recommendation."
      />
      <div className="grid grid-cols-2 gap-8 mb-8">
        <Card>
          <div className="text-[22px] uppercase tracking-[0.18em] text-[color:var(--negative)] mb-4">
            What went wrong
          </div>
          <ul className="space-y-4 text-[22px] text-muted-foreground leading-snug">
            <li>Confidence levels were too high early on.</li>
            <li>Developers saw passes, submitted, and still got rejected.</li>
            <li>They came back with receipts: "the tool said we were good."</li>
            <li>Old results were used against us when standards evolved.</li>
          </ul>
        </Card>
        <Card>
          <div className="text-[22px] uppercase tracking-[0.18em] text-[color:var(--positive)] mb-4">
            What changed
          </div>
          <ul className="space-y-4 text-[22px] text-muted-foreground leading-snug">
            <li>Became more conservative — only confirm pass at high confidence.</li>
            <li>Softened language to "likely passing / likely failing."</li>
            <li>Designed for <em>how people interpret output</em>, not just accuracy.</li>
            <li><span className="text-accent font-semibold">Do differently:</span> surface the tool earlier in the build, not just pre-submission.</li>
          </ul>
        </Card>
      </div>
      <Callout label="The real lesson">
        AI confidence calibration isn't just a technical problem — it's a trust
        and communication problem.
      </Callout>
    </SlideFrame>
  );
}

export const commerceSlides = [S1, S2, S3, S4, S5, S6, S7];
