import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, openInstagramDM } from "@/lib/contact";

const schema = z.object({
  name: z.string().trim().min(2, "Informe seu nome").max(80),
  contact: z.string().trim().min(3, "Informe um contato válido").max(120),
  message: z.string().trim().min(10, "Conte um pouco sobre seu projeto").max(800),
});

export function FinalCTA() {
  const [form, setForm] = useState({ name: "", contact: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const errs: Record<string, string> = {};
      for (const issue of result.error.issues) {
        errs[issue.path[0] as string] = issue.message;
      }
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);
    const text =
      `Olá! Sou ${result.data.name}.\n` +
      `Contato: ${result.data.contact}\n\n` +
      `${result.data.message}`;
    openInstagramDM(text);
    toast.success("Mensagem copiada!", {
      description: `Cole na DM de @${INSTAGRAM_HANDLE} (já abrimos em outra aba).`,
    });
    setLoading(false);
  }

  return (
<section id="contato" className="relative overflow-hidden bg-[#22C55E] py-20 text-white sm:py-28">
      <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-white/10 blur-3xl" />
<div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-green-500/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">
            Próximo passo
          </span>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Vamos fazer sua página trabalhar por você.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-white/85 sm:text-lg">
            Conte rapidamente sobre o seu negócio. Em seguida converso com você no Instagram
            para entender o cenário e indicar o melhor caminho.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-12 bg-white px-6 text-base font-semibold text-primary hover:bg-white/90"
            >
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                Chamar no Instagram
              </a>
            </Button>
          </div>
          <p className="mt-6 text-sm text-white/70">
            Direto: <span className="font-semibold text-white">@{INSTAGRAM_HANDLE}</span>
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-2xl border border-white/15 bg-white/95 p-6 text-foreground shadow-elegant backdrop-blur sm:p-8"
        >
          <h3 className="text-xl font-bold">Solicitar projeto</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Preencha e enviamos sua mensagem direto para a DM.
          </p>
          <div className="mt-5 space-y-4">
            <Field
              label="Nome"
              error={errors.name}
              input={
                <Input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Seu nome"
                  maxLength={80}
                />
              }
            />
            <Field
              label="Contato (Instagram, e-mail ou telefone)"
              error={errors.contact}
              input={
                <Input
                  value={form.contact}
                  onChange={(e) => setForm({ ...form, contact: e.target.value })}
                  placeholder="@seuusuario / email@dominio.com"
                  maxLength={120}
                />
              }
            />
            <Field
              label="Sobre o projeto"
              error={errors.message}
              input={
                <Textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="O que você faz, qual o público e o que precisa resolver."
                  rows={5}
                  maxLength={800}
                />
              }
            />
          </div>
          <Button
            type="submit"
            disabled={loading}
            className="mt-6 h-12 w-full bg-primary text-base font-semibold text-primary-foreground hover:bg-primary/90"
          >
            {loading ? "Enviando..." : "Enviar pelo Instagram"}
          </Button>
          <p className="mt-3 text-xs text-muted-foreground">
            Sua mensagem é copiada e abrimos o Instagram em uma nova aba — basta colar na DM.
          </p>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  input,
  error,
}: {
  label: string;
  input: React.ReactNode;
  error?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-foreground">{label}</span>
      {input}
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}
