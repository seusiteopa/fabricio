import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/constants";

/**
 * app/robots.ts
 *
 * Gera /robots.txt automaticamente a partir da URL configurada em
 * lib/constants.ts. Libera indexação total (site institucional
 * público) e aponta para o sitemap.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
