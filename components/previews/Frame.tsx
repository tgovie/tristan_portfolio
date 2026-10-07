import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Preview canvas. Everything inside is sized in container-query units (cqw),
 * so the mockup scales like an image at any card width.
 */
export function PreviewCanvas({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("@container relative aspect-[16/10] w-full overflow-hidden bg-bg", className)}>
      <div className="bg-grid absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="absolute inset-0">{children}</div>
    </div>
  );
}

/** Minimal app/browser window chrome. */
export function WindowFrame({
  title,
  children,
  className,
  right,
}: {
  title: string;
  children: ReactNode;
  className?: string;
  right?: ReactNode;
}) {
  return (
    <div className={cn("flex flex-col overflow-hidden rounded-[1.2cqw] border border-line bg-card shadow-2xl shadow-black/50", className)}>
      <div className="flex items-center gap-[1.2cqw] border-b border-line px-[1.8cqw] py-[1.1cqw]">
        <div className="flex gap-[0.6cqw]">
          <span className="size-[1cqw] rounded-full bg-line-strong" />
          <span className="size-[1cqw] rounded-full bg-line-strong" />
          <span className="size-[1cqw] rounded-full bg-line-strong" />
        </div>
        <span className="truncate font-mono text-[1.35cqw] text-subtle">{title}</span>
        {right && <div className="ml-auto">{right}</div>}
      </div>
      <div className="relative min-h-0 flex-1">{children}</div>
    </div>
  );
}
