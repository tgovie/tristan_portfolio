/** Homepage sections shown in the navbar. `id` must match the section's id attribute. */
export const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
] as const;

export type SectionId = (typeof navItems)[number]["id"];
