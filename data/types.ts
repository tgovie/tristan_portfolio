/** Shared content types. Every section renders from data in /data. */

/** Built-in mockup rendered when a project has no screenshot. */
export type PreviewKind = "coverday" | "market-sessions" | "volume";

export interface Project {
  slug: string;
  title: string;
  /** One sentence. */
  description: string;
  /** Small label above the title, e.g. "FinTech / Mobile". */
  category: string;
  technologies: string[];
  /** Featured projects appear on the homepage with a visual. Others only on /projects. */
  featured: boolean;
  /** Where the card goes when clicked: live site, app page or repo. Leave "" until it exists. */
  link?: string;
  /** Optional repository URL — shows a small GitHub button. */
  github?: string;
  /** Small label on the card, e.g. "You're here ↗". */
  badge?: string;
  /** Optional screenshot under /public (16:10 works best). Falls back to `preview`. */
  image?: string;
  preview?: PreviewKind;

  /* ---- Project page (/projects/[slug]). The page exists when `overview` is set. ---- */
  /** Short paragraph at the top of the project page. */
  overview?: string;
  /** Three or four short bullets: what it does. */
  highlights?: string[];
  /** Interactive demo shown on the project page. */
  demo?: PreviewKind;
}

export interface ExperienceEntry {
  company: string;
  role: string;
  location: string;
  date: string;
  /** One or two short lines. */
  summary: string;
  tags?: string[];
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "email";
}
