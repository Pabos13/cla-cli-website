'use client'

import { useEffect, useState } from 'react'

export function PageLoader() {
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const startedAt = Date.now()
    const duration = 2200
    const timer = window.setInterval(() => {
      const next = Math.min(100, Math.round(((Date.now() - startedAt) / duration) * 100))
      setProgress(next)
      if (next === 100) {
        window.clearInterval(timer)
        window.setTimeout(() => setVisible(false), 350)
      }
    }, 24)

    return () => window.clearInterval(timer)
  }, [])

  if (!visible) return null

  const radius = 86
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (progress / 100) * circumference

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-primary text-primary-foreground transition-opacity duration-500" role="status" aria-live="polite" aria-label={`Ładowanie strony: ${progress}%`}>
      <div className="relative flex size-64 items-center justify-center sm:size-72">
        <svg className="absolute inset-0 size-full -rotate-90" viewBox="0 0 200 200" aria-hidden="true">
          <circle cx="100" cy="100" r={radius} fill="none" className="stroke-white/10" strokeWidth="5" />
          <circle cx="100" cy="100" r={radius} fill="none" className="stroke-accent transition-[stroke-dashoffset] duration-75 ease-linear" strokeWidth="5" strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={offset} />
        </svg>
        <div className="flex flex-col items-center gap-4">
          <img src="/images/claandsweeped-logo.jpeg" alt="ClaAndSweeped" className="size-28 rounded-2xl object-cover shadow-xl sm:size-32" />
          <span className="font-mono text-lg font-bold tracking-[0.2em] text-accent">{progress}%</span>
        </div>
      </div>
    </div>
  )
}

