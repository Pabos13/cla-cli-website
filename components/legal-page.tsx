import Link from 'next/link'
import { ArrowLeft, Sparkles } from 'lucide-react'

type Section = { heading: string; body: React.ReactNode }

export function LegalPage({ title, updated, sections }: { title: string; updated: string; sections: Section[] }) {
  return (
    <main className="min-h-screen text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-primary/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-5 py-4 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-xl bg-accent text-accent-foreground"><Sparkles size={20} /></span>
            <span className="font-mono text-sm font-bold tracking-tight text-white">ClaAndSwaaped<span className="text-accent">.</span></span>
          </Link>
          <Link href="/" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10">
            <ArrowLeft size={16} /> Strona główna
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-4xl px-5 pb-24 pt-32 lg:px-8">
        <div className="rounded-3xl border border-white/15 bg-primary/55 p-6 backdrop-blur-xl sm:p-10">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-accent">Dokument</p>
          <h1 className="text-balance font-mono text-4xl font-bold tracking-tight text-white sm:text-5xl">{title}</h1>
          <p className="mt-4 text-sm text-white/55">Ostatnia aktualizacja: {updated}</p>

          <div className="mt-10 space-y-8">
            {sections.map((section, index) => (
              <section key={section.heading}>
                <h2 className="font-mono text-xl font-bold text-white">
                  <span className="mr-2 text-accent">{String(index + 1).padStart(2, '0')}.</span>
                  {section.heading}
                </h2>
                <div className="mt-3 space-y-3 leading-7 text-white/75">{section.body}</div>
              </section>
            ))}
          </div>
        </div>
      </article>
    </main>
  )
}
