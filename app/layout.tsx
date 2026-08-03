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
    default: "Pacheco Lab. — Comunidade privada de programação",
    template: "%s | Pacheco Lab.",
  },
  description:
    "Comunidade privada para tirar dúvidas, praticar projetos e evoluir na programação ao lado de outras pessoas.",
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
    title: "Pacheco Lab. — Comunidade privada de programação",
    description: "Comece na programação. Não evolua sozinho.",
    images: [
      {
        url: "/og.png",
        width: 1731,
        height: 908,
        alt: "Pacheco Lab. — Comece na programação. Não evolua sozinho.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pacheco Lab. — Comunidade privada de programação",
    description: "Comece na programação. Não evolua sozinho.",
    images: ["/og.png"],
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
