import type { Variants } from "motion/react";

export const viewportOnce = { once: true, margin: "-80px" } as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const fadeUpReduced: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const staggerContainerReduced: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

export function getFadeUpVariants(reducedMotion: boolean | null) {
  return reducedMotion ? fadeUpReduced : fadeUp;
}

export function getStaggerContainerVariants(reducedMotion: boolean | null) {
  return reducedMotion ? staggerContainerReduced : staggerContainer;
}
