"use client";

import { useMemo, useState } from "react";
import { volumeProfile } from "@/lib/series";
import { DemoFrame, Segmented } from "./DemoFrame";

/* Interactive sample of Volume Explorer — seeded sample data, not real market data. */

type View = "NQ" | "ES" | "both";
const N = 78; // 5-minute bars, 09:30–16:00 ET
const W = 800;
const H = 280;

const timeAt = (i: number) => {
  const m = 9 * 60 + 30 + i * 5;
  return `${String(Math.floor(m / 60)).padStart(2, "0")}:${String(m % 60).padStart(2, "0")}`;
};

const MARKERS = [
  { i: 0, label: "Open" },
  { i: 18, label: "11:00" },
  { i: 48, label: "13:30" },
  { i: 77, label: "Close" },
];

export function VolumeDemo() {
  const [view, setView] = useState<View>("both");
  const [hover, setHover] = useState<number | null>(null);

  const data = useMemo(() => ({ NQ: volumeProfile(3, N), ES: volumeProfile(9, N).map((v) => v * 0.85) }), []);
  const avg = {
    NQ: data.NQ.reduce((a, b) => a + b, 0) / N,
    ES: data.ES.reduce((a, b) => a + b, 0) / N,
  };
  const max = Math.max(...data.NQ, ...data.ES);
  const step = W / N;
  const showNQ = view !== "ES";
  const showES = view !== "NQ";

  const pick = (e: React.PointerEvent<SVGSVGElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    setHover(Math.max(0, Math.min(N - 1, Math.floor(((e.clientX - r.left) / r.width) * N))));
  };

  const esPath = data.ES.map((v, i) => `${i ? "L" : "M"}${(i * step + step / 2).toFixed(1)} ${(H - (v / max) * H).toFixed(1)}`).join(" ");

  return (
    <DemoFrame
      title="volume-explorer · streamlit"
      controls={
        <Segmented
          label="Contract"
          value={view}
          onChange={setView}
          options={[
            { value: "both", label: "NQ + ES" },
            { value: "NQ", label: "NQ" },
            { value: "ES", label: "ES" },
          ]}
        />
      }
    >
      <div className="p-4 md:p-6">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <p className="font-medium text-fg">Average volume by time of day</p>
          <p className="min-h-5 font-mono text-[10px] text-muted tabular-nums sm:text-[11px]">
            {hover !== null ? (
              <>
                {timeAt(hover)} ET
                {showNQ && <span className="ml-3 text-accent-soft">NQ {(data.NQ[hover] / avg.NQ).toFixed(2)}× avg</span>}
                {showES && <span className="ml-3 text-zinc-300">ES {(data.ES[hover] / avg.ES).toFixed(2)}× avg</span>}
              </>
            ) : (
              <span className="text-subtle">tap or hover a bar</span>
            )}
          </p>
        </div>

        <svg
          viewBox={`0 0 ${W} ${H}`}
          preserveAspectRatio="none"
          className="mt-4 h-56 w-full touch-pan-y select-none sm:h-auto sm:aspect-[800/280]"
          onPointerMove={pick}
          onPointerDown={pick}
          onPointerLeave={(e) => e.pointerType === "mouse" && setHover(null)}
          role="img"
          aria-label="Sample intraday volume profile: busy at the open and close, quiet over lunch"
        >
          {[0.25, 0.5, 0.75].map((f) => (
            <line key={f} x1={0} x2={W} y1={f * H} y2={f * H} stroke="rgba(255,255,255,0.05)" vectorEffect="non-scaling-stroke" />
          ))}
          <rect x={18 * step} width={30 * step} y={0} height={H} fill="rgba(255,255,255,0.025)" />

          {showNQ &&
            data.NQ.map((v, i) => {
              const h = (v / max) * H;
              return (
                <rect
                  key={i}
                  x={i * step + step * 0.12}
                  width={step * 0.76}
                  y={H - h}
                  height={h}
                  fill={hover === i ? "#60a5fa" : "rgba(59,130,246,0.65)"}
                  className="transition-[fill] duration-150"
                />
              );
            })}
          {showES && <path d={esPath} fill="none" stroke="#d4d4d8" strokeWidth={1.8} strokeLinejoin="round" vectorEffect="non-scaling-stroke" />}
          {showES && !showNQ &&
            data.ES.map((v, i) => (
              <circle key={i} cx={i * step + step / 2} cy={H - (v / max) * H} r={hover === i ? 3 : 0} fill="#fafafa" />
            ))}

          {hover !== null && <line x1={hover * step + step / 2} x2={hover * step + step / 2} y1={0} y2={H} stroke="rgba(250,250,250,0.25)" strokeDasharray="2 3" pointerEvents="none" vectorEffect="non-scaling-stroke" />}
        </svg>
        <div className="relative mt-1.5 h-4 font-mono text-[10px] text-subtle sm:text-[11px]">
          {MARKERS.map((m) => (
            <span
              key={m.i}
              className="absolute whitespace-nowrap"
              style={m.i === N - 1 ? { right: 0 } : { left: `${(m.i / N) * 100}%` }}
            >
              {m.label}
            </span>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 font-mono text-[11px] text-subtle">
          {showNQ && (
            <span className="flex items-center gap-2">
              <span className="size-2.5 rounded-sm bg-accent" /> NQ
            </span>
          )}
          {showES && (
            <span className="flex items-center gap-2">
              <span className="h-0.5 w-4 bg-zinc-300" /> ES
            </span>
          )}
          <span className="flex items-center gap-2">
            <span className="h-2.5 w-4 bg-white/10" /> lunch window
          </span>
          <span className="ml-auto">5-min bars · sample data</span>
        </div>
      </div>
    </DemoFrame>
  );
}
