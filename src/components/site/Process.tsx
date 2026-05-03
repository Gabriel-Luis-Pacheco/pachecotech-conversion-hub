const steps = [
  {
    n: "01",
    color: "#60A5FA",
    title: "A gente se conhece",
    duration: "30 minutos",
    intro: "Você me chama no Instagram ou manda email. A gente bate um papo pra entender:",
    bullets: ["O que você faz", "Quem é seu cliente", "O que quer no site", "Seu orçamento"],
    outro: "Sem compromisso. Só conversando.",
  },
  {
    n: "02",
    color: "#FACC15",
    title: "A gente estuda seu negócio",
    duration: "1-3 dias",
    intro: "Se você gostar de mim, a gente começa. Eu faço:",
    bullets: [
      "Análise do seu negócio",
      "Pesquiso seu cliente ideal",
      "Vejo quem é sua concorrência",
      "Defino a melhor estratégia",
    ],
    outro: "Você recebe um documento explicando tudo. Seu trabalho: responder 2-3 perguntas.",
  },
  {
    n: "03",
    color: "#22C55E",
    title: "A gente monta tudo",
    duration: "3-7 dias",
    intro: "Agora vem a parte técnica. Eu faço:",
    bullets: [
      "Design do site responsivo",
      "Copy estratégica de cada seção",
      "Integração Instagram/WhatsApp",
      "Otimização de velocidade",
      "SEO básico (Google)",
    ],
    outro: "Você recebe site pronto, domínio ativo e acesso total. Seu trabalho: testar e avisar o que ajustar.",
  },
  {
    n: "04",
    color: "#22C55E",
    title: "A gente valida e cresce junto",
    duration: "30-60 dias",
    intro: "Site no ar. Agora a gente analisa resultado. Eu faço:",
    bullets: [
      "Instalo ferramentas de medição",
      "Acompanho visitantes",
      "Acompanho leads/clientes",
      "Se não tá funcionando, ajustamos GRÁTIS",
    ],
    outro: "Você recebe relatório mensal simples. Quer continuar comigo? Entra a mensalidade. Quer só manter? Sem problema.",
    featured: true,
  },
];

export function Process() {
  return (
    <section id="processo" className="relative overflow-hidden bg-ink py-20 text-white sm:py-28">
      <div className="pointer-events-none absolute -top-20 right-0 h-96 w-96 rounded-full bg-brand-neon/10 blur-3xl" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="font-script text-2xl text-brand-yellow">processo →</span>
          <h2 className="mt-2 font-display text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            Como a gente <em className="text-brand-neon">trabalha</em>.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/60">
            4 etapas claras. Sem surpresa no meio do caminho.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {steps.map((s) => (
            <div
              key={s.n}
              className={`relative rounded-3xl border p-7 transition-all hover:scale-[1.01] ${
                s.featured
                  ? "border-brand-neon bg-brand-neon/[0.06] shadow-neon"
                  : "border-white/10 bg-white/[0.03] hover:bg-white/[0.06]"
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="font-display text-5xl font-black" style={{ color: s.color }}>
                  {s.n}
                </div>
                <span
                  className="rounded-full px-3 py-1 text-xs font-bold"
                  style={{ background: `${s.color}22`, color: s.color }}
                >
                  {s.duration}
                </span>
              </div>
              <h3 className="mt-4 font-display text-2xl font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-white/70">{s.intro}</p>
              <ul className="mt-4 space-y-1.5 text-sm text-white/80">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: s.color }} />
                    {b}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm italic text-white/60">{s.outro}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
