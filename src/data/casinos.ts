export interface Casino {
  rank: number;
  name: string;
  tagline: string;
  rating: number;
  bonus: string;
  bonusDetail: string;
  methods: number;
  games: number;
  hasApp: boolean;
  type: "casino" | "apuestas" | "bonos";
}

export const casinos: Casino[] = [
  { rank: 1, name: "1xBet", tagline: "El casino más completo", rating: 9.8, bonus: "$500 USD + 150 Giros Gratis", bonusDetail: "Bono 100% en tu primer depósito hasta $500", methods: 10, games: 3000, hasApp: true, type: "casino" },
  { rank: 2, name: "1Win", tagline: "Casino y apuestas todo en uno", rating: 9.5, bonus: "$1,000 USD en 4 depósitos", bonusDetail: "Hasta 500% de bono en tus primeros 4 depósitos", methods: 8, games: 2500, hasApp: true, type: "casino" },
  { rank: 3, name: "BC.Game", tagline: "Casino crypto líder", rating: 9.3, bonus: "Hasta 360% en bonos", bonusDetail: "Acepta Bitcoin, Ethereum y más criptomonedas", methods: 12, games: 5000, hasApp: true, type: "casino" },
  { rank: 4, name: "Caliente", tagline: "El favorito de México", rating: 9.0, bonus: "$3,000 MXN", bonusDetail: "Bono de bienvenida + giros gratis", methods: 6, games: 1500, hasApp: true, type: "casino" },
  { rank: 5, name: "Betnacional", tagline: "Casino confiable en LATAM", rating: 8.8, bonus: "R$500 en bono", bonusDetail: "100% en tu primer depósito", methods: 5, games: 800, hasApp: true, type: "casino" },
];

export const apuestas: Casino[] = [
  { rank: 1, name: "1xBet", tagline: "La mejor casa de apuestas", rating: 9.8, bonus: "$500 USD Freebet", bonusDetail: "Apuesta gratis en tu primer evento", methods: 10, games: 500, hasApp: true, type: "apuestas" },
  { rank: 2, name: "Caliente", tagline: "Apuestas en México", rating: 9.2, bonus: "$2,000 MXN", bonusDetail: "Freebet de bienvenida", methods: 6, games: 400, hasApp: true, type: "apuestas" },
  { rank: 3, name: "1Win", tagline: "Apuestas deportivas premium", rating: 9.0, bonus: "$1,000 USD", bonusDetail: "Bono 500% primer depósito", methods: 8, games: 350, hasApp: true, type: "apuestas" },
];

export const bonos: Casino[] = [
  { rank: 1, name: "BC.Game", tagline: "Mejores bonos crypto", rating: 9.5, bonus: "Hasta 360% en 4 depósitos", bonusDetail: "El bono más generoso del mercado", methods: 12, games: 5000, hasApp: true, type: "bonos" },
  { rank: 2, name: "1Win", tagline: "Bono masivo", rating: 9.3, bonus: "$1,000 USD", bonusDetail: "500% repartido en 4 depósitos", methods: 8, games: 2500, hasApp: true, type: "bonos" },
  { rank: 3, name: "1xBet", tagline: "Bono + giros gratis", rating: 9.0, bonus: "$500 USD + 150 Giros", bonusDetail: "Rollover x35", methods: 10, games: 3000, hasApp: true, type: "bonos" },
];
