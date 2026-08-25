import {
  forwardRef,
  type ButtonHTMLAttributes,
} from "react";

import {
  Link,
  type LinkProps,
} from "react-router";

import {
  cva,
  type VariantProps,
} from "class-variance-authority";

import {
  cn,
} from "@/lib/utils";

export const buttonVariants =
  cva(
    [
      "inline-flex",
      "min-h-11",
      "items-center",
      "justify-center",
      "gap-2",
      "rounded-full",
      "px-5",
      "text-sm",
      "font-semibold",
      "transition",
      "duration-200",
      "disabled:pointer-events-none",
      "disabled:opacity-50",
    ],

    {
      variants: {
        variant: {
          primary:
            "psc-gradient text-white shadow-[0_12px_30px_rgba(226,95,45,0.22)] hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(226,95,45,0.28)]",

          secondary:
            "border border-line bg-white text-ink shadow-soft hover:border-orange-light/45",

          ghost:
            "text-ink hover:bg-orange-light/10 hover:text-orange-deep",

          dark:
            "bg-ink text-white hover:bg-ink/90",
        },

        size: {
          sm:
            "min-h-9 px-4 text-xs",

          md:
            "min-h-11 px-5",

          lg:
            "min-h-12 px-6 text-base",
        },
      },

      defaultVariants: {
        variant: "primary",

        size: "md",
      },
    },
  );

type ButtonProps =
  ButtonHTMLAttributes<HTMLButtonElement> &
    VariantProps<
      typeof buttonVariants
    >;

const Button = forwardRef<
  HTMLButtonElement,
  ButtonProps
>(
  (
    {
      className,

      variant,

      size,

      ...props
    },

    ref,
  ) => (
    <button
      ref={ref}
      className={cn(
        buttonVariants({
          variant,
          size,
        }),

        className,
      )}
      {...props}
    />
  ),
);

Button.displayName = "Button";

export default Button;

type ButtonLinkProps =
  LinkProps &
    VariantProps<
      typeof buttonVariants
    >;

export function ButtonLink({
  className,

  variant,

  size,

  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={cn(
        buttonVariants({
          variant,
          size,
        }),

        className,
      )}
      {...props}
    />
  );
}