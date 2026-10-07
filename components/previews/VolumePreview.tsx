import { volumeProfile } from "@/lib/series";
import { PreviewCanvas, WindowFrame } from "./Frame";

const N = 78; // 5-minute bars in the 09:30–16:00 cash session
const W = 600;
const H = 240;

export function VolumePreview({ className }: { className?: string }) {
  const nq = volumeProfile(3, N);
  const es = volumeProfile(9, N).map((v) => v * 0.82);
  const max = Math.max(...nq, ...es);
  const step = W / N;
  const esLine = es
    .map((v, i) => `${i === 0 ? "M" : "L"}${(i * step + step / 2).toFixed(1)} ${(H - (v / max) * H).toFixed(1)}`)
    .join(" ");

  return (
    <PreviewCanvas className={className}>
      <div className="flex h-full items-center justify-center p-[4cqw]">
        <WindowFrame title="volume-explorer · streamlit" className="h-full w-full">
          <div className="grid h-full grid-cols-[22%_1fr]">
            {/* sidebar */}
            <div className="space-y-[1.4cqw] border-r border-line bg-bg/40 p-[1.6cqw]">
              {[
                ["Contract", "NQ + ES"],
                ["Interval", "5 min"],
                ["Session", "New York"],
              ].map(([label, value]) => (
                <div key={label}>
                  <p className="mb-[0.5cqw] text-[1.15cqw] text-subtle">{label}</p>
                  <div className="flex items-center justify-between rounded-[0.6cqw] border border-line bg-card px-[1cqw] py-[0.6cqw] text-[1.2cqw] text-muted">
                    {value}
                    <span className="text-subtle">▾</span>
                  </div>
                </div>
              ))}
              <div>
                <p className="mb-[0.8cqw] text-[1.15cqw] text-subtle">Date range</p>
                <div className="relative h-[0.5cqw] rounded-full bg-surface">
                  <div className="absolute inset-y-0 left-[18%] right-[8%] rounded-full bg-accent/70" />
                  <span className="absolute left-[18%] top-1/2 size-[1.4cqw] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-accent bg-bg" />
                  <span className="absolute right-[8%] top-1/2 size-[1.4cqw] translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-accent bg-bg" />
                </div>
              </div>
            </div>

            {/* main */}
            <div className="flex min-h-0 flex-col p-[2cqw]">
              <p className="text-[2cqw] font-semibold tracking-tight text-fg">Average volume by minute</p>
              <div className="mt-[0.6cqw] flex gap-[2cqw] font-mono text-[1.15cqw] text-subtle">
                <span className="flex items-center gap-[0.6cqw]">
                  <span className="size-[1cqw] rounded-[0.2cqw] bg-accent" /> NQ
                </span>
                <span className="flex items-center gap-[0.6cqw]">
                  <span className="h-[0.25cqw] w-[2cqw] bg-zinc-300" /> ES
                </span>
              </div>
              <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" className="mt-[1.4cqw] min-h-0 w-full flex-1">
                {[0.25, 0.5, 0.75].map((f) => (
                  <line key={f} x1={0} x2={W} y1={f * H} y2={f * H} stroke="rgba(255,255,255,0.05)" vectorEffect="non-scaling-stroke" />
                ))}
                {/* lunch window shading */}
                <rect x={(18 / N) * W} width={(30 / N) * W} y={0} height={H} fill="rgba(255,255,255,0.02)" />
                {nq.map((v, i) => {
                  const h = (v / max) * H;
                  return <rect key={i} x={i * step + step * 0.12} width={step * 0.76} y={H - h} height={h} fill="rgba(59,130,246,0.7)" />;
                })}
                <path d={esLine} fill="none" stroke="#d4d4d8" strokeWidth={1.4} vectorEffect="non-scaling-stroke" />
              </svg>
              <div className="mt-[0.8cqw] flex justify-between font-mono text-[1.1cqw] text-subtle">
                <span>09:30</span>
                <span>11:00</span>
                <span>13:30</span>
                <span>16:00</span>
              </div>
            </div>
          </div>
        </WindowFrame>
      </div>
    </PreviewCanvas>
  );
}
