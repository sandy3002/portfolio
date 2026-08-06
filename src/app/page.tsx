import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import About from "./components/About";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import Skills from "./components/Skills";
import LifeNotes from "./components/LifeNotes";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Introduction />
        <About />
        <Projects />
        <Timeline />
        <Skills />
        <LifeNotes />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
