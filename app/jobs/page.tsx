import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function Jobs() {
  return (
    <>
      <section className="pt-40 pb-20 px-6 text-center">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-bordeaux/70 mb-5">Jobs</p>
          <h1 className="font-display text-[clamp(44px,8vw,96px)] leading-[1.02] tracking-tightest text-bordeaux-ink">
            Werden Sie Teil<br />unseres Teams.
          </h1>
        </Reveal>
      </section>

      <section className="pb-32 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5]">
              <Image src="/images/restaurant-innen.jpg" alt="Petri-Hof Team" fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="space-y-6">
              <p className="text-[17px] md:text-[19px] leading-relaxed text-bordeaux-ink/85">
                Sehr persönlich, sehr liebenswert, mit viel Atmosphäre und einem heiteren Lachen.
              </p>
              <p className="text-[17px] md:text-[19px] leading-relaxed text-bordeaux-ink/85">
                Wir wünschen Ihnen eine gemütliche Zeit!
              </p>
              <p className="font-display text-[20px] text-bordeaux tracking-tightest leading-relaxed pt-2">
                Ihre Familie Ralf Schneider & Oraphin Chaibun,<br />
                sowie Serviceleiter Ingo Preußmann<br />
                und das Team vom Petri-Hof
              </p>
              <a href="tel:+4968347829820" className="inline-block mt-4 px-7 py-3.5 rounded-full bg-bordeaux text-cream text-[14px] tracking-wide hover:bg-bordeaux-deep transition-all">
                Jetzt Anrufen
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
