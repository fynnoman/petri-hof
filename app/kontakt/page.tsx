import Reveal from "@/components/Reveal";

export default function Kontakt() {
  return (
    <section className="min-h-screen pt-40 pb-32 px-6 flex items-center">
      <div className="max-w-3xl mx-auto text-center">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-bordeaux/70 mb-5">Kontakt</p>
          <h1 className="font-display text-[clamp(44px,7vw,80px)] leading-[1.02] tracking-tightest text-bordeaux-ink">
            Wir freuen uns<br />auf Ihren Anruf.
          </h1>
          <a
            href="tel:+4968347829820"
            className="mt-14 inline-flex items-center gap-3 px-10 py-5 rounded-full bg-bordeaux text-cream text-[15px] tracking-wide hover:bg-bordeaux-deep transition-all"
          >
            Jetzt Anrufen
          </a>
          <div className="mt-6 font-display text-[28px] md:text-[32px] tracking-tightest text-bordeaux">
            06834 7829820
          </div>
        </Reveal>
      </div>
    </section>
  );
}
