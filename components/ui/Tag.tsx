import { cn } from "@/lib/utils";

export function Tag({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-line bg-surface/60 px-2 py-0.5 font-mono text-[11px] leading-5 text-muted transition-colors duration-200",
        className,
      )}
    >
      {children}
    </span>
  );
}
