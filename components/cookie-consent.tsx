'use client'

import { useEffect, useState } from 'react'
import { Cookie, X } from 'lucide-react'

const STORAGE_KEY = 'claandswaaped-cookie-consent'

export function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true)
    } catch {
      setVisible(true)
    }
  }, [])

  function decide(value: 'accepted' | 'rejected') {
    try {
      localStorage.setItem(STORAGE_KEY, value)
    } catch {
      /* ignore storage errors */
    }
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] px-4 pb-4 sm:px-6" role="dialog" aria-live="polite" aria-label="Zgoda na pliki cookie">
      <div className="mx-auto flex max-w-4xl flex-col gap-4 rounded-2xl border border-white/15 bg-primary/80 p-5 text-white shadow-2xl backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-xl bg-accent/20 text-accent">
            <Cookie size={18} />
          </span>
          <p className="text-sm leading-6 text-white/80">
            Używamy plików cookie, aby strona działała poprawnie i by analizować ruch. Szczegóły znajdziesz w{' '}
            <a href="/polityka-cookies" className="font-semibold text-accent underline underline-offset-2">Polityce cookies</a>.
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <button
            onClick={() => decide('rejected')}
            className="rounded-xl border border-white/20 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Odrzuć
          </button>
          <button
            onClick={() => decide('accepted')}
            className="rounded-xl bg-accent px-4 py-2.5 text-sm font-bold text-accent-foreground transition hover:scale-[1.03]"
          >
            Akceptuję
          </button>
          <button
            onClick={() => decide('rejected')}
            aria-label="Zamknij"
            className="rounded-lg p-2 text-white/60 transition hover:text-white sm:hidden"
          >
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  )
}
