import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import appCss from "../styles.css?url";
import { CursorGlow } from "@/components/CursorGlow";
import { Logo } from "@/components/Logo";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-neon">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">The page you're looking for doesn't exist.</p>
        <Link to="/" className="mt-6 inline-flex items-center justify-center rounded-full bg-neon px-6 py-2 text-sm font-medium text-primary-foreground">Go home</Link>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "DIGnity — Where Creativity Meets Growth" },
      { name: "description", content: "DIGnity is a Kerala-based digital marketing & creative media company. Strategy, content, ads, and cinematic storytelling that grow brands." },
      { property: "og:title", content: "DIGnity — Where Creativity Meets Growth" },
      { property: "og:description", content: "Premium digital marketing, branding & creative production from Kerala." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600&family=Catamaran:wght@900&family=Lexend+Deca:wght@400;700&family=Poppins:wght@400;600;700&family=Pixelify+Sans:wght@400;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 px-6 py-4 glass neon-border bg-background/50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex flex-col group">
          <Logo size="md" className="group-hover:scale-105 transition-transform" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium mt-1">We give your brand a voice</span>
        </Link>
        <nav className="hidden md:flex items-center gap-10 text-xs font-medium tracking-widest text-muted-foreground uppercase">
          <a href="#home" className="hover:text-neon transition-colors">Home</a>
          <a href="#services" className="hover:text-neon transition-colors">Services</a>
          <a href="#pricing" className="hover:text-neon transition-colors">Pricing</a>
          <a href="#about" className="hover:text-neon transition-colors">About</a>
        </nav>
        <a href="#contact" className="rounded-full bg-neon text-primary-foreground px-6 py-2.5 text-xs font-bold uppercase tracking-widest hover:opacity-90 transition glow-neon">
          Contact us
        </a>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/40 px-6 py-16 mt-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Logo size="md" />
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">We give your brand a voice</p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-2 text-muted-foreground">
          <p className="text-xs uppercase tracking-widest font-bold text-foreground">Thrissur, Kerala</p>
          <a href="tel:9048191613" className="text-sm font-medium hover:text-neon transition-colors tracking-widest">+91 90481 91613</a>
          <p className="text-[10px] opacity-40 mt-4">© {new Date().getFullYear()} DIGnity Creative Solutions.</p>
        </div>
      </div>
    </footer>
  );
}

function RootComponent() {
  return (
    <div className="min-h-screen bg-background bg-hero">
      <CursorGlow />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
