import { Button } from "@/components/ui/button";
import { INSTAGRAM_HANDLE, openInstagram } from "@/lib/contact";
import { useState } from "react";

export function FinalCTA() {
  const [name, setName] = useState("");
  const [project, setProject] = useState("");

  // Quick action - open Instagram
  function handleInstagram() {
    // For Instagram, we'll show a simple message they can copy
    if (name) {
      // Copy to clipboard if they entered a name
      const msg = `Olá! Meu nome é ${name}. Quero falar sobre meu projeto: ${project || "(describe brevemente)"}`;
      navigator.clipboard.writeText(msg).catch(() => {});
    }
    openInstagram();
  }

  return (
    <section id="contato" className="relative overflow-hidden bg-gradient-to-br from-emerald-600 to-green-600 py-20 text-white sm:py-28">
      {/* Background effects */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-green-400/20 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            Pronto para começar
          </span>
          
          <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Vamos transformar sua presença digital?
          </h2>
          
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
            Manda uma mensagem no Instagram. Respondo em poucas horas.
          </p>
        </div>

        {/* Instagram Button */}
        <div className="mt-10 flex justify-center">
          <button
            onClick={handleInstagram}
            className="group relative flex items-center gap-4 rounded-2xl border border-white/20 bg-white/10 p-5 text-left backdrop-blur-sm transition-all hover:bg-white/20 hover:shadow-lg"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-tr from-yellow-400 via-orange-500 to-purple-600 text-white">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.668.014-4.952.071-4.697.289-6.864 2.437-7.153 6.153-.058 1.284-.072 1.688-.072 4.952 0 3.259.014 3.668.072 4.952.289 4.697 2.437 6.864 7.153 7.152 1.281.058 1.689.072 4.952.072 3.259 0 3.668-.014 4.952-.072 4.697-.289 6.864-2.437 7.153-7.152.058-1.284.072-1.692.072-4.952 0-3.259-.014-3.667-.072-4.951-.289-4.697-2.437-6.864-7.153-7.153-1.281-.058-1.69-.072-4.952-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="font-semibold">Instagram</p>
              <p className="text-sm text-white/70">@{INSTAGRAM_HANDLE}</p>
            </div>
            <svg className="h-5 w-5 text-white/50 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Quick message builder */}
        <div className="mt-10 rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm sm:p-6">
          <p className="text-center text-sm font-medium text-white/90">
            Quer que eu prepare a mensagem? 👇
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Seu nome (opcional)"
              className="rounded-lg border border-white/20 bg-white/90 px-4 py-3 text-foreground placeholder:text-gray-400 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/30"
            />
            <input
              type="text"
              value={project}
              onChange={(e) => setProject(e.target.value)}
              placeholder="Do que você precisa? (opcional)"
              className="rounded-lg border border-white/20 bg-white/90 px-4 py-3 text-foreground placeholder:text-gray-400 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/30"
            />
          </div>
          <p className="mt-3 text-center text-xs text-white/60">
            A mensagem é copiada automaticamente ao clicar no botão do Instagram
          </p>
        </div>
      </div>
    </section>
  );
}
