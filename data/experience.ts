import type { ExperienceEntry } from "./types";

/** Work experience, most recent first. Keep summaries to one or two lines — the résumé has the detail. */
export const experience: ExperienceEntry[] = [
  {
    company: "ATS Traffic Pte Ltd",
    role: "Engineering Intern — Project Operations",
    location: "Singapore",
    date: "May 2026 – Aug 2026",
    summary:
      "Worked across live infrastructure projects on system testing, troubleshooting and technical documentation, supporting day-to-day project operations.",
  },
  {
    company: "Compass Group",
    role: "Finance Data Analyst Intern",
    location: "Singapore",
    date: "May 2025 – Aug 2025",
    summary:
      "Built Power BI dashboards on financial and operational data and streamlined recurring reporting for the finance team.",
  },
  {
    company: "Alta Construction Group",
    role: "Financial Analysis & Client Development",
    location: "Montreal, Canada",
    date: "Jan 2025 – Apr 2025",
    summary:
      "Built financial models for property projects to support pricing and forecasting, alongside commercial analysis and client development.",
  },
  {
    company: "Compass Group",
    role: "Data Analyst Intern — Finance & Procurement",
    location: "Singapore / Remote",
    date: "Nov 2024 – May 2025",
    summary:
      "Analysed financial, procurement and supplier data, bringing SAP purchasing data into Power BI reporting.",
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
