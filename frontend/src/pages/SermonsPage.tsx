import PageHero from "@/components/common/PageHero";

import Container from "@/components/common/Container";

import { SermonCard } from "@/components/cards/ContentCards";

import { sermons } from "@/data/mockData";

export default function SermonsPage() {
  return (
    <>
      <PageHero
        eyebrow="Écouter"
        title="Prédications"
        description="Une sélection de messages pour nourrir la foi et approfondir la vie de prière."
      />

      <Container className="py-14">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {sermons.map((sermon) => (
            <SermonCard key={sermon.title} {...sermon} />
          ))}
        </div>
      </Container>
    </>
  );
}
