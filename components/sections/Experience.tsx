import type { ExperienceEntry } from "@/data/types";
import { experience, marketsResearch } from "@/data/experience";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { Tag } from "../ui/Tag";

function Row({ job, dashed = false }: { job: ExperienceEntry; dashed?: boolean }) {
  return (
    <Reveal
      as="li"
      className={`grid gap-1 border-t py-6 md:grid-cols-[160px_1fr] md:gap-8 ${dashed ? "border-dashed border-line-strong" : "border-line"}`}
    >
      <p className="font-mono text-xs leading-6 text-subtle tabular-nums">{job.date}</p>
      <div>
        <h3 className="font-medium text-fg">{job.company}</h3>
        <p className="mt-0.5 text-sm text-muted">
          {job.role}
          {job.location && <span className="text-subtle"> · {job.location}</span>}
        </p>
        <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-muted">{job.summary}</p>
        {job.tags && (
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {job.tags.map((t) => (
              <li key={t}>
                <Tag>{t}</Tag>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Reveal>
  );
}

export function Experience() {
  return (
    <section id="experience" className="py-16 md:py-20">
      <div className="container-page grid gap-x-16 md:grid-cols-[220px_1fr]">
        <SectionHeading label="experience" title="Experience" aside />
        <ol className="border-b border-line">
          {experience.map((job) => (
            <Row key={`${job.company}-${job.date}`} job={job} />
          ))}
          <Row job={marketsResearch} dashed />
        </ol>
      </div>
    </section>
  );
}
