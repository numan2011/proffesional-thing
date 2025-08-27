import React from 'react';
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  const projects = [
    {
      title: "AI-Powered Online Stethoscope",
      description: "Revolutionary medical AI using the same award-winning technology as Dual Bayesian ResNet from Physionet Challenge 2022. Detects heart murmurs with clinical-grade accuracy through advanced deep learning algorithms.",
      technologies: ["Python", "TensorFlow", "Dual Bayesian ResNet", "Medical AI", "Signal Processing"],
      icon: "stethoscope" as const,
      isLarge: true,
      award: "Award-Winning AI",
      githubUrl: "https://github.com/numan2011/stethicope-private-project-type-shi",
      demoUrl: undefined
    },
    {
      title: "SparxMaths AutoCompleter",
      description: "Intelligent automation tool that streamlines mathematical problem-solving workflows. Features smart recognition algorithms and seamless integration.",
      technologies: ["JavaScript", "Automation", "Web APIs", "Chrome Extension"],
      icon: "sparx" as const,
      isLarge: undefined,
      award: undefined,
      githubUrl: undefined,
      demoUrl: undefined
    },
    {
      title: "Reading Plus AutoCompleter",
      description: "Advanced reading comprehension assistant that enhances learning efficiency through intelligent text analysis and automated completion.",
      technologies: ["JavaScript", "NLP", "Automation", "Educational Tech"],
      icon: "reading" as const,
      isLarge: undefined,
      award: undefined,
      githubUrl: undefined,
      demoUrl: undefined
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-background to-accent/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 stagger-children">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of innovative solutions combining AI, automation, and cutting-edge technology
          </p>
        </div>
        
        <div className="bento-grid stagger-children">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              icon={project.icon}
              isLarge={project.isLarge}
              award={project.award}
              githubUrl={project.githubUrl}
              demoUrl={project.demoUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;