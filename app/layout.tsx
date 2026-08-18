import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Geist } from "next/font/google";
import "./globals.css";

const productionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "https://pacheco-lab-comunidade.vercel.app";

const googleSiteVerification =
  process.env.GOOGLE_SITE_VERIFICATION ??
  "FsYP3_lx6RRL60B4xUq4Bc-PyJqEBeqaXu_s8U-oA1Q";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(productionUrl),
  applicationName: "PachecoLab",
  title: {
    default: "PachecoLab — Comunidade gratuita de programação e tecnologia",
    template: "%s | PachecoLab",
  },
  description:
    "PachecoLab (Pacheco Lab) é uma comunidade gratuita de programação e tecnologia no WhatsApp e Discord para tirar dúvidas, compartilhar projetos e conversar sobre programação, dados, automação, IA e carreira.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: googleSiteVerification,
  },
  icons: {
    icon: "/pacheco-lab-logo.png",
    shortcut: "/pacheco-lab-logo.png",
    apple: "/pacheco-lab-logo.png",
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "PachecoLab",
    title: "PachecoLab — Comunidade gratuita de programação e tecnologia",
    description:
      "Comunidade gratuita para aprender, tirar dúvidas, compartilhar projetos e conversar sobre programação e tecnologia no WhatsApp e Discord.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "PachecoLab — comunidade gratuita de programação e tecnologia.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PachecoLab — Comunidade gratuita de programação e tecnologia",
    description:
      "Comunidade gratuita para aprender, tirar dúvidas, compartilhar projetos e conversar sobre programação e tecnologia.",
    images: ["/opengraph-image"],
  },
  category: "technology",
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
