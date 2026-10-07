import Image from "next/image";
import { site } from "@/data/site";
import { Reveal } from "../ui/Reveal";

export function BeyondEngineering() {
  const p = site.personal;
  return (
    <section id="beyond" className="py-16 md:py-20">
      <div className="container-page grid items-center gap-10 md:grid-cols-2 md:gap-16">
        {p.photo && (
          <Reveal className="relative aspect-[4/3] overflow-hidden rounded-xl border border-line">
            <Image src={p.photo} alt={p.photoAlt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
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
