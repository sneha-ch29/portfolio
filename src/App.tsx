import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { EducationAndInterests } from "./components/EducationAndInterests";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Hero } from "./components/HeroSection";
import { Navbar } from "./components/NavBar";

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <EducationAndInterests />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
