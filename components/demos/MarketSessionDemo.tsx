"use client";

import { useMemo, useState } from "react";
import { mulberry32 } from "@/lib/series";
import { DemoFrame, Segmented } from "./DemoFrame";
import { cn } from "@/lib/utils";

/*
 * Interactive sample of Market Session Explorer.
 * Data is generated (seeded) — it illustrates the tool, it is not real market data.
 */

type Instrument = "NQ" | "ES";
type SessionId = "all" | "asia" | "london" | "ny";

const BAR_MIN = 15;
const START = 20 * 60; // 20:00 ET (Asia open)
const SESSIONS = [
  { id: "asia", label: "Asia", bars: 24, vol: 0.45, volume: 0.25 }, // 20:00–02:00
  { id: "london", label: "London", bars: 30, vol: 0.85, volume: 0.5 }, // 02:00–09:30
  { id: "ny", label: "New York", bars: 26, vol: 1.6, volume: 1 }, // 09:30–16:00
] as const;
const N = SESSIONS.reduce((n, s) => n + s.bars, 0);

const SPEC: Record<Instrument, { base: number; step: number; seed: number }> = {
  NQ: { base: 24800, step: 9, seed: 11 },
  ES: { base: 6740, step: 2.4, seed: 23 },
};

interface Bar {
  i: number;
  session: (typeof SESSIONS)[number]["id"];
  time: string;
  o: number;
  h: number;
  l: number;
  c: number;
  v: number;
}

function buildBars(inst: Instrument): Bar[] {
  const { base, step, seed } = SPEC[inst];
  const rand = mulberry32(seed);
  const bars: Bar[] = [];
  let price = base;
  let i = 0;
  for (const s of SESSIONS) {
    for (let k = 0; k < s.bars; k++, i++) {
      const o = price;
      const c = o + (rand() - 0.48) * 2 * step * s.vol;
      const h = Math.max(o, c) + rand() * step * s.vol * 0.7;
      const l = Math.min(o, c) - rand() * step * s.vol * 0.7;
      const m = (START + i * BAR_MIN) % 1440;
      const time = `${String(Math.floor(m / 60)).padStart(2, "0")}:${String(m % 60).padStart(2, "0")}`;
      bars.push({ i, session: s.id, time, o, h, l, c, v: s.volume * (0.55 + rand() * 0.9) });
      price = c;
    }
  }
  return bars;
}

const W = 800;
const H = 260;
const VH = 60;

// Session bands in chart coordinates.
const BANDS = SESSIONS.map((s, idx) => {
  const before = SESSIONS.slice(0, idx).reduce((n, x) => n + x.bars, 0);
  return { ...s, x: (before / N) * W, w: (s.bars / N) * W };
});

