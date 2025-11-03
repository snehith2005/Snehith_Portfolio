import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';

const Projects = () => {
  const projects = [
    {
      title: "AI_Driven_Virtual_Interviewer",
      description: "A full-stack Application built with React, Node.js, and MongoDB. Features include user authentication,AI Interview practise, Feedback & Score",
      image: project1,
      technologies: ["React", "Node.js", "MongoDB", "NLP"],
      liveUrl: "#",
      githubUrl: "https://github.com/snehith2005/AI_Driven_Virtual_Interviewer"
    },
    {
      title: "Wanderlust",
      description: "a travel planning and exploration platform designed to help users discover new destinations, and connect with fellow travelers, budget estimations, and AI-powered trip recommendations based on user interests and preferences.",
      image: project2,
      technologies: ["React", "TypeScript", "Socket.io", "MongoDB"],
      liveUrl: "https://wanderlust-43js.onrender.com/listings",
      githubUrl: "https://github.com/snehith2005/Wanderlust"
    },
    
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work, demonstrating my skills in full-stack development, 
            UI/UX design, and problem-solving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden bg-card border-border hover:shadow-card transition-all duration-300 hover:scale-105 group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button size="sm" className="bg-gradient-primary hover:shadow-glow transition-all duration-300" onClick={()=>{window.open(project.liveUrl,"_blank")}}>
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button variant="outline" size="sm" className="hover:bg-accent transition-colors" onClick={()=>{window.open(project.githubUrl,"_blank")}}>
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;