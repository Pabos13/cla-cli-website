import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  title: 'ClaAndSwaaped | Profesjonalne sprzątanie w Toruniu',
  description: 'Profesjonalne sprzątanie mieszkań, domów i biur w Toruniu.',
  generator: 'ClaAndSwaaped',
}

export const viewport: Viewport = { width: 'device-width', initialScale: 1, maximumScale: 1, colorScheme: 'dark', themeColor: '#102c4a' }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pl" className="bg-background"><body className={`${geist.variable} ${geistMono.variable} antialiased`}><Analytics />{children}</body></html>
}
