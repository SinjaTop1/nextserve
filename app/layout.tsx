import type { Metadata } from 'next'
import './globals.css'
import GoogleAnalytics from './components/GoogleAnalytics'
import StructuredData from './components/StructuredData'

export const metadata: Metadata = {
  metadataBase: new URL('https://nextserve.org'),
  title: 'Join the Waitlist - NextServe',
  description: 'Be the first to know when our all-in-one veterinary subscription model arrives at your vet. Preventive care that saves pets and money.',
  keywords: 'veterinary subscription, preventive pet care, vet care waitlist, pet health subscription',
  authors: [{ name: 'NextServe Agency' }],
  creator: 'NextServe Agency',
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
    siteName: 'NextServe',
    title: 'Join the Waitlist - NextServe',
    description: 'Be the first to know when our all-in-one veterinary subscription model arrives at your vet. Preventive care that saves pets and money.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'NextServe - Contact Us',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Join the Waitlist - NextServe',
    description: 'Be the first to know when our all-in-one veterinary subscription model arrives at your vet.',
    images: ['/og-image.jpg'],
    creator: '@NextServeAgency',
  },
  alternates: {
    canonical: 'https://nextserve.org/',
    languages: {
      'en-AT': 'https://nextserve.org/',
      'de-AT': 'https://nextserve.org/de/',
    },
  },
  category: 'Business Services',
  classification: 'Contact Page',
  icons: {
    icon: '/N.png',
    apple: '/N.png',
    shortcut: '/N.png',
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
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <GoogleAnalytics />
        <StructuredData />
        {children}
      </body>
    </html>
  )
}
