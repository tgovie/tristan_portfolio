import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { buttonClass } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="relative grid min-h-[80dvh] place-items-center overflow-hidden px-5 pt-16">
      <div className="bg-grid mask-fade pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
      <div className="text-center">
        <p className="font-mono text-sm text-accent-soft">404</p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-fg md:text-5xl">
          Looks like this route didn&apos;t make it to production.
        </h1>
        <p className="mx-auto mt-4 max-w-md font-mono text-xs text-subtle">
          &gt; GET {"<this page>"} → 404 Not Found
        </p>
        <Link href="/" className={buttonClass("primary", "mt-8")}>
          <ArrowLeft size={16} aria-hidden="true" /> Back Home
        </Link>
      </div>
    </section>
  );
}
