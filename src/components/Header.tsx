import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Trophy, CircleDot, Layers, Gamepad2 } from "lucide-react";

const navItems = [
  { label: "Países", to: "/paises" },
  { label: "Casinos", to: "/casinos" },
  { label: "Apuestas", to: "/apuestas" },
  { label: "Bonos", to: "/bonos" },
];

const categories = [
  { label: "Deportivas", icon: Trophy, to: "/apuestas" },
  { label: "Ruleta", icon: CircleDot, to: "/casinos" },
  { label: "Mesas", icon: Layers, to: "/casinos" },
  { label: "Slots", icon: Gamepad2, to: "/casinos" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-header text-header-foreground shadow-lg">
      <div className="container flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-2 font-heading text-xl font-black tracking-tight md:text-2xl" aria-label="Inicio">
          <span>🎰</span>
          <span>
            el <span className="text-cta">aposta</span>BRO
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Navegación principal">
          {navItems.map((item) => (
            <Link key={item.to} to={item.to} className="font-heading text-sm font-semibold uppercase tracking-wide transition-colors hover:text-cta focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta rounded">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          {categories.map((cat) => (
            <Link
              key={cat.label}
              to={cat.to}
              className="flex items-center gap-1.5 rounded-full border border-header-foreground/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide transition-colors hover:border-cta hover:text-cta"
            >
              <cat.icon className="h-3.5 w-3.5" />
              {cat.label}
            </Link>
          ))}
        </div>

        <button className="md:hidden rounded p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta" onClick={() => setOpen(!open)} aria-label={open ? "Cerrar menú" : "Abrir menú"}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-header-foreground/10 bg-header md:hidden">
          <nav className="container flex flex-col gap-3 py-4" aria-label="Navegación móvil">
            {navItems.map((item) => (
              <Link key={item.to} to={item.to} onClick={() => setOpen(false)} className="font-heading text-sm font-semibold uppercase tracking-wide hover:text-cta">
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="container flex flex-wrap items-center gap-2 pb-4">
            {categories.map((cat) => (
              <Link
                key={cat.label}
                to={cat.to}
                onClick={() => setOpen(false)}
                className="flex items-center gap-1.5 rounded-full border border-header-foreground/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide hover:border-cta hover:text-cta"
              >
                <cat.icon className="h-3.5 w-3.5" />
                {cat.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
