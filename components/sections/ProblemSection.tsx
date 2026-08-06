/**
 * components/sections/ProblemSection.tsx
 *
 * Bloco de reconhecimento de dor, posicionado logo após o Hero
 * (padrão problema → solução definido na Etapa 3).
 */

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const painPoints = [
  {
    title: "Site desatualizado",
    description: "Seu site atual não passa a credibilidade que o seu negócio já tem hoje.",
  },
  {
    title: "Ausência digital",
    description: "Clientes pesquisam antes de comprar e não te encontram — ou encontram pouco.",
  },
  {
    title: "Concorrência à frente",
    description: "Concorrentes com presença digital profissional saem na frente na hora da escolha.",
  },
];

export function ProblemSection() {
  return (
    <section className="section-py">
      <Container className="flex flex-col gap-10">
        <SectionHeading title="Sua empresa ainda não tem uma presença digital que gera confiança?" />
        <div className="grid gap-6 sm:grid-cols-3">
          {painPoints.map((point) => (
            <div key={point.title} className="flex flex-col gap-2">
              <h3 className="text-base font-semibold text-foreground">{point.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
