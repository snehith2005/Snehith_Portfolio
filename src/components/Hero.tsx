import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-secondary opacity-50"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-foreground">Hi, I'm </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Nallapuram Snehith Reddy
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Full-Stack Developer & UI/UX Enthusiast crafting digital experiences 
            that blend creativity with cutting-edge technology
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
            >
              View My Work
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            
            <div className="flex items-center gap-4">
              <Button variant="outline" size="icon" className="hover:bg-accent transition-colors" onClick={()=>window.open("https://github.com/snehith2005", "_blank")}>
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="hover:bg-accent transition-colors"onClick={() =>
      window.open("https://www.linkedin.com/in/nallapuram-snehith-reddy-b0b061290", "_blank")
    }>
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
    variant="outline"
    size="icon"
    className="hover:bg-accent transition-colors"
    onClick={() => {
      window.location.href = "mailto:nallapuramsnehithreddy@gmail.com";
    }}
  >
    <Mail className="h-5 w-5" />
  </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;