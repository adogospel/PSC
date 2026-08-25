import {
  Link,
} from "react-router";

import {
  cn,
} from "@/lib/utils";

type LogoProps = {
  className?: string;

  compact?: boolean;
};

export default function Logo({
  className,

  compact = false,
}: LogoProps) {
  return (
    <Link
      to="/"
      aria-label="Prier sans cesse — Accueil"
      className={cn(
        "inline-flex items-center gap-3",

        className,
      )}
    >
      <span className="psc-gradient relative grid size-10 place-items-center rounded-2xl p-[1px] shadow-soft">
        <span className="grid size-full place-items-center rounded-[15px] bg-ivory text-orange-deep">
          <svg
            viewBox="0 0 48 48"
            className="size-7"
            aria-hidden="true"
          >
            <path
              d="M24 5v24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.7"
              strokeLinecap="round"
            />

            <path
              d="M16 14h16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.7"
              strokeLinecap="round"
            />

            <path
              d="M24 43c-8-5-12-11-10-17 1-4 4-6 7-8-1 5 1 8 3 10 2-4 6-7 10-9 2 10-2 18-10 24Z"
              fill="currentColor"
              opacity="0.18"
            />

            <path
              d="M24 42c-5-4-7-8-6-12 1-3 3-5 5-7 0 4 2 6 3 7 1-3 3-5 6-7 1 7-2 14-8 19Z"
              fill="currentColor"
              opacity="0.88"
            />
          </svg>
        </span>
      </span>

      {!compact && (
        <span className="leading-none">
          <span className="block font-serif text-[1.35rem] font-semibold tracking-[-0.03em] text-ink">
            Prier sans cesse
          </span>

          <span className="mt-1 block text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-muted">
            Paix · Espérance · Communion
          </span>
        </span>
      )}
    </Link>
  );
}