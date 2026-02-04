import { useState } from 'react';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';

export interface Project {
  id: number;
  title: string;
  date: string;
  shortDescription: string;
  fullDescription: string;
  mainImage: string;
  images: string[];
}

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Caracterización',
      date: '2024 - Actualidad',
      shortDescription: 'Proyectos de caracterización',
      fullDescription: 'En este apartado muestro algunos de los proyectos de caracterización que he ido realizando con el tiempo, donde aparecen heridas, hematomas, órganos y otros efectos creados de forma artesanal. Utilizando diferentes tecnicas y materiales, buscando que el resultado sea llamativo y encaje con la idea o la historia que hay detrás. Estos proyectos reflejan mi evolución, las pruebas que he ido haciendo y las ganas de seguir aprendiendo y mejorando, siempre cuidando los detalles y el impacto visual final.',
      mainImage: 'images/Caracterizacion/Caracterizacion_main.jpeg',
      images: [
        'images/Caracterizacion/Caracterizacion_1.jpeg',
        'images/Caracterizacion/Caracterizacion_2.jpeg',
        'images/Caracterizacion/Caracterizacion_3.jpeg',
        'images/Caracterizacion/Caracterizacion_4.jpeg',
        'images/Caracterizacion/Caracterizacion_5.jpeg',
        'images/Caracterizacion/Caracterizacion_6.jpeg',
        'images/Caracterizacion/Caracterizacion_7.jpeg',
        'images/Caracterizacion/Caracterizacion_8.jpeg',
        'images/Caracterizacion/Caracterizacion_9.jpeg',
        'images/Caracterizacion/Caracterizacion_10.jpeg',
        'images/Caracterizacion/Caracterizacion_11.jpeg',
        'images/Caracterizacion/Caracterizacion_12.jpeg',
        'images/Caracterizacion/Caracterizacion_13.jpeg',
        'images/Caracterizacion/Caracterizacion_14.jpeg',
        'images/Caracterizacion/Caracterizacion_15.jpeg',
        'images/Caracterizacion/Caracterizacion_16.jpeg',
      ]
    },
    {
      id: 2,
      title: 'Maquillaje de Época',
      date: '2023 - 2024',
      shortDescription: 'Recreación de look años 20 y 40/50.',
      fullDescription: 'Investigación y recreación de estilos de maquillaje y peinado de los años 20 y años 40. El proyecto incluyó estudio de documentación fotográfica de la época, creación de pruebas de maquillaje, y adaptación de técnicas modernas para lograr el aspecto auténtico requerido por la dirección artística.',
      mainImage: 'images/Epoca/Epoca_main.jpeg',
      images: [
        'images/Epoca/Epoca_1.jpeg',
        'images/Epoca/Epoca_2.jpeg',
        'images/Epoca/Epoca_3.jpeg',
      ]
    },
    {
      id: 3,
      title: 'Envejecimiento',
      date: '2023',
      shortDescription: 'Envejecimiento facial.',
      fullDescription: 'Envejecimiento facial realizado con latex y algodon.',
      mainImage: 'images/Envejecimiento/envejez_2.jpg',
      images: [
        'images/Envejecimiento/Envejez_1.jpeg'
      ]
    },
    {
      id: 4,
      title: 'Fantasia',
      date: '2025 - Actualidad',
      shortDescription: 'Caracterización de envejecimiento de 30 años para drama familiar.',
      fullDescription: 'Desarrollo de una caracterización de fantasía centrada en la creación de un personaje único, explorando diferentes looks y estilos a partir de una misma idea base. El proyecto se enfocó en mantener una identidad visual coherente mientras se experimentaba con colores, formas y elementos irreales. A lo largo del proceso se trabajó la evolución del personaje, cuidando los detalles y la armonía del conjunto para lograr un resultado creativo y visualmente impactante.',
      mainImage: 'images/Fantasia/Fantasia_main.jpeg',
      images: [
        'images/Fantasia/Fantasia_1.jpeg',
        'images/Fantasia/Fantasia_2.jpeg',
        'images/Fantasia/Fantasia_3.jpeg',
        'images/Fantasia/Fantasia_4.jpeg',
        'images/Fantasia/Fantasia_5.jpeg',
      ]
    },
    {
      id: 5,
      title: 'Maquillaje Social',
      date: '2023 - Actualidad',
      shortDescription: 'Creación de maquillajes sociales.',
      fullDescription: 'Desarrollo de maquillajes sociales pensados para realzar los rasgos naturales y adaptarse a diferentes ocasiones. Cada look se diseñó teniendo en cuenta el estilo personal, el tipo de evento y la armonía del conjunto, buscando un resultado favorecedor, elegante y acorde a cada persona.',
      mainImage: 'images/Maquillaje_Social/Social_main.jpg',
      images: [
        'images/Maquillaje_Social/Social_1.jpeg',
        'images/Maquillaje_Social/Social_2.jpeg',
        'images/Maquillaje_Social/Social_3.jpeg',
        'images/Maquillaje_Social/Social_4.jpeg',
        'images/Maquillaje_Social/Social_5.jpeg',
        'images/Maquillaje_Social/Social_6.jpeg',
        'images/Maquillaje_Social/Social_7.jpeg',
      ]
    },
    {
      id: 6,
      title: 'Modelado Protesis',
      date: '2024 - Actualidad',
      shortDescription: 'Desarrollo de prótesis modeladas',
      fullDescription: 'Desarrollo de prótesis modeladas a mano para proyectos de caracterización, trabajando formas, volúmenes y texturas para lograr una integración natural con la piel. Cada pieza forma parte de un proceso creativo enfocado en el detalle y en conseguir un resultado visual creíble y expresivo.',
      mainImage: 'images/Modelado_protesis/Modelado_main.jpeg',
      images: [
        'images/Modelado_protesis/Modelado_1.jpeg',
        'images/Modelado_protesis/Modelado_2.jpeg',
        'images/Modelado_protesis/Modelado_3.jpeg',
        'images/Modelado_protesis/Modelado_4.jpeg',
        'images/Modelado_protesis/Modelado_5.jpeg',
        'images/Modelado_protesis/Modelado_6.jpeg',
        'images/Modelado_protesis/Modelado_7.jpeg',
        'images/Modelado_protesis/Modelado_8.jpeg',
        'images/Modelado_protesis/Modelado_9.jpeg',
      ]
    },
    {
      id: 7,
      title: 'Peluqueria',
      date: '2022 - 2024',
      shortDescription: 'Desarrollo de peinados y recogidos',
      fullDescription: 'Desarrollo de trabajos de peluquería aplicados a caracterización y maquillaje, adaptando peinados y estilos a cada proyecto. Cada look se crea teniendo en cuenta la estética del personaje o la ocasión, cuidando la forma, el volumen y la coherencia.',
      mainImage: 'images/Peluqueria/Peluqueria_main.jpg',
      images: [
        'images/Peluqueria/Peluqueria_1.jpeg',
        'images/Peluqueria/Peluqueria_2.jpeg',
        'images/Peluqueria/Peluqueria_3.jpeg',
        'images/Peluqueria/Peluqueria_4.jpeg',
        'images/Peluqueria/Peluqueria_5.jpeg',
        'images/Peluqueria/Peluqueria_6.jpeg',
        'images/Peluqueria/Peluqueria_7.jpeg',
      ]
    },
    {
      id: 8,
      title: 'Shooting',
      date: '2023',
      shortDescription: 'Desarrollo de maquillajes en shootings',
      fullDescription: 'Desarrollo de maquillajes y peinados para shootings, pensados para cámara y adaptados al concepto visual de cada sesión. Cada trabajo busca potenciar la imagen final, cuidando la luz, el estilo y la coherencia con el equipo creativo y el resultado fotográfico.',
      mainImage: 'images/Shooting/Shooting_2.jpeg',
      images: [
        'images/Shooting/Shooting_1.jpeg',
        'images/Shooting/Shooting_3.jpeg',
        'images/Shooting/Shooting_4.jpeg',
        'images/Shooting/Shooting_5.jpeg',
        'images/Shooting/Shooting_6.jpeg',
        'images/Shooting/Shooting_7.jpeg',
      ]
    },
    {
      id: 9,
      title: 'Teatro',
      date: '2025',
      shortDescription: 'Caracterizacion de personajes en musicales',
      fullDescription: 'Desarrollo de personajes de fantasia para obra musical infantil, utilizando la aplicacion de pelucas, postizos y maquillajes adaptados a cada uno de los personajes.',
      mainImage: 'images/Teatro/teatro_main.jpg',
      images: [
        'images/Teatro/Musical_1.jpeg',
        'images/Teatro/Musical_2.jpeg',
        'images/Teatro/Musical_3.jpeg',
        'images/Teatro/Musical_4.jpeg',
        'images/Teatro/Musical_5.jpeg',
      ]
    }
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