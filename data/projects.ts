import type { Project } from "./types";

/**
 * Projects. To add one, append an object — no layout code needs to change.
 *
 * - `featured: true`  → shown on the homepage with a visual.
 * - `featured: false` → only listed on /projects.
 * - `overview`        → gives the project its own page at /projects/<slug> (cards link there).
 * - `link`            → live site / app / repo. Shown as a button on the project page.
 * - `github`          → optional repo button.
 *
 * Demos on project pages use sample data and are labelled as such.
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
    overview:
      "Coverday focuses on the money that's already committed: rent, bills, subscriptions and other recurring payments. Instead of budgeting categories, it lays upcoming payments out on one simple timeline so you can see what's leaving your account and when.",
    highlights: [
      "Timeline of upcoming bills and subscriptions",
      "Recurring-payment and subscription tracking",
      "Simple overview of what's due in the next few weeks",
      "Reminders before payments land",
    ],
    demo: "coverday",
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
    overview:
      "Market Session Explorer splits each trading day into the Asia, London and New York sessions so you can compare how NQ and ES behave in each: price, volume and volatility, and how they react around scheduled economic releases.",
    highlights: [
      "NQ and ES intraday data, split by session in Eastern Time",
      "Session statistics: range, volume and volatility",
      "Price behaviour around economic events",
      "Historical comparison across days and weeks",
    ],
    demo: "market-sessions",
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
    overview:
      "Volume Explorer takes historical 5-minute futures data and averages volume by time of day, making it easy to see when NQ and ES actually trade and how participation shifts between sessions.",
    highlights: [
      "Built on 5-minute historical market data",
      "Average volume by time of day",
      "NQ vs ES and session-by-session comparisons",
      "Interactive Streamlit interface",
    ],
    demo: "volume",
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
export const pageProjects = projects.filter((p) => Boolean(p.overview));

export function getProject(slug: string) {
  return pageProjects.find((p) => p.slug === slug);
}

export function getNextProject(slug: string) {
  const i = pageProjects.findIndex((p) => p.slug === slug);
  return pageProjects[(i + 1) % pageProjects.length];
}

/** Where a project card goes: its own page if it has one, else the live link, else the repo. */
export function projectHref(p: Project) {
  if (p.overview) return `/projects/${p.slug}`;
  return p.link || p.github || "";
}
