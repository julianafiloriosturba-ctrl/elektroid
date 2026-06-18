/* ============================================
   PRODUTOS — Elektroid
   Para editar: troque texto, preco_de, preco_por e imagem.
   Pasta de imagens: assets/produtos/
   Se "imagem" não existir ainda, o site mostra um placeholder automaticamente.
   ============================================ */

const PRODUTOS = {

  scooters: [
    {
      nome: "Scooter E-350W",
      imagem: "assets/produtos/scooter-urban-500.jpg",
      potencia: "350W",
      autonomia: "35 km",
      preco_de: 4000,
      preco_por: 2990,
      badge: "Promoção"
    },
    {
      nome: "Scooter E-1000W",
      imagem: "assets/produtos/scooter-sport-1000.jpg",
      potencia: "1000W",
      autonomia: "45 km",
      preco_de: 11000,
      preco_por: 8990,
      badge: "Promoção"
    },
    {
      nome: "Scooter Z 1000",
      imagem: "assets/produtos/scooter-z-1000.jpg",
      potencia: "1000W",
      autonomia: "45 km",
      preco_de: 11500,
      preco_por: 7990,
      badge: ""
    },
    {
      nome: "Scooter Z Sport 1000",
      imagem: "assets/produtos/scooter-zs-1000.jpg",
      potencia: "1000W",
      autonomia: "50 km",
      preco_de: 9000,
      preco_por: 8300,
      badge: ""
    }
  ],

  triciclos: [
    {
      nome: "Triciclo Cargo XSL 600",
      imagem: "assets/produtos/triciclo-xsl-600.jpg",
      potencia: "600W",
      autonomia: "40 km",
      preco_de: 12000,
      preco_por: 9900,
      badge: "Promoção"
    },
    {
      nome: "Triciclo Compact KZ 500",
      imagem: "assets/produtos/triciclo-kz-500.jpg",
      potencia: "500W",
      autonomia: "35 km",
      preco_de: 4500,
      preco_por: 4000,
      badge: "Promoção"
    }
  ],

  acessorios: [
    {
      nome: "Power bank 20.000mAh",
      imagem: "assets/produtos/power-bank-20000.jpg",
      potencia: "20.000mAh",
      autonomia: "Carga rápida",
      preco_de: 0,
      preco_por: 149,
      badge: ""
    },
    {
      nome: "Capinha à prova d'água",
      imagem: "assets/produtos/capinha-impermeavel.jpg",
      potencia: "Universal",
      autonomia: "Touch sensível",
      preco_de: 0,
      preco_por: 39,
      badge: ""
    },
    {
      nome: "Carregador turbo 65W",
      imagem: "assets/produtos/carregador-65w.jpg",
      potencia: "65W",
      autonomia: "USB-C",
      preco_de: 119,
      preco_por: 89,
      badge: "Promoção"
    },
    {
      nome: "Garrafa térmica 1L",
      imagem: "assets/produtos/garrafa-termica.jpg",
      potencia: "Aço inox",
      autonomia: "Mantém 12h",
      preco_de: 0,
      preco_por: 69,
      badge: ""
    }
  ],

  eletronicos: [
    {
      nome: "Smartwatch Fit Pro",
      imagem: "assets/produtos/smartwatch-fit-pro.jpg",
      potencia: "Tela AMOLED",
      autonomia: "7 dias",
      preco_de: 449,
      preco_por: 329,
      badge: "Promoção"
    },
    {
      nome: "Fone Bluetooth TWS",
      imagem: "assets/produtos/fone-tws.jpg",
      potencia: "Cancelamento de ruído",
      autonomia: "24h",
      preco_de: 199,
      preco_por: 139,
      badge: ""
    },
    {
      nome: "Caixa de som portátil",
      imagem: "assets/produtos/caixa-som.jpg",
      potencia: "30W",
      autonomia: "12h",
      preco_de: 0,
      preco_por: 179,
      badge: ""
    },
    {
      nome: "Câmera instantânea",
      imagem: "assets/produtos/camera-instantanea.jpg",
      potencia: "Impressão na hora",
      autonomia: "Bateria recarregável",
      preco_de: 0,
      preco_por: 299,
      badge: "Promoção"
    }
  ]

};

const DEPOIMENTOS = [
  { texto: "Comprei minha scooter há 6 meses e funciona perfeitamente. Atendimento incrível e entrega super rápida!", autor: "João M." },
  { texto: "Produto igual às fotos, entrega no prazo e suporte pós-venda excelente. Totalmente recomendo!", autor: "Ana Paula S." },
  { texto: "Produto incrível! Chegou mais rápido do que esperava. Qualidade impecável, superou todas as expectativas.", autor: "Carlos M." },
  { texto: "Atendimento excelente do início ao fim. A scooter chegou no prazo, bem embalada. Super recomendo!", autor: "Ana Luiza F." },
  { texto: "Fiquei impressionado com a qualidade da scooter. Vale muito cada centavo. Entrega para o Ceará foi super rápida!", autor: "Roberto S." },
  { texto: "Melhor compra que fiz esse ano. Suporte pós-venda impecável, sem dúvida respondida na hora.", autor: "Fernanda O." }
];
