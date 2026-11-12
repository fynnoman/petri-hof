import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

const gallery = [
  "restaurant-festtafel-1.jpg","terrasse-1.jpg","festsaal-hochzeit.jpg","terrasse-2.jpg",
  "buffet-lachs-ganz.jpg","restaurant-innen.jpg","festsaal-elegant.jpg","buffet-komplett.jpg",
  "restaurant-advent.jpg","terrasse-3.jpg","festsaal-hochzeit-detail.jpg","buffet-caprese.jpg",
  "festsaal-love.jpg","restaurant-geburtstag.jpg","terrasse-5.jpg","buffet-wurst.jpg",
  "festsaal-60.jpg","restaurant-thai.jpg","festsaal-weihnachten-2.jpg","buffet-antipasti.jpg","buffet-fisch.jpg",
];

const galleryB = [
  "buffet-roastbeef.jpg","festsaal-peach.jpg","terrasse-4.jpg","buffet-lachs-platte.jpg",
  "festsaal-love-2.jpg","buffet-wild.jpg","festsaal-hochzeit-3.jpg","buffet-putenbrust.jpg",
  "festsaal-weihnachtsfeier.jpg","buffet-oliven.jpg","restaurant-thai-2.jpg","buffet-lachs-haeppchen.jpg",
  "festsaal-geburtstag.jpg","buffet-caprese.jpg","festsaal-60-2.jpg","festsaal-elegant.jpg",
];

const services = [
  { title: "Hotel & Übernachtung", text: "Ob Geschäftsreise oder Kurzurlaub, der Petri-Hof ist Ihr ideales Zuhause im südlichen Saarland.", img: "exterior-wide.jpg" },
  { title: "Restaurant", text: "Genießen Sie das gute Gefühl, einfach einmal Gast zu sein und umsorgt zu werden.", img: "restaurant-innen.jpg" },
  { title: "Events & Feierlichkeiten", text: "Glanzvolle Hochzeit, festliche Kommunion, fröhlicher Geburtstag, Jubilarehrung, exklusive Party, Weihnachtsfeier … oder … oder … oder — was immer Sie feiern möchten", img: "festsaal-elegant.jpg" },
  { title: "Hochzeiten", text: "mit Erfahrung und Freude gestalten wir mit Ihnen Ihren großen Tag und kümmern uns darum, dass Sie und Ihre Gäste eine wunderschöne Hochzeitsfeier erleben.", img: "festsaal-hochzeit.jpg" },
  { title: "Trauerfeiern", text: "Wer im Gedächtnis seiner Lieben lebt,\nder ist nicht tot, der ist nur fern;\ntot ist nur, wer vergessen wird.\n— Immanuel Kant", img: "restaurant-advent.jpg" },
  { title: "Öffnungszeiten", text: "Die Öffnungszeiten können je nach Wochentag, Feiertag oder Saison variieren.", img: "restaurant-bar.jpg" },
];

const news = [
  { date: "31.10.", title: "Halloween Party", text: "🎃 HALLOWEEN PARTY IM PETRI-HOF 🎃 Die Nacht des Grauens wird zur Nacht der Party! 👻🔥 Am 31. Oktober…", img: "silvester-flyer.jpg" },
  { date: "31.12.", title: "Silvesterparty mit DJ Andy und großem Silvesterbuffet ab 20.00 Uhr", text: "✨🥂 SILVESTER 2026 – DIE NACHT DES JAHRES! 🥂✨ Das Jahr neigt sich dem Ende zu – und wir machen…", img: "silvester-flyer.jpg" },
  { date: "25.+26.12.", title: "Weihnachtsbuffet 12.00-15.00 Uhr Abends geschlossen", text: "Wisst Ihr denn schon wohin an den Festtagen? Dieses Jahr haben wir am 1. und am 2. …", img: "weihnachtsbuffet-flyer-1.jpg" },
  { date: "28.11.", title: "New Wave Party mit DJ Andy", text: "🎸🖤 NEW-WAVE PARTY im Petri-Hof! 🖤🎸 Am Samstag, 28. November 2026 wird der Petri-Hof in Bous zur…", img: "newwave-flyer.jpg" },
];

