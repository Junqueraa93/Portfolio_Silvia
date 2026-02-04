import { useEffect } from 'react';
import { X } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import type { Project } from './ProjectsSection';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div
      className="fixed inset-0 bg-[#f5ebf1]/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-[0_0_40px_rgba(209,153,204,0.8)] border border-[#d199cc] modal-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center">
          <h2 className="text-2xl">
            {project.title}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Cerrar"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.images.map((image, index) => (
              <div key={index} className="aspect-[4/3] overflow-hidden rounded-lg">
                <ImageWithFallback
                  src={image}
                  alt={`${project.title} - Imagen ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg mb-2">
                Fecha
              </h3>
              <p>{project.date}</p>
            </div>
            
            <div>
              <h3 className="text-lg mb-2">
                Duración del proyecto
              </h3>
              <p>{project.duration}</p>
            </div>
            
            <div>
              <h3 className="text-lg mb-2">
                Descripción
              </h3>
              <p className="leading-relaxed">
                {project.fullDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}