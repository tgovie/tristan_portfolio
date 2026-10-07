import { ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";
import { socials } from "@/data/socials";
import { SocialIcon } from "../ui/BrandIcons";
import { Reveal } from "../ui/Reveal";
import { buttonClass } from "../ui/Button";

const order = { email: 0, linkedin: 1, github: 2 } as const;

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24">
      <Reveal className="container-page">
        <div className="border-t border-line pt-14">
          <h2 className="text-4xl font-semibold tracking-tight text-fg md:text-5xl">{site.contact.heading}</h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">{site.contact.body}</p>
          <ul className="mt-8 flex flex-wrap gap-3">
            {[...socials]
              .sort((a, b) => order[a.icon] - order[b.icon])
              .map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    {...(s.icon === "email" ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                    className={buttonClass(s.icon === "email" ? "primary" : "secondary")}
                  >
                    <SocialIcon icon={s.icon} size={15} />
                    {s.label}
                    <ArrowUpRight size={14} className="opacity-50 transition-transform group-hover:-translate-y-px group-hover:translate-x-px" aria-hidden="true" />
                  </a>
                </li>
              ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
