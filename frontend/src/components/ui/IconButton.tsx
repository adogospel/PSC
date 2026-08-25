import type {
  ButtonHTMLAttributes,
} from "react";

import {
  cn,
} from "@/lib/utils";

export default function IconButton({
  className,

  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "inline-grid size-11 place-items-center rounded-full border border-line bg-white text-ink transition hover:border-orange-light/50 hover:text-orange-deep",

        className,
      )}
      {...props}
    />
  );
}