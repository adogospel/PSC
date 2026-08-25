import { BookOpen, Flag, HandHeart, ShieldCheck, Users } from "lucide-react";

export default function AdminDashboardPage() {
  const items = [
    {
      icon: Users,

      value: "1 248",

      label: "Utilisateurs",
    },

    {
      icon: HandHeart,

      value: "384",

      label: "Sujets publiés",
    },

    {
      icon: ShieldCheck,

      value: "27",

      label: "Intercesseurs",
    },

    {
      icon: Flag,

      value: "6",

      label: "Signalements",
    },

    {
      icon: BookOpen,

      value: "18",

      label: "Ressources",
    },
  ];

  return (
    <>
      <p className="text-orange-deep text-sm font-bold tracking-[0.18em] uppercase">
        Administration
      </p>

      <h1 className="mt-3 font-serif text-5xl font-semibold">Vue d’ensemble</h1>

      <p className="text-muted mt-2">
        Maquette du back-office. Les permissions et vraies données arrivent à partir de la Phase 2.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {items.map((item) => (
          <div key={item.label} className="surface rounded-3xl p-5">
            <item.icon className="text-orange-deep" size={20} />

            <strong className="mt-5 block font-serif text-3xl">{item.value}</strong>

            <p className="text-muted mt-1 text-xs">{item.label}</p>
          </div>
        ))}
      </div>
    </>
  );
}
