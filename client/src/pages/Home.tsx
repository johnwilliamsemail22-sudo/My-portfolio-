import Nav from "@/components/site/Nav";
import Hero from "@/components/site/Hero";
import About from "@/components/site/About";
import Services from "@/components/site/Services";
import Archive from "@/components/site/Archive";
import Projects from "@/components/site/Projects";
import CtaBand from "@/components/site/CtaBand";
import Footer from "@/components/site/Footer";
import { useReveal } from "@/hooks/useSiteMotion";

export default function Home() {
  useReveal();

  return (
    <div className="site">
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Archive />
        <Projects />
        <CtaBand />
      </main>
      <Footer />
    </div>
  );
}
