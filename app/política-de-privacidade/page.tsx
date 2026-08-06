import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { contactInfo, getWhatsAppLink, whatsappMessages } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Política de Privacidade",
  description: "Saiba como a Vecorion trata dados e informações de visitantes do site.",
  path: "/politica-de-privacidade",
});

/**
 * app/politica-de-privacidade/page.tsx
 *
 * Página institucional estática. O conteúdo reflete fielmente o
 * comportamento real do site (nenhum dado de formulário é armazenado;
 * contato acontece via WhatsApp/e-mail) — evitando declarações
 * legais que não correspondam à implementação. Não substitui
 * aconselhamento jurídico; recomenda-se revisão por um profissional
 * antes da publicação final, especialmente se ferramentas de
 * analytics forem adicionadas no futuro.
 */

export default function PoliticaDePrivacidadePage() {
  return (
    <section className="section-py">
      <Container className="flex max-w-3xl flex-col gap-10">
        <SectionHeading
          eyebrow="Política de Privacidade"
          title="Como tratamos suas informações"
          description="Última atualização: agosto de 2026."
        />

        <div className="flex flex-col gap-8 text-sm leading-relaxed text-muted">
          <div className="flex flex-col gap-2">
            <h2 className="text-base font-semibold text-foreground">1. Formulário de contato</h2>
            <p>
              O formulário de contato deste site não envia, transmite ou armazena dados em
              nenhum servidor, banco de dados ou serviço de terceiros. Ele apenas monta uma
              mensagem com as informações preenchidas e abre o WhatsApp ou o aplicativo de
              e-mail do seu dispositivo para que você mesmo envie o contato.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-base font-semibold text-foreground">2. WhatsApp e e-mail</h2>
            <p>
              Ao entrar em contato pelo WhatsApp ou e-mail, as informações trocadas passam a
              fazer parte da nossa conversa direta com você, seguindo os termos de privacidade
              do próprio WhatsApp e do seu provedor de e-mail. A Vecorion utiliza essas
              informações exclusivamente para responder ao seu contato e, se aplicável, prestar
              o serviço solicitado.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-base font-semibold text-foreground">3. Cookies e navegação</h2>
            <p>
              Este site não utiliza cookies de rastreamento ou ferramentas de analytics de
              terceiros no momento. Caso isso mude no futuro, esta política será atualizada para
              refletir com transparência quais dados passam a ser coletados.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-base font-semibold text-foreground">4. Seus direitos</h2>
            <p>
              Você pode, a qualquer momento, solicitar esclarecimentos sobre como suas
              informações são tratadas nas nossas conversas de atendimento, entrando em contato
              pelo canal abaixo.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-base font-semibold text-foreground">5. Contato</h2>
            <p>
              Dúvidas sobre esta política podem ser enviadas para o nosso WhatsApp:{" "}
              <a
                href={getWhatsAppLink(whatsappMessages.default)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline underline-offset-2 hover:text-accent"
              >
                {contactInfo.whatsappDisplay}
              </a>
              .
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
