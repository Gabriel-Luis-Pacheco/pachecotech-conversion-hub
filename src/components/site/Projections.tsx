const chips = [
  { icon: "🎨", label: "Branding" },
  { icon: "📋", label: "Marketing" },
  { icon: "💻", label: "Web Design" },
  { icon: "🔒", label: "Segurança" },
  { icon: "📊", label: "Estratégia" },
];

export function Projections() {
  return (
    <section className="bg-cream py-14 border-y border-black/5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
        <p className="text-sm font-medium text-ink/60">Processo que combina:</p>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          {chips.map((c) => (
            <span key={c.label} className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-ink shadow-sm">
              <span>{c.icon}</span> {c.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
