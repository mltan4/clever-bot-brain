import { SlideFrame } from "@/components/SlideFrame";
import { Card, SlideHeader } from "@/components/deck-ui";

const EMERALD = "#10B981";
const BLUE = "#3B82F6";
const AMBER = "#F59E0B";
const MUTED = "#94A3B8";
const CARD_BG = "#1E293B";

/* -------------------- Slide 1: Title -------------------- */
function S1() {
  return (
    <SlideFrame>
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="flex-1 flex flex-col items-center justify-center text-center relative">
        <h1 className="text-[260px] font-extrabold leading-none tracking-tighter mb-10">
          Work<span style={{ color: EMERALD }}>OS</span>
        </h1>
        <p
          className="text-[36px] font-medium max-w-[1400px] mb-12 leading-snug"
          style={{ color: "#E2E8F0" }}
        >
          A personal AI-powered pipeline that turns raw meeting notes into
          structured product knowledge
        </p>
        <div className="flex items-center gap-4 mb-16">
          {["Cursor", "Claude", "Shell scripts"].map((t, i) => (
            <span key={t} className="flex items-center gap-4">
              <span
                className="px-6 py-2 rounded-full font-mono text-[22px]"
                style={{
                  background: "#1E293B",
                  border: `1px solid ${EMERALD}40`,
                  color: "#E2E8F0",
                }}
              >
                {t}
              </span>
              {i < 2 && <span style={{ color: MUTED }}>·</span>}
            </span>
          ))}
        </div>
        <div
          className="font-mono text-[20px] uppercase tracking-[0.24em]"
          style={{ color: MUTED }}
        >
          Part 2 of 2 — Personal AI Project Demo · Mark Tan
        </div>
      </div>
    </SlideFrame>
  );
}

/* -------------------- Slide 2: The Problem -------------------- */
function S2() {
  const pains = [
    "Decisions made in meetings live in scattered notes",
    "Three months later: no one can explain why we made a call",
    "Specs get written from memory, not from source of truth",
  ];
  return (
    <SlideFrame>
      <SlideHeader title="Every Team Has This Problem" />
      <div className="grid grid-cols-2 gap-10 flex-1 min-h-0">
        <div
          className="rounded-2xl p-10 font-mono text-[22px] leading-relaxed whitespace-pre-wrap"
          style={{ background: CARD_BG, color: MUTED }}
        >
          <div className="text-[20px] mb-6" style={{ color: BLUE }}>
            2025-11-14_product-sync.md
          </div>
          {`ok so we discussed the routing thing again
sarah thinks we should just let it through
but governance flagged it last week
someone mentioned the SLA is at 40 days now?
need to decide before sprint. TBD`}
        </div>
        <div className="flex flex-col justify-center gap-6">
          {pains.map((p) => (
            <div
              key={p}
              className="flex items-start gap-5 rounded-xl p-6"
              style={{ background: CARD_BG }}
            >
              <span className="text-[36px] leading-none" style={{ color: AMBER }}>
                ⚠
              </span>
              <span className="text-[26px] leading-snug">{p}</span>
            </div>
          ))}
        </div>
      </div>
      <div
        className="mt-10 rounded-xl px-8 py-6 border-l-4"
        style={{ background: `${EMERALD}14`, borderColor: EMERALD }}
      >
        <p className="text-[28px] font-semibold">
          I got tired of this. So I built a system to fix it.
        </p>
      </div>
    </SlideFrame>
  );
}

