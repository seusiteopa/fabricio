import { ImageResponse } from "next/og";

/**
 * app/icon.tsx
 *
 * Favicon gerado dinamicamente pelo Next.js (convenção de arquivo
 * `icon`) a partir do mesmo traço vetorial do InfinityMark. Evita
 * depender de um arquivo .ico exportado manualmente e garante que,
 * se a paleta da marca mudar, o favicon muda junto — uma única fonte
 * de verdade para o desenho do símbolo.
 */
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: 6,
        }}
      >
        <svg width="24" height="14" viewBox="0 0 240 120" fill="none">
          <path
            d="M60 20C37.9 20 20 37.9 20 60s17.9 40 40 40c14 0 26.4-7.1 33.7-17.9L120 60l26.3 22.1C153.6 92.9 166 100 180 100c22.1 0 40-17.9 40-40s-17.9-40-40-40c-14 0-26.4 7.1-33.7 17.9L120 60 93.7 37.9C86.4 27.1 74 20 60 20Z"
            stroke="#f3f5f9"
            strokeWidth="10"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
