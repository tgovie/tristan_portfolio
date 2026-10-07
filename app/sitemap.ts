import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { pageProjects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = ["", "/projects", ...pageProjects.map((p) => `/projects/${p.slug}`)].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));
  return routes;
}
