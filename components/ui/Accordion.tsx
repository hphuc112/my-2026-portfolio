"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

interface AccordionProps {
  item: {
    question: string;
    answer: string;
  };
}

export function Accordion({ item }: AccordionProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-border bg-background/80 hover:border-success/60 rounded-2xl border px-4 py-3 shadow-sm transition-colors">
      <button
        type="button"
        className="group flex w-full cursor-pointer items-center justify-between text-left"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="text-foreground/70 group-hover:text-foreground text-2xl font-medium transition-colors">
          {item.question}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="text-foreground/60 group-hover:text-foreground ml-1.5 inline-block"
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
          >
            <p className="text-foreground/70 pt-3 text-sm leading-7">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
