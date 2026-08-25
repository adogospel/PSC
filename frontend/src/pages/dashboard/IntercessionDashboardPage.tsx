import { HandHeart, ShieldCheck } from "lucide-react";

export default function IntercessionDashboardPage() {
  return (
    <>
      <p className="text-orange-deep text-sm font-bold tracking-[0.18em] uppercase">Intercession</p>

      <h1 className="mt-3 font-serif text-5xl font-semibold">Aujourd’hui</h1>

      <p className="text-muted mt-2">12 sujets vous sont proposés aujourd’hui.</p>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <div className="surface rounded-4xl p-7">
          <HandHeart className="text-orange-deep" />

          <h2 className="mt-6 font-serif text-3xl font-semibold">Besoin d’attention</h2>

          <p className="text-muted mt-3 text-sm leading-7">
            Sujets ayant encore reçu peu de prières. Le feed intelligent sera développé en Phase 4.
          </p>
        </div>

        <div className="surface rounded-4xl p-7">
          <ShieldCheck className="text-orange-deep" />

          <h2 className="mt-6 font-serif text-3xl font-semibold">Mes engagements</h2>

          <p className="text-muted mt-3 text-sm leading-7">
            Retrouvez les sujets que vous avez choisi de porter dans la durée.
          </p>
        </div>
      </div>
    </>
  );
}
