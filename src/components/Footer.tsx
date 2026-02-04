import { Mail, Instagram, Phone, MapPin } from 'lucide-react';
import { Music2 } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 border-t border-white/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl text-center mb-8 font-elegant">
            Contacto
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <a
              href="mailto:silviajval@hotmail.com"
              className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-[0_0_15px_rgba(255,255,255,0.5)] hover:shadow-[0_0_25px_rgba(255,255,255,0.7)] transition-shadow border border-[#d199cc]"
            >
              <Mail size={26} className="text-[#d199cc]" />
              <span>silviajval@hotmail.com</span>
            </a>
            
            <a
              href="tel:+34638722539"
              className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-[0_0_15px_rgba(255,255,255,0.5)] hover:shadow-[0_0_25px_rgba(255,255,255,0.7)] transition-shadow border border-[#d199cc]"
            >
              <Phone size={26} className="text-[#d199cc]" />
              <span>+34 638 722 539</span>
            </a>
            
            <a
              href="https://instagram.com/junquerart_fx"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-[0_0_15px_rgba(255,255,255,0.5)] hover:shadow-[0_0_25px_rgba(255,255,255,0.7)] transition-shadow border border-[#d199cc]"
            >
              <Instagram size={26} className="text-[#d199cc]" />
              <span>@junquerart_fx</span>
            </a>
            
            <a
              href="https://tiktok.com/@junquerart_fx"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-[0_0_15px_rgba(255,255,255,0.5)] hover:shadow-[0_0_25px_rgba(255,255,255,0.7)] transition-shadow border border-[#d199cc]"
            >
              <Music2 size={26} className="text-[#d199cc]" />
              <span>@junquerart_fx</span>
            </a>
          </div>
          
          <div className="flex items-start gap-4 bg-white rounded-lg p-4 shadow-[0_0_15px_rgba(255,255,255,0.5)] max-w-md mx-auto mb-8 border border-[#d199cc]">
            <MapPin size={26} className="text-[#d199cc] flex-shrink-0 mt-1" />
            <div>
              <p className= "text-center">Calle de Sondica, 1</p>
              <p className= "text-center">28044 Madrid, España</p>
            </div>
          </div>
          
          <p className="text-center opacity-70">
            © 2026 Silvia Junquera Valverde - Maquilladora y Peluquera Profesional
          </p>
        </div>
      </div>
    </footer>
  );
}
