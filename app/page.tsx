import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Reveal } from "@/components/ui/Reveal";
import { Hero } from "@/components/sections/Hero";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { Differentials } from "@/components/sections/Differentials";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { PortfolioPlaceholder } from "@/components/sections/PortfolioPlaceholder";
import { FaqPreview } from "@/components/sections/FaqPreview";
import { FinalCta } from "@/components/sections/FinalCta";

/**
 * app/page.tsx — Home
 *
 * Monta as seções na ordem estratégica definida na Etapa 3:
 * Hero → Problema → Diferenciais → Como funciona → Serviços (prévia)
 * → Sobre (prévia) → Portfólio (placeholder) → FAQ (prévia) → CTA final.
 *
 * Etapa 5: cada seção (exceto o Hero, que já tem seu próprio motion de
 * entrada) é envolvida em <Reveal> para a microinteração de fade/slide
 * ao rolar a página — mantendo a orquestração de seções limpa aqui.
 */

export const metadata: Metadata = buildMetadata({
  title: `Vecorion — Sites e Páginas Profissionais`,
  description:
    "A Vecorion desenvolve sites e páginas profissionais modernas, rápidas e responsivas para empreendedores e pequenas empresas em todo o Brasil.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <Reveal>
        <ProblemSection />
      </Reveal>
      <Reveal>
        <Differentials />
      </Reveal>
      <Reveal>
        <HowItWorks />
      </Reveal>
      <Reveal>
        <ServicesPreview />
      </Reveal>
      <Reveal>
        <AboutPreview />
      </Reveal>
      <Reveal>
        <PortfolioPlaceholder />
      </Reveal>
      <Reveal>
        <FaqPreview />
      </Reveal>
      <Reveal>
        <FinalCta />
      </Reveal>
    </>
  );
}
