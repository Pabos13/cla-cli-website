import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { CookieConsent } from '@/components/cookie-consent'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  title: 'ClaAndSweeped | Profesjonalne sprzątanie w Toruniu',
  description:
    'Profesjonalne sprzątanie mieszkań, domów i biur w Toruniu i okolicach. Sprzątanie standardowe, regularne i generalne. Bezpłatna wycena i kontakt przez WhatsApp: 577 867 712.',
  keywords: ['sprzątanie Toruń', 'firma sprzątająca Toruń', 'sprzątanie mieszkań', 'sprzątanie biur', 'sprzątanie po remoncie'],
  generator: 'ClaAndSweeped',
  openGraph: {
    title: 'ClaAndSweeped | Profesjonalne sprzątanie w Toruniu',
    description: 'Sprzątanie mieszkań, domów i biur w Toruniu. Bezpłatna wycena, kontakt przez WhatsApp.',
    type: 'website',
    locale: 'pl_PL',
    siteName: 'ClaAndSweeped',
    images: [{ url: '/images/claandsweeped-share.jpeg', width: 1672, height: 942, alt: 'ClaAndSweeped — profesjonalne sprzątanie biur i mieszkań' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ClaAndSweeped | Profesjonalne sprzątanie w Toruniu',
    description: 'Profesjonalne sprzątanie mieszkań, domów i biur w Toruniu i okolicach.',
    images: ['/images/claandsweeped-share.jpeg'],
  },
  icons: { icon: '/images/claandsweeped-logo.jpeg' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HouseholdSupplyStore',
  name: 'ClaAndSweeped',
  description: 'Profesjonalne sprzątanie mieszkań, domów i biur w Toruniu i okolicach.',
  telephone: '+48577867712',
  areaServed: 'Toruń i okolice',
  address: { '@type': 'PostalAddress', addressLocality: 'Toruń', addressCountry: 'PL' },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '18:00',
  },
}

export const viewport: Viewport = { width: 'device-width', initialScale: 1, maximumScale: 1, colorScheme: 'dark', themeColor: '#102c4a' }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl" className="bg-background">
      <body className={`${geist.variable} ${geistMono.variable} antialiased`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Analytics />
        {children}
        <CookieConsent />
      </body>
    </html>
  )
}
