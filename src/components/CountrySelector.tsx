import { Link } from "react-router-dom";
import type { Country } from "@/hooks/useCountry";

interface CountrySelectorProps {
  countries: Country[];
  onSelectCountry: (code: string) => void;
}

export default function CountrySelector({ countries, onSelectCountry }: CountrySelectorProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-6">
      {countries.map((c) => (
        <Link
          key={c.code}
          to={`/pais/${c.code}`}
          onClick={() => onSelectCountry(c.code)}
          className="flex flex-col items-center gap-2 rounded-lg border border-border bg-card p-4 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          aria-label={`Ver guía de ${c.name}`}
        >
          <span className="text-4xl md:text-5xl">{c.flag}</span>
          <span className="font-heading text-sm font-semibold text-card-foreground">{c.name}</span>
        </Link>
      ))}
    </div>
  );
}
