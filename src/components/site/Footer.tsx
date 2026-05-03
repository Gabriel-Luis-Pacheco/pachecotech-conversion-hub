import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/contact";

export function Footer() {
  return (
    <footer className="bg-ink py-14 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-3">
        <div>
          <a href="#top" className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-neon text-ink font-display font-black">P</span>
            <span className="font-display text-xl font-bold">
              pacheco<span className="text-brand-neon">tech</span>
            </span>
          </a>
          <p className="mt-2 font-script text-lg text-brand-yellow">landing pages que geram cliente</p>
          <p className="mt-4 max-w-xs text-sm text-white/60">
            Processo transparente. Resultado garantido — se não funcionar, ajustamos GRÁTIS no escopo.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white/50">Navegar</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li><a href="#processo" className="hover:text-white">Como funciona</a></li>
            <li><a href="#planos" className="hover:text-white">Planos</a></li>
            <li><a href="#contato" className="hover:text-white">Contato</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white/50">Para quem quer crescer</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-brand-neon hover:underline">
                Instagram: @{INSTAGRAM_HANDLE}
              </a>
            </li>
            <li>
              <a href="mailto:pachecoprog@gmail.com" className="text-white/70 hover:text-white">
                Email: pachecoprog@gmail.com
              </a>
            </li>
          </ul>
          <p className="mt-4 text-xs text-white/50">
            Não temos WhatsApp profissional ainda (uso só o Instagram). Respondo em até 24h em qualquer plataforma.
          </p>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-6xl border-t border-white/10 px-4 pt-6 text-xs text-white/40 sm:px-6">
        © {new Date().getFullYear()} PachecoTech — Landing pages que geram cliente.
      </div>
    </footer>
  );
}