/* -------------------- Slide 3: The Pipeline -------------------- */
function S3() {
  const sources = [
    { folder: "00_inbox/notes/", desc: "Meeting notes", color: BLUE },
    { folder: "00_inbox/feedback/", desc: "Customer feedback", color: "#38BDF8" },
    { folder: "00_inbox/raw/", desc: "Raw data & signals", color: "#0EA5E9" },
  ];
  const pipeline = [
    { folder: "01_processed/", desc: "Cleaned summary + signals", color: "#64748B" },
    { folder: "02_principles/", desc: "Durable beliefs", color: "#A78BFA" },
    { folder: "03_decisions/", desc: "Committed forks", color: "#2DD4BF" },
    { folder: "05_specs/", desc: "Engineer-ready specs", color: EMERALD },
  ];
  return (
    <SlideFrame>
      <SlideHeader title="Many Inputs → Structured Product Knowledge → Back Again" />
      <div className="flex items-stretch gap-6 mb-8">
        <div className="flex flex-col gap-3 w-[360px]">
          <div
            className="font-mono text-[16px] uppercase tracking-[0.2em] mb-1"
            style={{ color: MUTED }}
          >
            Sources
          </div>
          {sources.map((s) => (
            <div
              key={s.folder}
              className="rounded-xl overflow-hidden"
              style={{ background: CARD_BG }}
            >
              <div className="h-2" style={{ background: s.color }} />
              <div className="px-5 py-3">
                <div
                  className="font-mono text-[16px] mb-1"
                  style={{ color: s.color }}
                >
                  {s.folder}
                </div>
                <div className="text-[18px]" style={{ color: "#E2E8F0" }}>
                  {s.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          className="flex flex-col items-center justify-center text-[40px]"
          style={{ color: MUTED }}
        >
          →
        </div>
        <div className="flex items-stretch gap-3 flex-1">
          {pipeline.map((b, i) => (
            <div key={b.folder} className="flex items-stretch gap-3 flex-1">
              <div
                className="flex-1 rounded-xl overflow-hidden"
                style={{ background: CARD_BG }}
              >
                <div className="h-2" style={{ background: b.color }} />
                <div className="p-5">
                  <div
                    className="font-mono text-[18px] mb-2"
                    style={{ color: b.color }}
                  >
                    {b.folder}
                  </div>
                  <div className="text-[18px]" style={{ color: "#E2E8F0" }}>
                    {b.desc}
                  </div>
                </div>
              </div>
              {i < pipeline.length - 1 && (
                <div className="flex items-center text-[28px]" style={{ color: MUTED }}>
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div
        className="flex items-center gap-4 mb-6 rounded-xl px-6 py-3"
        style={{ background: `${EMERALD}10`, border: `1px dashed ${EMERALD}55` }}
      >
        <span className="text-[24px]" style={{ color: EMERALD }}>↺</span>
        <span className="text-[20px]" style={{ color: "#E2E8F0" }}>
          Shipped specs generate new feedback and data — feeding the next loop.
          Work isn't linear; it's a cycle.
        </span>
      </div>
      <div className="grid grid-cols-2 gap-8 flex-1 min-h-0">
        <div className="rounded-2xl p-8" style={{ background: CARD_BG }}>
          <div
            className="font-mono text-[20px] uppercase tracking-[0.18em] mb-4"
            style={{ color: MUTED }}
          >
            Before — Raw
          </div>
          <p className="text-[24px] font-mono leading-snug" style={{ color: MUTED }}>
            sarah thinks we should just let it through but governance flagged it
          </p>
        </div>
        <div
          className="rounded-2xl p-8 border-2"
          style={{ background: CARD_BG, borderColor: EMERALD }}
        >
          <div
            className="font-mono text-[20px] uppercase tracking-[0.18em] mb-4"
            style={{ color: EMERALD }}
          >
            After — Structured
          </div>
          <p className="text-[24px] leading-snug">
            <span className="font-semibold">Decision:</span> Reject open-gate
            proposal. <span className="font-semibold">Rationale:</span> Ecosystem
            integrity over SLA speed. <span className="font-semibold">Owner:</span>{" "}
            Mark. <span className="font-semibold">Status:</span>{" "}
            <span style={{ color: EMERALD }}>active</span>.
          </p>
        </div>
      </div>
    </SlideFrame>
  );
}

/* -------------------- Slide 4: Three Tracks -------------------- */
function S4() {
  const tracks = [
    {
      title: "Manual",
      pill: "CONTROLLED",
      pillColor: MUTED,
      folder: "manual_outputs/",
      body: "I review every stage before it advances. Principles, decisions, projects, specs all require my sign-off.",
      tag: "Human sets: active / approved",
      border: "transparent",
    },
    {
      title: "Semi-Autonomous",
      pill: "BATCH",
      pillColor: BLUE,
      folder: "auto_outputs/",
      body: "One orchestration prompt runs the full pipeline. I compare outputs against the manual baseline using comparison reports.",
      tag: "Human reviews before merging",
      border: BLUE,
    },
    {
      title: "Fully Autonomous",
      pill: "WATCHING",
      pillColor: AMBER,
      folder: "fully_auto_outputs/",
      body: "A script monitors the inbox folder. New notes trigger the full pipeline automatically. Low-confidence outputs go to a human review queue.",
      tag: "Agents flag; humans decide",
      border: "transparent",
    },
  ];
  return (
    <SlideFrame>
      <div className="mb-6">
        <h1 className="text-[60px] font-extrabold leading-tight tracking-tight mb-3">
          I Didn't Just Automate Everything. I Compared.
        </h1>
        <p className="text-[24px]" style={{ color: MUTED }}>
          Three execution tracks — designed to understand where human judgment is
          irreplaceable
        </p>
      </div>
      <div className="grid grid-cols-3 gap-8 flex-1 min-h-0">
        {tracks.map((t) => (
          <div
            key={t.title}
            className="rounded-2xl p-8 flex flex-col border-2"
            style={{
              background: CARD_BG,
              borderColor: t.border,
            }}
          >
            <span
              className="self-start px-3 py-1 rounded-md font-mono text-[16px] mb-5"
              style={{ background: `${t.pillColor}22`, color: t.pillColor }}
            >
              {t.pill}
            </span>
            <h2 className="text-[40px] font-bold mb-3">{t.title}</h2>
            <div className="font-mono text-[20px] mb-6" style={{ color: MUTED }}>
              {t.folder}
            </div>
            <p className="text-[22px] leading-snug flex-1 mb-8">{t.body}</p>
            <div
              className="text-[18px] font-mono pt-5 border-t"
              style={{ borderColor: "#334155", color: EMERALD }}
            >
              {t.tag}
            </div>
          </div>
        ))}
      </div>
      <p
        className="mt-8 text-[24px] text-center italic"
        style={{ color: "#E2E8F0" }}
      >
        Same input. Three outputs. The diff taught me where I need to stay in the
        loop.
      </p>
    </SlideFrame>
  );
}

/* -------------------- Slide 5: SOUL.md -------------------- */
function S5() {
  const items = [
    {
      color: BLUE,
      title: "What makes a project strategically important",
      body: "Material pain + leverage + ownable outcome + decision debt + cost of delay. All five. Not four.",
    },
    {
      color: "#A78BFA",
      title: "Symptoms vs root causes",
      body: "'Reviews are slow' is a symptom. Unclear criteria, wrong routing, capacity model — those are root causes.",
    },
    {
      color: EMERALD,
      title: "Human gates at every stage",
      body: "Agents create draft and proposed only. Humans set active and approved. Always.",
    },
    {
      color: AMBER,
      title: "When NOT to promote",
      body: "One-off opinion stays in notes. Platitudes don't become principles. No owner = no project.",
    },
  ];
  return (
    <SlideFrame>
      <h1 className="text-[52px] font-extrabold leading-tight tracking-tight mb-8">
        The Part That Makes It Work Isn't the Automation
      </h1>
      <div className="text-center mb-10">
        <div
          className="font-mono text-[80px] font-bold mb-3"
          style={{ color: EMERALD }}
        >
          SOUL.md
        </div>
        <p className="text-[24px]" style={{ color: MUTED }}>
          The product judgment layer — what the AI reads to know what good looks
          like
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6 flex-1 min-h-0">
        {items.map((it) => (
          <div
            key={it.title}
            className="rounded-xl p-7 border-l-4"
            style={{ background: CARD_BG, borderColor: it.color }}
          >
            <div
              className="text-[24px] font-bold mb-3"
              style={{ color: it.color }}
            >
              {it.title}
            </div>
            <p className="text-[20px] leading-snug" style={{ color: "#E2E8F0" }}>
              {it.body}
            </p>
          </div>
        ))}
      </div>
      <div
        className="mt-8 rounded-xl px-8 py-5 border-l-4"
        style={{ background: `${EMERALD}14`, borderColor: EMERALD }}
      >
        <p className="text-[24px] font-semibold">
          Boring beats clever. Encode judgment into the system — not tribal
          knowledge in Slack.
        </p>
      </div>
    </SlideFrame>
  );
}

/* -------------------- Slide 6: The Connection -------------------- */
function S6() {
  const workos = [
    "Raw conversation",
    "Structured artifacts",
    "Human-gated decisions",
  ];
  const firstDue = [
    "Customer conversation / Fusion Day",
    "AI-generated spec",
    "Engineering picks it up",
  ];
  return (
    <SlideFrame>
      <SlideHeader title="Why I Built This for Myself — and Why It Matters Here" />
      <div className="grid grid-cols-[1fr_auto_1fr] gap-8 items-center flex-1 min-h-0">
        <div className="flex flex-col gap-4">
          <div
            className="font-mono text-[18px] uppercase tracking-[0.2em] mb-2"
            style={{ color: EMERALD }}
          >
            WorkOS
          </div>
          {workos.map((s) => (
            <div
              key={s}
              className="rounded-xl p-6 flex items-center gap-4"
              style={{ background: CARD_BG }}
            >
              <span className="text-[28px]" style={{ color: EMERALD }}>
                →
              </span>
              <span className="text-[24px]">{s}</span>
            </div>
          ))}
        </div>
        <div
          className="text-[22px] font-bold text-center px-6 py-4 rounded-xl max-w-[220px]"
          style={{ background: `${AMBER}18`, color: AMBER }}
        >
          Same problem.
          <br />
          Same solution pattern.
        </div>
        <div className="flex flex-col gap-4">
          <div
            className="font-mono text-[18px] uppercase tracking-[0.2em] mb-2"
            style={{ color: BLUE }}
          >
            First Due AIPDLC
          </div>
          {firstDue.map((s) => (
            <div
              key={s}
              className="rounded-xl p-6 flex items-center gap-4 border-2"
              style={{ background: CARD_BG, borderColor: BLUE }}
            >
              <span className="text-[28px]" style={{ color: BLUE }}>
                →
              </span>
              <span className="text-[24px]">{s}</span>
            </div>
          ))}
        </div>
      </div>
      <div
        className="mt-10 rounded-xl px-8 py-6 border-l-4"
        style={{ background: `${EMERALD}14`, borderColor: EMERALD }}
      >
        <p className="text-[24px] leading-snug">
          The question I kept asking while building WorkOS is the same one this
          role asks every day: where does AI add leverage — and where does the
          human have to stay in the loop?
        </p>
      </div>
    </SlideFrame>
  );
}

/* -------------------- Slide 7: What's Next -------------------- */
function S7() {
  const rows = [
    {
      n: "01",
      t: "Multi-source ingestion",
      d: "Right now it only reads meeting notes. The next version ingests customer signals, codebase context, and existing product behavior — so specs are grounded in reality, not just conversations.",
    },
    {
      n: "02",
      t: "Hosted triggers",
      d: "Cursor-based workflows require an open computer. Rebuilding the fully autonomous track on a hosted platform (like Gum Loop) means the pipeline runs when I'm not available.",
    },
    {
      n: "03",
      t: "Team-level governance",
      d: "A personal workflow becomes an org tool when you add shared judgment standards, multi-owner artifacts, and a review queue multiple people can triage.",
    },
  ];
  return (
    <SlideFrame>
      <div className="mb-8">
        <h1 className="text-[60px] font-extrabold leading-tight tracking-tight mb-3">
          What I'd Build Next
        </h1>
        <p className="text-[24px]" style={{ color: MUTED }}>
          If scaling WorkOS from personal tool to team system
        </p>
      </div>
      <div className="flex flex-col gap-5 flex-1 min-h-0">
        {rows.map((r) => (
          <div
            key={r.n}
            className="rounded-xl p-7 flex items-start gap-7"
            style={{ background: CARD_BG }}
          >
            <div
              className="font-mono text-[42px] font-bold shrink-0 w-20"
              style={{ color: EMERALD }}
            >
              {r.n}
            </div>
            <div className="flex-1">
              <div className="text-[30px] font-bold mb-2">{r.t}</div>
              <p className="text-[22px] leading-snug" style={{ color: "#E2E8F0" }}>
                {r.d}
              </p>
            </div>
          </div>
        ))}
      </div>
      <p
        className="mt-8 text-[26px] font-semibold italic"
        style={{ color: EMERALD }}
      >
        v0.1 taught me where AI earns trust. The next version is designed around
        that.
      </p>
    </SlideFrame>
  );
}

export const workosSlides = [S1, S2, S3, S4, S5, S6, S7];
