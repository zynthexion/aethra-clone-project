import { createFileRoute, Link } from "@tanstack/react-router";
import kerala from "@/assets/kerala-night.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — DIGnity" },
      { name: "description", content: "DIGnity is Kerala's creative growth-focused digital brand agency, delivering premium results with dignity." },
      { property: "og:title", content: "About DIGnity" },
      { property: "og:description", content: "Kerala's creative growth-focused digital brand agency." },
    ],
  }),
  component: AboutPage,
});

const reasons = [
  "Creative team with cinematic quality output",
  "Performance-driven marketing approach",
  "Affordable packages for growing businesses",
  "Fast execution & professional communication",
  "Kerala market understanding + modern trends",
  "AI-powered smart content systems",
];

const industries = ["Restaurants & Cafes", "Retail Shops", "Real Estate", "Healthcare", "Education", "Fashion Brands", "Film & Entertainment", "Startups & Personal Brands"];

function AboutPage() {
  return (
    <>
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <p className="text-neon text-sm font-semibold tracking-widest mb-4">ABOUT</p>
          <h1 className="text-5xl md:text-7xl font-bold leading-[0.95] max-w-5xl">
            We build brands with <span className="text-neon">dignity</span>, clarity and impact.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            DIGnity is a modern digital marketing and creative media company based in Kerala — combining marketing intelligence with cinematic creative execution.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 border-t border-border/40">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Why choose <span className="text-neon">DIGnity?</span></h2>
          <div className="grid md:grid-cols-2 gap-4">
            {reasons.map((r, i) => (
              <div key={r} className="rounded-2xl border border-border/60 bg-card p-6 flex items-start gap-4">
                <span className="text-neon font-display font-bold w-8 shrink-0">0{i + 1}</span>
                <span>{r}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 border-t border-border/40">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-10">Industries we serve</h2>
          <div className="flex flex-wrap gap-3">
            {industries.map((i) => (
              <span key={i} className="rounded-full border border-border/60 bg-card px-5 py-2.5 text-sm hover:border-neon hover:text-neon transition cursor-default">
                {i}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 border-t border-border/40">
        <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden border border-border/60 relative">
          <img src={kerala} alt="Kerala night skyline" className="w-full h-[400px] object-cover opacity-60" loading="lazy" width={1536} height={1024} />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent flex items-end p-10 md:p-16">
            <div className="max-w-2xl">
              <p className="text-neon text-sm font-semibold tracking-widest mb-4">OUR VISION</p>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                To become Kerala's most creative growth-focused digital brand agency.
              </h2>
              <Link to="/contact" className="mt-8 inline-flex rounded-full bg-neon text-primary-foreground px-7 py-3 font-medium glow-neon">
                Work with us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
