import { SlideFrame } from "@/components/SlideFrame";

const ACCENT = "#3B82F6";
const MUTED = "#94A3B8";

const points = [
  "I grew up in the Philippines and spent years dreaming about working in tech in the US.",
  "My career has mostly been figuring things out — across product, ops, and community.",
  "I started out obsessed with UX, later realized systems and workflows create bigger long-term impact.",
  "I enjoy turning messy operational problems into calmer, more reliable systems.",
  "I'd love to teach and help more people onboard into new technology.",
];

function S1() {
  return (
    <SlideFrame>
      <div className="flex-1 flex flex-col justify-center">
        <div
          className="font-mono text-[22px] uppercase tracking-[0.24em] mb-8"
          style={{ color: ACCENT }}
        >
          About
        </div>
        <h1 className="text-[96px] font-extrabold leading-[1.02] tracking-tight mb-14">
          Hi, I'm Mark.
        </h1>
        <ol className="space-y-6 max-w-[1500px]">
          {points.map((p, i) => (
            <li key={i} className="flex gap-6 text-[30px] leading-snug" style={{ color: "#E2E8F0" }}>
              <span
                className="font-mono text-[28px] shrink-0 w-12"
                style={{ color: ACCENT }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>{p}</span>
            </li>
          ))}
        </ol>
        <div
          className="font-mono text-[20px] uppercase tracking-[0.24em] mt-16"
          style={{ color: MUTED }}
        >
          Mark Tan
        </div>
      </div>
    </SlideFrame>
  );
}

export const aboutSlides = [S1];
