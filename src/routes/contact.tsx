import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — DIGnity" },
      { name: "description", content: "Get in touch with DIGnity in Thrissur, Kerala. Let's build your brand together." },
      { property: "og:title", content: "Contact DIGnity" },
      { property: "og:description", content: "Let's build your brand with DIGnity." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <section className="px-6 py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        <div>
          <p className="text-neon text-sm font-semibold tracking-widest mb-4">CONTACT</p>
          <h1 className="text-5xl md:text-7xl font-bold leading-[0.95]">
            Let's build your brand with <span className="text-neon">DIGnity.</span>
          </h1>
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
        </div>

        <form
          className="rounded-3xl border border-border/60 bg-card p-8 md:p-10 space-y-5 h-fit"
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
      </div>
    </section>
  );
}
