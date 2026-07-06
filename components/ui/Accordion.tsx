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
    <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
      <button
        type="button"
        className="flex w-full items-center justify-between text-left"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="font-medium text-slate-900">{item.question}</span>
        <span className="text-slate-500">{open ? "−" : "+"}</span>
      </button>
      {open ? (
        <p className="mt-3 text-sm leading-7 text-slate-600">{item.answer}</p>
      ) : null}
    </div>
  );
}
