import type { SocialLink } from "./types";
import { site } from "./site";

/**
 * Social links. Any link with an empty href is hidden everywhere on the site.
 */

export const GITHUB_URL = "https://github.com/tgovie";
export const LINKEDIN_URL = "https://www.linkedin.com/in/tristan-govier";

const all: SocialLink[] = [
  { label: "GitHub", href: GITHUB_URL, icon: "github" },
  { label: "LinkedIn", href: LINKEDIN_URL, icon: "linkedin" },
  { label: "Email", href: `mailto:${site.email}`, icon: "email" },
];

export const socials = all.filter((s) => s.href);
