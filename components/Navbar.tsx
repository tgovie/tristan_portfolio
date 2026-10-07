"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { navItems, type SectionId } from "@/data/navigation";
import { site } from "@/data/site";
import { socials } from "@/data/socials";
import { SocialIcon } from "./ui/BrandIcons";
import { cn } from "@/lib/utils";

function useActiveSection(enabled: boolean) {
  const [active, setActive] = useState<SectionId | null>(null);

  useEffect(() => {
    if (!enabled) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id as SectionId);
        }
      },
      // A thin band across the middle of the viewport decides the current section.
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const item of navItems) {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    }
    // Clear the highlight when back at the top.
    const onScroll = () => window.scrollY < 200 && setActive(null);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [enabled]);

  return active;
}

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const active = useActiveSection(isHome);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const navSocials = socials.filter((s) => s.icon !== "email");
  const isActive = (id: SectionId) => (isHome ? active === id : id === "projects" && pathname.startsWith("/projects"));

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color] duration-300",
        scrolled || open ? "border-line/70 bg-bg/80 backdrop-blur-xl" : "border-transparent",
      )}
    >
      <nav aria-label="Main" className="container-page flex h-14 items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 rounded-md text-sm font-medium text-fg">
          <span className="grid size-7 place-items-center rounded-md border border-line font-mono text-[11px]" aria-hidden="true">
            {site.initials}
          </span>
          {site.name}
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={`/#${item.id}`}
              aria-current={isActive(item.id) ? "true" : undefined}
              className={cn(
                "rounded-md px-3 py-1.5 text-sm transition-colors duration-200",
                isActive(item.id) ? "text-fg" : "text-muted hover:text-fg",
              )}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={site.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-0.5 rounded-md px-3 py-1.5 text-sm text-muted transition-colors hover:text-fg"
          >
            Resume
            <ArrowUpRight size={13} className="transition-transform group-hover:-translate-y-px group-hover:translate-x-px" aria-hidden="true" />
          </a>
          <span className="mx-2 h-4 w-px bg-line" aria-hidden="true" />
          {navSocials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="grid size-8 place-items-center rounded-md text-muted transition-colors hover:text-fg"
            >
              <SocialIcon icon={s.icon} size={15} />
            </a>
          ))}
        </div>

        <button
          type="button"
          className="-mr-2 grid size-11 place-items-center text-fg md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-2.5 w-5" aria-hidden="true">
            <motion.span
              className="absolute left-0 h-[1.5px] w-5 bg-current"
              initial={false}
              animate={open ? { top: 4.5, rotate: 45 } : { top: 0, rotate: 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="absolute left-0 h-[1.5px] w-5 bg-current"
              initial={false}
              animate={open ? { top: 4.5, rotate: -45 } : { top: 9, rotate: 0 }}
              transition={{ duration: 0.2 }}
            />
          </span>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="overflow-hidden md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
          >
            <ul className="container-page pb-4">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={`/#${item.id}`}
                    onClick={() => setOpen(false)}
                    className="flex min-h-12 items-center border-b border-line/60 text-base text-fg"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={site.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex min-h-12 items-center gap-1 border-b border-line/60 text-base text-fg"
                >
                  Resume <ArrowUpRight size={15} className="text-subtle" aria-hidden="true" />
                </a>
              </li>
              <li className="flex gap-2 pt-4">
                {navSocials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-line px-4 text-sm text-muted"
                  >
                    <SocialIcon icon={s.icon} size={15} /> {s.label}
                  </a>
                ))}
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
