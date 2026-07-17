"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  fadeUp,
  fadeUpReduced,
  getFadeUpVariants,
  getStaggerContainerVariants,
  staggerContainer,
  staggerContainerReduced,
  viewportOnce,
} from "@/lib/motion";

interface RevealProps {
  children: ReactNode;
  className?: string;
}

export function Reveal({ children, className }: RevealProps) {
  const reducedMotion = useReducedMotion();
  const variants = getFadeUpVariants(reducedMotion);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerGroupProps {
  children: ReactNode;
  className?: string;
}

export function StaggerGroup({ children, className }: StaggerGroupProps) {
  const reducedMotion = useReducedMotion();
  const variants = getStaggerContainerVariants(reducedMotion);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

export function StaggerItem({ children, className }: StaggerItemProps) {
  const reducedMotion = useReducedMotion();
  const variants = reducedMotion ? fadeUpReduced : fadeUp;

  return (
    <motion.div variants={variants} className={className}>
      {children}
    </motion.div>
  );
}

export { fadeUp, fadeUpReduced, staggerContainer, staggerContainerReduced, viewportOnce };
