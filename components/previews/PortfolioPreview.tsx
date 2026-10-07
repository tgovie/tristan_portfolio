import { MousePointer2 } from "lucide-react";
import { site } from "@/data/site";
import { PreviewCanvas, WindowFrame } from "./Frame";

/** Miniature of this site's hero. */
export function PortfolioPreview() {
  const host = site.url.replace(/^https?:\/\//, "");

  return (
    <PreviewCanvas>
      <div className="relative flex h-full items-center justify-center p-[4cqw]">
        <WindowFrame title={host} className="h-full w-full">
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between border-b border-line px-[2.4cqw] py-[1.2cqw]">
              <span className="flex items-center gap-[0.8cqw] text-[1.4cqw] text-fg">
                <span className="grid size-[2.6cqw] place-items-center rounded-[0.5cqw] border border-line font-mono text-[1cqw]">
                  {site.initials}
                </span>
                {site.name}
              </span>
              <div className="flex gap-[1.8cqw] text-[1.3cqw] text-subtle">
                <span>About</span>
                <span>Experience</span>
                <span className="text-fg">Projects</span>
                <span>Resume</span>
              </div>
            </div>
            <div className="bg-grid relative flex flex-1 flex-col justify-center px-[4cqw]">
              <p className="font-mono text-[1.3cqw] text-subtle">{site.hero.status}</p>
              <p className="mt-[1.4cqw] text-[6.4cqw] leading-none font-semibold tracking-[-0.045em] text-fg">{site.name}</p>
              <p className="mt-[1.8cqw] max-w-[70%] text-[2cqw] leading-snug text-fg/85">{site.hero.headline}</p>
              <div className="mt-[2.6cqw] flex gap-[1.2cqw]">
                <span className="rounded-[0.6cqw] bg-fg px-[2cqw] py-[1cqw] text-[1.3cqw] font-medium text-bg">View my work</span>
                <span className="rounded-[0.6cqw] border border-line px-[2cqw] py-[1cqw] text-[1.3cqw] text-fg">Resume</span>
              </div>
            </div>
          </div>
        </WindowFrame>

        <div className="absolute left-[60%] top-[64%] flex items-start gap-[0.4cqw]">
          <MousePointer2 className="size-[3.4cqw] fill-accent text-accent drop-shadow-lg" aria-hidden="true" />
          <span className="mt-[2.4cqw] rounded-full bg-blue-600 px-[1.6cqw] py-[0.6cqw] font-mono text-[1.4cqw] font-medium whitespace-nowrap text-white shadow-lg">
            you are here
          </span>
        </div>
      </div>
    </PreviewCanvas>
  );
}
