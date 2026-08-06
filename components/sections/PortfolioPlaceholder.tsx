/**
 * components/sections/PortfolioPlaceholder.tsx
 *
 * Placeholder estratégico para a seção de portfólio/depoimentos,
 * ainda sem conteúdo real (empresa em fase inicial, conforme
 * briefing). Decisão da Etapa 3: manter o espaço reservado com
 * mensagem transparente é melhor para credibilidade do que remover
 * a seção — e evita retrabalho estrutural quando houver cases reais.
 */

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function PortfolioPlaceholder() {
  return (
    <section className="border-t border-line bg-surface/40 section-py">
      <Container className="flex flex-col items-center gap-6 text-center">
        <SectionHeading
          align="center"
          eyebrow="Portfólio"
          title="Estamos construindo nossos primeiros projetos"
          description="Em breve você verá aqui os cases reais de clientes atendidos pela Vecorion. Enquanto isso, fale com a gente e seja um dos primeiros projetos em destaque."
        />
        <Button href="/portfolio" variant="ghost">
          Ver portfólio →
        </Button>
      </Container>
    </section>
  );
}
