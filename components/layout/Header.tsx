/**
 * components/layout/Header.tsx
 *
 * Cabeçalho fixo (sticky) presente em todas as páginas, conforme
 * definido na Etapa 3: logo à esquerda, navegação central/direita
 * no desktop, CTA de WhatsApp sempre visível, menu hambúrguer no
 * mobile. Server Component — a única parte interativa (o menu
 * mobile) é isolada em MobileMenu.tsx.
 */

import Link from "next/link";
import { mainNav, siteConfig, getWhatsAppLink, whatsappMessages } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { NavLink } from "@/components/layout/NavLink";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/85 backdrop-blur">
      <Container className="relative flex h-18 items-center justify-between py-4">
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight text-foreground"
        >
          {siteConfig.name}
        </Link>

        <nav aria-label="Navegação principal" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {mainNav.map((item) => (
              <li key={item.href}>
                <NavLink
                  href={item.href}
                  className="group relative py-1 text-sm font-medium text-muted transition-colors hover:text-foreground"
                  activeClassName="text-foreground"
                >
                  {item.label}
                  <span className="absolute inset-x-0 -bottom-0.5 h-px scale-x-0 bg-primary-hover transition-transform duration-200 group-hover:scale-x-100 group-aria-[current=page]:scale-x-100" />
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:block">
          <Button href={getWhatsAppLink(whatsappMessages.default)} variant="primary" size="md">
            Falar no WhatsApp
          </Button>
        </div>

        <MobileMenu />
      </Container>
    </header>
  );
}
