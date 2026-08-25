import type {
  HTMLAttributes,
  ReactNode,
} from "react";

import Container from "@/components/common/Container";

import {
  cn,
} from "@/lib/utils";

type SectionProps =
  HTMLAttributes<HTMLElement> & {
    eyebrow?: string;

    title?: string;

    description?: string;

    action?: ReactNode;
  };

export default function Section({
  eyebrow,

  title,

  description,

  action,

  children,

  className,

  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "py-16 sm:py-20 lg:py-24",

        className,
      )}
      {...props}
    >
      <Container>
        {(eyebrow ||
          title ||
          description ||
          action) && (
          <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div
              className="max-w-2xl"
              data-reveal
            >
              {eyebrow && (
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-orange-deep">
                  {eyebrow}
                </p>
              )}

              {title && (
                <h2 className="font-serif text-4xl font-semibold tracking-[-0.04em] text-ink sm:text-5xl">
                  {title}
                </h2>
              )}

              {description && (
                <p className="mt-4 text-base leading-8 text-muted sm:text-lg">
                  {description}
                </p>
              )}
            </div>

            {action && (
              <div data-reveal>
                {action}
              </div>
            )}
          </div>
        )}

        {children}
      </Container>
    </section>
  );
}