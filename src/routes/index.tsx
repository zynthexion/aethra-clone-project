import { createFileRoute } from "@tanstack/react-router";
import { Typewriter } from "@/components/Typewriter";
import { Reveal } from "@/components/Reveal";
import { useRef } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DIGnity — Creative Solutions. Digital Growth." },
      { name: "description", content: "We help brands grow with smart strategy, powerful content, and impactful marketing — from Kerala to the world." },
    ],
  }),
  component: Index,
});

const features = ["Creative Experts", "Growth Driven", "Result Oriented", "Reliable Partner", "AI-Powered"];

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

const reasons = [
  "End-to-end creative & marketing management",
  "Performance-driven marketing approach",
  "Affordable packages for growing businesses",
  "Fast execution & professional communication",
  "Kerala market understanding + modern trends",
  "AI-powered smart content systems",
];

const industries = ["Restaurants & Cafes", "Retail Shops", "Real Estate", "Healthcare", "Education", "Fashion Brands", "Film & Entertainment", "Startups & Personal Brands"];

const plans = [
  { name: "Starter Growth", price: "15,000", desc: "Social media handling + basic creatives.", features: ["Social media management", "Basic creatives", "Monthly reporting", "WhatsApp support"], featured: false },
  { name: "Business Growth", price: "25,000", desc: "Content creation + ads + strategy.", features: ["Everything in Starter", "Content creation", "Meta & Google Ads", "Growth strategy", "Lead campaigns"], featured: true },
  { name: "Premium Growth", price: "40,000", desc: "Full marketing management + branding.", features: ["Everything in Business", "Full marketing management", "Cinematic production", "Brand identity refresh", "Priority support"], featured: false },
];

