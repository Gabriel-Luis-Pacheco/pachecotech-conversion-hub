import type { Metadata } from "next";
import LandingPage from "./LandingPage";

export const metadata: Metadata = {
  title: "Pacheco Lab. — Comunidade gratuita de tecnologia",
  description:
    "Uma comunidade gratuita para trocar experiências, compartilhar projetos e acompanhar conteúdos sobre programação, dados, automação e carreira.",
};

export default function Home() {
  return <LandingPage />;
}
