import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary";

const base =
  "group inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-4 text-sm font-medium transition-[background-color,border-color,color,transform] duration-200 active:scale-[0.98]";

const variants: Record<Variant, string> = {
  primary: "bg-fg text-bg hover:bg-white/85",
  secondary: "border border-line bg-card text-fg hover:border-line-strong hover:bg-surface",
};

export function buttonClass(variant: Variant = "primary", className?: string) {
  return cn(base, variants[variant], className);
}
