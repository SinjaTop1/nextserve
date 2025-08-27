import type { Metadata } from 'next'
import './globals.css'
import GoogleAnalytics from './components/GoogleAnalytics'
import StructuredData from './components/StructuredData'

export const metadata: Metadata = {
  metadataBase: new URL('https://nextserve.org'),
  title: 'Free Veterinary Website + €5,000+ Monthly Revenue System | NextServe Vienna',
  description: 'Get your professional veterinary website + online booking system + KPI dashboard completely FREE. Add €5,000+ monthly recurring revenue to your Vienna vet practice in 90 days. No credit card required.',
  keywords: 'free veterinary website, vet clinic marketing Vienna, veterinary online booking system, pet clinic growth, veterinary membership programs, Vienna veterinary services, vet practice automation, veterinary recurring revenue, pet clinic SEO, veterinary digital marketing',
  authors: [{ name: 'NextServe Agency' }],
  creator: 'NextServe - Veterinary Growth Solutions',
  publisher: 'NextServe Agency',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_AT',
    url: 'https://nextserve.org',
    siteName: 'NextServe - Veterinary Growth Solutions',
    title: 'Free Veterinary Website + €5,000+ Monthly Revenue System',
    description: 'Get your professional veterinary website + online booking system + KPI dashboard completely FREE. Add €5,000+ monthly recurring revenue to your Vienna vet practice.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'NextServe - Free Veterinary Website and Growth System',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Veterinary Website + €5,000+ Monthly Revenue System',
    description: 'Get your professional veterinary website + online booking system completely FREE. Vienna veterinary practice growth specialists.',
    images: ['/og-image.jpg'],
    creator: '@NextServeAgency',
  },
  alternates: {
    canonical: 'https://nextserve.org',
    languages: {
      'en-AT': 'https://nextserve.org',
      'de-AT': 'https://nextserve.org/de',
    },
  },
  category: 'Veterinary Services',
  classification: 'Business Services',
  icons: {
    icon: '/favicon.svg',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <GoogleAnalytics />
        <StructuredData />
        {children}
      </body>
    </html>
  )
}
