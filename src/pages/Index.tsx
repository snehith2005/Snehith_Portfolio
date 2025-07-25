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
      {activeSection === 'all' && <Hero />}
      {(activeSection === 'all' || activeSection === 'about') && <About />}
      {(activeSection === 'all' || activeSection === 'projects') && <Projects />}
      {(activeSection === 'all' || activeSection === 'skills') && <Skills />}
      {(activeSection === 'all' || activeSection === 'contact') && <Contact />}
      <Footer />
    </div>
  );
};

export default Index;
