import { Bell, BookOpen, HandHeart, Home, LogOut, ShieldCheck, Users } from "lucide-react";

import { Link, Outlet } from "react-router";

import Logo from "@/components/common/Logo";

import { cn } from "@/lib/utils";

type Kind = "user" | "intercession" | "admin";

const content = {
  user: {
    label: "Espace personnel",

    items: [
      {
        label: "Tableau de bord",

        icon: Home,
      },

      {
        label: "Mes prières",

        icon: HandHeart,
      },

      {
        label: "Notifications",

        icon: Bell,
      },
    ],
  },

  intercession: {
    label: "Espace intercession",

    items: [
      {
        label: "Aujourd’hui",

        icon: Home,
      },

      {
        label: "Mes engagements",

        icon: HandHeart,
      },

      {
        label: "Sujets",

        icon: BookOpen,
      },
    ],
  },

  admin: {
    label: "Administration",

    items: [
      {
        label: "Tableau de bord",

        icon: Home,
      },

      {
        label: "Utilisateurs",

        icon: Users,
      },

      {
        label: "Intercesseurs",

        icon: ShieldCheck,
      },
    ],
  },
};

export default function DashboardLayout({ kind }: { kind: Kind }) {
  const current = content[kind];

  return (
    <div className="bg-ivory-soft min-h-screen lg:grid lg:grid-cols-[280px_1fr]">
      <aside className="border-line border-b bg-white/75 p-5 lg:min-h-screen lg:border-r lg:border-b-0">
        <Logo />

        <p className="text-orange-deep mt-8 text-xs font-bold tracking-[0.18em] uppercase">
          {current.label}
        </p>

        <nav className="mt-4 grid gap-2">
          {current.items.map((item, index) => (
            <button
              key={item.label}
              type="button"
              className={cn(
                "flex items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm font-semibold transition",

                index === 0
                  ? "bg-orange-light/10 text-orange-deep"
                  : "text-muted hover:text-ink hover:bg-white",
              )}
            >
              <item.icon size={18} />

              {item.label}
            </button>
          ))}
        </nav>

        <Link to="/" className="text-muted mt-8 flex items-center gap-2 text-sm font-semibold">
          <LogOut size={17} />
          Retour au site
        </Link>
      </aside>

      <main className="min-w-0 p-4 sm:p-7 lg:p-10">
        <Outlet />
      </main>
    </div>
  );
}
