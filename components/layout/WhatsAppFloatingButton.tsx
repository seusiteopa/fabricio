/**
 * components/layout/WhatsAppFloatingButton.tsx
 *
 * CTA fixo no canto inferior direito, presente em todas as páginas
 * (renderizado uma vez no layout raiz). Garante que o WhatsApp esteja
 * sempre a um clique de distância, independentemente do scroll —
 * decisão de CRO definida na Etapa 3.
 */

import { getWhatsAppLink, whatsappMessages } from "@/lib/constants";

export function WhatsAppFloatingButton() {
  return (
    <a
      href={getWhatsAppLink(whatsappMessages.default)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-black/30 transition-transform duration-200 hover:scale-105 hover:bg-primary-hover active:scale-95"
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.39 1.26 4.81L2 22l5.4-1.36a9.9 9.9 0 0 0 4.64 1.14h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm0 18.13c-1.5 0-2.96-.4-4.24-1.16l-.3-.18-3.2.81.85-3.12-.2-.32a8.14 8.14 0 0 1-1.25-4.35c0-4.5 3.66-8.16 8.16-8.16 4.49 0 8.15 3.66 8.15 8.16 0 4.5-3.66 8.32-8.16 8.32Zm4.48-6.12c-.25-.12-1.45-.72-1.68-.8-.22-.08-.39-.12-.55.12-.16.25-.63.8-.78.96-.14.16-.29.18-.53.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.48-1.39-1.73-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.42-.55-.42-.14 0-.31-.02-.47-.02-.16 0-.43.06-.65.31-.22.25-.86.84-.86 2.04 0 1.2.88 2.37 1 2.53.12.16 1.73 2.64 4.2 3.7.59.25 1.05.4 1.4.52.59.19 1.13.16 1.55.1.47-.07 1.45-.59 1.65-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.47-.28Z" />
      </svg>
    </a>
  );
}
