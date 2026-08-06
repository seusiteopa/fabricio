import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { FinalCta } from "@/components/sections/FinalCta";
import { services } from "@/lib/services";
import { getWhatsAppLink, whatsappMessages } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Serviços",
  description:
    "Desenvolvimento de sites e páginas profissionais modernas, rápidas, responsivas e feitas sob medida para o seu negócio.",
  path: "/servicos",
});

export default function ServicosPage() {
  return (
    <>
      <section className="border-b border-line section-py">
        <Container className="flex flex-col gap-6">
          <SectionHeading
            eyebrow="Serviços"
            title="Sites e páginas profissionais feitos sob medida"
            description="Cada projeto é desenvolvido de forma personalizada, com foco em desempenho, credibilidade e conversão."
          />
        </Container>
      </section>

      <section className="section-py">
        <Container className="flex flex-col gap-8">
          {services.map((service) => (
            <Card key={service.slug} className="flex flex-col gap-6 p-8">
              <div className="flex flex-col gap-3">
                <h2 className="font-display text-2xl font-semibold text-foreground">
                  {service.title}
                </h2>
                <p className="max-w-2xl text-base leading-relaxed text-muted">
                  {service.description}
                </p>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2">
                {service.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2 text-sm text-muted">
                    <span aria-hidden="true" className="mt-1 text-accent">
                      ✓
                    </span>
                    {highlight}
                  </li>
                ))}
              </ul>
              <div>
                <Button href={getWhatsAppLink(whatsappMessages.services)} variant="primary">
                  Pedir orçamento pelo WhatsApp
                </Button>
              </div>
            </Card>
          ))}
        </Container>
      </section>

      <FinalCta
        title="Vamos criar o site do seu negócio?"
        description="Fale com a gente pelo WhatsApp e receba uma proposta personalizada."
        whatsappMessage="Olá! Quero pedir um orçamento para o meu site."
      />
    </>
  );
}
