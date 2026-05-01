import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeader } from "./Process";

const faqs = [
  {
    q: "Posso fazer isso sozinho?",
    a: "Pode. Mas construir uma página que realmente converte exige diagnóstico, copy estratégico e decisões que vão além do design. O processo aqui poupa meses de tentativa e erro.",
  },
  {
    q: "Quanto custa?",
    a: "Os valores variam conforme escopo, dentro da faixa de R$297 a R$997. O preço final é definido após o diagnóstico, com base no que faz sentido para o seu negócio.",
  },
  {
    q: "Quanto tempo leva?",
    a: "Não trabalho com prazos fixos genéricos. O ciclo depende do escopo e do nível de complexidade — mas a execução é enxuta e sem fricção, sempre mais rápida que uma agência tradicional.",
  },
  {
    q: "Posso pedir revisões?",
    a: "Sim. Cada projeto inclui uma rodada de revisão para ajustes antes da entrega final.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="bg-gradient-soft py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Perguntas frequentes"
          title="Antes de conversarmos"
        />
        <Accordion type="single" collapsible className="mt-10 space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={f.q}
              value={`q-${i}`}
              className="overflow-hidden rounded-xl border border-border bg-card px-5 shadow-card"
            >
              <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
