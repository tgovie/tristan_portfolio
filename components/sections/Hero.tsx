import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";
import { socials } from "@/data/socials";
import { buttonClass } from "../ui/Button";
import { SocialIcon } from "../ui/BrandIcons";
import { HeroStatus } from "../HeroStatus";

export function Hero() {
  const links = socials.filter((s) => s.icon !== "email");

  return (
    <section id="home" className="relative flex min-h-[88svh] flex-col justify-center overflow-hidden pt-28 pb-20 md:min-h-[min(100svh,900px)]">
      {/* faint engineering grid, fading out toward the edges */}
      <div className="bg-grid mask-fade pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />

      <div className="container-page hero-in grid items-center gap-10 md:grid-cols-[1fr_auto] md:gap-16">
        <div>
          {site.headshot && (
            <div className="relative mb-6 size-20 overflow-hidden rounded-full border border-line md:hidden">
              <Image src={site.headshot} alt={`Headshot of ${site.name}`} fill priority sizes="80px" className="object-cover object-[50%_20%]" />
            </div>
          )}
          <p className="font-mono text-xs text-subtle">{site.hero.status}</p>

          <h1 className="mt-5 text-5xl leading-[1] font-semibold tracking-[-0.045em] text-fg sm:text-7xl lg:text-8xl">{site.name}</h1>

          <p className="mt-6 max-w-2xl text-xl leading-snug tracking-tight text-fg/90 sm:text-2xl">{site.hero.headline}</p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">{site.hero.summary}</p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#projects" className={buttonClass("primary", "flex-1 sm:flex-none")}>
              View my work
              <ArrowDown size={15} className="transition-transform duration-200 group-hover:translate-y-0.5" aria-hidden="true" />
            </a>
            <a href={site.resume} target="_blank" rel="noopener noreferrer" className={buttonClass("secondary", "flex-1 sm:flex-none")}>
              Resume
              <ArrowUpRight size={15} className="text-subtle transition-transform duration-200 group-hover:-translate-y-px group-hover:translate-x-px" aria-hidden="true" />
            </a>
            <div className="-ml-3 flex w-full sm:ml-0 sm:w-auto">
            {links.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="grid size-11 place-items-center rounded-lg text-muted transition-colors hover:bg-surface hover:text-fg"
              >
                <SocialIcon icon={s.icon} size={17} />
              </a>
            ))}
            </div>
          </div>
        </div>

        {site.headshot && (
          <figure className="group relative hidden md:block">
            <div className="relative h-[380px] w-[290px] overflow-hidden rounded-2xl border border-line bg-card lg:h-[420px] lg:w-[320px]">
              <Image
                src={site.headshot}
                alt={`Headshot of ${site.name}`}
                fill
                priority
                sizes="320px"
                className="object-cover object-[50%_25%] grayscale-[30%] transition-[filter,transform] duration-500 group-hover:scale-[1.02] group-hover:grayscale-0"
              />
            </div>
            <figcaption className="mt-3 flex justify-between font-mono text-[11px] text-subtle">
              <span>Montreal, QC</span>
              <span>McGill · Eng</span>
            </figcaption>
          </figure>
        )}
      </div>

      <div className="container-page absolute inset-x-0 bottom-8">
        <HeroStatus />
      </div>
    </section>
  );
}
