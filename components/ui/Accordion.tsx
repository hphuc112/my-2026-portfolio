"use client";

import { useState } from "react";

interface AccordionProps {
  item: {
    question: string;
    answer: string;
  };
}

export function Accordion({ item }: AccordionProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-border bg-background/80 rounded-2xl border px-4 py-3 shadow-sm">
      <button
        type="button"
        className="flex w-full items-center justify-between text-left"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="text-foreground font-medium">{item.question}</span>
        <span className="text-foreground/60">{open ? "−" : "+"}</span>
      </button>
      {open ? (
        <p className="text-foreground/70 mt-3 text-sm leading-7">
          {item.answer}
        </p>
      ) : null}
    </div>
  );
}
