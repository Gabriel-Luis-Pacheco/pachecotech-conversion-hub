import { SectionHeader } from "./Process";

const items = [
  {
    title: "Estratégia antes do design",
    desc: "Nada é construído sem antes entender o negócio, o público e a concorrência.",
    icon: BrainIcon,
  },
  {
    title: "Processo transparente",
    desc: "Você sabe o que está sendo entregue em cada etapa — sem caixa-preta.",
    icon: EyeIcon,
  },
  {
    title: "Execução rápida",
    desc: "Ciclo enxuto: diagnóstico, decisão, construção e entrega sem fricção.",
    icon: BoltIcon,
  },
  {
    title: "Foco em resultados",
    desc: "Métrica que importa: contato, conversa e cliente. Não 'site bonito'.",
    icon: TargetIcon,
  },
];

export function Differentiators() {
  return (
    <section className="bg-gradient-soft py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Diferenciais"
          title="Por que esse processo entrega mais"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div
              key={it.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <it.icon />
              </div>
              <h3 className="mt-5 text-base font-bold">{it.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 overflow-hidden rounded-2xl bg-gradient-hero p-8 text-center shadow-elegant sm:p-12">
          <p className="mx-auto max-w-3xl text-xl font-semibold leading-snug text-white sm:text-2xl">
            "O que agências entregam em semanas, esse processo comprime em um sistema mais rápido e
            eficiente."
          </p>
        </div>
      </div>
    </section>
  );
}

function BrainIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 3a3 3 0 00-3 3v1a3 3 0 00-3 3 3 3 0 002 2.8V14a3 3 0 003 3 3 3 0 003 3 3 3 0 003-3 3 3 0 003-3v-1.2A3 3 0 0021 10a3 3 0 00-3-3V6a3 3 0 00-3-3 3 3 0 00-3 1 3 3 0 00-3-1z"/>
    </svg>
  );
}
function EyeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  );
}
function BoltIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"/>
    </svg>
  );
}
function TargetIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9"/>
      <circle cx="12" cy="12" r="5"/>
      <circle cx="12" cy="12" r="1.5"/>
    </svg>
  );
}
