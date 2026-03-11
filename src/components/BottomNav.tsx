import { Link, useLocation } from "react-router-dom";
import { Home, Dice5, Trophy, Gift, BookOpen } from "lucide-react";

const items = [
  { label: "Inicio", icon: Home, to: "/" },
  { label: "Casinos", icon: Dice5, to: "/casinos" },
  { label: "Apuestas", icon: Trophy, to: "/apuestas" },
  { label: "Bonos", icon: Gift, to: "/bonos" },
  { label: "Guías", icon: BookOpen, to: "/guias" },
];

export default function BottomNav() {
  const { pathname } = useLocation();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-dark-surface md:hidden" aria-label="Navegación inferior">
      <div className="flex items-center justify-around py-2">
        {items.map((item) => {
          const active = pathname === item.to || (item.to !== "/" && pathname.startsWith(item.to));
          return (
            <Link
              key={item.to}
              to={item.to}
              className={`flex flex-col items-center gap-0.5 px-2 py-1 text-[10px] font-heading font-semibold transition-colors ${
                active ? "text-orange" : "text-dark-surface-foreground/60 hover:text-dark-surface-foreground"
              }`}
            >
              <item.icon className={`h-5 w-5 ${active ? "text-orange" : ""}`} />
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
