/* ============================================
   PRODUTOS — Elektroid
   ============================================ */

const PRODUTOS = {

  novidades: [
    {
      nome: "Elektroid Fly",
      modelo: "Fly",
      imagem: "assets/produtos/elektroid-fly-preta.jpg",
      motor: "350W 48V",
      autonomia: "23 km",
      velocidade: "32 km/h",
      bateria: "48V 8Ah Lítio",
      freio: "Disco dianteiro e traseiro",
      cores: ["#1a1a1a", "#f5f5f5", "#e86c00"],
      nomes_cores: ["Preta", "Branca", "Laranja"],
      fotos_cores: [
        "assets/produtos/elektroid-fly-preta.jpg",
        "assets/produtos/elektroid-fly-branca.jpg",
        "assets/produtos/elektroid-fly-laranja.jpg"
      ],
      preco_de: 0,
      preco_por: 2399,
      badge: "Novidade"
    },
    {
      nome: "Elektroid JY",
      modelo: "JY",
      imagem: "assets/produtos/elektroid-jy-azul.jpg",
      motor: "500W 48V",
      autonomia: "23 km",
      velocidade: "32 km/h",
      bateria: "48V 12Ah Chumbo",
      freio: "Disco dianteiro e traseiro",
      cores: ["#1b2a4a", "#1a1a1a", "#f5f5f5", "#cc2200"],
      nomes_cores: ["Azul", "Preta", "Branca", "Vermelha"],
      fotos_cores: [
        "assets/produtos/elektroid-jy-azul.jpg",
        "assets/produtos/elektroid-jy-preta.jpg",
        "assets/produtos/elektroid-jy-branca.jpg",
        "assets/produtos/elektroid-jy-vermelha.jpg"
      ],
      preco_de: 0,
      preco_por: 2999,
      badge: "Novidade"
    },
    {
      nome: "Elektroid ES05",
      modelo: "ES05",
      imagem: "assets/produtos/elektroid-es05-vermelho.jpg",
      motor: "500W 48V",
      autonomia: "25 km",
      velocidade: "32 km/h",
      bateria: "48V 20Ah Chumbo",
      freio: "Disco dianteiro e traseiro",
      cores: ["#cc2200", "#1b2a4a", "#f5f5f5"],
      nomes_cores: ["Vermelho", "Azul", "Branco"],
      fotos_cores: [
        "assets/produtos/elektroid-es05-vermelho.jpg",
        "assets/produtos/elektroid-es05-azul.jpg",
        "assets/produtos/elektroid-es05-branco.jpg"
      ],
      preco_de: 0,
      preco_por: 5999,
      badge: "Novidade"
    },
    {
      nome: "Elektroid T1",
      modelo: "T1",
      imagem: "assets/produtos/elektroid-xuanku-preta.jpeg",
      motor: "1000W 60V",
      autonomia: "45 km",
      velocidade: "32 km/h",
      bateria: "60V 20Ah Chumbo",
      freio: "Disco dianteiro e traseiro",
      cores: ["#1a1a1a", "#cc2200", "#1b2a4a", "#f5f5f5"],
      nomes_cores: ["Preta", "Vermelha", "Azul", "Branca"],
      fotos_cores: [
        "assets/produtos/elektroid-xuanku-preta.jpeg",
        "assets/produtos/elektroid-xuanku-vermelha.jpeg",
        "assets/produtos/elektroid-xuanku-azul.jpeg",
        "assets/produtos/elektroid-xuanku-branca.jpeg"
      ],
      preco_de: 0,
      preco_por: 8999,
      badge: "Novidade"
    },
    {
      nome: "Elektroid X3",
      modelo: "X3",
      imagem: "assets/produtos/elektroid-x3-vermelho.jpg",
      motor: "1000W 60V",
      autonomia: "45 km",
      velocidade: "32 km/h",
      bateria: "60V 20Ah Chumbo",
      freio: "Disco dianteiro e traseiro",
      cores: ["#cc2200", "#1b2a4a", "#1a1a1a", "#f5f5f5"],
      nomes_cores: ["Vermelho", "Azul", "Preto", "Branco"],
      fotos_cores: [
        "assets/produtos/elektroid-x3-vermelho.jpg",
        "assets/produtos/elektroid-x3-azul.jpg",
        "assets/produtos/elektroid-x3-preto.jpg",
        "assets/produtos/elektroid-x3-branco.jpg"
      ],
      preco_de: 0,
      preco_por: 9499,
      badge: "Novidade"
    }
  ],

  bikes: [
    {
      nome: "Elektroid Fly",
      modelo: "Fly",
      imagem: "assets/produtos/elektroid-fly-preta.jpg",
      motor: "350W 48V",
      autonomia: "23 km",
      velocidade: "32 km/h",
      bateria: "48V 8Ah Lítio",
      freio: "Disco dianteiro e traseiro",
      cores: ["#1a1a1a", "#f5f5f5", "#e86c00"],
      nomes_cores: ["Preta", "Branca", "Laranja"],
      fotos_cores: [
        "assets/produtos/elektroid-fly-preta.jpg",
        "assets/produtos/elektroid-fly-branca.jpg",
        "assets/produtos/elektroid-fly-laranja.jpg"
      ],
      preco_de: 0,
      preco_por: 2399,
      badge: ""
    }
  ],

  scooters: [
    {
      nome: "Elektroid JY",
      modelo: "JY",
      imagem: "assets/produtos/elektroid-jy-azul.jpg",
      motor: "500W 48V",
      autonomia: "23 km",
      velocidade: "32 km/h",
      bateria: "48V 12Ah Chumbo",
      freio: "Disco dianteiro e traseiro",
      cores: ["#1b2a4a", "#1a1a1a", "#f5f5f5", "#cc2200"],
      nomes_cores: ["Azul", "Preta", "Branca", "Vermelha"],
      fotos_cores: [
        "assets/produtos/elektroid-jy-azul.jpg",
        "assets/produtos/elektroid-jy-preta.jpg",
        "assets/produtos/elektroid-jy-branca.jpg",
        "assets/produtos/elektroid-jy-vermelha.jpg"
      ],
      preco_de: 0,
      preco_por: 2999,
      badge: ""
    },
    {
      nome: "Elektroid ES05",
      modelo: "ES05",
      imagem: "assets/produtos/elektroid-es05-vermelho.jpg",
      motor: "500W 48V",
      autonomia: "25 km",
      velocidade: "32 km/h",
      bateria: "48V 20Ah Chumbo",
      freio: "Disco dianteiro e traseiro",
      cores: ["#cc2200", "#1b2a4a", "#f5f5f5"],
      nomes_cores: ["Vermelho", "Azul", "Branco"],
      fotos_cores: [
        "assets/produtos/elektroid-es05-vermelho.jpg",
        "assets/produtos/elektroid-es05-azul.jpg",
        "assets/produtos/elektroid-es05-branco.jpg"
      ],
      preco_de: 0,
      preco_por: 5999,
      badge: ""
    },
    {
      nome: "Scooter Drift 350W",
      modelo: "Drift 350W",
      imagem: "assets/produtos/scooter-drift-350w.jpg",
      motor: "350W",
      autonomia: "30 km",
      velocidade: "32 km/h",
      bateria: "Lítio",
      freio: "Disco",
      cores: ["#cc2200"],
      nomes_cores: ["Vermelho"],
      fotos_cores: [],
      preco_de: 0,
      preco_por: 1599,
      badge: "Promoção"
    }
  ],

  triciclos: [
    {
      nome: "Elektroid T1",
      modelo: "T1",
      imagem: "assets/produtos/elektroid-xuanku-preta.jpeg",
      motor: "1000W 60V",
      autonomia: "45 km",
      velocidade: "32 km/h",
      bateria: "60V 20Ah Chumbo",
      freio: "Disco dianteiro e traseiro",
      cores: ["#1a1a1a", "#cc2200", "#1b2a4a", "#f5f5f5"],
      nomes_cores: ["Preta", "Vermelha", "Azul", "Branca"],
      fotos_cores: [
        "assets/produtos/elektroid-xuanku-preta.jpeg",
        "assets/produtos/elektroid-xuanku-vermelha.jpeg",
        "assets/produtos/elektroid-xuanku-azul.jpeg",
        "assets/produtos/elektroid-xuanku-branca.jpeg"
      ],
      preco_de: 0,
      preco_por: 8999,
      badge: ""
    },
    {
      nome: "Elektroid X3",
      modelo: "X3",
      imagem: "assets/produtos/elektroid-x3-vermelho.jpg",
      motor: "1000W 60V",
      autonomia: "45 km",
      velocidade: "32 km/h",
      bateria: "60V 20Ah Chumbo",
      freio: "Disco dianteiro e traseiro",
      cores: ["#cc2200", "#1b2a4a", "#1a1a1a", "#f5f5f5"],
      nomes_cores: ["Vermelho", "Azul", "Preto", "Branco"],
      fotos_cores: [
        "assets/produtos/elektroid-x3-vermelho.jpg",
        "assets/produtos/elektroid-x3-azul.jpg",
        "assets/produtos/elektroid-x3-preto.jpg",
        "assets/produtos/elektroid-x3-branco.jpg"
      ],
      preco_de: 0,
      preco_por: 9499,
      badge: ""
    },
    {
      nome: "Triciclo Elétrico Usado 500W",
      modelo: "Triciclo 500W",
      imagem: "assets/produtos/triciclo-usado-500w.jpg",
      motor: "500W",
      autonomia: "40 km",
      velocidade: "32 km/h",
      bateria: "Chumbo",
      freio: "Tambor",
      cores: ["#1b2a4a"],
      nomes_cores: ["Azul"],
      fotos_cores: [],
      preco_de: 0,
      preco_por: 3000,
      badge: ""
    }
  ],

  patinetes: [
    {
      nome: "Patinete Xiaomi Mi Pro 2",
      modelo: "Mi Pro 2",
      imagem: "assets/produtos/patinete-xiaomi-mi-pro2.jpg",
      motor: "300W",
      autonomia: "45 km",
      velocidade: "25 km/h",
      bateria: "12.8Ah Lítio",
      freio: "E-ABS + disco traseiro",
      cores: ["#1a1a1a"],
      nomes_cores: ["Preto"],
      fotos_cores: [],
      preco_de: 0,
      preco_por: 3699,
      badge: ""
    }
  ],

  offroad: [
    {
      nome: "Mini Quadriciclo Elétrico 800W",
      modelo: "Quadriciclo 800W",
      imagem: "assets/produtos/mini-quadriciclo-800w.jpg",
      motor: "800W",
      autonomia: "40 km",
      velocidade: "40 km/h",
      bateria: "Lítio",
      freio: "Disco",
      cores: ["#e86c00"],
      nomes_cores: ["Laranja"],
      fotos_cores: [],
      preco_de: 0,
      preco_por: 3999,
      badge: ""
    }
  ],

  baterias: [
    {
      nome: "Bateria de Lítio 48V 20Ah",
      modelo: "Lítio 48V",
      imagem: "assets/produtos/bateria-litio-48v-20ah.jpg",
      motor: "48V · 20Ah",
      autonomia: "Ciclo de vida longo",
      velocidade: "",
      bateria: "Lítio",
      freio: "",
      cores: [],
      nomes_cores: [],
      fotos_cores: [],
      preco_de: 0,
      preco_por: 1499,
      badge: "Produção própria"
    },
    {
      nome: "Bateria de Lítio 60V 20Ah",
      modelo: "Lítio 60V",
      imagem: "assets/produtos/bateria-litio-60v-20ah.jpg",
      motor: "60V · 20Ah",
      autonomia: "Ciclo de vida longo",
      velocidade: "",
      bateria: "Lítio",
      freio: "",
      cores: [],
      nomes_cores: [],
      fotos_cores: [],
      preco_de: 0,
      preco_por: 1799,
      badge: "Produção própria"
    },
    {
      nome: "Bateria de Chumbo 48V 12Ah",
      modelo: "Chumbo 48V",
      imagem: "assets/produtos/bateria-chumbo-48v-12ah.jpg",
      motor: "48V · 12Ah",
      autonomia: "Custo acessível",
      velocidade: "",
      bateria: "Chumbo",
      freio: "",
      cores: [],
      nomes_cores: [],
      fotos_cores: [],
      preco_de: 0,
      preco_por: 599,
      badge: "Produção própria"
    },
    {
      nome: "Bateria de Chumbo 60V 12Ah",
      modelo: "Chumbo 60V",
      imagem: "assets/produtos/bateria-chumbo-60v-12ah.jpg",
      motor: "60V · 12Ah",
      autonomia: "Custo acessível",
      velocidade: "",
      bateria: "Chumbo",
      freio: "",
      cores: [],
      nomes_cores: [],
      fotos_cores: [],
      preco_de: 0,
      preco_por: 699,
      badge: "Produção própria"
    }
  ],

  pecasAcessorios: [
    {
      nome: "Carregador de bateria",
      modelo: "Carregador",
      imagem: "assets/produtos/carregador-bateria-scooter.jpg",
      motor: "Universal",
      autonomia: "Carga completa",
      velocidade: "",
      bateria: "",
      freio: "",
      cores: [],
      nomes_cores: [],
      fotos_cores: [],
      preco_de: 0,
      preco_por: 149,
      badge: ""
    },
    {
      nome: "Pneu para scooter elétrica",
      modelo: "Pneu",
      imagem: "assets/produtos/pneu-scooter.jpg",
      motor: "Aro padrão",
      autonomia: "Alta durabilidade",
      velocidade: "",
      bateria: "",
      freio: "",
      cores: [],
      nomes_cores: [],
      fotos_cores: [],
      preco_de: 0,
      preco_por: 189,
      badge: ""
    },
    {
      nome: "Motor para scooter elétrica",
      modelo: "Motor",
      imagem: "assets/produtos/motor-scooter.jpg",
      motor: "500W / 1000W",
      autonomia: "Reposição",
      velocidade: "",
      bateria: "",
      freio: "",
      cores: [],
      nomes_cores: [],
      fotos_cores: [],
      preco_de: 0,
      preco_por: 899,
      badge: ""
    },
    {
      nome: "Painel/display de scooter",
      modelo: "Painel",
      imagem: "assets/produtos/painel-scooter.jpg",
      motor: "Digital",
      autonomia: "Reposição",
      velocidade: "",
      bateria: "",
      freio: "",
      cores: [],
      nomes_cores: [],
      fotos_cores: [],
      preco_de: 0,
      preco_por: 249,
      badge: ""
    }
  ]
};

const DEPOIMENTOS = [
  { texto: "Comprei minha scooter há 6 meses e funciona perfeitamente. Atendimento incrível e entrega super rápida!", autor: "João M." },
  { texto: "Produto igual às fotos, entrega no prazo e suporte pós-venda excelente. Totalmente recomendo!", autor: "Ana Paula S." },
  { texto: "Produto incrível! Chegou mais rápido do que esperava. Qualidade impecável, superou todas as expectativas.", autor: "Carlos M." },
  { texto: "Atendimento excelente do início ao fim. A scooter chegou no prazo, bem embalada. Super recomendo!", autor: "Ana Luiza F." },
  { texto: "Fiquei impressionado com a qualidade. Vale muito cada centavo. Entrega para o Ceará foi super rápida!", autor: "Roberto S." },
  { texto: "Melhor compra que fiz esse ano. Suporte pós-venda impecável, toda dúvida respondida na hora.", autor: "Fernanda O." }
];
