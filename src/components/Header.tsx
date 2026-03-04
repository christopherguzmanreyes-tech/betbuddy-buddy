import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import type { Country } from "@/hooks/useCountry";

interface HeaderProps {
  countries: Country[];
  selected: Country;
  onSelectCountry: (code: string) => void;
}

const navItems = [
  { label: "Países", to: "/paises" },
  { label: "Casinos", to: "/casinos" },
  { label: "Apuestas", to: "/apuestas" },
  { label: "Bonos", to: "/bonos" },
];

export default function Header({ countries, selected, onSelectCountry }: HeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-header text-header-foreground shadow-lg">
      <div className="container flex items-center justify-between py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-heading text-xl font-black tracking-tight md:text-2xl" aria-label="Inicio">
          <span>🎰</span>
          <span>
            el <span className="text-cta">aposta</span>BRO
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex" aria-label="Navegación principal">
          {navItems.map((item) => (
            <Link key={item.to} to={item.to} className="font-heading text-sm font-semibold uppercase tracking-wide transition-colors hover:text-cta focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta rounded">
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Flags + Globe */}
        <div className="hidden items-center gap-1 md:flex">
          <Globe className="mr-1 h-5 w-5 text-cta" aria-hidden="true" />
          {countries.slice(0, 5).map((c) => (
            <button
              key={c.code}
              onClick={() => onSelectCountry(c.code)}
              aria-label={`Seleccionar ${c.name}`}
              className={`rounded px-1.5 py-0.5 text-lg transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta ${selected.code === c.code ? "bg-cta/20 scale-110" : ""}`}
            >
              {c.flag}
            </button>
          ))}
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden rounded p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta" onClick={() => setOpen(!open)} aria-label={open ? "Cerrar menú" : "Abrir menú"}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-header-foreground/10 bg-header md:hidden">
          <nav className="container flex flex-col gap-3 py-4" aria-label="Navegación móvil">
            {navItems.map((item) => (
              <Link key={item.to} to={item.to} onClick={() => setOpen(false)} className="font-heading text-sm font-semibold uppercase tracking-wide hover:text-cta">
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="container flex items-center gap-2 pb-4">
            <Globe className="h-5 w-5 text-cta" aria-hidden="true" />
            {countries.slice(0, 5).map((c) => (
              <button
                key={c.code}
                onClick={() => { onSelectCountry(c.code); setOpen(false); }}
                aria-label={`Seleccionar ${c.name}`}
                className={`rounded px-1.5 py-0.5 text-lg ${selected.code === c.code ? "bg-cta/20" : ""}`}
              >
                {c.flag}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
