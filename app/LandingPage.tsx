import Image from "next/image";
import type { ComponentPropsWithoutRef } from "react";
import MobileMenu from "./MobileMenu";

export const WHATSAPP_URL =
  "https://chat.whatsapp.com/GaIYpxCJBLSKmv4L863dFB";
export const DISCORD_URL = "https://discord.gg/9vxmxCFkDq";

const benefits = [
  {
    title: "Ajuda quando estiver com dúvida",
    description:
      "Explique onde travou e converse com pessoas que também estudam ou trabalham com tecnologia.",
  },
  {
    title: "Feedback em projetos",
    description:
      "Compartilhe o que está construindo e receba sugestões para continuar.",
  },
  {
    title: "Conversas sobre tecnologia e carreira",
    description:
      "Fale sobre programação, dados, inteligência artificial, automação, estudos e mercado de trabalho.",
  },
  {
    title: "Materiais e oportunidades",
    description:
      "Acompanhe cursos, conteúdos, eventos e oportunidades compartilhadas pela comunidade.",
  },
];

const faqItems = [
  {
    question: "A comunidade é realmente gratuita?",
    answer:
      "Sim. Não existe assinatura, período de teste ou cadastro de cartão.",
  },
  {
    question: "Preciso já trabalhar com tecnologia?",
    answer:
      "Não. A comunidade também recebe quem está começando e ainda está conhecendo as diferentes áreas de tecnologia.",
  },
  {
    question: "Qual canal devo escolher?",
    answer:
      "Comece pelo WhatsApp se quiser algo mais familiar e direto. Entre no Discord se preferir dúvidas, projetos e conversas separados por assunto. Você também pode participar dos dois.",
  },
];

type Channel = "whatsapp" | "discord";
type CtaPlacement = "header" | "hero" | "channel-section" | "final";

function WhatsAppIcon(props: ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" {...props}>
      <path d="M16.04 3.2A12.7 12.7 0 0 0 5.1 22.34L3.3 28.9l6.72-1.76a12.73 12.73 0 1 0 6.02-23.94Zm0 22.96c-1.93 0-3.82-.52-5.47-1.5l-.4-.23-3.98 1.04 1.06-3.88-.25-.4a10.24 10.24 0 1 1 9.04 4.97Zm5.62-7.68c-.31-.16-1.82-.9-2.1-1-.28-.1-.49-.16-.7.15-.2.31-.8 1-.98 1.2-.18.21-.36.23-.67.08-.31-.16-1.3-.48-2.48-1.53a9.3 9.3 0 0 1-1.72-2.14c-.18-.31-.02-.48.14-.63.14-.14.31-.36.46-.54.16-.18.21-.31.31-.52.1-.2.05-.38-.02-.54-.08-.15-.7-1.67-.95-2.29-.25-.6-.5-.52-.7-.53h-.59c-.2 0-.54.08-.82.39-.28.3-1.08 1.05-1.08 2.57 0 1.51 1.1 2.97 1.26 3.18.15.2 2.17 3.31 5.25 4.64.74.32 1.31.5 1.76.65.74.23 1.4.2 1.94.12.59-.1 1.82-.75 2.08-1.46.26-.72.26-1.34.18-1.46-.07-.13-.28-.2-.59-.36Z" />
    </svg>
  );
}

function DiscordIcon(props: ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" {...props}>
      <path d="M25.7 7.32a23 23 0 0 0-5.72-1.77c-.25.45-.54 1.06-.74 1.54a21.4 21.4 0 0 0-6.47 0 16 16 0 0 0-.75-1.54A23.2 23.2 0 0 0 6.3 7.33C2.68 12.7 1.7 17.96 2.19 23.14a23.6 23.6 0 0 0 7.02 3.54c.57-.76 1.07-1.58 1.5-2.44-.82-.3-1.6-.68-2.35-1.13.2-.14.4-.3.58-.45a16.55 16.55 0 0 0 14.12 0c.2.16.39.3.58.45-.75.45-1.54.83-2.35 1.13.43.86.93 1.68 1.5 2.44a23.5 23.5 0 0 0 7.02-3.54c.58-6-1-11.22-4.11-15.82ZM11.28 20c-1.38 0-2.5-1.26-2.5-2.8 0-1.55 1.1-2.81 2.5-2.81 1.4 0 2.53 1.27 2.5 2.8 0 1.55-1.1 2.81-2.5 2.81Zm9.44 0c-1.38 0-2.5-1.26-2.5-2.8 0-1.55 1.1-2.81 2.5-2.81 1.4 0 2.53 1.27 2.5 2.8 0 1.55-1.1 2.81-2.5 2.81Z" />
    </svg>
  );
}

