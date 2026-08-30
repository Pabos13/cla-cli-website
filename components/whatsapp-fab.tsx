import { Phone } from 'lucide-react'

export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/48577867712"
      target="_blank"
      rel="noreferrer"
      aria-label="Napisz do nas na WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-accent px-4 py-4 font-bold text-accent-foreground shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition hover:scale-105 sm:bottom-7 sm:right-7"
    >
      <Phone size={22} aria-hidden="true" />
      <span className="hidden sm:inline">Napisz na WhatsApp</span>
    </a>
  )
}
