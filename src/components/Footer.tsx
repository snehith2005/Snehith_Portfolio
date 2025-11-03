import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              Nallapuram Snehith Reddy
            </h3>
            <p className="text-muted-foreground">
              Full-Stack Developer & UI/UX Enthusiast
            </p>
          </div>

          <div className="flex items-center gap-4 mb-6 md:mb-0">
            <Button variant="ghost" size="icon" className="hover:bg-accent transition-colors" onClick={()=>window.open("https://github.com/snehith2005/")}>
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-accent transition-colors" onClick={()=>window.open("https://www.linkedin.com/in/nallapuram-snehith-reddy-b0b061290/")}>
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-accent transition-colors" onClick={() => window.location.href = "mailto:snehithreddy@gmail.com"}>
              <Mail className="h-5 w-5" />
            </Button>
          </div>

          <div className="text-center md:text-right">
            <p className="text-muted-foreground flex items-center justify-center md:justify-end">
              © {currentYear}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;