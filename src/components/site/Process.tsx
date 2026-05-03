const steps = [
  { n: "01", color: "#60A5FA", title: "Diagnóstico", desc: "Entendo seu negócio, público e concorrentes.", bullets: ["Análise do negócio", "Persona ideal", "Concorrência"] },
  { n: "02", color: "#FACC15", title: "Estratégia", desc: "Defino mensagem, funil e pontos de conversão.", bullets: ["Posicionamento", "Copy estratégica", "Estrutura"] },
  { n: "03", color: "#22C55E", title: "Construção", desc: "Construo a página focada em performance.", bullets: ["Design responsivo", "Integrações", "SEO básico"] },
  { n: "04", color: "#0D3D2C", title: "Entrega", desc: "Publicação, ajustes finais e treinamento.", bullets: ["Domínio configurado", "Revisões", "Você no controle"] },
];

export function Process() {
  return (
    <section id="processo" className="relative overflow-hidden bg-ink py-20 text-white sm:py-28">
      <div className="pointer-events-none absolute -top-20 right-0 h-96 w-96 rounded-full bg-brand-neon/10 blur-3xl" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="font-script text-2xl text-brand-yellow">nosso processo →</span>
          <h2 className="mt-2 font-display text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            4 etapas. <em className="text-brand-neon">Zero</em> improviso.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/60">
            Um caminho claro do diagnóstico à entrega — sem surpresas.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.n} className="relative rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-all hover:scale-[1.02] hover:bg-white/[0.06]">
              <div className="font-display text-5xl font-black opacity-90" style={{ color: s.color }}>{s.n}</div>
              <h3 className="mt-4 font-display text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-white/65">{s.desc}</p>
              <ul className="mt-4 space-y-1.5 text-sm text-white/70">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: s.color }} />
                    {b}
                  </li>
                ))}
              </ul>
              {i < steps.length - 1 && (
                <svg aria-hidden className="absolute -right-4 top-10 hidden lg:block" width="32" height="20" viewBox="0 0 32 20" fill="none">
                  <path d="M2 10 Q 16 -2, 30 10" stroke="#22C55E" strokeWidth="2" strokeDasharray="3 3" fill="none"/>
                  <path d="M26 6 L30 10 L26 14" stroke="#22C55E" strokeWidth="2" fill="none" strokeLinecap="round"/>
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
