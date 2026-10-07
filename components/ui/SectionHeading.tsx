import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

import { cn } from "@/lib/utils";

/** `aside` pins the heading in a left column on desktop (used with a two-column section). */
export function SectionHeading({ label, title, aside = false, children }: { label: string; title: string; aside?: boolean; children?: ReactNode }) {
  return (
    <Reveal className={cn("mb-8 flex items-end justify-between gap-6 self-start md:mb-10", aside && "md:sticky md:top-24")}>
      <div>
        <p className="font-mono text-xs text-subtle">
          <span className="text-accent">/</span> {label}
        </p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-fg md:text-4xl">{title}</h2>
      </div>
      {children}
    </Reveal>
  );
}
