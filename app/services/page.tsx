import Image from "next/image";
import Reveal from "@/components/Reveal";

const services = [
  { title: "Hotel & Übernachtung", text: "Ob Geschäftsreise oder Kurzurlaub, der Petri-Hof ist Ihr ideales Zuhause im südlichen Saarland.", img: "exterior-wide.jpg" },
  { title: "Restaurant", text: "Genießen Sie das gute Gefühl, einfach einmal Gast zu sein und umsorgt zu werden.", img: "restaurant-innen.jpg" },
  { title: "Events & Feierlichkeiten", text: "Glanzvolle Hochzeit, festliche Kommunion, fröhlicher Geburtstag, Jubilarehrung, exklusive Party, Weihnachtsfeier … oder … oder … oder — was immer Sie feiern möchten", img: "festsaal-elegant.jpg" },
  { title: "Hochzeiten", text: "mit Erfahrung und Freude gestalten wir mit Ihnen Ihren großen Tag und kümmern uns darum, dass Sie und Ihre Gäste eine wunderschöne Hochzeitsfeier erleben.", img: "festsaal-hochzeit.jpg" },
  { title: "Trauerfeiern", text: "Wer im Gedächtnis seiner Lieben lebt,\nder ist nicht tot, der ist nur fern;\ntot ist nur, wer vergessen wird.\n— Immanuel Kant", img: "restaurant-advent.jpg" },
  { title: "Öffnungszeiten", text: "Die Öffnungszeiten können je nach Wochentag, Feiertag oder Saison variieren.", img: "restaurant-bar.jpg" },
];

export default function Services() {
  return (
    <>
      <section className="pt-40 pb-20 px-6 text-center">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-bordeaux/70 mb-5">Wir für Sie</p>
          <h1 className="font-display text-[clamp(44px,8vw,96px)] leading-[1.02] tracking-tightest text-bordeaux-ink">
            Services
          </h1>
        </Reveal>
      </section>

      <section className="pb-32 px-6">
        <div className="max-w-6xl mx-auto space-y-24">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={60}>
              <article className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}>
                <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
                  <Image src={`/images/${s.img}`} alt={s.title} fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
                </div>
                <div className="space-y-5 md:px-6">
                  <h2 className="font-display text-[clamp(30px,4.5vw,52px)] tracking-tightest text-bordeaux-ink leading-[1.08]">{s.title}</h2>
                  <p className="text-[16px] md:text-[18px] leading-relaxed text-bordeaux-ink/80 whitespace-pre-line">{s.text}</p>
                  <a href="tel:+4968347829820" className="inline-block mt-3 text-[14px] text-bordeaux hover:text-bordeaux-deep transition-colors">
                    Jetzt Anrufen →
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
