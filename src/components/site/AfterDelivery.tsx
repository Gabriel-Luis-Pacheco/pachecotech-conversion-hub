const cards = [
  {
    icon: "🎯",
    title: "Seu site, seu domínio",
    desc: "Você tem acesso total ao site, domínio e código. Não fica preso a ninguém.",
  },
  {
    icon: "📊",
    title: "Acompanhamento estratégico",
    desc: "Nos primeiros 30-60 dias, a gente monitora resultado junto. Se ajuste for necessário, fazemos GRÁTIS.",
  },
  {
    icon: "🔄",
    title: "Suporte contínuo (opcional)",
    desc: "Quer crescer mais? Entra a mensalidade. Cada plano inclui suporte diferente. Sem vínculo — cancela quando quiser.",
  },
];

export function AfterDelivery() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <span className="font-script text-2xl text-brand-mid">e depois da entrega? →</span>
          <h2 className="mt-2 font-display text-4xl font-black tracking-tight text-ink sm:text-5xl">
            Você fica no controle. <em className="text-brand-mid">A gente fica observando.</em>
          </h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {cards.map((c) => (
            <div key={c.title} className="rounded-3xl border border-black/5 bg-cream p-7 transition-all hover:scale-[1.02] hover:shadow-elegant">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-neon text-2xl shadow-neon">{c.icon}</div>
              <h3 className="mt-5 font-display text-xl font-bold text-ink">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
