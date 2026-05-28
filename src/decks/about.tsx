import { SlideFrame } from "@/components/SlideFrame";

const ACCENT = "#3B82F6";
const MUTED = "#94A3B8";

const points = [
  "I grew up in the Philippines, and my obsession with tech eventually brought me to the Bay Area, then Seattle.",
  "I started out focused on UX, later realizing that systems and workflows are where I can create bigger long-term impact.",
  "I love routines and checklists. Consistency drives me, whether through morning smoothies, team rituals at work, or afternoon workouts.",
];

function S1() {
  return (
    <SlideFrame>
      <div className="flex-1 flex flex-col justify-center">
        <div
          className="font-mono text-[28px] uppercase tracking-[0.24em] mb-10"
          style={{ color: ACCENT }}
        >
          About
        </div>
        <h1 className="text-[96px] font-extrabold leading-[1.02] tracking-tight mb-20">
          Hi, I'm Mark.
        </h1>
        <ol className="space-y-8 max-w-[1500px]">
          {points.map((p, i) => (
            <li key={i} className="flex gap-12 text-[36px] leading-snug" style={{ color: "#E2E8F0" }}>
              <span
                className="font-mono text-[34px] shrink-0 w-12"
                style={{ color: ACCENT }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>{p}</span>
            </li>
          ))}
        </ol>
        <div
          className="font-mono text-[26px] uppercase tracking-[0.24em] mt-16"
          style={{ color: MUTED }}
        >
          Mark Tan
        </div>
      </div>
    </SlideFrame>
  );
}

export const aboutSlides = [S1];
