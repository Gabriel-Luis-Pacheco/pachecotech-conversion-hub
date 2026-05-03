const services = [
  {
    tag: "Marketing & Briefing",
    title: "Estratégia antes de tudo",
    desc: "Diagnóstico do negócio, persona, análise de concorrentes, posicionamento de marca e estrutura de funil.",
    chips: ["#briefing", "#estratégia", "#persona"],
    illustration: <MarketingIllustration />,
    accent: "#60A5FA",
  },
  {
    tag: "Branding & Identidade",
    title: "Identidade que conecta",
    desc: "Identidade visual, paleta de cores, tipografia, tom de voz e posicionamento visual da marca.",
    chips: ["#branding", "#identidade", "#design"],
    illustration: <BrandingIllustration />,
    accent: "#FACC15",
  },
  {
    tag: "Site Profissional",
    title: "Página que converte",
    desc: "Landing page responsiva, copy estratégica, integração com Instagram/WhatsApp, domínio configurado.",
    chips: ["#landing", "#conversão", "#seguro"],
    illustration: <SiteIllustration />,
    accent: "#22C55E",
  },
];

export function Deliverables() {
  return (
    <section id="servicos" className="relative bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <span className="rounded-full bg-brand-neon/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-mid">
            O que você recebe
          </span>
          <h2 className="mt-4 font-display text-4xl font-black leading-tight tracking-tight text-ink sm:text-5xl">
            Não é só um site. É um <em className="text-brand-mid">sistema</em> de vendas.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {services.map((s) => (
            <article key={s.title} className="group relative flex flex-col overflow-hidden rounded-3xl border border-black/5 bg-white p-7 transition-all hover:-translate-y-1 hover:shadow-elegant">
              <div className="flex h-44 items-center justify-center rounded-2xl" style={{ backgroundColor: `${s.accent}1A` }}>
                {s.illustration}
              </div>
              <span className="mt-6 text-xs font-bold uppercase tracking-wider" style={{ color: s.accent === "#FACC15" ? "#92580E" : s.accent }}>
                {s.tag}
              </span>
              <h3 className="mt-2 font-display text-2xl font-bold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{s.desc}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {s.chips.map((c) => (
                  <span key={c} className="rounded-full bg-ink/5 px-2.5 py-1 text-xs font-medium text-ink/70">{c}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function MarketingIllustration() {
  return (
    <svg viewBox="0 0 200 140" className="h-32 w-auto">
      <circle cx="60" cy="55" r="22" fill="#0D3D2C" />
      <circle cx="60" cy="46" r="9" fill="#F0FDF4" />
      <rect x="44" y="58" width="32" height="28" rx="14" fill="#F0FDF4" />
      <rect x="100" y="30" width="80" height="60" rx="6" fill="#fff" stroke="#0D3D2C" strokeWidth="2"/>
      <polyline points="108,78 124,60 138,68 156,42 172,52" stroke="#22C55E" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="172" cy="52" r="4" fill="#22C55E"/>
      <path d="M30 110 Q 100 130, 175 105" stroke="#FACC15" strokeWidth="3" fill="none" strokeLinecap="round" strokeDasharray="4 4"/>
    </svg>
  );
}
function BrandingIllustration() {
  return (
    <svg viewBox="0 0 200 140" className="h-32 w-auto">
      <circle cx="55" cy="70" r="32" fill="#0D3D2C" />
      <circle cx="42" cy="60" r="7" fill="#22C55E" />
      <circle cx="62" cy="55" r="7" fill="#FACC15" />
      <circle cx="72" cy="72" r="7" fill="#60A5FA" />
      <circle cx="58" cy="86" r="7" fill="#F0FDF4" />
      <text x="115" y="60" fontFamily="serif" fontSize="32" fontWeight="900" fill="#0D3D2C" fontStyle="italic">Aa</text>
      <rect x="115" y="78" width="60" height="6" rx="3" fill="#22C55E"/>
      <rect x="115" y="92" width="40" height="6" rx="3" fill="#FACC15"/>
    </svg>
  );
}
function SiteIllustration() {
  return (
    <svg viewBox="0 0 200 140" className="h-32 w-auto">
      <rect x="20" y="20" width="160" height="100" rx="8" fill="#0A0F0D"/>
      <circle cx="30" cy="30" r="2.5" fill="#FACC15"/>
      <circle cx="38" cy="30" r="2.5" fill="#22C55E"/>
      <circle cx="46" cy="30" r="2.5" fill="#60A5FA"/>
      <rect x="30" y="44" width="80" height="8" rx="4" fill="#22C55E"/>
      <rect x="30" y="58" width="100" height="4" rx="2" fill="#fff" opacity="0.4"/>
      <rect x="30" y="68" width="70" height="4" rx="2" fill="#fff" opacity="0.4"/>
      <rect x="30" y="84" width="50" height="20" rx="10" fill="#22C55E"/>
      <rect x="120" y="60" width="50" height="44" rx="6" fill="#166534"/>
      <polyline points="128,96 140,82 150,88 162,72" stroke="#22C55E" strokeWidth="2.5" fill="none"/>
    </svg>
  );
}
