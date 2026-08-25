import { useRef } from "react";

import { ArrowRight, BookOpen, HandHeart, HeartHandshake, Sparkles } from "lucide-react";

import Container from "@/components/common/Container";

import Section from "@/components/common/Section";

import Button, { ButtonLink } from "@/components/ui/Button";

import { Carousel } from "@/components/ui/Navigation";

import {
  EbookCard,
  PrayerCard,
  SermonCard,
  StatCard,
  TestimonyCard,
} from "@/components/cards/ContentCards";

import { ebooks, prayers, sermons, stats, testimonies } from "@/data/mockData";

import { useGsapReveal } from "@/hooks/useGsapReveal";

export default function HomePage() {
  const rootRef = useRef<HTMLElement | null>(null);

  useGsapReveal(rootRef);

  return (
    <main ref={rootRef}>
      <section className="relative overflow-hidden py-16 sm:py-24 lg:py-28">
        <div className="halo top-12 -left-36" />

        <div className="halo -top-20 -right-28" />

        <Container className="relative grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <div
              data-reveal
              className="border-orange-light/25 text-orange-deep mb-6 inline-flex items-center gap-2 rounded-full border bg-white/70 px-4 py-2 text-xs font-bold tracking-[0.16em] uppercase"
            >
              <Sparkles size={15} />
              Paix · Espérance · Communion · Présence
            </div>

            <h1
              data-reveal
              className="text-ink max-w-4xl font-serif text-6xl leading-[0.96] font-semibold tracking-[-0.055em] sm:text-7xl lg:text-[5.8rem]"
            >
              Unis dans la prière.
              <br />
              <span className="text-gradient">Portés par la foi.</span>
            </h1>

            <p data-reveal className="text-muted mt-7 max-w-2xl text-lg leading-8">
              Confiez votre sujet de prière et rejoignez une communauté qui s’engage à prier les uns
              pour les autres avec bienveillance, confidentialité et espérance.
            </p>

            <div data-reveal className="mt-8 flex flex-wrap gap-3">
              <ButtonLink to="/publier" size="lg">
                Confier un sujet
                <ArrowRight size={17} />
              </ButtonLink>

              <ButtonLink to="/prieres" variant="secondary" size="lg">
                <HandHeart size={18} />
                Prier maintenant
              </ButtonLink>
            </div>
          </div>

          <div data-reveal className="relative">
            <div className="surface shadow-float relative mx-auto max-w-lg rounded-[2.5rem] p-5">
              <div className="from-orange-light/14 to-peach/25 rounded-[2rem] bg-gradient-to-br via-white p-6 sm:p-8">
                <div className="psc-gradient grid size-14 place-items-center rounded-2xl text-white">
                  <HeartHandshake size={28} />
                </div>

                <p className="text-orange-deep mt-8 text-sm font-bold tracking-[0.17em] uppercase">
                  Quelqu’un a besoin de votre prière
                </p>

                <h2 className="mt-3 font-serif text-3xl font-semibold tracking-[-0.04em]">
                  Besoin de paix avant une décision importante
                </h2>

                <p className="text-muted mt-4 text-sm leading-7">
                  “Je ne veux pas être guidé par la peur. Priez afin que je puisse discerner avec
                  paix.”
                </p>

                <div className="mt-6 rounded-2xl bg-white px-4 py-3 text-sm font-semibold">
                  🙏 9 personnes ont déjà prié
                </div>

                <Button className="mt-5 w-full">
                  <HandHeart size={17} />
                  Je prie pour cette personne
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-line/70 border-y bg-white/45 py-8">
        <Container>
          <div className="grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </Container>
      </section>

      <Section
        eyebrow="Mur de prière"
        title="Des personnes à porter aujourd’hui"
        description="Nous mettons aussi en avant les sujets qui ont encore reçu peu de soutien."
        action={
          <ButtonLink to="/prieres" variant="secondary">
            Voir le mur
            <ArrowRight size={16} />
          </ButtonLink>
        }
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {prayers.slice(0, 3).map((prayer) => (
            <PrayerCard key={prayer.id} prayer={prayer} />
          ))}
        </div>
      </Section>

      <Section
        className="bg-white/50"
        eyebrow="Comment cela fonctionne ?"
        title="Un chemin simple, profondément humain"
      >
        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              number: "01",

              title: "Confiez",

              text: "Partagez votre besoin avec le niveau de confidentialité qui vous convient.",
            },

            {
              number: "02",

              title: "La communauté prie",

              text: "Des croyants et des intercesseurs vous accompagnent concrètement.",
            },

            {
              number: "03",

              title: "Témoignez",

              text: "Lorsque Dieu répond, partagez si vous le souhaitez ce qu’il a accompli.",
            },
          ].map((item) => (
            <div
              key={item.number}
              data-reveal
              className="border-line bg-ivory rounded-4xl border p-7"
            >
              <span className="text-orange-deep/40 font-serif text-4xl font-semibold">
                {item.number}
              </span>

              <h3 className="mt-8 font-serif text-3xl font-semibold">{item.title}</h3>

              <p className="text-muted mt-3 text-sm leading-7">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Intercession"
        title="Plus qu’un badge : un véritable engagement"
        description="Des intercesseurs vérifiés peuvent porter des sujets dans la durée et prendre des nouvelles de leur évolution."
      >
        <div data-reveal className="bg-ink overflow-hidden rounded-[2.5rem] p-7 text-white sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="text-peach grid size-14 place-items-center rounded-2xl bg-white/10">
                <HandHeart size={28} />
              </div>

              <h3 className="mt-6 max-w-2xl font-serif text-4xl font-semibold">
                « Je porte ce sujet dans la prière »
              </h3>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/65">
                Un engagement distinct d’un Amen ponctuel, pensé pour créer un accompagnement
                spirituel réel.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <ButtonLink to="/intercesseurs" variant="secondary">
                Découvrir les intercesseurs
              </ButtonLink>

              <Button>Devenir intercesseur</Button>
            </div>
          </div>
        </div>
      </Section>

      <Section
        className="bg-white/50"
        eyebrow="Ils témoignent"
        title="Des réponses qui encouragent la communauté"
      >
        <Carousel>
          {testimonies.map((item) => (
            <TestimonyCard key={`${item.name}-${item.text}`} {...item} />
          ))}
        </Carousel>
      </Section>

      <Section eyebrow="Grandir" title="Des ressources pour nourrir votre foi">
        <div className="grid gap-5 md:grid-cols-3">
          {ebooks.map((ebook) => (
            <EbookCard key={ebook.title} {...ebook} />
          ))}
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {sermons.map((sermon) => (
            <SermonCard key={sermon.title} {...sermon} />
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <div data-reveal className="psc-gradient rounded-[2.5rem] p-[1px]">
          <div className="bg-ivory rounded-[calc(2.5rem-1px)] p-8 sm:p-12">
            <BookOpen className="text-orange-deep" />

            <h2 className="mt-5 max-w-3xl font-serif text-4xl font-semibold sm:text-5xl">
              Un espace de prière, pas un réseau social de plus.
            </h2>

            <p className="text-muted mt-4 max-w-2xl text-base leading-8">
              La technologie reste discrète. L’essentiel demeure la paix, l’écoute, la
              confidentialité et la communion.
            </p>
          </div>
        </div>
      </Section>
    </main>
  );
}
