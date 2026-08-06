/**
 * components/sections/AboutPreview.tsx
 *
 * Resumo da missão/valores na Home, com CTA para a página /sobre
 * completa (que traz a história e os 7 valores da marca).
 */

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function AboutPreview() {
  return (
    <section className="section-py">
      <Container className="flex flex-col gap-8">
        <SectionHeading
          eyebrow="Sobre a Vecorion"
          title="Tecnologia, IA e inovação a serviço do seu negócio"
          description="Apoiamos pessoas e pequenos negócios com tecnologia simples, acessível e humana, ajudando cada ideia a ganhar vida no mundo digital."
        />
        <div>
          <Button href="/sobre" variant="secondary">
            Conheça nossa história
          </Button>
        </div>
      </Container>
    </section>
  );
}
