import { Button } from "@/components/ui/button";
import { openInstagram } from "@/lib/contact";

const steps = [
  {
    n: "01",
    title: "Diagnóstico",
    desc: "Entendo o terreno antes de qualquer construção.",
    items: [
      "Análise do negócio",
      "Definição do cliente ideal",
      "Análise dos concorrentes",
      "Documento estratégico com posicionamento e direção",
    ],
  },
  {
    n: "02",
    title: "Estratégia",
    desc: "Transformo o diagnóstico em uma estrutura que vende.",
    items: [
      "Definição da estrutura da página",
      "Copywriting focado em conversão",
      "Mensagem de posicionamento clara",
    ],
  },
  {
    n: "03",
    title: "Construção",
    desc: "Execução técnica com foco em performance e conversão.",
    items: [
"Landing page responsiva",
      "Integração com Instagram",
      "Layout orientado à conversão",
    ],
  },
  {
    n: "04",
    title: "Entrega",
    desc: "Você recebe a página pronta para gerar clientes.",
    items: [
      "Página publicada",
      "Domínio configurado",
      "Acesso completo",
      "Revisão incluída",
    ],
  },
];

export function Process() {
  return (
<section id="processo" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Processo"
          title="Como funciona, em 4 etapas"
          subtitle="Um sistema claro, sem improviso. Cada etapa entrega algo concreto."
        />

<div className="mt-12 grid gap-5 md:grid-cols-2">
          {steps.map((s, i) => (
            <article
              key={s.n}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant sm:p-8"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="absolute -right-6 -top-6 text-[7rem] font-black leading-none text-primary/5 transition-colors group-hover:text-primary/10">
                {s.n}
              </div>
              <div className="relative">
                <span className="inline-flex h-8 items-center rounded-full bg-primary/10 px-3 text-xs font-bold tracking-wider text-primary">
                  ETAPA {s.n}
                </span>
                <h3 className="mt-4 text-2xl font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                <ul className="mt-5 space-y-2.5">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-start gap-2.5 text-sm">
                      <CheckIcon />
                      <span className="text-foreground/85">{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

{/* Mini CTA after process */}
        <div className="mt-12 text-center">
          <Button
            asChild
            size="lg"
            className="h-12 bg-primary px-8 text-base font-semibold text-primary-foreground hover:bg-primary/90"
          >
            <a href="#" onClick={(e) => { e.preventDefault(); openInstagram(); }}>
              Falar no Instagram
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  light,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow && (
        <span
          className={`text-xs font-bold uppercase tracking-[0.2em] ${
            light ? "text-white/70" : "text-primary"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            light ? "text-white/80" : "text-muted-foreground"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

function CheckIcon() {
  return (
    <svg
      className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0L3.3 9.7a1 1 0 111.4-1.4l3.8 3.8 6.8-6.8a1 1 0 011.4 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}
