import { ImageWithFallback } from './figma/ImageWithFallback';

export function RecommendationSection() {
  return (
    <section className="container mx-auto px-4 py-20">
      <h2 className="text-5xl mb-12 text-center font-elegant font-bold">
        Carta de Recomendación
      </h2>
      
      <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-[0_0_30px_rgba(255,255,255,0.6)] border border-[#d199cc]">
        <div className="space-y-6">
          <p className="text-center text-gray-800 mb-6">
            Carta de recomendación de Pepe Quetglas
          </p>
          <img src="/images/carta_recomendacion.png" alt="Carta de recomendacion" />
        </div>
      </div>
    </section>
  );
}