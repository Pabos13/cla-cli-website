'use client'

import { useMemo, useState } from 'react'
import { Calculator, MessageCircle } from 'lucide-react'

const types = [
  { id: 'standardowe', label: 'Standardowe', rate: 89, hoursPer: 30 },
  { id: 'regularne', label: 'Regularne', rate: 79, hoursPer: 30 },
  { id: 'generalne', label: 'Generalne', rate: 119, hoursPer: 18 },
] as const

const frequencies = [
  { id: 'jednorazowo', label: 'Jednorazowo', factor: 1 },
  { id: 'co-2-tygodnie', label: 'Co 2 tygodnie', factor: 0.95 },
  { id: 'co-tydzien', label: 'Co tydzień', factor: 0.9 },
] as const

export function PriceCalculator() {
  const [area, setArea] = useState(60)
  const [typeId, setTypeId] = useState<(typeof types)[number]['id']>('standardowe')
  const [freqId, setFreqId] = useState<(typeof frequencies)[number]['id']>('jednorazowo')

  const { hours, low, high } = useMemo(() => {
    const type = types.find((t) => t.id === typeId)!
    const freq = frequencies.find((f) => f.id === freqId)!
    const rawHours = Math.max(2, Math.round(area / type.hoursPer))
    const base = rawHours * type.rate * freq.factor
    return { hours: rawHours, low: Math.round(base / 10) * 10, high: Math.round((base * 1.25) / 10) * 10 }
  }, [area, typeId, freqId])

  function sendToWhatsApp() {
    const type = types.find((t) => t.id === typeId)!
    const freq = frequencies.find((f) => f.id === freqId)!
    const text = encodeURIComponent(
      `Dzień dobry! Chcę zapytać o wycenę sprzątania.\n- Metraż: ${area} m²\n- Rodzaj: ${type.label}\n- Częstotliwość: ${freq.label}\n- Szacunek ze strony: ${low}–${high} zł (${hours} h)`,
    )
    window.open(`https://wa.me/48577867712?text=${text}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="grid gap-8 rounded-3xl border border-white/15 bg-[rgba(12,30,54,0.55)] p-6 backdrop-blur-md sm:p-8 lg:grid-cols-[1.3fr_1fr]">
      <div className="flex flex-col gap-7">
        <div>
          <label htmlFor="area" className="flex items-center justify-between text-sm font-semibold text-white">
            Metraż <span className="font-mono text-accent">{area} m²</span>
          </label>
          <input
            id="area"
            type="range"
            min={20}
            max={200}
            step={5}
            value={area}
            onChange={(e) => setArea(Number(e.target.value))}
            className="mt-3 w-full accent-[var(--accent)]"
          />
          <div className="mt-1 flex justify-between text-xs text-white/50"><span>20 m²</span><span>200 m²</span></div>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold text-white">Rodzaj sprzątania</p>
          <div className="flex flex-wrap gap-2">
            {types.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setTypeId(t.id)}
                className={`rounded-full px-4 py-2.5 text-sm font-semibold transition ${typeId === t.id ? 'bg-accent text-accent-foreground' : 'border border-white/20 text-white/80 hover:bg-white/10'}`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold text-white">Częstotliwość</p>
          <div className="flex flex-wrap gap-2">
            {frequencies.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setFreqId(f.id)}
                className={`rounded-full px-4 py-2.5 text-sm font-semibold transition ${freqId === f.id ? 'bg-accent text-accent-foreground' : 'border border-white/20 text-white/80 hover:bg-white/10'}`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between rounded-2xl border border-accent/30 bg-accent/10 p-6">
        <div>
          <p className="flex items-center gap-2 text-sm font-semibold text-accent"><Calculator size={16} /> Szacunkowy koszt</p>
          <p className="mt-4 font-mono text-4xl font-bold text-white">{low}–{high} zł</p>
          <p className="mt-2 text-sm text-white/60">Orientacyjnie {hours} h pracy. Dokładną wycenę potwierdzimy po rozmowie.</p>
        </div>
        <button
          type="button"
          onClick={sendToWhatsApp}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 font-bold text-accent-foreground transition hover:scale-[1.02]"
        >
          <MessageCircle size={18} /> Wyślij zapytanie
        </button>
      </div>
    </div>
  )
}
