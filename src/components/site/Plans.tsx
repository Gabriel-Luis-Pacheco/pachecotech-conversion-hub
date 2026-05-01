import { Button } from "@/components/ui/button";
import { openInstagram } from "@/lib/contact";
import { SectionHeader } from "./Process";

const plans = [
  {
    name: "Presença",
    pitch: "Para quem precisa existir online com profissionalismo.",
    items: [
      "Diagnóstico estratégico essencial",
      "Página única, responsiva",
      "Copy direto para serviço/oferta",
      "Integração com Instagram",
    ],
  },
  {
    name: "Conversão",
    pitch: "Para quem quer transformar visitas em clientes qualificados.",
    items: [
      "Diagnóstico completo + análise de concorrentes",
      "Estrutura de conversão otimizada",
      "Copy estratégico seção por seção",
      "Página responsiva integrada",
      "Revisão incluída",
    ],
    highlight: true,
  },
  {
    name: "Sistema",
    pitch: "Para quem quer um motor de aquisição contínua.",
    items: [
      "Tudo do plano Conversão",
      "Posicionamento aprofundado",
      "Múltiplas seções de prova",
      "Otimização para tráfego pago",
      "Suporte estendido",
    ],
  },
];

export function Plans() {
  return (
<section id="planos" className="bg-[#0F172A] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
<SectionHeader
          eyebrow="Planos"
          title="Três caminhos. Um propósito: clientes."
          subtitle="Escolha o nível de profundidade. O foco em resultado nunca muda."
          light
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((p) => (
<article
              key={p.name}
              className={`relative flex flex-col rounded-2xl border p-7 transition-all hover:-translate-y-1 sm:p-8 ${
                p.highlight
                  ? "border-primary bg-gradient-hero text-white shadow-elegant"
                  : "border-white/10 bg-white/5 text-white shadow-card hover:shadow-elegant"
              }`}
            >
              {p.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary shadow-md">
                  Mais escolhido
                </span>
              )}
              <h3 className="text-2xl font-extrabold">{p.name}</h3>
              <p className={`mt-2 text-sm ${p.highlight ? "text-white/85" : "text-muted-foreground"}`}>
                {p.pitch}
              </p>
<ul className="mt-6 flex-1 space-y-3">
                {p.items.map((it) => (
                  <li key={it} className="flex items-start gap-2.5 text-sm">
                    <svg
                      className={`mt-0.5 h-4 w-4 flex-shrink-0 ${
                        p.highlight ? "text-white" : "text-primary"
                      }`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0L3.3 9.7a1 1 0 111.4-1.4l3.8 3.8 6.8-6.8a1 1 0 011.4 0z" clipRule="evenodd" />
                    </svg>
                    <span className={p.highlight ? "text-white" : "text-white/90"}>{it}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className={`mt-8 h-11 font-semibold ${
                  p.highlight
                    ? "bg-white text-primary hover:bg-white/90"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
              >
<a href="#" onClick={(e) => { e.preventDefault(); openInstagram(); }}>
                  Quero {p.name}
                </a>
              </Button>
            </article>
          ))}
        </div>
<p className="mt-8 text-center text-sm text-white/60">
          Valores definidos após o diagnóstico, conforme escopo. Faixa de referência: R$297 – R$997.
        </p>
      </div>
    </section>
  );
}
