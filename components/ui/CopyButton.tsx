"use client";

import { useState } from "react";

interface CopyButtonProps {
  value: string;
}

export function CopyButton({ value }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy value:", err);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? "Copied to clipboard" : "Copy email to clipboard"}
      title={copied ? "Copied!" : "Copy email to clipboard"}
      className="text-camel group relative ml-3 inline-flex cursor-pointer items-center transition-opacity hover:opacity-70"
    >
      {copied ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </svg>
      )}

      <span className="bg-foreground text-background pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 rounded-md px-2 py-1 text-xs whitespace-nowrap opacity-0 transition-opacity group-hover:opacity-100">
        {copied ? "Copied!" : "Copy email"}
      </span>
    </button>
  );
}
