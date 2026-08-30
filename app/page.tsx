'use client'

import { useState } from 'react'
import { ArrowRight, Check, ChevronDown, Home, Leaf, Menu, MessageCircle, Phone, Sparkles, Star, X } from 'lucide-react'
import { BeforeAfter } from '@/components/before-after'
import { PriceCalculator } from '@/components/price-calculator'
import { WhatsAppFab } from '@/components/whatsapp-fab'

const services = [
  { icon: Home, title: 'Sprzątanie mieszkań i domów', text: 'Jednorazowe lub regularne porządki dopasowane do Twojego rytmu dnia.' },
  { icon: Sparkles, title: 'Sprzątanie biur', text: 'Czyste, komfortowe miejsce pracy, które robi dobre wrażenie na każdym.' },
  { icon: Leaf, title: 'Sprzątanie ekologiczne', text: 'Skuteczne środki przyjazne dla zdrowia, dzieci i domowych pupili.' },
]

const plans = [
  {
    name: 'Sprzątanie standardowe',
    price: 'od 89 zł/h',
    tag: 'Najczęściej wybierane',
    featured: false,
    features: ['Odkurzanie i mycie podłóg', 'Ścieranie kurzu i powierzchni', 'Łazienka i kuchnia', 'Wynoszenie śmieci'],
  },
  {
    name: 'Sprzątanie regularne',
    price: 'od 79 zł/h',
    tag: 'Oszczędzasz najwięcej',
    featured: true,
    features: ['Wszystko ze standardu', 'Stały, dogodny termin', 'Niższa stawka za godzinę', 'Priorytetowa obsługa'],
  },
  {
    name: 'Sprzątanie generalne',
    price: 'od 119 zł/h',
    tag: 'Efekt „jak nowe”',
    featured: false,
    features: ['Dokładne mycie od góry do dołu', 'Mycie okien i AGD', 'Odkamienianie i doczyszczanie', 'Po remoncie lub przed przeprowadzką'],
  },
]

const gallery = [
  { before: '/images/kuchnia-przed.png', after: '/images/kuchnia-po.png', label: 'Kuchnia' },
  { before: '/images/lazienka-przed.png', after: '/images/lazienka-po.png', label: 'Łazienka' },
]

