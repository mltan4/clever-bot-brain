import { SlideFrame } from "@/components/SlideFrame";
import { Chip, Card, Callout, SlideHeader } from "@/components/deck-ui";

/* -------------------- Slide 1 -------------------- */
function S1() {
  return (
    <SlideFrame>
      <div className="flex-1 flex flex-col justify-center max-w-[1500px]">
        <div className="text-accent text-[28px] font-semibold uppercase tracking-[0.22em] mb-6">
          Personal AI System
        </div>
        <h1 className="text-[200px] font-extrabold leading-none tracking-tighter mb-6">
          Work<span className="text-accent">OS</span>
        </h1>
        <div className="text-[44px] text-foreground/90 font-semibold mb-8 leading-tight">
          Meeting notes → structured product knowledge
        </div>
        <p className="text-[28px] text-muted-foreground leading-snug mb-10">
          A personal AI-native operating system built with Cursor and Claude. Turns raw
          meeting transcripts into principles, decisions, project briefs, and specs —
          automatically.
        </p>
        <div className="flex flex-wrap gap-3">
          <Chip>Built with Cursor</Chip>
          <Chip>Claude + GPT</Chip>
          <Chip>Personal project</Chip>
          <Chip>3 automation tracks</Chip>
          <Chip>github.com/mltan4/WorkOS</Chip>
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
      t: "Unstructured meeting notes",
      d: "Weeks of discussions with no structure. Can't find decisions. Can't trace why something was built.",
    },
    {
      n: "02",
      t: "No link from meeting to spec",
      d: "Specs written from memory, not from what was decided. Decisions get relitigated every sprint.",
    },
    {
      n: "03",
      t: "Root cause",
      d: "Knowledge lived in my head, not the system. If I left or forgot, the context was gone.",
    },
  ];
  return (
    <SlideFrame>
      <SlideHeader kicker="The Problem" title="I lived in unstructured data." />
      <div className="grid grid-cols-3 gap-8 flex-1 min-h-0">
        {problems.map((p) => (
          <Card key={p.n}>
            <div className="text-accent font-mono text-[28px] mb-4">{p.n}</div>
            <div className="text-[32px] font-bold mb-4 leading-tight">{p.t}</div>
            <div className="text-[24px] text-muted-foreground leading-snug">{p.d}</div>
          </Card>
        ))}
      </div>
    </SlideFrame>
  );
}

/* -------------------- Slide 3 -------------------- */
function Pipeline() {
  const stages = [
    "00_inbox_meeting_notes",
    "01 Process",
    "02 Principles",
    "03 Decisions",
    "04 Projects",
    "05 Specs",
  ];
  return (
    <div className="flex items-stretch gap-3 flex-wrap">
      {stages.map((s, i) => (
        <div key={s} className="flex items-center gap-3">
          <div
            className={`px-5 py-4 rounded-xl border font-mono text-[20px] ${
              i === 0
                ? "bg-accent/15 border-accent text-foreground"
                : "bg-surface border-border text-foreground"
            }`}
          >
            {s}
          </div>
          {i < stages.length - 1 && <span className="text-accent text-[28px]">→</span>}
        </div>
      ))}
    </div>
  );
}
function S3() {
  return (
    <SlideFrame>
      <SlideHeader kicker="Architecture" title="One inbox. Five pipeline stages." />
      <div className="mb-10">
        <Pipeline />
      </div>
      <Card className="mb-10">
        <div className="text-[22px] uppercase tracking-[0.18em] text-accent mb-3">
          Key rule
        </div>
        <p className="text-[28px] leading-snug">
          AI creates <span className="font-semibold">draft</span> artifacts only.
          Humans set <span className="font-semibold text-accent">active / approved</span>.
          <br />
          <span className="font-mono text-[24px] text-muted-foreground">SOUL.md</span>{" "}
          defines what's worth promoting.
        </p>
      </Card>
      <Callout label="Callout">
        The AI read my meeting transcripts and generated the decision rules itself —
        I didn't write them, I reviewed and approved them.
      </Callout>
    </SlideFrame>
  );
}

