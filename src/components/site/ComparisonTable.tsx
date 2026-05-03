const features = [
  { label: "Preço Inicial", k: "R$600", a: "R$1.200", g: "R$2.500" },
  { label: "Mensalidade", k: "R$200", a: "R$300", g: "R$600" },
  { label: "Meses Inclusos", k: "3", a: "3", g: "6" },
  { label: "Seções", k: "1-2", a: "3-4", g: "5+" },
  { label: "Branding", k: "Básico", a: "Leve", g: "Completo" },
  { label: "Análise Concorrentes", k: "Leve", a: "Sim", g: "Sim + SWOT" },
  { label: "SEO", k: "Não", a: "Básico", g: "Completo" },
  { label: "Acompanhamento", k: "30 dias", a: "30 dias", g: "60 dias" },
  { label: "Revisões", k: "1", a: "2", g: "4" },
  { label: "Mentoria", k: "Não", a: "Não", g: "Sim (mensal)" },
  { label: "Prazo", k: "10-12 dias", a: "14-18 dias", g: "21-28 dias" },
];

const plans: { key: "k" | "a" | "g"; name: string; featured?: boolean }[] = [
  { key: "k", name: "Kickstart" },
  { key: "a", name: "Accelerator", featured: true },
  { key: "g", name: "Growth Machine" },
];

export function ComparisonTable() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="font-script text-2xl text-brand-mid">comparativo →</span>
          <h2 className="mt-2 font-display text-4xl font-black tracking-tight text-ink sm:text-5xl">
            Compare os planos
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink/60">
            Escolha qual faz mais sentido pro seu momento.
          </p>
        </div>

        {/* Desktop / tablet table */}
        <div className="mt-12 hidden md:block overflow-hidden rounded-3xl border border-black/5 bg-white shadow-elegant">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-brand-dark text-white">
                <th className="px-6 py-4 font-display text-base">Feature</th>
                {plans.map((p) => (
                  <th
                    key={p.key}
                    className={`px-6 py-4 font-display text-base ${
                      p.featured ? "bg-brand-mid" : ""
                    }`}
                  >
                    {p.name}
                    {p.featured && (
                      <span className="ml-2 rounded-full bg-brand-neon px-2 py-0.5 text-[10px] font-bold uppercase text-ink">
                        Popular
                      </span>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((f, i) => (
                <tr key={f.label} className={i % 2 === 0 ? "bg-white" : "bg-black/[0.02]"}>
                  <td className="px-6 py-4 font-bold text-ink">{f.label}</td>
                  <td className="px-6 py-4 text-ink/80">{f.k}</td>
                  <td className="px-6 py-4 text-ink/80 bg-brand-neon/10 font-medium">{f.a}</td>
                  <td className="px-6 py-4 text-ink/80">{f.g}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="mt-10 grid gap-5 md:hidden">
          {plans.map((p) => (
            <div
              key={p.key}
              className={`rounded-3xl border p-6 ${
                p.featured ? "border-brand-neon bg-white shadow-elegant" : "border-black/10 bg-white"
              }`}
            >
              <div className="flex items-center gap-2">
                <h3 className="font-display text-2xl font-black text-ink">{p.name}</h3>
                {p.featured && (
                  <span className="rounded-full bg-brand-neon px-2 py-0.5 text-[10px] font-bold uppercase text-ink">
                    Popular
                  </span>
                )}
              </div>
              <ul className="mt-4 divide-y divide-black/5">
                {features.map((f) => (
                  <li key={f.label} className="flex items-center justify-between py-2.5 text-sm">
                    <span className="font-semibold text-ink/70">{f.label}</span>
                    <span className="text-ink">{f[p.key]}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
