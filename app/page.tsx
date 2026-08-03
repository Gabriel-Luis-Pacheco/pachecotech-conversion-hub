import type { Metadata } from "next";
import LandingPage from "./LandingPage";

export const metadata: Metadata = {
  title: "Pacheco Lab. — Comunidade privada de programação",
  description:
    "Tire dúvidas com contexto, pratique projetos e mantenha o ritmo ao lado de quem também está aprendendo programação.",
};

export default function Home() {
  return <LandingPage />;
}
