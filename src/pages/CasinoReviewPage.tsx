import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getReviewBySlug, type CasinoReview, type CountryBonus } from "@/data/reviews";
import { Star, ThumbsUp, ThumbsDown, Minus, Shield, Globe, CreditCard, Clock, MessageCircle, ChevronRight, ExternalLink } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionTitle from "@/components/SectionTitle";

function detectCountry(): string {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const tzMap: Record<string, string> = {
      "America/Mexico_City": "MX", "America/Monterrey": "MX", "America/Cancun": "MX", "America/Tijuana": "MX",
      "America/Bogota": "CO",
      "America/Lima": "PE",
      "America/Santiago": "CL",
      "America/Argentina/Buenos_Aires": "AR", "America/Buenos_Aires": "AR",
      "America/Guayaquil": "EC",
      "America/Sao_Paulo": "BR", "America/Fortaleza": "BR", "America/Manaus": "BR",
      "America/La_Paz": "BO",
      "America/Asuncion": "PY",
      "America/Montevideo": "UY",
      "America/Caracas": "VE",
      "America/Panama": "PA",
      "America/Costa_Rica": "CR",
      "America/Guatemala": "GT",
      "America/Tegucigalpa": "HN",
      "America/El_Salvador": "SV",
      "America/Managua": "NI",
      "America/Santo_Domingo": "DO",
    };
    return tzMap[tz] || "MX";
  } catch {
    return "MX";
  }
}

function getCountryName(code: string): string {
  const names: Record<string, string> = {
    MX: "México", CO: "Colombia", PE: "Perú", CL: "Chile", AR: "Argentina",
    EC: "Ecuador", BR: "Brasil", BO: "Bolivia", PY: "Paraguay", UY: "Uruguay",
    VE: "Venezuela", PA: "Panamá", CR: "Costa Rica", GT: "Guatemala",
    HN: "Honduras", SV: "El Salvador", NI: "Nicaragua", DO: "Rep. Dominicana",
  };
  return names[code] || code;
}

function getCountryFlag(code: string): string {
  const flags: Record<string, string> = {
    MX: "🇲🇽", CO: "🇨🇴", PE: "🇵🇪", CL: "🇨🇱", AR: "🇦🇷", EC: "🇪🇨",
    BR: "🇧🇷", BO: "🇧🇴", PY: "🇵🇾", UY: "🇺🇾", VE: "🇻🇪", PA: "🇵🇦",
    CR: "🇨🇷", GT: "🇬🇹", HN: "🇭🇳", SV: "🇸🇻", NI: "🇳🇮", DO: "🇩🇴",
  };
  return flags[code] || "🌎";
}

