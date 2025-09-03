import type { Metadata } from 'next'
import { Heart, CheckCircle, Calendar, TrendingUp, Users, DollarSign } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Thank You - Meeting Booked | NextServe',
  description: 'Thank you for booking your free veterinary growth consultation with NextServe. We\'re excited to help transform your practice.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-cream-50 to-white">
      {/* Header */}
      <header className="py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <Heart className="h-8 w-8 text-primary-500 mr-2" />
            <span className="text-2xl font-bold text-gray-900">NextServe</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          {/* Success Icon */}
          <div className="bg-success-500 rounded-full p-6 w-24 h-24 mx-auto mb-8 flex items-center justify-center">
            <CheckCircle className="h-12 w-12 text-white" />
          </div>

          {/* Main Headlines */}
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Perfect! Your Call is Booked 🎉
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're excited to show you how to transform your clinic into a 
            <span className="text-accent-500 font-bold"> predictable revenue machine</span> with 
            better growth and retention strategies.
          </p>
        </div>

        {/* What to Expect Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12">
          <div className="text-center mb-8">
            <Calendar className="h-12 w-12 text-primary-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What to Expect on Our Call
            </h2>
            <p className="text-lg text-gray-600">
              This isn't a sales pitch. It's a genuine strategy session focused on your clinic's growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Growth Audit</h3>
              <p className="text-gray-700">
                We'll analyze your current setup and identify the biggest opportunities 
                for immediate revenue growth.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-accent-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Retention Strategy</h3>
              <p className="text-gray-700">
                Learn proven methods to turn one-time clients into loyal, 
                recurring customers who stay for years.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-success-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <DollarSign className="h-8 w-8 text-success-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Revenue Roadmap</h3>
              <p className="text-gray-700">
                Get a clear 90-day plan to add predictable monthly revenue 
                to your practice, starting immediately.
              </p>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl p-8 md:p-12 text-white text-center mb-12">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="text-yellow-400 text-2xl">★</div>
              ))}
            </div>
            <blockquote className="text-xl md:text-2xl font-medium mb-6 italic">
              "NextServe helped us add €8,400 in monthly recurring revenue within 6 months. 
              Our client retention went from 34% to 87%. The growth has been incredible."
            </blockquote>
            <div className="text-lg opacity-90">
              — Dr. Maria Schmidt, VetCare Vienna
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-cream-100 rounded-2xl p-8 text-center mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Before Our Call
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Think about your biggest challenges with client retention and revenue predictability. 
            The more specific you can be, the more valuable our session will be for you.
          </p>
          <div className="bg-white rounded-lg p-4 inline-block">
            <p className="text-sm text-gray-600 font-medium">
              📅 You should receive a calendar invite shortly with all the call details.
            </p>
          </div>
        </div>

        {/* Footer Message */}
        <div className="text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <Heart className="h-8 w-8 text-red-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Talk Soon!
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              We're genuinely excited to help you transform your veterinary practice. 
              This is going to be a great conversation.
            </p>
            <p className="text-sm text-gray-500">
              Questions before our call? Email us at 
              <a href="mailto:nextserveagency@gmail.com" className="text-primary-600 hover:text-primary-700 font-medium ml-1">
                nextserveagency@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
