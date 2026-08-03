"use client";

import {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  BellRing,
  BookOpenCheck,
  Braces,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  CircleHelp,
  Code2,
  FolderGit2,
  Handshake,
  Hash,
  Layers3,
  Menu,
  MessageCircle,
  MessagesSquare,
  Network,
  Radio,
  Rocket,
  ShieldCheck,
  UsersRound,
  X,
} from "lucide-react";

export const WHATSAPP_URL =
  "https://chat.whatsapp.com/GxaDRr8NWmYGsbYmjp7vCN?s=sh&p=i&ilr=2&amv=1";
export const DISCORD_URL = "https://discord.gg/9vxmxCFkDq";

const OrbCanvas = dynamic(() => import("./OrbCanvas"), { ssr: false });

const navItems = [
  { label: "A comunidade", href: "#comunidade" },
  { label: "O que você encontra", href: "#beneficios" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Canais", href: "#canais" },
  { label: "Dúvidas", href: "#duvidas" },
];

const benefits = [
  {
    title: "Troca com pessoas da área",
    text: "Converse com quem também estuda, trabalha ou está construindo uma trajetória em tecnologia.",
    icon: UsersRound,
  },
  {
    title: "Dúvidas e aprendizado coletivo",
    text: "Compartilhe o contexto do que travou e encontre caminhos para continuar aprendendo.",
    icon: CircleHelp,
  },
  {
    title: "Projetos com feedback",
    text: "Mostre o que está criando, registre avanços e receba sugestões úteis da comunidade.",
    icon: FolderGit2,
  },
  {
    title: "Conteúdo e avisos importantes",
    text: "Acompanhe materiais, novidades do canal, cursos e referências selecionadas.",
    icon: BookOpenCheck,
  },
  {
    title: "Iniciativas que aproximam",
    text: "Participe de desafios, encontros, oportunidades e outras ações que surgirem no Lab.",
    icon: Radio,
  },
];

const steps = [
  {
    title: "Escolha por onde entrar",
    text: "Entre no WhatsApp para acompanhar o dia a dia ou no Discord para conversas organizadas por tema.",
    icon: MessageCircle,
  },
  {
    title: "Chegue sem burocracia",
    text: "O acesso é gratuito. Não existe checkout, período de teste, cartão ou assinatura.",
    icon: ShieldCheck,
  },
  {
    title: "Apresente-se",
    text: "Conte o que você estuda, no que está trabalhando e quais assuntos quer explorar.",
    icon: MessagesSquare,
  },
  {
    title: "Participe no seu ritmo",
    text: "Faça perguntas, compartilhe projetos e contribua quando puder. A troca é o que mantém o Lab vivo.",
    icon: Rocket,
  },
];

const faqItems = [
  {
    question: "A entrada é realmente gratuita?",
    answer:
      "Sim. Você não precisa cadastrar cartão, iniciar teste ou contratar uma assinatura para participar do Pacheco Lab.",
  },
  {
    question: "Preciso já trabalhar com tecnologia?",
    answer:
      "Não. A comunidade recebe tanto quem está começando quanto quem já trabalha na área e quer trocar experiências.",
  },
  {
    question: "Quais assuntos fazem parte da comunidade?",
    answer:
      "Programação, dados, inteligência artificial, automação, projetos, estudos e carreira em tecnologia.",
  },
  {
    question: "Qual é a diferença entre WhatsApp e Discord?",
    answer:
      "O WhatsApp aproxima avisos e conversas rápidas. O Discord organiza dúvidas, projetos e assuntos técnicos em canais separados.",
  },
  {
    question: "O Pacheco Lab é um curso?",
    answer:
      "Não. É uma comunidade ligada aos conteúdos e às iniciativas do Pacheco Lab. Materiais e cursos podem ser compartilhados, mas a proposta principal é a troca contínua.",
  },
  {
    question: "Existe promessa de emprego ou resultado?",
    answer:
      "Não. A comunidade cria espaço para aprender, compartilhar oportunidades e conhecer pessoas, sem prometer renda, vaga ou resultado automático.",
  },
];

function HeroOrb({ reducedMotion }: { reducedMotion: boolean }) {
  const [canRender, setCanRender] = useState(false);

  useEffect(() => {
    const canvas = document.createElement("canvas");
    const memory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory;
    const lowPower =
      (memory !== undefined && memory <= 4) || navigator.hardwareConcurrency <= 4;
    const webgl = Boolean(
      canvas.getContext("webgl2") || canvas.getContext("webgl"),
    );
    const timer = window.setTimeout(
      () => setCanRender(webgl && !lowPower && !reducedMotion),
      80,
    );
    return () => window.clearTimeout(timer);
  }, [reducedMotion]);

  return (
    <div className="orb-wrap" aria-hidden="true">
      <div className="orb-halo" />
      <div className="orb-fallback">
        <span className="orb-core" />
        <span className="orb-ring orb-ring-one" />
        <span className="orb-ring orb-ring-two" />
        <span className="orb-ring orb-ring-three" />
        <i className="orb-node node-a" />
        <i className="orb-node node-b" />
        <i className="orb-node node-c" />
        <i className="orb-node node-d" />
      </div>
      {canRender && (
        <div className="orb-canvas">
          <OrbCanvas reducedMotion={reducedMotion} />
        </div>
      )}
    </div>
  );
}

function JoinLink({
  children,
  href = WHATSAPP_URL,
  variant = "primary",
  className = "",
}: {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "quiet";
  className?: string;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`button button-${variant} ${className}`}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.985 }}
    >
      <span>{children}</span>
      <ArrowUpRight size={18} aria-hidden="true" />
    </motion.a>
  );
}

