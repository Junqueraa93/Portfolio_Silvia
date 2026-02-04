export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-[0_0_20px_rgba(255,255,255,0.5)] backdrop-blur-sm bg-opacity-95">
      <nav className="container mx-auto px-4 py-4">
        <ul className="flex justify-center gap-8 flex-wrap">
          <li>
            <button
              onClick={() => scrollToSection('inicio')}
              className="hover:opacity-70 transition-opacity px-1 py-2"
            >
              Inicio
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('estudios')}
              className="hover:opacity-70 transition-opacity px-1 py-2"
            >
              Estudios
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('proyectos')}
              className="hover:opacity-70 transition-opacity px-1 py-2"
            >
              Proyectos
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('experiencia')}
              className="hover:opacity-70 transition-opacity px-1 py-2"
            >
              Experiencia
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
