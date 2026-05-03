import { INSTAGRAM_URL } from "@/lib/contact";
import heroImg from "@/assets/hero-results.png";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink pt-32 pb-20 text-white sm:pt-40 sm:pb-28">
      {/* glowing blobs */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-brand-neon/20 blur-3xl animate-blob" />
      <div className="pointer-events-none absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full bg-brand-mid/30 blur-3xl animate-blob" />
      <div className="pointer-events-none absolute inset-0 bg-radial-glow opacity-60" />

      {/* Decorative SVG squiggles */}
      <svg aria-hidden className="pointer-events-none absolute left-8 top-28 hidden lg:block opacity-60" width="80" height="40" viewBox="0 0 80 40" fill="none">
        <path d="M2 20 Q 12 2, 22 20 T 42 20 T 62 20 T 78 20" stroke="#FACC15" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
      <svg aria-hidden className="pointer-events-none absolute right-12 top-36 hidden lg:block" width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M20 4 L23 17 L36 20 L23 23 L20 36 L17 23 L4 20 L17 17 Z" fill="#22C55E"/>
      </svg>

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-neon/30 bg-brand-neon/10 px-3.5 py-1.5 text-xs font-medium text-brand-neon">
            <span className="h-2 w-2 rounded-full bg-brand-neon animate-pulse" />
            Especialista em Conversão Digital
          </span>

          <h1 className="mt-6 font-display text-5xl font-black leading-[1.02] tracking-tight sm:text-6xl lg:text-[68px]">
            Seu negócio merece um site que{" "}
            <span className="relative italic font-medium text-brand-neon">
              realmente
              <svg aria-hidden className="absolute -bottom-2 left-0 w-full" height="14" viewBox="0 0 200 14" preserveAspectRatio="none">
                <path d="M3 9 Q 50 1, 100 7 T 197 6" stroke="#FACC15" strokeWidth="3" fill="none" strokeLinecap="round"/>
              </svg>
            </span>{" "}
            vende.
          </h1>

          <p className="mt-7 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            Marketing estratégico, identidade de marca e site profissional — tudo junto, para pequenos negócios que querem crescer de verdade.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-neon px-7 text-base font-semibold text-ink transition-all hover:scale-[1.03] hover:shadow-neon">
              Quero meu site <span aria-hidden>→</span>
            </a>
            <a href="#processo"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10">
              Ver como funciona
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-white/60">
            <span className="font-script text-2xl text-brand-yellow">↗ tudo incluso</span>
            <Stat>🎯 Briefing estratégico</Stat>
            <Stat>⚡ Entrega em dias</Stat>
            <Stat>📈 Foco em conversão</Stat>
          </div>
        </div>

        <div className="relative animate-fade-up [animation-delay:120ms]">
          <div className="absolute -inset-6 rounded-[2rem] bg-brand-neon/20 blur-3xl" />
          {/* Browser frame mockup */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-ink-soft shadow-elegant">
            <div className="flex items-center gap-1.5 border-b border-white/10 bg-black/40 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
              <span className="h-3 w-3 rounded-full bg-green-400/80" />
              <span className="ml-3 text-xs text-white/40">pachecotech.com</span>
            </div>
            <img src={heroImg} alt="Time comemorando resultados em dashboard de vendas" className="aspect-[16/10] w-full object-cover" />
          </div>

          {/* Floating cards */}
          <div className="absolute -left-4 -bottom-6 hidden rounded-2xl border border-white/10 bg-ink-soft/90 px-4 py-3 shadow-elegant backdrop-blur sm:block">
            <p className="text-xs text-brand-neon font-semibold">📈 Foco em conversão</p>
            <p className="mt-0.5 text-sm font-bold text-white">+ contatos qualificados</p>
          </div>
          <div className="absolute -right-4 -top-4 hidden rotate-3 rounded-2xl border border-white/10 bg-ink-soft/90 px-4 py-3 shadow-elegant backdrop-blur sm:block">
            <p className="font-script text-xl text-brand-yellow leading-none">você aqui</p>
            <p className="font-script text-xl text-brand-yellow leading-none">em breve ↗</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ children }: { children: React.ReactNode }) {
  return <span className="inline-flex items-center gap-1.5">{children}</span>;
}
