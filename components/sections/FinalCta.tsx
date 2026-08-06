/**
 * components/sections/FinalCta.tsx
 *
 * Bloco de fechamento full-width, última oportunidade de conversão
 * antes do rodapé (padrão definido na Etapa 3). Reutilizável em
 * qualquer página — cada página pode customizar título/mensagem.
 */

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { getWhatsAppLink, whatsappMessages } from "@/lib/constants";

type FinalCtaProps = {
  title?: string;
  description?: string;
  whatsappMessage?: string;
};

export function FinalCta({
  title = "Pronto para ter um site profissional?",
  description = "Fale agora com a Vecorion pelo WhatsApp e receba uma proposta personalizada para o seu negócio.",
  whatsappMessage = whatsappMessages.default,
}: FinalCtaProps) {
  return (
    <section className="border-t border-line bg-primary-soft">
      <Container className="flex flex-col items-center gap-6 py-20 text-center sm:py-24">
        <h2 className="max-w-2xl font-display text-3xl font-semibold text-foreground sm:text-4xl">
          {title}
        </h2>
        <p className="max-w-xl text-base text-muted">{description}</p>
        <Button href={getWhatsAppLink(whatsappMessage)} variant="primary" size="lg">
          Falar no WhatsApp agora
        </Button>
      </Container>
    </section>
  );
}
