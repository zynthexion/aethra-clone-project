import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { useRef } from "react";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
});

const services = [
  {
    n: "01",
    title: "Digital Marketing",
    desc: "Performance-driven campaigns engineered for growth.",
    items: ["Social Media Management", "Meta & Google Ads", "Lead Generation Campaigns", "Search Engine Optimization (SEO)", "WhatsApp & Local Promotions", "Monthly Growth Strategy"],
  },
  {
    n: "02",
    title: "Creative Production",
    desc: "Cinematic content that makes brands unforgettable.",
    items: ["Commercial Video Production", "Product Photography", "UGC & Influencer Style Ads", "High-End Video Editing", "Drone & Event Coverage", "Social Media Content Creation"],
  },
  {
    n: "03",
    title: "Branding Solutions",
    desc: "Identity systems that look as good as they perform.",
    items: ["Logo & Visual Identity", "Brand Strategy & Tone", "UI/UX Website Design", "Packaging & Print Design", "Social Media Branding", "Full Rebranding Service"],
  },
];

function ServicesPage() {
  const navigate = useNavigate();
  const servicesRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!servicesRef.current) return;
    const cards = servicesRef.current.getElementsByClassName("spotlight-card");
    for (const card of cards) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      (card as HTMLElement).style.setProperty("--mouse-x", `${x}px`);
      (card as HTMLElement).style.setProperty("--mouse-y", `${y}px`);
    }
  };

  return (
    <div className="pt-24">
      <section 
        className="px-6 py-12 relative overflow-hidden"
        onMouseMove={handleMouseMove}
        ref={servicesRef}
      >
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <p className="text-neon font-geo text-[16px] font-bold tracking-[0.3em] mb-4 uppercase">Capabilities</p>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9]">
                High-impact <span className="flowing-gradient">Solutions.</span>
              </h2>
              <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-lg font-light leading-relaxed font-geo">
                We combine cinematic production with data-driven strategy to build brands that don't just exist—they dominate.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <Reveal key={s.n} delay={i * 150} y={40}>
                <div className="spotlight-card rounded-[2rem] p-10 h-full flex flex-col group min-h-[450px]">
                  <span className="huge-number">{s.n}</span>
                  
                  <div className="relative z-10 flex flex-col flex-grow">
                    <div className="w-12 h-12 rounded-2xl bg-neon/10 border border-neon/20 flex items-center justify-center mb-8 group-hover:bg-neon group-hover:text-primary-foreground transition-all duration-500 shadow-neon/0 group-hover:shadow-neon">
                      <span className="font-display font-black text-xl">{s.n}</span>
                    </div>
                    
                    <h3 className="text-3xl font-bold tracking-tight mb-4 group-hover:text-neon transition-colors duration-500">{s.title}</h3>
                    <p className="text-muted-foreground font-light leading-relaxed mb-8 max-h-40 overflow-hidden transition-all duration-500 group-hover:max-h-0 group-hover:opacity-0 group-hover:mb-0">{s.desc}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {s.items.map(item => (
                        <span key={item} className="px-3 py-1.5 rounded-full glass text-[11px] font-bold uppercase tracking-widest border border-border/40 group-hover:border-neon/30 transition-colors">
                          {item}
                        </span>
                      ))}
                    </div>
                    <div className="mt-auto opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                      <button 
                        onClick={() => navigate({ to: "/contact" })}
                        className="inline-flex btn-keyboard text-[12px] px-8 py-2 text-neon"
                      >
                        Get started
                      </button>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
