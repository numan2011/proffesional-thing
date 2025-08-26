import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Award, Sparkles, Brain, Stethoscope } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  icon: "sparx" | "reading" | "stethoscope";
  isLarge?: boolean;
  award?: string;
}

const ProjectCard = ({ title, description, technologies, icon, isLarge = false, award }: ProjectCardProps) => {
  const getIcon = () => {
    switch (icon) {
      case "sparx":
        return <Sparkles className="h-8 w-8 text-primary" />;
      case "reading":
        return <Brain className="h-8 w-8 text-primary" />;
      case "stethoscope":
        return <Stethoscope className="h-8 w-8 text-primary" />;
    }
  };

  return (
    <Card className={`bento-item group ${isLarge ? "md:col-span-2 lg:col-span-2" : ""} relative overflow-hidden bg-card/40 backdrop-blur-lg border border-border/20`}>
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="floating-animation">
            {getIcon()}
          </div>
          {award && (
            <Badge variant="secondary" className="flex items-center gap-1">
              <Award className="h-3 w-3" />
              {award}
            </Badge>
          )}
        </div>
        
        <h3 className="text-xl font-bold mb-3 gradient-text">{title}</h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
        
        <div className="flex gap-2">
          <Button size="sm" variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
            <Github className="h-4 w-4 mr-2" />
            Code
          </Button>
          <Button size="sm" className="group-hover:shadow-lg transition-all duration-300">
            <ExternalLink className="h-4 w-4 mr-2" />
            Demo
          </Button>
        </div>
      </div>
      
      {/* Gradient overlay effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </Card>
  );
};

export default ProjectCard;