const we = [
  "Estratégia de marca",
  "Design do site",
  "Copy que converte",
  "Integração com Instagram/WhatsApp",
  "Acompanhamento de resultados",
  "Suporte técnico",
];

const you = [
  "Gestão de redes sociais (a gente consulta)",
  "Tráfego pago / Ads (você trata, a gente indica)",
  "Email marketing (ferramentas já integradas)",
  "Conteúdo contínuo (você cria, site já tá pronto)",
];

export function Positioning() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <span className="font-script text-2xl text-brand-mid">posicionamento →</span>
          <h2 className="mt-2 font-display text-4xl font-black tracking-tight text-ink sm:text-5xl">
            A gente <em className="text-brand-mid">NÃO</em> faz tudo. E isso é bom.
          </h2>
          <p className="mt-4 text-ink/70">
            Pra entregar melhor, a gente escolheu o que faz bem — e o que o cliente faz.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border-2 border-brand-neon bg-white p-7 shadow-elegant">
            <h3 className="font-display text-xl font-bold text-ink">O que a gente faz</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {we.map((it) => (
                <li key={it} className="flex items-start gap-2.5">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-neon text-ink font-bold text-xs">✓</span>
                  <span className="text-ink/80">{it}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-black/10 bg-white p-7">
            <h3 className="font-display text-xl font-bold text-ink">O que você faz (ou contrata)</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {you.map((it) => (
                <li key={it} className="flex items-start gap-2.5">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-ink/20 text-ink/40 text-xs">○</span>
                  <span className="text-ink/70">{it}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-8 max-w-3xl text-sm text-ink/60">
          <strong className="text-ink">Por que assim?</strong> Você não fica dependente, a gente não se sobrecarrega — e o resultado é melhor pra todos.
        </p>
      </div>
    </section>
  );
}
