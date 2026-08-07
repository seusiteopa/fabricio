/**
 * components/ui/Container.tsx
 *
 * Envelope de largura máxima e padding horizontal consistente.
 * Toda seção da página usa este componente para manter o mesmo
 * alinhamento de grid — evita que cada seção defina seu próprio
 * padding e gere desalinhamentos sutis entre blocos.
 */

import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-10 ${className}`}>
      {children}
    </div>
  );
}
