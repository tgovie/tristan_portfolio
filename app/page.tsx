import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { BeyondEngineering } from "@/components/sections/BeyondEngineering";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <SelectedWork />
      <BeyondEngineering />
      <Contact />
    </>
  );
}
