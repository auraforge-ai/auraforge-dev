import React from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onShowcaseClick: (slug: string) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onShowcaseClick }) => (
  <div className={`group relative overflow-hidden rounded-lg bg-brand-surface border border-white/10 transition-shadow duration-300 ${project.isLive ? 'animate-card-glow' : 'hover:shadow-xl hover:shadow-brand-secondary/10'}`}>
    <img src={project.imageUrl} alt={project.title} className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
    <div className="absolute bottom-0 left-0 p-6 w-full">
      <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
      <p className="text-brand-text-muted mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-h-0 group-hover:max-h-40 overflow-hidden">{project.description}</p>
      {project.isLive ? (
        project.slug ? (
          <button
            onClick={() => onShowcaseClick(project.slug!)}
            className="inline-block px-4 py-2 text-sm bg-brand-primary text-white font-semibold rounded-md shadow-md shadow-brand-primary/30 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 hover:bg-brand-secondary hover:scale-105"
          >
            View Showcase
          </button>
        ) : (
          <a 
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 text-sm bg-brand-primary text-white font-semibold rounded-md shadow-md shadow-brand-primary/30 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 hover:bg-brand-secondary hover:scale-105"
          >
            View Project
          </a>
        )
      ) : project.projectUrl && project.projectUrl !== '#' ? (
        <a 
          href={project.projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 text-sm bg-brand-secondary text-white font-semibold rounded-md shadow-md shadow-brand-secondary/30 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 hover:bg-brand-primary hover:scale-105"
        >
          View Landing Page
        </a>
      ) : (
        <button disabled className="inline-block px-4 py-2 text-sm bg-gray-700 text-brand-text-muted font-semibold rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 cursor-not-allowed">
          In Development
        </button>
      )}
    </div>
  </div>
);


interface PortfolioProps {
  onShowcaseClick: (slug: string) => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ onShowcaseClick }) => {
  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-brand-surface">
      <div className="container mx-auto px-6">
        <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Forged Creations</h2>
            <div className="w-24 h-1 bg-brand-primary mx-auto mb-16"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} project={project} onShowcaseClick={onShowcaseClick} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;