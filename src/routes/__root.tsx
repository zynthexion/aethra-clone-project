import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import appCss from "../styles.css?url";

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
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" },
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
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-5 backdrop-blur-md bg-background/60 border-b border-border/40">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-neon flex items-center justify-center text-primary-foreground font-bold text-lg">D</div>
          <span className="font-display font-bold text-lg tracking-tight">DIGnity</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#home" className="hover:text-foreground transition">Home</a>
          <a href="#services" className="hover:text-foreground transition">Services</a>
          <a href="#pricing" className="hover:text-foreground transition">Pricing</a>
          <a href="#about" className="hover:text-foreground transition">About</a>
        </nav>
        <a href="#contact" className="rounded-full bg-neon text-primary-foreground px-5 py-2 text-sm font-medium hover:opacity-90 transition glow-neon">
          Contact us
        </a>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/40 px-6 py-10 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-md bg-neon flex items-center justify-center text-primary-foreground font-bold text-sm">D</div>
          <span className="font-display font-semibold text-foreground">DIGnity</span>
          <span className="ml-2">© {new Date().getFullYear()}</span>
        </div>
        <p className="text-xs">Thrissur, Kerala · 9048191613</p>
      </div>
    </footer>
  );
}

function RootComponent() {
  return (
    <div className="min-h-screen bg-background bg-hero">
      <Header />
      <main className="pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