function Index() {
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
    <>
      {/* Hero */}
      <section id="home" className="px-6 pt-12 pb-32 md:pt-20 md:pb-48 relative overflow-hidden scroll-mt-24">
        <div className="max-w-7xl mx-auto relative z-10">
          <Reveal>
            <div className="inline-flex items-center gap-3 pill px-6 py-2.5 mb-12">
              <span className="w-2 h-2 rounded-full bg-neon animate-pulse shadow-neon" />
              <span className="text-neon font-display font-bold tracking-[0.2em] text-[10px] uppercase">DIGnity Agency</span>
              <span className="text-muted-foreground text-[10px] tracking-widest uppercase">| Kerala's Premier Creative Studio</span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.85] text-balance max-w-5xl tracking-tighter">
              Creative <br />
              <span className="flowing-gradient">Solutions</span> for <br />
              <Typewriter
                className="opacity-80"
                words={["Digital growth.", "Bold brands.", "Viral content.", "Real results."]}
              />
            </h1>
          </Reveal>

          <Reveal delay={250}>
            <p className="mt-12 text-xl md:text-2xl text-muted-foreground max-w-2xl text-balance font-light leading-relaxed">
              We engineer high-performance brand identities and cinematic content that scales businesses from Kerala to the global stage.
            </p>
          </Reveal>

          <Reveal delay={350}>
            <div className="mt-12 flex flex-wrap gap-6">
              <a href="#services" className="rounded-full bg-neon text-primary-foreground px-10 py-4 font-bold uppercase tracking-widest text-xs glow-neon hover:scale-105 transition-transform active:scale-95">
                Explore Services
              </a>
              <a href="#contact" className="rounded-full border border-border/60 glass px-10 py-4 font-bold uppercase tracking-widest text-xs hover:border-neon hover:text-neon transition-all">
                Start a Project
              </a>
            </div>
          </Reveal>
        </div>
        
        {/* Abstract background elements */}
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-neon/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-neon/5 rounded-full blur-[100px] pointer-events-none" />
      </section>

      {/* Services - Redesigned Spotlight Grid */}
      <section 
        id="services" 
        className="px-6 py-32 scroll-mt-24 relative overflow-hidden"
        onMouseMove={handleMouseMove}
        ref={servicesRef}
      >
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-24">
              <p className="text-neon text-[10px] font-bold tracking-[0.3em] mb-4 uppercase">Capabilities</p>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9]">
                High-impact <span className="flowing-gradient">Solutions.</span>
              </h2>
              <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-lg font-light leading-relaxed">
                We combine cinematic production with data-driven strategy to build brands that don't just exist—they dominate.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <Reveal key={s.n} delay={i * 150} y={40}>
                <div className="spotlight-card rounded-[2rem] p-10 h-full flex flex-col group min-h-[450px]">
                  <span className="huge-number">{s.n}</span>
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-neon/10 border border-neon/20 flex items-center justify-center mb-8 group-hover:bg-neon group-hover:text-primary-foreground transition-all duration-500 shadow-neon/0 group-hover:shadow-neon">
                      <span className="font-display font-black text-xl">{s.n}</span>
                    </div>
                    
                    <h3 className="text-3xl font-bold tracking-tight mb-4 group-hover:text-neon transition-colors duration-500">{s.title}</h3>
                    <p className="text-muted-foreground font-light leading-relaxed mb-8">{s.desc}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {s.items.map(item => (
                        <span key={item} className="px-3 py-1.5 rounded-full glass text-[9px] font-bold uppercase tracking-widest border border-border/40 group-hover:border-neon/30 transition-colors">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-auto pt-10 relative z-10">
                    <a href="#contact" className="inline-flex items-center gap-2 text-neon text-[10px] font-bold uppercase tracking-widest group/link">
                      Learn More 
                      <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="px-6 py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <Reveal>
            <div className="text-center mb-20">
              <p className="text-neon text-[10px] font-bold tracking-[0.3em] mb-4 uppercase">Investment Plans</p>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">Affordable packages. <br /><span className="text-neon">Global standards.</span></h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((p, i) => (
              <Reveal key={p.name} delay={200 + i * 200} y={60}>
                <div className={`glass-card p-10 h-full flex flex-col group ${p.featured ? "border-neon/40 bg-neon/[0.03] scale-105 shadow-neon/10" : ""}`}>
                  {p.featured && <span className="text-[10px] font-bold text-neon tracking-[0.2em] mb-6 uppercase animate-pulse">Recommended Choice</span>}
                  <h3 className="text-3xl font-bold tracking-tight group-hover:text-neon transition-colors">{p.name}</h3>
                  <p className="text-muted-foreground text-sm mt-4 font-light leading-relaxed">{p.desc}</p>
                  <div className="mt-8 flex items-baseline gap-2">
                    <span className="text-5xl font-bold tracking-tighter transition-transform group-hover:scale-110 origin-left duration-500">₹{p.price}</span>
                    <span className="text-muted-foreground text-xs uppercase tracking-widest font-medium">/ month</span>
                  </div>
                  <div className="h-px w-full bg-border/40 my-8 group-hover:bg-neon/40 transition-colors" />
                  <ul className="space-y-4 flex-grow">
                    {p.features.map((f, idx) => (
                      <li key={f} className="flex items-center gap-3 text-sm font-light transition-transform" style={{ transitionDelay: `${idx * 50}ms` }}>
                        <div className="w-1 h-1 rounded-full bg-neon shadow-neon" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a href="#contact" className={`mt-10 block text-center rounded-full py-4 text-xs font-bold uppercase tracking-widest transition-all ${p.featured ? "bg-neon text-primary-foreground glow-neon" : "glass hover:border-neon hover:text-neon"}`}>
                    Get Started
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-neon/5 blur-[120px] rounded-full pointer-events-none opacity-30" />
      </section>

      {/* About */}
      <section id="about" className="px-6 py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <Reveal>
              <p className="text-neon text-[10px] font-bold tracking-[0.3em] mb-6 uppercase">The Studio</p>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9]">
                Building brands with <span className="text-neon">Dignity</span>, clarity and impact.
              </h2>
              <p className="mt-8 text-xl text-muted-foreground font-light leading-relaxed">
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
            
            <Reveal delay={200} className="w-full">
              <div className="relative group/orbit">
                <div className="aspect-square glass-card rounded-full flex items-center justify-center p-8 md:p-20 text-center relative z-10 border-neon/10 backdrop-blur-3xl">
                   <div className="relative z-10">
                     <h3 className="text-3xl md:text-4xl font-bold mb-8 tracking-tighter">Industries we <span className="flowing-gradient">Lead.</span></h3>
                     <div className="flex flex-wrap justify-center gap-3 max-w-md mx-auto">
                       {industries.map((ind, idx) => (
                         <span 
                           key={ind} 
                           className="px-4 py-2 bg-neon/5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] border border-border/40 animate-in fade-in zoom-in duration-1000 hover:border-neon/50 transition-colors"
                           style={{ animationDelay: `${400 + idx * 80}ms`, animationFillMode: "both" }}
                         >
                           {ind}
                         </span>
                       ))}
                     </div>
                   </div>
                   {/* Inner glow pulse */}
                   <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,var(--neon)_0%,transparent_70%)] opacity-0 group-hover/orbit:opacity-10 transition-opacity duration-1000" />
                </div>
                
                {/* Expanding Decorative orbits */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-neon/5 rounded-full animate-expand-orbit pointer-events-none" style={{ animationDelay: "200ms" }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-neon/5 rounded-full animate-expand-orbit pointer-events-none" style={{ animationDelay: "400ms" }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] h-[160%] border border-neon/5 rounded-full animate-expand-orbit pointer-events-none" style={{ animationDelay: "600ms" }} />
                
                {/* Slow spinning orbit element */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[125%] h-[125%] border-t border-neon/20 rounded-full animate-spin-slow pointer-events-none" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-32 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20">
            <Reveal>
              <p className="text-neon text-[10px] font-bold tracking-[0.3em] mb-6 uppercase">Get in Touch</p>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9]">
                Let's create something <span className="text-neon">legendary.</span>
              </h2>
              <p className="mt-8 text-xl text-muted-foreground font-light mb-12">
                Drop us a line and let's start the conversation about your brand's future.
              </p>

              <div className="space-y-8">
                <div>
                  <p className="text-[10px] text-muted-foreground tracking-widest mb-2 uppercase font-bold">Location</p>
                  <p className="text-lg font-light tracking-wide">362, NH Bypass Potta, Mukundapuram,<br />Thrissur – 680722, Kerala</p>
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground tracking-widest mb-2 uppercase font-bold">Contact</p>
                  <a href="tel:9048191613" className="text-3xl font-bold hover:text-neon transition-colors tracking-tighter">+91 90481 91613</a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <form
                className="glass-card p-10 space-y-6"
                onSubmit={(e) => { e.preventDefault(); alert("Thanks! We'll be in touch."); }}
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[10px] text-muted-foreground tracking-[0.2em] uppercase font-bold">Name</label>
                    <input required type="text" className="mt-3 w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-neon focus:bg-white/[0.08] transition-all font-light" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="text-[10px] text-muted-foreground tracking-[0.2em] uppercase font-bold">Email</label>
                    <input required type="email" className="mt-3 w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-neon focus:bg-white/[0.08] transition-all font-light" placeholder="john@agency.com" />
                  </div>
                </div>
                <div>
                  <label className="text-[10px] text-muted-foreground tracking-[0.2em] uppercase font-bold">Message</label>
                  <textarea required rows={4} className="mt-3 w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-neon focus:bg-white/[0.08] transition-all font-light resize-none" placeholder="Tell us about your vision..." />
                </div>
                <button type="submit" className="w-full rounded-full bg-neon text-primary-foreground py-5 text-xs font-black uppercase tracking-[0.3em] glow-neon hover:scale-[1.02] active:scale-[0.98] transition-all">
                  Send Inquiry
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
