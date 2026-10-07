import { site } from "@/data/site";
import { socials } from "@/data/socials";

export function Footer() {
  const links = socials.filter((s) => s.icon !== "email");
  return (
    <footer className="border-t border-line/60">
      <div className="container-page flex flex-col gap-3 py-8 font-mono text-xs text-subtle sm:flex-row sm:items-center sm:justify-between">
        <p>
          {site.name} © {new Date().getFullYear()}
        </p>
        <div className="flex items-center gap-5">
          {links.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-fg">
              {s.label}
            </a>
          ))}
          <span>Built with Next.js</span>
        </div>
      </div>
    </footer>
  );
}
