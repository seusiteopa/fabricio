/**
 * lib/services.ts
 *
 * Catálogo de serviços em dados estáticos (sem CMS/DB, conforme
 * escopo aprovado). Usado tanto pela prévia na Home quanto pela
 * página /servicos completa. Adicionar um novo serviço no futuro
 * significa apenas adicionar um item a este array — nenhum
 * componente precisa mudar.
 */

import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "sites-profissionais",
    title: "Sites e páginas profissionais",
    summary: "Sites modernos, rápidos, responsivos e desenvolvidos para gerar resultados.",
    description:
      "Desenvolvimento de sites e páginas profissionais sob medida, com foco em desempenho, credibilidade e conversão — da estrutura ao design final.",
    highlights: [
      "Design personalizado para o seu negócio",
      "Responsivo (mobile, tablet e desktop)",
      "Otimizado para performance e SEO",
      "Botão de contato direto via WhatsApp",
    ],
  },
];
