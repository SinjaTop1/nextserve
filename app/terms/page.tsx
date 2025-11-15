import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | NextServe - Veterinary Growth Solutions',
  description: 'Terms of Service for NextServe veterinary website and booking system services. Understand our service terms and conditions.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://nextserve.org/terms',
  },
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-600">
            Last updated: January 17, 2024
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2>Acceptance of Terms</h2>
          <p>
            By accessing and using NextServe's veterinary website and booking system services, 
            you accept and agree to be bound by the terms and provision of this agreement.
          </p>

          <h2>Service Description</h2>
          <p>
            NextServe provides professional website creation, online booking systems, and 
            veterinary practice growth solutions for veterinary clinics in Vienna, Austria.
          </p>

          <h2>Free Diagnostic Service</h2>
          <p>
            Our free diagnostic service includes website creation, booking system setup, and 
            KPI dashboard installation at no cost. No credit card or payment information required.
          </p>

          <h2>Service Availability</h2>
          <p>
            We strive to provide continuous service availability but do not guarantee 
            uninterrupted access to our services.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            NextServe shall not be liable for any indirect, incidental, special, or 
            consequential damages resulting from the use of our services.
          </p>

          <h2>Contact Information</h2>
          <p>
            For questions regarding these Terms of Service, please contact us at 
            nextserveagency@gmail.com.
          </p>
        </div>
      </div>
    </main>
  )
}
