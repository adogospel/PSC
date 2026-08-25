import { Link } from "react-router";

import Button from "@/components/ui/Button";

import { Field, Input } from "@/components/ui/FormControls";

export default function RegisterPage() {
  return (
    <section className="surface rounded-[2.5rem] p-6 sm:p-8">
      <h1 className="font-serif text-4xl font-semibold">Rejoindre la communauté.</h1>

      <p className="text-muted mt-2 text-sm leading-6">
        Créez votre espace pour confier, prier et suivre des sujets.
      </p>

      <form className="mt-7 grid gap-5" onSubmit={(event) => event.preventDefault()}>
        <Field label="Nom d’affichage">
          <Input placeholder="Votre nom" />
        </Field>

        <Field label="Email">
          <Input type="email" autoComplete="email" placeholder="vous@exemple.com" />
        </Field>

        <Field label="Mot de passe">
          <Input type="password" autoComplete="new-password" placeholder="8 caractères minimum" />
        </Field>

        <Button type="submit" size="lg">
          Créer mon compte
        </Button>
      </form>

      <p className="text-muted mt-6 text-center text-sm">
        Déjà inscrit ?{" "}
        <Link className="text-orange-deep font-bold" to="/connexion">
          Se connecter
        </Link>
      </p>
    </section>
  );
}
