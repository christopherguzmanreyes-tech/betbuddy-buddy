import { useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import CasinoCard from "@/components/CasinoCard";
import { casinos, apuestas, bonos, brands } from "@/data/casinos";
import heroBg from "@/assets/hero-bg.jpg";
import { ChevronDown, Search, Star } from "lucide-react";

const filterTabs = ["Todos", "Bonos", "Métodos de pago", "Juegos en vivo", "Con App", "Crypto"] as const;

export default function CasinosPage() {
  const [activeFilter, setActiveFilter] = useState("Todos");

  return (
    <div className="pb-20 md:pb-0">
      {/* Hero */}
      <section className="relative flex min-h-[40vh] items-end overflow-hidden bg-dark-surface" aria-label="Hero casinos">
        <img src={heroBg} alt="" className="absolute inset-0 h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-surface via-dark-surface/80 to-dark-surface/20" />
        <div className="relative z-10 container pb-8 pt-20">
          <h1 className="max-w-lg font-heading text-2xl font-black leading-tight text-dark-surface-foreground md:text-4xl">
            🎰 Mejores <span className="text-orange">Casinos Online</span> en Latinoamérica 2025
          </h1>
          <p className="mt-3 max-w-md text-sm text-dark-surface-foreground/80 md:text-base">
            Comparamos los casinos más confiables y con mejores bonos para jugadores de LATAM.
            Encuentra tu sitio ideal con ofertas exclusivas.
          </p>

          {/* Search bar */}
          <div className="mt-5 flex max-w-sm items-center gap-2 rounded-lg bg-dark-surface/80 px-3 py-2 ring-1 ring-border backdrop-blur-sm">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar casino..."
              className="flex-1 bg-transparent text-sm text-dark-surface-foreground placeholder:text-muted-foreground focus:outline-none"
            />
          </div>
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

      {/* Top Casinos */}
      <section className="container py-8">
        <SectionTitle title="🏆 Top Casinos Online" subtitle="Los mejores casinos verificados y con licencia para LATAM" />
        <div className="mt-5 grid gap-4">
          {casinos.map((c) => (
            <CasinoCard key={c.rank} casino={c} />
          ))}
        </div>
      </section>

      {/* Apuestas */}
      <section className="bg-muted py-8">
        <div className="container">
          <SectionTitle title="⚽ Mejores Casas de Apuestas" subtitle="Compara las mejores plataformas de apuestas deportivas" />
          <div className="mt-5 grid gap-4">
            {apuestas.map((c) => (
              <CasinoCard key={c.rank} casino={c} />
            ))}
          </div>
        </div>
      </section>

      {/* Bonos */}
      <section className="container py-8">
        <SectionTitle title="🎁 Mejores Bonos de Casino" subtitle="Las ofertas y promociones más generosas del momento" />
        <div className="mt-5 grid gap-4">
          {bonos.map((c) => (
            <CasinoCard key={c.rank} casino={c} />
          ))}
        </div>
      </section>

      {/* Info section */}
      <section className="bg-dark-surface py-10">
        <div className="container max-w-3xl text-center">
          <h2 className="font-heading text-xl font-bold text-dark-surface-foreground">
            ¿Cómo elegimos los mejores casinos?
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-dark-surface-foreground/70">
            Nuestro equipo de expertos evalúa cada casino con criterios estrictos: licencia y regulación,
            variedad de métodos de pago, catálogo de juegos, calidad del soporte al cliente, velocidad
            de retiros y generosidad de bonos. Solo recomendamos sitios que cumplen con los más altos
            estándares de seguridad y confiabilidad.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { label: "Casinos evaluados", value: "50+" },
              { label: "Bonos verificados", value: "100+" },
              { label: "Expertos", value: "12" },
              { label: "Países cubiertos", value: "20" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-lg bg-dark-surface/50 p-4 ring-1 ring-border">
                <p className="font-heading text-2xl font-black text-orange">{stat.value}</p>
                <p className="mt-1 text-xs text-dark-surface-foreground/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
