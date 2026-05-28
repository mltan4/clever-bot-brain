import { SlideFrame } from "@/components/SlideFrame";
import { Card, Callout, Stat, SlideHeader } from "@/components/deck-ui";

const ACCENT = "#3B82F6";
const POSITIVE = "#10B981";
const AMBER = "#F59E0B";
const MUTED = "#94A3B8";
const CARD_BG = "#1E293B";

/* -------------------- Slide 1: Title -------------------- */
function S1() {
  return (
    <SlideFrame>
      <div className="flex-1 flex flex-col justify-center">
        <div
          className="font-mono text-[28px] uppercase tracking-[0.24em] mb-10"
          style={{ color: ACCENT }}
        >
          Case Study
        </div>
        <h1 className="text-[88px] font-extrabold leading-[1.02] tracking-tight mb-10 max-w-[1600px]">
          Scaling Mobile<br />
          Release Cycles
        </h1>
        <p
          className="text-[40px] leading-snug max-w-[1400px] mb-20"
          style={{ color: "#E2E8F0" }}
        >
          Decoupling releases —{" "}
          <span style={{ color: POSITIVE }}>100K to 4M downloads</span> across 7
          products
        </p>
        <div
          className="font-mono text-[26px] uppercase tracking-[0.24em]"
          style={{ color: MUTED }}
        >
          Mark Tan
        </div>

      </div>
    </SlideFrame>
  );
}

/* -------------------- Slide 2: Business Context -------------------- */
function S2() {
  return (
    <SlideFrame>
      <SlideHeader title="Scaling Wyze Through Mobile" />
      <div className="grid grid-cols-3 gap-12 mb-20">
        <Stat value="100K → 4M" label="app downloads during my tenure" tone="accent" />
        <Stat value="1 → 7" label="hardware products in under 2 years" tone="accent" />
        <Stat value="$120M" label="Series B raised / ~$80M ARR" tone="accent" />
      </div>
      <p
        className="text-[34px] leading-snug max-w-[1500px]"
        style={{ color: "#E2E8F0" }}
      >
        Wyze's initial thesis: charge a fraction of Ring or Nest means that we
        win on volume. But cheap, interchangeable hardware is not enough. We
        have to deliver a good software experience with frequent updates.
      </p>

    </SlideFrame>
  );
}

