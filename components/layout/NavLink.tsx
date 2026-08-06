"use client";

/**
 * components/layout/NavLink.tsx
 *
 * Link de navegação que sabe se está na página atual. Isolado como
 * Client Component (usa usePathname) para que Header e MobileMenu
 * permaneçam o mais próximo possível de Server Components — apenas
 * este pequeno pedaço interativo é hidratado no cliente.
 *
 * Define aria-current="page" no link ativo, requisito de
 * acessibilidade para navegação (WCAG 2.4.8 — Localização) e reforça
 * visualmente qual página o visitante está vendo.
 */

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

type NavLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  activeClassName?: string;
  onClick?: () => void;
};

export function NavLink({
  href,
  children,
  className = "",
  activeClassName = "",
  onClick,
}: NavLinkProps) {
  const pathname = usePathname();
  const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
      className={`${className} ${isActive ? activeClassName : ""}`}
    >
      {children}
    </Link>
  );
}
