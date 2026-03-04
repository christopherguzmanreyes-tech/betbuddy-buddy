import { useLocation } from "react-router-dom";
import SectionTitle from "@/components/SectionTitle";

const titles: Record<string, { title: string; subtitle: string }> = {
  "/paises": { title: "Países", subtitle: "Elige tu país para ver los mejores sitios" },
  "/casinos": { title: "Casinos Online", subtitle: "Los mejores casinos verificados de Latinoamérica" },
  "/apuestas": { title: "Casas de Apuestas", subtitle: "Compara y elige dónde apostar" },
  "/bonos": { title: "Bonos y Promociones", subtitle: "Ofertas exclusivas para ti" },
};

export default function ListPage() {
  const { pathname } = useLocation();
  const data = titles[pathname] ?? { title: "Página", subtitle: "" };

  return (
    <section className="container py-16">
      <SectionTitle title={data.title} subtitle={data.subtitle} />
      <p className="mt-10 text-center text-muted-foreground">Contenido próximamente…</p>
    </section>
  );
}
