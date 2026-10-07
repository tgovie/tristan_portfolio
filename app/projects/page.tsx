import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { featuredProjects, otherProjects } from "@/data/projects";
import { ProjectCard, ProjectRow } from "@/components/projects/ProjectCard";

export const metadata: Metadata = {
  title: "Projects",
  description: "Software, markets, data and engineering projects by Tristan Govier.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <div className="container-page pt-28 pb-24 md:pt-36">
      <Link href="/" className="group inline-flex min-h-11 items-center gap-2 text-sm text-muted hover:text-fg">
        <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-0.5" aria-hidden="true" /> Home
      </Link>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-fg md:text-5xl">Projects</h1>
      <p className="mt-3 max-w-xl text-muted">Things I&apos;ve built across software, markets, data and engineering.</p>

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>

      {otherProjects.length > 0 && (
        <section className="mt-20">
          <h2 className="mb-2 font-mono text-xs text-subtle">
            <span className="text-accent">/</span> more
          </h2>
          <ul className="border-b border-line">
            {otherProjects.map((p) => (
              <ProjectRow key={p.slug} project={p} />
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
