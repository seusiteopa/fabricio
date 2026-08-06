import type { NextConfig } from "next";

/**
 * next.config.ts
 *
 * Etapa 6 — hardening e performance:
 * - `poweredByHeader: false` remove o header `X-Powered-By: Next.js`
 *   (não expõe stack desnecessariamente).
 * - `compress: true` garante compressão gzip/brotli das respostas
 *   (padrão do Next, explicitado aqui por clareza).
 * - `headers()` adiciona cabeçalhos de segurança básicos a todas as
 *   rotas. Cache de assets estáticos do Next (`/_next/static`) é
 *   deixado sob responsabilidade do próprio Next/Netlify, que já
 *   aplicam `immutable` automaticamente para arquivos com hash no
 *   nome — sobrepor esse header manualmente gera conflito.
 */
const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
