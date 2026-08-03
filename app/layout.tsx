import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Geist } from "next/font/google";
import "./globals.css";

const productionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "https://pacheco-lab-comunidade.vercel.app";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    productionUrl,
  ),
  title: {
    default: "Pacheco Lab — Comunidade gratuita no WhatsApp e Discord",
    template: "%s | Pacheco Lab",
  },
  description:
    "Comunidade gratuita com grupo no WhatsApp e servidor no Discord para tirar dúvidas, compartilhar projetos e conversar sobre tecnologia.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/pacheco-lab-logo.png",
    shortcut: "/pacheco-lab-logo.png",
    apple: "/pacheco-lab-logo.png",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Pacheco Lab",
    title: "Pacheco Lab — Comunidade gratuita no WhatsApp e Discord",
    description: "Aprenda tecnologia com outras pessoas pelo WhatsApp e pelo Discord.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Pacheco Lab — comunidade gratuita no WhatsApp e Discord.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pacheco Lab — Comunidade gratuita no WhatsApp e Discord",
    description: "Aprenda tecnologia com outras pessoas pelo WhatsApp e pelo Discord.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
