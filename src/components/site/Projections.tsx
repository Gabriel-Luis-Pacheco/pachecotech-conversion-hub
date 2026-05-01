import { SectionHeader } from "./Process";

const projections = [
  {
    persona: "Eletricista local",
    before: "0 contatos vindos do digital",
    after: "+3 a 5 contatos qualificados por semana",
    note: "Após implementação da página com integração ao Instagram.",
  },
  {
    persona: "Coach de carreira",
    before: "Captação 100% via Stories",
    after: "Lista crescendo + agendamentos diretos pela página",
    note: "Resultado projetado após 30 dias com tráfego constante.",
  },
  {
    persona: "Criador de infoproduto",
    before: "Tráfego sem conversão clara",
    after: "Taxa de conversão mensurável + funil organizado",
    note: "Cenário realista após otimização de copy e estrutura.",
  },
];

export function Projections() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Projeções realistas"
          title="O que esperar — sem promessas vazias"
          subtitle="Cenários honestos baseados na qualidade da execução. Não exageros, não milagres."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {projections.map((p) => (
            <article
              key={p.persona}
              className="rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant sm:p-7"
            >
              <p className="text-[11px] font-bold uppercase tracking-widest text-primary">
                {p.persona}
              </p>
              <div className="mt-5 space-y-4">
                <Row label="Antes" value={p.before} muted />
                <div className="flex items-center gap-2 text-primary">
                  <div className="h-px flex-1 bg-primary/30" />
                  <ArrowDown />
                  <div className="h-px flex-1 bg-primary/30" />
                </div>
                <Row label="Depois" value={p.after} />
              </div>
              <p className="mt-5 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground">
                {p.note}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Row({ label, value, muted }: { label: string; value: string; muted?: boolean }) {
  return (
    <div>
      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
        {label}
      </p>
      <p
        className={`mt-1 text-sm font-semibold ${
          muted ? "text-muted-foreground" : "text-foreground"
        }`}
      >
        {value}
      </p>
    </div>
  );
}

function ArrowDown() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 5v14M19 12l-7 7-7-7" />
    </svg>
  );
}
