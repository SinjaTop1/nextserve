import type { Metadata } from 'next'
import './globals.css'
import GoogleAnalytics from './components/GoogleAnalytics'

export const metadata: Metadata = {
  title: 'NextServe - Add €5,000+ Monthly Revenue to Your Veterinary Practice',
  description: 'Add €5,000+ monthly recurring revenue to your veterinary practice in 90 days. Guaranteed results or you don\'t pay. Professional membership systems, automation, and client acquisition for Vienna veterinary clinics.',
  keywords: 'veterinary marketing, vet clinic growth, Vienna veterinary, pet clinic marketing, veterinary membership, vet referrals, recurring revenue, veterinary automation',
  icons: {
    icon: '/favicon.svg',
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
        {children}
      </body>
    </html>
  )
}
