import { ImageResponse } from "next/og";

/**
 * app/apple-icon.tsx
 *
 * Ícone usado pelo iOS ao adicionar o site à tela de início
 * (convenção de arquivo `apple-icon`). Fundo sólido na cor da marca,
 * já que ícones de tela de início não devem ter transparência.
 */
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0e17",
        }}
      >
        <svg width="120" height="70" viewBox="0 0 240 120" fill="none">
          <path
            d="M60 20C37.9 20 20 37.9 20 60s17.9 40 40 40c14 0 26.4-7.1 33.7-17.9L120 60l26.3 22.1C153.6 92.9 166 100 180 100c22.1 0 40-17.9 40-40s-17.9-40-40-40c-14 0-26.4 7.1-33.7 17.9L120 60 93.7 37.9C86.4 27.1 74 20 60 20Z"
            stroke="#f3f5f9"
            strokeWidth="9"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
