'use client'

import { useRef, useState } from 'react'

export function BeforeAfter({
  before,
  after,
  label,
}: {
  before: string
  after: string
  label: string
}) {
  const [pos, setPos] = useState(50)
  const ref = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  function move(clientX: number) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const pct = ((clientX - rect.left) / rect.width) * 100
    setPos(Math.min(100, Math.max(0, pct)))
  }

  return (
    <figure className="overflow-hidden rounded-3xl border border-[rgba(130,195,235,0.2)]">
      <div
        ref={ref}
        className="relative aspect-[4/3] w-full cursor-ew-resize select-none"
        onPointerDown={(e) => {
          dragging.current = true
          e.currentTarget.setPointerCapture(e.pointerId)
          move(e.clientX)
        }}
        onPointerMove={(e) => dragging.current && move(e.clientX)}
        onPointerUp={() => (dragging.current = false)}
      >
        {/* After (base) */}
        <img
          src={after || '/placeholder.svg'}
          alt={`${label} po sprzątaniu`}
          className="absolute inset-0 h-full w-full object-cover"
          draggable={false}
        />
        <span className="absolute bottom-3 right-3 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">
          PO
        </span>

        {/* Before (clipped overlay) */}
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
          <img
            src={before || '/placeholder.svg'}
            alt={`${label} przed sprzątaniem`}
            className="absolute inset-0 h-full w-full object-cover"
            style={{ width: ref.current?.offsetWidth ?? '100%', maxWidth: 'none' }}
            draggable={false}
          />
          <span className="absolute bottom-3 left-3 rounded-full bg-primary/80 px-3 py-1 text-xs font-bold text-white backdrop-blur">
            PRZED
          </span>
        </div>

        {/* Handle */}
        <div
          className="absolute inset-y-0 z-10 flex w-1 items-center justify-center bg-white/90"
          style={{ left: `${pos}%`, transform: 'translateX(-50%)' }}
        >
          <span className="flex size-9 items-center justify-center rounded-full border-2 border-white bg-primary text-white shadow-lg">
            <span aria-hidden className="text-xs font-bold tracking-tighter">
              {'<>'}
            </span>
          </span>
        </div>
      </div>
      <figcaption className="bg-[rgba(12,30,54,0.5)] px-4 py-3 text-center text-sm font-semibold text-white backdrop-blur">
        {label}
      </figcaption>
    </figure>
  )
}
