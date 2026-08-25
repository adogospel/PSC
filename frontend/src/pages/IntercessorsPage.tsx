import { HandHeart, ShieldCheck, Sparkles } from "lucide-react";

import PageHero from "@/components/common/PageHero";

import Container from "@/components/common/Container";

import Button from "@/components/ui/Button";

export default function IntercessorsPage() {
  const items = [
    {
      icon: ShieldCheck,

      title: "Vérifiés",

      text: "Chaque candidature est examinée avant l’attribution du statut.",
    },

    {
      icon: HandHeart,

      title: "Engagés",

      text: "Ils peuvent porter un sujet dans la prière au-delà d’un Amen ponctuel.",
    },

    {
      icon: Sparkles,

      title: "Accompagnement",

      text: "Ils suivent les mises à jour et soutiennent particulièrement les sujets peu visibles.",
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Intercéder"
        title="Un réseau d’intercesseurs vérifiés"
        description="Des croyants engagés qui choisissent de porter certains sujets dans la durée, sous une charte claire et une validation de l’administration."
      />

      <Container className="py-14">
        <div className="grid gap-5 md:grid-cols-3">
          {items.map((item) => (
            <div key={item.title} className="surface rounded-4xl p-7">
              <div className="bg-orange-light/10 text-orange-deep grid size-12 place-items-center rounded-2xl">
                <item.icon />
              </div>

              <h2 className="mt-6 font-serif text-3xl font-semibold">{item.title}</h2>

              <p className="text-muted mt-3 text-sm leading-7">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="bg-ink mt-8 rounded-[2.5rem] p-8 text-white sm:p-10">
          <h2 className="font-serif text-4xl font-semibold">Vous ressentez cet appel ?</h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/65">
            Le processus de candidature et de validation sera rendu opérationnel pendant la Phase 4.
          </p>

          <Button className="mt-6">Devenir intercesseur</Button>
        </div>
      </Container>
    </>
  );
}
