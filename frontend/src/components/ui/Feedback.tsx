import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

export function Badge({
  className,

  children,
}: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "border-orange-light/25 bg-orange-light/10 text-orange-deep inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold",

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
          .map((part) => part[0])
          .join("")
          .slice(0, 2)
          .toUpperCase();

  return (
    <span
      aria-label={name}
      className={cn(
        "bg-beige-rose text-ink grid size-9 shrink-0 place-items-center rounded-full text-xs font-bold",

        className,
      )}
    >
      {initials}
    </span>
  );
}

export function Skeleton({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "bg-beige-rose/75 block animate-pulse rounded-2xl",

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
        <div className="bg-orange-light/10 text-orange-deep mx-auto mb-4 grid size-12 place-items-center rounded-2xl">
          {icon}
        </div>
      )}

      <h3 className="text-ink font-serif text-2xl font-semibold">{title}</h3>

      <p className="text-muted mx-auto mt-2 max-w-md text-sm leading-6">{description}</p>

      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}
