import { mulberry32, randomWalk, toPath } from "@/lib/series";
import { PreviewCanvas, WindowFrame } from "./Frame";

const W = 600;
const H = 220;
const N = 64;

function candles() {
  const walk = randomWalk(11, N, 0.05, 1, (t) => (t < 0.33 ? 0.5 : t < 0.62 ? 0.9 : 1.6));
  const rand = mulberry32(5);
  const out = walk.map((close, i) => {
    const open = i === 0 ? close - 0.3 : walk[i - 1];
    const wick = 0.2 + rand() * 0.8;
    return { open, close, high: Math.max(open, close) + wick, low: Math.min(open, close) - wick };
  });
  const min = Math.min(...out.map((c) => c.low));
  const max = Math.max(...out.map((c) => c.high));
  const y = (v: number) => 14 + (1 - (v - min) / (max - min)) * (H - 28);
  return out.map((c) => ({ ...c, yO: y(c.open), yC: y(c.close), yH: y(c.high), yL: y(c.low) }));
}

const bands = [
  { label: "ASIA", from: 0, to: 0.33 },
  { label: "LONDON", from: 0.33, to: 0.62 },
  { label: "NEW YORK", from: 0.62, to: 1 },
];

const sessionStats = [
  { label: "Asia", range: 0.38, vol: 0.22 },
  { label: "London", range: 0.64, vol: 0.47 },
  { label: "New York", range: 1, vol: 1 },
];

export function MarketSessionsPreview() {
  const cs = candles();
  const vols = Array.from({ length: N }, (_, i) => {
    const t = i / N;
    const base = t < 0.33 ? 0.22 : t < 0.62 ? 0.45 : 0.8;
    return base * (0.6 + mulberry32(i + 300)() * 0.8);
  });
  const step = W / N;
  const eventLine = toPath(
    randomWalk(77, 40, 0, 1, (t) => (t < 0.45 ? 0.3 : 1.8)),
    200,
    60,
    4,
  );

  return (
    <PreviewCanvas>
      <div className="flex h-full items-center justify-center p-[4cqw]">
        <WindowFrame
          title="market-session-explorer"
          className="h-full w-full"
          right={
            <div className="flex gap-[0.6cqw] font-mono text-[1.2cqw]">
              <span className="rounded-[0.5cqw] bg-surface px-[1cqw] py-[0.3cqw] text-fg">NQ</span>
              <span className="px-[1cqw] py-[0.3cqw] text-subtle">ES</span>
            </div>
          }
        >
          <div className="grid h-full grid-cols-[1fr_28%] gap-[1.6cqw] p-[1.8cqw]">
            {/* chart column */}
            <div className="flex min-h-0 flex-col gap-[1cqw]">
              <div className="flex items-center gap-[1cqw] font-mono text-[1.2cqw] text-subtle">
                <span className="text-fg">Intraday · 15m</span>
                <span>·</span>
                <span>sessions ET</span>
              </div>
              <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" className="min-h-0 w-full flex-[3]">
                {bands.map((b, i) => (
                  <g key={b.label}>
                    <rect
                      x={b.from * W}
                      width={(b.to - b.from) * W}
                      y={0}
                      height={H}
                      fill={i === 2 ? "rgba(59,130,246,0.06)" : i === 1 ? "rgba(255,255,255,0.025)" : "rgba(255,255,255,0.012)"}
                    />
                    {i > 0 && <line x1={b.from * W} x2={b.from * W} y1={0} y2={H} stroke="#3f3f46" strokeDasharray="3 4" vectorEffect="non-scaling-stroke" />}
                  </g>
                ))}
                {cs.map((c, i) => {
                  const up = c.close >= c.open;
                  const x = i * step + step / 2;
                  return (
                    <g key={i}>
                      <line x1={x} x2={x} y1={c.yH} y2={c.yL} stroke={up ? "#60a5fa" : "#52525b"} vectorEffect="non-scaling-stroke" />
                      <rect
                        x={x - step * 0.3}
                        width={step * 0.6}
                        y={Math.min(c.yO, c.yC)}
                        height={Math.max(1.5, Math.abs(c.yO - c.yC))}
                        fill={up ? "#3b82f6" : "#3f3f46"}
                      />
                    </g>
                  );
                })}
              </svg>
              <svg viewBox={`0 0 ${W} 60`} preserveAspectRatio="none" className="min-h-0 w-full flex-1">
                {vols.map((v, i) => (
                  <rect key={i} x={i * step + step * 0.15} width={step * 0.7} y={60 - v * 60} height={v * 60} fill={i / N >= 0.62 ? "rgba(59,130,246,0.55)" : "rgba(161,161,170,0.28)"} />
                ))}
              </svg>
              <div className="grid grid-cols-3 font-mono text-[1.1cqw] text-subtle">
                {bands.map((b) => (
                  <span key={b.label}>{b.label}</span>
                ))}
              </div>
            </div>

            {/* stats column */}
            <div className="flex min-h-0 flex-col gap-[1.2cqw]">
              <div className="rounded-[0.8cqw] border border-line bg-bg/50 p-[1.3cqw]">
                <p className="mb-[1cqw] font-mono text-[1.1cqw] text-subtle">AVG RANGE BY SESSION</p>
                <div className="space-y-[0.9cqw]">
                  {sessionStats.map((s) => (
                    <div key={s.label}>
                      <div className="mb-[0.3cqw] text-[1.15cqw] text-muted">{s.label}</div>
                      <div className="h-[0.8cqw] rounded-full bg-surface">
                        <div className="h-full rounded-full bg-accent/80" style={{ width: `${s.range * 100}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-[0.8cqw] border border-line bg-bg/50 p-[1.3cqw]">
                <p className="mb-[0.6cqw] font-mono text-[1.1cqw] text-subtle">VOLUME SHARE</p>
                <div className="flex h-[1.2cqw] overflow-hidden rounded-full">
                  <div className="bg-zinc-600" style={{ width: "14%" }} />
                  <div className="bg-zinc-400" style={{ width: "27%" }} />
                  <div className="bg-accent" style={{ width: "59%" }} />
                </div>
              </div>
              <div className="flex min-h-0 flex-1 flex-col rounded-[0.8cqw] border border-line bg-bg/50 p-[1.3cqw]">
                <p className="font-mono text-[1.1cqw] text-subtle">EVENT · 08:30 RELEASE</p>
                <svg viewBox="0 0 200 60" preserveAspectRatio="none" className="mt-[0.6cqw] min-h-0 w-full flex-1">
                  <line x1={90} x2={90} y1={0} y2={60} stroke="#3f3f46" strokeDasharray="2 3" vectorEffect="non-scaling-stroke" />
                  <path d={eventLine} fill="none" stroke="#60a5fa" strokeWidth={1.5} vectorEffect="non-scaling-stroke" />
                </svg>
              </div>
            </div>
          </div>
        </WindowFrame>
      </div>
    </PreviewCanvas>
  );
}
