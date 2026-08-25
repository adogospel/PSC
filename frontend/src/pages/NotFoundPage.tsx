import Container from "@/components/common/Container";

import { ButtonLink } from "@/components/ui/Button";

export default function NotFoundPage() {
  return (
    <main className="grid min-h-screen place-items-center">
      <Container className="text-center">
        <p className="text-orange-deep text-sm font-bold tracking-[0.2em] uppercase">404</p>

        <h1 className="mt-4 font-serif text-6xl font-semibold">Cette page n’existe pas.</h1>

        <p className="text-muted mx-auto mt-4 max-w-lg">Revenez à l’accueil de Prier sans cesse.</p>

        <ButtonLink to="/" className="mt-7">
          Retour à l’accueil
        </ButtonLink>
      </Container>
    </main>
  );
}
