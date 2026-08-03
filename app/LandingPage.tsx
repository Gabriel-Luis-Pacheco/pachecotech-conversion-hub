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
  CreditCard,
  FolderGit2,
  Handshake,
  Layers3,
  LockKeyhole,
  Menu,
  MessagesSquare,
  Radio,
  Rocket,
  ShieldCheck,
  UsersRound,
  X,
} from "lucide-react";

export const CHECKOUT_URL = "https://pay.kiwify.com.br/SEyfpDy";

const OrbCanvas = dynamic(() => import("./OrbCanvas"), { ssr: false });

const navItems = [
  { label: "A comunidade", href: "#comunidade" },
  { label: "O que inclui", href: "#beneficios" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Investimento", href: "#investimento" },
  { label: "Dúvidas", href: "#duvidas" },
];

const included = [
  {
    title: "Uma comunidade que participa",
    text: "Um espaço privado para perguntar, compartilhar avanços e continuar em movimento.",
    icon: UsersRound,
  },
  {
    title: "Dúvidas com contexto",
    text: "Converse sobre o que travou e encontre caminhos mais claros para avançar.",
    icon: CircleHelp,
  },
  {
    title: "Projetos e prática",
    text: "Tire ideias do papel, mostre o que está construindo e aprenda fazendo.",
    icon: FolderGit2,
  },
  {
    title: "Conteúdo selecionado",
    text: "Curadoria para reduzir o ruído e concentrar sua atenção no que importa.",
    icon: BookOpenCheck,
  },
  {
    title: "Palestras e encontros",
    text: "Conversas para ampliar repertório, trocar experiências e descobrir novas rotas.",
    icon: Radio,
  },
  {
    title: "Networking real",
    text: "Conheça pessoas que também estão construindo uma trajetória em tecnologia.",
    icon: Handshake,
  },
  {
    title: "Vagas e oportunidades",
    text: "Um canal para compartilhar oportunidades relevantes para a comunidade.",
    icon: BriefcaseBusiness,
  },
];

const frictionPoints = [
  "Você estuda bastante, mas ainda pratica menos do que gostaria.",
  "Uma dúvida simples interrompe o ritmo por horas — às vezes, por dias.",
  "Sem troca e compromisso, manter a constância fica muito mais difícil.",
];

const steps = [
  {
    title: "Faça sua inscrição",
    text: "Conclua a assinatura mensal no checkout seguro da Kiwify.",
    icon: CreditCard,
  },
  {
    title: "Receba as orientações",
    text: "Após a confirmação, você recebe as instruções para acessar os espaços.",
    icon: LockKeyhole,
  },
  {
    title: "Apresente-se",
    text: "Conte seu momento, seus interesses e encontre os canais mais úteis para você.",
    icon: MessagesSquare,
  },
  {
    title: "Participe no seu ritmo",
    text: "Pergunte, compartilhe, construa projetos e faça o conhecimento circular.",
    icon: Rocket,
  },
];

const faqItems = [
  {
    question: "Preciso já saber programar?",
    answer:
      "Não. A comunidade foi pensada tanto para quem está começando quanto para quem já estuda e quer mais direção, prática e troca com outras pessoas.",
  },
  {
    question: "A Pacheco Lab. é um curso?",
    answer:
      "Não é um curso isolado. É uma comunidade privada com canais de conversa, projetos, curadoria, encontros e oportunidades. O foco é evoluir por meio da participação contínua.",
  },
  {
    question: "Onde a comunidade funciona?",
    answer:
      "O Discord concentra a organização, os temas e as conversas mais profundas. O WhatsApp é usado para proximidade, avisos e comunicação rápida.",
  },
  {
    question: "Como recebo o acesso?",
    answer:
      "Depois da confirmação da assinatura, você recebe as orientações de entrada. Nenhum convite privado fica exposto nesta página.",
  },
  {
    question: "Posso cancelar?",
    answer:
      "Sim. A assinatura é mensal e recorrente. Você pode solicitar o cancelamento; o acesso permanece ativo enquanto a assinatura estiver regular.",
  },
  {
    question: "Existe promessa de emprego ou renda?",
    answer:
      "Não. A comunidade oferece ambiente, troca e oportunidades compartilhadas, mas não promete emprego, renda ou resultados automáticos.",
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
      100,
    );
    return () => window.clearTimeout(timer);
  }, [reducedMotion]);

  return (
    <div className="orb-wrap" aria-hidden="true">
      <div className="orb-halo" />
      <div className="orb-aurora" />
      <div className="orb-fallback">
        <span className="orb-core" />
        <span className="orb-stream stream-one" />
        <span className="orb-stream stream-two" />
        <span className="orb-stream stream-three" />
        <span className="orb-ring orb-ring-one" />
        <span className="orb-ring orb-ring-two" />
        <span className="orb-ring orb-ring-three" />
        <span className="orb-ring orb-ring-four" />
        <i className="orb-node node-a" />
        <i className="orb-node node-b" />
        <i className="orb-node node-c" />
        <i className="orb-node node-d" />
        <i className="orb-node node-e" />
      </div>
      {canRender && (
        <div className="orb-canvas">
          <OrbCanvas reducedMotion={reducedMotion} />
        </div>
      )}
    </div>
  );
}

