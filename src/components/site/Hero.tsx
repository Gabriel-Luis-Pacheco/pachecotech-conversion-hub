import { Button } from "@/components/ui/button";
import { openInstagram } from "@/lib/contact";
import heroImg from "@/assets/hero-pachecotech.jpg";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-hero pt-28 pb-20 text-white sm:pt-36 sm:pb-28"
    >
      {/* glow accents */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full bg-green-500/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
            Processo validado na prática
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Seu site não está trazendo clientes.{" "}
            <span className="text-white/80">Eu resolvo isso com estratégia.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            Antes de construir qualquer coisa, eu entendo o seu negócio.
            Depois executo com foco claro: <strong className="text-white">resultados.</strong>
          </p>
          
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-12 bg-white px-6 text-base font-semibold text-primary hover:bg-white/90"
            >
              <a href="#processo">Ver como funciona</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 border-white/40 bg-transparent px-6 text-base font-semibold text-white hover:bg-white/10 hover:text-white"
              onClick={openInstagram}
            >
              <a href="#" onClick={(e) => { e.preventDefault(); openInstagram(); }}>
                Falar no Instagram
              </a>
            </Button>
          </div>
          
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/75">
            <Stat label="Diagnóstico estratégico" />
            <Stat label="Copy de conversão" />
            <Stat label="Entrega rápida" />
          </div>
        </div>

        <div className="relative animate-fade-up [animation-delay:120ms]">
          <div className="absolute -inset-4 rounded-3xl bg-white/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl border border-white/15 shadow-elegant ring-1 ring-white/10">
            <img
              src={heroImg}
              alt="Profissional analisando estratégia digital no laptop"
              width={1024}
              height={1024}
              className="h-full w-full object-cover"
            />
          </div>
          {/* floating cards */}
          <div className="absolute -bottom-6 -left-4 hidden rounded-xl border border-white/15 bg-white/95 px-4 py-3 text-foreground shadow-elegant backdrop-blur sm:block">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-primary">
              Resultado projetado
            </p>
            <p className="mt-0.5 text-sm font-bold">Potencial de geração de contatos</p>
          </div>
          <div className="absolute -top-4 -right-4 hidden rounded-xl border border-white/15 bg-white/95 px-4 py-3 text-foreground shadow-elegant backdrop-blur sm:block">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-primary">
              Foco
            </p>
            <p className="mt-0.5 text-sm font-bold">Conversão de clientes</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2">
      <svg className="h-4 w-4 text-emerald-300" viewBox="0 0 20 20" fill="currentColor">
        <path
          fillRule="evenodd"
          d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0L3.3 9.7a1 1 0 111.4-1.4l3.8 3.8 6.8-6.8a1 1 0 011.4 0z"
          clipRule="evenodd"
        />
      </svg>
      {label}
    </div>
  );
}
