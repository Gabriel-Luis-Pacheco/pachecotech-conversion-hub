const cases = [
  { emoji: "🔧", who: "Prestador local", problem: "Site institucional que ninguém acha.", solution: "Página com SEO local, copy clara e CTA direto.", result: "Mais orçamentos por semana." },
  { emoji: "🎓", who: "Coach / Consultor", problem: "Vende no boca-a-boca, sem escala.", solution: "Funil estratégico com posicionamento e prova.", result: "Agenda lotada de calls qualificadas." },
  { emoji: "📚", who: "Criador de infoproduto", problem: "Tráfego não vira venda.", solution: "Landing focada em copy de conversão e oferta.", result: "Taxa de conversão multiplicada." },
];

export function UseCases() {
  return (
    <section className="relative bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <span className="font-script text-2xl text-brand-mid">isso é pra você se →</span>
          <h2 className="mt-2 font-display text-4xl font-black tracking-tight text-ink sm:text-5xl">
            Para quem trabalho.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {cases.map((c) => (
            <div key={c.who} className="group rounded-3xl border border-black/5 bg-white p-7 transition-all hover:-translate-y-1 hover:shadow-elegant">
              <div className="text-5xl">{c.emoji}</div>
              <h3 className="mt-4 font-display text-2xl font-bold text-ink">{c.who}</h3>
              <div className="mt-5 space-y-3 text-sm">
                <Row label="Problema" text={c.problem} color="text-red-500" />
                <Row label="Solução" text={c.solution} color="text-brand-mid" />
              </div>
              <div className="mt-5 rounded-2xl bg-brand-neon/15 px-4 py-3">
                <p className="text-xs font-bold uppercase tracking-wider text-brand-mid">Resultado</p>
                <p className="mt-0.5 font-semibold text-ink">{c.result}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Row({ label, text, color }: { label: string; text: string; color: string }) {
  return (
    <div>
      <p className={`text-xs font-bold uppercase tracking-wider ${color}`}>{label}</p>
      <p className="mt-0.5 text-ink/80">{text}</p>
    </div>
  );
}
