import type { Metadata } from 'next'
import { Heart, Mail, MapPin, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact NextServe | Free Veterinary Website Consultation',
  description: 'Contact NextServe for your free veterinary website and booking system consultation. Vienna-based veterinary growth specialists ready to help.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://nextserve.org/contact',
  },
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
            Contact <span className="text-accent-500">NextServe</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to get your free veterinary website and booking system? 
            Get in touch with our Vienna-based team today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-primary-50 rounded-3xl p-8 lg:p-12">
            <div className="flex items-center mb-8">
              <Heart className="h-10 w-10 text-primary-500 mr-4" />
              <h2 className="text-3xl font-black text-gray-900">Get In Touch</h2>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-primary-500 rounded-full p-3 mr-6">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Email</h3>
                  <p className="text-gray-600">nextserveagency@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-primary-500 rounded-full p-3 mr-6">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Location</h3>
                  <p className="text-gray-600">Vienna, Austria</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-primary-500 rounded-full p-3 mr-6">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Response Time</h3>
                  <p className="text-gray-600">Within 24 hours</p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-white rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                🎁 Free Consultation Includes:
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>✅ Professional website (€2,000 value)</li>
                <li>✅ Online booking system (€1,500 value)</li>
                <li>✅ KPI dashboard (€800 value)</li>
                <li>✅ Complete business diagnosis</li>
              </ul>
              <div className="bg-accent-500 text-white rounded-lg p-3 mt-4 text-center">
                <p className="font-bold">Total Value: €4,300 - Yours FREE!</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="flex flex-col justify-center">
            <div className="bg-gradient-to-r from-accent-500 to-primary-600 rounded-3xl p-8 lg:p-12 text-white text-center">
              <h2 className="text-3xl font-black mb-6">
                Ready to Transform Your Practice?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Get your complete veterinary website and booking system absolutely free. 
                No credit card required.
              </p>
              
              <div className="bg-red-500 rounded-2xl p-6 mb-8 border-4 border-yellow-400">
                <p className="text-2xl font-black mb-2">⏰ LIMITED SPOTS</p>
                <p className="text-lg">Only 3 free consultations left this week</p>
              </div>
              
              <a 
                href="mailto:nextserveagency@gmail.com?subject=Free Veterinary Website Request&body=Hi NextServe,%0D%0A%0D%0AI'm interested in your free veterinary website and booking system offer.%0D%0A%0D%0AClinic Name:%0D%0ALocation:%0D%0ACurrent Website:%0D%0APhone:%0D%0A%0D%0AThanks!"
                className="bg-white text-accent-600 font-black py-4 px-8 rounded-xl text-xl hover:bg-gray-100 transition-all duration-200 inline-block"
              >
                📧 Send Free Consultation Request
              </a>
              
              <p className="text-sm mt-4 opacity-75">
                Or call us to discuss your needs immediately
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
