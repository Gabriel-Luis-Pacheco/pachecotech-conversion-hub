import { SectionHeader } from "./Process";

export function Deliverables() {
  return (
    <section id="entregas" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="O que você recebe"
          title="Entregáveis tangíveis, não promessas"
          subtitle="Cada projeto entrega artefatos reais que ficam com você — do raciocínio estratégico à página final no ar."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <DocMockup />
          <CopyMockup />
          <StructureMockup />
          <PageMockup />
        </div>
      </div>
    </section>
  );
}

function Card({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant sm:p-8">
      <div className="mb-5">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
      </div>
      <div className="overflow-hidden rounded-xl border border-border bg-gradient-soft p-5">
        {children}
      </div>
    </article>
  );
}

function Bar({ w, c }: { w: string; c?: string }) {
  return <div className={`h-2 rounded-full ${c ?? "bg-foreground/15"}`} style={{ width: w }} />;
}

function DocMockup() {
  return (
    <Card
      title="Documento estratégico"
      subtitle="Negócio + audiência + posicionamento, em um único PDF."
    >
      <div className="mx-auto max-w-md space-y-3 rounded-md bg-card p-5 shadow-sm">
        <div className="flex items-center justify-between">
          <Bar w="40%" c="bg-primary" />
          <span className="text-[10px] font-semibold tracking-widest text-muted-foreground">
            DIAGNÓSTICO
          </span>
        </div>
        <Bar w="92%" />
        <Bar w="78%" />
        <Bar w="85%" />
        <div className="grid grid-cols-2 gap-3 pt-2">
          <div className="rounded-md bg-primary/10 p-3">
            <Bar w="60%" c="bg-primary/40" />
            <div className="mt-2 space-y-1.5">
              <Bar w="85%" />
              <Bar w="65%" />
            </div>
          </div>
          <div className="rounded-md bg-secondary p-3">
            <Bar w="50%" c="bg-foreground/30" />
            <div className="mt-2 space-y-1.5">
              <Bar w="90%" />
              <Bar w="70%" />
            </div>
          </div>
        </div>
        <Bar w="70%" />
        <Bar w="55%" />
      </div>
    </Card>
  );
}

function CopyMockup() {
  return (
    <Card
      title="Copywriting"
      subtitle="Headline, seções e CTAs escritos para converter."
    >
      <div className="space-y-4 rounded-md bg-card p-5 shadow-sm">
        <span className="text-[10px] font-semibold tracking-widest text-primary">
          HEADLINE
        </span>
        <div className="space-y-2">
          <div className="h-3 w-full rounded bg-foreground/85" />
          <div className="h-3 w-4/5 rounded bg-foreground/85" />
        </div>
        <span className="text-[10px] font-semibold tracking-widest text-muted-foreground">
          SUBHEADLINE
        </span>
        <div className="space-y-1.5">
          <Bar w="100%" />
          <Bar w="88%" />
        </div>
        <div className="flex gap-2 pt-1">
          <span className="rounded-md bg-primary px-3 py-1.5 text-[11px] font-semibold text-primary-foreground">
            CTA principal
          </span>
          <span className="rounded-md border border-primary px-3 py-1.5 text-[11px] font-semibold text-primary">
            CTA secundário
          </span>
        </div>
      </div>
    </Card>
  );
}

function StructureMockup() {
  return (
    <Card
      title="Estrutura da página"
      subtitle="Fluxo de conversão definido seção por seção."
    >
      <div className="space-y-2 rounded-md bg-card p-4 shadow-sm">
        {[
          { l: "Hero", w: "w-full", h: "h-12", c: "bg-primary/15 border-primary/30" },
          { l: "Prova", w: "w-11/12", h: "h-7" },
          { l: "Processo", w: "w-full", h: "h-10" },
          { l: "Casos", w: "w-10/12", h: "h-9" },
          { l: "Oferta", w: "w-full", h: "h-11", c: "bg-primary/15 border-primary/30" },
          { l: "FAQ", w: "w-9/12", h: "h-7" },
          { l: "CTA final", w: "w-full", h: "h-10", c: "bg-primary/15 border-primary/30" },
        ].map((b, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="w-16 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
              {b.l}
            </span>
            <div
              className={`flex-1 ${b.h} rounded border ${b.c ?? "border-border bg-secondary"}`}
            />
          </div>
        ))}
      </div>
    </Card>
  );
}

function PageMockup() {
  return (
    <Card
      title="Landing page final"
      subtitle="Responsiva, integrada e funcional — pronta para gerar clientes."
    >
      <div className="rounded-md bg-card p-3 shadow-sm">
        <div className="flex items-center gap-1.5 border-b border-border pb-2">
          <span className="h-2 w-2 rounded-full bg-red-400" />
          <span className="h-2 w-2 rounded-full bg-yellow-400" />
          <span className="h-2 w-2 rounded-full bg-green-400" />
          <div className="ml-2 h-3 flex-1 rounded bg-secondary" />
        </div>
        <div className="mt-3 rounded bg-gradient-hero p-4 text-white">
          <div className="h-2.5 w-3/5 rounded bg-white/90" />
          <div className="mt-2 h-2 w-4/5 rounded bg-white/60" />
          <div className="mt-3 flex gap-2">
            <span className="h-6 w-20 rounded bg-white" />
            <span className="h-6 w-24 rounded border border-white/60" />
          </div>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2">
          <div className="h-12 rounded bg-secondary" />
          <div className="h-12 rounded bg-secondary" />
          <div className="h-12 rounded bg-secondary" />
        </div>
        <div className="mt-3 space-y-1.5">
          <Bar w="100%" />
          <Bar w="80%" />
        </div>
      </div>
    </Card>
  );
}
