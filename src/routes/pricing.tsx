import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/pricing")({
  component: PricingPage,
});

const plans = [
  { name: "Starter Growth", price: "15,000", desc: "Social media handling + basic creatives.", features: ["Social media management", "Basic creatives", "Monthly reporting", "WhatsApp support"], featured: false },
  { name: "Business Growth", price: "25,000", desc: "Content creation + ads + strategy.", features: ["Everything in Starter", "Content creation", "Meta & Google Ads", "Growth strategy", "Lead campaigns"], featured: true },
  { name: "Premium Growth", price: "40,000", desc: "Full marketing management + branding.", features: ["Everything in Business", "Full marketing management", "Cinematic production", "Brand identity refresh", "Priority support"], featured: false },
];

function PricingPage() {
  return (
    <div className="pt-32">
      <section className="px-6 py-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <Reveal>
            <div className="text-center mb-12">
              <p className="text-neon font-geo text-[16px] font-bold tracking-[0.3em] mb-4 uppercase">Investment Plans</p>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">Affordable packages. <br /><span className="text-neon">Global standards.</span></h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((p, i) => (
              <Reveal key={p.name} delay={200 + i * 200} y={60}>
                <div className={`glass-card p-10 h-full flex flex-col group ${p.featured ? "border-neon/40 bg-neon/[0.03] scale-105 shadow-neon/10" : ""}`}>
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
                  <div className="pt-8">
                    <button 
                      onClick={() => {
                        if (window.innerWidth < 768) {
                          window.location.href = "/contact";
                        } else {
                          window.location.hash = "contact";
                        }
                      }}
                      className={`mt-16 btn-keyboard py-4 text-xs w-full ${p.featured ? "text-neon border-neon/50" : ""}`}
                    >
                      Get Started
                    </button>
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
