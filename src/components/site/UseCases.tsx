import { SectionHeader } from "./Process";

const cases = [
  {
    tag: "Prestador de serviço local",
    icon: WrenchIcon,
    problem: "Está perdendo clientes por não ter presença online consistente.",
    solution: "Página rápida, com CTA direto e foco em conversão para leads locais.",
  },
  {
    tag: "Coach / consultor",
    icon: SparkIcon,
    problem: "Depende inteiramente do Instagram para ser encontrado.",
    solution: "Página de captura com posicionamento e fluxo claro de qualificação.",
  },
  {
    tag: "Criador de infoproduto",
    icon: ChartIcon,
    problem: "Tem tráfego, mas a página não converte em vendas.",
    solution: "Sales page otimizada — copy, estrutura e oferta ajustadas ao público.",
  },
];

export function UseCases() {
  return (
    <section className="bg-gradient-soft py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Para quem é"
          title="Casos onde isso funciona"
          subtitle="Cenários reais onde uma página com estratégia muda o jogo."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {cases.map((c) => (
            <article
              key={c.tag}
              className="rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant sm:p-7"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <c.icon />
              </div>
              <h3 className="mt-5 text-lg font-bold">{c.tag}</h3>
              <div className="mt-4 space-y-3">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
                    Problema
                  </p>
                  <p className="mt-1 text-sm text-foreground/85">{c.problem}</p>
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-primary">
                    Solução
                  </p>
                  <p className="mt-1 text-sm text-foreground/85">{c.solution}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WrenchIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a4 4 0 00-5.4 5.4l-6 6a2 2 0 102.8 2.8l6-6a4 4 0 005.4-5.4l-2.4 2.4-2.4-2.4 2.4-2.4z" />
    </svg>
  );
}
function SparkIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" />
    </svg>
  );
}
function ChartIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3v18h18" />
      <path d="M7 14l4-4 3 3 5-6" />
    </svg>
  );
}
