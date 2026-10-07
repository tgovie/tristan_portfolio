"use client";

import { useEffect, useState } from "react";
import { easternClock, easternMinutes, inRange, isWeekendClosed } from "@/lib/time";

// Futures session windows in minutes after midnight, US Eastern Time.
const SESSIONS = [
  { label: "Asia session", start: 20 * 60, end: 2 * 60 },
  { label: "London session", start: 2 * 60, end: 9 * 60 + 30 },
  { label: "New York session", start: 9 * 60 + 30, end: 17 * 60 },
];

/** Tiny live line: current Eastern time and which futures session is open. */
export function HeroStatus() {
  const [state, setState] = useState<{ clock: string; label: string; live: boolean } | null>(null);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const m = easternMinutes(now);
      const session = isWeekendClosed(now) ? undefined : SESSIONS.find((s) => inRange(m, s.start, s.end));
      const label = isWeekendClosed(now)
        ? "futures closed for the weekend"
        : (session?.label ?? (m >= 18 * 60 ? "Globex open" : "daily break"));
      setState({ clock: easternClock(now), label, live: Boolean(session) });
    };
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <p className="flex h-4 items-center gap-2 font-mono text-[11px] text-subtle">
      <span className="text-muted">NQ · ES</span>
      <span aria-hidden="true">—</span>
      {state ? (
        <>
          <span
            className={state.live ? "size-1.5 animate-pulse-dot rounded-full bg-accent" : "size-1.5 rounded-full bg-line-strong"}
            aria-hidden="true"
          />
          <span>
            {state.clock} ET · {state.label}
          </span>
        </>
      ) : (
        <span>--:-- ET</span>
      )}
    </p>
  );
}
