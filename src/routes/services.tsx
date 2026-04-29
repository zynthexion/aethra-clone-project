import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — DIGnity" },
      { name: "description", content: "Digital marketing, creative production and branding services tailored for growing brands in Kerala and beyond." },
      { property: "og:title", content: "Services — DIGnity" },
      { property: "og:description", content: "Digital marketing, creative production and branding services." },
    ],
  }),
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
    items: ["Ad Films", "Product Shoots", "Corporate Videos", "Event Coverage", "Reels & Short Form Content", "Brand Story Videos"],
  },
  {
    n: "03",
    title: "Branding Solutions",
    desc: "Identity systems that look as good as they perform.",
    items: ["Logo Design", "Brand Identity", "Posters & Creatives", "Packaging Design", "Business Profiles", "Brand Guidelines"],
  },
];

function ServicesPage() {
  return (
    <section className="px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <p className="text-neon text-sm font-semibold tracking-widest mb-4">SERVICES</p>
        <h1 className="text-5xl md:text-7xl font-bold leading-[0.95] max-w-4xl">
          Everything your brand needs to <span className="text-neon">grow.</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
          From strategy to storytelling — we handle the full spectrum of digital and creative work so you can focus on running your business.
        </p>

        <div className="mt-16 space-y-6">
          {services.map((s) => (
            <div key={s.n} className="rounded-3xl border border-border/60 bg-card p-8 md:p-12 grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-neon font-display text-sm mb-6">{s.n}</div>
                <h2 className="text-3xl md:text-4xl font-bold">{s.title}</h2>
                <p className="mt-3 text-muted-foreground">{s.desc}</p>
              </div>
              <ul className="md:col-span-2 grid sm:grid-cols-2 gap-3 content-start">
                {s.items.map((i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-neon shrink-0" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link to="/contact" className="inline-flex rounded-full bg-neon text-primary-foreground px-8 py-4 font-medium glow-neon">
            Start your project
          </Link>
        </div>
      </div>
    </section>
  );
}