const faqs = [
  { q: "Kann ich per Anruf reservieren?", a: "Ja, das ist möglich. Im Kontaktformular erfahren Sie mehr zu den Öffnungszeiten und die Anruf-Möglichkeit." },
  { q: "Wie kurzfristig kann eine Reservierung erfolgen?", a: "" },
  { q: "Was sind eure Öffnungszeiten?", a: "" },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cream">
        <div className="absolute inset-0">
          <Image src="/images/exterior-wide.jpg" alt="Petri-Hof" fill priority className="object-cover opacity-[0.55]" />
          <div className="absolute inset-0 bg-gradient-to-b from-cream/70 via-cream/40 to-cream" />
        </div>
        <div className="relative z-10 text-center px-5 max-w-5xl mx-auto fade-in pt-24 pb-20 md:py-0">
          <Image src="/images/logo.jpg" alt="Petri-Hof" width={160} height={160} className="mx-auto mb-7 md:mb-10 w-28 h-28 md:w-40 md:h-40 rounded-2xl" />
          <h1 className="font-display text-[clamp(38px,9vw,120px)] leading-[0.96] tracking-tightest text-bordeaux-ink">
            Im Petri-Hof<br />
            ist <span className="italic text-bordeaux">einiges</span> anders.
          </h1>
          <p className="mt-6 md:mt-8 text-[15px] md:text-[19px] text-bordeaux-ink/70 max-w-2xl mx-auto leading-relaxed">
            Genießen Sie das gute Gefühl, einfach einmal Gast zu sein und umsorgt zu werden.
          </p>
          <p className="mt-4 md:mt-5 text-[13px] md:text-[17px] text-bordeaux-ink/60 max-w-2xl mx-auto leading-relaxed">
            Sehr persönlich, sehr liebenswert, mit viel Atmosphäre und einem heiteren Lachen.
          </p>
          <div className="mt-9 md:mt-12 flex flex-col sm:flex-row sm:flex-wrap justify-center gap-3 md:gap-4 px-2">
            <a href="/speisekarte.pdf" target="_blank" rel="noopener" className="px-7 py-4 md:py-3.5 rounded-full bg-bordeaux text-cream text-[14px] tracking-wide hover:bg-bordeaux-deep transition-all text-center">
              Speisekarte ansehen
            </a>
            <a href="tel:+4968347829820" className="px-7 py-4 md:py-3.5 rounded-full border border-bordeaux/25 text-bordeaux-ink text-[14px] tracking-wide hover:bg-bordeaux hover:text-cream hover:border-bordeaux transition-all text-center">
              Jetzt Anrufen
            </a>
          </div>
        </div>

        {/* scroll hint — desktop only */}
        <div className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 text-[11px] tracking-[0.4em] uppercase text-bordeaux-ink/50 flex-col items-center gap-3">
          <span>Scroll</span>
          <span className="w-px h-10 bg-bordeaux-ink/30" />
        </div>
      </section>

      {/* TICKER STRIP */}
      <section className="py-4 md:py-6 border-y border-bordeaux/15 bg-cream overflow-hidden">
        <div className="marquee-fast text-bordeaux-ink/80 font-display text-[18px] md:text-[28px] tracking-tightest whitespace-nowrap">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex items-center gap-5 md:gap-8 shrink-0">
              <span>Hotel</span>
              <span className="text-bordeaux">✦</span>
              <span>Restaurant</span>
              <span className="text-bordeaux">✦</span>
              <span>Events</span>
              <span className="text-bordeaux">✦</span>
              <span>Hochzeiten</span>
              <span className="text-bordeaux">✦</span>
              <span>Festsäle</span>
              <span className="text-bordeaux">✦</span>
              <span>Pilsstube</span>
              <span className="text-bordeaux">✦</span>
              <span>Terrasse</span>
              <span className="text-bordeaux">✦</span>
            </div>
          ))}
        </div>
      </section>

      {/* INTRO STATEMENT */}
      <section className="py-20 md:py-32 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="text-[clamp(12px,1vw,13px)] uppercase tracking-[0.4em] text-bordeaux mb-10">— Willkommen</p>
            <p className="font-display text-[clamp(28px,4.2vw,56px)] leading-[1.15] tracking-tightest text-bordeaux-ink">
              Nehmen Sie Platz in unserem Restaurant und genießen Sie <span className="italic text-bordeaux">Erlesenes</span> für Gaumen und Sinne in einem stilvollen Ambiente. Regionale Produkte gehören ebenso wie mediterrane Klassiker und internationale Speisen zu unserem Repertoir.
            </p>
          </Reveal>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="py-14 md:py-20 px-6 border-y border-bordeaux/10 bg-bone">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 md:gap-10">
          {[
            { n: "180", l: "Gäste" },
            { n: "2", l: "Festsäle" },
            { n: "1", l: "Pilsstube" },
            { n: "1", l: "Terrasse" },
          ].map((s, i) => (
            <Reveal key={s.l} delay={i * 80}>
              <div className="text-center">
                <div className="stat-num font-display text-[clamp(56px,9vw,120px)] leading-none tracking-tightest text-bordeaux">
                  {s.n}
                </div>
                <div className="mt-4 text-[11px] uppercase tracking-[0.35em] text-bordeaux-ink/60">
                  {s.l}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CINEMATIC VIDEO SPLIT */}
      <section className="py-20 md:py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <Reveal>
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-bordeaux-ink">
              <video src="/videos/saal.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="space-y-6 md:pl-6">
              <p className="text-[11px] uppercase tracking-[0.4em] text-bordeaux">— Bar & Keller</p>
              <h2 className="font-display text-[clamp(32px,5vw,64px)] leading-[1.05] tracking-tightest text-bordeaux-ink">
                Ausgewählte Weine.<br />
                <span className="italic text-bordeaux">International</span> & regional.
              </h2>
              <p className="text-[17px] md:text-[19px] leading-relaxed text-bordeaux-ink/80">
                Ausgewählte Weine und Spirituosen der Region und International, halten wir nebst moderner Getränke und Aperitife für Sie bereit.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* DARK CINEMATIC FULL-BLEED */}
      <section className="relative min-h-[70vh] md:min-h-[85vh] overflow-hidden bg-bordeaux-ink grain">
        <div className="absolute inset-0">
          <Image src="/images/festsaal-elegant.jpg" alt="" fill className="object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-bordeaux-ink/70 via-bordeaux-ink/70 to-bordeaux-ink" />
        </div>
        <div className="relative z-10 min-h-[70vh] md:min-h-[85vh] flex items-center px-6 py-24 md:py-32">
          <div className="max-w-6xl mx-auto w-full">
            <Reveal>
              <p className="text-[11px] uppercase tracking-[0.4em] text-bordeaux-soft mb-6 md:mb-8">— Für bis zu 180 Gäste</p>
              <h2 className="font-display text-[clamp(36px,8vw,120px)] leading-[0.98] tracking-tightest text-cream">
                Zwei <span className="italic text-bordeaux-soft">Festsäle.</span><br />
                Ein <span className="italic text-bordeaux-soft">Rahmen.</span><br />
                Ihr Moment.
              </h2>
              <p className="mt-8 md:mt-10 max-w-2xl text-[15px] md:text-[19px] leading-relaxed text-cream/75">
                Für Feierlichkeiten und Events mit bis zu 180 Personen bieten unsere beiden Festsäle Ihnen den passenden Rahmen.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* THREE AMBIENCES */}
      <section className="py-20 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="mb-16 flex items-end justify-between gap-6 flex-wrap">
              <div>
                <p className="text-[11px] uppercase tracking-[0.4em] text-bordeaux mb-4">— Drei Welten</p>
                <h2 className="font-display text-[clamp(36px,6vw,80px)] tracking-tightest text-bordeaux-ink leading-[1.02]">
                  Eine Adresse.
                </h2>
              </div>
              <p className="max-w-sm text-[15px] text-bordeaux-ink/60 leading-relaxed">
                Wir wünschen Ihnen eine gemütliche Zeit.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4 md:gap-5 md:grid-cols-3">
            <Reveal delay={0}>
              <div className="group relative rounded-3xl overflow-hidden aspect-[3/4]">
                <Image src="/images/restaurant-bar.jpg" alt="Pilsstube" fill className="object-cover transition-transform duration-[1500ms] group-hover:scale-105" sizes="(min-width: 768px) 33vw, 100vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-bordeaux-ink via-bordeaux-ink/10 to-transparent" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-cream">
                  <div className="text-[11px] uppercase tracking-[0.4em] text-cream/60 mb-2">01</div>
                  <h3 className="font-display text-[32px] tracking-tightest leading-tight">Pilsstube</h3>
                  <p className="mt-3 text-[14px] text-cream/80 leading-relaxed">Für gesellige Stunden in rustikaler Atmosphäre bietet unsere gemütliche Pilsstube das gewisse Etwas.</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="group relative rounded-3xl overflow-hidden aspect-[3/4]">
                <Image src="/images/terrasse-1.jpg" alt="Terrasse" fill className="object-cover transition-transform duration-[1500ms] group-hover:scale-105" sizes="(min-width: 768px) 33vw, 100vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-bordeaux-ink via-bordeaux-ink/10 to-transparent" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-cream">
                  <div className="text-[11px] uppercase tracking-[0.4em] text-cream/60 mb-2">02</div>
                  <h3 className="font-display text-[32px] tracking-tightest leading-tight">Terrasse</h3>
                  <p className="mt-3 text-[14px] text-cream/80 leading-relaxed">Im Sommer lädt unsere gemütliche kleine Terrasse zum Verweilen ein.</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="group relative rounded-3xl overflow-hidden aspect-[3/4]">
                <Image src="/images/festsaal-hochzeit.jpg" alt="Festsäle" fill className="object-cover transition-transform duration-[1500ms] group-hover:scale-105" sizes="(min-width: 768px) 33vw, 100vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-bordeaux-ink via-bordeaux-ink/10 to-transparent" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-cream">
                  <div className="text-[11px] uppercase tracking-[0.4em] text-cream/60 mb-2">03</div>
                  <h3 className="font-display text-[32px] tracking-tightest leading-tight">Festsäle</h3>
                  <p className="mt-3 text-[14px] text-cream/80 leading-relaxed">Für Feierlichkeiten und Events mit bis zu 180 Personen bieten unsere beiden Festsäle den passenden Rahmen.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* MARQUEE GALLERY */}
      <section className="py-24 overflow-hidden">
        <Reveal>
          <div className="text-center mb-14 px-6">
            <p className="text-[11px] uppercase tracking-[0.4em] text-bordeaux mb-4">— Eindrücke</p>
            <h2 className="font-display text-[clamp(36px,6vw,80px)] tracking-tightest text-bordeaux-ink leading-[1.02]">
              Momente aus dem<br /><span className="italic text-bordeaux">Petri-Hof.</span>
            </h2>
          </div>
        </Reveal>
        <div className="marquee">
          {[...gallery, ...gallery].map((img, i) => (
            <div key={i} className="relative shrink-0 w-[220px] h-[290px] md:w-[320px] md:h-[420px] rounded-2xl overflow-hidden">
              <Image src={`/images/${img}`} alt="" fill className="object-cover" sizes="(min-width: 768px) 320px, 220px" />
            </div>
          ))}
        </div>
        <div className="marquee mt-4 md:mt-6" style={{ animationDirection: "reverse" }}>
          {[...galleryB, ...galleryB].map((img, i) => (
            <div key={i} className="relative shrink-0 w-[180px] h-[230px] md:w-[260px] md:h-[340px] rounded-2xl overflow-hidden">
              <Image src={`/images/${img}`} alt="" fill className="object-cover" sizes="(min-width: 768px) 260px, 180px" />
            </div>
          ))}
        </div>
      </section>

      {/* SIGNATURE / FAMILIE */}
      <section className="py-20 md:py-32 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-14 items-center">
          <Reveal>
            <div className="md:col-span-2 relative rounded-3xl overflow-hidden aspect-[4/5]">
              <video src="/videos/ambiente.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="md:col-span-3 space-y-8">
              <p className="text-[11px] uppercase tracking-[0.4em] text-bordeaux">— Ihre Gastgeber</p>
              <h2 className="font-display text-[clamp(32px,5vw,64px)] leading-[1.05] tracking-tightest text-bordeaux-ink">
                Wir wünschen Ihnen eine <span className="italic text-bordeaux">gemütliche Zeit.</span>
              </h2>
              <p className="font-display text-[clamp(18px,1.6vw,22px)] text-bordeaux-ink/80 tracking-tightest leading-relaxed">
                Ihre Familie Ralf Schneider & Oraphin Chaibun,<br />
                sowie Serviceleiter Ingo Preußmann<br />
                und das Team vom Petri-Hof.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 md:py-32 px-6 bg-bone">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-20">
              <p className="text-[11px] uppercase tracking-[0.4em] text-bordeaux mb-4">— Wir für Sie</p>
              <h2 className="font-display text-[clamp(36px,6vw,80px)] tracking-tightest text-bordeaux-ink leading-[1.02]">
                Unser Service<br />auf einen <span className="italic text-bordeaux">Blick.</span>
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <article className="group relative rounded-3xl overflow-hidden bg-cream aspect-[4/5]">
                  <Image src={`/images/${s.img}`} alt={s.title} fill className="object-cover transition-transform duration-[1500ms] group-hover:scale-105" sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-bordeaux-ink/95 via-bordeaux-ink/30 to-transparent" />
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className="text-[11px] uppercase tracking-[0.4em] text-cream/60 mb-2">0{i + 1}</div>
                    <h3 className="font-display text-[26px] tracking-tightest text-cream leading-tight">{s.title}</h3>
                    <p className="mt-3 text-[14px] text-cream/80 leading-relaxed whitespace-pre-line max-w-xs">{s.text}</p>
                    <Link href="/services" className="mt-5 text-[13px] text-cream underline-offset-4 hover:underline w-fit">
                      Erfahre mehr →
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section className="py-20 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="mb-16 flex items-end justify-between gap-6 flex-wrap">
              <div>
                <p className="text-[11px] uppercase tracking-[0.4em] text-bordeaux mb-4">— Neuigkeiten zu</p>
                <h2 className="font-display text-[clamp(36px,6vw,80px)] tracking-tightest text-bordeaux-ink leading-[1.02]">
                  Events, Feiertage<br />und <span className="italic text-bordeaux">Aktionen.</span>
                </h2>
              </div>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {news.map((n, i) => (
              <Reveal key={n.title} delay={i * 60}>
                <article className="group relative rounded-3xl overflow-hidden bg-bone">
                  <div className="relative aspect-[16/10]">
                    <Image src={`/images/${n.img}`} alt={n.title} fill className="object-cover transition-transform duration-[1500ms] group-hover:scale-105" sizes="(min-width: 768px) 50vw, 100vw" />
                  </div>
                  <div className="p-8">
                    <div className="text-[11px] tracking-[0.3em] uppercase text-bordeaux">{n.date}</div>
                    <h3 className="mt-3 font-display text-[24px] tracking-tightest text-bordeaux-ink leading-snug">{n.title}</h3>
                    <p className="mt-4 text-[14px] text-bordeaux-ink/70 leading-relaxed">{n.text}</p>
                    <button className="mt-5 text-[13px] text-bordeaux hover:text-bordeaux-deep transition-colors">Mehr lesen →</button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HUGE TYPOGRAPHIC CTA */}
      <section className="relative overflow-hidden bg-bordeaux text-cream py-24 md:py-40 px-6">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <Reveal>
            <p className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] md:tracking-[0.5em] text-cream/70 mb-8 md:mb-10">— Wir kümmern uns um Sie</p>
            <h2 className="font-display leading-[0.9] tracking-tightest text-[clamp(64px,16vw,220px)]">
              Jetzt<br />
              <span className="italic">anrufen.</span>
            </h2>
            <a href="tel:+4968347829820" className="mt-10 md:mt-14 inline-block font-display text-[clamp(24px,6vw,56px)] tracking-tightest border-b-2 border-cream/40 pb-2 md:pb-3 hover:border-cream transition-colors break-all">
              06834 7829820
            </a>
            <div className="mt-8 md:mt-10">
              <a href="/speisekarte.pdf" target="_blank" rel="noopener" className="inline-block px-7 py-3.5 rounded-full border border-cream/30 text-cream text-[14px] tracking-wide hover:bg-cream hover:text-bordeaux transition-all">
                Speisekarte ansehen
              </a>
            </div>
          </Reveal>
        </div>
        {/* decorative outline text */}
        <div className="pointer-events-none absolute -bottom-4 md:-bottom-10 left-0 right-0 text-center">
          <div className="font-display text-outline text-cream text-[clamp(80px,22vw,360px)] leading-none tracking-tightest opacity-15 whitespace-nowrap">
            Petri-Hof
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-32 px-6 bg-bone">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <p className="text-[11px] uppercase tracking-[0.4em] text-bordeaux mb-4">— Oft gestellte Fragen</p>
              <h2 className="font-display text-[clamp(36px,6vw,64px)] tracking-tightest text-bordeaux-ink">FAQ</h2>
            </div>
          </Reveal>
          <div className="divide-y divide-bordeaux/10 border-y border-bordeaux/10">
            {faqs.map((f, i) => (
              <details key={i} className="group py-6 cursor-pointer">
                <summary className="flex justify-between items-center gap-6 list-none">
                  <span className="font-display text-[20px] md:text-[22px] tracking-tightest text-bordeaux-ink">{f.q}</span>
                  <span className="text-bordeaux text-xl transition-transform group-open:rotate-45">+</span>
                </summary>
                {f.a && <p className="mt-4 text-[15px] leading-relaxed text-bordeaux-ink/70">{f.a}</p>}
              </details>
            ))}
          </div>
          <Reveal>
            <div className="mt-20 text-center">
              <p className="font-display text-[22px] tracking-tightest text-bordeaux-ink">Deine Frage ist nicht dabei?</p>
              <p className="mt-3 text-[15px] text-bordeaux-ink/70">
                Wir antworten Ihnen gerne auf offene Fragen.
              </p>
              <a href="tel:+4968347829820" className="inline-block mt-7 px-7 py-3.5 rounded-full bg-bordeaux text-cream text-[14px] tracking-wide hover:bg-bordeaux-deep transition-all">
                Jetzt Anrufen
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
