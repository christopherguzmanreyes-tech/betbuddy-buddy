import { Link } from "react-router-dom";

export interface CardItem {
  title: string;
  description: string;
  image: string;
  cta: string;
  href: string;
}

interface CardGridProps {
  items: CardItem[];
}

export default function CardGrid({ items }: CardGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <article key={item.title} className="group overflow-hidden rounded-lg border border-border bg-card shadow-md transition-shadow hover:shadow-xl">
          <div className="aspect-video overflow-hidden">
            <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" />
          </div>
          <div className="flex flex-col gap-2 p-5">
            <h3 className="font-heading text-lg font-bold text-card-foreground">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.description}</p>
            <Link
              to={item.href}
              className="mt-3 inline-block self-start rounded-md bg-btn-green px-5 py-2.5 text-sm font-semibold text-btn-green-foreground transition-colors hover:bg-btn-green-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              {item.cta}
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
