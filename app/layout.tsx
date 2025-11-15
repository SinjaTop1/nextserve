import type { Metadata } from 'next'
import './globals.css'
import GoogleAnalytics from './components/GoogleAnalytics'
import StructuredData from './components/StructuredData'

export const metadata: Metadata = {
  metadataBase: new URL('https://nextserve.org'),
  title: 'NextServe - Get in Touch | Contact Us',
  description: 'Connect with NextServe. Book a meeting, call us, or send us an email. We\'re based in Vienna, Austria and ready to help.',
  keywords: 'NextServe contact, Vienna business services, book meeting, schedule call',
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
    title: 'NextServe - Get in Touch | Contact Us',
    description: 'Connect with NextServe. Book a meeting, call us, or send us an email. We\'re based in Vienna, Austria.',
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
    title: 'NextServe - Get in Touch | Contact Us',
    description: 'Connect with NextServe. Book a meeting, call us, or send us an email.',
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
    <html lang="en">
      <body className="antialiased">
        <GoogleAnalytics />
        <StructuredData />
        {children}
      </body>
    </html>
  )
}
