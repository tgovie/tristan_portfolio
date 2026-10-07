import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { getNextProject, getProject, pageProjects } from "@/data/projects";
import { ProjectDemo } from "@/components/demos/ProjectDemo";
import { ProjectPreview } from "@/components/previews/ProjectPreview";
import { GitHubIcon } from "@/components/ui/BrandIcons";
import { buttonClass } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Tag } from "@/components/ui/Tag";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return pageProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: `/projects/${project.slug}` },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const next = getNextProject(slug);

  return (
    <article className="pt-24 md:pt-32">
      <div className="container-page">
        <Link href="/#projects" className="group inline-flex min-h-11 items-center gap-2 text-sm text-muted transition-colors hover:text-fg">
          <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-0.5" aria-hidden="true" />
          Back
        </Link>

        <header className="mt-4 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="font-mono text-xs text-subtle">{project.category}</p>
            <h1 className="mt-2 text-4xl font-semibold tracking-[-0.03em] text-fg md:text-6xl">{project.title}</h1>
            <p className="mt-4 text-lg leading-relaxed text-muted">{project.description}</p>
          </div>
          {(project.link || project.github) && (
            <div className="flex flex-wrap gap-3">
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className={buttonClass("primary")}>
                  Open project <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className={buttonClass("secondary")}>
                  <GitHubIcon size={15} /> GitHub
                </a>
              )}
            </div>
          )}
        </header>

        <div className="mt-10 md:mt-12">
          {project.demo ? (
            <ProjectDemo kind={project.demo} />
          ) : (
            <div className="overflow-hidden rounded-xl border border-line">
              <ProjectPreview project={project} priority />
            </div>
          )}
          {project.demo && project.demo !== "coverday" && (
            <p className="mt-3 font-mono text-[11px] text-subtle">Interactive demo with sample data — hover the chart and use the toggles.</p>
          )}
        </div>

        <Reveal className="mt-16 grid gap-10 border-t border-line pt-10 md:grid-cols-[1.3fr_1fr] md:gap-16">
          <div>
            <h2 className="font-mono text-xs text-subtle">
              <span className="text-accent">/</span> overview
            </h2>
            <p className="mt-4 text-base leading-relaxed text-fg/90 md:text-lg md:leading-relaxed">{project.overview}</p>
          </div>
          <div className="space-y-8">
            {project.highlights && (
              <div>
                <h2 className="font-mono text-xs text-subtle">
                  <span className="text-accent">/</span> what it does
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex gap-3 text-[15px] text-muted">
                      <span className="mt-[0.7em] h-px w-3 shrink-0 bg-accent" aria-hidden="true" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {project.technologies.length > 0 && (
              <div>
                <h2 className="font-mono text-xs text-subtle">
                  <span className="text-accent">/</span> stack
                </h2>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {project.technologies.map((t) => (
                    <li key={t}>
                      <Tag>{t}</Tag>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </Reveal>
      </div>

      {next && next.slug !== project.slug && (
        <nav aria-label="Next project" className="mt-20 border-t border-line">
          <Link href={`/projects/${next.slug}`} className="group block">
            <div className="container-page flex items-center justify-between gap-6 py-10 md:py-14">
              <div>
                <p className="font-mono text-[11px] text-subtle">Next project</p>
                <p className="mt-1 text-2xl font-semibold tracking-tight text-fg transition-colors group-hover:text-accent-soft md:text-3xl">
                  {next.title}
                </p>
              </div>
              <span className="grid size-12 shrink-0 place-items-center rounded-full border border-line text-muted transition-all duration-300 group-hover:border-accent/50 group-hover:text-accent">
                <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </div>
          </Link>
        </nav>
      )}
    </article>
  );
}
