/**
 * components/sections/FaqPreview.tsx
 *
 * Versão resumida do FAQ na Home (as perguntas que mais reduzem
 * objeção, conforme Etapa 3), com link para a lista completa.
 */

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FaqList } from "@/components/sections/FaqList";
import { faqItems } from "@/lib/constants";

export function FaqPreview() {
  const topQuestions = faqItems.slice(0, 4);

  return (
    <section className="section-py">
      <Container className="flex flex-col gap-10">
        <SectionHeading eyebrow="Dúvidas" title="Perguntas frequentes" />
        <FaqList items={topQuestions} />
        <div>
          <Button href="/contato" variant="ghost">
            Ver todas as perguntas →
          </Button>
        </div>
      </Container>
    </section>
  );
}
