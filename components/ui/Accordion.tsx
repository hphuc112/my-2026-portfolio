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
    <div className="border-taupe rounded-2xl border bg-white/80 px-4 py-3 shadow-sm">
      <button
        type="button"
        className="flex w-full items-center justify-between text-left"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="font-medium text-stone-800">{item.question}</span>
        <span className="text-stone-500">{open ? "−" : "+"}</span>
      </button>
      {open ? (
        <p className="mt-3 text-sm leading-7 text-stone-600">{item.answer}</p>
      ) : null}
    </div>
  );
}
