import { ArrowDown, ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";
import { socials } from "@/data/socials";
import { buttonClass } from "../ui/Button";
import { SocialIcon } from "../ui/BrandIcons";
import { HeroStatus } from "../HeroStatus";

export function Hero() {
  const links = socials.filter((s) => s.icon !== "email");

  return (
    <section id="home" className="relative flex min-h-[88svh] flex-col justify-center overflow-hidden pt-28 pb-16 md:min-h-[min(100svh,900px)]">
      {/* faint engineering grid, fading out toward the edges */}
      <div className="bg-grid mask-fade pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />

      <div className="container-page hero-in">
        <p className="font-mono text-xs text-subtle">{site.hero.status}</p>

        <h1 className="mt-5 text-5xl leading-[1] font-semibold tracking-[-0.045em] text-fg sm:text-7xl md:text-8xl">
          {site.name}
        </h1>

        <p className="mt-6 max-w-2xl text-xl leading-snug tracking-tight text-fg/90 sm:text-2xl">{site.hero.headline}</p>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">{site.hero.summary}</p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a href="#projects" className={buttonClass("primary")}>
            View my work
            <ArrowDown size={15} className="transition-transform duration-200 group-hover:translate-y-0.5" aria-hidden="true" />
          </a>
          <a href={site.resume} target="_blank" rel="noopener noreferrer" className={buttonClass("secondary")}>
            Resume
            <ArrowUpRight size={15} className="text-subtle transition-transform duration-200 group-hover:-translate-y-px group-hover:translate-x-px" aria-hidden="true" />
          </a>
          {links.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 px-2 text-sm text-muted transition-colors hover:text-fg"
            >
              <SocialIcon icon={s.icon} size={15} />
              {s.label}
            </a>
          ))}
        </div>
      </div>

      <div className="container-page absolute inset-x-0 bottom-8">
        <HeroStatus />
      </div>
    </section>
  );
}
