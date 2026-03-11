import { useParams, useOutletContext, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import CasinoCard from "@/components/CasinoCard";
import type { Country } from "@/hooks/useCountry";
import { casinos, apuestas, bonos } from "@/data/casinos";
import heroBg from "@/assets/hero-bg.jpg";
import { ChevronDown } from "lucide-react";

interface Ctx {
  selected: Country;
  selectByCode: (code: string) => void;
  countries: Country[];
}

const filterTabs = ["Bonos", "Métodos", "Juegos", "En vivo", "Bonos amigos", "Casinos nuevos"] as const;

export default function CountryPage() {
  const { codigo } = useParams<{ codigo: string }>();
  const { selectByCode, countries } = useOutletContext<Ctx>();
  const [activeFilter, setActiveFilter] = useState("Bonos");

  const country = countries.find((c) => c.code === codigo);

  useEffect(() => {
    if (codigo) selectByCode(codigo);
  }, [codigo, selectByCode]);

  if (!country)
    return (
      <div className="container py-20 text-center">
        <h1 className="font-heading text-2xl font-bold">País no encontrado</h1>
      </div>
    );

  return (
    <div className="pb-20 md:pb-0">
      {/* Hero */}
      <section className="relative flex min-h-[45vh] items-end overflow-hidden bg-dark-surface" aria-label="Hero país">
        <img src={heroBg} alt="" className="absolute inset-0 h-full w-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-surface via-dark-surface/80 to-dark-surface/30" />
        <div className="relative z-10 container pb-8 pt-20">
          <h1 className="max-w-md font-heading text-2xl font-black leading-tight text-dark-surface-foreground md:text-4xl">
            Mejores Casinos Online en <span className="text-orange">{country.name}</span> 2025
          </h1>
          <p className="mt-3 max-w-sm text-sm text-dark-surface-foreground/80 md:text-base">
            Compara los mejores sitios de casinos en {country.name} y disfruta de bonos exclusivos, giros gratis
            y juegos populares de forma segura y legal {country.flag}
          </p>
        </div>
      </section>

      {/* Filter tabs */}
      <div className="border-b border-border bg-card">
        <div className="container flex flex-wrap items-center gap-2 py-3">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`rounded-full border px-4 py-1.5 font-heading text-xs font-bold transition-colors ${
                activeFilter === tab
                  ? "border-orange bg-orange text-orange-foreground"
                  : "border-border bg-card text-foreground hover:border-orange/50"
              }`}
            >
              {tab}
            </button>
          ))}
          <button className="ml-auto flex items-center gap-1 rounded-full border border-border px-3 py-1.5 font-heading text-xs font-bold text-foreground transition-colors hover:border-orange/50">
            Ordenar <ChevronDown className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* Casinos section */}
      <section className="container py-8">
        <SectionTitle title={`🎰 Casinos en ${country.name}`} subtitle={`Top casinos verificados en ${country.name}`} />
        <div className="mt-5 grid gap-4">
          {casinos.map((c) => (
            <CasinoCard key={c.rank} casino={c} countryFlag={country.flag} />
          ))}
        </div>
      </section>

      {/* Apuestas section */}
      <section className="bg-muted py-8">
        <div className="container">
          <SectionTitle title={`⚽ Apuestas en ${country.name}`} subtitle={`Las mejores casas de apuestas en ${country.name}`} />
          <div className="mt-5 grid gap-4">
            {apuestas.map((c) => (
              <CasinoCard key={c.rank} casino={{ ...c }} countryFlag={country.flag} />
            ))}
          </div>
        </div>
      </section>

      {/* Bonos section */}
      <section className="container py-8">
        <SectionTitle title={`🎁 Bonos en ${country.name}`} subtitle={`Ofertas y promociones exclusivas en ${country.name}`} />
        <div className="mt-5 grid gap-4">
          {bonos.map((c) => (
            <CasinoCard key={c.rank} casino={c} countryFlag={country.flag} />
          ))}
        </div>
      </section>

      {/* Explore more */}
      <section className="bg-dark-surface py-8">
        <div className="container text-center">
          <h2 className="font-heading text-xl font-bold text-dark-surface-foreground">
            Explora más países
          </h2>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            {countries.filter((c) => c.code !== codigo).slice(0, 8).map((c) => (
              <Link
                key={c.code}
                to={`/pais/${c.code}`}
                className="rounded-full border border-orange/30 px-4 py-2 text-sm text-dark-surface-foreground transition-colors hover:border-orange hover:bg-orange/10"
              >
                {c.flag} {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
