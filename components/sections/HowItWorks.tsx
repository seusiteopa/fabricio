/**
 * components/sections/HowItWorks.tsx
 *
 * Processo em etapas — principal substituto de prova social definido
 * na Etapa 3, já que a Vecorion ainda não possui depoimentos/portfólio
 * público. Numeração aqui é apropriada porque o conteúdo é
 * genuinamente sequencial (um processo real de trabalho).
 */

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { ProcessStep } from "@/types";

const steps: ProcessStep[] = [
  {
    title: "Contato inicial",
    description: "Você fala com a gente pelo WhatsApp e conta o que precisa.",
  },
  {
    title: "Briefing e planejamento",
    description: "Entendemos seu negócio, seu público e definimos o escopo do projeto.",
  },
  {
    title: "Desenvolvimento",
    description: "Criamos seu site com tecnologia moderna e identidade visual personalizada.",
  },
  {
    title: "Entrega e suporte",
    description: "Seu site vai ao ar e você conta com suporte após a entrega.",
  },
];

export function HowItWorks() {
  return (
    <section className="section-py">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="Processo"
          title="Como funciona"
          description="Um processo simples, transparente e sem surpresas — do primeiro contato à entrega do seu site."
        />
        <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title} className="flex flex-col gap-2">
              <span className="font-mono text-sm text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-base font-semibold text-foreground">{step.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
