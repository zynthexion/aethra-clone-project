import { createFileRoute, Link } from "@tanstack/react-router";
import heroCamera from "@/assets/hero-camera.jpg";
import growth from "@/assets/growth.jpg";
import { Typewriter } from "@/components/Typewriter";

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

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 pt-12 pb-24 md:pt-20 md:pb-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-3 pill px-5 py-2 mb-10">
            <span className="w-2 h-2 rounded-full bg-neon animate-pulse" />
            <span className="text-neon font-display font-semibold tracking-wider text-sm">DIGNITY</span>
            <span className="text-muted-foreground text-xs tracking-widest">| WHERE CREATIVITY MEETS GROWTH</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] text-balance max-w-5xl">
            Creative solutions for <br />
            <Typewriter
              className="text-neon"
              words={["Digital growth.", "Bold brands.", "Viral content.", "Real results."]}
            />
          </h1>

          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl text-balance">
            We help brands grow with smart strategy, powerful content, and impactful marketing.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/services" className="rounded-full bg-neon text-primary-foreground px-7 py-3 font-medium glow-neon hover:opacity-90 transition">
              See our services
            </Link>
            <Link to="/contact" className="rounded-full border border-border px-7 py-3 font-medium hover:border-neon hover:text-neon transition">
              Start a project
            </Link>
          </div>

          <div className="mt-20 flex flex-wrap gap-3">
            {features.map((f) => (
              <span key={f} className="rounded-full bg-card border border-border/60 px-4 py-2 text-xs md:text-sm text-muted-foreground">
                {f}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* About strip */}
      <section className="px-6 py-20 border-t border-border/40">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-neon text-sm font-semibold tracking-widest mb-4">ABOUT US</p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Premium branding with <span className="text-neon">dignity</span>, clarity & impact.
            </h2>
            <p className="mt-6 text-muted-foreground text-lg">
              DIGnity is a modern digital marketing and creative media company based in Kerala. We combine marketing intelligence with creative execution to build strong brand presence and real business results.
            </p>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-neon font-medium hover:gap-3 transition-all">
              Learn more →
            </Link>
          </div>
          <div className="relative rounded-3xl overflow-hidden border border-border/60 aspect-[4/3]">
            <img src={heroCamera} alt="Cinematic camera production setup" className="w-full h-full object-cover" loading="lazy" width={1536} height={1024} />
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="px-6 py-20 border-t border-border/40">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
            <div>
              <p className="text-neon text-sm font-semibold tracking-widest mb-4">WHAT WE DO</p>
              <h2 className="text-4xl md:text-5xl font-bold">Our core services</h2>
            </div>
            <Link to="/services" className="text-muted-foreground hover:text-neon transition">All services →</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { n: "01", t: "Digital Marketing", d: "Social media, Meta & Google Ads, SEO, lead generation and monthly growth strategy." },
              { n: "02", t: "Creative Production", d: "Ad films, product shoots, corporate videos, reels and brand story videos." },
              { n: "03", t: "Branding Solutions", d: "Logo design, brand identity, posters, packaging and business profiles." },
            ].map((s) => (
              <div key={s.n} className="group rounded-3xl border border-border/60 bg-card p-8 hover:border-neon/60 transition">
                <div className="text-neon font-display text-sm mb-8">{s.n}</div>
                <h3 className="text-2xl font-semibold mb-3">{s.t}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth CTA */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto rounded-3xl border border-border/60 bg-card overflow-hidden grid md:grid-cols-2">
          <div className="p-10 md:p-14">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Your brand deserves more than ordinary.
              <span className="text-neon"> It deserves DIGnity.</span>
            </h2>
            <p className="mt-6 text-muted-foreground">Affordable packages. Measurable results. Real growth.</p>
            <Link to="/pricing" className="mt-8 inline-flex rounded-full bg-neon text-primary-foreground px-7 py-3 font-medium glow-neon">
              View packages
            </Link>
          </div>
          <div className="relative min-h-[300px]">
            <img src={growth} alt="Neon growth chart" className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={1024} height={1024} />
          </div>
        </div>
      </section>
    </>
  );
}
