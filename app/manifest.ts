import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/constants";

/**
 * app/manifest.ts
 *
 * Web App Manifest (convenção de arquivo do Next.js, gera
 * /manifest.webmanifest automaticamente). Não transforma o site em
 * PWA instalável de fato — apenas fornece nome, cor de tema e ícone
 * corretos quando alguém salva o site na tela inicial do celular,
 * o que é comum no público-alvo (empreendedores acessando pelo
 * WhatsApp/Instagram no mobile).
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0a0e17",
    theme_color: "#0a0e17",
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
