import { INSTAGRAM_URL } from "@/lib/contact";

const plans = [
  {
    name: "Kickstart",
    setup: "R$600",
    monthly: "R$200",
    desc: "Para quem tá começando e precisa sair do zero com profissionalismo.",
    items: [
      "Briefing estratégico",
      "Landing page de 1-2 seções",
      "Copy básica de conversão",
      "Integração Instagram/WhatsApp",
      "Branding básico",
      "Acompanhamento 30 dias",
    ],
    featured: false,
  },
  {
    name: "Accelerator",
    setup: "R$1.200",
    monthly: "R$300",
    desc: "Para quem já tá online mas não tá convertendo. Você precisa de um sistema que funciona.",
    items: [
      "Tudo do Kickstart",
      "3-4 seções otimizadas",
      "Análise de concorrentes",
      "Copy estratégica completa",
      "SEO básico",
      "2 rodadas de revisão",
    ],
    featured: true,
  },
  {
    name: "Growth Machine",
    setup: "R$2.500",
    monthly: "R$600",
    desc: "Para quem quer profissionalizar a marca e criar um sistema de vendas que REALMENTE escala.",
    items: [
      "Tudo do Accelerator",
      "5+ seções estratégicas",
      "Branding completo",
      "Análise de concorrentes + SWOT",
      "SEO completo",
      "Mentoria mensal",
      "Acompanhamento 60 dias",
    ],
    featured: false,
  },
];

export function Plans() {
  return (
    <section id="planos" className="relative overflow-hidden bg-ink py-20 text-white sm:py-28">
      <div className="pointer-events-none absolute top-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-brand-neon/10 blur-3xl" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="font-script text-2xl text-brand-yellow">planos →</span>
          <h2 className="mt-2 font-display text-4xl font-black tracking-tight sm:text-5xl">
            Escolha seu <em className="text-brand-neon">ponto de entrada</em>.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/60">
            Três caminhos. Mesmo cuidado estratégico em todos.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative flex flex-col rounded-3xl p-8 transition-all hover:scale-[1.02] ${
                p.featured
                  ? "bg-gradient-to-b from-brand-mid to-brand-dark border-2 border-brand-neon shadow-neon lg:-translate-y-4"
                  : "border border-white/10 bg-white/[0.03] hover:bg-white/[0.06]"
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-neon px-3 py-1 text-xs font-bold uppercase text-ink">
                  Mais popular
                </span>
              )}
              <h3 className="font-display text-2xl font-bold">{p.name}</h3>
              <p className="mt-1 text-sm text-white/60">{p.desc}</p>
              <div className="mt-5 space-y-1">
                <div>
                  <span className="text-xs text-white/50">investimento inicial</span>
                  <p className="font-display text-4xl font-black text-brand-neon">{p.setup}</p>
                </div>
                <div className="pt-2 border-t border-white/10 mt-3">
                  <span className="text-xs text-white/50">mensalidade (opcional)</span>
                  <p className="font-display text-2xl font-bold text-white">
                    {p.monthly}<span className="text-sm text-white/50 font-normal">/mês</span>
                  </p>
                </div>
              </div>
              <ul className="mt-6 flex-1 space-y-2.5 text-sm">
                {p.items.map((it) => (
                  <li key={it} className="flex items-start gap-2.5">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-neon/20 text-brand-neon">✓</span>
                    <span className="text-white/80">{it}</span>
                  </li>
                ))}
              </ul>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"
                className={`mt-7 inline-flex h-11 items-center justify-center gap-2 rounded-full font-semibold transition-all ${
                  p.featured ? "bg-brand-neon text-ink hover:scale-[1.02]" : "border border-white/20 bg-white/5 text-white hover:bg-white/10"
                }`}>
                Quero este <span aria-hidden>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
