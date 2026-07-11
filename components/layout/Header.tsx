"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Overview", href: "#overview" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    if (typeof window === "undefined") {
      return "dark";
    }

    const storedTheme = window.localStorage.getItem("theme");
    return storedTheme === "light" ? "light" : "dark";
  });

  const applyTheme = (nextTheme: "dark" | "light") => {
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    document.documentElement.style.colorScheme = nextTheme;
    window.localStorage.setItem("theme", nextTheme);
  };

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  const scrollToSection =
    (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      history.pushState(null, "", `#${id}`);
    };

  return (
    <header className="border-border/80 bg-background/90 fixed inset-x-0 top-0 z-20 h-15 border-b backdrop-blur">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-6 lg:px-8">
        <Link
          href="#top"
          onClick={scrollToSection("top")}
          className="text-foreground text-lg font-semibold tracking-tight"
        >
          phuctran
        </Link>
        <div className="flex items-center gap-3">
          <nav className="text-foreground/70 mr-2 flex items-center gap-5 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={scrollToSection(item.href.slice(1))}
                className="hover:text-foreground transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <button
            type="button"
            onClick={toggleTheme}
            className="border-border bg-secondary hover:bg-accent flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border p-2 transition"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/night-mode.png"
              alt={
                theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
              className="h-5 w-5 object-contain"
            />
          </button>
        </div>
      </div>
    </header>
  );
}
