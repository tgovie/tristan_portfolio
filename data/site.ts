/**
 * Personal information and site-wide copy. Edit this file to change what the homepage says.
 */

export const site = {
  name: "Tristan Govier",
  initials: "TG",
  /** Used for absolute URLs (OpenGraph, sitemap). Update when your domain is final. */
  url: "https://tristangovier.vercel.app",
  title: "Tristan Govier | Engineering, Software & Markets",
  description:
    "Tristan Govier — Computer Engineering student at McGill building across software, data and financial markets.",
  email: "trisgovier@gmail.com",
  /** Résumé PDF in /public. The navbar and hero open it in a new tab. */
  resume: "/resume.pdf",

  /** Headshot shown in the hero. Set to "" to hide. */
  headshot: "/images/profile.jpg",

  hero: {
    status: "Computer Engineering · McGill University",
    headline: "Computer Engineering student building across software, data and markets.",
    summary:
      "I'm a Computer Engineering student at McGill interested in software, financial markets and building technology around real-world problems.",
  },

  about: [
    "I study Computer Engineering at McGill. My interests sit somewhere between software, engineering, data and financial markets, and the projects I like most are the ones where I get to figure out how a system works — analysing data, automating something tedious, or building a tool I'd actually use.",
    "Outside of engineering, I spent years swimming at a high level in Canada, most recently on McGill's varsity team. I'm also into DJing, skiing, golf and travel.",
  ],

  education: {
    institution: "McGill University",
    degree: "B.Eng. Computer Engineering",
    date: "Expected 2028",
    location: "Montreal, Canada",
    coursework: [
      "Algorithms & Data Structures",
      "Probability & Statistics",
      "Software Engineering",
      "Computer Architecture",
      "Digital Logic",
      "Signals & Systems",
      "Comm Systems & Networks",
    ],
    note: "McGill Athletic Scholarship & Vancouver District Scholarship recipient",
  },

  /** Compact skills lines shown in About. Project-specific tech lives on the project cards. */
  skills: [
    { label: "Technical", items: ["Python", "Java", "C", "JavaScript", "React.js", "Bash", "Git", "Docker", "REST APIs", "VHDL", "Umple", "HTML/CSS"] },
    { label: "Data", items: ["Power BI", "Power Automate", "Microsoft 365"] },
    { label: "Markets", items: ["Futures Trading", "Backtesting", "Trade Execution", "Market Analysis", "Risk Management"] },
  ],

  personal: {
    heading: "Beyond engineering",
    title: "Former McGill Varsity Swimmer & McGill Record Holder",
    body: "I competed for McGill while studying engineering, training 20+ hours a week alongside classes until 2026.",
    highlights: [
      "2024 Canadian Olympic Trials Bronze Medalist",
      "4× U SPORTS individual finalist",
      "U SPORTS team bronze medalist",
      "Canada Games Gold & Bronze Medalist",
      "Quebec Age Group Record Holder",
    ],
    interests: ["Golf", "Alpine Skiing", "Travel", "Fishing", "DJing", "Baking"],
    /** Photos shown beside the text. The first is the larger one. Remove entries to hide them. */
    photos: [
      { src: "/images/swim-start.jpg", alt: "Tristan diving off the starting block at a swim meet" },
      { src: "/images/swim-podium.jpg", alt: "Tristan on the podium at a Quebec swim meet" },
    ],
  },

  contact: {
    heading: "Let's connect.",
    body: "I'm always interested in meeting people working on interesting problems across software, engineering, data and markets.",
  },
} as const;
