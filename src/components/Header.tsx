import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Trophy, CircleDot, Layers, Gamepad2, Globe } from "lucide-react";
import countries from "@/data/countries.json";

const navItems = [
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
  const [flagsOpen, setFlagsOpen] = useState(false);
  const flagsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (flagsRef.current && !flagsRef.current.contains(e.target as Node)) {
        setFlagsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

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

          {/* Country flag button */}
          <div className="relative ml-2" ref={flagsRef}>
            <button
              onClick={() => setFlagsOpen(!flagsOpen)}
              className="flex items-center gap-1 rounded-full border border-header-foreground/20 px-2.5 py-1 text-xs font-semibold transition-colors hover:border-cta hover:text-cta"
              aria-label="Seleccionar país"
            >
              <Globe className="h-3.5 w-3.5" />
              <span className="hidden lg:inline">País</span>
            </button>
            {flagsOpen && (
              <div className="absolute right-0 top-full mt-2 grid w-64 grid-cols-4 gap-1 rounded-lg border border-border bg-card p-3 shadow-xl">
                {countries.map((c) => (
                  <Link
                    key={c.code}
                    to={`/pais/${c.code}`}
                    onClick={() => setFlagsOpen(false)}
                    className="flex flex-col items-center gap-0.5 rounded-md p-1.5 text-center transition-colors hover:bg-accent"
                    title={c.name}
                  >
                    <span className="text-xl">{c.flag}</span>
                    <span className="text-[10px] leading-tight text-card-foreground">{c.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
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
          {/* Mobile flags */}
          <div className="container flex flex-wrap gap-2 border-t border-header-foreground/10 py-3">
            {countries.map((c) => (
              <Link key={c.code} to={`/pais/${c.code}`} onClick={() => setOpen(false)} title={c.name} className="text-xl transition-transform hover:scale-125">
                {c.flag}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
