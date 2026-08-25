import { Bell, HandHeart, MessageCircle, Share2 } from "lucide-react";

import Container from "@/components/common/Container";

import Button from "@/components/ui/Button";

import { Avatar, Badge } from "@/components/ui/Feedback";

import { Textarea } from "@/components/ui/FormControls";

export default function PrayerDetailPage() {
  return (
    <Container className="py-12 sm:py-16">
      <div className="mx-auto max-w-4xl">
        <div className="surface rounded-[2.5rem] p-6 sm:p-9">
          <div className="flex flex-wrap gap-2">
            <Badge>Études</Badge>

            <Badge className="border-success/20 bg-success/10 text-success">Sujet actif</Badge>
          </div>

          <h1 className="mt-6 font-serif text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
            Besoin de direction pour mes études
          </h1>

          <div className="mt-6 flex items-center gap-3">
            <Avatar name="Adonaï" />

            <div>
              <p className="text-sm font-semibold">Adonaï</p>

              <p className="text-muted text-xs">Publié il y a 2 heures</p>
            </div>
          </div>

          <p className="text-muted mt-8 text-base leading-8">
            Je dois prendre une décision importante concernant la suite de mon parcours. J’aimerais
            que vous priiez afin que Dieu me dirige, m’accorde de la paix et m’aide à ne pas décider
            uniquement sous la pression.
          </p>

          <div className="bg-orange-light/10 mt-8 rounded-3xl p-5">
            <p className="font-semibold">🙏 238 personnes ont prié pour ce sujet</p>

            <div className="mt-4 flex flex-wrap gap-2">
              <Button>
                <HandHeart size={17} />
                Amen
              </Button>

              <Button variant="secondary">
                <Bell size={17} />
                Suivre
              </Button>

              <Button variant="ghost">
                <Share2 size={17} />
                Partager
              </Button>
            </div>
          </div>
        </div>

        <section className="mt-8">
          <h2 className="font-serif text-3xl font-semibold">Prières et encouragements</h2>

          <div className="surface mt-5 rounded-3xl p-5">
            <Textarea placeholder="Écrire une prière ou un message d’encouragement..." />

            <div className="mt-3 flex justify-end">
              <Button>
                <MessageCircle size={16} />
                Déposer ma prière
              </Button>
            </div>
          </div>

          <div className="mt-5 grid gap-4">
            {[
              {
                author: "Samuel",

                text: "Seigneur, accorde-lui ta paix et ouvre la bonne porte.",
              },

              {
                author: "Mireille",

                text: "Que Dieu te donne de discerner sans peur et avec sagesse.",
              },
            ].map((item) => (
              <article key={item.text} className="border-line rounded-3xl border bg-white/60 p-5">
                <div className="flex gap-3">
                  <Avatar name={item.author} />

                  <div>
                    <p className="text-sm font-bold">{item.author}</p>

                    <p className="text-muted mt-2 text-sm leading-7">{item.text}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </Container>
  );
}
