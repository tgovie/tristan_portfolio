import type { ExperienceEntry } from "./types";

/** Work experience, most recent first. Keep summaries to one or two lines — the résumé has the detail. */
export const experience: ExperienceEntry[] = [
  {
    company: "ATS Traffic Pte Ltd",
    role: "Engineering Intern",
    location: "Singapore",
    date: "May 2026 – Aug 2026",
    summary:
      "Supported engineers on traffic control system projects: system testing, equipment installation, maintenance and troubleshooting, onsite compliance checks and technical documentation.",
  },
  {
    company: "Compass Group",
    role: "Data Analyst Intern",
    location: "Singapore",
    date: "May 2025 – Aug 2025",
    summary:
      "Built Power BI dashboards on financial, procurement and vendor KPIs, supported IT project managers on system testing and setup, and provided level 2 technical support at client sites.",
  },
  {
    company: "Compass Group",
    role: "Data Analyst Intern",
    location: "Remote",
    date: "Nov 2024 – May 2025",
    summary:
      "Integrated SAP procurement data and SharePoint trend data into Power BI, building reporting workflows for the finance department.",
  },
];

/** Independent market work, shown at the end of the Experience section. */
export const marketsResearch: ExperienceEntry = {
  company: "Independent",
  role: "Futures Trading & Market Research",
  location: "",
  date: "Ongoing",
  summary:
    "Researching Nasdaq-100 futures through structured market analysis, historical backtesting and post-trade analysis.",
  tags: ["NQ", "Backtesting", "Market Data", "Risk Analysis"],
};
