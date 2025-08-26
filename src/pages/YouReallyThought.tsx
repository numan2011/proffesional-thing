import { Button } from "@/components/ui/button";
import { ArrowLeft, Smile } from "lucide-react";
import { useNavigate } from "react-router-dom";

const YouReallyThought = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-primary/5 to-background relative">
      <Button 
        variant="ghost" 
        className="absolute top-8 left-8 group hover:bg-card/60 backdrop-blur-xl border border-border/30 transition-all duration-300 hover:scale-105"
        onClick={() => navigate("/")}
      >
        <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
        Back to Home
      </Button>
      
      <div className="text-center p-12 rounded-3xl bg-card/60 backdrop-blur-xl border border-border/30 shadow-2xl max-w-lg mx-8 hover:shadow-3xl transition-all duration-500 hover:scale-105">
        <div className="mb-6 flex justify-center">
          <Smile className="h-16 w-16 text-primary animate-bounce" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 gradient-text">
          You really thought
        </h1>
        <p className="text-muted-foreground text-lg">
          Nice try, but these are my private projects! 😏
        </p>
      </div>
    </div>
  );
};

export default YouReallyThought;