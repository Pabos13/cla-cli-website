'use client'

import { useState } from 'react'
import {
  ArrowRight,
  Check,
  ChevronDown,
  Clock3,
  Home,
  Leaf,
  Menu,
  Phone,
  Sparkles,
  Star,
  X,
} from 'lucide-react'

const services = [
  {
    icon: Home,
    title: 'Sprzątanie mieszkań i domów',
    text: 'Jednorazowe lub regularne porządki dopasowane do Twojego rytmu dnia.',
  },
  {
    icon: Sparkles,
    title: 'Sprzątanie biur',
    text: 'Czyste, komfortowe miejsce pracy, które robi dobre wrażenie na każdym.',
  },
  {
    icon: Leaf,
    title: 'Sprzątanie ekologiczne',
    text: 'Skuteczne środki przyjazne dla zdrowia, dzieci i domowych pupili.',
  },
]

const steps = [
  ['01', 'Napisz lub zadzwoń', 'Opowiedz nam, czego potrzebujesz i poznaj wstępną wycenę.'],
  ['02', 'Ustalamy szczegóły', 'Wybieramy dogodny termin, zakres prac i częstotliwość wizyt.'],
  ['03', 'My zajmujemy się resztą', 'Przychodzimy punktualnie i zostawiamy po sobie idealny porządek.'],
]

