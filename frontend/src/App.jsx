import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Section from "./components/Section";

function App() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed relative"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      
      <div className="absolute inset-0 bg-black/50 z-0"></div>

     
      <div className="relative z-10">
        <Navbar />

        <Section direction="up">
          <Hero />
        </Section>

        <Section direction="left">
          <About />
        </Section>

        <Section direction="up">
          <Projects />
        </Section>

        <Section direction="up">
          <Contact />
        </Section>
      </div>
    </div>
  );
}

export default App;
