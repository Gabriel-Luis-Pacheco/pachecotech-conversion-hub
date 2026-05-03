import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Posso fazer isso sozinho?", a: "Pode. Mas a parte mais difícil não é construir — é definir o quê, pra quem e como comunicar. É exatamente nisso que entrego mais valor." },
  { q: "Quanto custa?", a: "Os planos começam em R$297 e vão até R$997. O preço final depende da complexidade do projeto e do que você precisa." },
  { q: "Quanto tempo leva?", a: "Em média de 5 a 14 dias úteis, dependendo do plano. Briefing rápido e execução enxuta." },
  { q: "Posso pedir revisões?", a: "Sim. Cada plano inclui rodadas de revisão para deixar o site exatamente como você precisa." },
  { q: "Funciona pro meu nicho?", a: "Funciona pra qualquer negócio que precisa atrair clientes online: prestadores, coaches, infoprodutores, lojas locais." },
  { q: "E depois da entrega?", a: "Você fica no controle total — domínio, conta, código. Suporte estendido nos planos superiores." },
];

export function FAQ() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <span className="font-script text-2xl text-brand-mid">dúvidas? →</span>
          <h2 className="mt-2 font-display text-4xl font-black tracking-tight text-ink sm:text-5xl">
            Perguntas frequentes.
          </h2>
        </div>
        <Accordion type="single" collapsible className="mt-10 space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="rounded-2xl border border-black/10 bg-white px-5 data-[state=open]:shadow-elegant">
              <AccordionTrigger className="py-5 text-left font-display text-lg font-bold text-ink hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-ink/70 pb-5">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
