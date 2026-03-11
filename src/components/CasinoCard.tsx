import { Star, Shield, Gamepad2, Smartphone } from "lucide-react";
import type { Casino } from "@/data/casinos";

interface CasinoCardProps {
  casino: Casino;
  countryFlag?: string;
}

export default function CasinoCard({ casino, countryFlag }: CasinoCardProps) {
  const isTop = casino.rank === 1;

  if (isTop) {
    return (
      <article className="relative overflow-hidden rounded-xl border-2 border-orange bg-card shadow-lg">
        {/* Top banner */}
        <div className="flex items-center justify-between bg-dark-surface px-4 py-3">
          <div className="flex items-center gap-3">
            <span className="font-heading text-2xl font-black text-orange">#{casino.rank}</span>
            <div>
              <h3 className="font-heading text-xl font-bold text-dark-surface-foreground">{casino.name}</h3>
              <p className="text-xs text-dark-surface-foreground/70">{casino.tagline}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-orange text-orange" />
              ))}
            </div>
            <span className="relative rounded-lg bg-gradient-to-br from-rank-gold to-orange px-3 py-1 font-heading text-xs font-black text-orange-foreground shadow-md">
              SITIO #1
            </span>
          </div>
        </div>

        {/* Expanded body */}
        <div className="p-4">
          {/* Logo + Bonus block side by side */}
          <div className="flex gap-3">
            <div className="flex w-28 flex-shrink-0 flex-col items-center justify-center rounded-lg bg-dark-surface p-3">
              <span className="font-heading text-lg font-black text-orange">{casino.name}</span>
              <p className="text-[10px] text-dark-surface-foreground/60">{casino.tagline}</p>
            </div>
            <div className="flex-1 rounded-lg bg-dark-surface p-3">
              <p className="font-heading text-xs font-bold text-orange">Oferta Especial 🎰🎲</p>
              <p className="font-heading text-lg font-black leading-tight text-dark-surface-foreground">{casino.bonus}</p>
              <p className="mt-0.5 text-xs text-dark-surface-foreground/70">{casino.bonusDetail}</p>
            </div>
          </div>

          {/* Meta row */}
          <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1"><Shield className="h-3.5 w-3.5" /> Métodos: +{casino.methods}</span>
            <span className="flex items-center gap-1"><Gamepad2 className="h-3.5 w-3.5" /> Juegos: +{casino.games.toLocaleString()}</span>
            {casino.hasApp && <span className="flex items-center gap-1"><Smartphone className="h-3.5 w-3.5" /> App</span>}
            {countryFlag && <span className="text-base">{countryFlag}</span>}
          </div>

          {/* CTA */}
          <div className="mt-3 flex items-center justify-between gap-2">
            <button className="flex items-center gap-1 text-xs text-muted-foreground underline hover:text-foreground">
              🔍 Ver términos
            </button>
            <a
              href="#"
              className="inline-flex items-center gap-1 rounded-lg bg-orange px-6 py-2.5 font-heading text-sm font-bold text-orange-foreground shadow-md transition-colors hover:bg-orange-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange"
            >
              Reclamar Bono &gt;
            </a>
          </div>
        </div>
      </article>
    );
  }

  // Compact card for #2, #3, etc.
  return (
    <article className="overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md">
      {/* Header */}
      <div className="flex items-center justify-between bg-dark-surface px-4 py-2.5">
        <div className="flex items-center gap-3">
          <span className="font-heading text-xl font-black text-orange">#{casino.rank}</span>
          <div>
            <h3 className="font-heading text-base font-bold text-dark-surface-foreground">{casino.name}</h3>
            <p className="text-[11px] text-dark-surface-foreground/60">{casino.tagline}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-3 w-3 fill-orange text-orange" />
            ))}
          </div>
          <span className="rounded bg-orange/20 px-2 py-1 font-heading text-sm font-bold text-orange">
            ★{casino.rating}
          </span>
        </div>
      </div>

      {/* Body compact */}
      <div className="flex items-center justify-between gap-3 px-4 py-3">
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="font-heading text-sm font-black text-foreground">{casino.name}</span>
            <span className="rounded bg-orange px-2 py-0.5 text-[10px] font-bold text-orange-foreground">Bonos</span>
          </div>
          <div className="mt-1 flex flex-wrap items-center gap-2 text-[11px] text-muted-foreground">
            <span className="flex items-center gap-0.5"><Shield className="h-3 w-3" /> Métodos: +{casino.methods}</span>
            <span className="flex items-center gap-0.5"><Gamepad2 className="h-3 w-3" /> Juegos: +{casino.games.toLocaleString()}</span>
          </div>
        </div>
        <div className="flex flex-col items-end gap-1.5">
          <p className="font-heading text-base font-black text-foreground">{casino.bonus}</p>
          <a
            href="#"
            className="inline-flex items-center rounded-md bg-orange px-4 py-1.5 font-heading text-xs font-bold text-orange-foreground transition-colors hover:bg-orange-hover"
          >
            Reclamar Bono
          </a>
        </div>
      </div>
    </article>
  );
}
