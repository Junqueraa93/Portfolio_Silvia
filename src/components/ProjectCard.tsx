import { ImageWithFallback } from './figma/ImageWithFallback';
import type { Project } from './ProjectsSection';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-xl overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.5)] hover:shadow-[0_0_30px_rgba(255,255,255,0.7)] transition-all cursor-pointer hover:scale-105 border border-[#d199cc]"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <ImageWithFallback
          src={project.mainImage}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl mb-2">
          {project.title}
        </h3>
        <p className="text-sm opacity-70 mb-3">
          {project.date}
        </p>
        <p className="text-sm leading-relaxed">
          {project.shortDescription}
        </p>
      </div>
    </div>
  );
}