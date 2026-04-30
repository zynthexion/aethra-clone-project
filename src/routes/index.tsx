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
      <section id="home" className="px-6 pt-12 pb-24 md:pt-20 md:pb-32 relative overflow-hidden scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="inline-flex items-center gap-3 pill px-5 py-2 mb-10">
              <span className="w-2 h-2 rounded-full bg-neon animate-pulse" />
              <span className="text-neon font-display font-semibold tracking-wider text-sm">DIGNITY</span>
              <span className="text-muted-foreground text-xs tracking-widest">| WHERE CREATIVITY MEETS GROWTH</span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] text-balance max-w-5xl">
              Creative solutions for <br />
              <Typewriter
                className="text-neon"
                words={["Digital growth.", "Bold brands.", "Viral content.", "Real results."]}
              />
            </h1>
          </Reveal>

          <Reveal delay={250}>
            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl text-balance">
              We help brands grow with smart strategy, powerful content, and impactful marketing.
            </p>
          </Reveal>

          <Reveal delay={350}>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#services" className="rounded-full bg-neon text-primary-foreground px-7 py-3 font-medium glow-neon hover:opacity-90 transition">
                See our services
              </a>
              <a href="#contact" className="rounded-full border border-border px-7 py-3 font-medium hover:border-neon hover:text-neon transition">
                Start a project
              </a>
            </div>
          </Reveal>

          <Reveal delay={500}>
            <div className="mt-20 flex flex-wrap gap-3">
              {features.map((f) => (
                <span key={f} className="rounded-full bg-card border border-border/60 px-4 py-2 text-xs md:text-sm text-muted-foreground">
                  {f}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="px-6 py-24 border-t border-border/40 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <p className="text-neon text-sm font-semibold tracking-widest mb-4">SERVICES</p>
            <h2 className="text-4xl md:text-6xl font-bold leading-[0.95] max-w-4xl">
              Everything your brand needs to <span className="text-neon">grow.</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
              From strategy to storytelling — we handle the full spectrum of digital and creative work so you can focus on running your business.
            </p>
          </Reveal>

          <div className="mt-16 space-y-6">
            {services.map((s, i) => (
              <Reveal key={s.n} delay={i * 100}>
                <div className="rounded-3xl border border-border/60 bg-card p-8 md:p-12 grid md:grid-cols-3 gap-8 hover:border-neon/40 transition">
                  <div>
                    <div className="text-neon font-display text-sm mb-6">{s.n}</div>
                    <h3 className="text-3xl md:text-4xl font-bold">{s.title}</h3>
                    <p className="mt-3 text-muted-foreground">{s.desc}</p>
                  </div>
                  <ul className="md:col-span-2 grid sm:grid-cols-2 gap-3 content-start">
                    {s.items.map((it) => (
                      <li key={it} className="flex items-start gap-3 text-sm">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-neon shrink-0" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="px-6 py-24 border-t border-border/40 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <p className="text-neon text-sm font-semibold tracking-widest mb-4">INTRODUCTORY PACKAGES</p>
            <h2 className="text-4xl md:text-6xl font-bold leading-[0.95] max-w-4xl">
              Affordable plans. <span className="text-neon">Real growth.</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
              Pick a starting point. We'll tailor the deliverables to your business.
            </p>
          </Reveal>

          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {plans.map((p, i) => (
              <Reveal key={p.name} delay={i * 120}>
                <div className={`rounded-3xl p-8 border h-full ${p.featured ? "bg-card border-neon glow-neon" : "bg-card border-border/60"}`}>
                  {p.featured && <span className="inline-block bg-neon text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full mb-4">MOST POPULAR</span>}
                  <h3 className="text-2xl font-bold">{p.name}</h3>
                  <p className="text-muted-foreground text-sm mt-2 min-h-[40px]">{p.desc}</p>
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-4xl font-bold">₹{p.price}</span>
                    <span className="text-muted-foreground text-sm">/ month</span>
                  </div>
                  <ul className="mt-6 space-y-3 text-sm">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neon shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="#contact" className={`mt-8 block text-center rounded-full px-6 py-3 font-medium transition ${p.featured ? "bg-neon text-primary-foreground" : "border border-border hover:border-neon hover:text-neon"}`}>
                    Get started
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-6 py-24 border-t border-border/40 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <p className="text-neon text-sm font-semibold tracking-widest mb-4">ABOUT</p>
            <h2 className="text-4xl md:text-6xl font-bold leading-[0.95] max-w-5xl">
              We build brands with <span className="text-neon">dignity</span>, clarity and impact.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
              DIGnity is a modern digital marketing and creative media company based in Kerala — combining marketing intelligence with cinematic creative execution.
            </p>
          </Reveal>

          <div className="mt-16">
            <Reveal>
              <h3 className="text-3xl md:text-4xl font-bold mb-8">Why choose <span className="text-neon">DIGnity?</span></h3>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-4">
              {reasons.map((r, i) => (
                <Reveal key={r} delay={i * 70}>
                  <div className="rounded-2xl border border-border/60 bg-card p-6 flex items-start gap-4 h-full">
                    <span className="text-neon font-display font-bold w-8 shrink-0">0{i + 1}</span>
                    <span>{r}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <Reveal>
              <h3 className="text-3xl md:text-4xl font-bold mb-8">Industries we serve</h3>
            </Reveal>
            <Reveal delay={100}>
              <div className="flex flex-wrap gap-3">
                {industries.map((i) => (
                  <span key={i} className="rounded-full border border-border/60 bg-card px-5 py-2.5 text-sm hover:border-neon hover:text-neon transition cursor-default">
                    {i}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-24 border-t border-border/40 scroll-mt-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <Reveal>
            <p className="text-neon text-sm font-semibold tracking-widest mb-4">CONTACT</p>
            <h2 className="text-4xl md:text-6xl font-bold leading-[0.95]">
              Let's build your brand with <span className="text-neon">DIGnity.</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Tell us about your project and we'll get back within 24 hours.
            </p>

            <div className="mt-12 space-y-6">
              <div>
                <p className="text-xs text-muted-foreground tracking-widest mb-1">ADDRESS</p>
                <p className="text-lg">362, NH Bypass Potta, Mukundapuram,<br />Thrissur – 680722, Kerala</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground tracking-widest mb-1">PHONE</p>
                <a href="tel:9048191613" className="text-lg hover:text-neon transition">+91 90481 91613</a>
              </div>
              <div>
                <p className="text-xs text-muted-foreground tracking-widest mb-1">WHATSAPP</p>
                <a href="https://wa.me/919048191613" className="text-lg hover:text-neon transition">Chat on WhatsApp →</a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <form
              className="rounded-3xl border border-border/60 bg-card p-8 md:p-10 space-y-5"
              onSubmit={(e) => { e.preventDefault(); alert("Thanks! We'll be in touch."); }}
            >
              <div>
                <label className="text-xs text-muted-foreground tracking-widest">NAME</label>
                <input required type="text" className="mt-2 w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-neon transition" placeholder="Your name" />
              </div>
              <div>
                <label className="text-xs text-muted-foreground tracking-widest">EMAIL</label>
                <input required type="email" className="mt-2 w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-neon transition" placeholder="you@brand.com" />
              </div>
              <div>
                <label className="text-xs text-muted-foreground tracking-widest">PHONE</label>
                <input type="tel" className="mt-2 w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-neon transition" placeholder="+91" />
              </div>
              <div>
                <label className="text-xs text-muted-foreground tracking-widest">MESSAGE</label>
                <textarea required rows={4} className="mt-2 w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-neon transition" placeholder="Tell us about your project" />
              </div>
              <button type="submit" className="w-full rounded-full bg-neon text-primary-foreground px-6 py-3 font-medium glow-neon hover:opacity-90 transition">
                Send message
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
