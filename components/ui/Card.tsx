/**
 * components/ui/Card.tsx
 *
 * Bloco elevado reutilizado por diferenciais, valores da marca,
 * cards de serviço e itens de processo. Mantém padding, borda e
 * hover consistentes em qualquer grid do site.
 */

import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-line bg-surface p-6 transition-all duration-200 hover:-translate-y-1 hover:border-primary-hover/60 hover:shadow-[0_12px_28px_-12px_rgba(0,0,0,0.5)] ${className}`}
    >
      {children}
    </div>
  );
}
