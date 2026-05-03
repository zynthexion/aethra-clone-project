import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Typewriter } from "@/components/Typewriter";
import { Reveal } from "@/components/Reveal";
import { useRef, useEffect } from "react";
import { Footer } from "@/components/Footer";

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
    <>
      {/* Hero */}
      <section 
        id="home" 
        className="px-6 pt-24 pb-12 md:pt-48 md:pb-32 relative overflow-hidden scroll-mt-20 flex flex-col justify-center md:block min-h-[calc(100vh-80px)] md:min-h-screen snap-start snap-always"
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <Reveal>
            <div className="inline-flex items-center gap-3 pill px-6 py-2.5 mb-12">
              <span className="w-2 h-2 rounded-full bg-neon animate-pulse shadow-neon" />
              <span className="text-neon font-geo font-bold tracking-[0.2em] text-[14px] uppercase">DIGnity</span>
              <span className="text-muted-foreground font-geo text-[14px] tracking-widest uppercase">| All digital solutions</span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.85] tracking-tighter min-h-[3em] md:min-h-0">
              <span className="block -ml-1 md:-ml-2">Creative</span>
              <span className="block mt-1 -ml-1 md:-ml-2"><span className="flowing-gradient">Solutions</span> for</span>
              <span className="block mt-1 opacity-80 tracking-normal text-[1.3em]" style={{ fontFamily: "'MiniPixel7', sans-serif", fontWeight: 'normal' }}>
                <Typewriter
                  words={["Digital growth.", "Bold brands.", "Viral content.", "Real results."]}
                />
              </span>
            </h1>
          </Reveal>

          <Reveal delay={250}>
            <p className="mt-6 text-xl md:text-2xl text-muted-foreground max-w-2xl text-balance font-light leading-relaxed font-geo">
              We engineer high-performance brand identities and cinematic content that scales businesses from Kerala to the global stage.
            </p>
          </Reveal>

          <Reveal delay={350}>
            <div className="mt-12 flex flex-wrap gap-6 justify-center md:justify-start">
              <button 
                onClick={() => navigate({ to: "/services" })}
                className="inline-flex btn-keyboard px-10 py-4 text-neon"
              >
                Explore Services
              </button>
              <button 
                onClick={() => {
                  window.dispatchEvent(new CustomEvent('open-contact-prompt'));
                }}
                className="md:hidden btn-keyboard px-10 py-4 text-neon"
              >
                Talk to us
              </button>
              <button 
                onClick={() => navigate({ to: "/contact" })}
                className="hidden md:inline-flex btn-keyboard px-10 py-4 text-neon"
              >
                Start a Project
              </button>
            </div>
          </Reveal>
        </div>
        
        {/* Abstract background elements */}
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-neon/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-neon/5 rounded-full blur-[100px] pointer-events-none" />
      </section>

    </>
  );
}
