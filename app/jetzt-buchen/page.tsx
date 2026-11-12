import Reveal from "@/components/Reveal";

export default function JetztBuchen() {
  return (
    <section className="min-h-screen pt-32 md:pt-40 pb-20 md:pb-32 px-6 flex items-center">
      <div className="max-w-3xl mx-auto text-center">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.3em] text-bordeaux/70 mb-4 md:mb-5">Wir kümmern uns um Sie</p>
          <h1 className="font-display text-[clamp(44px,9vw,96px)] leading-[1.02] tracking-tightest text-bordeaux-ink">
            Jetzt Buchen
          </h1>
          <p className="mt-6 md:mt-8 text-[15px] md:text-[19px] text-bordeaux-ink/70 max-w-xl mx-auto leading-relaxed">
            Erhalten Sie noch heute eine Reservierung — rufen Sie uns einfach an, wir freuen uns auf Sie.
          </p>

          <a
            href="tel:+4968347829820"
            className="mt-10 md:mt-14 inline-flex items-center gap-3 px-9 md:px-10 py-4 md:py-5 rounded-full bg-bordeaux text-cream text-[15px] tracking-wide hover:bg-bordeaux-deep transition-all"
          >
            Jetzt Anrufen
          </a>

          <div className="mt-5 md:mt-6 font-display text-[24px] md:text-[32px] tracking-tightest text-bordeaux break-all">
            06834 7829820
          </div>
        </Reveal>
      </div>
    </section>
  );
}
