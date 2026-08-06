import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloatingButton } from "@/components/layout/WhatsAppFloatingButton";
import { StructuredData } from "@/components/seo/StructuredData";
import { siteConfig } from "@/lib/constants";

/**
 * app/layout.tsx
 *
 * Layout raiz aplicado a todas as páginas. Responsável por:
 * - Carregar as fontes da marca (display, corpo e mono) uma única vez
 * - Definir metadata global (usada como fallback/template pelas páginas)
 * - Renderizar o "shell" comum: Header, conteúdo da página, Footer e
 *   o botão flutuante de WhatsApp (presente em 100% das páginas)
 *
 * Nenhuma lógica de dados, autenticação ou providers de estado global
 * é adicionada aqui — o layout permanece um Server Component puro.
 */

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "criação de sites",
    "sites profissionais",
    "desenvolvimento web",
    "sites para pequenas empresas",
    "landing page",
    "Vecorion",
  ],
  authors: [{ name: siteConfig.name }],
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0e17",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-ink text-foreground">
        <StructuredData />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
        >
          Pular para o conteúdo
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
