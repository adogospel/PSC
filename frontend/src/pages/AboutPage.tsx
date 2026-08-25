import PageHero from "@/components/common/PageHero";

import Container from "@/components/common/Container";

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Notre mission"
        title="Créer un espace réellement consacré à la prière"
        description="Prier sans cesse n’est pas un réseau social classique auquel on aurait ajouté des éléments chrétiens."
      />

      <Container className="py-14">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="surface rounded-4xl p-7">
            <h2 className="font-serif text-3xl font-semibold">Notre vision</h2>

            <p className="text-muted mt-4 text-sm leading-7">
              Permettre à chacun de confier un besoin, recevoir le soutien d’autres croyants, suivre
              son évolution et, lorsque Dieu répond, témoigner pour encourager d’autres personnes.
            </p>
          </div>

          <div className="surface rounded-4xl p-7">
            <h2 className="font-serif text-3xl font-semibold">Nos quatre verbes</h2>

            <p className="text-muted mt-4 text-sm leading-7">
              Prier. Intercéder. Grandir. Témoigner. Ils structurent le produit, son langage et son
              expérience.
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}
