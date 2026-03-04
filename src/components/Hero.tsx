import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import type { Country } from "@/hooks/useCountry";

interface HeroProps {
  country: Country;
}

export default function Hero({ country }: HeroProps) {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden" aria-label="Hero">
      <img src={heroBg} alt="Mascota casino con fichas y balón" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-primary/80" />
      <div className="relative z-10 container flex flex-col items-center gap-6 py-16 text-center">
        <h1 className="max-w-2xl font-heading text-3xl font-black leading-tight text-primary-foreground md:text-5xl animate-fade-in-up">
          Parece que nos estás visitando desde {country.name}&nbsp;{country.flag}
        </h1>
        <p className="max-w-lg text-lg text-primary-foreground/80 md:text-xl animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
          Descubre los mejores casinos y casas de apuestas en tu país
        </p>
        <Link
          to={`/pais/${country.code}`}
          className="mt-2 inline-block rounded-lg bg-cta px-8 py-4 font-heading text-base font-bold text-cta-foreground shadow-lg transition-colors hover:bg-cta-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta md:text-lg animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          Ver los mejores sitios de {country.name}
        </Link>
      </div>
    </section>
  );
}
