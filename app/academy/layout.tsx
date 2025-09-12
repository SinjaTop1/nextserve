import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NextServe Academy - Learn to Optimize Boring Businesses | Real Processes',
  description: 'Learn how to optimize boring service businesses and handle difficult clients. Get real process documents, client scripts, and case studies from actual projects. Free download.',
  keywords: 'boring business optimization, difficult clients, service business consulting, business process improvement, client management, business optimization consulting',
  openGraph: {
    title: 'NextServe Academy - Learn to Optimize Boring Businesses',
    description: 'Real processes and scripts for optimizing boring service businesses. Learn to handle difficult clients and build your consulting practice.',
    type: 'website',
    url: 'https://nextserve.org/academy',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NextServe Academy - Optimize Boring Businesses',
    description: 'Learn the real processes for helping boring businesses and handling difficult clients. Free process documents.',
  },
  alternates: {
    canonical: 'https://nextserve.org/academy',
  },
}

export default function AcademyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
