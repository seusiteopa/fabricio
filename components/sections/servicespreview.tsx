/**
 * components/sections/ServicesPreview.tsx
 *
 * Prévia do serviço principal na Home, com link para a página
 * completa /servicos — evita sobrecarregar a Home com todo o
 * detalhamento, conforme estrutura definida na Etapa 3.
 */

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { services } from "@/lib/services";

export function ServicesPreview() {
  const mainService = services[0];

  return (
    <section className="border-t border-line bg-surface/40 section-py">
      <Container className="flex flex-col gap-10">
        <SectionHeading eyebrow="Serviços" title="O que fazemos" />
        <Card className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-foreground">{mainService.title}</h3>
            <p className="max-w-lg text-sm text-muted leading-relaxed">{mainService.summary}</p>
          </div>
          <Button href="/servicos" variant="secondary">
            Ver todos os serviços
          </Button>
        </Card>
      </Container>
    </section>
  );
}
