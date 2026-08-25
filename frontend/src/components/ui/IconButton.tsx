import type { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export default function IconButton({
  className,

  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "border-line text-ink hover:border-orange-light/50 hover:text-orange-deep inline-grid size-11 place-items-center rounded-full border bg-white transition",

        className,
      )}
      {...props}
    />
  );
}