const faqs = [
  ['Czy środki czystości są po Waszej stronie?', 'Tak. Korzystamy ze sprawdzonych, skutecznych i bezpiecznych środków. Jeśli masz ulubione produkty lub specjalne wymagania, chętnie ich użyjemy.'],
  ['Czy mogę zamówić sprzątanie jednorazowe?', 'Oczywiście. Realizujemy zarówno pojedyncze zlecenia, jak i regularne wizyty dopasowane do Twoich potrzeb.'],
  ['Na jakim obszarze działacie?', 'Obsługujemy Toruń i najbliższe okolice. Napisz do nas, aby sprawdzić dostępność w Twojej lokalizacji.'],
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [sent, setSent] = useState(false)

  function sendToWhatsApp(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') || '')
    const phone = String(data.get('phone') || '')
    const message = String(data.get('message') || '')
    const text = encodeURIComponent(`Dzień dobry, mam na imię ${name}. ${message}${phone ? ` Mój numer telefonu: ${phone}.` : ''}`)
    window.open(`https://wa.me/48577867712?text=${text}`, '_blank', 'noopener,noreferrer')
    setSent(true)
  }

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-primary/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#start" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
            <img src="/images/claandsweeped-logo.jpeg" alt="ClaAndSweeped" className="h-10 w-10 rounded-xl object-cover" />
            <span className="font-mono text-sm font-bold tracking-tight text-white">ClaAndSweeped<span className="text-accent">.</span></span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-white/80 md:flex">
            <a href="#uslugi" className="transition hover:text-white">Usługi</a>
            <a href="#cennik" className="transition hover:text-white">Cennik</a>
            <a href="#kalkulator" className="transition hover:text-white">Kalkulator</a>
            <a href="#realizacje" className="transition hover:text-white">Realizacje</a>
            <a href="#opinie" className="transition hover:text-white">Opinie</a>
            <a href="#kontakt" className="rounded-full bg-accent px-5 py-3 text-accent-foreground transition hover:scale-105">Bezpłatna wycena <ArrowRight className="ml-2 inline" size={16} /></a>
          </nav>
          <button className="rounded-full bg-white/10 p-3 text-white md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">{menuOpen ? <X /> : <Menu />}</button>
        </div>
        {menuOpen && <nav className="mx-4 mb-4 flex flex-col gap-2 rounded-2xl bg-card p-4 text-sm shadow-xl md:hidden"><a href="#uslugi" onClick={() => setMenuOpen(false)}>Usługi</a><a href="#cennik" onClick={() => setMenuOpen(false)}>Cennik</a><a href="#kalkulator" onClick={() => setMenuOpen(false)}>Kalkulator</a><a href="#realizacje" onClick={() => setMenuOpen(false)}>Realizacje</a><a href="#opinie" onClick={() => setMenuOpen(false)}>Opinie</a><a href="#kontakt" onClick={() => setMenuOpen(false)} className="rounded-xl bg-accent px-4 py-3 font-semibold">Bezpłatna wycena</a></nav>}
      </header>

      <section id="start" className="relative flex min-h-[760px] items-end pb-24 pt-40 lg:items-center lg:pb-0">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/85 via-primary/45 to-transparent" />
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8"><div className="max-w-3xl">
          <p className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-accent"><span className="h-px w-8 bg-accent" /> Czystość, na której możesz polegać</p>
          <h1 className="font-mono text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-8xl">Twój porządek.<br /><span className="text-accent">Nasz standard.</span></h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-white/75">Profesjonalne sprzątanie mieszkań, domów i biur w Toruniu. Zadbamy o czystość, abyś Ty mógł zająć się tym, co naprawdę ważne.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row"><a href="#kontakt" className="rounded-full bg-accent px-7 py-4 text-center font-bold text-accent-foreground transition hover:scale-105">Zamów sprzątanie <ArrowRight className="ml-2 inline" size={18} /></a><a href="https://wa.me/48577867712" target="_blank" rel="noreferrer" className="rounded-full border border-white/25 px-7 py-4 text-center font-semibold text-white transition hover:bg-white/10"><MessageCircle className="mr-2 inline" size={18} /> WhatsApp</a></div>
        </div></div>
      </section>

      <section id="uslugi" className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32"><div className="mb-12 max-w-xl"><p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-accent">Co możemy dla Ciebie zrobić</p><h2 className="font-mono text-4xl font-bold tracking-tight sm:text-5xl">Czystość dopasowana do Twojego życia.</h2></div><div className="grid gap-5 md:grid-cols-3">{services.map(({ icon: Icon, title, text }) => <article key={title} className="group rounded-3xl border border-border bg-card/80 p-7"><div className="mb-10 flex size-12 items-center justify-center rounded-2xl bg-accent/15 text-accent"><Icon size={24} /></div><h3 className="font-mono text-xl font-bold">{title}</h3><p className="mt-3 leading-7 text-muted-foreground">{text}</p><a href="#kontakt" className="mt-6 inline-flex items-center text-sm font-bold text-primary">Dowiedz się więcej <ArrowRight className="ml-2 transition group-hover:translate-x-1" size={16} /></a></article>)}</div></section>

      <section id="dlaczego-my" className="border-y border-border bg-primary py-24 text-white lg:py-32"><div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[.8fr_1.2fr] lg:px-8"><div><p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-accent">Prosto i bez stresu</p><h2 className="font-mono text-4xl font-bold tracking-tight sm:text-5xl">Porządek zaczyna się od dobrej rozmowy.</h2><p className="mt-5 leading-7 text-white/65">Działamy lokalnie, znamy Toruń i wiemy, że każda przestrzeń ma swoje potrzeby.</p></div><div className="grid gap-6 sm:grid-cols-3">{[['01','Napisz lub zadzwoń','Opowiedz nam, czego potrzebujesz.'],['02','Ustalimy szczegóły','Wybierzemy dogodny termin i zakres prac.'],['03','My zajmiemy się resztą','Przychodzimy punktualnie i zostawiamy idealny porządek.']].map(([num,title,text]) => <div key={num} className="border-t border-white/20 pt-5"><span className="font-mono text-2xl text-accent">{num}</span><h3 className="mt-6 font-mono text-lg font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-white/60">{text}</p></div>)}</div></div></section>

      <section id="cennik" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32"><div className="mb-12 max-w-xl"><p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-accent">Przejrzyste stawki</p><h2 className="font-mono text-4xl font-bold tracking-tight sm:text-5xl">Cennik bez niespodzianek.</h2><p className="mt-4 leading-7 text-white/70">Poniżej stawki orientacyjne. Ostateczną, bezpłatną wycenę przygotujemy po krótkiej rozmowie o Twojej przestrzeni.</p></div><div className="grid gap-5 md:grid-cols-3">{plans.map((plan) => <article key={plan.name} className={`flex flex-col rounded-3xl border p-7 backdrop-blur-md ${plan.featured ? 'border-accent bg-accent/15 shadow-[0_22px_55px_rgba(0,0,0,0.4)]' : 'border-[rgba(130,195,235,0.2)] bg-[rgba(12,30,54,0.5)]'}`}><span className={`inline-flex w-fit rounded-full px-3 py-1 text-xs font-bold ${plan.featured ? 'bg-accent text-accent-foreground' : 'bg-white/10 text-accent'}`}>{plan.tag}</span><h3 className="mt-5 font-mono text-xl font-bold text-white">{plan.name}</h3><p className="mt-2 font-mono text-3xl font-bold text-accent">{plan.price}</p><ul className="mt-6 flex flex-1 flex-col gap-3 text-sm text-white/80">{plan.features.map((f) => <li key={f} className="flex items-start gap-2"><Check size={18} className="mt-0.5 shrink-0 text-accent" /> {f}</li>)}</ul><a href="#kontakt" className={`mt-7 rounded-full px-5 py-3 text-center font-bold transition hover:scale-[1.02] ${plan.featured ? 'bg-accent text-accent-foreground' : 'border border-white/25 text-white hover:bg-white/10'}`}>Zapytaj o wycenę</a></article>)}</div></section>

      <section id="kalkulator" className="mx-auto max-w-7xl px-5 pb-24 lg:px-8"><div className="mb-12 max-w-xl"><p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-accent">Policz w 10 sekund</p><h2 className="font-mono text-4xl font-bold tracking-tight sm:text-5xl">Kalkulator wyceny.</h2><p className="mt-4 leading-7 text-white/70">Ustaw metraż, rodzaj i częstotliwość, aby zobaczyć orientacyjny koszt. Gotowe podsumowanie wyślij prosto na WhatsApp.</p></div><PriceCalculator /></section>

      <section id="realizacje" className="mx-auto max-w-7xl px-5 pb-24 lg:px-8"><div className="mb-12 max-w-xl"><p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-accent">Zobacz różnicę</p><h2 className="font-mono text-4xl font-bold tracking-tight sm:text-5xl">Efekty naszej pracy.</h2><p className="mt-4 leading-7 text-white/70">Przeciągnij suwak, aby porównać stan przed i po sprzątaniu.</p></div><div className="grid gap-6 md:grid-cols-2">{gallery.map((item) => <BeforeAfter key={item.label} before={item.before} after={item.after} label={item.label} />)}</div></section>

      <section id="opinie" className="mx-auto max-w-7xl px-5 py-24 lg:px-8"><div className="max-w-2xl"><div className="mb-5 flex gap-1 text-accent">{[1,2,3,4,5].map(item => <Star key={item} size={18} fill="currentColor" />)}</div><blockquote className="font-mono text-3xl font-bold leading-snug sm:text-4xl">„W końcu wracam do domu i naprawdę odpoczywam. Dla ClaAndSweeped to nie tylko sprzątanie — to odzyskany czas.”</blockquote><p className="mt-5 text-sm text-muted-foreground">— Marta, Toruń / Rubinkowo</p></div></section>

      <section className="mx-auto max-w-4xl px-5 pb-24 lg:px-8"><p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-accent">Masz pytania?</p><h2 className="font-mono text-4xl font-bold">Warto wiedzieć</h2><div className="mt-8 divide-y divide-border border-y border-border">{faqs.map(([question, answer]) => <details key={question} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between font-semibold">{question}<ChevronDown className="transition group-open:rotate-180" size={20} /></summary><p className="max-w-2xl pt-3 leading-7 text-muted-foreground">{answer}</p></details>)}</div></section>

      <section id="kontakt" className="bg-accent border-y border-white/10 px-5 py-20 text-white lg:px-8 lg:py-28"><div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-end"><div><p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-accent">Zacznijmy od czystej kartki</p><h2 className="font-mono text-4xl font-bold tracking-tight sm:text-5xl">Gotowy na więcej wolnego czasu?</h2><p className="mt-4 max-w-lg leading-7 text-white/75">Napisz do nas przez formularz kontaktowy. Przygotujemy bezpłatną wycenę dopasowaną do Twojej przestrzeni.</p><a href="https://wa.me/48577867712" target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 font-bold text-accent underline underline-offset-4"><MessageCircle size={18} /> WhatsApp: 577 867 712</a></div><form onSubmit={sendToWhatsApp} className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-md"><label className="block text-sm font-semibold text-white">Imię<input name="name" required className="mt-2 w-full rounded-xl border border-white/15 bg-white/95 px-4 py-3 text-base text-primary outline-none focus:ring-2 focus:ring-accent" placeholder="Jak masz na imię?" /></label><label className="mt-4 block text-sm font-semibold text-white">Numer telefonu<input name="phone" type="tel" className="mt-2 w-full rounded-xl border border-white/15 bg-white/95 px-4 py-3 text-base text-primary outline-none focus:ring-2 focus:ring-accent" placeholder="Twój numer (opcjonalnie)" /></label><label className="mt-4 block text-sm font-semibold text-white">Wiadomość<textarea name="message" required className="mt-2 min-h-28 w-full rounded-xl border border-white/15 bg-white/95 px-4 py-3 text-base text-primary outline-none focus:ring-2 focus:ring-accent" placeholder="Czego potrzebujesz?" /></label><button type="submit" className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 font-bold text-accent-foreground transition hover:scale-[1.02]"><MessageCircle size={18} /> {sent ? 'Otwórzono WhatsApp ✓' : 'Wyślij przez WhatsApp'}</button><p className="mt-3 text-center text-xs text-white/60">Formularz otworzy rozmowę na WhatsApp: 577 867 712</p></form></div></section>

      <footer className="border-t border-white/10 bg-primary/70 px-5 pb-8 pt-14 text-white/60 backdrop-blur-xl lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <span className="flex items-center gap-3">
              <img src="/images/claandsweeped-logo.jpeg" alt="ClaAndSweeped" className="h-10 w-10 rounded-xl object-cover" />
              <span className="font-mono text-base font-bold text-white">ClaAndSweeped<span className="text-accent">.</span></span>
            </span>
            <p className="mt-4 max-w-xs text-sm leading-6">Profesjonalne sprzątanie mieszkań, domów i biur w Toruniu i okolicach.</p>
          </div>
          <div>
            <h3 className="font-mono text-sm font-bold uppercase tracking-[0.14em] text-white">Nawigacja</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#uslugi" className="transition hover:text-white">Usługi</a></li>
              <li><a href="#cennik" className="transition hover:text-white">Cennik</a></li>
              <li><a href="#kalkulator" className="transition hover:text-white">Kalkulator wyceny</a></li>
              <li><a href="#realizacje" className="transition hover:text-white">Realizacje</a></li>
              <li><a href="#opinie" className="transition hover:text-white">Opinie</a></li>
              <li><a href="#kontakt" className="transition hover:text-white">Kontakt</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-mono text-sm font-bold uppercase tracking-[0.14em] text-white">Informacje prawne</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="/regulamin" className="transition hover:text-white">Regulamin</a></li>
              <li><a href="/polityka-prywatnosci" className="transition hover:text-white">Polityka prywatności</a></li>
              <li><a href="/polityka-cookies" className="transition hover:text-white">Polityka cookies</a></li>
            </ul>
            <a href="https://wa.me/48577867712" target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent"><Phone size={15} /> 577 867 712</a>
            <div className="mt-5 flex items-center gap-3" aria-label="Media społecznościowe">
              <span aria-label="Facebook — link zostanie dodany później" title="Facebook — link zostanie dodany później" className="flex size-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-lg font-bold text-white/80">f</span>
              <span aria-label="Instagram — link zostanie dodany później" title="Instagram — link zostanie dodany później" className="flex size-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-lg font-semibold text-white/80">◎</span>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <span>Pon–Pt, 8:00–18:00 · Toruń i okolice</span>
          <span>© 2026 ClaAndSweeped. Wszelkie prawa zastrzeżone.</span>
        </div>
      </footer>

      <WhatsAppFab />
    </main>
  )
}