const faqs = [
  ['Czy środki czystości są po Waszej stronie?', 'Tak. Korzystamy ze sprawdzonych, skutecznych i bezpiecznych środków. Jeśli masz ulubione produkty lub specjalne wymagania, z przyjemnością ich użyjemy.'],
  ['Czy mogę zamówić sprzątanie jednorazowe?', 'Oczywiście. Realizujemy zarówno pojedyncze zlecenia, jak i regularne wizyty dopasowane do Twoich potrzeb.'],
  ['Na jakim obszarze działacie?', 'Obsługujemy Toruń i najbliższe okolice. Napisz do nas — sprawdzimy dostępność w Twojej lokalizacji.'],
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="absolute inset-x-0 top-0 z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">
          <a href="#start" className="flex items-center gap-3" aria-label="Dla Cla Cli - strona główna">
            <span className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground"><Sparkles size={20} /></span>
            <span className="font-mono text-sm font-bold tracking-tight text-white">DLA CLA CLI<span className="text-accent">.</span></span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-white/80 md:flex">
            <a href="#uslugi" className="transition-colors hover:text-white">Usługi</a>
            <a href="#dlaczego-my" className="transition-colors hover:text-white">Dlaczego my</a>
            <a href="#opinie" className="transition-colors hover:text-white">Opinie</a>
            <a href="#kontakt" className="rounded-full bg-primary px-5 py-3 text-primary-foreground transition-transform hover:scale-105">Bezpłatna wycena <ArrowRight className="ml-2 inline" size={16} /></a>
          </nav>
          <button className="flex size-11 items-center justify-center rounded-full bg-white/10 text-white md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Zamknij menu' : 'Otwórz menu'}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
        {menuOpen && <nav className="mx-5 flex flex-col gap-2 rounded-2xl bg-card p-4 text-sm shadow-xl md:hidden"><a href="#uslugi" onClick={() => setMenuOpen(false)} className="rounded-xl px-4 py-3">Usługi</a><a href="#dlaczego-my" onClick={() => setMenuOpen(false)} className="rounded-xl px-4 py-3">Dlaczego my</a><a href="#kontakt" onClick={() => setMenuOpen(false)} className="rounded-xl bg-primary px-4 py-3 font-semibold text-primary-foreground">Bezpłatna wycena</a></nav>}
      </header>

      <section id="start" className="relative isolate flex min-h-[720px] items-end bg-primary pb-16 pt-32 lg:min-h-[780px] lg:items-center lg:pb-0">
        <div className="fixed inset-0 -z-10 bg-[url('/images/cleaning-hero.png')] bg-cover bg-[center_35%]" aria-hidden="true" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary via-primary/85 to-primary/15" />
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <div className="max-w-2xl text-white">
            <p className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-accent"><span className="h-px w-8 bg-accent" /> Czystość, na której możesz polegać</p>
            <h1 className="max-w-xl text-balance font-mono text-4xl font-bold leading-[1.08] tracking-[-0.04em] sm:text-6xl lg:text-7xl">Twój porządek.<br /><span className="text-accent">Nasz standard.</span></h1>
            <p className="mt-6 max-w-lg text-pretty text-base leading-7 text-white/75 sm:text-lg">Profesjonalne sprzątanie mieszkań, domów i biur w Toruniu. Zadbamy o czystość, abyś Ty mógł zająć się tym, co naprawdę ważne.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row"><a href="#kontakt" className="inline-flex min-h-12 items-center justify-center rounded-full bg-accent px-6 font-bold text-accent-foreground transition-transform hover:scale-105">Zamów sprzątanie <ArrowRight className="ml-2" size={18} /></a><a href="tel:+48500123456" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/25 px-6 font-semibold text-white transition-colors hover:bg-white/10"><Phone className="mr-2" size={17} /> 500 123 456</a></div>
            <div className="mt-10 flex items-center gap-5 text-sm text-white/70"><div className="flex -space-x-2"><span className="flex size-9 items-center justify-center rounded-full border-2 border-primary bg-accent text-xs font-bold text-accent-foreground">AK</span><span className="flex size-9 items-center justify-center rounded-full border-2 border-primary bg-secondary text-xs font-bold text-secondary-foreground">MW</span><span className="flex size-9 items-center justify-center rounded-full border-2 border-primary bg-muted text-xs font-bold text-muted-foreground">JP</span></div><span><span className="font-semibold text-white">4.9/5</span> od ponad 120 klientów</span></div>
          </div>
        </div>
      </section>

      <section id="uslugi" className="bg-background py-20 lg:py-28"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-accent-foreground">Co możemy dla Ciebie zrobić</p><h2 className="max-w-xl text-balance font-mono text-3xl font-bold tracking-tight text-primary sm:text-5xl">Czystość dopasowana do Twojego życia.</h2></div><p className="max-w-sm leading-6 text-muted-foreground">Od szybkiego odświeżenia po kompleksowe porządki. Ty wybierasz zakres, my dbamy o każdy szczegół.</p></div><div className="grid gap-4 md:grid-cols-3">{services.map(({ icon: Icon, title, text }) => <article key={title} className="group rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-lg"><div className="mb-12 flex size-12 items-center justify-center rounded-xl bg-accent/15 text-accent-foreground"><Icon size={23} /></div><h3 className="font-mono text-xl font-bold text-primary">{title}</h3><p className="mt-3 leading-6 text-muted-foreground">{text}</p><a href="#kontakt" className="mt-6 inline-flex items-center text-sm font-bold text-primary">Dowiedz się więcej <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={16} /></a></article>)}</div></div></section>

      <section id="dlaczego-my" className="bg-secondary py-20 lg:py-28"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center"><div><p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-accent-foreground">Prosto i bez stresu</p><h2 className="text-balance font-mono text-3xl font-bold tracking-tight text-primary sm:text-5xl">Porządek zaczyna się od dobrej rozmowy.</h2><p className="mt-5 max-w-md leading-7 text-muted-foreground">Działamy lokalnie, znamy Toruń i wiemy, że każda przestrzeń ma swoje potrzeby. Dlatego nie proponujemy gotowych pakietów — słuchamy i dopasowujemy usługę.</p></div><div className="grid gap-7">{steps.map(([num, title, text]) => <div key={num} className="flex gap-5 border-b border-border pb-7 last:border-0"><span className="font-mono text-sm font-bold text-accent-foreground">{num}</span><div><h3 className="font-mono text-lg font-bold text-primary">{title}</h3><p className="mt-2 leading-6 text-muted-foreground">{text}</p></div></div>)}</div></div></div></section>

      <section id="opinie" className="bg-primary py-20 text-primary-foreground lg:py-24"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end"><div><div className="mb-5 flex gap-1 text-accent">{[1,2,3,4,5].map((item) => <Star key={item} size={18} fill="currentColor" />)}</div><blockquote className="max-w-3xl text-balance font-mono text-2xl font-bold leading-snug sm:text-4xl">„W końcu wracam do domu i naprawdę odpoczywam. Dla Cla Cli to nie tylko sprzątanie — to odzyskany czas.”</blockquote></div><p className="shrink-0 text-sm text-white/60">— Marta, Toruń / Rubinkowo</p></div></div></section>

      <section className="bg-background py-20 lg:py-28"><div className="mx-auto max-w-3xl px-5 lg:px-8"><p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-accent-foreground">Masz pytania?</p><h2 className="font-mono text-3xl font-bold tracking-tight text-primary sm:text-5xl">Warto wiedzieć</h2><div className="mt-8 divide-y divide-border border-y border-border">{faqs.map(([question, answer]) => <details key={question} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-primary [&::-webkit-details-marker]:hidden"><span>{question}</span><ChevronDown className="shrink-0 transition-transform group-open:rotate-180" size={20} /></summary><p className="max-w-2xl pt-3 leading-6 text-muted-foreground">{answer}</p></details>)}</div></div></section>

      <section id="kontakt" className="bg-accent px-5 py-16 text-accent-foreground lg:px-8 lg:py-20"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-end"><div><p className="mb-3 text-sm font-bold uppercase tracking-[0.16em]">Zacznijmy od czystej kartki</p><h2 className="max-w-2xl text-balance font-mono text-3xl font-bold tracking-tight sm:text-5xl">Gotowy na więcej wolnego czasu?</h2><p className="mt-4 max-w-lg leading-6 opacity-80">Napisz do nas lub zadzwoń. Przygotujemy bezpłatną wycenę dopasowaną do Twojej przestrzeni.</p></div><div className="flex flex-col gap-3 sm:flex-row"><a href="tel:+48500123456" className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-6 font-bold text-primary-foreground"><Phone className="mr-2" size={17} /> 500 123 456</a><a href="mailto:kontakt@dlaclacli.pl" className="inline-flex min-h-12 items-center justify-center rounded-full border border-accent-foreground/25 px-6 font-bold">Napisz wiadomość <ArrowRight className="ml-2" size={17} /></a></div></div></section>

      <footer className="bg-primary px-5 py-8 text-white/60 lg:px-8"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm sm:flex-row"><span className="font-mono font-bold text-white">DLA CLA CLI<span className="text-accent">.</span></span><span className="flex items-center gap-2"><Clock3 size={15} /> Pon—Pt, 8:00—18:00 · Toruń i okolice</span><span>© 2026 Dla Cla Cli</span></div></footer>
    </main>
  )
}
