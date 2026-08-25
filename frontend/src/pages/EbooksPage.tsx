import PageHero from "@/components/common/PageHero";

import Container from "@/components/common/Container";

import { EbookCard } from "@/components/cards/ContentCards";

import { ebooks } from "@/data/mockData";

export default function EbooksPage() {
  return (
    <>
      <PageHero
        eyebrow="Grandir"
        title="Bibliothèque chrétienne"
        description="Des ressources sélectionnées pour accompagner la prière, la foi et la croissance spirituelle."
      />

      <Container className="py-14">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ebooks.map((ebook) => (
            <EbookCard key={ebook.title} {...ebook} />
          ))}
        </div>
      </Container>
    </>
  );
}
