import { ImageWithFallback } from './figma/ImageWithFallback';
import { useEffect, useState } from 'react';

export function HeroSection() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'Silvia Junquera Valverde';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="inicio" className="container mx-auto px-4 py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-elegant">
            {displayedText}
            <span className="animate-pulse">|</span>
          </h1>
          <p className="text-lg leading-relaxed">
            Soy maquilladora y peluquera profesional con más de 3 años de experiencia en la industria audiovisual y del espectáculo. Mi especialización en caracterización, efectos especiales y posticería me permite crear personajes complejos y realistas, siempre adaptándome a las necesidades narrativas y artísticas de cada proyecto.
            <br /><br />
            Mi formación me permite transformar ideas y conceptos creativos en resultados reales. He tenido la oportunidad de trabajar en distintos ámbitos, como cine, televisión, teatro musical y eventos especiales, siempre cuidando cada detalle y poniendo pasión en cada proyecto para ofrecer un trabajo de calidad.            <br /><br />
            Mi enfoque se centra en la colaboración con cada uno de los departamentos para garantizar que cada look contribuya significativamente a la historia y al desarrollo de personajes, respetando siempre los plazos de producción y las exigencias del medio audiovisual.
          </p>
        </div>
        
        <div className="flex justify-center">
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1701163802894-99fa45f1c83e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYWtldXAlMjBhcnRpc3QlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MDIwNzYwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Silvia Junquera"
              className="rounded-2xl shadow-[0_0_30px_rgba(255,255,255,0.6)] w-full max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}