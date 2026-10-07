import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { featuredProjects, otherProjects } from "@/data/projects";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { ProjectCard } from "../projects/ProjectCard";
import { cn } from "@/lib/utils";

export function SelectedWork() {
  return (
    <section id="projects" className="py-16 md:py-20">
      <div className="container-page">
        <SectionHeading label="projects" title="Selected Work">
          {otherProjects.length > 0 && (
            <Link href="/projects" className="group hidden items-center gap-1.5 text-sm text-muted transition-colors hover:text-fg sm:inline-flex">
              View all projects
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          )}
        </SectionHeading>

        {/* With an odd number of projects, the first spans the full width. */}
        <div className="grid gap-5 md:grid-cols-2">
          {featuredProjects.map((p, i) => {
            const wide = i === 0 && featuredProjects.length % 2 === 1;
            return (
              <Reveal key={p.slug} delay={i * 0.05} className={cn(wide && "md:col-span-2")}>
                <ProjectCard project={p} large wide={wide} />
              </Reveal>
            );
          })}
        </div>

        {otherProjects.length > 0 && (
          <Link href="/projects" className="group mt-8 inline-flex min-h-11 items-center gap-1.5 text-sm text-muted transition-colors hover:text-fg sm:hidden">
            View all projects
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        )}
      </div>
    </section>
  );
}
