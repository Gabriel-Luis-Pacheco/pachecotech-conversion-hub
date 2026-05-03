import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/contact";

export function Footer() {
  return (
    <footer className="bg-ink py-12 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:px-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <a href="#top" className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-neon text-ink font-display font-black">P</span>
            <span className="font-display text-xl font-bold">
              pacheco<span className="text-brand-neon">tech</span>
            </span>
          </a>
          <p className="mt-2 font-script text-lg text-brand-yellow">páginas que geram clientes</p>
        </div>
        <div className="flex flex-wrap items-center gap-6 text-sm text-white/60">
          <a href="#processo" className="hover:text-white">Como funciona</a>
          <a href="#servicos" className="hover:text-white">Serviços</a>
          <a href="#planos" className="hover:text-white">Planos</a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-brand-neon hover:underline">@{INSTAGRAM_HANDLE}</a>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-6xl border-t border-white/10 px-4 pt-6 text-xs text-white/40 sm:px-6">
        © {new Date().getFullYear()} PachecoTech — Todos os direitos reservados.
      </div>
    </footer>
  );
}
