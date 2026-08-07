/**
 * components/ui/InfinityMark.tsx
 *
 * Elemento assinatura da marca: o traço do ícone infinito do logo,
 * desenhado como stroke SVG animado (efeito de "desenho" ao carregar
 * a página). É o único elemento com motion elaborado do site — a
 * seção "Restraint" do processo de design pede um momento de
 * destaque só, e este é ele, ligado diretamente à identidade visual
 * da Vecorion (infinito + globo = continuidade e alcance nacional).
 *
 * Puramente decorativo (aria-hidden) e respeita prefers-reduced-motion
 * via globals.css, que zera a duração de todas as animações.
 */

export function InfinityMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 120"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M60 20C37.9 20 20 37.9 20 60s17.9 40 40 40c14 0 26.4-7.1 33.7-17.9L120 60l26.3 22.1C153.6 92.9 166 100 180 100c22.1 0 40-17.9 40-40s-17.9-40-40-40c-14 0-26.4 7.1-33.7 17.9L120 60 93.7 37.9C86.4 27.1 74 20 60 20Z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        pathLength={1}
        className="vecorion-mark-path"
      />
      <circle cx="180" cy="60" r="18" stroke="currentColor" strokeWidth="2" opacity="0.6" />
    </svg>
  );
}
