export function EducationSection() {
  const education = [
    {
      title: 'Certificado oficial de tratamientos estéticos de nivel III',
      year: '2018',
    },
    {
      title: 'Diplomatura de maquillaje y peluquería',
      institution: 'Instituto del Cine de Madrid',
      year: '2023-2025',
    },
    {
      title: 'Especialización en caracterización y FX',
      institution: 'Instituto del Cine de Madrid',
      year: '2025-2026',
    }
  ];

  return (
    <section id="estudios" className="container mx-auto px-4 py-20">
      <h2 className="text-5xl mb-12 text-center font-elegant font-bold">
        Estudios
      </h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {education.map((edu, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-[0_0_20px_rgba(255,255,255,0.5)] hover:shadow-[0_0_30px_rgba(255,255,255,0.7)] transition-shadow border border-[#d199cc]"
          >
            <h3 className="text-xl mb-2">
              {edu.title}
            </h3>
            {edu.institution && (
              <p className="text-sm opacity-70 mb-1">
                {edu.institution}
              </p>
            )}
            <p className="text-sm opacity-70 mb-4">
              {edu.year}
            </p>
            <p className="text-sm leading-relaxed">
              {edu.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}