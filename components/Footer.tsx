import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 md:mt-32 border-t border-bordeaux/10 bg-cream">
      <div className="mx-auto max-w-7xl px-6 py-10 md:py-14 grid gap-8 md:gap-10 sm:grid-cols-2 md:grid-cols-3">
        <div>
          <div className="font-display text-2xl text-bordeaux-ink tracking-tightest">Petri‑Hof</div>
          <p className="mt-3 text-sm text-bordeaux-ink/70">Hotel · Restaurant · Events</p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-bordeaux-ink/80">
          <Link href="/">Hauptseite</Link>
          <Link href="/services">Services</Link>
          <Link href="/jobs">Jobs</Link>
          <Link href="/jetzt-buchen">Jetzt Buchen</Link>
        </div>
        <div className="flex flex-col gap-2 text-sm text-bordeaux-ink/80">
          <Link href="/impressum">Impressum</Link>
          <Link href="/datenschutz">Datenschutz</Link>
          <Link href="/kontakt">Kontakt</Link>
        </div>
      </div>
      <div className="border-t border-bordeaux/10">
        <div className="mx-auto max-w-7xl px-6 py-6 text-xs text-bordeaux-ink/60">
          © 2026 Petri‑Hof — All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
