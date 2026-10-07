import Image from "next/image";
import { site } from "@/data/site";
import { Reveal } from "../ui/Reveal";
import { cn } from "@/lib/utils";

export function BeyondEngineering() {
  const p = site.personal;
  return (
    <section id="beyond" className="py-16 md:py-20">
      <div className="container-page grid items-center gap-10 md:grid-cols-2 md:gap-16">
        {p.photos.length > 0 && (
          <Reveal className={cn("grid h-[300px] gap-3 sm:h-[400px]", p.photos.length > 1 && "grid-cols-[1.5fr_1fr]")}>
            {p.photos.map((photo, i) => (
              <div key={photo.src} className="group relative overflow-hidden rounded-xl border border-line">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes={i === 0 ? "(min-width: 768px) 30vw, 60vw" : "(min-width: 768px) 20vw, 40vw"}
                  className={cn("object-cover transition-transform duration-700 group-hover:scale-[1.04]", i === 1 && "object-[50%_30%]")}
                />
              </div>
            ))}
          </Reveal>
        )}
        <Reveal delay={0.06}>
          <p className="font-mono text-xs text-subtle">
            <span className="text-accent">/</span> {p.heading.toLowerCase()}
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-fg md:text-4xl">{p.heading}</h2>
          <p className="mt-6 font-medium text-fg">{p.title}</p>
          <p className="mt-2 leading-relaxed text-muted">{p.body}</p>
          <ul className="mt-6 space-y-2">
            {p.highlights.map((h) => (
              <li key={h} className="flex items-center gap-3 text-sm text-fg/85">
                <span className="h-px w-3 bg-accent" aria-hidden="true" />
                {h}
              </li>
            ))}
          </ul>
          <p className="mt-8 font-mono text-xs text-subtle">{p.interests.join(" · ")}</p>
        </Reveal>
      </div>
    </section>
  );
}
