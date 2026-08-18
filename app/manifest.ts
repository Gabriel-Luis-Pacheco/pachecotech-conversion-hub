import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "PachecoLab",
    short_name: "PachecoLab",
    description:
      "Comunidade gratuita de programação e tecnologia no WhatsApp e Discord.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#111111",
    lang: "pt-BR",
    icons: [
      {
        src: "/pacheco-lab-logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
