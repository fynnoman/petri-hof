"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Hauptseite" },
  { href: "/services", label: "Services" },
  { href: "/jobs", label: "Jobs" },
  { href: "/jetzt-buchen", label: "Jetzt Buchen" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-xl bg-cream/80 border-b border-bordeaux/10" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-display text-[19px] tracking-tightest text-bordeaux-ink">
          Petri‑Hof
        </Link>
        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[13px] tracking-wide text-bordeaux-ink/80 hover:text-bordeaux transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <button
          aria-label="Menü"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5"
        >
          <span className={`w-5 h-px bg-bordeaux-ink transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`} />
          <span className={`w-5 h-px bg-bordeaux-ink transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-cream/95 backdrop-blur-xl border-b border-bordeaux/10">
          <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col gap-5">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base text-bordeaux-ink"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
