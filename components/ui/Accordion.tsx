"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useLenis } from "@/components/providers/SmoothScroll";

interface AccordionProps {
  item: { question: string; answer: string };
}

export function Accordion({ item }: AccordionProps) {
  const lenisRef = useLenis();
  const [open, setOpen] = useState(false);

  const styles = {
    card: open
      ? "bg-accent border-border/60"
      : "bg-background/80 border-border hover:border-success/60",
    question: open
      ? "text-foreground"
      : "text-foreground/70 group-hover:text-foreground",
    icon: open
      ? "text-foreground"
      : "text-foreground/60 group-hover:text-foreground",
    answer: open ? "text-foreground/80" : "text-foreground/70",
  };

  return (
    <div
      className={`rounded-2xl border px-4 py-3 shadow-sm transition-colors duration-200 ${styles.card}`}
    >
      <button
        type="button"
        className="group flex w-full cursor-pointer items-center justify-between text-left"
        onClick={() => setOpen((v) => !v)}
      >
        <span
          className={`text-2xl font-medium transition-colors ${styles.question}`}
        >
          {item.question}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className={`ml-1.5 inline-block text-xl transition-colors ${styles.icon}`}
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
            onAnimationComplete={() => lenisRef?.current?.resize()}
          >
            <p
              className={`pt-3 text-sm leading-7 transition-colors ${styles.answer}`}
            >
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