export default function LandingPage() {
  const root = useRef<HTMLDivElement>(null);
  const progress = useRef<HTMLDivElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showMobileCta, setShowMobileCta] = useState(false);
  const [decisionAreaVisible, setDecisionAreaVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [reducedMotion, setReducedMotion] = useState(false);

  const particles = useMemo(
    () =>
      Array.from({ length: 18 }, (_, index) => ({
        left: `${(index * 41 + 7) % 100}%`,
        top: `${(index * 59 + 13) % 100}%`,
        size: `${1 + (index % 2)}px`,
        delay: `${-((index * 0.47) % 8)}s`,
        duration: `${11 + (index % 6)}s`,
      })),
    [],
  );

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const total = Math.max(doc.scrollHeight - window.innerHeight, 1);
      setScrolled(window.scrollY > 32);
      setShowMobileCta(
        window.scrollY > Math.min(640, window.innerHeight * 0.78) &&
          window.scrollY < total - 360,
      );
      if (window.scrollY < window.innerHeight * 0.45) setActiveSection("");
      if (progress.current) {
        progress.current.style.transform = `scaleX(${window.scrollY / total})`;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const visibleAreas = new Set<Element>();
    const elements = ["#acesso-gratuito", ".final-cta-section"]
      .map((selector) => document.querySelector(selector))
      .filter(Boolean) as Element[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visibleAreas.add(entry.target);
          else visibleAreas.delete(entry.target);
        });
        setDecisionAreaVisible(visibleAreas.size > 0);
      },
      { threshold: 0.08 },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean) as Element[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-34% 0px -56%", threshold: 0 },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [mobileOpen]);

  useLayoutEffect(() => {
    if (!root.current) return;
    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      if (reducedMotion) {
        gsap.set(
          ".hero-kicker, .hero-line span, .hero-copy, .hero-actions, .hero-trust, .reveal, .benefit-row, .step",
          { clearProps: "all", opacity: 1, y: 0 },
        );
        return;
      }

      const intro = gsap.timeline({ defaults: { ease: "expo.out" } });
      intro
        .fromTo(".hero-kicker", { y: 12, opacity: 0 }, { y: 0, opacity: 1, duration: 0.42 })
        .fromTo(
          ".hero-line span",
          { yPercent: 108 },
          { yPercent: 0, duration: 0.88, stagger: 0.08 },
          "-=0.18",
        )
        .fromTo(".hero-copy", { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.55 }, "-=0.46")
        .fromTo(".hero-actions", { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, "-=0.36")
        .fromTo(".hero-trust", { opacity: 0 }, { opacity: 1, duration: 0.45 }, "-=0.2");

      gsap.to(".orb-wrap", {
        y: 74,
        scale: 1.06,
        opacity: 0.72,
        ease: "none",
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.utils.toArray<HTMLElement>(".reveal").forEach((element) => {
        gsap.fromTo(
          element,
          { y: 24 },
          {
            y: 0,
            duration: 0.72,
            ease: "quart.out",
            scrollTrigger: { trigger: element, start: "top 88%", once: true },
          },
        );
      });

      gsap.fromTo(
        ".benefit-row",
        { x: 20 },
        {
          x: 0,
          duration: 0.5,
          stagger: 0.055,
          ease: "quart.out",
          scrollTrigger: { trigger: ".benefits-list", start: "top 82%", once: true },
        },
      );

      gsap.fromTo(
        ".story-line-fill",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".steps",
            start: "top 76%",
            end: "bottom 62%",
            scrub: 1,
          },
        },
      );
    }, root);

    ScrollTrigger.refresh();
    return () => context.revert();
  }, [reducedMotion]);

  return (
    <div ref={root} className="site-shell">
      <a className="skip-link" href="#main">Pular para o conteúdo</a>
      <div ref={progress} className="scroll-progress" aria-hidden="true" />

      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <a className="brand" href="#hero" aria-label="Pacheco Lab. — início">
          <span className="brand-logo" aria-hidden="true">
            <Image src="/pacheco-lab-logo.png" alt="" width={38} height={38} priority />
          </span>
          <span>Pacheco Lab.</span>
        </a>

        <nav className="desktop-nav" aria-label="Navegação principal">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={activeSection === item.href.slice(1) ? "active" : ""}
              aria-current={activeSection === item.href.slice(1) ? "location" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a
            className="header-cta"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
          >
            Entrar grátis <ArrowUpRight size={15} aria-hidden="true" />
          </a>
          <button
            ref={menuButton}
            className="menu-toggle"
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Abrir menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
          >
            <Menu aria-hidden="true" />
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              className="mobile-menu-layer"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
            >
              <button
                className="mobile-menu-backdrop"
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-hidden="true"
                tabIndex={-1}
              />
              <div
                id="mobile-navigation"
                className="mobile-menu"
                role="dialog"
                aria-modal="true"
                aria-label="Menu principal"
              >
                <div className="mobile-menu-top">
                  <span>Pacheco Lab.</span>
                  <button
                    type="button"
                    autoFocus
                    onClick={() => {
                      setMobileOpen(false);
                      menuButton.current?.focus();
                    }}
                    aria-label="Fechar menu"
                  >
                    <X aria-hidden="true" />
                  </button>
                </div>
                <nav aria-label="Navegação mobile">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      aria-current={activeSection === item.href.slice(1) ? "location" : undefined}
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label} <ArrowRight size={17} aria-hidden="true" />
                    </a>
                  ))}
                </nav>
                <JoinLink>Entrar gratuitamente</JoinLink>
                <JoinLink href={DISCORD_URL} variant="secondary">Entrar pelo Discord</JoinLink>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main id="main">
        <section id="hero" className="hero-section">
          <div className="particle-field" aria-hidden="true">
            {particles.map((particle, index) => (
              <span
                key={index}
                className="particle"
                style={{
                  left: particle.left,
                  top: particle.top,
                  width: particle.size,
                  height: particle.size,
                  animationDelay: particle.delay,
                  animationDuration: particle.duration,
                }}
              />
            ))}
          </div>
          <HeroOrb reducedMotion={reducedMotion} />

          <div className="container hero-layout">
            <div className="hero-content">
              <div className="hero-kicker">
                <span /> Comunidade gratuita de tecnologia
              </div>
              <h1>
                <span className="hero-line"><span>Uma comunidade gratuita</span></span>
                <span className="hero-line"><span>para evoluir em tecnologia.</span></span>
              </h1>
              <p className="hero-copy">
                Entre no Pacheco Lab para trocar experiências, compartilhar projetos,
                tirar dúvidas e acompanhar conteúdos sobre programação, dados,
                automação e carreira.
              </p>

              <div className="hero-actions">
                <JoinLink>Entrar gratuitamente na comunidade</JoinLink>
                <JoinLink href={DISCORD_URL} variant="secondary">Conhecer o Discord</JoinLink>
              </div>

              <div className="hero-trust" aria-label="Informações sobre o acesso">
                <span><Check size={15} /> Gratuito</span>
                <span><ShieldCheck size={15} /> Sem cartão</span>
                <span><UsersRound size={15} /> Sem assinatura</span>
              </div>
            </div>

            <aside className="hero-community-card reveal" aria-label="Áreas e canais da comunidade">
              <div className="hero-community-head">
                <span>Comunidade em movimento</span>
                <i><span /> acesso aberto</i>
              </div>
              <div className="hero-community-body">
                <div className="community-signal">
                  <span><Code2 size={17} /> Programação</span>
                  <span><Braces size={17} /> Dados e IA</span>
                  <span><Network size={17} /> Automação</span>
                  <span><BriefcaseBusiness size={17} /> Carreira</span>
                </div>
                <div className="hero-community-note">
                  <MessagesSquare size={21} />
                  <p><strong>Aprender também é conversar.</strong> Traga uma dúvida, uma ideia ou um projeto em andamento.</p>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="topic-strip" aria-label="Temas da comunidade">
          <div className="container topic-strip-inner">
            <span>Programação</span><i />
            <span>Dados</span><i />
            <span>Automação</span><i />
            <span>Inteligência artificial</span><i />
            <span>Projetos</span><i />
            <span>Carreira</span>
          </div>
        </section>

        <section id="comunidade" className="section manifesto-section">
          <div className="container manifesto-layout">
            <div className="manifesto-marker reveal" aria-hidden="true">
              <span>P/L</span>
              <i />
            </div>
            <div className="manifesto-copy reveal">
              <h2>Tecnologia fica melhor quando o conhecimento circula.</h2>
              <p>
                O Pacheco Lab conecta pessoas interessadas em aprender, construir e
                compartilhar. Sem palco, sem promessa fácil e sem obrigação de saber tudo.
                O ponto de partida é a curiosidade; o restante acontece na troca.
              </p>
            </div>
            <div className="manifesto-values reveal">
              <span><Check size={16} /> Perguntar com contexto</span>
              <span><Check size={16} /> Compartilhar o processo</span>
              <span><Check size={16} /> Respeitar ritmos diferentes</span>
              <span><Check size={16} /> Construir junto</span>
            </div>
          </div>
        </section>

        <section id="beneficios" className="section benefits-section">
          <div className="container benefits-layout">
            <div className="benefits-heading reveal">
              <p>O que você encontra</p>
              <h2>Mais espaço para praticar. Menos ruído para acompanhar.</h2>
              <span>
                Benefícios concretos para quem quer manter contato com tecnologia no dia a dia.
              </span>
            </div>
            <div className="benefits-list">
              {benefits.map((item, index) => {
                const Icon = item.icon;
                return (
                  <article className="benefit-row" key={item.title}>
                    <span className="benefit-index">0{index + 1}</span>
                    <Icon size={21} aria-hidden="true" />
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                    <ArrowRight size={18} aria-hidden="true" />
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="canais" className="section channels-section">
          <div className="container channels-heading reveal">
            <div>
              <p>Dois espaços, uma comunidade</p>
              <h2>WhatsApp para acompanhar. Discord para aprofundar.</h2>
            </div>
            <p>
              Escolha o canal que combina com sua rotina ou participe dos dois. O acesso é
              gratuito em ambos.
            </p>
          </div>

          <div className="container channel-layout">
            <article className="channel-panel whatsapp-panel reveal">
              <header>
                <span className="channel-icon"><MessageCircle size={22} /></span>
                <div><h3>WhatsApp</h3><p>Proximidade, avisos e conversas rápidas.</p></div>
                <span className="channel-status"><i /> aberto</span>
              </header>
              <div className="whatsapp-groups" aria-label="Grupos do WhatsApp">
                {[
                  ["Avisos", "Novidades e informações importantes", BellRing],
                  ["Geral", "Conversa aberta da comunidade", MessageCircle],
                  ["Dúvidas", "Ajuda para continuar avançando", CircleHelp],
                  ["Apresentações", "Um espaço para chegar e se conectar", Handshake],
                  ["Cursos", "Materiais e conteúdos para acompanhar", BookOpenCheck],
                ].map(([title, text, Icon]) => {
                  const GroupIcon = Icon as typeof BellRing;
                  return (
                    <div className="group-row" key={String(title)}>
                      <span><GroupIcon size={17} /></span>
                      <div><strong>{String(title)}</strong><small>{String(text)}</small></div>
                    </div>
                  );
                })}
              </div>
              <JoinLink className="full-button">Entrar pelo WhatsApp</JoinLink>
            </article>

            <article className="channel-panel discord-panel reveal">
              <header>
                <span className="channel-icon"><Hash size={22} /></span>
                <div><h3>Discord</h3><p>Organização por temas e conversas com contexto.</p></div>
                <span className="channel-status"><i /> aberto</span>
              </header>
              <div className="discord-window" aria-label="Exemplo ilustrativo de conversa no Discord">
                <div className="discord-sidebar">
                  <span>Canais</span>
                  {[
                    "apresentações",
                    "dúvidas",
                    "projetos",
                    "front-end",
                    "backend",
                    "dados-e-ia",
                  ].map((channel) => (
                    <small className={channel === "projetos" ? "active" : ""} key={channel}>
                      # {channel}
                    </small>
                  ))}
                </div>
                <div className="discord-conversation">
                  <span># projetos <small>exemplo ilustrativo</small></span>
                  <div className="generic-message">
                    <i>PI</i>
                    <p><strong>Pessoa iniciante</strong>Estou organizando meu primeiro projeto. Como vocês dividiriam as etapas?</p>
                  </div>
                  <div className="generic-message">
                    <i>MC</i>
                    <p><strong>Membro da comunidade</strong>Comece pelo problema que quer resolver e faça uma primeira versão pequena. Posso olhar seu README.</p>
                  </div>
                  <div className="generic-message compact">
                    <i>PL</i>
                    <p><strong>Pacheco Lab.</strong>Compartilhe o repositório quando estiver confortável. Feedback faz parte do processo.</p>
                  </div>
                </div>
              </div>
              <JoinLink href={DISCORD_URL} variant="secondary" className="full-button">Entrar pelo Discord</JoinLink>
            </article>
          </div>
        </section>

        <section id="como-funciona" className="section how-section">
          <div className="container how-layout">
            <div className="how-copy reveal">
              <p>Como funciona</p>
              <h2>Entrar é simples. Participar continua sendo escolha sua.</h2>
              <span>
                A comunidade existe para acompanhar sua trajetória, não para ocupar mais uma tela na sua rotina.
              </span>
            </div>
            <div className="steps">
              <div className="story-line" aria-hidden="true"><span className="story-line-fill" /></div>
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <article className="step" key={step.title}>
                    <span className="step-number">0{index + 1}</span>
                    <Icon size={21} aria-hidden="true" />
                    <div><h3>{step.title}</h3><p>{step.text}</p></div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section audience-section">
          <div className="container audience-layout">
            <div className="audience-copy reveal">
              <p>Para quem é</p>
              <h2>Para pessoas curiosas sobre tecnologia — em qualquer momento da jornada.</h2>
            </div>
            <div className="audience-list reveal">
              <span><Code2 size={19} /> Quem está começando a programar</span>
              <span><Layers3 size={19} /> Quem estuda dados, IA ou automação</span>
              <span><FolderGit2 size={19} /> Quem quer compartilhar projetos</span>
              <span><BriefcaseBusiness size={19} /> Quem está pensando na carreira</span>
              <span><Handshake size={19} /> Quem acredita em aprendizado coletivo</span>
            </div>
          </div>
        </section>

        <section id="acesso-gratuito" className="section free-access-section">
          <div className="container free-access-layout">
            <div className="free-access-copy reveal">
              <span className="free-seal"><Check size={17} /> acesso gratuito</span>
              <h2>Gratuito de verdade.</h2>
              <p>
                O Pacheco Lab não tem plano pago, checkout ou cobrança recorrente.
                Você entra pelos canais oficiais e participa sem cadastrar cartão.
              </p>
            </div>
            <div className="free-access-actions reveal">
              <div>
                <strong>Escolha seu ponto de entrada</strong>
                <span>Você pode participar dos dois canais.</span>
              </div>
              <JoinLink className="full-button">Entrar gratuitamente pelo WhatsApp</JoinLink>
              <JoinLink href={DISCORD_URL} variant="secondary" className="full-button">Entrar gratuitamente pelo Discord</JoinLink>
              <small><ShieldCheck size={14} /> Sem cartão. Sem assinatura. Sem período de teste.</small>
            </div>
          </div>
        </section>

        <section id="duvidas" className="section faq-section">
          <div className="container faq-layout">
            <div className="faq-heading reveal">
              <p>Dúvidas frequentes</p>
              <h2>Respostas diretas antes de você entrar.</h2>
              <span>Sem letras pequenas e sem promessa exagerada.</span>
            </div>
            <div className="faq-list">
              {faqItems.map((item) => (
                <details className="faq-item reveal" key={item.question}>
                  <summary>{item.question}<span><ChevronDown size={18} aria-hidden="true" /></span></summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="final-cta-section">
          <div className="final-network" aria-hidden="true"><span /><i /><i /></div>
          <div className="container final-cta reveal">
            <Image src="/pacheco-lab-logo.png" alt="" width={78} height={78} aria-hidden="true" />
            <p>Faça parte desde o início.</p>
            <h2>Traga sua curiosidade. A comunidade começa na conversa.</h2>
            <JoinLink>Entrar na comunidade gratuitamente</JoinLink>
            <a href={DISCORD_URL} target="_blank" rel="noreferrer" className="final-discord-link">
              Prefiro entrar pelo Discord <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>

      <AnimatePresence>
        {showMobileCta && !decisionAreaVisible && !mobileOpen && (
          <motion.aside
            className="mobile-join-bar"
            initial={{ y: 90, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 90, opacity: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.24, ease: [0.22, 1, 0.36, 1] }}
            aria-label="Entrada gratuita na Pacheco Lab."
          >
            <div><span>Acesso gratuito</span><strong>Sem cartão</strong></div>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              Entrar agora <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </motion.aside>
        )}
      </AnimatePresence>

      <footer>
        <div className="container footer-inner">
          <a className="brand" href="#hero">
            <span className="brand-logo"><Image src="/pacheco-lab-logo.png" alt="" width={38} height={38} /></span>
            <span>Pacheco Lab.</span>
          </a>
          <p>Comunidade gratuita para aprender, compartilhar e construir em tecnologia.</p>
          <div className="footer-links">
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">WhatsApp</a>
            <a href={DISCORD_URL} target="_blank" rel="noreferrer">Discord</a>
            <a href="#hero">Topo <ArrowUp size={14} aria-hidden="true" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
