import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal-page'

export const metadata: Metadata = {
  title: 'Polityka cookies | ClaAndSwaaped',
  description: 'Informacje o plikach cookie wykorzystywanych na stronie ClaAndSwaaped.',
}

export default function Page() {
  return (
    <LegalPage
      title="Polityka cookies"
      updated="30 sierpnia 2026"
      sections={[
        {
          heading: 'Czym są pliki cookie',
          body: (
            <p>
              Pliki cookie to niewielkie pliki tekstowe zapisywane na Twoim urządzeniu podczas przeglądania strony.
              Pomagają one w prawidłowym działaniu witryny oraz w analizie ruchu.
            </p>
          ),
        },
        {
          heading: 'Jakie cookie stosujemy',
          body: (
            <>
              <p>
                <strong className="text-white">Niezbędne</strong> — konieczne do działania strony, w tym zapamiętania Twojej
                decyzji o zgodzie na cookie.
              </p>
              <p>
                <strong className="text-white">Analityczne</strong> — pomagają nam zrozumieć, jak odwiedzający korzystają ze
                strony (np. Vercel Analytics), aby ją ulepszać.
              </p>
            </>
          ),
        },
        {
          heading: 'Zarządzanie zgodą',
          body: (
            <p>
              Przy pierwszej wizycie wyświetlamy pasek, na którym możesz zaakceptować lub odrzucić pliki cookie. Swoją
              decyzję możesz zmienić w każdej chwili, czyszcząc dane przeglądarki dla tej strony.
            </p>
          ),
        },
        {
          heading: 'Ustawienia przeglądarki',
          body: (
            <p>
              Możesz samodzielnie zarządzać plikami cookie w ustawieniach swojej przeglądarki, w tym je blokować lub
              usuwać. Ograniczenie cookie może wpłynąć na działanie niektórych funkcji strony.
            </p>
          ),
        },
      ]}
    />
  )
}
