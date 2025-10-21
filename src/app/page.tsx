import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth scrollbar-hide">
        <Hero />
        <Services />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
