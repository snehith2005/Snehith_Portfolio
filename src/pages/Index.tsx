import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

type ActiveSection = 'all' | 'about' | 'projects' | 'skills' | 'contact';

const Index = () => {
  const [activeSection, setActiveSection] = useState<ActiveSection>('all');

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <div className="transition-all duration-500 ease-in-out">
        {activeSection === 'all' && (
          <div className="animate-fade-in">
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Contact />
          </div>
        )}
        {activeSection === 'about' && (
          <div className="animate-fade-in">
            <About />
          </div>
        )}
        {activeSection === 'projects' && (
          <div className="animate-fade-in">
            <Projects />
          </div>
        )}
        {activeSection === 'skills' && (
          <div className="animate-fade-in">
            <Skills />
          </div>
        )}
        {activeSection === 'contact' && (
          <div className="animate-fade-in">
            <Contact />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Index;
