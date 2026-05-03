const items = [
  { icon: "🧠", title: "Estratégia antes do design", desc: "Briefing profundo. Cada decisão visual tem motivo de negócio." },
  { icon: "🎯", title: "Foco em conversão", desc: "Copy, estrutura e CTAs pensados para gerar contatos reais." },
  { icon: "⚡", title: "Entrega rápida", desc: "Em dias, não semanas. Processo enxuto e direto ao ponto." },
  { icon: "🔍", title: "Processo transparente", desc: "Você acompanha cada etapa. Sem caixa-preta, sem mistério." },
];

export function Differentiators() {
  return (
    <section className="relative bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <span className="font-script text-2xl text-brand-mid">por que comigo →</span>
          <h2 className="mt-2 font-display text-4xl font-black tracking-tight text-ink sm:text-5xl">
            O que agências fazem em <em className="text-brand-mid">semanas</em>, comprimo em um sistema rápido.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {items.map((it) => (
            <div key={it.title} className="group rounded-3xl border border-black/5 bg-cream p-7 transition-all hover:scale-[1.02] hover:shadow-elegant">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-neon text-2xl shadow-neon">{it.icon}</div>
              <h3 className="mt-5 font-display text-xl font-bold text-ink">{it.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{it.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-brand-dark p-8 sm:p-12 text-white relative overflow-hidden">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-neon/20 blur-3xl" />
          <p className="relative font-display text-2xl italic leading-snug sm:text-3xl">
            "Sites bonitos são fáceis. Sites que <span className="text-brand-neon not-italic font-bold">trazem clientes</span> exigem estratégia. É exatamente isso que entrego."
          </p>
        </div>
      </div>
    </section>
  );
}
