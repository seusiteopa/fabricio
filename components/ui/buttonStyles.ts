/**
 * components/ui/buttonStyles.ts
 *
 * Fonte única das classes visuais de botão. Extraído do componente
 * <Button> (Etapa 6 — eliminação de duplicação) porque o ContactForm
 * precisa de elementos <button> nativos por acessibilidade (ver
 * ContactForm.tsx), mas deve ter exatamente a mesma aparência dos
 * CTAs do resto do site. Qualquer ajuste visual de botão agora só
 * precisa ser feito aqui.
 */

export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize = "md" | "lg";

export const buttonVariantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white shadow-[0_0_0_1px_rgba(255,255,255,0.04)] hover:bg-primary-hover hover:shadow-[0_6px_20px_-4px_rgba(43,86,198,0.55)] active:translate-y-px",
  secondary:
    "bg-transparent text-foreground border border-line hover:border-primary-hover hover:bg-surface-hover active:translate-y-px",
  ghost: "bg-transparent text-foreground hover:bg-surface-hover active:translate-y-px",
};

export const buttonSizeClasses: Record<ButtonSize, string> = {
  md: "px-5 py-2.5 text-sm min-h-11",
  lg: "px-7 py-3.5 text-base min-h-12",
};

export const buttonBaseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200";

export function getButtonClasses(variant: ButtonVariant = "primary", size: ButtonSize = "md") {
  return `${buttonBaseClasses} ${buttonVariantClasses[variant]} ${buttonSizeClasses[size]}`;
}
