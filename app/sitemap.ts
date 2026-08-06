import type { MetadataRoute } from "next";
import { siteConfig, mainNav, legalNav } from "@/lib/constants";

/**
 * app/sitemap.ts
 *
 * Gera /sitemap.xml automaticamente a partir de `mainNav` + `legalNav`,
 * as mesmas listas usadas pelo Header/Footer. Sempre que uma nova
 * página for adicionada a essas listas, o sitemap é atualizado sem
 * esforço extra. Páginas legais entram com prioridade menor, já que
 * não são o foco de indexação comercial.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    ...mainNav.map((item) => ({
      url: `${siteConfig.url}${item.href}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: item.href === "/" ? 1 : 0.7,
    })),
    ...legalNav.map((item) => ({
      url: `${siteConfig.url}${item.href}`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];

  return pages;
}
