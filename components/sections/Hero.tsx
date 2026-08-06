/**
 * components/sections/Hero.tsx
 *
 * Seção principal da Home. Recebe na Etapa 5 o tratamento visual
 * final: o InfinityMark como elemento assinatura (desenhado ao
 * carregar a página), grid de duas colunas no desktop (texto + mark)
 * que colapsa para coluna única no mobile, e um type scale fluido
 * com clamp() para não pular bruscamente entre breakpoints.
 */

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { InfinityMark } from "@/components/ui/InfinityMark";
import { getWhatsAppLink, whatsappMessages } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-1/2 hidden w-[520px] -translate-y-1/2 text-primary/25 lg:block"
      >
        <InfinityMark className="w-full" />
      </div>

      <Container className="relative grid gap-10 py-20 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="flex flex-col items-start gap-6">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Sites e páginas profissionais
          </span>
          <h1
            className="max-w-2xl font-display font-semibold leading-[1.05] text-foreground"
            style={{ fontSize: "clamp(2.25rem, 4.5vw + 1rem, 3.75rem)" }}
          >
            Presença digital que gera confiança e resultados
          </h1>
          <p className="max-w-xl text-lg text-muted">
            Desenvolvemos sites modernos, rápidos e responsivos para empreendedores e pequenas
            empresas em todo o Brasil — com atendimento próximo e preço único.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button href={getWhatsAppLink(whatsappMessages.hero)} variant="primary" size="lg">
              Falar no WhatsApp
            </Button>
            <Button href="/servicos" variant="secondary" size="lg">
              Ver serviços
            </Button>
          </div>
          <p className="text-sm text-muted">Atendimento 100% online · Todo o Brasil</p>
        </div>

        <div className="flex justify-center lg:hidden" aria-hidden="true">
          <InfinityMark className="w-48 text-primary/40" />
        </div>
      </Container>
    </section>
  );
}
