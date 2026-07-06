import Link from "next/link";

const navItems = [
  { label: "About", href: "#overview" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  return (
    <header className="border-taupe/80 bg-cream/90 sticky top-0 z-10 border-b backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <Link
          href="#top"
          className="text-lg font-semibold tracking-tight text-stone-800"
        >
          Phuc Tran
        </Link>
        <nav className="flex items-center gap-4 text-sm text-slate-600">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-stone-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
