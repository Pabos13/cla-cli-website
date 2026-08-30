import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal-page'

export const metadata: Metadata = {
  title: 'Polityka prywatności | ClaAndSweeped',
  description: 'Zasady przetwarzania danych osobowych przez ClaAndSweeped.',
}

export default function Page() {
  return (
    <LegalPage
      title="Polityka prywatności"
      updated="30 sierpnia 2026"
      sections={[
        {
          heading: 'Administrator danych',
          body: (
            <p>
              Administratorem Twoich danych osobowych jest ClaAndSweeped, świadczący usługi sprzątania na terenie Torunia
              i okolic. W sprawach związanych z ochroną danych skontaktuj się z nami przez WhatsApp pod numerem 577 867 712.
            </p>
          ),
        },
        {
          heading: 'Jakie dane zbieramy',
          body: (
            <p>
              Przetwarzamy dane, które podajesz dobrowolnie w formularzu kontaktowym lub wiadomości WhatsApp: imię,
              numer telefonu oraz treść wiadomości. Nie zbieramy danych wrażliwych.
            </p>
          ),
        },
        {
          heading: 'Cel przetwarzania',
          body: (
            <p>
              Dane wykorzystujemy wyłącznie w celu odpowiedzi na zapytanie, przygotowania wyceny oraz realizacji usługi
              sprzątania. Podstawą prawną jest podjęcie działań na Twoje żądanie oraz nasz prawnie uzasadniony interes.
            </p>
          ),
        },
        {
          heading: 'Okres przechowywania',
          body: (
            <p>
              Dane przechowujemy przez czas niezbędny do obsługi zapytania i realizacji usługi, a następnie przez okres
              wymagany przepisami prawa (np. podatkowymi) lub do momentu wniesienia sprzeciwu.
            </p>
          ),
        },
        {
          heading: 'Twoje prawa',
          body: (
            <p>
              Masz prawo dostępu do swoich danych, ich sprostowania, usunięcia, ograniczenia przetwarzania, przenoszenia
              oraz wniesienia sprzeciwu. Możesz też złożyć skargę do Prezesa Urzędu Ochrony Danych Osobowych.
            </p>
          ),
        },
        {
          heading: 'Odbiorcy danych',
          body: (
            <p>
              Twoje dane nie są sprzedawane. Mogą być powierzone wyłącznie zaufanym dostawcom usług (np. hosting,
              komunikator WhatsApp) w zakresie niezbędnym do kontaktu i realizacji usługi.
            </p>
          ),
        },
      ]}
    />
  )
}
