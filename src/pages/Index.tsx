import { useOutletContext } from "react-router-dom";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import CardGrid from "@/components/CardGrid";
import CountrySelector from "@/components/CountrySelector";
import type { Country } from "@/hooks/useCountry";

import cardGuias from "@/assets/card-guias.jpg";
import cardTrucos from "@/assets/card-trucos.jpg";
import cardComoJugar from "@/assets/card-como-jugar.jpg";

interface Ctx {
  selected: Country;
  selectByCode: (code: string) => void;
  countries: Country[];
}

const escuelaCards = [
  { title: "Guías y Estrategias", description: "Tips y estrategias de apuestas", image: cardGuias, cta: "Aprende Más", href: "/apuestas" },
  { title: "Trucos y Consejos", description: "Consejos para ganar en tus apuestas", image: cardTrucos, cta: "Ver Consejos", href: "/bonos" },
  { title: "Cómo Jugar", description: "Tutoriales de Blackjack, slots y más", image: cardComoJugar, cta: "Ver Tutoriales", href: "/casinos" },
];

export default function Index() {
  const { selected, selectByCode, countries } = useOutletContext<Ctx>();

  return (
    <>
      <Hero country={selected} />

      <section className="container py-16">
        <SectionTitle title="Escuela de Apuestas" subtitle="Aprende a jugar y apuesta como un experto" />
        <div className="mt-10">
          <CardGrid items={escuelaCards} />
        </div>
      </section>

      <section className="bg-muted py-16">
        <div className="container">
          <SectionTitle title="Explora los Países" subtitle="Visita nuestras guías en todo Latinoamérica" />
          <div className="mt-10">
            <CountrySelector countries={countries} onSelectCountry={selectByCode} />
          </div>
        </div>
      </section>
    </>
  );
}
