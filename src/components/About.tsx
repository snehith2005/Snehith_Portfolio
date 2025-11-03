import { Card } from '@/components/ui/card';
import { Code, Palette, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable code with modern best practices"
    },
    {
      icon: Palette,
      title: "Design Focus",
      description: "Creating beautiful, intuitive user interfaces that delight users"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed and exceptional user experience"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate developer with hands on experience building web applications 
            that solve real-world problems and create meaningful user experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I specialize in React, javaScript, and Node.js, with a keen eye for design 
              and user experience. My journey in tech started with a curiosity about how 
              things work, and it's grown into a passion for creating digital solutions 
              that make a difference.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing 
              to open source projects, or mentoring aspiring developers. I believe in 
              continuous learning and staying ahead of the curve in this ever-evolving field.
            </p>
          </div>

          <div className="grid gap-6">
            {highlights.map((item, index) => (
              <Card 
                key={index} 
                className="p-6 bg-card border-border hover:shadow-card transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-primary rounded-lg">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;