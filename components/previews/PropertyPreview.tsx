import { ArrowRight } from "lucide-react";
import { PreviewCanvas, WindowFrame } from "./Frame";

const steps = ["collect", "parse", "normalize", "enrich", "export"];

// Masked sample rows — illustrative only.
const rows = [
  ["45xx rue St-Denis", "45XX RUE SAINT-DENIS", "Plateau", "✓"],
  ["12xx av. du Parc #3", "12XX AVENUE DU PARC, APP 3", "Mile End", "✓"],
  ["78xx boul St Laurent", "78XX BOULEVARD SAINT-LAURENT", "Villeray", "✓"],
  ["3xx rue Notre Dame O", "3XX RUE NOTRE-DAME OUEST", "Ville-Marie", "✓"],
  ["56xx ch. Côte-des-Neiges", "56XX CHEMIN DE LA CÔTE-DES-NEIGES", "CDN", "…"],
];

export function PropertyPreview() {
  return (
    <PreviewCanvas>
      <div className="flex h-full items-center justify-center p-[4cqw]">
        <WindowFrame title="property-pipeline — python" className="h-full w-full">
          <div className="flex h-full flex-col gap-[1.8cqw] p-[2cqw]">
            {/* pipeline */}
            <div className="flex items-center gap-[0.8cqw]">
              {steps.map((s, i) => (
                <div key={s} className="flex flex-1 items-center gap-[0.8cqw]">
                  <div
                    className={`flex-1 rounded-[0.7cqw] border px-[1cqw] py-[0.9cqw] text-center font-mono text-[1.2cqw] ${
                      i < 4 ? "border-accent/40 bg-accent/10 text-accent-soft" : "border-line bg-surface text-muted"
                    }`}
                  >
                    {s}
                  </div>
                  {i < steps.length - 1 && <ArrowRight className="size-[1.4cqw] shrink-0 text-subtle" aria-hidden="true" />}
                </div>
              ))}
            </div>

            {/* table */}
            <div className="min-h-0 flex-1 overflow-hidden rounded-[0.8cqw] border border-line">
              <div className="grid grid-cols-[1.1fr_1.6fr_0.7fr_0.25fr] border-b border-line bg-surface/70 px-[1.2cqw] py-[0.8cqw] font-mono text-[1.1cqw] text-subtle">
                <span>address_raw</span>
                <span>address_normalized</span>
                <span>borough</span>
                <span />
              </div>
              {rows.map((r, i) => (
                <div
                  key={i}
                  className="grid grid-cols-[1.1fr_1.6fr_0.7fr_0.25fr] border-b border-line/60 px-[1.2cqw] py-[0.85cqw] font-mono text-[1.15cqw] last:border-0"
                >
                  <span className="truncate pr-[1cqw] text-subtle">{r[0]}</span>
                  <span className="truncate pr-[1cqw] text-fg">{r[1]}</span>
                  <span className="truncate text-muted">{r[2]}</span>
                  <span className={r[3] === "✓" ? "text-up" : "text-subtle"}>{r[3]}</span>
                </div>
              ))}
            </div>

            {/* log */}
            <div className="space-y-[0.3cqw] rounded-[0.8cqw] bg-bg/60 px-[1.4cqw] py-[1cqw] font-mono text-[1.1cqw]">
              <p className="text-subtle">
                <span className="text-accent-soft">[playwright]</span> page loaded · fields extracted
              </p>
              <p className="text-subtle">
                <span className="text-accent-soft">[normalize]</span> addresses standardised · duplicates merged
              </p>
              <p className="text-subtle">
                <span className="text-up">[export]</span> writing output.csv<span className="animate-pulse-dot">_</span>
              </p>
            </div>
          </div>
        </WindowFrame>
      </div>
    </PreviewCanvas>
  );
}
