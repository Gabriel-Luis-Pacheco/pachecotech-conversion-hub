import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const productionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "https://pacheco-lab-comunidade.vercel.app";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    productionUrl,
  ),
  title: {
    default: "Pacheco Lab. — Comunidade gratuita de tecnologia",
    template: "%s | Pacheco Lab.",
  },
  description:
    "Comunidade gratuita para aprender, compartilhar projetos, tirar dúvidas e acompanhar conteúdos sobre programação, dados, automação e carreira.",
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
    siteName: "Pacheco Lab.",
    title: "Pacheco Lab. — Comunidade gratuita de tecnologia",
    description: "Aprenda, compartilhe projetos e evolua em tecnologia com outras pessoas.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Pacheco Lab. — Comunidade gratuita de tecnologia.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pacheco Lab. — Comunidade gratuita de tecnologia",
    description: "Aprenda, compartilhe projetos e evolua em tecnologia com outras pessoas.",
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
