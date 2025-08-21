'use client'

import { useState } from 'react'
import { 
  Heart, 
  CheckCircle, 
  Mail, 
  MapPin,
  ArrowRight,
  Calendar,
  BarChart3,
  Target,
  Zap,
  UserPlus,
  DollarSign,
  Star,
  Shield,
  TrendingUp
} from 'lucide-react'
import BookingForm from './components/BookingForm'

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-40 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Heart className="h-8 w-8 text-primary-500 mr-2" />
              <span className="text-2xl font-bold text-gray-900">NextServe</span>
            </div>
            <button 
              onClick={() => setIsBookingOpen(true)}
              className="btn-primary text-sm md:text-base"
            >
              Book Free Call
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-12 md:pt-24 md:pb-16 bg-gradient-to-br from-cream-100 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto">
            <div className="animate-fade-in">
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-primary-800 leading-tight mb-6 md:mb-8">
                Add <span className="text-accent-500">€5,000+ Monthly Recurring Revenue</span> to Your Veterinary Practice in 90 Days
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-primary-600 mb-8 md:mb-12 font-semibold leading-relaxed px-2">
                Without hiring more staff, working longer hours, or expensive advertising. 
                <span className="text-accent-500 font-bold"> Guaranteed results or you don't pay.</span>
              </p>
              
              {/* Value proposition box */}
              <div className="bg-accent-500 text-white rounded-2xl p-4 md:p-6 mb-8 md:mb-12 mx-2 md:mx-auto max-w-4xl">
                <p className="text-lg md:text-xl font-bold mb-2">
                  ✅ Average client adds €8,400 recurring revenue in first 6 months
                </p>
                <p className="text-base md:text-lg">
                  Setup takes 2 hours. <span className="font-black">100% MONEY-BACK GUARANTEE</span>
                </p>
              </div>
              
              <button 
                onClick={() => setIsBookingOpen(true)}
                className="btn-primary text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 group shadow-2xl inline-flex items-center mx-2"
              >
                Get My Free Revenue Analysis
                <ArrowRight className="ml-2 md:ml-3 h-5 w-5 md:h-6 md:w-6 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-base md:text-lg text-gray-500 mt-3 md:mt-4 px-4">
                ⏰ Only 10 spots available this month
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-12 md:py-20 bg-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6 md:mb-8">
              Are You Tired of This?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-red-900/30 border border-red-500/50 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">😰</div>
              <h3 className="text-xl font-bold mb-3">Unpredictable Revenue</h3>
              <p className="text-gray-300">Some months are great, others barely cover costs. You never know what's coming.</p>
            </div>
            <div className="bg-red-900/30 border border-red-500/50 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">⏰</div>
              <h3 className="text-xl font-bold mb-3">Admin Nightmare</h3>
              <p className="text-gray-300">Spending hours on bookings, reminders, and no-shows instead of treating animals.</p>
            </div>
            <div className="bg-red-900/30 border border-red-500/50 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">📉</div>
              <h3 className="text-xl font-bold mb-3">One-Time Clients</h3>
              <p className="text-gray-300">Clients come once, then disappear. No loyalty, no recurring revenue.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 md:mb-8">
              Here's What We Do Instead
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We turn your clinic into a predictable revenue machine using our proven 3-step system
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            <div className="bg-primary-50 border border-primary-200 rounded-2xl p-8 text-center">
              <div className="bg-primary-500 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <span className="text-white font-black text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Membership System</h3>
              <p className="text-gray-700">Transform one-time visits into €50-150/month recurring revenue per client</p>
            </div>
            
            <div className="bg-success-50 border border-success-200 rounded-2xl p-8 text-center">
              <div className="bg-success-500 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <span className="text-white font-black text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Automation</h3>
              <p className="text-gray-700">Eliminate no-shows and admin work with automated booking and reminders</p>
            </div>
            
            <div className="bg-accent-50 border border-accent-200 rounded-2xl p-8 text-center">
              <div className="bg-accent-500 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <span className="text-white font-black text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Client Acquisition</h3>
              <p className="text-gray-700">Get 15-25 new clients monthly through Google optimization and referrals</p>
            </div>
          </div>

          {/* Results Box */}
          <div className="bg-success-500 text-white rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-black mb-6">The Result?</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-black mb-2">€8,400</div>
                <p className="text-lg">Average monthly recurring revenue added in 6 months</p>
              </div>
              <div>
                <div className="text-4xl font-black mb-2">15 hrs</div>
                <p className="text-lg">Time saved per week on admin tasks</p>
              </div>
              <div>
                <div className="text-4xl font-black mb-2">87%</div>
                <p className="text-lg">Client retention rate (vs 34% industry average)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 md:py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-primary-800 mb-6 md:mb-8">
              Choose Your Growth Level
            </h2>
            <p className="text-xl text-primary-600 max-w-4xl mx-auto leading-relaxed">
              Each plan builds on the previous one. Start where you're comfortable, upgrade when you're ready.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Starter Plan */}
            <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-200 p-8 relative">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-black text-gray-900 mb-4">Foundation</h3>
                <div className="text-4xl font-black text-primary-600 mb-2">€900</div>
                <p className="text-gray-600">One-time setup</p>
              </div>
              
              <div className="bg-success-500 text-white rounded-xl p-4 mb-6 text-center">
                <p className="font-bold text-lg">ROI: 4 members = investment back</p>
                <p className="text-sm">Then pure profit forever</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-success-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Professional website + booking system</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-success-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Membership system setup</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-success-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Automated reminders & payments</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-success-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Basic analytics dashboard</span>
                </li>
              </ul>

              <button
                onClick={() => setIsBookingOpen(true)}
                className="w-full bg-primary-500 hover:bg-primary-600 text-white font-bold py-4 px-6 rounded-lg text-center transition-all duration-200"
              >
                Get Started
              </button>
            </div>

            {/* Growth Plan - Most Popular */}
            <div className="bg-white rounded-2xl shadow-2xl border-4 border-accent-500 p-8 relative transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-accent-500 text-white px-6 py-2 rounded-full text-sm font-black">
                  MOST POPULAR
                </span>
              </div>
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-black text-gray-900 mb-4">Growth</h3>
                <div className="text-4xl font-black text-accent-600 mb-2">€1,000 + €850/mo</div>
                <p className="text-gray-600">Setup + monthly service</p>
              </div>
              
              <div className="bg-accent-500 text-white rounded-xl p-4 mb-6 text-center">
                <p className="font-bold text-lg">ROI: €4,000+ monthly from Google alone</p>
                <p className="text-sm">vs €850 cost = 470% ROI</p>
              </div>

              <p className="text-sm font-bold text-gray-900 mb-4">Everything in Foundation, plus:</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Google SEO + local optimization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Referral system automation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Monthly optimization calls</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Advanced analytics & ROI tracking</span>
                </li>
              </ul>

              <button
                onClick={() => setIsBookingOpen(true)}
                className="w-full bg-accent-500 hover:bg-accent-600 text-white font-bold py-4 px-6 rounded-lg text-center transition-all duration-200"
              >
                Get Started
              </button>
            </div>

            {/* Premium Plan */}
            <div className="bg-primary-800 text-white rounded-2xl shadow-xl p-8 relative">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-black mb-4">Scale</h3>
                <div className="text-4xl font-black text-primary-400 mb-2">€2,500 + €1,800/mo</div>
                <p className="text-gray-400">Complete done-for-you</p>
              </div>
              
              <div className="bg-primary-500/20 border border-primary-400 rounded-xl p-4 mb-6 text-center">
                <p className="font-bold text-lg text-primary-300">Completely hands-off growth</p>
                <p className="text-sm text-primary-400">We handle everything</p>
              </div>

              <p className="text-sm font-bold mb-4">Everything in Growth, plus:</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Done-for-you marketing campaigns</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Dedicated account manager</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Multi-location support</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Advanced analytics & reporting</span>
                </li>
              </ul>

              <button
                onClick={() => setIsBookingOpen(true)}
                className="w-full border-2 border-primary-400 text-primary-400 hover:bg-primary-400 hover:text-gray-900 font-bold py-4 px-6 rounded-lg text-center transition-all duration-200"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8">
              Our Iron-Clad Guarantee
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              We're so confident, we guarantee your success
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-success-50 rounded-3xl p-8 text-center border-2 border-success-200">
              <div className="bg-success-500 rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">90-Day Results</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                If you don't see measurable revenue increase in 90 days, <span className="font-bold text-success-600">we work for free until you do</span>.
              </p>
            </div>
            
            <div className="bg-accent-50 rounded-3xl p-8 text-center border-2 border-accent-200">
              <div className="bg-accent-500 rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <DollarSign className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">ROI Promise</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                If our system doesn't generate at least 3x your investment in 6 months, <span className="font-bold text-accent-600">get your money back</span>.
              </p>
            </div>
            
            <div className="bg-primary-50 rounded-3xl p-8 text-center border-2 border-primary-200">
              <div className="bg-primary-500 rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Zap className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">Minimal Effort</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Only <span className="font-bold text-primary-600">2 hours setup time</span> required from you. We handle the rest.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-8">
            Ready to Add €5,000+ Monthly Recurring Revenue?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Book your free strategy call. We'll analyze your practice and show you exactly how much revenue you can add in the next 90 days.
          </p>
          
          <div className="bg-accent-500 rounded-2xl p-8 max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl font-bold mb-4">On this 30-minute call, you'll get:</h3>
            <ul className="text-left space-y-3">
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" />
                <span>Custom revenue projection for your clinic</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" />
                <span>Exact strategy to get your first 20 members</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" />
                <span>No-pressure consultation (we'll tell you if we're not right for you)</span>
              </li>
            </ul>
          </div>
          
          <button
            onClick={() => setIsBookingOpen(true)}
            className="bg-accent-500 hover:bg-accent-600 text-white font-black py-6 px-12 rounded-xl text-2xl shadow-2xl transition-all duration-200 transform hover:-translate-y-1 mb-8 group inline-flex items-center"
          >
            Book My Free Revenue Analysis
            <ArrowRight className="ml-3 h-8 w-8 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <div className="bg-gray-100 text-gray-800 rounded-xl p-4 max-w-md mx-auto">
            <p className="font-bold text-lg">
              ⏰ 10 spots available this month
            </p>
            <p className="text-gray-600">
              Next intake starts Q2 2024
            </p>
          </div>
        </div>
      </section>

      {/* Contact/Footer */}
      <footer className="py-12 bg-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center mb-6">
                <Heart className="h-10 w-10 text-primary-400 mr-3" />
                <span className="text-3xl font-black">NextServe</span>
              </div>
              <p className="text-lg text-gray-300 mb-6">
                Turning Vienna's veterinary clinics into predictable, profitable businesses.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-primary-400 mr-4" />
                  <span className="text-lg">nextserveagency@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-primary-400 mr-4" />
                  <span className="text-lg">Vienna, Austria</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6">Quick Links</h3>
              <div className="grid grid-cols-2 gap-4 text-gray-300">
                <button onClick={() => setIsBookingOpen(true)} className="text-left hover:text-white transition-colors text-lg">Book Call</button>
                <a href="#" className="hover:text-white transition-colors text-lg">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors text-lg">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors text-lg">Guarantee</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400 text-lg">
              &copy; 2024 NextServe. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <BookingForm isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </main>
  )
}