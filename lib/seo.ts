/**
 * lib/seo.ts
 *
 * Helper central para gerar metadata consistente (title, description,
 * Open Graph, canonical) em cada página. Evita repetir a mesma
 * estrutura de metadata em todo arquivo page.tsx e garante que
 * qualquer ajuste futuro de SEO (ex: adicionar Twitter Card) seja
 * feito em um único lugar.
 */

import type { Metadata } from "next";
import { siteConfig } from "./constants";

type PageSeoInput = {
  title: string;
  description: string;
  path?: string; // ex: "/sobre"
};

export function buildMetadata({ title, description, path = "" }: PageSeoInput): Metadata {
  const url = `${siteConfig.url}${path}`;
  const fullTitle = path === "" ? `${title}` : `${title} | ${siteConfig.name}`;

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
