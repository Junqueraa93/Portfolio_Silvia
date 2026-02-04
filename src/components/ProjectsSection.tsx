import { useState } from 'react';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { ImageWithFallback } from './figma/ImageWithFallback';

export interface Project {
  id: number;
  title: string;
  date: string;
  shortDescription: string;
  fullDescription: string;
  duration: string;
  mainImage: string;
  images: string[];
}

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Caracterización Fantasía',
      date: 'Enero 2025',
      shortDescription: 'Proyecto de caracterización de criatura fantástica para cortometraje de género.',
      fullDescription: 'Desarrollo completo de caracterización de criatura fantástica incluyendo diseño de prótesis faciales, aplicación de efectos especiales y maquillaje de degradado. El proyecto requirió un trabajo detallado de posticería y la coordinación con el departamento de arte para mantener la coherencia visual del personaje.',
      duration: '3 semanas de preparación + 5 días de rodaje',
      mainImage: 'https://images.unsplash.com/photo-1766878695518-d92624a70af6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFyYWN0ZXIlMjBtYWtldXAlMjBmYW50YXN5fGVufDF8fHx8MTc3MDIwNzYwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      images: [
        'https://images.unsplash.com/photo-1766878695518-d92624a70af6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFyYWN0ZXIlMjBtYWtldXAlMjBmYW50YXN5fGVufDF8fHx8MTc3MDIwNzYwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        'https://images.unsplash.com/photo-1761589825963-0235617ce06e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWtldXAlMjBhcnRpc3QlMjBzcGVjaWFsJTIwZWZmZWN0c3xlbnwxfHx8fDE3NzAyMDc2MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        'https://images.unsplash.com/photo-1540360146783-1c3eb9be57e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9zdGhldGljJTIwbWFrZXVwJTIwc3BlY2lhbCUyMGVmZmVjdHN8ZW58MXx8fHwxNzcwMjA3NjA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
      ]
    },
    {
      id: 2,
      title: 'Maquillaje de Época',
      date: 'Diciembre 2024',
      shortDescription: 'Recreación de look años 40 para producción de época.',
      fullDescription: 'Investigación y recreación de estilos de maquillaje y peinado de los años 40. El proyecto incluyó estudio de documentación fotográfica de la época, creación de pruebas de maquillaje, y adaptación de técnicas modernas para lograr el aspecto auténtico requerido por la dirección artística. Se trabajó con un elenco de 8 actores principales.',
      duration: '2 semanas de investigación + 2 semanas de rodaje',
      mainImage: 'https://images.unsplash.com/photo-1629238135877-dae437cf0fdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkYWwlMjBtYWtldXAlMjBoYWlyJTIwc3R5bGluZ3xlbnwxfHx8fDE3NzAyMDc2MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      images: [
        'https://images.unsplash.com/photo-1629238135877-dae437cf0fdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkYWwlMjBtYWtldXAlMjBoYWlyJTIwc3R5bGluZ3xlbnwxfHx8fDE3NzAyMDc2MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        'https://images.unsplash.com/photo-1761589825963-0235617ce06e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwbWFrZXVwJTIwYmVoaW5kJTIwc2NlbmVzfGVufDF8fHx8MTc3MDIwNzYwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
      ]
    },
    {
      id: 3,
      title: 'Efectos Especiales - Heridas',
      date: 'Noviembre 2024',
      shortDescription: 'Creación de heridas realistas y efectos de sangre para escena de acción.',
      fullDescription: 'Diseño y aplicación de efectos especiales de heridas, cortes y sangrado para secuencia de acción. El trabajo incluyó la fabricación de prótesis de silicona, aplicación de maquillaje de efectos especiales en continuidad durante varios días de rodaje, y coordinación con el equipo de efectos visuales para asegurar la integración de efectos prácticos y digitales.',
      duration: '1 semana de preparación + 4 días de rodaje',
      mainImage: 'https://images.unsplash.com/photo-1540360146783-1c3eb9be57e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9zdGhldGljJTIwbWFrZXVwJTIwc3BlY2lhbCUyMGVmZmVjdHN8ZW58MXx8fHwxNzcwMjA3NjA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      images: [
        'https://images.unsplash.com/photo-1540360146783-1c3eb9be57e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9zdGhldGljJTIwbWFrZXVwJTIwc3BlY2lhbCUyMGVmZmVjdHN8ZW58MXx8fHwxNzcwMjA3NjA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        'https://images.unsplash.com/photo-1761589825963-0235617ce06e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWtldXAlMjBhcnRpc3QlMjBzcGVjaWFsJTIwZWZmZWN0c3xlbnwxfHx8fDE3NzAyMDc2MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
      ]
    },
    {
      id: 4,
      title: 'Envejecimiento Progresivo',
      date: 'Octubre 2024',
      shortDescription: 'Caracterización de envejecimiento de 30 años para drama familiar.',
      fullDescription: 'Desarrollo de caracterización progresiva mostrando el envejecimiento del personaje principal a lo largo de tres décadas. El proyecto requirió la creación de múltiples looks que mantuvieran la identidad del personaje mientras mostraban el paso del tiempo de manera creíble. Se utilizaron técnicas de maquillaje correctivo, aplicación de prótesis sutiles y diseño de peinado adaptado a cada época.',
      duration: '3 semanas de diseño y pruebas + 10 días de rodaje',
      mainImage: 'https://images.unsplash.com/photo-1761589825963-0235617ce06e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwbWFrZXVwJTIwYmVoaW5kJTIwc2NlbmVzfGVufDF8fHx8MTc3MDIwNzYwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      images: [
        'https://images.unsplash.com/photo-1761589825963-0235617ce06e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwbWFrZXVwJTIwYmVoaW5kJTIwc2NlbmVzfGVufDF8fHx8MTc3MDIwNzYwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        'https://images.unsplash.com/photo-1540360146783-1c3eb9be57e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9zdGhldGljJTIwbWFrZXVwJTIwc3BlY2lhbCUyMGVmZmVjdHN8ZW58MXx8fHwxNzcwMjA3NjA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
      ]
    },
    {
      id: 5,
      title: 'Maquillaje de Moda Editorial',
      date: 'Septiembre 2024',
      shortDescription: 'Colaboración en sesión fotográfica de moda con looks vanguardistas.',
      fullDescription: 'Creación de looks de maquillaje artístico y avant-garde para sesión editorial. El proyecto exploró técnicas de maquillaje creativo, uso de pigmentos especiales, y diseño de conceptos visuales innovadores en colaboración con el fotógrafo y diseñador de vestuario. Se realizaron 5 looks diferentes con enfoques conceptuales distintos.',
      duration: '1 semana de conceptualización + 2 días de shooting',
      mainImage: 'https://images.unsplash.com/photo-1701163802894-99fa45f1c83e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYWtldXAlMjBhcnRpc3QlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MDIwNzYwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      images: [
        'https://images.unsplash.com/photo-1701163802894-99fa45f1c83e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYWtldXAlMjBhcnRpc3QlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MDIwNzYwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        'https://images.unsplash.com/photo-1766878695518-d92624a70af6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFyYWN0ZXIlMjBtYWtldXAlMjBmYW50YXN5fGVufDF8fHx8MTc3MDIwNzYwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
      ]
    },
    {
      id: 6,
      title: 'Posticería - Peluca de Época',
      date: 'Agosto 2024',
      shortDescription: 'Diseño y aplicación de peluca ventilada para personaje histórico.',
      fullDescription: 'Proyecto de posticería completa incluyendo el diseño, ventilado manual y aplicación de peluca de época para personaje histórico del siglo XVIII. El trabajo incluyó investigación histórica detallada, selección de materiales apropiados, ventilado de la peluca mechón por mechón, y aplicación y peinado adaptado al estilo de la época. Se realizaron múltiples pruebas hasta lograr el resultado deseado por el director.',
      duration: '4 semanas de fabricación + 1 semana de rodaje',
      mainImage: 'https://images.unsplash.com/photo-1629238135877-dae437cf0fdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkYWwlMjBtYWtldXAlMjBoYWlyJTIwc3R5bGluZ3xlbnwxfHx8fDE3NzAyMDc2MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      images: [
        'https://images.unsplash.com/photo-1629238135877-dae437cf0fdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkYWwlMjBtYWtldXAlMjBoYWlyJTIwc3R5bGluZ3xlbnwxfHx8fDE3NzAyMDc2MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        'https://images.unsplash.com/photo-1761589825963-0235617ce06e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWtldXAlMjBhcnRpc3QlMjBzcGVjaWFsJTIwZWZmZWN0c3xlbnwxfHx8fDE3NzAyMDc2MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
      ]
    },
    {
      id: 7,
      title: 'Posticería - Peluca de Época',
      date: 'Agosto 2024',
      shortDescription: 'Diseño y aplicación de peluca ventilada para personaje histórico.',
      fullDescription: 'Proyecto de posticería completa incluyendo el diseño, ventilado manual y aplicación de peluca de época para personaje histórico del siglo XVIII. El trabajo incluyó investigación histórica detallada, selección de materiales apropiados, ventilado de la peluca mechón por mechón, y aplicación y peinado adaptado al estilo de la época. Se realizaron múltiples pruebas hasta lograr el resultado deseado por el director.',
      duration: '4 semanas de fabricación + 1 semana de rodaje',
      mainImage: 'https://images.unsplash.com/photo-1629238135877-dae437cf0fdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkYWwlMjBtYWtldXAlMjBoYWlyJTIwc3R5bGluZ3xlbnwxfHx8fDE3NzAyMDc2MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      images: [
        'https://images.unsplash.com/photo-1629238135877-dae437cf0fdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkYWwlMjBtYWtldXAlMjBoYWlyJTIwc3R5bGluZ3xlbnwxfHx8fDE3NzAyMDc2MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        'https://images.unsplash.com/photo-1761589825963-0235617ce06e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWtldXAlMjBhcnRpc3QlMjBzcGVjaWFsJTIwZWZmZWN0c3xlbnwxfHx8fDE3NzAyMDc2MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
      ]
    },
    // {
    //   id: 8,
    //   title: 'Posticería - Peluca de Época',
    //   date: 'Agosto 2024',
    //   shortDescription: 'Diseño y aplicación de peluca ventilada para personaje histórico.',
    //   fullDescription: 'Proyecto de posticería completa incluyendo el diseño, ventilado manual y aplicación de peluca de época para personaje histórico del siglo XVIII. El trabajo incluyó investigación histórica detallada, selección de materiales apropiados, ventilado de la peluca mechón por mechón, y aplicación y peinado adaptado al estilo de la época. Se realizaron múltiples pruebas hasta lograr el resultado deseado por el director.',
    //   duration: '4 semanas de fabricación + 1 semana de rodaje',
    //   mainImage: 'https://images.unsplash.com/photo-1629238135877-dae437cf0fdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkYWwlMjBtYWtldXAlMjBoYWlyJTIwc3R5bGluZ3xlbnwxfHx8fDE3NzAyMDc2MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    //   images: [
    //     'https://images.unsplash.com/photo-1629238135877-dae437cf0fdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkYWwlMjBtYWtldXAlMjBoYWlyJTIwc3R5bGluZ3xlbnwxfHx8fDE3NzAyMDc2MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    //     'https://images.unsplash.com/photo-1761589825963-0235617ce06e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWtldXAlMjBhcnRpc3QlMjBzcGVjaWFsJTIwZWZmZWN0c3xlbnwxfHx8fDE3NzAyMDc2MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    //   ]
    // }
  ];

  return (
    <>
      <section id="proyectos" className="container mx-auto px-4 py-20">
        <h2 className="text-5xl mb-12 text-center font-elegant font-bold">
          Proyectos
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </section>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}