/* -------------------- Slide 3: Role & Mandate -------------------- */
function S3() {
  const products = [
    "WyzeCam",
    "Wyze Lock",
    "Wyze Sensor",
    "Wyze Bulb",
    "Wyze Scale",
    "Wyze Band",
    "Wyze Cam v3",
  ];
  return (
    <SlideFrame>
      <SlideHeader title="My Role: Own the App & Connect the Hardware." />
      <div className="grid grid-cols-2 gap-16 flex-1 min-h-0">
        <div className="flex flex-col">
          <p
            className="text-[30px] leading-snug mb-10"
            style={{ color: "#E2E8F0" }}
          >
            As Director of Product for Mobile, my lane looked narrow — own the
            app, grow ratings, ship features. But the app was the connective
            tissue across every product Wyze made.
          </p>
          <div
            className="font-mono text-[30px] uppercase tracking-[0.18em] mb-7"
            style={{ color: ACCENT }}
          >
            What this actually meant:
          </div>
          <ol className="flex flex-col gap-12">
            {[
              "App growth (downloads, ratings, DAU)",
              "Cross-device experience cohesion",
              "Hardware launch coordination",
              "Mobile release velocity",
              "Post-launch retention",
            ].map((t, i) => (
              <li
                key={t}
                className="flex items-start gap-12 text-[32px]"
                style={{ color: "#E2E8F0" }}
              >
                <span
                  className="font-mono text-[30px] w-10 shrink-0"
                  style={{ color: ACCENT }}
                >
                  0{i + 1}
                </span>
                <span>{t}</span>
              </li>
            ))}
          </ol>
        </div>
        <div className="flex flex-col">
          <div
            className="font-mono text-[28px] uppercase tracking-[0.2em] mb-7"
            style={{ color: MUTED }}
          >
            All 7 products live in one app
          </div>
          <div className="grid grid-cols-3 gap-12 mb-10">
            {products.map((p) => (
              <div
                key={p}
                className="rounded-xl p-7 text-center text-[30px] font-semibold"
                style={{
                  background: CARD_BG,
                  border: `1px solid ${ACCENT}40`,
                }}
              >
                {p}
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="text-[34px]" style={{ color: MUTED }}>
              ↓
            </div>
            <div
              className="w-full rounded-2xl py-8 text-center text-[38px] font-bold"
              style={{
                background: `linear-gradient(90deg, ${ACCENT}, ${POSITIVE})`,
                color: "#0F172A",
              }}
            >
              Wyze Mobile App
            </div>
          </div>
        </div>
      </div>
    </SlideFrame>
  );
}

/* -------------------- Slide 4: What Didn't Go as Planned -------------------- */
function S4() {
  const cols = [
    {
      title: "How It Started",
      tone: MUTED,
      items: [
        "One product, one app",
        "Hardware-led roadmap — firmware and mobile shipped together",
        "Worked when the surface area was small",
      ],
    },
    {
      title: "What Changed",
      tone: ACCENT,
      items: [
        "New product every few months",
        "Six devices in under a year",
        "Mobile became a dependency every hardware team was blocked on",
      ],
    },
    {
      title: "What Was Failing",
      tone: AMBER,
      items: [
        "App support lagged hardware by weeks after launch",
        "Users had the device in-hand but the app wasn't ready",
        "First-week retention took the hit",
      ],
    },
  ];
  return (
    <SlideFrame>
      <SlideHeader title="Every Launch Was a Custom Build" />
      <div className="grid grid-cols-3 gap-12 mb-20 flex-1 min-h-0">
        {cols.map((c) => (
          <div
            key={c.title}
            className="rounded-2xl p-10 flex flex-col"
            style={{ background: CARD_BG }}
          >
            <div
              className="font-mono text-[24px] uppercase tracking-[0.18em] mb-7"
              style={{ color: c.tone }}
            >
              {c.title}
            </div>
            <ul className="flex flex-col gap-12">
              {c.items.map((it) => (
                <li
                  key={it}
                  className="flex items-start gap-3 text-[32px] leading-snug"
                  style={{ color: "#E2E8F0" }}
                >
                  <span style={{ color: c.tone }}>•</span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div
        className="rounded-xl px-10 py-8 border-l-4"
        style={{ background: `${AMBER}14`, borderColor: AMBER }}
      >
        <div
          className="font-mono text-[24px] uppercase tracking-[0.18em] mb-2"
          style={{ color: AMBER }}
        >
          Root Cause:
        </div>
        <p className="text-[30px] leading-snug">
          Mobile was architected to serve one product. Every new device was a
          custom build, not a category. There was no framework for a user's daily
          relationship with any Wyze product — we were building features, not
          habits.
        </p>
      </div>
    </SlideFrame>
  );
}

/* -------------------- Slide 5: Insight & Pivot -------------------- */
function S5() {
  const tracks = [
    {
      n: "01",
      t: "Alpha",
      d: "Internal daily builds. Engineers and PMs dogfooded against in-progress hardware firmware to catch integration breaks early.",
    },
    {
      n: "02",
      t: "Beta",
      d: "Opt-in power users on a weekly cadence. Stress-tested new device integrations against real homes before hardware launch.",
    },
    {
      n: "03",
      t: "TestFlight / Production",
      d: "Stable bi-weekly releases to the full user base. Independent of any single hardware ship date.",
    },
  ];
  return (
    <SlideFrame>
      <SlideHeader title="Decouple the Release Cycle" />
      <p
        className="text-[32px] leading-snug max-w-[1600px] mb-20"
        style={{ color: "#E2E8F0" }}
      >
        Instead of one mobile release tied to each hardware update, we ran
        multiple software releases per hardware cycle — and split the mobile app
        into three parallel tracks so integration work never blocked the ship.
      </p>
      <div className="grid grid-cols-3 gap-12 flex-1 min-h-0">
        {tracks.map((c) => (
          <Card key={c.n} accent>
            <div
              className="font-mono text-[34px] font-bold mb-10"
              style={{ color: POSITIVE }}
            >
              {c.n}
            </div>
            <div className="text-[40px] font-bold mb-10">{c.t}</div>
            <p className="text-[28px] leading-snug" style={{ color: "#E2E8F0" }}>
              {c.d}
            </p>
          </Card>
        ))}
      </div>
    </SlideFrame>
  );
}


/* -------------------- Slide 6: Stakeholder Work -------------------- */
function S6() {
  const stakeholders = [
    {
      l: "Hardware PMs",
      d: "Owned launch timelines · feared losing control of the launch moment",
    },
    {
      l: "Firmware Eng",
      d: "Shipped on hardware cycles · no existing model for staged integration",
    },
    {
      l: "Mobile Eng",
      d: "Already overloaded with custom builds per product launch",
    },
    {
      l: "Go-to-Market",
      d: "Coordinated press and launch dates around unified ship moments",
    },
  ];
  return (
    <SlideFrame>
      <SlideHeader title="Challenge: Breaking the Hardware Dependency" />
      <div className="grid grid-cols-2 gap-12 flex-1 min-h-0">
        <div className="flex flex-col gap-12">
          {stakeholders.map((s) => (
            <div
              key={s.l}
              className="rounded-xl p-10"
              style={{ background: CARD_BG }}
            >
              <div
                className="text-[30px] font-bold mb-2"
                style={{ color: ACCENT }}
              >
                {s.l}
              </div>
              <p
                className="text-[26px] leading-snug"
                style={{ color: "#E2E8F0" }}
              >
                {s.d}
              </p>
            </div>
          ))}
        </div>
        <div
          className="rounded-2xl p-10 flex flex-col gap-12"
          style={{ background: "#0B1220", border: `1px solid ${POSITIVE}40` }}
        >
          <div
            className="font-mono text-[24px] uppercase tracking-[0.18em]"
            style={{ color: POSITIVE }}
          >
            Cross-functional Alignment
          </div>
          <p className="text-[28px] leading-snug">
            The initial reaction from hardware PMs was concern about the app
            not being ready when the device shipped. The reframe didn't win the
            argument — data did.
          </p>

          <div
            className="rounded-xl p-10"
            style={{ background: "#1E293B" }}
          >
            <p
              className="text-[26px] leading-snug"
              style={{ color: "#E2E8F0" }}
            >
              I mapped the delay pattern — how many days elapsed between hardware
              launch and a stable, reviewed app experience. I tied it directly to
              first-week retention drop-off for those cohorts. Once the lag was
              visible as a retention problem — not a process problem — the
              conversation shifted from "why change?" to "how fast?"
            </p>
          </div>
        </div>
      </div>
    </SlideFrame>
  );
}

/* -------------------- Slide 7: Outcomes -------------------- */
function S7() {
  const rows = [
    { m: "App Downloads", b: "100K", a: "4 million" },
    { m: "Products", b: "1", a: "7 (6 in <1 year)" },
    { m: "ARR", b: "—", a: "~$80M" },
    
    { m: "90-Day Retention", b: "Single device", a: "↑ at 2+ devices" },
  ];
  return (
    <SlideFrame>
      <SlideHeader kicker="OUTCOMES" title="Results" />
      <div
        className="rounded-2xl overflow-hidden flex-1 min-h-0"
        style={{ background: CARD_BG }}
      >
        <div
          className="grid grid-cols-3 px-10 py-6 font-mono text-[26px] uppercase tracking-[0.18em]"
          style={{ color: MUTED, borderBottom: "1px solid #334155" }}
        >
          <div>Metric</div>
          <div>Before</div>
          <div>After</div>
        </div>
        {rows.map((r, i) => (
          <div
            key={r.m}
            className="grid grid-cols-3 px-10 py-7 items-center"
            style={{
              borderBottom: i < rows.length - 1 ? "1px solid #334155" : "none",
            }}
          >
            <div className="text-[32px] font-semibold">{r.m}</div>
            <div className="text-[32px]" style={{ color: MUTED }}>
              {r.b}
            </div>
            <div
              className="text-[38px] font-bold"
              style={{ color: POSITIVE }}
            >
              {r.a}
            </div>
          </div>
        ))}
      </div>
    </SlideFrame>
  );
}

/* -------------------- Slide 8: What I'd Do Differently -------------------- */
function S8() {
  const items = [
    {
      n: "1.",
      t: "Invest in category infrastructure earlier.",
      d: "We were reactive for the first few launches, treating each new device type as a custom build. The second and third camera cost far more eng time than they should have. Pushing for that architectural investment in month one — before multiple simultaneous launches made it impossible to stop — would have changed the economics entirely.",
    },
    {
      n: "2.",
      t: "Close the support feedback loop sooner.",
      d: "Some of the best post-launch signals came from support tickets, but there was no systematic way for that data to reach the product team in real time. Building that loop earlier would have surfaced which features were actually driving habit formation — versus which ones people ignored.",
    },
  ];
  return (
    <SlideFrame>
      <SlideHeader kicker="WHAT I'D DO DIFFERENTLY" title="What I'd do differently" />
      <div className="flex flex-col gap-12 flex-1 min-h-0">
        {items.map((it) => (
          <div
            key={it.n}
            className="rounded-2xl p-12 flex items-start gap-12"
            style={{ background: CARD_BG }}
          >
            <div
              className="font-mono text-[48px] font-bold shrink-0 w-16"
              style={{ color: ACCENT }}
            >
              {it.n}
            </div>
            <div>
              <div className="text-[34px] font-bold mb-10">{it.t}</div>
              <p
                className="text-[28px] leading-relaxed"
                style={{ color: "#E2E8F0" }}
              >
                {it.d}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SlideFrame>
  );
}

export const wyzeSlides = [S1, S2, S3, S4, S5, S6, S7, S8];
