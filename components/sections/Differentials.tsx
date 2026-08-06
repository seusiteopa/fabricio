/**
 * components/sections/Differentials.tsx
 *
 * Grid de diferenciais competitivos definidos na Etapa 1
 * (atendimento próximo, tecnologia + IA, preço único, 100% online).
 */

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

const differentials = [
  {
    title: "Atendimento próximo",
    description: "Contato direto e humano do início ao fim do projeto, sem burocracia.",
  },
  {
    title: "Tecnologia + IA aplicada",
    description: "Ferramentas modernas de tecnologia e inteligência artificial a serviço do seu negócio.",
  },
  {
    title: "Preço único e transparente",
    description: "Sem letras miúdas: você sabe exatamente o que está contratando.",
  },
  {
    title: "100% online, todo o Brasil",
    description: "Atendemos qualquer cidade do país, com a mesma qualidade e agilidade.",
  },
];

export function Differentials() {
  return (
    <section className="border-t border-line bg-surface/40 section-py">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="Por que a Vecorion"
          title="Diferenciais que fazem sentido para o seu negócio"
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {differentials.map((item) => (
            <Card key={item.title}>
              <h3 className="mb-2 text-base font-semibold text-foreground">{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{item.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
