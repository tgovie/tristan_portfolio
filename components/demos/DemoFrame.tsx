import type { ReactNode } from "react";

/** Window chrome around an interactive demo. */
export function DemoFrame({ title, controls, children }: { title: string; controls?: ReactNode; children: ReactNode }) {
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-card shadow-2xl shadow-black/40">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-4 py-2.5">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="size-2.5 rounded-full bg-line-strong" />
            <span className="size-2.5 rounded-full bg-line-strong" />
            <span className="size-2.5 rounded-full bg-line-strong" />
          </div>
          <span className="font-mono text-[11px] text-subtle">{title}</span>
        </div>
        {controls}
      </div>
      {children}
    </div>
  );
}

/** Small segmented control. */
export function Segmented<T extends string>({
  value,
  options,
  onChange,
  label,
}: {
  value: T;
  options: { value: T; label: string }[];
  onChange: (v: T) => void;
  label: string;
}) {
  return (
    <div role="group" aria-label={label} className="inline-flex rounded-lg border border-line bg-bg/60 p-0.5">
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          aria-pressed={value === o.value}
          onClick={() => onChange(o.value)}
          className={
            "min-h-8 rounded-md px-3 font-mono text-[11px] transition-colors " +
            (value === o.value ? "bg-surface text-fg" : "text-subtle hover:text-fg")
          }
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}
