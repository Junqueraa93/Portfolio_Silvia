import { Briefcase, Film, Heart, Theater, Tv } from 'lucide-react';

export function ExperienceSection() {
  const experiences = [
    {
      icon: Film,
      title: 'Prácticas continuas en rodajes',
      description: 'Durante los 3 años de estudio en el Instituto del Cine de Madrid he estado en continuas prácticas con rodajes colaborativos con la escuela, participando en producciones de diversos géneros y formatos.'
    },
    {
      icon: Heart,
      title: 'Maquillaje y peinado de novias',
      description: 'He realizado trabajos de maquillaje y peinado de novias para bodas, creando looks personalizados y adaptados a las preferencias de cada novia para su día especial.'
    },
    {
      icon: Briefcase,
      title: 'Maquilladora y peluquera para shooting de fotografía',
      description: 'He participado en sesiones fotográficas profesionales, creando looks adaptados a las necesidades editoriales y comerciales de cada proyecto.'
    },
    {
      icon: Film,
      title: 'Cortometrajes con productoras',
      description: 'He participado como maquilladora en varios cortometrajes con diferentes productoras. Trabajando con las productoras "NOMADA FILM ESTUDIOS" con el titulo "EL JUEGO DE LOS FALSOS", "PELICULAS DEL NIETO S.L" con el titulo "EST DEUS IN NOBIS" y "CLAQUETA BLANCA S.L" con el titulo de "TRISTES TIGRES"'
    },
    {
      icon: Film,
      title: 'Colaboracion en Cortometrajes',
      description: 'He colaborado en mas de 6 cortometrajes a lo largo de estos años.'
    },
    {
      icon: Film,
      title: 'Largometrajes',
      description: 'He participado como maquilladora en 1 película. Colaborando con la escuela MADS bajo el titulo de "HATERNET"'
    },
    {
      icon: Theater,
      title: 'Musical "Christmas Dreams"',
      description: 'He participado durante 1 mes y medio como caracterizadora en el musical "Christmas Dreams" en el Teatro Rialto de Madrid con la productora "El negrito producción y distribución de espectáculos S.L"'
    },
    {
      icon: Tv,
      title: 'Televisión - A3Media y TVE',
      description: 'He trabajado como maquilladora en A3Media y TVE, participando en producciones televisivas y adquiriendo experiencia en el ritmo y exigencias del medio televisivo.'
    }
  ];

  return (
    <section id="experiencia" className="container mx-auto px-4 py-20">
      <h2 className="text-5xl mb-12 text-center font-elegant font-bold">
        Experiencia Profesional
      </h2>
      
      <div className="space-y-6 max-w-4xl mx-auto">
        {experiences.map((exp, index) => {
          const Icon = exp.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-[0_0_20px_rgba(255,255,255,0.5)] hover:shadow-[0_0_30px_rgba(255,255,255,0.7)] transition-shadow flex gap-4 border border-[#d199cc]"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-[#d199cc] rounded-lg flex items-center justify-center">
                  <Icon size={24} className="text-white" />
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl mb-2">
                  {exp.title}
                </h3>
                <p className="leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}