import { Link, useOutletContext } from "react-router-dom";
import SectionTitle from "@/components/SectionTitle";
import type { Country } from "@/hooks/useCountry";
import heroBg from "@/assets/hero-bg.jpg";

interface Ctx {
  selected: Country;
  selectByCode: (code: string) => void;
  countries: Country[];
}

export default function PaisesPage() {
  const { countries, selectByCode } = useOutletContext<Ctx>();

  return (
    <>
      {/* Hero */}
      <section
        className="relative flex items-center justify-center py-20 text-center"
        style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-dark-surface/80" />
        <div className="relative z-10 flex flex-col items-center gap-4 px-4">
          <h1 className="font-heading text-3xl font-extrabold text-white md:text-5xl">
            🌎 Explora todos los Países
          </h1>
          <p className="max-w-xl text-lg text-white/80">
            Encuentra los mejores casinos, apuestas y bonos disponibles en tu país
          </p>
        </div>
      </section>

      {/* Country grid */}
      <section className="container py-16">
        <SectionTitle title="Elige tu País" subtitle="Selecciona tu país para ver las mejores opciones" />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {countries.map((c) => (
            <Link
              key={c.code}
              to={`/pais/${c.code}`}
              onClick={() => selectByCode(c.code)}
              className="group flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:border-cta hover:shadow-lg hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label={`Ver guía de ${c.name}`}
            >
              <span className="text-5xl transition-transform duration-200 group-hover:scale-110 md:text-6xl">
                {c.flag}
              </span>
              <span className="font-heading text-sm font-bold text-card-foreground md:text-base">
                {c.name}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
