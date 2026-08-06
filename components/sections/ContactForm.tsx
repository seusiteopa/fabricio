"use client";

/**
 * components/sections/ContactForm.tsx
 *
 * Formulário de contato conforme escopo aprovado: NÃO envia dados a
 * nenhum servidor, banco de dados ou serviço externo. Ao ser
 * enviado, apenas monta um link `mailto:` ou `wa.me` com o conteúdo
 * preenchido e abre o aplicativo correspondente no dispositivo do
 * usuário. Nenhum dado é armazenado em nenhum momento — client-side
 * apenas para montar a string do link.
 *
 * Etapa 5: os controles de envio usam <button> nativo (não o
 * componente Button, que é semanticamente um link) para que leitores
 * de tela anunciem corretamente uma ação, não uma navegação —
 * requisito de acessibilidade (WCAG 4.1.2, nome/função/valor).
 */

import { FormEvent, useState } from "react";
import { contactInfo, getWhatsAppLink } from "@/lib/constants";
import { getButtonClasses } from "@/components/ui/buttonStyles";

export function ContactForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function buildMessage() {
    const intro = name ? `Olá! Meu nome é ${name}.` : "Olá!";
    return `${intro} ${message}`.trim();
  }

  function handleWhatsApp(event: FormEvent) {
    event.preventDefault();
    window.open(getWhatsAppLink(buildMessage()), "_blank", "noopener,noreferrer");
  }

  function handleEmail() {
    if (!contactInfo.email) return;
    const subject = encodeURIComponent(`Contato pelo site — ${name || "Visitante"}`);
    const body = encodeURIComponent(buildMessage());
    window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form className="flex flex-col gap-5" onSubmit={handleWhatsApp}>
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-sm font-medium text-foreground">
          Nome
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          autoComplete="name"
          className="rounded-lg border border-line bg-surface px-4 py-3 text-sm text-foreground outline-none transition-colors focus-visible:border-primary-hover"
          placeholder="Seu nome"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          rows={5}
          className="rounded-lg border border-line bg-surface px-4 py-3 text-sm text-foreground outline-none transition-colors focus-visible:border-primary-hover"
          placeholder="Conte um pouco sobre o seu projeto"
        />
      </div>

      <p className="text-xs text-muted">
        Este formulário não armazena seus dados — ele apenas abre o WhatsApp (ou e-mail) com sua
        mensagem pronta para envio.
      </p>

      <div className="flex flex-col gap-3 sm:flex-row">
        <button type="submit" className={getButtonClasses("primary", "lg")}>
          Enviar pelo WhatsApp
        </button>
        {contactInfo.email && (
          <button type="button" onClick={handleEmail} className={getButtonClasses("secondary", "lg")}>
            Enviar por e-mail
          </button>
        )}
      </div>
    </form>
  );
}
