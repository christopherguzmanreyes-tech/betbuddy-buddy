import logo1xbet from "@/assets/logos/1xbet.png";
import logo1win from "@/assets/logos/1win.png";
import logoBcgame from "@/assets/logos/bcgame.png";
import logoCaliente from "@/assets/logos/caliente.png";
import logoBetnacional from "@/assets/logos/betnacional.png";

export interface CountryBonus {
  countryCode: string;
  countryName: string;
  flag: string;
  bonus: string;
  currency: string;
  link: string;
}

export interface CasinoReview {
  slug: string;
  name: string;
  logo: string;
  color: string;
  description: string;
  foundedYear: number;
  website: string;
  operatingCountries: { code: string; name: string; flag: string }[];
  licensedCountries: { code: string; name: string; flag: string; authority: string }[];
  countryBonuses: CountryBonus[];
  pros: string[];
  cons: string[];
  neutral: string[];
  gameCategories: { name: string; count: number; icon: string }[];
  paymentMethods: string[];
  faqs: { question: string; answer: string }[];
  broOpinion: {
    summary: string;
    ratings: { category: string; score: number; comment: string }[];
    verdict: string;
  };
  rating: number;
  minDeposit: string;
  withdrawalTime: string;
  support: string[];
}

export const casinoReviews: Record<string, CasinoReview> = {
  "1xbet": {
    slug: "1xbet",
    name: "1xBet",
    logo: logo1xbet,
    color: "#1a8fd1",
    description: "1xBet es uno de los operadores de apuestas y casino online más grandes del mundo. Fundado en 2007, opera en más de 50 países con licencias internacionales, ofreciendo una plataforma completa con miles de juegos, apuestas deportivas en vivo y un generoso programa de bonos adaptado a cada región.",
    foundedYear: 2007,
    website: "1xbet.com",
    operatingCountries: [
      { code: "MX", name: "México", flag: "🇲🇽" },
      { code: "CO", name: "Colombia", flag: "🇨🇴" },
      { code: "PE", name: "Perú", flag: "🇵🇪" },
      { code: "CL", name: "Chile", flag: "🇨🇱" },
      { code: "AR", name: "Argentina", flag: "🇦🇷" },
      { code: "EC", name: "Ecuador", flag: "🇪🇨" },
      { code: "BR", name: "Brasil", flag: "🇧🇷" },
      { code: "BO", name: "Bolivia", flag: "🇧🇴" },
      { code: "PY", name: "Paraguay", flag: "🇵🇾" },
      { code: "UY", name: "Uruguay", flag: "🇺🇾" },
      { code: "VE", name: "Venezuela", flag: "🇻🇪" },
      { code: "PA", name: "Panamá", flag: "🇵🇦" },
      { code: "CR", name: "Costa Rica", flag: "🇨🇷" },
      { code: "GT", name: "Guatemala", flag: "🇬🇹" },
      { code: "HN", name: "Honduras", flag: "🇭🇳" },
      { code: "SV", name: "El Salvador", flag: "🇸🇻" },
      { code: "NI", name: "Nicaragua", flag: "🇳🇮" },
      { code: "DO", name: "Rep. Dominicana", flag: "🇩🇴" },
    ],
    licensedCountries: [
      { code: "CW", name: "Curazao", flag: "🇨🇼", authority: "Curaçao eGaming" },
      { code: "KE", name: "Kenia", flag: "🇰🇪", authority: "BCLB Kenya" },
      { code: "NG", name: "Nigeria", flag: "🇳🇬", authority: "Lagos State Lotteries Board" },
    ],
    countryBonuses: [
      { countryCode: "MX", countryName: "México", flag: "🇲🇽", bonus: "$3,000 MXN + 150 Giros Gratis", currency: "MXN", link: "#" },
      { countryCode: "CO", countryName: "Colombia", flag: "🇨🇴", bonus: "$500,000 COP + 150 Giros Gratis", currency: "COP", link: "#" },
      { countryCode: "PE", countryName: "Perú", flag: "🇵🇪", bonus: "S/500 + 150 Giros Gratis", currency: "PEN", link: "#" },
      { countryCode: "CL", countryName: "Chile", flag: "🇨🇱", bonus: "$100,000 CLP + 150 Giros Gratis", currency: "CLP", link: "#" },
      { countryCode: "AR", countryName: "Argentina", flag: "🇦🇷", bonus: "$50,000 ARS + 150 Giros Gratis", currency: "ARS", link: "#" },
      { countryCode: "BR", countryName: "Brasil", flag: "🇧🇷", bonus: "R$1,200 + 150 Giros Grátis", currency: "BRL", link: "#" },
      { countryCode: "EC", countryName: "Ecuador", flag: "🇪🇨", bonus: "$500 USD + 150 Giros Gratis", currency: "USD", link: "#" },
    ],
    pros: [
      "Más de 3,000 juegos disponibles incluyendo slots, mesa y en vivo",
      "Acepta múltiples métodos de pago locales por país",
      "App nativa para Android e iOS con funcionalidad completa",
      "Transmisiones en vivo de eventos deportivos sin costo",
      "Soporte 24/7 en español por chat, email y teléfono",
      "Programa de lealtad con cashback y bonos recurrentes",
    ],
    cons: [
      "Licencia de Curazao (no regulado localmente en la mayoría de países LATAM)",
      "Proceso de verificación KYC puede ser lento",
      "Algunos métodos de retiro tienen comisiones",
      "La interfaz puede ser abrumadora para principiantes",
    ],
    neutral: [
      "Requisito de apuesta del bono: x5 en apuestas acumuladas",
      "Retiros procesados en 24-72 horas según el método",
      "Depósito mínimo varía por país y método de pago",
    ],
    gameCategories: [
      { name: "Slots", count: 2000, icon: "🎰" },
      { name: "Casino en Vivo", count: 300, icon: "🃏" },
      { name: "Juegos de Mesa", count: 200, icon: "♠️" },
      { name: "Apuestas Deportivas", count: 500, icon: "⚽" },
      { name: "eSports", count: 50, icon: "🎮" },
      { name: "Juegos Rápidos", count: 150, icon: "⚡" },
      { name: "Poker", count: 30, icon: "🂡" },
      { name: "Bingo & Lotería", count: 20, icon: "🎱" },
    ],
    paymentMethods: ["Visa", "Mastercard", "OXXO", "SPEI", "Nequi", "PSE", "PIX", "Mercado Pago", "Bitcoin", "Ethereum", "USDT", "Skrill", "Neteller", "AstroPay"],
    faqs: [
      { question: "¿Es legal jugar en 1xBet desde Latinoamérica?", answer: "1xBet opera bajo licencia de Curazao, lo que le permite ofrecer sus servicios en la mayoría de países de LATAM donde no existe una regulación local restrictiva. Sin embargo, recomendamos verificar la legislación de tu país antes de registrarte." },
      { question: "¿Cómo puedo depositar en 1xBet desde mi país?", answer: "1xBet acepta métodos locales según tu país: OXXO y SPEI en México, PSE y Nequi en Colombia, PIX en Brasil, entre otros. También acepta tarjetas Visa/Mastercard, billeteras electrónicas y criptomonedas." },
      { question: "¿Cuánto tarda un retiro en 1xBet?", answer: "Los retiros se procesan generalmente entre 24 y 72 horas. Los métodos electrónicos y criptomonedas suelen ser más rápidos. El primer retiro puede requerir verificación de identidad." },
      { question: "¿1xBet tiene app móvil?", answer: "Sí, 1xBet tiene aplicaciones nativas para Android e iOS. La app de Android se descarga desde su sitio web, mientras que la de iOS está disponible en la App Store de algunos países." },
      { question: "¿Qué requisitos tiene el bono de bienvenida?", answer: "El bono de bienvenida es del 100% sobre tu primer depósito. Debes hacer apuestas acumuladas con al menos 3 eventos con cuotas mínimas de 1.40 para liberar el bono. El rollover es x5." },
      { question: "¿Puedo jugar en 1xBet con criptomonedas?", answer: "Sí, 1xBet acepta Bitcoin, Ethereum, USDT, Litecoin y más de 30 criptomonedas. Los depósitos y retiros con crypto suelen ser los más rápidos." },
    ],
    rating: 9.8,
    minDeposit: "$1 USD",
    withdrawalTime: "24-72 horas",
    support: ["Chat en vivo 24/7", "Email", "Teléfono", "Telegram"],
  },
  "1win": {
    slug: "1win",
    name: "1Win",
    logo: logo1win,
    color: "#1e5799",
    description: "1Win es una plataforma de apuestas deportivas y casino online que ha ganado popularidad rápidamente en Latinoamérica. Con un bono de bienvenida de hasta 500% en tus primeros 4 depósitos, ofrece una propuesta agresiva para nuevos jugadores.",
    foundedYear: 2016,
    website: "1win.com",
    operatingCountries: [
      { code: "MX", name: "México", flag: "🇲🇽" },
      { code: "CO", name: "Colombia", flag: "🇨🇴" },
      { code: "PE", name: "Perú", flag: "🇵🇪" },
      { code: "CL", name: "Chile", flag: "🇨🇱" },
      { code: "BR", name: "Brasil", flag: "🇧🇷" },
      { code: "AR", name: "Argentina", flag: "🇦🇷" },
      { code: "EC", name: "Ecuador", flag: "🇪🇨" },
    ],
    licensedCountries: [
      { code: "CW", name: "Curazao", flag: "🇨🇼", authority: "Curaçao eGaming" },
    ],
    countryBonuses: [
      { countryCode: "MX", countryName: "México", flag: "🇲🇽", bonus: "Hasta $20,000 MXN en 4 depósitos", currency: "MXN", link: "#" },
      { countryCode: "CO", countryName: "Colombia", flag: "🇨🇴", bonus: "Hasta $2,000,000 COP en 4 depósitos", currency: "COP", link: "#" },
      { countryCode: "BR", countryName: "Brasil", flag: "🇧🇷", bonus: "Até R$5,000 em 4 depósitos", currency: "BRL", link: "#" },
    ],
    pros: [
      "Bono de bienvenida de hasta 500% (uno de los más altos del mercado)",
      "Juegos exclusivos propios como Lucky Jet y Speed Cash",
      "Interfaz moderna y fácil de usar",
      "Retiros rápidos con criptomonedas",
    ],
    cons: [
      "Menor variedad de juegos que competidores más establecidos",
      "Solo licencia de Curazao",
      "Atención al cliente puede mejorar en tiempos de respuesta",
    ],
    neutral: [
      "Rollover del bono: x50 en juegos de casino",
      "Depósito mínimo desde $1 USD equivalente",
    ],
    gameCategories: [
      { name: "Slots", count: 1500, icon: "🎰" },
      { name: "Casino en Vivo", count: 200, icon: "🃏" },
      { name: "Juegos Rápidos", count: 100, icon: "⚡" },
      { name: "Apuestas Deportivas", count: 350, icon: "⚽" },
      { name: "eSports", count: 40, icon: "🎮" },
    ],
    paymentMethods: ["Visa", "Mastercard", "PIX", "SPEI", "Bitcoin", "Ethereum", "USDT", "AstroPay"],
    faqs: [
      { question: "¿Es confiable 1Win?", answer: "1Win opera con licencia de Curazao y ha ganado reputación en LATAM. Sin embargo, no cuenta con licencias locales en la mayoría de países." },
      { question: "¿Cómo funciona el bono de 500%?", answer: "El bono se divide en 4 depósitos: 200% en el primero, 150% en el segundo, 100% en el tercero y 50% en el cuarto. El monto máximo varía por país." },
      { question: "¿1Win tiene app?", answer: "Sí, 1Win tiene app para Android e iOS con todas las funciones de la versión web." },
    ],
    rating: 9.5,
    minDeposit: "$1 USD",
    withdrawalTime: "24-48 horas",
    support: ["Chat en vivo", "Email", "Telegram"],
  },
  "bcgame": {
    slug: "bcgame",
    name: "BC.Game",
    logo: logoBcgame,
    color: "#f7931a",
    description: "BC.Game es el casino crypto líder en Latinoamérica. Acepta más de 100 criptomonedas y ofrece miles de juegos con tecnología provably fair. Es la opción preferida para jugadores que buscan anonimato y transacciones rápidas.",
    foundedYear: 2017,
    website: "bc.game",
    operatingCountries: [
      { code: "MX", name: "México", flag: "🇲🇽" },
      { code: "CO", name: "Colombia", flag: "🇨🇴" },
      { code: "BR", name: "Brasil", flag: "🇧🇷" },
      { code: "AR", name: "Argentina", flag: "🇦🇷" },
      { code: "CL", name: "Chile", flag: "🇨🇱" },
      { code: "PE", name: "Perú", flag: "🇵🇪" },
    ],
    licensedCountries: [
      { code: "CW", name: "Curazao", flag: "🇨🇼", authority: "Curaçao eGaming" },
    ],
    countryBonuses: [
      { countryCode: "MX", countryName: "México", flag: "🇲🇽", bonus: "Hasta 360% en 4 depósitos con BTC", currency: "BTC", link: "#" },
      { countryCode: "BR", countryName: "Brasil", flag: "🇧🇷", bonus: "Até 360% em 4 depósitos com BTC", currency: "BTC", link: "#" },
    ],
    pros: [
      "Acepta 100+ criptomonedas",
      "Juegos provably fair verificables",
      "Más de 5,000 juegos disponibles",
      "Programa VIP con recompensas diarias",
      "Depósitos y retiros casi instantáneos con crypto",
    ],
    cons: [
      "No acepta métodos de pago tradicionales en todos los países",
      "Puede ser complejo para usuarios sin experiencia en crypto",
      "Regulación limitada",
    ],
    neutral: [
      "Sin KYC obligatorio para montos pequeños",
      "Soporte principalmente en inglés (español disponible)",
    ],
    gameCategories: [
      { name: "Slots", count: 3000, icon: "🎰" },
      { name: "Casino en Vivo", count: 400, icon: "🃏" },
      { name: "Juegos Originales", count: 50, icon: "🎲" },
      { name: "Apuestas Deportivas", count: 300, icon: "⚽" },
      { name: "Provably Fair", count: 100, icon: "✅" },
    ],
    paymentMethods: ["Bitcoin", "Ethereum", "USDT", "BNB", "DOGE", "SOL", "LTC", "ADA", "XRP", "MATIC"],
    faqs: [
      { question: "¿Necesito KYC en BC.Game?", answer: "Para montos pequeños no se requiere verificación. Para retiros grandes, puede solicitarse verificación de identidad." },
      { question: "¿Qué son los juegos provably fair?", answer: "Son juegos cuyo resultado se puede verificar matemáticamente como justo usando hashes criptográficos." },
    ],
    rating: 9.5,
    minDeposit: "0.0001 BTC",
    withdrawalTime: "Casi instantáneo",
    support: ["Chat en vivo", "Email", "Discord", "Telegram"],
  },
  "caliente": {
    slug: "caliente",
    name: "Caliente",
    logo: logoCaliente,
    color: "#d4232a",
    description: "Caliente es la casa de apuestas y casino online más popular de México. Con licencia local y décadas de experiencia, ofrece una plataforma confiable con métodos de pago locales y un amplio catálogo de juegos y apuestas deportivas.",
    foundedYear: 1996,
    website: "caliente.mx",
    operatingCountries: [
      { code: "MX", name: "México", flag: "🇲🇽" },
    ],
    licensedCountries: [
      { code: "MX", name: "México", flag: "🇲🇽", authority: "SEGOB (Secretaría de Gobernación)" },
    ],
    countryBonuses: [
      { countryCode: "MX", countryName: "México", flag: "🇲🇽", bonus: "$3,000 MXN + Giros Gratis", currency: "MXN", link: "#" },
    ],
    pros: [
      "Licencia legal en México (SEGOB)",
      "Métodos de pago mexicanos: OXXO, SPEI, 7-Eleven",
      "Marca reconocida con décadas de trayectoria",
      "Promociones enfocadas en Liga MX y deportes mexicanos",
    ],
    cons: [
      "Solo disponible en México",
      "Catálogo de juegos menor que operadores internacionales",
      "Bonos menos generosos que competidores offshore",
    ],
    neutral: [
      "Regulado por SEGOB con todas las garantías legales",
      "Enfoque principal en apuestas deportivas",
    ],
    gameCategories: [
      { name: "Slots", count: 800, icon: "🎰" },
      { name: "Casino en Vivo", count: 100, icon: "🃏" },
      { name: "Apuestas Deportivas", count: 400, icon: "⚽" },
      { name: "Juegos de Mesa", count: 50, icon: "♠️" },
    ],
    paymentMethods: ["OXXO", "SPEI", "Visa", "Mastercard", "7-Eleven", "Banco Azteca", "Citibanamex"],
    faqs: [
      { question: "¿Caliente es legal en México?", answer: "Sí, Caliente opera con permiso de la SEGOB, lo que lo convierte en uno de los pocos operadores 100% legales en México." },
      { question: "¿Puedo jugar en Caliente desde otro país?", answer: "No, Caliente solo está disponible para jugadores en México." },
    ],
    rating: 9.0,
    minDeposit: "$50 MXN",
    withdrawalTime: "24-48 horas",
    support: ["Chat en vivo", "Email", "Teléfono", "WhatsApp"],
  },
  "betnacional": {
    slug: "betnacional",
    name: "Betnacional",
    logo: logoBetnacional,
    color: "#2eaa4a",
    description: "Betnacional es una de las casas de apuestas más populares de Brasil, con fuerte presencia en el mercado de apuestas deportivas. Ofrece una plataforma optimizada para el mercado brasileño con PIX como método principal de pago.",
    foundedYear: 2020,
    website: "betnacional.com",
    operatingCountries: [
      { code: "BR", name: "Brasil", flag: "🇧🇷" },
    ],
    licensedCountries: [
      { code: "CW", name: "Curazao", flag: "🇨🇼", authority: "Curaçao eGaming" },
    ],
    countryBonuses: [
      { countryCode: "BR", countryName: "Brasil", flag: "🇧🇷", bonus: "R$500 em bônus de boas-vindas", currency: "BRL", link: "#" },
    ],
    pros: [
      "Plataforma 100% optimizada para Brasil",
      "PIX para depósitos y retiros instantáneos",
      "Enfoque en fútbol brasileño (Brasileirão, Copa do Brasil)",
      "Interfaz simple y fácil de usar",
    ],
    cons: [
      "Solo disponible en Brasil",
      "Catálogo de casino limitado",
      "Sin app nativa (solo web móvil)",
    ],
    neutral: [
      "Enfoque principal en apuestas deportivas sobre casino",
      "Crecimiento rápido pero marca relativamente nueva",
    ],
    gameCategories: [
      { name: "Apuestas Deportivas", count: 300, icon: "⚽" },
      { name: "Slots", count: 400, icon: "🎰" },
      { name: "Casino en Vivo", count: 50, icon: "🃏" },
    ],
    paymentMethods: ["PIX", "Boleto", "Transferência Bancária"],
    faqs: [
      { question: "¿Betnacional acepta PIX?", answer: "Sí, PIX es el método principal de pago en Betnacional, con depósitos y retiros casi instantáneos." },
      { question: "¿Betnacional está disponible en español?", answer: "Betnacional está enfocado en el mercado brasileño y su plataforma está principalmente en portugués." },
    ],
    rating: 8.8,
    minDeposit: "R$1",
    withdrawalTime: "Instantáneo con PIX",
    support: ["Chat en vivo", "Email", "WhatsApp"],
  },
};

export function getReviewBySlug(slug: string): CasinoReview | undefined {
  return casinoReviews[slug];
}
