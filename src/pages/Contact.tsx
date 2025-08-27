import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-accent/10 to-background relative">
      <Button 
        variant="ghost" 
        className="absolute top-8 left-8 group hover:bg-card/40 backdrop-blur-lg border border-border/20"
        onClick={() => navigate("/")}
      >
        <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
        Back to Home
      </Button>
      
      <div className="text-center p-8 rounded-2xl bg-card/40 backdrop-blur-lg border border-border/20 shadow-2xl">
        <p className="text-2xl md:text-3xl text-foreground font-medium">
          man im tired - numanshah19990@gmail.com
        </p>
      </div>
    </div>
  );
};

export default Contact;