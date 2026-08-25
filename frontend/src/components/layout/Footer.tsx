import { Link } from "react-router";

import Container from "@/components/common/Container";

import Logo from "@/components/common/Logo";

export default function Footer() {
  return (
    <footer className="border-line border-t bg-[#2d211c] py-12 text-white">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo className="[&>span:last-child>span]:text-white" />

            <p className="mt-5 max-w-md text-sm leading-7 text-white/65">
              Une communauté numérique chrétienne où chacun peut confier ses fardeaux, porter ceux
              des autres et témoigner de ce que Dieu accomplit.
            </p>
          </div>

          <div>
            <h3 className="text-peach text-sm font-bold tracking-[0.18em] uppercase">Explorer</h3>

            <div className="mt-4 grid gap-3 text-sm text-white/70">
              <Link to="/prieres">Mur de prière</Link>

              <Link to="/intercesseurs">Intercesseurs</Link>

              <Link to="/ebooks">Ebooks</Link>

              <Link to="/predications">Prédications</Link>
            </div>
          </div>

          <div>
            <h3 className="text-peach text-sm font-bold tracking-[0.18em] uppercase">Communauté</h3>

            <div className="mt-4 grid gap-3 text-sm text-white/70">
              <Link to="/a-propos">À propos</Link>

              <Link to="/charte">Charte</Link>

              <Link to="/contact">Contact</Link>

              <Link to="/status">État technique</Link>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Prier sans cesse.</p>

          <p>Prier · Intercéder · Grandir · Témoigner</p>
        </div>
      </Container>
    </footer>
  );
}
