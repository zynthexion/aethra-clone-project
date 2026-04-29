import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — DIGnity" },
      { name: "description", content: "Affordable monthly packages for social media, content, ads and full marketing management." },
      { property: "og:title", content: "Pricing — DIGnity" },
      { property: "og:description", content: "Affordable packages. Measurable results. Real growth." },
    ],
  }),
  component: PricingPage,
});

const plans = [
  { name: "Starter Growth", price: "15,000", desc: "Social media handling + basic creatives.", features: ["Social media management", "Basic creatives", "Monthly reporting", "WhatsApp support"], featured: false },
  { name: "Business Growth", price: "25,000", desc: "Content creation + ads + strategy.", features: ["Everything in Starter", "Content creation", "Meta & Google Ads", "Growth strategy", "Lead campaigns"], featured: true },
  { name: "Premium Growth", price: "40,000", desc: "Full marketing management + branding.", features: ["Everything in Business", "Full marketing management", "Cinematic production", "Brand identity refresh", "Priority support"], featured: false },
];

function PricingPage() {
  return (
    <section className="px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <p className="text-neon text-sm font-semibold tracking-widest mb-4">INTRODUCTORY PACKAGES</p>
        <h1 className="text-5xl md:text-7xl font-bold leading-[0.95] max-w-4xl">
          Affordable plans. <span className="text-neon">Real growth.</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
          Pick a starting point. We'll tailor the deliverables to your business.
        </p>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.name} className={`rounded-3xl p-8 border ${p.featured ? "bg-card border-neon glow-neon" : "bg-card border-border/60"}`}>
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
              <Link to="/contact" className={`mt-8 block text-center rounded-full px-6 py-3 font-medium transition ${p.featured ? "bg-neon text-primary-foreground" : "border border-border hover:border-neon hover:text-neon"}`}>
                Get started
              </Link>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-muted-foreground">Affordable Packages. Measurable Results. Real Growth.</p>
      </div>
    </section>
  );
}
