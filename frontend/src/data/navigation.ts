import {
  BookOpen,
  CircleUserRound,
  HandHeart,
  Home,
  MessageCircleHeart,
  PlayCircle,
  ShieldCheck,
} from "lucide-react";

import type { NavigationItem } from "@/types/navigation";

export const publicNavigation: NavigationItem[] = [
  {
    label: "Accueil",
    href: "/",
    icon: Home,
  },

  {
    label: "Prier",
    href: "/prieres",
    icon: HandHeart,
  },

  {
    label: "Intercesseurs",
    href: "/intercesseurs",
    icon: ShieldCheck,
  },

  {
    label: "Ebooks",
    href: "/ebooks",
    icon: BookOpen,
  },

  {
    label: "Prédications",
    href: "/predications",
    icon: PlayCircle,
  },

  {
    label: "Témoignages",
    href: "/temoignages",
    icon: MessageCircleHeart,
  },

  {
    label: "Contact",
    href: "/contact",
    icon: CircleUserRound,
  },
];
