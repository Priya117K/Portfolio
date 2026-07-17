import StarBackground from "./components/StarBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";


function App() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-[#020617]">
      <StarBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;

