import PageHero from "@/components/common/PageHero";

import Container from "@/components/common/Container";

import { TestimonyCard } from "@/components/cards/ContentCards";

import { testimonies } from "@/data/mockData";

export default function TestimoniesPage() {
  const items = [...testimonies, ...testimonies];

  return (
    <>
      <PageHero
        eyebrow="Témoigner"
        title="Ils racontent ce que Dieu a fait"
        description="Des témoignages issus de sujets marqués comme exaucés et validés avant publication."
      />

      <Container className="grid gap-5 py-14 md:grid-cols-2">
        {items.map((item, index) => (
          <TestimonyCard key={`${item.text}-${index}`} {...item} />
        ))}
      </Container>
    </>
  );
}
