/**
 * components/sections/FaqList.tsx
 *
 * Lista de perguntas frequentes, usada tanto na Home (versão
 * resumida) quanto em uma futura página/seção completa de FAQ.
 * Implementado com <details>/<summary> nativos: acessível por
 * padrão (teclado, leitor de tela) e não exige JavaScript no
 * cliente para funcionar — alinhado ao requisito de performance
 * e acessibilidade da Etapa 3.
 */

import type { FaqItem } from "@/types";

type FaqListProps = {
  items: readonly FaqItem[];
};

export function FaqList({ items }: FaqListProps) {
  return (
    <div className="flex flex-col divide-y divide-line border-t border-line">
      {items.map((item) => (
        <details key={item.question} className="group py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium text-foreground marker:content-none">
            {item.question}
            <span
              aria-hidden="true"
              className="shrink-0 text-muted transition-transform duration-200 group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-muted">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
