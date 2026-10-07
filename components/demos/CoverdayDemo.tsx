"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bell, Check, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";

/* Clickable Coverday concept. Payments are sample content. */

type Kind = "Bill" | "Subscription" | "Recurring";
interface Payment {
  id: string;
  name: string;
  kind: Kind;
  amount: number;
  inDays: number;
  account: string;
  repeats: string;
}

const PAYMENTS: Payment[] = [
  { id: "phone", name: "Phone plan", kind: "Bill", amount: 45, inDays: 1, account: "Chequing", repeats: "Monthly" },
  { id: "music", name: "Music streaming", kind: "Subscription", amount: 11.99, inDays: 3, account: "Credit card", repeats: "Monthly" },
  { id: "gym", name: "Gym membership", kind: "Recurring", amount: 39, inDays: 5, account: "Chequing", repeats: "Monthly" },
  { id: "cloud", name: "Cloud storage", kind: "Subscription", amount: 3.99, inDays: 7, account: "Credit card", repeats: "Monthly" },
  { id: "rent", name: "Rent", kind: "Bill", amount: 1150, inDays: 12, account: "Chequing", repeats: "Monthly" },
  { id: "transit", name: "Transit pass", kind: "Recurring", amount: 97, inDays: 18, account: "Chequing", repeats: "Monthly" },
  { id: "video", name: "Video streaming", kind: "Subscription", amount: 16.99, inDays: 24, account: "Credit card", repeats: "Monthly" },
  { id: "insurance", name: "Renter's insurance", kind: "Bill", amount: 22.5, inDays: 27, account: "Chequing", repeats: "Monthly" },
];

const RANGES = [7, 14, 30] as const;
const FILTERS = ["All", "Bills", "Subscriptions"] as const;

