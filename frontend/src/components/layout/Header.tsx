import { useState } from "react";

import { Menu, X } from "lucide-react";

import { NavLink } from "react-router";

import Container from "@/components/common/Container";

import Logo from "@/components/common/Logo";

import { ButtonLink } from "@/components/ui/Button";

import IconButton from "@/components/ui/IconButton";

import { publicNavigation } from "@/data/navigation";

import { cn } from "@/lib/utils";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-line/70 bg-ivory/90 sticky top-0 z-40 border-b backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between gap-4">
        <Logo />

        <nav aria-label="Navigation principale" className="hidden items-center gap-1 xl:flex">
          {publicNavigation.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  "text-muted hover:bg-orange-light/10 hover:text-ink rounded-full px-3 py-2 text-sm font-semibold transition",

                  isActive && "bg-orange-light/10 text-orange-deep",
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <ButtonLink to="/connexion" variant="ghost">
            Connexion
          </ButtonLink>

          <ButtonLink to="/publier">Confier un sujet</ButtonLink>
        </div>

        <IconButton
          className="xl:hidden"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </IconButton>
      </Container>

      {open && (
        <div className="border-line/70 bg-ivory border-t xl:hidden">
          <Container className="py-5">
            <nav className="grid gap-1">
              {publicNavigation.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "text-muted rounded-2xl px-4 py-3 text-sm font-semibold",

                      isActive && "bg-orange-light/10 text-orange-deep",
                    )
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              <ButtonLink
                to="/connexion"
                variant="secondary"
                className="w-full"
                onClick={() => setOpen(false)}
              >
                Connexion
              </ButtonLink>

              <ButtonLink to="/publier" className="w-full" onClick={() => setOpen(false)}>
                Confier un sujet
              </ButtonLink>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
