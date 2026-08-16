import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import ToolsMarquee from "@/components/ToolsMarquee";
import ProjectsTeaser from "@/components/ProjectsTeaser";
import Skills from "@/components/Skills";
import AboutMeTeaser from "@/components/AboutMeTeaser";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <ToolsMarquee />
        <ProjectsTeaser />
        <Skills />
        <AboutMeTeaser />
      </main>
      <Footer />
    </>
  );
}