const money = (n: number) => `$${n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
const when = (d: number) => (d === 0 ? "Today" : d === 1 ? "Tomorrow" : `In ${d} days`);

export function CoverdayDemo() {
  const [range, setRange] = useState<(typeof RANGES)[number]>(14);
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const [open, setOpen] = useState<string | null>("phone");
  const [paid, setPaid] = useState<string[]>([]);

  const visible = PAYMENTS.filter((p) => p.inDays <= range).filter((p) =>
    filter === "All" ? true : filter === "Bills" ? p.kind !== "Subscription" : p.kind === "Subscription",
  );
  const due = visible.filter((p) => !paid.includes(p.id));
  const total = due.reduce((a, p) => a + p.amount, 0);
  const next = due[0];

  return (
    <div className="grid items-center gap-10 rounded-xl border border-line bg-card p-6 md:grid-cols-[1fr_320px] md:p-10">
      <div className="order-last md:order-first">
        <p className="font-mono text-[11px] text-subtle">try it</p>
        <ul className="mt-4 space-y-3 text-[15px] text-muted">
          <li className="flex gap-3">
            <span className="font-mono text-xs leading-6 text-accent-soft">01</span> Switch between 7, 14 and 30 days to see what&apos;s coming up.
          </li>
          <li className="flex gap-3">
            <span className="font-mono text-xs leading-6 text-accent-soft">02</span> Filter to bills or subscriptions only.
          </li>
          <li className="flex gap-3">
            <span className="font-mono text-xs leading-6 text-accent-soft">03</span> Tap a payment for details, then mark it as paid.
          </li>
        </ul>
        {paid.length > 0 && (
          <button
            type="button"
            onClick={() => setPaid([])}
            className="mt-6 inline-flex min-h-10 items-center gap-2 rounded-lg border border-line px-3 font-mono text-[11px] text-muted hover:text-fg"
          >
            <RotateCcw size={13} aria-hidden="true" /> reset
          </button>
        )}
        <p className="mt-8 font-mono text-[10px] text-subtle">concept · sample payments</p>
      </div>

      {/* phone */}
      <div className="mx-auto w-full max-w-[320px] rounded-[2.6rem] border border-line-strong bg-zinc-950 p-2.5 shadow-2xl shadow-black/60">
        <div className="relative h-[600px] overflow-hidden rounded-[2.1rem] bg-bg">
          <div className="absolute left-1/2 top-2.5 z-10 h-6 w-24 -translate-x-1/2 rounded-full bg-black" aria-hidden="true" />
          <div className="flex h-full flex-col px-5 pt-12">
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold tracking-tight text-fg">coverday</span>
              <span className="relative grid size-8 place-items-center rounded-full bg-surface">
                <Bell size={15} className="text-muted" aria-hidden="true" />
                {due.some((p) => p.inDays <= 1) && <span className="absolute right-1.5 top-1.5 size-1.5 rounded-full bg-accent" />}
              </span>
            </div>

            <p className="mt-5 text-xs text-subtle">Leaving your accounts · next {range} days</p>
            <motion.p key={total} initial={{ opacity: 0.4, y: 4 }} animate={{ opacity: 1, y: 0 }} className="text-3xl font-semibold tracking-tight text-fg tabular-nums">
              {money(total)}
            </motion.p>
            <p className="mt-1 h-4 text-[11px] text-muted">{next ? `Next: ${next.name} · ${when(next.inDays).toLowerCase()}` : "Nothing left to pay"}</p>

            <div className="mt-4 flex gap-1 rounded-lg bg-surface p-0.5" role="group" aria-label="Time range">
              {RANGES.map((r) => (
                <button
                  key={r}
                  type="button"
                  aria-pressed={range === r}
                  onClick={() => setRange(r)}
                  className={cn("flex-1 rounded-md py-1.5 text-xs transition-colors", range === r ? "bg-bg text-fg" : "text-subtle")}
                >
                  {r}d
                </button>
              ))}
            </div>
            <div className="mt-3 flex gap-1.5" role="group" aria-label="Filter">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  type="button"
                  aria-pressed={filter === f}
                  onClick={() => setFilter(f)}
                  className={cn(
                    "rounded-full border px-2.5 py-1 text-[11px] transition-colors",
                    filter === f ? "border-accent/50 bg-accent/15 text-fg" : "border-line text-subtle",
                  )}
                >
                  {f}
                </button>
              ))}
            </div>

            <ul className="-mx-1 mt-4 flex-1 space-y-1.5 overflow-y-auto px-1 pb-5 [scrollbar-width:none]">
              <AnimatePresence initial={false}>
                {visible.map((p) => {
                  const isPaid = paid.includes(p.id);
                  const isOpen = open === p.id;
                  return (
                    <motion.li
                      key={p.id}
                      layout
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.2 }}
                      className={cn("overflow-hidden rounded-xl border transition-colors", isOpen ? "border-line-strong bg-surface" : "border-transparent bg-card")}
                    >
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        onClick={() => setOpen(isOpen ? null : p.id)}
                        className="flex w-full items-center gap-3 px-3 py-2.5 text-left"
                      >
                        <span className={cn("grid size-8 shrink-0 place-items-center rounded-lg text-xs", isPaid ? "bg-up/15 text-up" : "bg-surface text-muted")}>
                          {isPaid ? <Check size={14} aria-hidden="true" /> : p.name[0]}
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className={cn("block truncate text-[13px]", isPaid ? "text-subtle line-through" : "text-fg")}>{p.name}</span>
                          <span className="block text-[11px] text-subtle">
                            {when(p.inDays)} · {p.kind}
                          </span>
                        </span>
                        <span className={cn("font-mono text-[12px] tabular-nums", isPaid ? "text-subtle" : "text-muted")}>{money(p.amount)}</span>
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="flex items-center justify-between gap-2 px-3 pb-3">
                              <span className="text-[11px] text-subtle">
                                {p.repeats} · {p.account}
                              </span>
                              <button
                                type="button"
                                onClick={() => setPaid((list) => (isPaid ? list.filter((x) => x !== p.id) : [...list, p.id]))}
                                className={cn(
                                  "rounded-md px-2.5 py-1 text-[11px] font-medium transition-colors",
                                  isPaid ? "bg-bg text-muted" : "bg-fg text-bg",
                                )}
                              >
                                {isPaid ? "Undo" : "Mark paid"}
                              </button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.li>
                  );
                })}
              </AnimatePresence>
              {visible.length === 0 && <li className="pt-6 text-center text-xs text-subtle">Nothing due in this window.</li>}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
