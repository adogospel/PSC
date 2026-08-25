import {
  forwardRef,
  type InputHTMLAttributes,
  type ReactNode,
  type SelectHTMLAttributes,
  type TextareaHTMLAttributes,
} from "react";

import { cn } from "@/lib/utils";

const base = [
  "w-full",
  "rounded-2xl",
  "border",
  "border-line",
  "bg-white",
  "px-4",
  "text-sm",
  "text-ink",
  "shadow-[0_5px_20px_rgba(103,58,34,0.04)]",
  "outline-none",
  "transition",
  "placeholder:text-muted/65",
  "focus:border-orange-deep/45",
  "focus:ring-4",
  "focus:ring-orange-light/10",
].join(" ");

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  (
    {
      className,

      ...props
    },

    ref,
  ) => <input ref={ref} className={cn(base, "h-12", className)} {...props} />,
);

Input.displayName = "Input";

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  TextareaHTMLAttributes<HTMLTextAreaElement>
>(
  (
    {
      className,

      ...props
    },

    ref,
  ) => (
    <textarea ref={ref} className={cn(base, "min-h-36 resize-y py-3.5", className)} {...props} />
  ),
);

Textarea.displayName = "Textarea";

export const Select = forwardRef<HTMLSelectElement, SelectHTMLAttributes<HTMLSelectElement>>(
  (
    {
      className,

      ...props
    },

    ref,
  ) => <select ref={ref} className={cn(base, "h-12", className)} {...props} />,
);

Select.displayName = "Select";

type FieldProps = {
  label: string;

  hint?: string;

  error?: string;

  children: ReactNode;
};

export function Field({
  label,

  hint,

  error,

  children,
}: FieldProps) {
  return (
    <label className="block">
      <span className="text-ink mb-2 block text-sm font-semibold">{label}</span>

      {children}

      {error ? (
        <span className="text-red-warm mt-2 block text-xs font-medium">{error}</span>
      ) : hint ? (
        <span className="text-muted mt-2 block text-xs leading-5">{hint}</span>
      ) : null}
    </label>
  );
}
