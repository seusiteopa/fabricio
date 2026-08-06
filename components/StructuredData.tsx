/**
 * components/seo/StructuredData.tsx
 *
 * Dados estruturados (Schema.org) em JSON-LD, injetados no <head> via
 * layout raiz. Usa o tipo ProfessionalService (mais adequado que
 * LocalBusiness genérico, já que a Vecorion não tem endereço físico
 * e atende 100% online em todo o Brasil). Ajuda o Google a entender
 * a natureza do negócio e pode habilitar rich results.
 */

import { siteConfig, contactInfo } from "@/lib/constants";

export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    image: `${siteConfig.url}/opengraph-image`,
    areaServed: {
      "@type": "Country",
      name: "Brasil",
    },
    telephone: `+${contactInfo.whatsappNumber}`,
    sameAs: [contactInfo.instagram].filter(Boolean),
    priceRange: "$$",
  };

  return (
    <script
      type="application/ld+json"
      // conteúdo gerado internamente a partir de dados estáticos confiáveis (lib/constants.ts), não de entrada do usuário
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
