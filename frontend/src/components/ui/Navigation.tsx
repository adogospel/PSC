import type { ReactNode } from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";

import Button from "@/components/ui/Button";

import { cn } from "@/lib/utils";

type TabsProps = {
  items: {
    label: string;

    value: string;
  }[];

  value: string;

  onChange: (value: string) => void;
};

export function Tabs({
  items,

  value,

  onChange,
}: TabsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <button
          key={item.value}
          type="button"
          onClick={() => onChange(item.value)}
          className={cn(
            "rounded-full px-4 py-2 text-sm font-semibold transition",

            value === item.value
              ? "psc-gradient text-white"
              : "border-line text-muted hover:text-ink border bg-white/70",
          )}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}

export function Pagination({
  page = 1,

  totalPages = 4,
}: {
  page?: number;

  totalPages?: number;
}) {
  return (
    <nav aria-label="Pagination" className="flex items-center justify-center gap-2">
      <Button variant="secondary" size="sm" disabled={page <= 1}>
        <ChevronLeft size={16} />
        Précédent
      </Button>

      <span className="text-muted px-3 text-sm">
        {page} / {totalPages}
      </span>

      <Button variant="secondary" size="sm" disabled={page >= totalPages}>
        Suivant
        <ChevronRight size={16} />
      </Button>
    </nav>
  );
}

export function Carousel({ children }: { children: ReactNode }) {
  return (
    <div className="flex snap-x [scrollbar-width:none] gap-5 overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden">
      {children}
    </div>
  );
}
