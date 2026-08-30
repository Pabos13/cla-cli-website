import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal-page'

export const metadata: Metadata = {
  title: 'Regulamin | ClaAndSwaaped',
  description: 'Regulamin świadczenia usług sprzątania przez ClaAndSwaaped.',
}

export default function Page() {
  return (
    <LegalPage
      title="Regulamin usług"
      updated="30 sierpnia 2026"
      sections={[
        {
          heading: 'Postanowienia ogólne',
          body: (
            <p>
              Niniejszy regulamin określa zasady świadczenia usług sprzątania mieszkań, domów i biur przez ClaAndSwaaped
              na terenie Torunia i okolic. Złożenie zamówienia oznacza akceptację regulaminu.
            </p>
          ),
        },
        {
          heading: 'Zakres usług',
          body: (
            <p>
              Oferujemy sprzątanie jednorazowe oraz regularne, w tym sprzątanie ekologiczne. Szczegółowy zakres prac
              ustalany jest indywidualnie przed rozpoczęciem usługi.
            </p>
          ),
        },
        {
          heading: 'Zamówienia i wycena',
          body: (
            <p>
              Zamówienia przyjmujemy telefonicznie, przez WhatsApp (577 867 712) oraz formularz kontaktowy. Wycena jest
              bezpłatna i niezobowiązująca. Termin realizacji potwierdzamy indywidualnie.
            </p>
          ),
        },
        {
          heading: 'Płatności',
          body: (
            <p>
              Cena ustalana jest przed wykonaniem usługi na podstawie zakresu prac i metrażu. Formy płatności ustalamy
              indywidualnie z Klientem.
            </p>
          ),
        },
        {
          heading: 'Odwołanie i zmiana terminu',
          body: (
            <p>
              Termin można bezpłatnie odwołać lub zmienić z co najmniej 24-godzinnym wyprzedzeniem. Prosimy o kontakt
              przez WhatsApp lub telefonicznie.
            </p>
          ),
        },
        {
          heading: 'Reklamacje',
          body: (
            <p>
              Jeśli jakość usługi nie spełnia Twoich oczekiwań, zgłoś to w ciągu 24 godzin. Dołożymy starań, aby możliwie
              szybko poprawić niedociągnięcia bez dodatkowych kosztów.
            </p>
          ),
        },
      ]}
    />
  )
}
