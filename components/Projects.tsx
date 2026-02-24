import React from "react";

export interface ProjectType {
  title: string;
  details: string;
  stack: string;
}

interface ProjectsProps {
  projects: ProjectType[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section className="max-w-4xl mx-auto py-20 px-6 border-t border-white/10 relative z-20">
      <h2 className="text-3xl font-crimson mb-12 text-left bg-clip-text text-transparent bg-gradient-to-r from-slate-100 to-slate-400 tracking-tight relative leading-normal py-2 before:absolute before:content-['Projects'] before:inset-0 before:text-slate-100 before:blur-[30px] before:-z-10 before:opacity-60">
        Projects
      </h2>
      <div className="space-y-4">
        {projects.map((project) => (
          <div
            key={project.title}
            className="flex flex-col gap-2 border-b border-white/10 pb-4 pt-4 font-crimson last:border-b-0 pl-3 md:pl-4"
          >
            <div className="flex flex-wrap items-baseline gap-3">
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <span className="text-sm text-slate-400">{project.stack}</span>
            </div>
            <p className="text-slate-200">{project.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
