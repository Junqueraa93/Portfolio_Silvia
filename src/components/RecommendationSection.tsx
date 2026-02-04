import { ImageWithFallback } from './figma/ImageWithFallback';

export function RecommendationSection() {
  return (
    <section className="container mx-auto px-4 py-20">
      <h2 className="text-5xl mb-12 text-center font-elegant font-bold">
        Carta de Recomendación
      </h2>
      
      <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 shadow-[0_0_30px_rgba(255,255,255,0.6)] border border-[#d199cc]">
        <div className="space-y-6">
          <p className="text-center text-gray-600 mb-4">
            Carta de recomendación de Pepe Quetglas
          </p>
          
          {/* Contenedor para la imagen de la carta - puedes reemplazar esta imagen */}
          <div className="w-full aspect-[3/4] bg-gray-100 rounded-lg flex items-center justify-center">
            <p className="text-gray-400 text-center px-4">
              Añade aquí la imagen de tu carta de recomendación
              <br />
              <span className="text-sm">(Reemplaza esta sección con tu imagen)</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}