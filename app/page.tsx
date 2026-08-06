import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { FinalCta } from "@/components/sections/FinalCta";
import { brandValues } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Sobre a Vecorion",
  description:
    "Conheça a história, a missão e os valores da Vecorion, empresa de desenvolvimento de sites profissionais fundada em 2026.",
  path: "/sobre",
});

export default function SobrePage() {
  return (
    <>
      <section className="border-b border-line section-py">
        <Container className="flex flex-col gap-6">
          <SectionHeading
            eyebrow="Nossa história"
            title="Tecnologia, inteligência artificial e inovação a serviço de quem empreende"
          />
          <p className="max-w-2xl text-base leading-relaxed text-muted">
            A Vecorion nasceu em 2026 com o propósito de desenvolver soluções digitais modernas,
            unindo tecnologia, inteligência artificial e inovação para facilitar a vida de
            pessoas, profissionais e empresas. Desde a sua criação, busca transformar ideias em
            soluções práticas, acessíveis e eficientes, ajudando seus clientes a fortalecerem sua
            presença digital e alcançarem melhores resultados.
          </p>
        </Container>
      </section>

      <section className="border-b border-line bg-surface/40 section-py">
        <Container className="flex flex-col gap-6">
          <SectionHeading
            eyebrow="Missão"
            title="Apoiar pessoas e pequenos negócios com tecnologia simples, acessível e humana"
            description="Ajudamos cada ideia a ganhar vida no mundo digital, com atendimento próximo e soluções pensadas para necessidades reais."
          />
        </Container>
      </section>

      <section className="section-py">
        <Container className="flex flex-col gap-10">
          <SectionHeading eyebrow="Nossos valores" title="O que guia cada projeto que entregamos" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {brandValues.map((value) => (
              <Card key={value.title}>
                <h3 className="mb-2 text-base font-semibold text-foreground">{value.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{value.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-surface/40 section-py">
        <Container className="flex flex-col gap-6">
          <SectionHeading
            eyebrow="Diferencial"
            title="O que torna a Vecorion diferente"
            description="Unimos tecnologia, inteligência artificial e atendimento próximo ao cliente, criando soluções modernas, personalizadas e acessíveis para atender necessidades reais com qualidade e eficiência."
          />
        </Container>
      </section>

      <FinalCta
        title="Vamos construir sua presença digital juntos?"
        description="Fale com a gente pelo WhatsApp e conte um pouco sobre o seu negócio."
      />
    </>
  );
}
