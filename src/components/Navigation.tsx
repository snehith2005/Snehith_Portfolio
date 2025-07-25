import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

type ActiveSection = 'all' | 'about' | 'projects' | 'skills' | 'contact';

interface NavigationProps {
  activeSection: ActiveSection;
  setActiveSection: (section: ActiveSection) => void;
}

const Navigation = ({ activeSection, setActiveSection }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-card/80 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Portfolio
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => setActiveSection('all')}
              className={`transition-colors duration-300 ${
                activeSection === 'all' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              All
            </button>
            {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => setActiveSection(item.toLowerCase() as ActiveSection)}
                className={`transition-colors duration-300 ${
                  activeSection === item.toLowerCase() ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <Button
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;