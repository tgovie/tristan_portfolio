import Image from "next/image";
import type { Project } from "@/data/types";
import { MarketSessionsPreview } from "./MarketSessionsPreview";
import { VolumePreview } from "./VolumePreview";
import { CoverdayPreview } from "./CoverdayPreview";
import { PreviewCanvas } from "./Frame";

const previews = {
  coverday: CoverdayPreview,
  "market-sessions": MarketSessionsPreview,
  volume: VolumePreview,
} as const;

/** Cover image if one is set, otherwise the built-in mockup for the project. */
export function ProjectPreview({ project, priority = false, className }: { project: Project; priority?: boolean; className?: string }) {
  if (project.image) {
    return (
      <PreviewCanvas className={className}>
        <Image
          src={project.image}
          alt={`${project.title} screenshot`}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 60vw, 100vw"
          className="object-cover"
        />
      </PreviewCanvas>
    );
  }
  const Preview = project.preview ? previews[project.preview] : null;
  if (!Preview) {
    return (
      <PreviewCanvas className={className}>
        <div className="grid h-full place-items-center font-mono text-[3cqw] text-subtle">{project.title}</div>
      </PreviewCanvas>
    );
  }
  return (
    <div role="img" aria-label={`Illustrative preview of ${project.title}`} className="h-full">
      <div aria-hidden="true" className="h-full">
        <Preview className={className} />
      </div>
    </div>
  );
}
