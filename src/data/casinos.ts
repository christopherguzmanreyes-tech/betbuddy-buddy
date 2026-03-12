import logo1xbet from "@/assets/logos/1xbet.png";
import logo1win from "@/assets/logos/1win.png";
import logoBcgame from "@/assets/logos/bcgame.png";
import logoCaliente from "@/assets/logos/caliente.png";
import logoBetnacional from "@/assets/logos/betnacional.png";

export interface Casino {
  rank: number;
  name: string;
  slug: string;
  tagline: string;
  rating: number;
  bonus: string;
  bonusDetail: string;
  methods: number;
  games: number;
  hasApp: boolean;
  type: "casino" | "apuestas" | "bonos";
}

export interface CasinoBrand {
  name: string;
  slug: string;
  logo: string;
  color: string;
}

export const brands: CasinoBrand[] = [
  { name: "1xBet", slug: "1xbet", logo: logo1xbet, color: "#1a8fd1" },
  { name: "1Win", slug: "1win", logo: logo1win, color: "#1e5799" },
  { name: "BC.Game", slug: "bcgame", logo: logoBcgame, color: "#f7931a" },
  { name: "Caliente", slug: "caliente", logo: logoCaliente, color: "#d4232a" },
  { name: "Betnacional", slug: "betnacional", logo: logoBetnacional, color: "#2eaa4a" },
];

/* Casinos con licencia gris que operan en todo LATAM */
export const casinosLatam: Casino[] = [
  { rank: 1, name: "1xBet", slug: "1xbet", tagline: "El casino más completo de LATAM", rating: 9.8, bonus: "$500 USD + 150 Giros Gratis", bonusDetail: "Bono 100% en tu primer depósito hasta $500", methods: 10, games: 3000, hasApp: true, type: "casino" },
  { rank: 2, name: "1Win", slug: "1win", tagline: "Casino y apuestas todo en uno", rating: 9.5, bonus: "$1,000 USD en 4 depósitos", bonusDetail: "Hasta 500% de bono en tus primeros 4 depósitos", methods: 8, games: 2500, hasApp: true, type: "casino" },
  { rank: 3, name: "Caliente", slug: "caliente", tagline: "El favorito de México y LATAM", rating: 9.0, bonus: "$3,000 MXN", bonusDetail: "Bono de bienvenida + giros gratis", methods: 6, games: 1500, hasApp: true, type: "casino" },
  { rank: 4, name: "Betnacional", slug: "betnacional", tagline: "Casino confiable en LATAM", rating: 8.8, bonus: "R$500 en bono", bonusDetail: "100% en tu primer depósito", methods: 5, games: 800, hasApp: true, type: "casino" },
];

/* Casas de apuestas con licencia gris que operan en todo LATAM */
export const apuestasLatam: Casino[] = [
  { rank: 1, name: "1xBet", slug: "1xbet", tagline: "La mejor casa de apuestas global", rating: 9.8, bonus: "$500 USD Freebet", bonusDetail: "Apuesta gratis en tu primer evento", methods: 10, games: 500, hasApp: true, type: "apuestas" },
  { rank: 2, name: "1Win", slug: "1win", tagline: "Apuestas deportivas premium", rating: 9.5, bonus: "$1,000 USD", bonusDetail: "Bono 500% primer depósito", methods: 8, games: 350, hasApp: true, type: "apuestas" },
  { rank: 3, name: "Caliente", slug: "caliente", tagline: "Apuestas deportivas en México y LATAM", rating: 9.2, bonus: "$2,000 MXN", bonusDetail: "Freebet de bienvenida", methods: 6, games: 400, hasApp: true, type: "apuestas" },
  { rank: 4, name: "Betnacional", slug: "betnacional", tagline: "Apuestas confiables en Brasil y LATAM", rating: 8.7, bonus: "R$300 Freebet", bonusDetail: "Apuesta gratis en tu primer depósito", methods: 5, games: 300, hasApp: true, type: "apuestas" },
];

/* Mejores cripto casinos */
export const cryptoCasinos: Casino[] = [
  { rank: 1, name: "BC.Game", slug: "bcgame", tagline: "Casino crypto #1 en LATAM", rating: 9.5, bonus: "Hasta 360% en 4 depósitos", bonusDetail: "Acepta BTC, ETH, DOGE y 100+ criptos", methods: 12, games: 5000, hasApp: true, type: "casino" },
  { rank: 2, name: "1xBet", slug: "1xbet", tagline: "Casino completo con cripto", rating: 9.3, bonus: "$500 USD en BTC", bonusDetail: "Depósita con Bitcoin y recibe bono 100%", methods: 10, games: 3000, hasApp: true, type: "casino" },
  { rank: 3, name: "1Win", slug: "1win", tagline: "Apuestas y casino con cripto", rating: 9.0, bonus: "$1,000 USD en cripto", bonusDetail: "Acepta BTC, ETH, USDT", methods: 8, games: 2500, hasApp: true, type: "casino" },
];

// Keep old exports for backward compatibility
export const casinos = casinosLatam;
export const apuestas = apuestasLatam;
export const bonos = cryptoCasinos;
