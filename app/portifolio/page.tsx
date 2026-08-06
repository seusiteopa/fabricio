import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { FinalCta } from "@/components/sections/FinalCta";

export const metadata: Metadata = buildMetadata({
  title: "Portfólio",
  description:
    "Conheça os primeiros projetos da Vecorion. Nosso portfólio está em construção — seja um dos primeiros cases em destaque.",
  path: "/portfolio",
});

/**
 * app/portfolio/page.tsx
 *
 * Página de Portfólio/Galeria. Como a Vecorion ainda não tem projetos
 * públicos (empresa em fase inicial, conforme briefing), a grade é
 * preenchida com placeholders honestos em vez de itens falsos — a
 * mesma decisão estratégica da seção PortfolioPlaceholder da Home,
 * agora expandida em página própria. A estrutura de card já está
 * pronta para receber capas de projetos reais assim que existirem
 * (bastaria trocar o conteúdo de `placeholderProjects` por dados
 * reais, sem mudar o layout).
 */

const placeholderProjects = [
  { label: "Site institucional", category: "Em breve" },
  { label: "Página de serviços", category: "Em breve" },
  { label: "Landing page", category: "Em breve" },
];

export default function PortfolioPage() {
  return (
    <>
      <section className="border-b border-line section-py">
        <Container className="flex flex-col gap-6">
          <SectionHeading
            eyebrow="Portfólio"
            title="Projetos em construção"
            description="Estamos desenvolvendo nossos primeiros cases. Em breve, cada projeto entregue pela Vecorion terá seu espaço aqui, com resultados reais."
          />
        </Container>
      </section>

      <section className="section-py">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {placeholderProjects.map((project) => (
              <Card key={project.label} className="flex flex-col gap-4">
                <div className="flex aspect-[4/3] items-center justify-center rounded-xl border border-dashed border-line bg-ink/40">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-sm font-medium text-foreground">{project.label}</h3>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <FinalCta
        title="Quer ser o próximo case da Vecorion?"
        description="Fale com a gente pelo WhatsApp e vamos construir seu projeto juntos."
      />
    </>
  );
}
