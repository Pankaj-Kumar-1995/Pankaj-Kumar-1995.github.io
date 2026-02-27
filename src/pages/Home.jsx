import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import SkillsMatrix from "../components/SkillsMatrix";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <SkillsMatrix />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}
