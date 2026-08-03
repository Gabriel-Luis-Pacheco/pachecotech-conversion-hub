import type { Metadata } from "next";
import LandingPage from "./LandingPage";

export const metadata: Metadata = {
  title: "Pacheco Lab — Comunidade gratuita no WhatsApp e Discord",
  description:
    "Entre gratuitamente no grupo do WhatsApp ou no servidor do Discord do Pacheco Lab para tirar dúvidas, compartilhar projetos e conversar sobre tecnologia.",
};

export default function Home() {
  return <LandingPage />;
}
