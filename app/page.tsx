import type { Metadata } from "next";
import LandingPage, { DISCORD_URL, WHATSAPP_URL } from "./LandingPage";

const productionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "https://pacheco-lab-comunidade.vercel.app";

export const metadata: Metadata = {
  title: "PachecoLab — Comunidade gratuita de programação e tecnologia",
  description:
    "Entre gratuitamente no PachecoLab, comunidade de programação e tecnologia no WhatsApp e Discord para tirar dúvidas, compartilhar projetos e conversar sobre programação, dados, IA, automação e carreira.",
  alternates: { canonical: "/" },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${productionUrl}/#organization`,
      name: "PachecoLab",
      alternateName: "Pacheco Lab",
      url: productionUrl,
      logo: `${productionUrl}/pacheco-lab-logo.png`,
      description:
        "Comunidade gratuita de programação e tecnologia para tirar dúvidas, compartilhar projetos e conversar sobre programação, dados, inteligência artificial, automação, estudos e carreira.",
      sameAs: [WHATSAPP_URL, DISCORD_URL],
    },
    {
      "@type": "WebSite",
      "@id": `${productionUrl}/#website`,
      url: productionUrl,
      name: "PachecoLab",
      alternateName: "Pacheco Lab",
      inLanguage: "pt-BR",
      publisher: { "@id": `${productionUrl}/#organization` },
    },
    {
      "@type": "WebPage",
      "@id": `${productionUrl}/#webpage`,
      url: productionUrl,
      name: "PachecoLab — Comunidade gratuita de programação e tecnologia",
      description:
        "Página oficial do PachecoLab, comunidade gratuita de programação e tecnologia com participação pelo WhatsApp e Discord.",
      inLanguage: "pt-BR",
      isPartOf: { "@id": `${productionUrl}/#website` },
      about: { "@id": `${productionUrl}/#organization` },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <LandingPage />
    </>
  );
}