export default function CasinoReviewPage() {
  const { slug } = useParams<{ slug: string }>();
  const [detectedCountry, setDetectedCountry] = useState("MX");
  const review = slug ? getReviewBySlug(slug) : undefined;

  useEffect(() => {
    setDetectedCountry(detectCountry());
  }, []);

  if (!review) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-2xl font-bold text-foreground">Casino no encontrado</h1>
          <p className="mt-2 text-muted-foreground">No tenemos reseña de este casino aún.</p>
        </div>
      </div>
    );
  }

  const localBonus = review.countryBonuses.find((b) => b.countryCode === detectedCountry) || review.countryBonuses[0];

  return (
    <div className="pb-20 md:pb-0">
      {/* Hero */}
      <section className="relative bg-dark-surface py-10 md:py-16">
        <div className="absolute inset-0 opacity-10" style={{ background: `radial-gradient(ellipse at 30% 50%, ${review.color}, transparent 70%)` }} />
        <div className="relative container">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:gap-10">
            {/* Logo */}
            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-card p-4 shadow-lg md:h-32 md:w-32">
              <img src={review.logo} alt={review.name} className="h-full w-full object-contain" />
            </div>

            {/* Info */}
            <div className="flex-1">
              <h1 className="font-heading text-2xl font-black text-dark-surface-foreground md:text-4xl">
                {review.name} Casino
              </h1>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-dark-surface-foreground/70 md:text-base">
                {review.description}
              </p>

              {/* Rating row */}
              <div className="mt-4 flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-1.5 rounded-full bg-orange/20 px-3 py-1.5">
                  <Star className="h-4 w-4 fill-orange text-orange" />
                  <span className="font-heading text-sm font-bold text-orange">{review.rating}/10</span>
                </div>
                <span className="text-xs text-dark-surface-foreground/50">Fundado en {review.foundedYear}</span>
                <span className="text-xs text-dark-surface-foreground/50">•</span>
                <span className="text-xs text-dark-surface-foreground/50">{review.website}</span>
              </div>
            </div>
          </div>

          {/* Country-specific bonus banner */}
          {localBonus && (
            <div className="mt-8 rounded-xl border border-orange/30 bg-gradient-to-r from-orange/10 to-transparent p-5 md:p-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-orange">
                    {getCountryFlag(detectedCountry)} Detectamos que nos visitas desde {getCountryName(detectedCountry)}
                  </p>
                  <p className="mt-1 font-heading text-lg font-bold text-dark-surface-foreground md:text-xl">
                    {review.name} tiene este bono para ti:
                  </p>
                  <p className="mt-1 font-heading text-2xl font-black text-orange md:text-3xl">
                    {localBonus.bonus}
                  </p>
                </div>
                <a
                  href={localBonus.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-orange px-6 py-3 font-heading text-sm font-bold text-orange-foreground transition-colors hover:bg-orange-hover"
                >
                  Reclamar Bono <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Quick stats */}
      <section className="border-b border-border bg-card">
        <div className="container grid grid-cols-2 gap-4 py-5 md:grid-cols-4">
          {[
            { icon: CreditCard, label: "Depósito mínimo", value: review.minDeposit },
            { icon: Clock, label: "Tiempo de retiro", value: review.withdrawalTime },
            { icon: Globe, label: "Países", value: `${review.operatingCountries.length} países` },
            { icon: MessageCircle, label: "Soporte", value: review.support[0] },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted">
                <stat.icon className="h-5 w-5 text-muted-foreground" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
                <p className="font-heading text-sm font-bold text-foreground">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bonos por país */}
      <section className="container py-8">
        <SectionTitle title="💰 Bonos por País" subtitle={`${review.name} ofrece bonos personalizados según tu país`} />
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {review.countryBonuses.map((cb) => (
            <div
              key={cb.countryCode}
              className={`rounded-xl border p-4 transition-all ${
                cb.countryCode === detectedCountry
                  ? "border-orange bg-orange/5 ring-1 ring-orange/30"
                  : "border-border bg-card hover:border-orange/30"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{cb.flag}</span>
                  <div>
                    <p className="font-heading text-sm font-bold text-foreground">{cb.countryName}</p>
                    <p className="text-xs text-muted-foreground">{cb.currency}</p>
                  </div>
                </div>
                {cb.countryCode === detectedCountry && (
                  <span className="rounded-full bg-orange/20 px-2 py-0.5 text-[10px] font-bold text-orange">TU PAÍS</span>
                )}
              </div>
              <p className="mt-2 font-heading text-sm font-bold text-orange">{cb.bonus}</p>
              <a href={cb.link} className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-orange hover:underline">
                Reclamar <ChevronRight className="h-3 w-3" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Países donde opera */}
      <section className="bg-muted py-8">
        <div className="container">
          <SectionTitle title="🌎 Países donde Opera" subtitle={`${review.name} está disponible en los siguientes países`} />
          <div className="mt-5 flex flex-wrap gap-3">
            {review.operatingCountries.map((c) => (
              <div key={c.code} className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2">
                <span className="text-lg">{c.flag}</span>
                <span className="text-sm font-medium text-foreground">{c.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Licencias */}
      <section className="container py-8">
        <SectionTitle title="🛡️ Licencias y Regulación" subtitle={`Autoridades que regulan a ${review.name}`} />
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {review.licensedCountries.map((lc) => (
            <div key={lc.code} className="flex items-center gap-4 rounded-xl border border-border bg-card p-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-muted">
                <Shield className="h-6 w-6 text-accent" />
              </div>
              <div>
                <p className="font-heading text-sm font-bold text-foreground">{lc.flag} {lc.name}</p>
                <p className="text-xs text-muted-foreground">{lc.authority}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Opinión: Pros, Cons, Neutral */}
      <section className="bg-muted py-8">
        <div className="container">
          <SectionTitle title={`📝 Nuestra Opinión de ${review.name}`} subtitle="Lo bueno, lo malo y lo que debes saber" />
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {/* Pros */}
            <div className="rounded-xl border border-accent/30 bg-card p-5">
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/20">
                  <ThumbsUp className="h-4 w-4 text-accent" />
                </div>
                <h3 className="font-heading text-sm font-bold text-accent">Lo Bueno</h3>
              </div>
              <ul className="space-y-2">
                {review.pros.map((p, i) => (
                  <li key={i} className="flex gap-2 text-sm text-foreground">
                    <span className="mt-1 shrink-0 text-accent">✓</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            {/* Cons */}
            <div className="rounded-xl border border-destructive/30 bg-card p-5">
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-destructive/20">
                  <ThumbsDown className="h-4 w-4 text-destructive" />
                </div>
                <h3 className="font-heading text-sm font-bold text-destructive">Lo Malo</h3>
              </div>
              <ul className="space-y-2">
                {review.cons.map((c, i) => (
                  <li key={i} className="flex gap-2 text-sm text-foreground">
                    <span className="mt-1 shrink-0 text-destructive">✗</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            {/* Neutral */}
            <div className="rounded-xl border border-secondary/30 bg-card p-5">
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary/20">
                  <Minus className="h-4 w-4 text-secondary" />
                </div>
                <h3 className="font-heading text-sm font-bold text-secondary">A Considerar</h3>
              </div>
              <ul className="space-y-2">
                {review.neutral.map((n, i) => (
                  <li key={i} className="flex gap-2 text-sm text-foreground">
                    <span className="mt-1 shrink-0 text-secondary">—</span>
                    {n}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Opinión del Bro */}
      <section className="container py-8">
        <SectionTitle title={`🧢 La Opinión del ApostaBro sobre ${review.name}`} subtitle="Lo que realmente piensa el bro después de probarlo a fondo" />
        
        {/* Summary */}
        <div className="mt-5 rounded-xl border border-orange/30 bg-card p-5 md:p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange/20 text-2xl">
              🧢
            </div>
            <div>
              <p className="font-heading text-sm font-bold text-orange">El ApostaBro dice:</p>
              <p className="mt-2 text-sm leading-relaxed text-foreground/80 italic">
                "{review.broOpinion.summary}"
              </p>
            </div>
          </div>
        </div>

        {/* Category ratings */}
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {review.broOpinion.ratings.map((r) => (
            <div key={r.category} className="rounded-xl border border-border bg-card p-4">
              <div className="flex items-center justify-between">
                <h4 className="font-heading text-sm font-bold text-foreground">{r.category}</h4>
                <div className="flex items-center gap-1.5">
                  <span className={`font-heading text-lg font-black ${r.score >= 9 ? "text-accent" : r.score >= 7 ? "text-orange" : "text-destructive"}`}>
                    {r.score}
                  </span>
                  <span className="text-xs text-muted-foreground">/10</span>
                </div>
              </div>
              {/* Score bar */}
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-muted">
                <div
                  className={`h-full rounded-full transition-all ${r.score >= 9 ? "bg-accent" : r.score >= 7 ? "bg-orange" : "bg-destructive"}`}
                  style={{ width: `${r.score * 10}%` }}
                />
              </div>
              <p className="mt-2 text-xs text-muted-foreground">{r.comment}</p>
            </div>
          ))}
        </div>

        {/* Verdict */}
        <div className="mt-5 rounded-xl bg-dark-surface p-5 md:p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-orange">Veredicto Final del Bro</p>
          <p className="mt-2 font-heading text-base font-bold leading-relaxed text-dark-surface-foreground md:text-lg">
            {review.broOpinion.verdict}
          </p>
        </div>
      </section>

      {/* Juegos */}
      <section className="container py-8">
        <SectionTitle title={`🎮 Juegos en ${review.name}`} subtitle="Categorías y variedad de juegos disponibles" />
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {review.gameCategories.map((gc) => (
            <div key={gc.name} className="rounded-xl border border-border bg-card p-4 text-center transition-all hover:border-orange/30 hover:shadow-md">
              <span className="text-3xl">{gc.icon}</span>
              <p className="mt-2 font-heading text-sm font-bold text-foreground">{gc.name}</p>
              <p className="text-xs text-muted-foreground">{gc.count.toLocaleString()}+ juegos</p>
            </div>
          ))}
        </div>
      </section>

      {/* Métodos de pago */}
      <section className="bg-muted py-8">
        <div className="container">
          <SectionTitle title="💳 Métodos de Pago" subtitle={`Formas de depósito y retiro en ${review.name}`} />
          <div className="mt-5 flex flex-wrap gap-2">
            {review.paymentMethods.map((pm) => (
              <span key={pm} className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground">
                {pm}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="container py-8">
        <SectionTitle title={`❓ Preguntas Frecuentes sobre ${review.name}`} subtitle="Resolvemos tus dudas más comunes" />
        <div className="mt-5 max-w-3xl">
          <Accordion type="single" collapsible className="space-y-2">
            {review.faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="rounded-xl border border-border bg-card px-5">
                <AccordionTrigger className="font-heading text-sm font-bold text-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-dark-surface py-10">
        <div className="container text-center">
          <h2 className="font-heading text-xl font-bold text-dark-surface-foreground md:text-2xl">
            ¿Listo para jugar en {review.name}?
          </h2>
          <p className="mt-2 text-sm text-dark-surface-foreground/70">
            {getCountryFlag(detectedCountry)} Bono exclusivo para {getCountryName(detectedCountry)}:
          </p>
          <p className="mt-1 font-heading text-2xl font-black text-orange">
            {localBonus?.bonus}
          </p>
          <a
            href={localBonus?.link || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-lg bg-orange px-8 py-3.5 font-heading text-base font-bold text-orange-foreground transition-colors hover:bg-orange-hover"
          >
            Reclamar Bono en {review.name} <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
