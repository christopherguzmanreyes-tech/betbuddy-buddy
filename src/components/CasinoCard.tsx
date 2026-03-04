import { Star } from "lucide-react";
import type { Casino } from "@/data/casinos";

interface CasinoCardProps {
  casino: Casino;
  countryFlag?: string;
}

export default function CasinoCard({ casino, countryFlag }: CasinoCardProps) {
  const isTop = casino.rank === 1;

  return (
    <article
      className={`relative overflow-hidden rounded-lg border shadow-md transition-shadow hover:shadow-xl ${
        isTop ? "border-orange bg-card ring-2 ring-orange/30" : "border-border bg-card"
      }`}
    >
      {/* Header bar */}
      <div className={`flex items-center justify-between px-4 py-3 ${isTop ? "bg-dark-surface" : "bg-dark-surface/90"}`}>
        <div className="flex items-center gap-3">
          <span className={`font-heading text-xl font-black ${isTop ? "text-orange" : "text-orange"}`}>
            #{casino.rank}
          </span>
          <div>
            <h3 className="font-heading text-lg font-bold text-dark-surface-foreground">{casino.name}</h3>
            <p className="text-xs text-dark-surface-foreground/70">{casino.tagline}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-orange text-orange" />
            ))}
          </div>
          {isTop ? (
            <span className="rounded bg-orange px-2 py-0.5 font-heading text-xs font-bold text-orange-foreground">
              #1
            </span>
          ) : (
            <span className="rounded bg-orange/20 px-2 py-1 font-heading text-sm font-bold text-orange">
              ★{casino.rating}
            </span>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col gap-3 p-4">
        {/* Bonus block */}
        <div className="rounded-md bg-dark-surface p-3">
          <p className="font-heading text-sm font-bold text-orange">Oferta Especial 🎰🎲</p>
          <p className="font-heading text-lg font-black text-dark-surface-foreground">{casino.bonus}</p>
          <p className="text-xs text-dark-surface-foreground/70">{casino.bonusDetail}</p>
        </div>

        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
          <span>🔒 Métodos: +{casino.methods}</span>
          <span>🎮 Juegos: +{casino.games.toLocaleString()}</span>
          {casino.hasApp && <span>📱 App</span>}
          {countryFlag && <span>{countryFlag}</span>}
        </div>

        {/* CTA */}
        <div className="flex items-center justify-between gap-2">
          <button className="text-xs text-muted-foreground underline hover:text-foreground">
            🔍 Ver términos
          </button>
          <a
            href="#"
            className="inline-flex items-center gap-1 rounded-md bg-orange px-5 py-2.5 font-heading text-sm font-bold text-orange-foreground transition-colors hover:bg-orange-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange"
          >
            Reclamar Bono &gt;
          </a>
        </div>
      </div>
    </article>
  );
}
