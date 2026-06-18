/* ============================================
   PRODUTOS — Elektroid
   Para editar: troque texto, preco_de, preco_por e imagem.
   Pasta de imagens: assets/produtos/
   Se "imagem" não existir ainda, o site mostra um placeholder automaticamente.
   ============================================ */

const PRODUTOS = {

  scooters: [
    {
      nome: "Scooter Urban 500",
      imagem: "assets/produtos/scooter-urban-500.jpg",
      potencia: "500W",
      autonomia: "35 km",
      preco_de: 6000,
      preco_por: 4990,
      badge: "Promoção"
    },
    {
      nome: "Scooter Sport 1000",
      imagem: "assets/produtos/scooter-sport-1000.jpg",
      potencia: "1000W",
      autonomia: "50 km",
      preco_de: 13000,
      preco_por: 11000,
      badge: "Promoção"
    },
    {
      nome: "Scooter Z 1000",
      imagem: "assets/produtos/scooter-z-1000.jpg",
      potencia: "1000W",
      autonomia: "55 km",
      preco_de: 11500,
      preco_por: 10000,
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

  baterias: [
    {
      nome: "Bateria de Lítio 48V 20Ah",
      imagem: "assets/produtos/bateria-litio-48v-20ah.jpg",
      potencia: "48V · 20Ah",
      autonomia: "Ciclo de vida longo",
      preco_de: 0,
      preco_por: 1499,
      badge: "Produção própria"
    },
    {
      nome: "Bateria de Lítio 60V 20Ah",
      imagem: "assets/produtos/bateria-litio-60v-20ah.jpg",
      potencia: "60V · 20Ah",
      autonomia: "Ciclo de vida longo",
      preco_de: 0,
      preco_por: 1799,
      badge: "Produção própria"
    },
    {
      nome: "Bateria de Chumbo 48V 12Ah",
      imagem: "assets/produtos/bateria-chumbo-48v-12ah.jpg",
      potencia: "48V · 12Ah",
      autonomia: "Custo acessível",
      preco_de: 0,
      preco_por: 599,
      badge: "Produção própria"
    },
    {
      nome: "Bateria de Chumbo 60V 12Ah",
      imagem: "assets/produtos/bateria-chumbo-60v-12ah.jpg",
      potencia: "60V · 12Ah",
      autonomia: "Custo acessível",
      preco_de: 0,
      preco_por: 699,
      badge: "Produção própria"
    }
  ],

  pecasAcessorios: [
    {
      nome: "Carregador de bateria",
      imagem: "assets/produtos/carregador-bateria-scooter.jpg",
      potencia: "Universal",
      autonomia: "Carga completa",
      preco_de: 0,
      preco_por: 149,
      badge: ""
    },
    {
      nome: "Pneu para scooter elétrica",
      imagem: "assets/produtos/pneu-scooter.jpg",
      potencia: "Aro padrão",
      autonomia: "Alta durabilidade",
      preco_de: 0,
      preco_por: 189,
      badge: ""
    },
    {
      nome: "Motor para scooter elétrica",
      imagem: "assets/produtos/motor-scooter.jpg",
      potencia: "500W / 1000W",
      autonomia: "Reposição",
      preco_de: 0,
      preco_por: 899,
      badge: ""
    },
    {
      nome: "Painel/display de scooter",
      imagem: "assets/produtos/painel-scooter.jpg",
      potencia: "Digital",
      autonomia: "Reposição",
      preco_de: 0,
      preco_por: 249,
      badge: ""
    },
    {
      nome: "Espelho retrovisor",
      imagem: "assets/produtos/espelho-retrovisor.jpg",
      potencia: "Universal",
      autonomia: "Par",
      preco_de: 0,
      preco_por: 69,
      badge: ""
    },
    {
      nome: "Banco/assento de scooter",
      imagem: "assets/produtos/banco-scooter.jpg",
      potencia: "Universal",
      autonomia: "Reposição",
      preco_de: 0,
      preco_por: 229,
      badge: ""
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
