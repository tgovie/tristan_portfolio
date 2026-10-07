import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/types";
import { projectHref } from "@/data/projects";
import { ProjectPreview } from "../previews/ProjectPreview";
import { GitHubIcon } from "../ui/BrandIcons";
import { Tag } from "../ui/Tag";
import { cn } from "@/lib/utils";


function CardLink({ href, title }: { href: string; title: string }) {
  const cls = "after:absolute after:inset-0 after:z-[5] after:rounded-xl focus-visible:outline-none focus-visible:after:outline focus-visible:after:outline-2 focus-visible:after:outline-accent";
  if (href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {title}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {title}
    </Link>
  );
}

/** Homepage project card: visual, title, one sentence, tags. The whole card is the link. */
/** `wide` puts the visual beside the text on desktop (used for a full-width card). */
export function ProjectCard({ project, large = false, wide = false }: { project: Project; large?: boolean; wide?: boolean }) {
  const href = projectHref(project);
  const clickable = Boolean(href);

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-xl border border-line bg-card transition-[border-color,transform] duration-300",
        clickable && "hover:-translate-y-1 hover:border-line-strong",
        wide && "md:grid md:grid-cols-[1.35fr_1fr]",
      )}
    >
      <div className={cn("relative overflow-hidden border-b border-line", wide && "md:border-b-0 md:border-r")}>
        <div className={cn("transition-transform duration-500 ease-out", clickable && "group-hover:scale-[1.03]")}>
          <ProjectPreview project={project} />
        </div>
        {project.badge && (
          <span className="absolute right-3 top-3 rounded-full border border-accent/40 bg-bg/85 px-2.5 py-1 font-mono text-[11px] text-accent-soft backdrop-blur">
            {project.badge}
          </span>
        )}
      </div>

      <div className={cn("flex flex-1 flex-col", large ? "p-6" : "p-5", wide && "md:justify-center md:p-10")}>
        <div className="flex items-center justify-between gap-3">
          <p className="font-mono text-[11px] text-subtle">{project.category}</p>
          {project.demo && (
            <span className="flex items-center gap-1.5 font-mono text-[10px] text-accent-soft">
              <span className="size-1.5 animate-pulse-dot rounded-full bg-accent" aria-hidden="true" />
              interactive demo
            </span>
          )}
        </div>
        <div className="mt-1.5 flex items-start justify-between gap-3">
          <h3 className={cn("font-medium tracking-tight text-fg", wide ? "text-2xl md:text-3xl" : large ? "text-xl" : "text-lg")}>
            {clickable ? <CardLink href={href} title={project.title} /> : project.title}
          </h3>
          {clickable && (
            <ArrowUpRight
              size={18}
              className="mt-1 shrink-0 text-subtle transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg"
              aria-hidden="true"
            />
          )}
        </div>
        <p className="mt-2 text-[15px] leading-relaxed text-muted">{project.description}</p>

        {(project.technologies.length > 0 || (project.github && project.github !== href)) && (
          <div className={cn("flex items-end justify-between gap-3 pt-5", !wide && "mt-auto")}>
            <ul className="flex flex-wrap gap-1.5" aria-label="Technologies">
              {project.technologies.map((t) => (
                <li key={t}>
                  <Tag className="group-hover:text-fg/85">{t}</Tag>
                </li>
              ))}
            </ul>
            {project.github && project.github !== href && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} on GitHub`}
                className="relative z-10 grid size-9 shrink-0 place-items-center rounded-md text-subtle transition-colors hover:bg-surface hover:text-fg"
              >
                <GitHubIcon size={16} />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

/** Compact row used on /projects for smaller projects. */
export function ProjectRow({ project }: { project: Project }) {
  const href = projectHref(project);
  return (
    <li className="group relative grid gap-2 border-t border-line py-5 md:grid-cols-[1fr_auto] md:items-baseline md:gap-8">
      <div>
        <h3 className="flex items-center gap-1.5 font-medium text-fg">
          {href ? <CardLink href={href} title={project.title} /> : project.title}
          {href && <ArrowUpRight size={15} className="text-subtle transition-transform group-hover:-translate-y-px group-hover:translate-x-px" aria-hidden="true" />}
        </h3>
        <p className="mt-1 text-[15px] text-muted">{project.description}</p>
      </div>
      <p className="font-mono text-[11px] text-subtle">{project.technologies.join(" · ")}</p>
    </li>
  );
}
