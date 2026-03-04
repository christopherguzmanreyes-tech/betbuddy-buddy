import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-primary py-10 text-primary-foreground">
      <div className="container flex flex-col items-center gap-4 text-center text-sm">
        <Link to="/" className="font-heading text-lg font-black">
          🎰 el <span className="text-cta">apuesta</span>BRO
        </Link>
        <nav className="flex flex-wrap justify-center gap-4 font-heading text-xs uppercase tracking-wide" aria-label="Pie de página">
          <Link to="/paises" className="hover:text-cta">Países</Link>
          <Link to="/casinos" className="hover:text-cta">Casinos</Link>
          <Link to="/apuestas" className="hover:text-cta">Apuestas</Link>
          <Link to="/bonos" className="hover:text-cta">Bonos</Link>
        </nav>
        <p className="text-primary-foreground/60">© {new Date().getFullYear()} elApuestaBRO. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
