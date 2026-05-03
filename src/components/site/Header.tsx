import { useEffect, useState } from "react";
import { INSTAGRAM_URL } from "@/lib/contact";

const links = [
  { href: "#processo", label: "Como funciona" },
  { href: "#servicos", label: "Serviços" },
  { href: "#planos", label: "Planos" },
  { href: "#contato", label: "Contato" },
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
          ? "border-b border-white/10 bg-ink/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2 text-white">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-neon text-ink font-display font-black">
            P
          </span>
          <span className="font-display text-xl font-bold tracking-tight">
            pacheco<span className="text-brand-neon">tech</span>
          </span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-white/70 transition-colors hover:text-white">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-brand-neon px-4 py-2 text-sm font-semibold text-ink transition-all hover:scale-[1.03] hover:shadow-neon"
          >
            Falar no Instagram <span aria-hidden>→</span>
          </a>
          <button
            aria-label="Abrir menu"
            className="md:hidden text-white"
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-ink/95 backdrop-blur-xl md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-white/80 hover:bg-white/5">
                {l.label}
              </a>
            ))}
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"
              className="mt-1 rounded-full bg-brand-neon px-4 py-2.5 text-center text-sm font-semibold text-ink">
              Falar no Instagram →
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
