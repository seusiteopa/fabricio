"use client";

/**
 * components/layout/MobileMenu.tsx
 *
 * Menu hambúrguer para telas pequenas. Isolado como Client Component
 * porque precisa de estado (aberto/fechado) — o restante do Header
 * permanece Server Component, minimizando JS enviado ao cliente.
 */

import { useState } from "react";
import { mainNav, contactInfo, getWhatsAppLink, whatsappMessages } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { NavLink } from "@/components/layout/NavLink";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls="mobile-nav"
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-foreground"
      >
        <span className="sr-only">{isOpen ? "Fechar menu" : "Abrir menu"}</span>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          {isOpen ? (
            <path
              d="M5 5l10 10M15 5L5 15"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          ) : (
            <path
              d="M3 5h14M3 10h14M3 15h14"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          )}
        </svg>
      </button>

      {isOpen && (
        <div
          id="mobile-nav"
          className="absolute inset-x-0 top-full animate-[menu-in_0.2s_ease-out] border-b border-line bg-surface px-6 py-6 shadow-xl"
        >
          <nav aria-label="Navegação principal (mobile)">
            <ul className="flex flex-col gap-4">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <NavLink
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-lg font-medium text-muted transition-colors hover:text-foreground"
                    activeClassName="text-foreground"
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-6">
            <Button
              href={getWhatsAppLink(whatsappMessages.default)}
              variant="primary"
              size="lg"
              className="w-full"
            >
              Falar no WhatsApp
            </Button>
          </div>
          <p className="mt-4 text-xs text-muted">{contactInfo.whatsappDisplay}</p>
        </div>
      )}
    </div>
  );
}
