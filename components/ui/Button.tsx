/**
 * components/ui/Button.tsx
 *
 * Único componente de botão do sistema. Todos os CTAs do site
 * (header, hero, cards de serviço, CTA final, WhatsApp flutuante)
 * devem usar este componente para garantir consistência visual e
 * de acessibilidade (foco visível, área de toque mínima 44px).
 *
 * Suporta renderização como <a> (uso mais comum aqui, já que todo
 * CTA leva a WhatsApp/e-mail/rota interna) via Next.js Link quando
 * `href` é interno, ou <a> nativo para links externos/wa.me/mailto.
 */

import Link from "next/link";
import { AnchorHTMLAttributes, ReactNode } from "react";
import {
  getButtonClasses,
  type ButtonVariant,
  type ButtonSize,
} from "@/components/ui/buttonStyles";

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  external?: boolean;
  className?: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className">;

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  external = false,
  className = "",
  ...rest
}: ButtonProps) {
  const classes = `${getButtonClasses(variant, size)} ${className}`;

  const isExternal = external || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("https://wa.me");

  if (isExternal) {
    return (
      <a
        href={href}
        className={classes}
        target={href.startsWith("mailto:") ? undefined : "_blank"}
        rel="noopener noreferrer"
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}
