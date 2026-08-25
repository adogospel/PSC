import { Link } from "react-router";

import Button from "@/components/ui/Button";

import { Field, Input } from "@/components/ui/FormControls";

export default function LoginPage() {
  return (
    <section className="surface rounded-[2.5rem] p-6 sm:p-8">
      <h1 className="font-serif text-4xl font-semibold">Bon retour parmi nous.</h1>

      <p className="text-muted mt-2 text-sm leading-6">
        La logique d’authentification sera connectée en Phase 2.
      </p>

      <form className="mt-7 grid gap-5" onSubmit={(event) => event.preventDefault()}>
        <Field label="Email">
          <Input type="email" autoComplete="email" placeholder="vous@exemple.com" />
        </Field>

        <Field label="Mot de passe">
          <Input type="password" autoComplete="current-password" placeholder="••••••••" />
        </Field>

        <Button type="submit" size="lg">
          Se connecter
        </Button>
      </form>

      <p className="text-muted mt-6 text-center text-sm">
        Pas encore de compte ?{" "}
        <Link className="text-orange-deep font-bold" to="/inscription">
          Créer un compte
        </Link>
      </p>
    </section>
  );
}
