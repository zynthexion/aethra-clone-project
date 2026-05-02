import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

const reasons = [
  "End-to-end creative & marketing management",
  "Performance-driven marketing approach",
  "Affordable packages for growing businesses",
  "Fast execution & professional communication",
  "Kerala market understanding + modern trends",
  "AI-powered smart content systems",
];

const industries = ["Restaurants & Cafes", "Retail Shops", "Real Estate", "Healthcare", "Education", "Fashion Brands", "Film & Entertainment", "Startups & Personal Brands"];

function AboutPage() {
  return (
    <div className="pt-32">
      <section className="px-6 py-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <Reveal>
              <p className="text-neon font-geo text-[16px] font-bold tracking-[0.3em] mb-6 uppercase">The Studio</p>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9]">
                Building brands with <span className="text-neon">Dignity</span>, clarity and impact.
              </h2>
              <p className="mt-8 text-xl text-muted-foreground font-light leading-relaxed font-geo">
                DIGnity is a modern creative studio based in Kerala, engineered to scale brands through a fusion of high-end cinematic production and strategic digital marketing.
              </p>
              
              <div className="mt-12 space-y-4">
                {reasons.slice(0, 3).map((r, i) => (
                  <div key={r} className="flex items-center gap-4 group">
                    <span className="text-neon font-display font-black text-xl opacity-20 group-hover:opacity-100 transition-opacity">0{i+1}</span>
                    <p className="text-sm tracking-wide">{r}</p>
                  </div>
                ))}
              </div>
            </Reveal>
            
            <Reveal delay={200} className="w-full max-w-lg mx-auto">
              <div className="relative group/orbit">
                <div className="aspect-square glass-card rounded-full flex items-center justify-center p-6 md:p-20 text-center relative z-10 border-neon/10 backdrop-blur-3xl">
                   <div className="relative z-10">
                     <h3 className="text-2xl md:text-4xl font-bold mb-4 md:mb-8 tracking-tighter leading-tight">Industries we <br className="md:hidden" /><span className="flowing-gradient">Lead.</span></h3>
                     <div className="flex flex-wrap justify-center gap-2 md:gap-3 max-w-xs md:max-w-md mx-auto">
                       {industries.map((ind, idx) => (
                         <span 
                           key={ind} 
                           className="px-2 py-1 md:px-4 md:py-2 bg-neon/5 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-[0.15em] md:tracking-[0.2em] border border-border/40 hover:border-neon/50 transition-colors"
                           style={{ animationDelay: `${400 + idx * 80}ms`, animationFillMode: "both" }}
                         >
                           {ind}
                         </span>
                       ))}
                     </div>
                    </div>
                   <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,var(--neon)_0%,transparent_70%)] opacity-0 group-hover/orbit:opacity-10 transition-opacity duration-1000" />
                </div>
                
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-neon/5 rounded-full animate-expand-orbit pointer-events-none" style={{ animationDelay: "200ms" }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-neon/5 rounded-full animate-expand-orbit pointer-events-none" style={{ animationDelay: "400ms" }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] h-[160%] border border-neon/5 rounded-full animate-expand-orbit pointer-events-none" style={{ animationDelay: "600ms" }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[125%] h-[125%] border-t border-neon/20 rounded-full animate-spin-slow pointer-events-none" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
