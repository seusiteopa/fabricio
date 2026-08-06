import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { InfinityMark } from "@/components/ui/InfinityMark";
import { getWhatsAppLink, whatsappMessages } from "@/lib/constants";

/**
 * app/not-found.tsx
 *
 * 404 personalizada, usada automaticamente pelo Next.js sempre que
 * uma rota não existe. Mantém a mesma identidade visual do restante
 * do site (dark mode, InfinityMark, CTAs de WhatsApp) em vez da
 * página em branco padrão.
 */

export const metadata: Metadata = {
  title: "Página não encontrada",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="flex flex-1 items-center py-24">
      <Container className="flex flex-col items-center gap-6 text-center">
        <InfinityMark className="w-32 text-primary/40" />
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          Erro 404
        </span>
        <h1 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
          Essa página não existe
        </h1>
        <p className="max-w-md text-base text-muted">
          O endereço que você tentou acessar não foi encontrado. Volte para a página inicial ou
          fale com a gente pelo WhatsApp.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button href="/" variant="primary" size="lg">
            Voltar para o início
          </Button>
          <Button href={getWhatsAppLink(whatsappMessages.default)} variant="secondary" size="lg">
            Falar no WhatsApp
          </Button>
        </div>
      </Container>
    </section>
  );
}
