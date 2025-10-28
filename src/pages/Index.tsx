import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Certifications from '../components/Certifications';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <section id="about">
          <About />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="certifications">
          <Certifications />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      
      {/* Footer */}
      <footer className="py-8" style={{ background: 'hsl(25 80% 40%)' }}>
        <div className="container mx-auto px-4 text-center">
          <p className="text-white font-medium">
            © 2025 Maurilio Cesar do Nascimento
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
