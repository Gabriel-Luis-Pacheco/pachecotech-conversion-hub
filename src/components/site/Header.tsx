import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { INSTAGRAM_URL } from "@/lib/contact";

const links = [
  { href: "#processo", label: "Processo" },
  { href: "#entregas", label: "Entregas" },
  { href: "#planos", label: "Planos" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/60 bg-background/85 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        <a
          href="#top"
          className={`text-lg font-extrabold tracking-tight ${
            scrolled ? "text-foreground" : "text-white"
          }`}
        >
          Pacheco<span className="text-[#3B82F6]">Tech</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors ${
                scrolled
                  ? "text-foreground/70 hover:text-foreground"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button
            asChild
            size="sm"
            className="hidden sm:inline-flex bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
              Falar no Instagram
            </a>
          </Button>
          <button
            aria-label="Abrir menu"
            className={`md:hidden ${scrolled ? "text-foreground" : "text-white"}`}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border/60 bg-background/95 backdrop-blur-md md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-secondary"
              >
                {l.label}
              </a>
            ))}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 rounded-md bg-primary px-3 py-2 text-center text-sm font-semibold text-primary-foreground"
            >
              Falar no Instagram
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
