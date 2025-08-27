import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Code, Heart, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative prism-background overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-accent/5 to-background" />
      
      {/* Prism geometric background */}
      <div className="absolute inset-0">
        {/* Large prism shapes */}
        <div className="prism-shape w-96 h-96 rotate-45 top-10 left-10 rounded-3xl" />
        <div className="prism-shape w-64 h-80 rotate-12 bottom-20 right-16 rounded-2xl" />
        <div className="prism-shape w-48 h-64 -rotate-12 top-1/3 right-1/4 rounded-xl" />
        <div className="prism-shape w-72 h-48 rotate-45 bottom-1/3 left-1/3 rounded-2xl" />
        
        {/* Medium prism shapes */}
        <div className="prism-shape w-32 h-40 rotate-24 top-1/2 left-16 rounded-lg" />
        <div className="prism-shape w-40 h-32 -rotate-24 bottom-1/4 right-1/3 rounded-lg" />
        <div className="prism-shape w-24 h-36 rotate-12 top-20 right-20 rounded-md" />
        
        {/* Small accent shapes */}
        <div className="prism-shape w-16 h-24 -rotate-45 bottom-16 left-1/4 rounded" />
        <div className="prism-shape w-20 h-16 rotate-60 top-1/4 left-1/2 rounded" />
        
        {/* Floating blur elements for depth */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl floating-animation" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-3xl floating-animation" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-primary/5 rounded-full blur-2xl floating-animation" style={{ animationDelay: '4s' }} />
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="stagger-children">
          <Badge variant="secondary" className="mb-6 animate-pulse">
            <Zap className="h-3 w-3 mr-1" />
            Portfolio 2024
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Hi, I'm{" "}
            <span className="gradient-text">Numan Shah</span>
            <br />
            Building the Future with AI & Code
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            From educational automation to award-winning medical AI, 
            I create innovative solutions that make a real impact.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="group hover:shadow-xl transition-all duration-300 bg-card/40 backdrop-blur-lg border border-border/20"
              onClick={scrollToProjects}
            >
              <Code className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform" />
              View My Work
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="group bg-card/20 backdrop-blur-lg border border-border/20"
              onClick={() => navigate("/contact")}
            >
              <Heart className="h-5 w-5 mr-2 group-hover:text-red-500 transition-colors" />
              Get In Touch
            </Button>
          </div>
          
          <div className="flex justify-center animate-bounce">
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full floating-animation opacity-60" style={{ animationDelay: '0s' }} />
      <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-accent rounded-full floating-animation opacity-40" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-primary rounded-full floating-animation opacity-80" style={{ animationDelay: '4s' }} />
    </section>
  );
};

export default Hero;