function CheckoutButton({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.a
      href={CHECKOUT_URL}
      className={`button button-primary ${className}`}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.985 }}
      aria-label={`${String(children)} — abrir checkout seguro da Kiwify`}
    >
      <span>{children}</span>
      <ArrowUpRight size={18} aria-hidden="true" />
    </motion.a>
  );
}

export default function LandingPage() {
  const root = useRef<HTMLDivElement>(null);
  const progress = useRef<HTMLDivElement>(null);
  const cursor = useRef<HTMLDivElement>(null);
  const cursorGlow = useRef<HTMLDivElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showMobileCta, setShowMobileCta] = useState(false);
  const [decisionAreaVisible, setDecisionAreaVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [reducedMotion, setReducedMotion] = useState(false);

  const particles = useMemo(
    () =>
      Array.from({ length: 30 }, (_, index) => ({
        left: `${(index * 37 + 11) % 100}%`,
        top: `${(index * 53 + 7) % 100}%`,
        size: `${1 + (index % 3)}px`,
        delay: `${-((index * 0.43) % 9)}s`,
        duration: `${9 + (index % 7)}s`,
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
      setScrolled(window.scrollY > 40);
      if (window.scrollY < window.innerHeight * 0.5) {
        setActiveSection("");
      }
      setShowMobileCta(
        window.scrollY > Math.min(680, window.innerHeight * 0.78) &&
          window.scrollY < total - 420,
      );
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
    const elements = [".sales-break", "#para-quem", "#investimento", ".final-cta-section"]
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
      { threshold: 0.02 },
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
      { rootMargin: "-36% 0px -52%", threshold: 0 },
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

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (!finePointer || reducedMotion) return;
    let frame = 0;
    const onPointerMove = (event: PointerEvent) => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        cursor.current?.style.setProperty(
          "transform",
          `translate3d(${event.clientX}px, ${event.clientY}px, 0)`,
        );
        cursorGlow.current?.style.setProperty(
          "transform",
          `translate3d(${event.clientX}px, ${event.clientY}px, 0)`,
        );
      });
    };
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, [reducedMotion]);

  useLayoutEffect(() => {
    if (!root.current) return;
    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      const compactViewport = window.matchMedia("(max-width: 620px)").matches;
      if (reducedMotion) {
        gsap.set(
          ".hero-kicker, .hero-line span, .hero-copy, .hero-offer, .hero-actions, .hero-trust, .reveal, .included-item, .channel-row",
          { clearProps: "all", opacity: 1, y: 0, scale: 1 },
        );
        return;
      }

      const intro = gsap.timeline({ defaults: { ease: "expo.out" } });
      intro
        .fromTo(".hero-kicker", { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: 0.45 })
        .fromTo(
          ".hero-line span",
          { yPercent: 112 },
          { yPercent: 0, duration: 0.9, stagger: 0.1 },
          "-=0.2",
        )
        .fromTo(".hero-copy", { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.48")
        .fromTo(".hero-offer", { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, "-=0.38")
        .fromTo(".hero-actions", { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, "-=0.35")
        .fromTo(".hero-trust", { opacity: 0 }, { opacity: 1, duration: 0.5 }, "-=0.2");

      gsap.to(".orb-wrap", {
        y: 105,
        scale: 1.12,
        opacity: 0.68,
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
          {
            y: compactViewport ? 18 : 28,
            opacity: 0,
            filter: compactViewport ? "none" : "blur(6px)",
          },
          {
            y: 0,
            opacity: 1,
            filter: compactViewport ? "none" : "blur(0px)",
            duration: 0.8,
            ease: "quart.out",
            scrollTrigger: { trigger: element, start: "top 88%", once: true },
          },
        );
      });

      gsap.fromTo(
        ".included-item",
        { x: 24, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.55,
          stagger: 0.06,
          ease: "quart.out",
          scrollTrigger: { trigger: ".included-list", start: "top 82%", once: true },
        },
      );

      gsap.fromTo(
        ".channel-row",
        { x: -16, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.05,
          scrollTrigger: { trigger: ".community-window", start: "top 78%", once: true },
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
      <div ref={cursorGlow} className="cursor-glow" aria-hidden="true" />
      <div ref={cursor} className="cursor-dot" aria-hidden="true" />

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
          <a className="header-cta" href={CHECKOUT_URL}>
            Quero entrar <ArrowUpRight size={15} aria-hidden="true" />
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
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
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
                <CheckoutButton>Quero entrar na comunidade</CheckoutButton>
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
                <span /> Comunidade privada para aprender programação fazendo
              </div>
              <h1>
                <span className="hero-line"><span>Aprenda programação.</span></span>
                <span className="hero-line hero-line-accent"><span>Evolua junto.</span></span>
              </h1>
              <p className="hero-copy">
                Tire dúvidas com contexto, receba feedback nos seus projetos e mantenha
                a constância no Discord e no WhatsApp — com pessoas que também estão aprendendo.
              </p>

              <div className="hero-offer">
                <div className="hero-price">
                  <span>Plano mensal</span>
                  <strong>R$ 19,90 <small>/mês</small></strong>
                </div>
                <div className="hero-offer-details">
                  <strong>Acesso completo à comunidade</strong>
                  <p>Discord, WhatsApp, projetos, curadoria, encontros e oportunidades.</p>
                </div>
              </div>

              <div className="hero-actions">
                <CheckoutButton>Entrar por R$ 19,90/mês</CheckoutButton>
                <motion.a
                  className="button button-secondary"
                  href="#beneficios"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.985 }}
                >
                  Explorar o que está incluído <ChevronDown size={17} aria-hidden="true" />
                </motion.a>
              </div>

              <div className="hero-trust" aria-label="Informações de compra">
                <span><ShieldCheck size={15} /> Checkout pela Kiwify</span>
                <span><Check size={15} /> Cancele quando quiser</span>
                <span><LockKeyhole size={15} /> Acesso privado</span>
              </div>
            </div>
            <div className="hero-orb-space" aria-hidden="true" />
          </div>
        </section>

        <section className="truth-strip" aria-label="O que você encontra">
          <div className="container truth-strip-inner">
            <span>Discord organizado</span><i />
            <span>WhatsApp para ficar por perto</span><i />
            <span>Dúvidas e projetos</span><i />
            <span>Curadoria, encontros e oportunidades</span>
          </div>
        </section>

        <section className="section friction-section">
          <div className="container friction-layout">
            <div className="friction-statement reveal">
              <p className="section-note">Conteúdo não é o problema</p>
              <h2>Avançar sozinho é que torna tudo mais difícil.</h2>
              <p>
                A internet já tem tutoriais demais. A Pacheco Lab. transforma estudo
                solitário em conversa, prática e continuidade.
              </p>
            </div>
            <div className="friction-list">
              {frictionPoints.map((item, index) => (
                <div className="friction-item reveal" key={item}>
                  <span>0{index + 1}</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="comunidade" className="section circulation-section">
          <div className="circulation-glow" aria-hidden="true" />
          <div className="container circulation-layout">
            <div className="circulation-copy reveal">
              <p className="section-note">Conhecimento que circula</p>
              <h2>Uma dúvida respondida hoje vira atalho para outra pessoa amanhã.</h2>
              <p>
                Perguntas, referências, projetos e oportunidades passam de pessoa para
                pessoa. Você aprende, aplica e também ajuda a comunidade a avançar.
              </p>
              <div className="circulation-principles">
                <span><Check size={16} /> Perguntar sem receio</span>
                <span><Check size={16} /> Compartilhar o processo</span>
                <span><Check size={16} /> Construir com outras pessoas</span>
              </div>
            </div>
            <div className="network-map reveal" aria-label="Áreas conectadas da comunidade">
              <div className="network-map-core">
                <Image src="/pacheco-lab-logo.png" alt="" width={78} height={78} aria-hidden="true" />
                <strong>Pacheco Lab.</strong>
              </div>
              {[
                "Front-end",
                "Backend",
                "Dados e IA",
                "Automação",
                "Projetos",
                "Carreira",
              ].map((label, index) => (
                <span key={label} className={`map-node map-node-${index + 1}`}>
                  <i /> {label}
                </span>
              ))}
              <div className="map-orbit orbit-a" aria-hidden="true" />
              <div className="map-orbit orbit-b" aria-hidden="true" />
            </div>
          </div>
        </section>

        <section id="beneficios" className="section included-section">
          <div className="container">
            <div className="included-heading reveal">
              <div>
                <p className="section-note">O que sua assinatura inclui</p>
                <h2>Mais que conteúdo: um lugar para perguntar, construir e continuar.</h2>
              </div>
              <p>
                Tudo fica reunido em um ambiente contínuo de conversa, prática,
                curadoria e conexão.
              </p>
            </div>

            <div className="included-layout">
              <article className="included-feature reveal">
                <div className="included-feature-icon"><UsersRound size={28} /></div>
                <div>
                  <span>O ponto de partida</span>
                  <h3>{included[0].title}</h3>
                  <p>{included[0].text}</p>
                </div>
                <div className="feature-constellation" aria-hidden="true">
                  <span><UsersRound size={18} /></span>
                  <i /><i /><i /><i /><i /><i />
                </div>
              </article>

              <div className="included-list">
                {included.slice(1).map((item) => {
                  const Icon = item.icon;
                  return (
                    <article className="included-item" key={item.title}>
                      <Icon size={20} aria-hidden="true" />
                      <div><h3>{item.title}</h3><p>{item.text}</p></div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="section platform-section">
          <div className="container platform-layout">
            <div className="platform-copy reveal">
              <p className="section-note">Cada conversa no lugar certo</p>
              <h2>Discord para construir. WhatsApp para acompanhar.</h2>
              <p>
                No Discord, dúvidas, projetos e referências ficam organizados por assunto.
                No WhatsApp, avisos e conversas rápidas mantêm você por perto sem misturar tudo.
              </p>
              <ul>
                <li><MessagesSquare size={18} /> Dúvidas com contexto e histórico</li>
                <li><Layers3 size={18} /> Canais para projetos, stacks e oportunidades</li>
                <li><BellRing size={18} /> Avisos essenciais, sem depender do algoritmo</li>
              </ul>
            </div>

            <div className="community-window reveal" aria-label="Exemplo ilustrativo de uma conversa na comunidade">
              <aside className="channel-sidebar">
                <div className="window-brand">
                  <Image src="/pacheco-lab-logo.png" alt="" width={30} height={30} aria-hidden="true" />
                  Pacheco Lab.
                </div>
                <span className="channel-group">Comunidade</span>
                {["Apresentações", "Dúvidas", "Projetos", "Front-end", "Backend", "Dados e IA", "Vagas"].map(
                  (channel, index) => (
                    <div className={`channel-row ${index === 2 ? "selected" : ""}`} key={channel}>
                      <span>#</span> {channel}
                    </div>
                  ),
                )}
              </aside>
              <div className="conversation-space">
                <div className="conversation-header">
                  <div><span># projetos</span><small>Mostre o que está construindo</small></div>
                  <strong><i /> Exemplo ilustrativo</strong>
                </div>
                <div className="conversation-canvas">
                  <div className="channel-intro">
                    <span><FolderGit2 size={18} /></span>
                    <div>
                      <strong>Bem-vindo a #projetos</strong>
                      <p>Compartilhe seu progresso, peça feedback e destrave o próximo passo.</p>
                    </div>
                  </div>

                  <div className="chat-thread">
                    <article className="chat-message">
                      <div className="chat-avatar avatar-violet" aria-hidden="true">AM</div>
                      <div className="chat-message-body">
                        <header><strong>Ana M.</strong><time dateTime="10:42">10:42</time></header>
                        <p>Terminei a primeira versão do meu portfólio. Alguém pode me ajudar com o grid no celular?</p>
                      </div>
                    </article>

                    <article className="chat-message">
                      <div className="chat-avatar avatar-blue" aria-hidden="true">RC</div>
                      <div className="chat-message-body">
                        <header><strong>Rafael C.</strong><time dateTime="10:47">10:47</time></header>
                        <p><span className="chat-mention">@Ana M.</span> Claro. Troque a largura fixa por uma grade responsiva e teste a partir de 320 px.</p>
                        <div className="code-share">
                          <div><Braces size={15} /><span>layout.css</span><small>exemplo</small></div>
                          <code>repeat(auto-fit, minmax(16rem, 1fr))</code>
                        </div>
                      </div>
                    </article>

                    <article className="chat-message chat-message-success">
                      <div className="chat-avatar avatar-green" aria-hidden="true">AM</div>
                      <div className="chat-message-body">
                        <header><strong>Ana M.</strong><time dateTime="11:03">11:03</time></header>
                        <p>Funcionou! Agora os cards quebram certinho. Obrigada pela ajuda.</p>
                      </div>
                    </article>
                  </div>

                  <div className="chat-composer" aria-hidden="true">
                    <span>Conversar em #projetos</span>
                    <i>+</i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="sales-break">
          <div className="container sales-break-inner reveal">
            <div>
              <span>Seu próximo projeto não precisa começar no escuro.</span>
              <strong>Entre, apresente-se e encontre seu próximo passo.</strong>
            </div>
            <CheckoutButton>Quero fazer parte</CheckoutButton>
          </div>
        </section>

        <section id="como-funciona" className="section how-section">
          <div className="container how-layout">
            <div className="how-copy reveal">
              <p className="section-note">Entrada simples e segura</p>
              <h2>Da inscrição à primeira conversa em quatro passos.</h2>
              <p>Sem convite exposto, sem processo confuso e sem promessa exagerada.</p>
            </div>
            <div className="steps">
              <span className="story-line" aria-hidden="true"><i className="story-line-fill" /></span>
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <article className="step reveal" key={step.title}>
                    <span className="step-number">0{index + 1}</span>
                    <Icon size={21} aria-hidden="true" />
                    <div><h3>{step.title}</h3><p>{step.text}</p></div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="para-quem" className="section fit-section">
          <div className="container">
            <div className="fit-heading reveal">
              <h2>Você não precisa chegar pronto.</h2>
              <div>
                <strong>Precisa chegar disposto a participar.</strong>
                <p>
                  A comunidade funciona melhor para quem troca experiências, pratica
                  e contribui com o progresso das outras pessoas.
                </p>
              </div>
            </div>

            <div className="fit-layout">
              <article className="fit-column fit-positive reveal">
                <span className="fit-label"><Check size={15} /> Faz sentido para você</span>
                <h3>Se você quer aprender em movimento.</h3>
                <ul>
                  <li><Check size={18} /> Quer sair da teoria e construir projetos reais.</li>
                  <li><Check size={18} /> Procura direção quando uma dúvida trava seu avanço.</li>
                  <li><Check size={18} /> Valoriza feedback, troca de experiências e colaboração.</li>
                  <li><Check size={18} /> Quer criar constância e conexões na tecnologia.</li>
                </ul>
              </article>
              <article className="fit-column fit-negative reveal">
                <span className="fit-label"><X size={15} /> Talvez não seja para você</span>
                <h3>Se você espera resultado sem participação.</h3>
                <ul>
                  <li><X size={18} /> Busca promessa de emprego ou renda rápida.</li>
                  <li><X size={18} /> Prefere apenas consumir conteúdo, sem trocar com ninguém.</li>
                  <li><X size={18} /> Espera evoluir sem prática e sem consistência.</li>
                  <li><X size={18} /> Não aceita uma convivência respeitosa e colaborativa.</li>
                </ul>
              </article>
            </div>

            <p className="fit-commitment reveal">
              <UsersRound size={18} /> Conhecimento prévio não é requisito. Participação é o que faz a comunidade acontecer.
            </p>
          </div>
        </section>

        <section id="investimento" className="section price-section">
          <div className="container price-layout">
            <div className="price-copy reveal">
              <p className="section-note">Acesso completo, sem complicação</p>
              <h2>Toda a comunidade por R$ 19,90 ao mês.</h2>
              <p>
                O valor é mensal e recorrente. Você vê todas as condições no checkout
                antes de confirmar sua inscrição.
              </p>
              <div className="payment-safety">
                <ShieldCheck size={20} />
                <span><strong>Pagamento processado pela Kiwify</strong>Seus dados de pagamento não passam por este site.</span>
              </div>
            </div>

            <article className="price-card reveal">
              <div className="price-card-head">
                <div><span>Plano mensal</span><h3>Pacheco Lab.</h3></div>
                <span className="plan-status"><i /> Acesso privado</span>
              </div>
              <div className="price-value">
                <strong><small>R$</small> 19,90</strong>
                <span>por mês</span>
              </div>
              <ul>
                <li><Check size={16} /> Discord e WhatsApp da comunidade</li>
                <li><Check size={16} /> Canais de dúvidas e projetos</li>
                <li><Check size={16} /> Curadoria de conteúdos</li>
                <li><Check size={16} /> Palestras, encontros e oportunidades</li>
                <li><Check size={16} /> Networking com outros participantes</li>
              </ul>
              <CheckoutButton className="full-button">Assinar por R$ 19,90/mês</CheckoutButton>
              <p className="price-terms">
                Assinatura recorrente. Cancele quando quiser. O acesso permanece
                ativo enquanto a assinatura estiver regular.
              </p>
            </article>
          </div>
        </section>

        <section id="duvidas" className="section faq-section">
          <div className="container faq-layout">
            <div className="faq-heading reveal">
              <p className="section-note">Antes de entrar</p>
              <h2>Perguntas honestas. Respostas diretas.</h2>
              <p>Veja como funcionam o acesso, a assinatura e o cancelamento antes de entrar.</p>
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
          <div className="final-orb" aria-hidden="true"><span /><i /><i /></div>
          <div className="container final-cta reveal">
            <Image src="/pacheco-lab-logo.png" alt="" width={88} height={88} aria-hidden="true" />
            <h2>Seu próximo passo pode começar com uma conversa.</h2>
            <p>Entre para aprender com mais direção, praticar com constância e crescer ao lado de outras pessoas.</p>
            <CheckoutButton>Quero entrar na Pacheco Lab.</CheckoutButton>
            <span className="final-note"><ShieldCheck size={15} /> Checkout seguro pela Kiwify</span>
          </div>
        </section>
      </main>

      <AnimatePresence>
        {showMobileCta && !decisionAreaVisible && !mobileOpen && (
          <motion.aside
            className="mobile-checkout-bar"
            initial={{ y: 90, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 90, opacity: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
            aria-label="Inscrição na Pacheco Lab."
          >
            <div>
              <span>Plano mensal</span>
              <strong>R$ 19,90/mês</strong>
            </div>
            <a href={CHECKOUT_URL} aria-label="Entrar para a Pacheco Lab. pelo checkout seguro da Kiwify">
              Quero entrar <ArrowUpRight size={17} aria-hidden="true" />
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
          <p>Programação se aprende melhor quando o conhecimento circula.</p>
          <a href="#hero">Voltar ao topo <ArrowUp size={14} aria-hidden="true" /></a>
        </div>
      </footer>
    </div>
  );
}
