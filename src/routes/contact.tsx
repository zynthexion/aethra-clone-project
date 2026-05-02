import { createFileRoute } from "@tanstack/react-router";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { sendContactEmail } from "@/lib/resend";
import { useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string;

    try {
      const result = await sendContactEmail({ data: { name, email, phone, message } });
      
      if (result.success) {
        toast.success("Message sent! We'll be in touch soon.");
        (e.target as HTMLFormElement).reset();
      } else {
        toast.error(result.error || "Failed to send message.");
      }
    } catch (error) {
      toast.error("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24">
      <section className="px-6 py-12 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20">
            <Reveal>
              <p className="text-neon font-geo text-[16px] font-bold tracking-[0.3em] mb-6 uppercase">Get in Touch</p>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9]">
                Let's create something <span className="text-neon">legendary.</span>
              </h2>
              <p className="mt-8 text-xl text-muted-foreground font-light mb-12 font-geo">
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
                onSubmit={handleSubmit}
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[10px] text-muted-foreground tracking-[0.2em] uppercase font-bold">Name</label>
                    <input name="name" required type="text" className="mt-3 w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-neon focus:bg-white/[0.08] transition-all font-light" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="text-[10px] text-muted-foreground tracking-[0.2em] uppercase font-bold">Email</label>
                    <input name="email" required type="email" className="mt-3 w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-neon focus:bg-white/[0.08] transition-all font-light" placeholder="john@agency.com" />
                  </div>
                </div>
                <div>
                  <label className="text-[10px] text-muted-foreground tracking-[0.2em] uppercase font-bold">Phone Number</label>
                  <input name="phone" required type="tel" className="mt-3 w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-neon focus:bg-white/[0.08] transition-all font-light" placeholder="+91 00000 00000" />
                </div>
                <div>
                  <label className="text-[10px] text-muted-foreground tracking-[0.2em] uppercase font-bold">Message</label>
                  <textarea name="message" required rows={4} className="mt-3 w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-neon focus:bg-white/[0.08] transition-all font-light resize-none" placeholder="Tell us about your vision..." />
                </div>
                <button 
                  disabled={isSubmitting}
                  type="submit" 
                  className="w-full btn-keyboard py-5 text-xs text-neon disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Inquiry"}
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
