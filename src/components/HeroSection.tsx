import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeroSection() {
  return (
    <section id="inicio" className="container mx-auto px-4 py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div>
            <p className="text-3xl md:text-4xl mb-2">
              Hola, soy
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-elegant font-bold bg-gradient-to-r from-[#b84fa1] to-[#d199cc] bg-clip-text text-transparent">
              Silvia Junquera Valverde
            </h1>
          </div>
          <p className="text-lg leading-relaxed text-black">
            Maquilladora y peluquera profesional con más de 3 años de experiencia en la industria audiovisual y del espectáculo. Mi especialización en caracterización, efectos especiales y posticería me permite crear personajes complejos y realistas, siempre adaptándome a las necesidades narrativas y artísticas de cada proyecto.
            <br /><br />
            Mi formación me permite transformar ideas y conceptos creativos en resultados reales. He tenido la oportunidad de trabajar en distintos ámbitos, como cine, televisión, teatro musical y eventos especiales, siempre cuidando cada detalle y poniendo pasión en cada proyecto para ofrecer un trabajo de calidad.            <br /><br />
            Mi enfoque se centra en la colaboración con cada uno de los departamentos para garantizar que cada look contribuya significativamente a la historia y al desarrollo de personajes, respetando siempre los plazos de producción y las exigencias del medio audiovisual.
          </p>
        </div>
        
        <div className="flex justify-center">
          <div className="relative">
            <img
              src="/images/Foto_perfil.jpeg"
              alt="Silvia Junquera"
              className="rounded-2xl shadow-[0_0_30px_rgba(255,255,255,0.6)] w-full max-w-md border border-[#d199cc]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
