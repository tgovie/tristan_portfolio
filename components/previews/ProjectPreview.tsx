import Image from "next/image";
import type { Project } from "@/data/types";
import { MarketSessionsPreview } from "./MarketSessionsPreview";
import { VolumePreview } from "./VolumePreview";
import { CoverdayPreview } from "./CoverdayPreview";
import { PropertyPreview } from "./PropertyPreview";
import { PortfolioPreview } from "./PortfolioPreview";
import { PreviewCanvas } from "./Frame";

const previews = {
  coverday: CoverdayPreview,
  "market-sessions": MarketSessionsPreview,
  volume: VolumePreview,
  property: PropertyPreview,
  portfolio: PortfolioPreview,
} as const;

/** Cover image if one is set, otherwise the built-in mockup for the project. */
export function ProjectPreview({ project, priority = false }: { project: Project; priority?: boolean }) {
  if (project.image) {
    return (
      <PreviewCanvas>
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
      <PreviewCanvas>
        <div className="grid h-full place-items-center font-mono text-[3cqw] text-subtle">{project.title}</div>
      </PreviewCanvas>
    );
  }
  return (
    <div role="img" aria-label={`Illustrative preview of ${project.title}`}>
      <div aria-hidden="true">
        <Preview />
      </div>
    </div>
  );
}
