import { SectionHeader } from "./Process";

const deliverables = [
  {
    title: "Documento Estratégico",
    subtitle: "O raciocínio por trás da página",
    items: [
      "Análise do seu negócio",
      "Definição do cliente ideal",
      "Análise de concorrentes",
      "Posicionamento claro",
    ],
    type: "document",
  },
  {
    title: "Copy que vende",
    subtitle: "Texto pensado para gerar ação",
    items: [
      "Headline principal",
      "Subheadline",
      "Seções completas da página",
      "CTAs estratégicos",
    ],
    type: "copy",
  },
  {
    title: "Página pronta",
    subtitle: "Seu ativo digital funcionando",
    items: [
      "Landing page responsiva",
      "Integração com WhatsApp ou formulário",
      "Estrutura otimizada para conversão",
      "Pronta para uso imediato",
    ],
    type: "page",
  },
];

export function Deliverables() {
  return (
<section id="entregas" className="bg-[#F9FAFB] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="O que você recebe"
          title="Três entregas, um resultado: clientes"
          subtitle="Você leva um sistema completo, não apenas uma página."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {deliverables.map((item, i) => (
            <DeliverableCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function DeliverableCard({ item, index }: { item: (typeof deliverables)[0]; index: number }) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-gray-200/60 bg-white p-1 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary/5">
      {/* Card glow on hover */}
      <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-primary/0 via-primary/5 to-primary/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      
      <div className="relative rounded-[22px] bg-white p-6 sm:p-8">
        {/* Visual mockup based on type */}
        <div className="mt-6 mb-6">
          {item.type === "document" && <DocumentMockup />}
          {item.type === "copy" && <CopyMockup />}
          {item.type === "page" && <PageMockup />}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
        <p className="mt-1.5 text-sm text-gray-500">{item.subtitle}</p>

        {/* Features */}
        <ul className="mt-5 space-y-2.5">
          {item.items.map((feature) => (
            <li key={feature} className="flex items-center gap-2.5 text-sm text-gray-600">
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
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Product indicator */}
        <div className="mt-6 flex items-center gap-2 text-xs font-medium text-primary">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-[10px]">
            {index + 1}
          </span>
          Entrega {index + 1} de 3
        </div>
      </div>
    </article>
  );
}

function DocumentMockup() {
  return (
    <div className="relative">
      {/* Document mockup with slight tilt */}
      <div className="transform rotate-1 rounded-xl border border-gray-200 bg-white shadow-md transition-transform duration-300 group-hover:rotate-0">
        {/* PDF header */}
        <div className="flex items-center gap-2 border-b border-gray-100 px-4 py-3">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-red-400" />
            <div className="h-3 w-3 rounded-full bg-yellow-400" />
            <div className="h-3 w-3 rounded-full bg-green-400" />
          </div>
          <div className="ml-2 flex-1 rounded bg-gray-50 px-2 py-1">
            <div className="h-1.5 w-20 rounded bg-gray-200" />
          </div>
        </div>
        {/* PDF content */}
        <div className="space-y-2 p-4">
          <div className="flex items-center justify-between">
            <div className="h-2 w-24 rounded bg-gray-900" />
            <div className="h-2 w-12 rounded bg-gray-200" />
          </div>
          <div className="h-2 w-full rounded bg-gray-100" />
          <div className="h-2 w-4/5 rounded bg-gray-100" />
          <div className="h-2 w-3/5 rounded bg-gray-100" />
          <div className="mt-3 grid grid-cols-2 gap-2">
            <div className="rounded bg-primary/10 p-2">
              <div className="h-1.5 w-16 rounded bg-primary/30" />
              <div className="mt-2 h-1 w-full rounded bg-gray-200" />
              <div className="mt-1 h-1 w-3/4 rounded bg-gray-200" />
            </div>
            <div className="rounded bg-gray-50 p-2">
              <div className="h-1.5 w-14 rounded bg-gray-300" />
              <div className="mt-2 h-1 w-full rounded bg-gray-200" />
              <div className="mt-1 h-1 w-4/5 rounded bg-gray-200" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CopyMockup() {
  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow-md">
      {/* Header */}
      <div className="border-b border-gray-100 px-4 py-2">
        <span className="text-[10px] font-bold uppercase tracking-wider text-primary">Preview</span>
      </div>
      {/* Copy blocks */}
      <div className="space-y-3 p-4">
        <div className="rounded-lg bg-gray-900 px-3 py-2">
          <span className="text-sm font-semibold text-white">Headline Principal</span>
        </div>
        <div className="rounded-lg bg-gray-100 px-3 py-1.5">
          <span className="text-xs text-gray-600">Subheadline explicativa...</span>
        </div>
        <div className="flex gap-2">
          <div className="rounded-md bg-primary px-3 py-2">
            <span className="text-xs font-semibold text-white">CTA Principal</span>
          </div>
          <div className="rounded-md border border-gray-300 px-3 py-2">
            <span className="text-xs font-medium text-gray-600">CTA Secundário</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function PageMockup() {
  return (
    <div className="relative">
      {/* Browser frame */}
      <div className="rounded-t-xl border border-gray-200 border-b-0 bg-gray-50">
        <div className="flex items-center gap-2 border-b border-gray-200 px-3 py-2">
          <div className="flex gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
            <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
          </div>
          <div className="mx-auto h-2.5 max-w-[60%] rounded bg-gray-200" />
        </div>
      </div>
      {/* Page content */}
      <div className="rounded-b-xl border border-t-0 border-gray-200 bg-gradient-to-br from-gray-900 to-gray-800 p-4 shadow-md">
        <div className="space-y-2">
          <div className="h-2 w-1/2 rounded bg-white/90" />
          <div className="h-1.5 w-3/4 rounded bg-white/60" />
          <div className="flex gap-2">
            <div className="h-5 w-16 rounded bg-white" />
            <div className="h-5 w-20 rounded border border-white/40" />
          </div>
        </div>
        {/* Glow effect */}
        <div className="absolute -bottom-2 -right-2 h-16 w-16 rounded-full bg-primary/20 blur-2xl" />
      </div>
    </div>
  );
}
