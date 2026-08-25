import { CheckCircle2 } from "lucide-react";

import PageHero from "@/components/common/PageHero";

import Container from "@/components/common/Container";

const rules = [
  "Respect et bienveillance",

  "Confidentialité et prudence avec les données personnelles",

  "Absence de jugement et de harcèlement",

  "Aucune publicité ni collecte d’argent dans les sujets",

  "Aucune usurpation d’identité",

  "Respect des personnes et de leurs situations",
];

export default function CharterPage() {
  return (
    <>
      <PageHero
        eyebrow="Charte communautaire"
        title="Protéger un espace de confiance"
        description="La prière suppose un cadre humain, respectueux et sûr pour les personnes qui se confient."
      />

      <Container className="py-14">
        <div className="surface mx-auto max-w-3xl rounded-4xl p-7 sm:p-9">
          <div className="grid gap-4">
            {rules.map((rule) => (
              <div key={rule} className="flex items-start gap-3 rounded-2xl bg-white/60 p-4">
                <CheckCircle2 className="text-success mt-0.5 shrink-0" size={20} />

                <p className="text-sm leading-6 font-medium">{rule}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}
