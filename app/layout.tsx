import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NextServe - Veterinary Growth Solutions | Vienna',
  description: 'More Clients. Higher Retention. Predictable Growth for Your Veterinary Clinic. Vienna\'s only complete growth partner for veterinary clinics.',
  keywords: 'veterinary marketing, vet clinic growth, Vienna veterinary, pet clinic marketing, veterinary membership, vet referrals',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
