import { Bell, Bookmark, HandHeart, MessageCircle } from "lucide-react";

export default function UserDashboardPage() {
  const items = [
    {
      icon: HandHeart,

      value: "3",

      label: "Mes sujets actifs",
    },

    {
      icon: MessageCircle,

      value: "48",

      label: "Personnes ayant prié",
    },

    {
      icon: Bookmark,

      value: "7",

      label: "Sujets suivis",
    },

    {
      icon: Bell,

      value: "5",

      label: "Notifications",
    },
  ];

  return (
    <>
      <p className="text-orange-deep text-sm font-bold tracking-[0.18em] uppercase">
        Espace utilisateur
      </p>

      <h1 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">Bonjour 👋</h1>

      <p className="text-muted mt-2">Que la paix soit avec vous aujourd’hui.</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {items.map((item) => (
          <div key={item.label} className="surface rounded-3xl p-6">
            <item.icon className="text-orange-deep" />

            <strong className="mt-5 block font-serif text-4xl">{item.value}</strong>

            <p className="text-muted mt-1 text-sm">{item.label}</p>
          </div>
        ))}
      </div>

      <div className="surface mt-6 rounded-4xl p-7">
        <h2 className="font-serif text-3xl font-semibold">Aperçu Phase 1</h2>

        <p className="text-muted mt-3 max-w-2xl text-sm leading-7">
          Les vraies données, l’historique, les sujets suivis et les notifications seront connectés
          au backend dans les phases suivantes.
        </p>
      </div>
    </>
  );
}
