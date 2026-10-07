import { site } from "@/data/site";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";

export function About() {
  const { education: edu, skills } = site;

  return (
    <section id="about" className="py-16 md:py-20">
      <div className="container-page grid gap-x-16 md:grid-cols-[220px_1fr]">
        <SectionHeading label="about" title="About" aside />

        <div className="max-w-2xl">
          <Reveal className="space-y-5 text-base leading-relaxed text-muted md:text-lg md:leading-relaxed">
            {site.about.map((p, i) => (
              <p key={i} className={i === 0 ? "text-fg/90" : undefined}>
                {p}
              </p>
            ))}
          </Reveal>

          <Reveal delay={0.06} className="mt-10 rounded-xl border border-line bg-card p-5 md:p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-medium text-fg">{edu.institution}</h3>
              <p className="font-mono text-xs text-subtle">{edu.date}</p>
            </div>
            <p className="mt-1 text-sm text-muted">
              {edu.degree} · {edu.location}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              <span className="text-fg/80">Relevant: </span>
              {edu.coursework.join(", ")}
            </p>
            <p className="mt-3 font-mono text-[11px] text-accent-soft">{edu.note}</p>
          </Reveal>

          <Reveal delay={0.1}>
            <dl className="mt-8 space-y-2 text-sm">
              {skills.map((s) => (
                <div key={s.label} className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                  <dt className="w-24 shrink-0 font-mono text-xs leading-6 text-subtle">{s.label}</dt>
                  <dd className="text-fg/85">{s.items.join(" · ")}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
