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

        {/* First two projects get wider cards; the rest sit three across. */}
        <div className="grid gap-5 md:grid-cols-6">
          {featuredProjects.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 0.05} className={cn(i < 2 ? "md:col-span-3" : "md:col-span-3 lg:col-span-2")}>
              <ProjectCard project={p} large={i < 2} />
            </Reveal>
          ))}
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
