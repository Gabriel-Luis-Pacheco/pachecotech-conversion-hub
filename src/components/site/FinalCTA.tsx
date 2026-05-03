import { useState } from "react";
import { INSTAGRAM_URL, WHATSAPP_URL, openWhatsApp } from "@/lib/contact";
import { toast } from "sonner";

export function FinalCTA() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [project, setProject] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !project.trim()) {
      toast.error("Preencha pelo menos seu nome e o projeto.");
      return;
    }
    const msg = `Olá! Sou ${name}.${contact ? ` Contato: ${contact}.` : ""} Projeto: ${project}`;
    navigator.clipboard?.writeText(msg).catch(() => {});
    toast.success("Mensagem copiada! Abrindo WhatsApp…");
    openWhatsApp(msg);
  }

  return (
    <section id="contato" className="relative overflow-hidden bg-brand-dark py-20 text-white sm:py-28">
      <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-brand-neon/25 blur-3xl animate-blob" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-brand-blue/15 blur-3xl animate-blob" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="font-script text-2xl text-brand-yellow">vamos conversar →</span>
          <h2 className="mt-2 font-display text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Vamos fazer sua página <em className="text-brand-neon">trabalhar</em> por você.
          </h2>
          <p className="mt-5 max-w-md text-white/70">
            Manda uma mensagem. Respondo em poucas horas e marco uma conversa estratégica gratuita.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-6 font-semibold text-ink transition-all hover:scale-[1.03]">
              <span>📷</span> Instagram
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-neon px-6 font-semibold text-ink transition-all hover:scale-[1.03] hover:shadow-neon">
              <span>💬</span> WhatsApp
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-3xl border border-white/15 bg-white/[0.06] p-6 backdrop-blur-xl sm:p-8">
          <div className="space-y-4">
            <Field label="Seu nome" value={name} onChange={setName} placeholder="Como te chamamos?" />
            <Field label="Contato" value={contact} onChange={setContact} placeholder="Email ou telefone" />
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-white/60">Projeto</label>
              <textarea value={project} onChange={(e) => setProject(e.target.value)} rows={4}
                placeholder="Conta um pouco do seu negócio e o que você precisa…"
                maxLength={1000}
                className="mt-1.5 w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-brand-neon focus:outline-none focus:ring-2 focus:ring-brand-neon/30" />
            </div>
            <button type="submit"
              className="inline-flex w-full h-12 items-center justify-center gap-2 rounded-full bg-brand-neon font-semibold text-ink transition-all hover:scale-[1.02] hover:shadow-neon">
              Enviar mensagem <span aria-hidden>→</span>
            </button>
            <p className="text-center text-xs text-white/50">Ao enviar, sua mensagem será aberta no WhatsApp pronta pra mandar.</p>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({ label, value, onChange, placeholder }: { label: string; value: string; onChange: (v: string) => void; placeholder: string }) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-wider text-white/60">{label}</label>
      <input type="text" value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} maxLength={150}
        className="mt-1.5 w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-brand-neon focus:outline-none focus:ring-2 focus:ring-brand-neon/30" />
    </div>
  );
}