export function MarketSessionDemo() {
  const [inst, setInst] = useState<Instrument>("NQ");
  const [session, setSession] = useState<SessionId>("all");
  const [hover, setHover] = useState<number | null>(null);

  const bars = useMemo(() => buildBars(inst), [inst]);
  const min = Math.min(...bars.map((b) => b.l));
  const max = Math.max(...bars.map((b) => b.h));
  const maxV = Math.max(...bars.map((b) => b.v));
  const y = (p: number) => 12 + (1 - (p - min) / (max - min)) * (H - 24);
  const step = W / N;

  const selected = session === "all" ? bars : bars.filter((b) => b.session === session);
  const totalV = bars.reduce((a, b) => a + b.v, 0);
  const stats = {
    range: Math.max(...selected.map((b) => b.h)) - Math.min(...selected.map((b) => b.l)),
    change: selected[selected.length - 1].c - selected[0].o,
    share: (selected.reduce((a, b) => a + b.v, 0) / totalV) * 100,
    avgBar: selected.reduce((a, b) => a + (b.h - b.l), 0) / selected.length,
  };
  const fmt = (n: number) => n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const hb = hover !== null ? bars[hover] : null;
  const pick = (e: React.PointerEvent<SVGSVGElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    setHover(Math.max(0, Math.min(N - 1, Math.floor(((e.clientX - r.left) / r.width) * N))));
  };


  return (
    <DemoFrame
      title="market-session-explorer"
      controls={
        <div className="flex flex-wrap gap-2">
          <Segmented
            label="Instrument"
            value={inst}
            onChange={setInst}
            options={[
              { value: "NQ", label: "NQ" },
              { value: "ES", label: "ES" },
            ]}
          />
          <Segmented
            label="Session"
            value={session}
            onChange={setSession}
            options={[
              { value: "all", label: "All" },
              { value: "asia", label: "Asia" },
              { value: "london", label: "London" },
              { value: "ny", label: "NY" },
            ]}
          />
        </div>
      }
    >
      <div className="grid lg:grid-cols-[1fr_220px]">
        <div className="relative p-4">
          <div className="mb-2 flex min-h-5 flex-wrap items-center justify-between gap-x-3 font-mono text-[10px] text-subtle sm:text-[11px]">
            <span>
              {inst} · 15m · ET
            </span>
            {hb ? (
              <span className="tabular-nums text-muted">
                {hb.time} &nbsp;O {fmt(hb.o)} H {fmt(hb.h)} L {fmt(hb.l)} <span className={hb.c >= hb.o ? "text-up" : "text-down"}>C {fmt(hb.c)}</span>
              </span>
            ) : (
              <span>tap or hover the chart</span>
            )}
          </div>

          <svg
            viewBox={`0 0 ${W} ${H + VH}`}
            preserveAspectRatio="none"
            className="h-72 w-full touch-pan-y select-none sm:h-auto sm:aspect-[800/320]"
            onPointerMove={pick}
            onPointerDown={pick}
            // On touch, keep the tapped bar selected after the finger lifts.
            onPointerLeave={(e) => e.pointerType === "mouse" && setHover(null)}
            role="img"
            aria-label={`Sample ${inst} intraday chart split into Asia, London and New York sessions`}
          >
            {BANDS.map((b) => {
              return (
                <g key={b.id}>
                  <rect
                    x={b.x}
                    y={0}
                    width={b.w}
                    height={H + VH}
                    fill={session === b.id ? "rgba(59,130,246,0.07)" : "rgba(255,255,255,0.015)"}
                    className="cursor-pointer"
                    onClick={() => setSession(session === b.id ? "all" : b.id)}
                  />
                  {b.x > 0 && <line x1={b.x} x2={b.x} y1={0} y2={H + VH} stroke="#3f3f46" strokeDasharray="3 4" vectorEffect="non-scaling-stroke" />}
                </g>
              );
            })}

            {bars.map((b) => {
              const active = session === "all" || session === b.session;
              const up = b.c >= b.o;
              const x = b.i * step + step / 2;
              return (
                <g key={b.i} opacity={active ? 1 : 0.22} className="transition-opacity duration-300">
                  <line x1={x} x2={x} y1={y(b.h)} y2={y(b.l)} stroke={up ? "#60a5fa" : "#71717a"} vectorEffect="non-scaling-stroke" />
                  <rect
                    x={x - step * 0.32}
                    width={step * 0.64}
                    y={Math.min(y(b.o), y(b.c))}
                    height={Math.max(1.5, Math.abs(y(b.o) - y(b.c)))}
                    fill={up ? "#3b82f6" : "#3f3f46"}
                  />
                  <rect
                    x={b.i * step + step * 0.15}
                    width={step * 0.7}
                    y={H + VH - (b.v / maxV) * (VH - 8)}
                    height={(b.v / maxV) * (VH - 8)}
                    fill={b.session === "ny" ? "rgba(59,130,246,0.5)" : "rgba(161,161,170,0.3)"}
                  />
                </g>
              );
            })}

            {hb && (
              <g pointerEvents="none">
                <line x1={hb.i * step + step / 2} x2={hb.i * step + step / 2} y1={0} y2={H + VH} stroke="rgba(250,250,250,0.3)" strokeDasharray="2 3" vectorEffect="non-scaling-stroke" />
                <line x1={0} x2={W} y1={y(hb.c)} y2={y(hb.c)} stroke="rgba(250,250,250,0.15)" strokeDasharray="2 3" vectorEffect="non-scaling-stroke" />
              </g>
            )}
          </svg>
          <div className="relative mt-1.5 h-4 font-mono text-[10px] sm:text-[11px]">
            {BANDS.map((b) => (
              <button
                key={b.id}
                type="button"
                onClick={() => setSession(session === b.id ? "all" : b.id)}
                className={cn("absolute pl-1.5 text-left transition-colors", session === "all" || session === b.id ? "text-muted" : "text-subtle/60")}
                style={{ left: `${(b.x / W) * 100}%` }}
              >
                {b.label.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <dl className="grid grid-cols-2 gap-px border-t border-line bg-line lg:grid-cols-1 lg:border-l lg:border-t-0">
          {[
            { label: "Range", value: fmt(stats.range) },
            { label: "Net change", value: `${stats.change >= 0 ? "+" : ""}${fmt(stats.change)}`, tone: stats.change >= 0 ? "text-up" : "text-down" },
            { label: "Avg bar range", value: fmt(stats.avgBar) },
            { label: "Share of volume", value: `${stats.share.toFixed(0)}%` },
          ].map((s) => (
            <div key={s.label} className="bg-card px-4 py-3.5">
              <dt className="font-mono text-[10px] tracking-wide text-subtle uppercase">{s.label}</dt>
              <dd className={cn("mt-1 font-mono text-lg text-fg tabular-nums", s.tone)}>{s.value}</dd>
            </div>
          ))}
          <div className="col-span-2 bg-card px-4 py-3 font-mono text-[10px] text-subtle lg:col-span-1">
            {session === "all" ? "Full session" : SESSIONS.find((s) => s.id === session)?.label} · sample data
          </div>
        </dl>
      </div>
    </DemoFrame>
  );
}