function ChevronIcon(props: ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      {...props}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function ChannelLink({
  channel,
  href,
  label,
  placement,
  compactLabel,
  className = "",
}: {
  channel: Channel;
  href: string;
  label: string;
  placement: CtaPlacement;
  compactLabel?: string;
  className?: string;
}) {
  const isWhatsApp = channel === "whatsapp";
  const destination = isWhatsApp
    ? "a página do grupo"
    : "o convite para o servidor";

  return (
    <a
      className={`channel-button channel-button--${channel} ${className}`.trim()}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} — abre ${destination} em uma nova aba`}
      data-cta-channel={channel}
      data-cta-placement={placement}
    >
      {isWhatsApp ? (
        <WhatsAppIcon aria-hidden="true" />
      ) : (
        <DiscordIcon aria-hidden="true" />
      )}
      <span className={compactLabel ? "channel-button__full-label" : undefined}>
        {label}
      </span>
      {compactLabel ? (
        <span className="channel-button__compact-label" aria-hidden="true">
          {compactLabel}
        </span>
      ) : null}
    </a>
  );
}

export default function LandingPage() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#conteudo-principal">
        Pular para o conteúdo principal
      </a>

      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#inicio" aria-label="Pacheco Lab — início">
            <Image
              src="/pacheco-lab-logo.png"
              alt=""
              width={44}
              height={44}
              priority
            />
            <span>Pacheco Lab</span>
          </a>

          <nav className="header-nav" aria-label="Navegação principal">
            <a href="#beneficios">O que você encontra</a>
            <a href="#canais">WhatsApp e Discord</a>
          </nav>

          <div className="header-actions">
            <ChannelLink
              channel="whatsapp"
              href={WHATSAPP_URL}
              label="Entrar no WhatsApp"
              compactLabel="Entrar"
              placement="header"
              className="header-button"
            />
            <MobileMenu />
          </div>
        </div>
      </header>

      <main id="conteudo-principal">
        <section id="inicio" className="hero-section" aria-labelledby="hero-title">
          <div className="container hero-content">
            <p className="eyebrow">Comunidade gratuita de tecnologia</p>
            <h1 id="hero-title">Você não precisa aprender tecnologia sozinho.</h1>
            <p className="hero-description">
              O Pacheco Lab reúne pessoas que estão começando, estudando ou
              trabalhando com tecnologia para tirar dúvidas, mostrar projetos e
              conversar sobre programação, dados, automação e carreira.
            </p>

            <div className="hero-actions" aria-label="Opções para entrar na comunidade">
              <ChannelLink
                channel="whatsapp"
                href={WHATSAPP_URL}
                label="Entrar no grupo do WhatsApp"
                placement="hero"
              />
              <ChannelLink
                channel="discord"
                href={DISCORD_URL}
                label="Entrar no servidor do Discord"
                placement="hero"
              />
            </div>

            <p className="hero-channel-note">
              WhatsApp para conversas rápidas · Discord para dúvidas e projetos organizados.
            </p>
          </div>
        </section>

        <section
          id="beneficios"
          className="section benefits-section"
          aria-labelledby="benefits-title"
        >
          <div className="container benefits-layout">
            <div className="section-heading benefits-heading">
              <p className="eyebrow">O que você encontra</p>
              <h2 id="benefits-title">Ajuda prática para aprender e continuar</h2>
              <p>
                Um espaço para perguntar, compartilhar e acompanhar outras pessoas da área.
              </p>
            </div>

            <div className="benefits-list">
              {benefits.map((benefit) => (
                <article key={benefit.title}>
                  <span className="benefit-mark" aria-hidden="true">✓</span>
                  <div>
                    <h3>{benefit.title}</h3>
                    <p>{benefit.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section founder-section" aria-labelledby="founder-title">
          <div className="container founder-layout">
            <div className="founder-mark" aria-hidden="true">
              <Image
                src="/pacheco-lab-logo.png"
                alt=""
                width={112}
                height={112}
              />
            </div>
            <div className="founder-copy">
              <p className="eyebrow">Quem criou o Pacheco Lab</p>
              <h2 id="founder-title">Uma comunidade feita por pessoas reais</h2>
              <p>
                Sou Gabriel Pacheco, estudante e profissional de tecnologia. Criei
                o Pacheco Lab para reunir pessoas que querem aprender, trocar ajuda
                e tirar projetos do papel sem precisar estudar tudo sozinhas.
              </p>
            </div>
            {/* TODO: Adicionar no máximo duas capturas reais, autorizadas e anonimizadas da comunidade quando os arquivos estiverem disponíveis. */}
          </div>
        </section>

        <section id="canais" className="section how-section" aria-labelledby="how-title">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">WhatsApp e Discord</p>
              <h2 id="how-title">Escolha onde participar</h2>
              <p>
                Os dois espaços são gratuitos. Comece pelo que for mais familiar para você.
              </p>
            </div>

            <div className="channel-grid">
              <article className="channel-card channel-card--whatsapp">
                <div className="channel-card__title">
                  <span className="platform-icon platform-icon--whatsapp">
                    <WhatsAppIcon aria-hidden="true" />
                  </span>
                  <div>
                    <p>Para avisos e conversas rápidas</p>
                    <h3>WhatsApp</h3>
                  </div>
                </div>
                <p>
                  Uma forma simples de acompanhar novidades e conversar rapidamente
                  com a comunidade.
                </p>
                <ChannelLink
                  channel="whatsapp"
                  href={WHATSAPP_URL}
                  label="Entrar no grupo do WhatsApp"
                  placement="channel-section"
                />
              </article>

              <article className="channel-card channel-card--discord">
                <div className="channel-card__title">
                  <span className="platform-icon platform-icon--discord">
                    <DiscordIcon aria-hidden="true" />
                  </span>
                  <div>
                    <p>Para dúvidas e projetos organizados</p>
                    <h3>Discord</h3>
                  </div>
                </div>
                <p>
                  Um espaço com canais separados para dúvidas, projetos e diferentes
                  assuntos de tecnologia.
                </p>
                <p className="discord-explanation">
                  Pense no Discord como um lugar com várias salas, cada uma dedicada a um assunto.
                </p>
                <ChannelLink
                  channel="discord"
                  href={DISCORD_URL}
                  label="Entrar no servidor do Discord"
                  placement="channel-section"
                />
              </article>
            </div>
          </div>
        </section>

        <section id="duvidas" className="section faq-section" aria-labelledby="faq-title">
          <div className="container faq-layout">
            <div className="section-heading faq-heading">
              <p className="eyebrow">Dúvidas frequentes</p>
              <h2 id="faq-title">Dúvidas antes de entrar</h2>
            </div>

            <div className="faq-list">
              {faqItems.map((item) => (
                <details key={item.question}>
                  <summary>
                    <span>{item.question}</span>
                    <ChevronIcon aria-hidden="true" />
                  </summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section final-cta-section" aria-labelledby="final-title">
          <div className="container final-cta">
            <div>
              <p className="eyebrow">Acesso gratuito</p>
              <h2 id="final-title">Entre pelo espaço que combina mais com você.</h2>
              <p>
                Comece pelo WhatsApp ou participe das conversas organizadas no Discord.
              </p>
            </div>
            <div className="final-actions">
              <ChannelLink
                channel="whatsapp"
                href={WHATSAPP_URL}
                label="Entrar no grupo do WhatsApp"
                placement="final"
              />
              <ChannelLink
                channel="discord"
                href={DISCORD_URL}
                label="Entrar no servidor do Discord"
                placement="final"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>Pacheco Lab · Comunidade gratuita de tecnologia</p>
        </div>
      </footer>
    </div>
  );
}
