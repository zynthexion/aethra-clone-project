import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import appCss from "../styles.css?url";
import LiquidEther from "@/components/LiquidEther";
import { Logo } from "@/components/Logo";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-neon">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">The page you're looking for doesn't exist.</p>
        <Link to="/" className="mt-6 inline-flex items-center justify-center rounded-full bg-neon px-6 py-2 text-sm font-medium text-primary-foreground">Go home</Link>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "DIGnity — Where Creativity Meets Growth" },
      { name: "description", content: "DIGnity is a Kerala-based digital marketing & creative media company. Strategy, content, ads, and cinematic storytelling that grow brands." },
      { property: "og:title", content: "DIGnity — Where Creativity Meets Growth" },
      { property: "og:description", content: "Premium digital marketing, branding & creative production from Kerala." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600&family=Catamaran:wght@900&family=Lexend+Deca:wght@400;700&family=Poppins:wght@400;600;700&family=Pixelify+Sans:wght@400;700&family=Quantico:wght@400;700&family=Geo&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark snap-y snap-mandatory">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, MessageSquare, Instagram, Facebook } from "lucide-react";
import { Drawer } from "vaul";

function Header() {
  const [isPromptOpen, setIsPromptOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleOpenMenu = () => setIsMenuOpen(true);
    const handleOpenPrompt = () => setIsPromptOpen(true);
    window.addEventListener('open-mobile-menu', handleOpenMenu);
    window.addEventListener('open-contact-prompt', handleOpenPrompt);

    // Global swipe to menu at bottom
    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };
    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndY = e.changedTouches[0].clientY;
      const deltaY = touchStartY - touchEndY;
      
      // Check if user is at bottom of page
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;
      
      if (deltaY > 100 && isAtBottom && window.innerWidth < 768) {
        setIsMenuOpen(true);
      }
    };

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('open-mobile-menu', handleOpenMenu);
      window.removeEventListener('open-contact-prompt', handleOpenPrompt);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <header 
      style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 100 }}
      className="px-4 py-3 md:px-6 md:py-4 glass-solid neon-border neon-flow bg-background shadow-lg"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex flex-col group">
          <Logo size="sm" className="md:hidden group-hover:scale-105 transition-transform" />
          <Logo size="md" className="hidden md:block group-hover:scale-105 transition-transform" />
          <span className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium mt-1">Where creativity meets growth</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10 text-sm font-medium tracking-widest text-muted-foreground uppercase">
          <a href="#home" className="hover:text-neon transition-colors">Home</a>
          <a href="#services" className="hover:text-neon transition-colors">Services</a>
          <a href="#pricing" className="hover:text-neon transition-colors">Pricing</a>
        </div>

        <div className="flex items-center gap-4">
          {/* Call Prompt Button (Mobile Only) */}
          <button 
            onClick={() => setIsPromptOpen(true)}
            className="md:hidden w-10 h-10 rounded-full glass border border-neon/20 flex items-center justify-center text-neon hover:bg-neon hover:text-primary-foreground transition-all duration-300 shadow-neon/0 hover:shadow-neon/40"
          >
            <Phone size={18} />
          </button>

          {/* Desktop Contact Button */}
          <a 
            href="#contact" 
            className="hidden md:flex btn-keyboard px-8 py-2.5 text-[10px] tracking-[0.2em] uppercase font-bold text-neon"
          >
            Contact
          </a>


          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-white"
            >
              <Menu size={20} />
            </button>

            {/* Full Screen Overlay Menu */}
            {isMenuOpen && (
              <div className="fixed inset-0 z-[500] bg-black/60 backdrop-blur-3xl flex flex-col items-center justify-center p-8 animate-in fade-in zoom-in duration-300">
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="absolute top-8 right-8 w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center text-white"
                >
                  <X size={24} />
                </button>

                <nav className="flex flex-col gap-10 text-center">
                  <Link 
                    to="/" 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-5xl font-bold tracking-tighter hover:text-neon transition-colors"
                  >
                    HOME
                  </Link>
                  <Link 
                    to="/services" 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-5xl font-bold tracking-tighter hover:text-neon transition-colors"
                  >
                    SERVICES
                  </Link>
                  <Link 
                    to="/pricing" 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-5xl font-bold tracking-tighter hover:text-neon transition-colors"
                  >
                    PRICING
                  </Link>
                  <Link 
                    to="/about" 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-5xl font-bold tracking-tighter hover:text-neon transition-colors"
                  >
                    ABOUT
                  </Link>
                  <Link 
                    to="/contact" 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-5xl font-bold tracking-tighter hover:text-neon transition-colors"
                  >
                    CONTACT
                  </Link>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Action Prompt (Dialog) */}
      {isPromptOpen && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={() => setIsPromptOpen(false)} />
          <div className="relative glass-card p-8 w-full max-w-sm border-neon/30 animate-in zoom-in-95 duration-200">
            <h3 className="text-2xl font-bold tracking-tight mb-8 text-center">Contact <span className="text-neon">DIGnity</span></h3>
            
            <div className="grid gap-4">
              <a 
                href="https://wa.me/919048191613?text=Hi%20DIGnity,%20I'm%20interested%20in%20your%20services!"
                className="flex items-center gap-4 p-5 glass border border-white/10 rounded-2xl hover:border-neon hover:bg-neon/10 transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-[#25D366]/20 flex items-center justify-center text-[#25D366]">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <p className="font-bold">WhatsApp</p>
                  <p className="text-xs text-muted-foreground">Instant messaging</p>
                </div>
              </a>

              <a 
                href="tel:9048191613"
                className="flex items-center gap-4 p-5 glass border border-white/10 rounded-2xl hover:border-neon hover:bg-neon/10 transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-neon/20 flex items-center justify-center text-neon">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="font-bold">Phone Call</p>
                  <p className="text-xs text-muted-foreground">+91 90481 91613</p>
                </div>
              </a>

              <Link 
                to="/contact"
                onClick={() => setIsPromptOpen(false)}
                className="flex items-center gap-4 p-5 glass border border-white/10 rounded-2xl hover:border-neon hover:bg-neon/10 transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="font-bold">Email</p>
                  <p className="text-xs text-muted-foreground">Go to contact page</p>
                </div>
              </Link>
            </div>

            <button 
              onClick={() => setIsPromptOpen(false)}
              className="mt-8 w-full py-4 text-[10px] uppercase tracking-widest font-bold text-muted-foreground hover:text-white"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </header>
  );
}


function RootComponent() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-background bg-hero pt-20 relative">
        <div className="fixed inset-0 z-[5] pointer-events-none opacity-40">
          <LiquidEther 
            colors={[ '#a3ff00', '#d4ff70', '#1a4d00' ]}
            mouseForce={25}
            cursorSize={120}
            autoDemo={true}
          />
        </div>
        <main>
          <Outlet />
        </main>

      </div>
    </>
  );
}