/* -------------------- Slide 4 -------------------- */
function S4() {
  const tracks = [
    {
      n: "Manual",
      label: "controlled baseline",
      bullets: [
        "Step-by-step prompts in Cursor",
        "Review each stage",
        "Used for anything committed",
      ],
    },
    {
      n: "Semi-autonomous",
      label: "fast draft + compare",
      bullets: [
        "One prompt, full pipeline, one shot",
        "Run after a batch of meetings",
        "Compare output against manual",
      ],
    },
    {
      n: "Fully autonomous",
      label: "continuous + triage",
      bullets: [
        "File-watcher script",
        "Drop a note → pipeline runs unattended",
        "Uncertain outputs → human review queue",
      ],
    },
  ];
  return (
    <SlideFrame>
      <SlideHeader kicker="Three Execution Tracks" title="Manual → Semi-auto → Fully auto" />
      <div className="grid grid-cols-3 gap-8 mb-8">
        {tracks.map((t, i) => (
          <Card key={t.n} accent={i === 2}>
            <div className="text-accent font-mono text-[22px] mb-2">0{i + 1}</div>
            <div className="text-[30px] font-bold mb-2 leading-tight">{t.n}</div>
            <div className="text-[18px] uppercase tracking-[0.18em] text-muted-foreground mb-5">
              {t.label}
            </div>
            <ul className="space-y-3 text-[22px] text-muted-foreground leading-snug">
              {t.bullets.map((b) => (
                <li key={b} className="flex gap-3">
                  <span className="text-accent">›</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
      <Callout label="Why all three">
        Building all three lets me compare outputs. Manual vs auto reveals where AI
        makes different judgment calls — that's where the learning happens.
      </Callout>
    </SlideFrame>
  );
}

/* -------------------- Slide 5 -------------------- */
function S5() {
  const groups = [
    {
      t: "What makes a project worth building",
      d: "Material pain · leverage · ownable outcome · cost of delay.",
    },
    {
      t: "Symptoms vs root causes",
      d: "\"Reviews are slow\" → unclear criteria, not slow people. \"AI will fix it\" → judgment layer not designed yet.",
    },
    {
      t: "AI principles",
      d: "Draft downstream, never auto-promote. Source of truth = raw inbox + human-approved artifacts. Deduplicate before create.",
    },
    {
      t: "Anti-patterns",
      d: "Principle from one meeting → wait for 3+ signals. Spec before decision → rework. AI-set active status → human gate, always.",
    },
  ];
  return (
    <SlideFrame>
      <div className="mb-8">
        <div className="text-accent text-[22px] font-semibold uppercase tracking-[0.2em] mb-3">
          SOUL.md
        </div>
        <h1 className="text-[64px] font-extrabold leading-[1.05] tracking-tight mb-4">
          SOUL.md — the system's judgment layer
        </h1>
        <p className="text-[26px] text-muted-foreground max-w-[1500px] leading-snug">
          Before the AI generates anything, it reads this. It defines what's worth
          promoting, how to prioritize, and what makes a good spec.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6 flex-1 min-h-0">
        {groups.map((g, i) => (
          <Card key={g.t}>
            <div className="text-accent font-mono text-[22px] mb-2">0{i + 1}</div>
            <div className="text-[28px] font-bold mb-3 leading-tight">{g.t}</div>
            <div className="text-[20px] text-muted-foreground leading-snug">{g.d}</div>
          </Card>
        ))}
      </div>
    </SlideFrame>
  );
}

/* -------------------- Slide 6 -------------------- */
function S6() {
  const steps = [
    {
      t: "Drop meeting notes in inbox",
      d: "Raw, unedited. System detects the file.",
    },
    {
      t: "AI processes notes into structured summary",
      d: "Extracts decisions, actions, open questions. Quotes the speaker directly.",
    },
    {
      t: "Principles and decisions extracted",
      d: "Strong decision: \"route apps with risk score above 20 to audit\" — specific & actionable. Weak signal stays as candidate. Human approves → active.",
    },
    {
      t: "Project brief and spec generated",
      d: "Every requirement traces back to a decision or inbox note. Human sets approved.",
    },
  ];
  return (
    <SlideFrame>
      <SlideHeader kicker="End-to-End Flow" title="Drop a note. Get a spec." />
      <div className="flex flex-col gap-5 flex-1 min-h-0">
        {steps.map((s, i) => (
          <div key={s.t} className="flex items-start gap-6">
            <div className="flex flex-col items-center shrink-0">
              <div className="w-16 h-16 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-[28px] font-bold">
                {i + 1}
              </div>
              {i < steps.length - 1 && (
                <div className="w-[2px] flex-1 bg-border my-2 min-h-[20px]" />
              )}
            </div>
            <Card className="flex-1 py-6">
              <div className="text-[28px] font-bold mb-2 leading-tight">{s.t}</div>
              <div className="text-[22px] text-muted-foreground leading-snug">{s.d}</div>
            </Card>
          </div>
        ))}
      </div>
    </SlideFrame>
  );
}

/* -------------------- Slide 7 -------------------- */
function S7() {
  return (
    <SlideFrame>
      <SlideHeader kicker="What I Learned" title="I'm still the orchestrator." />
      <div className="grid grid-cols-2 gap-8 mb-8">
        <Card>
          <div className="text-[22px] uppercase tracking-[0.18em] text-accent mb-4">
            The surprise
          </div>
          <ul className="space-y-4 text-[21px] text-muted-foreground leading-snug">
            <li>The AI built the decision rules by reading my meetings — I didn't write them.</li>
            <li>Fully-automated output quality differs from manual in ways that matter.</li>
            <li>The guardrail of manually switching a project to active felt annoying — but is the right call.</li>
            <li>Structured data is only valuable if the index stays current.</li>
          </ul>
        </Card>
        <Card>
          <div className="text-[22px] uppercase tracking-[0.18em] text-[color:var(--positive)] mb-4">
            What I'd do next
          </div>
          <ul className="space-y-4 text-[21px] text-muted-foreground leading-snug">
            <li>Compare manual vs fully-auto outputs systematically — find where they diverge.</li>
            <li>Add Slack integration so notes can be dropped via message.</li>
            <li>SOUL.md pattern is directly applicable to a team — shared judgment in one doc.</li>
            <li>Real value isn't the spec — it's the <span className="text-accent font-semibold">decisions and principles</span>. Those are the glue across products.</li>
          </ul>
        </Card>
      </div>
      <Callout label="Why this matters for First Due">
        This is exactly what product ops needs — a system that turns messy signals
        into structured, traceable product knowledge. SOUL.md at team scale is just
        a shared operating philosophy.
      </Callout>
    </SlideFrame>
  );
}

export const workosSlides = [S1, S2, S3, S4, S5, S6, S7];
