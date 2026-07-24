export type Dimensao = {
  label: string;
  altura?: string;
  largura?: string;
  profundidade?: string;
  raw?: string;
};

export type Eletrodomestico = {
  id: string;
  nome: string;
  subtitulo?: string;
  dimensoes: Dimensao[];
  imagem: string;
};

/**
 * Salve as fotos em: public/eletrodomesticos/
 * Use exatamente estes nomes de arquivo (jpg, png ou webp):
 *
 *   geladeira-panasonic.jpg
 *   cooktop-eos.jpg
 *   micro-ondas-electrolux.jpg
 *   forno-air-fryer-eos.jpg
 *   fritadeira-oster.jpg
 *   lava-louca-electrolux.jpg
 *   lavadora-lg.jpg
 */
export const eletrodomesticos: Eletrodomestico[] = [
  {
    id: "geladeira-panasonic",
    nome: "Geladeira Panasonic BB65",
    subtitulo:
      "Espelhada Diamond Glass Inverse Frost Free 467L Inverter NR-BB65GV7MC · Bivolt",
    dimensoes: [
      {
        label: "Dimensões (A × L × P)",
        altura: "185,8 cm",
        largura: "69,7 cm",
        profundidade: "74,6 cm",
      },
    ],
    imagem: "/eletrodomesticos/geladeira-panasonic.jpg",
  },
  {
    id: "cooktop-eos",
    nome: "Cooktop de Indução 4 Bocas EOS",
    subtitulo: "7200W Preto · ECI04EP2",
    dimensoes: [
      {
        label: "Para embutir (L × A)",
        largura: "56 cm",
        altura: "49 cm",
      },
      {
        label: "Medida do produto (L × A × P)",
        largura: "59 cm",
        altura: "52 cm",
        profundidade: "6,2 cm",
      },
    ],
    imagem: "/eletrodomesticos/cooktop-eos.jpg",
  },
  {
    id: "micro-ondas-electrolux",
    nome: "Micro-ondas Electrolux 20L",
    subtitulo: "Inox Espelhado com Função Tira Odor · MT30S",
    dimensoes: [
      {
        label: "Dimensões (A × L × P)",
        altura: "26,25 cm",
        largura: "45,8 cm",
        profundidade: "34,8 cm",
      },
    ],
    imagem: "/eletrodomesticos/micro-ondas-electrolux.jpg",
  },
  {
    id: "forno-air-fryer-eos",
    nome: "Forno e Fritadeira Air Fryer EOS",
    subtitulo: "38 Litros Digital Premium Inox · EAF40AID · 220V",
    dimensoes: [
      {
        label: "Dimensões (P × L × A)",
        profundidade: "32,5 cm",
        largura: "52 cm",
        altura: "38 cm",
      },
    ],
    imagem: "/eletrodomesticos/forno-air-fryer-eos.jpg",
  },
  {
    id: "fritadeira-oster",
    nome: "Fritadeira Elétrica Oster OFRT650",
    subtitulo: "4,8L · 1500W · Inox · Painel Touch",
    dimensoes: [
      {
        label: "Dimensões",
        raw: "Não informadas — adicione quando tiver",
      },
    ],
    imagem: "/eletrodomesticos/fritadeira-oster.jpg",
  },
  {
    id: "lava-louca-electrolux",
    nome: "Lava-Louça Electrolux 8 Serviços",
    subtitulo: "Inox · Programa Lava & Seca 50 min · LS08E",
    dimensoes: [
      {
        label: "Dimensões (A × L × P)",
        altura: "60,9 cm",
        largura: "55 cm",
        profundidade: "50 cm",
      },
    ],
    imagem: "/eletrodomesticos/lava-louca-electrolux.jpg",
  },
  {
    id: "lavadora-lg",
    nome: "Lavadora LG VC5 12kg",
    subtitulo: "Branca com Inteligência Artificial AIDD™ · 220V",
    dimensoes: [
      {
        label: "Dimensões (L × A × P)",
        largura: "60 cm",
        altura: "85 cm",
        profundidade: "56,5 cm",
      },
    ],
    imagem: "/eletrodomesticos/lavadora-lg.jpg",
  },
];
