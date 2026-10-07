import { Bell } from "lucide-react";
import { PreviewCanvas } from "./Frame";

// Sample content for the concept mockup.
const upcoming = [
  { day: "Tue", date: "14", name: "Phone plan", kind: "Bill", amount: "45.00" },
  { day: "Thu", date: "16", name: "Music streaming", kind: "Subscription", amount: "11.99" },
  { day: "Sat", date: "18", name: "Gym membership", kind: "Recurring", amount: "39.00" },
  { day: "Mon", date: "20", name: "Cloud storage", kind: "Subscription", amount: "3.99" },
  { day: "Wed", date: "1", name: "Rent", kind: "Bill", amount: "1,150.00" },
];

const week = [0.25, 0.1, 0.55, 0.15, 0.35, 0.05, 1];

function Phone({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`relative aspect-[9/19] rounded-[3.4cqw] border border-line-strong bg-zinc-950 p-[0.7cqw] shadow-2xl shadow-black/70 ${className ?? ""}`}
    >
      <div className="relative h-full overflow-hidden rounded-[2.8cqw] bg-card">
        <div className="absolute left-1/2 top-[1cqw] z-10 h-[1.6cqw] w-[7cqw] -translate-x-1/2 rounded-full bg-black" />
        {children}
      </div>
    </div>
  );
}

export function CoverdayPreview({ className }: { className?: string }) {
  return (
    <PreviewCanvas className={className}>
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-[50cqw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[6cqw]" />
      <div className="relative flex h-full items-center justify-center gap-[3cqw] pt-[5cqw]">
        {/* secondary phone — subscriptions */}
        <Phone className="hidden h-[82%] translate-y-[6cqw] rotate-[-6deg] @[340px]:block">
          <div className="px-[2cqw] pt-[5cqw]">
            <p className="text-[1.3cqw] text-muted">Subscriptions</p>
            <p className="mt-[0.4cqw] text-[2.6cqw] font-semibold text-fg">$54.97<span className="text-[1.3cqw] font-normal text-muted"> /mo</span></p>
            <div className="mt-[2cqw] space-y-[1.2cqw]">
              {["Music streaming", "Cloud storage", "News", "Video"].map((s, i) => (
                <div key={s} className="flex items-center gap-[1cqw]">
                  <span className="grid size-[3cqw] place-items-center rounded-[0.8cqw] bg-surface text-[1.2cqw] text-muted">{s[0]}</span>
                  <span className="flex-1 text-[1.25cqw] text-muted">{s}</span>
                  <span className="h-[0.6cqw] rounded-full bg-accent/60" style={{ width: `${(4 - i) * 1.2}cqw` }} />
                </div>
              ))}
            </div>
          </div>
        </Phone>

        {/* main phone — timeline */}
        <Phone className="h-[92%]">
          <div className="flex h-full flex-col px-[2cqw] pt-[4.6cqw]">
            <div className="flex items-center justify-between">
              <span className="text-[2.2cqw] font-semibold tracking-tight text-fg">coverday</span>
              <span className="grid size-[3cqw] place-items-center rounded-full bg-surface">
                <Bell className="size-[1.6cqw] text-muted" aria-hidden="true" />
              </span>
            </div>
            <p className="mt-[2cqw] text-[1.25cqw] text-subtle">Leaving your accounts · next 14 days</p>
            <p className="text-[3.6cqw] font-semibold tracking-tight text-fg">$1,249.98</p>
            <div className="mt-[1.2cqw] flex h-[4cqw] items-end gap-[0.6cqw]">
              {week.map((v, i) => (
                <span key={i} className={`flex-1 rounded-[0.3cqw] ${i === 6 ? "bg-accent" : "bg-surface"}`} style={{ height: `${Math.max(12, v * 100)}%` }} />
              ))}
            </div>
            <p className="mt-[2cqw] font-mono text-[1.1cqw] uppercase tracking-wider text-subtle">Upcoming</p>
            <div className="mt-[0.8cqw] space-y-[1cqw]">
              {upcoming.map((u) => (
                <div key={u.name} className="flex items-center gap-[1.2cqw]">
                  <div className="w-[3cqw] text-center leading-none">
                    <p className="text-[0.95cqw] text-subtle">{u.day}</p>
                    <p className="text-[1.6cqw] font-medium text-fg">{u.date}</p>
                  </div>
                  <div className="min-w-0 flex-1 border-l border-line pl-[1.2cqw]">
                    <p className="truncate text-[1.3cqw] text-fg">{u.name}</p>
                    <p className="text-[1cqw] text-subtle">{u.kind}</p>
                  </div>
                  <p className="font-mono text-[1.2cqw] text-muted">${u.amount}</p>
                </div>
              ))}
            </div>
          </div>
        </Phone>

        {/* floating notification */}
        <div className="absolute right-[6%] top-[14%] hidden w-[27cqw] rounded-[1.4cqw] border border-line bg-surface/95 p-[1.4cqw] shadow-xl shadow-black/50 backdrop-blur @[340px]:block">
          <div className="flex items-center gap-[1cqw]">
            <span className="grid size-[2.8cqw] place-items-center rounded-[0.8cqw] bg-accent text-[1.3cqw] font-semibold text-white">c</span>
            <div className="min-w-0">
              <p className="text-[1.25cqw] font-medium text-fg">Phone plan due tomorrow</p>
              <p className="text-[1.1cqw] text-subtle">$45.00 · from chequing</p>
            </div>
          </div>
        </div>
      </div>
    </PreviewCanvas>
  );
}
