import type {
  HTMLAttributes,
  ReactNode,
} from "react";

import {
  cn,
} from "@/lib/utils";

export function Badge({
  className,

  children,
}: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-orange-light/25 bg-orange-light/10 px-3 py-1 text-xs font-semibold text-orange-deep",

        className,
      )}
    >
      {children}
    </span>
  );
}

export function Avatar({
  name,

  className,
}: {
  name: string;

  className?: string;
}) {
  const initials =
    name === "Anonyme"
      ? "A"
      : name
          .split(" ")
          .map(
            (part) =>
              part[0],
          )
          .join("")
          .slice(0, 2)
          .toUpperCase();

  return (
    <span
      aria-label={name}
      className={cn(
        "grid size-9 shrink-0 place-items-center rounded-full bg-beige-rose text-xs font-bold text-ink",

        className,
      )}
    >
      {initials}
    </span>
  );
}

export function Skeleton({
  className,
}: {
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "block animate-pulse rounded-2xl bg-beige-rose/75",

        className,
      )}
    />
  );
}

type EmptyStateProps = {
  icon?: ReactNode;

  title: string;

  description: string;

  action?: ReactNode;
};

export function EmptyState({
  icon,

  title,

  description,

  action,
}: EmptyStateProps) {
  return (
    <div className="surface rounded-4xl px-6 py-12 text-center">
      {icon && (
        <div className="mx-auto mb-4 grid size-12 place-items-center rounded-2xl bg-orange-light/10 text-orange-deep">
          {icon}
        </div>
      )}

      <h3 className="font-serif text-2xl font-semibold text-ink">
        {title}
      </h3>

      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-muted">
        {description}
      </p>

      {action && (
        <div className="mt-6">
          {action}
        </div>
      )}
    </div>
  );
}