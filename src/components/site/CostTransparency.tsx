export function CostTransparency() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center">
          <span className="font-script text-2xl text-brand-mid">transparência →</span>
          <h2 className="mt-2 font-display text-3xl font-black tracking-tight text-ink sm:text-4xl">
            Transparência de custos
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl border border-black/10 bg-cream p-6">
            <h3 className="font-display text-lg font-bold text-ink">Seu investimento cobre</h3>
            <ul className="mt-3 space-y-1.5 text-sm text-ink/70">
              <li>• Design estratégico e site responsivo</li>
              <li>• Hospedagem segura (Hostinger)</li>
              <li>• Domínio configurado</li>
              <li>• Acompanhamento 30-60 dias</li>
              <li>• Suporte técnico no período</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-black/10 bg-cream p-6">
            <h3 className="font-display text-lg font-bold text-ink">Custos externos do cliente</h3>
            <ul className="mt-3 space-y-1.5 text-sm text-ink/70">
              <li>• Domínio: ~R$50-100/ano (registrador)</li>
              <li>• Hospedagem: ~R$15-30/mês (provedora)</li>
            </ul>
            <p className="mt-3 text-xs text-ink/50">Você paga direto pra provedora — sem intermediário.</p>
          </div>
          <div className="rounded-2xl border-2 border-brand-neon bg-cream p-6">
            <h3 className="font-display text-lg font-bold text-ink">Mensalidade (opcional)</h3>
            <p className="mt-3 text-sm text-ink/70">
              Cobre acompanhamento, otimizações e consultoria contínua. Sem vínculo — cancela quando quiser.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
