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
  { rank: 1, name: "PlayUZU", tagline: "El casino transparente", rating: 10, bonus: "$2,400 MXN + 400 Giros Gratis", bonusDetail: "Consigue $600 MXN gratis al registrarte", methods: 6, games: 1000, hasApp: true, type: "casino" },
  { rank: 2, name: "Codere", tagline: "Bono de Bienvenida", rating: 8.9, bonus: "$6,500 MXN", bonusDetail: "100% en tu primer depósito", methods: 6, games: 1000, hasApp: true, type: "casino" },
  { rank: 3, name: "Betway", tagline: "Bono de Bienvenida", rating: 8.9, bonus: "$4,000 MXN", bonusDetail: "Apuesta segura en tu primer juego", methods: 6, games: 1000, hasApp: true, type: "casino" },
  { rank: 4, name: "888casino", tagline: "Casino Premium", rating: 8.7, bonus: "$3,000 MXN", bonusDetail: "Bono sin depósito disponible", methods: 5, games: 800, hasApp: true, type: "casino" },
  { rank: 5, name: "LeoVegas", tagline: "Rey del casino móvil", rating: 8.5, bonus: "$5,000 MXN + 200 Giros", bonusDetail: "Experiencia móvil premium", methods: 4, games: 1200, hasApp: true, type: "casino" },
];

export const apuestas: Casino[] = [
  { rank: 1, name: "Betano", tagline: "La mejor casa de apuestas", rating: 9.5, bonus: "$3,000 MXN", bonusDetail: "Apuesta gratis en tu primer evento", methods: 7, games: 500, hasApp: true, type: "apuestas" },
  { rank: 2, name: "Caliente", tagline: "Apuestas en México", rating: 9.2, bonus: "$2,000 MXN", bonusDetail: "Freebet de bienvenida", methods: 6, games: 400, hasApp: true, type: "apuestas" },
  { rank: 3, name: "Betcris", tagline: "Apuestas deportivas", rating: 8.8, bonus: "$1,500 MXN", bonusDetail: "Bono 100% primer depósito", methods: 5, games: 350, hasApp: false, type: "apuestas" },
];

export const bonos: Casino[] = [
  { rank: 1, name: "PlayUZU", tagline: "Sin requisitos de apuesta", rating: 10, bonus: "$2,400 MXN + 400 Giros", bonusDetail: "El mejor bono sin rollover", methods: 6, games: 1000, hasApp: true, type: "bonos" },
  { rank: 2, name: "Codere", tagline: "Bono generoso", rating: 9.0, bonus: "$6,500 MXN", bonusDetail: "Rollover x30", methods: 6, games: 1000, hasApp: true, type: "bonos" },
  { rank: 3, name: "Betway", tagline: "Bono flexible", rating: 8.9, bonus: "$4,000 MXN", bonusDetail: "Rollover x25", methods: 6, games: 1000, hasApp: true, type: "bonos" },
];
