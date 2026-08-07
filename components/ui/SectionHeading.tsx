/**
 * components/ui/SectionHeading.tsx
 *
 * Padrão de cabeçalho de seção (eyebrow + título + descrição opcional)
 * reutilizado em quase todas as seções da Home e páginas internas.
 * Manter esse padrão em um componente único garante hierarquia
 * tipográfica consistente (H2 semântico) em todo o site.
 */

import { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-3 max-w-2xl ${alignment}`}>
      {eyebrow && (
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl sm:text-4xl font-semibold leading-tight text-foreground">
        {title}
      </h2>
      {description && (
        <p className="text-base text-muted leading-relaxed">{description}</p>
      )}
    </div>
  );
}
