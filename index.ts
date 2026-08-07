/**
 * types/index.ts
 *
 * Tipos compartilhados entre componentes. Manter tipos de domínio
 * separados dos componentes facilita reuso e evita imports
 * circulares conforme o projeto cresce (ex: catálogo de serviços
 * usado tanto na Home quanto na página Serviços).
 */

export type Service = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  highlights: string[];
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type ProcessStep = {
  title: string;
  description: string;
};
