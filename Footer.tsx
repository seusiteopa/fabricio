/**
 * components/layout/Footer.tsx
 *
 * Rodapé presente em todas as páginas. Reforça navegação e contato.
 * Redes sociais não confirmadas no briefing (Facebook, LinkedIn,
 * YouTube) ficam ocultas automaticamente — o componente só renderiza
 * o que existe em lib/constants.ts, evitando links quebrados.
 * Quando o cliente informar essas redes, basta preencher a constante;
 * nenhum componente precisa ser alterado.
 */

import Link from "next/link";
import {
  mainNav,
  legalNav,
  siteConfig,
  contactInfo,
  getWhatsAppLink,
  whatsappMessages,
} from "@/lib/constants";
import { Container } from "@/components/ui/Container";

const socialLinks = [
  { label: "Instagram", href: contactInfo.instagram },
  { label: "Facebook", href: contactInfo.facebook },
  { label: "LinkedIn", href: contactInfo.linkedin },
  { label: "YouTube", href: contactInfo.youtube },
].filter((link): link is { label: string; href: string } => Boolean(link.href));

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-surface">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-3">
          <span className="font-display text-lg font-semibold text-foreground">
            {siteConfig.name}
          </span>
          <p className="text-sm text-muted">{siteConfig.tagline}</p>
        </div>

        <nav aria-label="Navegação do rodapé" className="flex flex-col gap-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted">
            Navegação
          </span>
          <ul className="flex flex-col gap-2">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-muted hover:text-foreground">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted">
            Contato
          </span>
          <a
            href={getWhatsAppLink(whatsappMessages.default)}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted hover:text-foreground"
          >
            WhatsApp: {contactInfo.whatsappDisplay}
          </a>
          {contactInfo.email && (
            <a href={`mailto:${contactInfo.email}`} className="text-sm text-muted hover:text-foreground">
              {contactInfo.email}
            </a>
          )}
        </div>

        {socialLinks.length > 0 && (
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted">
              Redes sociais
            </span>
            <ul className="flex flex-col gap-2">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted hover:text-foreground"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Container>

      <div className="border-t border-line py-6">
        <Container className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted">
            © {year} {siteConfig.name}. Todos os direitos reservados.
          </p>
          <ul className="flex gap-5">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-xs text-muted hover:text-foreground">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </footer>
  );
}
