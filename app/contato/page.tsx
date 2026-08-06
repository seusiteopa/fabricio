import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/sections/ContactForm";
import { FaqList } from "@/components/sections/FaqList";
import { contactInfo, faqItems, getWhatsAppLink, whatsappMessages } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Contato",
  description:
    "Fale com a Vecorion pelo WhatsApp, e-mail ou Instagram. Atendimento 100% online para todo o Brasil.",
  path: "/contato",
});

export default function ContatoPage() {
  return (
    <>
      <section className="border-b border-line section-py">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <SectionHeading
              eyebrow="Contato"
              title="Vamos conversar sobre o seu projeto"
              description="Atendemos todo o Brasil, 100% online. Escolha o canal que preferir."
            />

            <div className="flex flex-col gap-4">
              <Button
                href={getWhatsAppLink(whatsappMessages.contact)}
                variant="primary"
                size="lg"
                className="w-full sm:w-fit"
              >
                Falar no WhatsApp — {contactInfo.whatsappDisplay}
              </Button>

              {contactInfo.email && (
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-sm text-muted hover:text-foreground"
                >
                  {contactInfo.email}
                </a>
              )}

              <a
                href={contactInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted hover:text-foreground"
              >
                Instagram: {contactInfo.instagramHandle}
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
            <ContactForm />
          </div>
        </Container>
      </section>

      <section className="border-b border-line bg-surface/40 py-16">
        <Container>
          <p className="text-sm text-muted">
            Nosso atendimento é online, disponível 24 horas por dia para recebimento de mensagens.
          </p>
        </Container>
      </section>

      <section className="section-py">
        <Container className="flex flex-col gap-10">
          <SectionHeading eyebrow="Dúvidas" title="Perguntas frequentes" />
          <FaqList items={faqItems} />
        </Container>
      </section>
    </>
  );
}
