import { Search } from "lucide-react";

import PageHero from "@/components/common/PageHero";

import Container from "@/components/common/Container";

import { PrayerCard } from "@/components/cards/ContentCards";

import { Input, Select } from "@/components/ui/FormControls";

import { Pagination } from "@/components/ui/Navigation";

import { prayers } from "@/data/mockData";

export default function PrayerWallPage() {
  return (
    <>
      <PageHero
        eyebrow="Prier"
        title="Le mur de prière"
        description="Trouvez une personne à porter dans la prière. Les sujets avec peu de soutien ne sont pas oubliés."
      />

      <Container className="py-12 sm:py-16">
        <div className="surface mb-8 grid gap-3 rounded-3xl p-4 md:grid-cols-[1fr_220px_220px]">
          <label className="relative">
            <Search className="text-muted absolute top-1/2 left-4 -translate-y-1/2" size={18} />

            <Input className="pl-11" placeholder="Rechercher un sujet..." />
          </label>

          <Select defaultValue="recent">
            <option value="recent">Plus récents</option>

            <option value="least">Peu de prières</option>

            <option value="answered">Prières exaucées</option>
          </Select>

          <Select defaultValue="all">
            <option value="all">Toutes les catégories</option>

            <option>Famille</option>

            <option>Travail</option>

            <option>Études</option>

            <option>Vie spirituelle</option>
          </Select>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {prayers.map((prayer) => (
            <PrayerCard key={prayer.id} prayer={prayer} />
          ))}
        </div>

        <div className="mt-10">
          <Pagination />
        </div>
      </Container>
    </>
  );
}
