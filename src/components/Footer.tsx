import React from 'react';
import { Instagram, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="px-6 py-12 border-t border-white/5 relative z-10 bg-background/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left: Branding */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div 
            style={{ fontFamily: "'Dedicool', sans-serif", WebkitTextStroke: "1.5px currentColor" }} 
            className="font-bold text-3xl md:text-5xl tracking-wider animate-color-cycle"
          >
            <span className="animate-pulse-dig">DIG</span><span>nity</span>
          </div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium text-center md:text-left">Where creativity meets growth</p>
        </div>

        {/* Middle: Social Icons */}
        <div className="flex items-center gap-6">
          {/* WhatsApp */}
          <a 
            href="https://wa.me/919048191613?text=Hi%20DIGnity,%20I'm%20interested%20in%20your%20services!" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center hover:border-neon hover:text-neon transition-all duration-300 group shadow-neon/0 hover:shadow-neon/20"
            title="WhatsApp"
          >
            <svg 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              className="w-5 h-5"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .015 5.398.01 12.038c0 2.123.554 4.197 1.606 6.06L0 24l6.108-1.603a11.82 11.82 0 005.94 1.597h.005c6.637 0 12.036-5.398 12.041-12.038a11.83 11.83 0 00-3.517-8.529" />
            </svg>
          </a>

          {/* Instagram - Inactive */}
          <div 
            className="w-12 h-12 rounded-full glass border border-white/5 flex items-center justify-center text-muted-foreground/40 cursor-not-allowed"
            title="Instagram (Coming Soon)"
          >
            <Instagram className="w-5 h-5" />
          </div>

          {/* Facebook - Inactive */}
          <div 
            className="w-12 h-12 rounded-full glass border border-white/5 flex items-center justify-center text-muted-foreground/40 cursor-not-allowed"
            title="Facebook (Coming Soon)"
          >
            <Facebook className="w-5 h-5" />
          </div>
        </div>

        {/* Right: Info & Copyright */}
        <div className="flex flex-col items-center md:items-end gap-2 text-muted-foreground">
          <p className="text-xs uppercase tracking-widest font-bold text-foreground">Thrissur, Kerala</p>
          <a href="tel:9048191613" className="text-sm font-medium hover:text-neon transition-colors tracking-widest">+91 90481 91613</a>
          <p className="text-[10px] opacity-40 mt-4">© {new Date().getFullYear()} DIGnity Creative Solutions.</p>
        </div>
      </div>
    </footer>
  );
};
