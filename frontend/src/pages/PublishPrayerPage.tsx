import { ShieldCheck } from "lucide-react";

import PageHero from "@/components/common/PageHero";

import Container from "@/components/common/Container";

import Button from "@/components/ui/Button";

import { Field, Input, Select, Textarea } from "@/components/ui/FormControls";

export default function PublishPrayerPage() {
  return (
    <>
      <PageHero
        eyebrow="Confier"
        title="Déposer un sujet de prière"
        description="Cette maquette prépare le futur formulaire métier. La publication réelle sera activée en Phase 3."
      />

      <Container className="py-12">
        <form
          className="surface mx-auto max-w-3xl rounded-[2.5rem] p-6 sm:p-9"
          onSubmit={(event) => event.preventDefault()}
        >
          <div className="bg-orange-light/10 text-muted mb-7 flex gap-3 rounded-2xl p-4 text-sm leading-6">
            <ShieldCheck className="text-orange-deep mt-0.5 shrink-0" size={20} />

            <p>
              Évitez de publier des numéros de téléphone, adresses, informations bancaires ou toute
              donnée personnelle que vous ne souhaitez pas rendre publique.
            </p>
          </div>

          <div className="grid gap-6">
            <Field label="Titre du sujet">
              <Input placeholder="Ex. Priez pour mon entretien d’embauche" />
            </Field>

            <Field label="Description">
              <Textarea placeholder="Expliquez simplement votre besoin..." />
            </Field>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Catégorie">
                <Select>
                  <option>Direction divine</option>

                  <option>Famille</option>

                  <option>Travail</option>

                  <option>Études</option>

                  <option>Vie spirituelle</option>

                  <option>Autre</option>
                </Select>
              </Field>

              <Field label="Visibilité">
                <Select>
                  <option>Public avec mon nom</option>

                  <option>Public anonymement</option>

                  <option>Intercesseurs uniquement</option>
                </Select>
              </Field>
            </div>

            <Button type="submit" size="lg" className="sm:justify-self-start">
              Confier ce sujet
            </Button>
          </div>
        </form>
      </Container>
    </>
  );
}
