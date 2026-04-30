import { createFileRoute } from "@tanstack/react-router";
import { Typewriter } from "@/components/Typewriter";
import { Reveal } from "@/components/Reveal";

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
    items: ["Ad Films", "Product Shoots", "Corporate Videos", "Event Coverage", "Reels & Short Form Content", "Brand Story Videos"],
  },
  {
    n: "03",
    title: "Branding Solutions",
    desc: "Identity systems that look as good as they perform.",
    items: ["Logo Design", "Brand Identity", "Posters & Creatives", "Packaging Design", "Business Profiles", "Brand Guidelines"],
  },
];

const reasons = [
  "Creative team with cinematic quality output",
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
  return (
    <>
      {/* Hero */}
      <section id="home" className="px-6 pt-24 pb-32 md:pt-40 md:pb-48 relative overflow-hidden scroll-mt-24">
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

      {/* Services (Bento Grid) */}
      <section id="services" className="px-6 py-32 scroll-mt-24 relative">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
              <div className="max-w-2xl">
                <p className="text-neon text-[10px] font-bold tracking-[0.3em] mb-4 uppercase">Capabilities</p>
                <h2 className="text-5xl md:text-7xl font-bold leading-[0.9] tracking-tighter">
                  Everything your brand <br />needs to <span className="flowing-gradient">dominate.</span>
                </h2>
              </div>
              <p className="text-muted-foreground max-w-sm text-lg font-light italic">
                "We don't just create; we engineer growth through cinematic storytelling and data-backed strategy."
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
            {/* Service 01 - Large */}
            <div className="md:col-span-8 md:row-span-2 relative group overflow-hidden rounded-3xl">
              <Reveal className="h-full">
                <div className="h-full glass-card p-10 flex flex-col justify-between relative z-10 border-neon/20 bg-neon/[0.02]">
                  <div>
                    <span className="text-neon text-4xl font-display font-black opacity-20">01</span>
                    <h3 className="text-4xl md:text-5xl font-bold mt-4">{services[0].title}</h3>
                    <p className="mt-4 text-muted-foreground text-lg max-w-md leading-relaxed">{services[0].desc}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    {services[0].items.map((it) => (
                      <div key={it} className="flex items-center gap-2 text-xs font-medium tracking-wide text-muted-foreground uppercase group-hover:text-foreground transition-colors">
                        <div className="w-1 h-1 rounded-full bg-neon shadow-neon" />
                        {it}
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Service 02 */}
            <div className="md:col-span-4 md:row-span-1">
              <Reveal className="h-full" delay={100}>
                <div className="h-full glass-card p-8 flex flex-col justify-between">
                  <div>
                    <span className="text-neon text-2xl font-display font-black opacity-20">02</span>
                    <h3 className="text-2xl font-bold mt-2">{services[1].title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">{services[1].desc}</p>
                </div>
              </Reveal>
            </div>

            {/* Service 03 */}
            <div className="md:col-span-4 md:row-span-1">
              <Reveal className="h-full" delay={200}>
                <div className="h-full glass-card p-8 flex flex-col justify-between bg-neon/5 border-neon/30">
                  <div>
                    <span className="text-neon text-2xl font-display font-black opacity-20">03</span>
                    <h3 className="text-2xl font-bold mt-2">{services[2].title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">{services[2].desc}</p>
                </div>
              </Reveal>
            </div>

            {/* Industry Badge Grid */}
            <div className="md:col-span-12 mt-6">
              <Reveal delay={300}>
                <div className="glass p-6 rounded-2xl flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-50 hover:opacity-100 transition-opacity">
                  {industries.slice(0, 5).map(ind => (
                    <span key={ind} className="text-[10px] font-bold uppercase tracking-[0.2em]">{ind}</span>
                  ))}
                </div>
              </Reveal>
            </div>
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
              <Reveal key={p.name} delay={i * 120}>
                <div className={`glass-card p-10 h-full flex flex-col ${p.featured ? "border-neon/40 bg-neon/[0.03] scale-105 shadow-neon/10" : ""}`}>
                  {p.featured && <span className="text-[10px] font-bold text-neon tracking-[0.2em] mb-6 uppercase">Recommended Choice</span>}
                  <h3 className="text-3xl font-bold tracking-tight">{p.name}</h3>
                  <p className="text-muted-foreground text-sm mt-4 font-light leading-relaxed">{p.desc}</p>
                  <div className="mt-8 flex items-baseline gap-2">
                    <span className="text-5xl font-bold tracking-tighter">₹{p.price}</span>
                    <span className="text-muted-foreground text-xs uppercase tracking-widest font-medium">/ month</span>
                  </div>
                  <div className="h-px w-full bg-border/40 my-8" />
                  <ul className="space-y-4 flex-grow">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-sm font-light">
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
            
            <Reveal delay={200}>
              <div className="relative">
                <div className="aspect-square glass-card rounded-full flex items-center justify-center p-20 text-center relative z-10 border-neon/10">
                   <div>
                     <h3 className="text-3xl font-bold mb-4">Industries we <span className="text-neon">Lead</span></h3>
                     <div className="flex flex-wrap justify-center gap-2">
                       {industries.map(ind => (
                         <span key={ind} className="px-3 py-1 bg-neon/5 rounded-full text-[10px] font-bold uppercase tracking-widest border border-border/40">{ind}</span>
                       ))}
                     </div>
                   </div>
                </div>
                {/* Decorative orbit */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-neon/5 rounded-full animate-spin-slow pointer-events-none" />
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
