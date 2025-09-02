import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | NextServe - Veterinary Growth Solutions',
  description: 'Privacy Policy for NextServe veterinary website and booking system services. Learn how we protect your veterinary practice and client data.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://nextserve.org/privacy',
  },
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600">
            Last updated: January 17, 2024
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2>Information We Collect</h2>
          <p>
            We collect information you provide directly to us, such as when you create an account, 
            use our services, or contact us for support.
          </p>

          <h2>How We Use Your Information</h2>
          <p>
            We use the information we collect to provide, maintain, and improve our veterinary 
            website and booking system services.
          </p>

          <h2>Information Sharing</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personal information to third parties 
            without your consent, except as described in this policy.
          </p>

          <h2>Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information against 
            unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at 
            nextserveagency@gmail.com.
          </p>
        </div>
      </div>
    </main>
  )
}
