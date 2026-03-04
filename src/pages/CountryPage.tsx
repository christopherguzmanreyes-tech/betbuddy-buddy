import { useParams, useOutletContext, Link } from "react-router-dom";
import { useEffect } from "react";
import SectionTitle from "@/components/SectionTitle";
import type { Country } from "@/hooks/useCountry";

interface Ctx {
  selected: Country;
  selectByCode: (code: string) => void;
  countries: Country[];
}

export default function CountryPage() {
  const { codigo } = useParams<{ codigo: string }>();
  const { selectByCode, countries } = useOutletContext<Ctx>();

  const country = countries.find((c) => c.code === codigo);

  useEffect(() => {
    if (codigo) selectByCode(codigo);
  }, [codigo, selectByCode]);

  if (!country) return <div className="container py-20 text-center"><h1 className="font-heading text-2xl font-bold">País no encontrado</h1></div>;

  return (
    <section className="container py-16">
      <SectionTitle title={`${country.flag} ${country.name}`} subtitle={`Los mejores casinos y apuestas en ${country.name}`} />
      <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
        {[
          { label: "Casinos", to: "/casinos" },
          { label: "Apuestas", to: "/apuestas" },
          { label: "Bonos", to: "/bonos" },
        ].map((item) => (
          <Link key={item.to} to={item.to} className="flex items-center justify-center rounded-lg border border-border bg-card p-6 font-heading text-lg font-bold shadow transition-shadow hover:shadow-lg">
            {item.label} en {country.name}
          </Link>
        ))}
      </div>
    </section>
  );
}
