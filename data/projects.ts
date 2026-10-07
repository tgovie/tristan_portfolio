import type { Project } from "./types";

/**
 * Projects. To add one, append an object — no layout code needs to change.
 *
 * - `featured: true`  → shown on the homepage with a visual (keep this to ~5).
 * - `featured: false` → only listed on /projects.
 * - `link`            → where clicking the card goes. Leave "" until the URL exists; the card
 *                       simply isn't clickable until then.
 * - `github`          → optional repo button.
 */
export const projects: Project[] = [
  {
    slug: "coverday",
    title: "Coverday",
    description:
      "A simple personal-finance app designed to make upcoming bills, subscriptions and recurring payments easier to understand.",
    category: "FinTech / Mobile",
    technologies: [], // TODO: add the stack once it's final
    featured: true,
    preview: "coverday",
    link: "", // TODO: add Coverday URL
    github: "",
  },
  {
    slug: "market-session-explorer",
    title: "Market Session Explorer",
    description:
      "An interactive tool for exploring NQ and ES market behaviour across global trading sessions and economic events.",
    category: "Markets / Data",
    technologies: ["Next.js", "Python", "Market Data"],
    featured: true,
    preview: "market-sessions",
    link: "", // TODO
    github: "", // TODO
  },
  {
    slug: "volume-explorer",
    title: "Volume Explorer",
    description: "A data-analysis tool for visualizing intraday volume patterns across NQ and ES futures.",
    category: "Markets / Data",
    technologies: ["Python", "Pandas", "Streamlit"],
    featured: true,
    preview: "volume",
    link: "", // TODO
    github: "",
  },
  {
    slug: "property-intelligence-tool",
    title: "Property Intelligence Tool",
    description: "A Python-based data pipeline for collecting and organizing public Montreal property information.",
    category: "Data / Automation",
    technologies: ["Python", "Playwright", "Pandas"],
    featured: true,
    preview: "property",
    link: "",
    github: "",
  },
  {
    slug: "personal-portfolio",
    title: "Personal Portfolio",
    description: "The site you're currently looking at.",
    category: "Web",
    technologies: ["Next.js", "TypeScript", "Tailwind"],
    featured: true,
    badge: "You're here ↗",
    preview: "portfolio",
    link: "/",
    github: "https://github.com/tgovie/tristan_portfolio",
  },

  /* ---------------- Listed on /projects only ---------------- */
  {
    slug: "mcmetro-algorithms",
    title: "McMetro Algorithms Project",
    description: "Graph and optimization algorithms including max-flow and minimum-spanning-tree techniques.",
    category: "Algorithms",
    technologies: ["Java", "Edmonds-Karp", "Kruskal", "DSU"],
    featured: false,
  },
  {
    slug: "trading-strategy-research",
    title: "Trading Strategy Research",
    description: "Research and backtesting tools for studying futures trading concepts.",
    category: "Markets",
    technologies: ["Pine Script", "TradingView", "Backtesting"],
    featured: false,
  },
  {
    slug: "robotics-controller",
    title: "Robotics Controller",
    description: "Model-based control system for autonomous navigation behaviours, built and tested in simulation.",
    category: "Engineering",
    technologies: ["MATLAB", "Stateflow", "Control Systems"],
    featured: false,
  },
  {
    slug: "aircraft-ground-automation",
    title: "Aircraft Ground Automation Research",
    description:
      "Research into how automated baggage handling, autonomous pushback and automated inspection could shorten aircraft turnaround.",
    category: "Engineering Research",
    technologies: ["Automation", "Aviation"],
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured);
