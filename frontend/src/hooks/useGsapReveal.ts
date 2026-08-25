import type { RefObject } from "react";

import { gsap, useGSAP } from "@/lib/gsap";

export function useGsapReveal(scope: RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reducedMotion) {
        return;
      }

      const elements = gsap.utils.toArray<HTMLElement>("[data-reveal]");

      elements.forEach((element) => {
        gsap.fromTo(
          element,

          {
            y: 28,
            opacity: 0,
          },

          {
            y: 0,
            opacity: 1,

            duration: 0.8,

            ease: "power3.out",

            scrollTrigger: {
              trigger: element,

              start: "top 88%",

              once: true,
            },
          },
        );
      });
    },

    {
      scope,
    },
  );
}
