/**
 * lib/constants.ts
 *
 * Fonte única de verdade para dados institucionais, navegação e links
 * externos. Centralizar aqui evita strings duplicadas nos componentes
 * e facilita trocar número de WhatsApp, redes sociais ou textos de
 * navegação em um único lugar quando o cliente atualizar algo.
 */

export const siteConfig = {
  name: "Vecorion",
  tagline: "Presença digital profissional, do jeito certo.",
  description:
    "A Vecorion desenvolve sites e páginas profissionais modernas, rápidas e responsivas para empreendedores, autônomos e pequenas empresas em todo o Brasil.",
  url: "https://vecorion.com.br",
  locale: "pt_BR",
} as const;

export const contactInfo = {
  whatsappNumber: "5519991255529", // formato internacional, sem símbolos
  whatsappDisplay: "(19) 99125-5529",
  email: null as string | null, // "a definir" no briefing — habilitar quando existir
  instagram: "https://instagram.com/vecorion",
  instagramHandle: "@vecorion",
  facebook: null as string | null,
  linkedin: null as string | null,
  youtube: null as string | null,
} as const;

/**
 * Gera um link wa.me com mensagem pré-preenchida.
 * Usado por todos os CTAs de WhatsApp do site — nenhum dado é
 * armazenado, o link apenas abre o app/web do WhatsApp.
 */
export function getWhatsAppLink(message: string): string {
  const base = `https://wa.me/${contactInfo.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const whatsappMessages = {
  default: "Olá! Vim pelo site e gostaria de saber mais sobre a Vecorion.",
  hero: "Olá! Quero criar meu site profissional com a Vecorion.",
  services: "Olá! Tenho interesse no serviço de criação de site profissional.",
  contact: "Olá! Gostaria de falar com a equipe da Vecorion.",
} as const;

export type NavItem = {
  label: string;
  href: string;
};

export const mainNav: NavItem[] = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Serviços", href: "/servicos" },
  { label: "Portfólio", href: "/portfolio" },
  { label: "Contato", href: "/contato" },
];

// Links legais/institucionais, exibidos apenas no rodapé (fora da navegação principal)
export const legalNav: NavItem[] = [
  { label: "Política de Privacidade", href: "/politica-de-privacidade" },
];

export const brandValues = [
  {
    title: "Inovação",
    description: "Buscamos constantemente novas formas de criar soluções úteis.",
  },
  {
    title: "Simplicidade",
    description: "Produtos e serviços fáceis de entender e utilizar.",
  },
  {
    title: "Ética e transparência",
    description: "Agimos com honestidade e construímos relações de confiança.",
  },
  {
    title: "Foco no cliente",
    description: "Soluções voltadas para necessidades reais.",
  },
  {
    title: "Qualidade",
    description: "Atenção aos detalhes em cada entrega.",
  },
  {
    title: "Aprendizado contínuo",
    description: "Evoluímos acompanhando as mudanças da tecnologia e da IA.",
  },
  {
    title: "Acessibilidade",
    description: "Tecnologia mais próxima e disponível para todos os tamanhos de negócio.",
  },
] as const;

export const faqItems = [
  {
    question: "Quais serviços vocês oferecem?",
    answer:
      "Desenvolvemos sites e páginas profissionais modernas, rápidas, responsivas e pensadas para gerar resultados reais para o seu negócio.",
  },
  {
    question: "Como funciona o processo de contratação?",
    answer:
      "Você entra em contato pelo WhatsApp, entendemos sua necessidade em um briefing rápido, alinhamos escopo e prazo, e iniciamos o desenvolvimento do seu projeto.",
  },
  {
    question: "Quanto custa um site ou uma página profissional?",
    answer:
      "Trabalhamos com preço único e transparente. Fale com a gente pelo WhatsApp para receber uma proposta personalizada para o seu projeto.",
  },
  {
    question: "Qual é o prazo médio de entrega?",
    answer:
      "O prazo varia conforme a complexidade do projeto. Definimos um cronograma claro logo no início, para que você saiba exatamente o que esperar.",
  },
  {
    question: "O atendimento é totalmente online?",
    answer: "Sim, todo o nosso atendimento é 100% online, do primeiro contato à entrega final.",
  },
  {
    question: "Vocês atendem clientes de todo o Brasil?",
    answer: "Sim, atendemos empreendedores e empresas em todo o território nacional.",
  },
  {
    question: "O site será desenvolvido de forma personalizada?",
    answer:
      "Sim, cada projeto é desenvolvido sob medida, de acordo com a identidade e os objetivos do seu negócio.",
  },
  {
    question: "Vocês oferecem suporte após a entrega?",
    answer: "Sim, oferecemos suporte após a entrega do seu projeto.",
  },
  {
    question: "Quais formas de pagamento são aceitas?",
    answer: "Fale com a nossa equipe pelo WhatsApp para conhecer as formas de pagamento disponíveis.",
  },
] as const;
