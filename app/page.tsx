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
import ScrollTriggeredVideo from './components/ScrollTriggeredVideo'

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-40 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-primary-500 mr-1.5 sm:mr-2" />
              <span className="text-xl sm:text-2xl font-bold text-gray-900">NextServe</span>
            </div>
            <button 
              onClick={() => setIsBookingOpen(true)}
              className="bg-red-500 hover:bg-red-600 text-white font-bold text-xs sm:text-sm md:text-base px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg border-2 border-yellow-400 animate-pulse whitespace-nowrap"
            >
              🎁 GET FREE WEBSITE
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-12 md:pt-24 md:pb-16 bg-gradient-to-br from-cream-100 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto">
            <div className="animate-fade-in">
              {/* FREE Offer Badge */}
              <div className="inline-block bg-red-500 text-white px-6 py-2 rounded-full text-lg font-black mb-6 animate-pulse">
                🎁 100% FREE - NO CATCH
              </div>
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-black text-primary-800 leading-tight mb-4 sm:mb-6 md:mb-8 px-2">
                Get Your <span className="text-accent-500">Complete Business Diagnosis</span> + Professional Website + Booking System
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary-600 mb-6 sm:mb-8 md:mb-12 font-semibold leading-relaxed px-4">
                We'll build you a professional website with online booking system AND a KPI dashboard - completely FREE. 
                <span className="text-accent-500 font-bold"> No strings attached. No credit card required.</span>
              </p>
              
              {/* FREE Value proposition box */}
              <div className="bg-gradient-to-r from-accent-500 to-green-600 text-white rounded-2xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 md:mb-12 mx-2 md:mx-auto max-w-5xl border-4 border-yellow-400">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black mb-4">🚀 YOU GET ALL THIS FOR FREE:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 text-left">
                  <div className="bg-white/20 rounded-lg p-3 sm:p-4">
                    <h4 className="font-bold text-base sm:text-lg mb-1 sm:mb-2">✅ Professional Website</h4>
                    <p className="text-xs sm:text-sm">Worth €2,000 - Mobile optimized, SEO ready</p>
                  </div>
                  <div className="bg-white/20 rounded-lg p-3 sm:p-4">
                    <h4 className="font-bold text-base sm:text-lg mb-1 sm:mb-2">✅ Online Booking System</h4>
                    <p className="text-xs sm:text-sm">Worth €1,500 - 24/7 automated appointments</p>
                  </div>
                  <div className="bg-white/20 rounded-lg p-3 sm:p-4 sm:col-span-2 md:col-span-1">
                    <h4 className="font-bold text-base sm:text-lg mb-1 sm:mb-2">✅ KPI Dashboard</h4>
                    <p className="text-xs sm:text-sm">Worth €800 - Track your clinic's performance</p>
                  </div>
                </div>
                <div className="bg-yellow-400 text-black rounded-lg p-3 mt-4">
                  <p className="text-lg font-black">Total Value: €4,300 - YOURS FREE!</p>
                </div>
              </div>
              
              <button 
                onClick={() => setIsBookingOpen(true)}
                className="bg-red-500 hover:bg-red-600 text-white font-black text-lg sm:text-xl md:text-2xl px-6 sm:px-8 md:px-12 lg:px-16 py-4 sm:py-5 md:py-6 lg:py-8 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-200 group inline-flex items-center mx-2 border-4 border-yellow-400 max-w-full"
              >
                <span className="block sm:hidden">🎁 GET FREE WEBSITE</span>
                <span className="hidden sm:block">🎁 GET MY FREE WEBSITE + DIAGNOSIS</span>
                <ArrowRight className="ml-2 sm:ml-3 h-6 w-6 sm:h-8 sm:w-8 group-hover:translate-x-2 transition-transform" />
              </button>
              <p className="text-lg md:text-xl text-red-600 font-black mt-4 px-4 animate-pulse">
                ⏰ ONLY 5 FREE SPOTS LEFT THIS WEEK!
              </p>
              <p className="text-base text-gray-600 mt-2">
                No payment required • Takes 5 minutes to apply • Ready in 48 hours
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FREE Diagnostic Process Section */}
      <section className="py-16 md:py-24 bg-white border-t-4 border-accent-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-primary-800 mb-6">
              Here's How Our <span className="text-accent-500">FREE Diagnosis</span> Works
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
              We diagnose your clinic's growth potential and build your complete digital foundation - 100% free
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Step 1 */}
            <div className="text-center">
              <div className="bg-accent-500 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <span className="text-white font-black text-3xl">1</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">5-Minute Application</h3>
              <p className="text-lg text-gray-600">
                Tell us about your clinic, current challenges, and goals. Takes less time than making coffee.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="bg-accent-500 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <span className="text-white font-black text-3xl">2</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">We Build Everything</h3>
              <p className="text-lg text-gray-600">
                Our team creates your professional website, booking system, and KPI dashboard in 48 hours.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="bg-accent-500 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <span className="text-white font-black text-3xl">3</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">You Get Everything FREE</h3>
              <p className="text-lg text-gray-600">
                Launch your new digital presence immediately. Start accepting online bookings and tracking performance.
              </p>
            </div>
          </div>

          {/* Why We Do This For Free - Enhanced with Video */}
          <div className="bg-gradient-to-r from-gray-50 to-cream-100 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-black text-primary-800 mb-6">
                "But Why Would You Do This For FREE?"
              </h3>
              <p className="text-xl text-gray-700 mb-6 max-w-4xl mx-auto leading-relaxed">
                Don't just take our word for it. Here's a personal message explaining exactly why we're doing this for free:
              </p>
            </div>

            {/* Video Container - Properly Sized */}
            <div className="max-w-sm mx-auto mb-12">
              <div className="relative mb-4">
                <ScrollTriggeredVideo 
                  src="/landingpagew.mov"
                  className="w-full aspect-video"
                />
              </div>
              {/* Video Title Below Video */}
              <div className="bg-white rounded-lg shadow-lg p-3 border-2 border-accent-500">
                <div className="flex items-center">
                  <div className="bg-accent-500 rounded-full p-1.5 mr-2">
                    <span className="text-white font-bold text-xs">▶</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-base">Why NextServe Works For Free</h4>
                    <p className="text-gray-600 text-xs">Personal message from our founder</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Content Below Video */}
            <div className="text-center">
              <p className="text-xl text-gray-700 mb-6 max-w-4xl mx-auto leading-relaxed">
                Simple. We know that once you see the quality of our work and the immediate results, 
                you'll want to work with us on scaling your practice further. It's our way of proving our value upfront.
              </p>
              <div className="bg-accent-500 text-white rounded-2xl p-6 max-w-3xl mx-auto">
                <p className="text-lg font-bold">
                  "Most agencies ask for money first, then deliver results. We deliver results first, then earn your business."
                </p>
                <p className="text-sm mt-2 opacity-90">- NextServe Promise</p>
              </div>
            </div>
          </div>

          {/* Second CTA */}
          <div className="text-center mt-16">
            <button 
              onClick={() => setIsBookingOpen(true)}
              className="bg-red-500 hover:bg-red-600 text-white font-black text-xl md:text-2xl px-12 md:px-16 py-6 md:py-8 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-200 group inline-flex items-center border-4 border-yellow-400"
            >
              🎁 CLAIM MY FREE WEBSITE NOW
              <ArrowRight className="ml-3 h-8 w-8 group-hover:translate-x-2 transition-transform" />
            </button>
            <p className="text-lg text-red-600 font-black mt-4 animate-pulse">
              ⚡ Next batch starts Monday - Don't miss out!
            </p>
          </div>
        </div>
      </section>

      {/* FAQ / Objection Handling Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-gray-50 to-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-primary-800 mb-6">
              "But Wait... What's The <span className="text-red-500">CATCH</span>?"
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We get this question a lot. Here are the most common concerns about our FREE diagnostic:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* FAQ 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-red-200">
              <div className="flex items-start mb-4">
                <div className="bg-red-500 rounded-full p-2 mr-4 mt-1">
                  <span className="text-white font-bold">Q</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    "Why would you build a €4,300 system for free?"
                  </h3>
                  <p className="text-gray-700">
                    Simple: We're confident in our work. Once you see the quality and results, 
                    you'll want to work with us to scale further. It's our way of earning your trust upfront 
                    instead of asking for it.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-red-200">
              <div className="flex items-start mb-4">
                <div className="bg-red-500 rounded-full p-2 mr-4 mt-1">
                  <span className="text-white font-bold">Q</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    "Will you try to sell me something afterward?"
                  </h3>
                  <p className="text-gray-700">
                    Only if YOU ask. We'll show you optional ways to scale further, but there's zero pressure. 
                    Your free system works perfectly on its own. Many clinics stick with just the free version.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-red-200">
              <div className="flex items-start mb-4">
                <div className="bg-red-500 rounded-full p-2 mr-4 mt-1">
                  <span className="text-white font-bold">Q</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    "Is this actually professional quality?"
                  </h3>
                  <p className="text-gray-700">
                    Absolutely. We use the same team and process for our free diagnostics as our paid clients. 
                    The only difference is you're not paying us (yet). We can't afford to deliver poor quality.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ 4 */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-red-200">
              <div className="flex items-start mb-4">
                <div className="bg-red-500 rounded-full p-2 mr-4 mt-1">
                  <span className="text-white font-bold">Q</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    "What if I don't like it?"
                  </h3>
                  <p className="text-gray-700">
                    Keep it anyway! It's yours forever, no strings attached. We're not going to take back 
                    your website because you don't want to work with us further. That would be petty.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="bg-accent-500 rounded-3xl p-8 md:p-12 text-white text-center">
            <h3 className="text-3xl font-black mb-8">Here's What Makes This Risk-Free For You:</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="bg-white/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-8 w-8" />
                </div>
                <h4 className="text-xl font-bold mb-2">No Contracts</h4>
                <p>No long-term commitments. Your free system is yours to keep forever.</p>
              </div>
              <div>
                <div className="bg-white/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h4 className="text-xl font-bold mb-2">No Credit Card</h4>
                <p>We don't even ask for payment information. Completely free means free.</p>
              </div>
              <div>
                <div className="bg-white/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Heart className="h-8 w-8" />
                </div>
                <h4 className="text-xl font-bold mb-2">Vienna-Based</h4>
                <p>We're local. You can find us, visit us, or meet us in person anytime.</p>
              </div>
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

      {/* Upgrade Paths Section */}
      <section className="py-12 md:py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <div className="bg-accent-500 text-white px-6 py-3 rounded-full text-lg font-bold inline-block mb-6">
              📈 AFTER YOUR FREE DIAGNOSIS
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-primary-800 mb-6 md:mb-8">
              Ready to Scale Even Further?
            </h2>
            <p className="text-xl text-primary-600 max-w-4xl mx-auto leading-relaxed">
              Once you see the results from your FREE website + booking system, here are your optional upgrade paths.
              <span className="text-accent-600 font-bold"> No pressure - your free system works great on its own!</span>
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {/* Starter Plan */}
            <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-200 p-6 sm:p-8 relative">
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
            <div className="bg-white rounded-2xl shadow-2xl border-4 border-accent-500 p-6 sm:p-8 relative transform sm:scale-105">
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
            <div className="bg-primary-800 text-white rounded-2xl shadow-xl p-6 sm:p-8 relative">
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-success-50 rounded-3xl p-6 sm:p-8 text-center border-2 border-success-200">
              <div className="bg-success-500 rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">90-Day Results</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                If you don't see measurable revenue increase in 90 days, <span className="font-bold text-success-600">we work for free until you do</span>.
              </p>
            </div>
            
            <div className="bg-accent-50 rounded-3xl p-6 sm:p-8 text-center border-2 border-accent-200">
              <div className="bg-accent-500 rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <DollarSign className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">ROI Promise</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                If our system doesn't generate at least 3x your investment in 6 months, <span className="font-bold text-accent-600">get your money back</span>.
              </p>
            </div>
            
            <div className="bg-primary-50 rounded-3xl p-6 sm:p-8 text-center border-2 border-primary-200">
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
      <section className="py-20 bg-primary-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-accent-900/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="bg-red-500 text-white px-8 py-3 rounded-full text-xl font-black inline-block mb-8 animate-pulse border-4 border-yellow-400">
            🚨 LAST CHANCE - FREE OFFER ENDS SOON!
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-8">
            Get Your <span className="text-yellow-400">€4,300 Value Package</span> Completely FREE
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto">
            Don't pay thousands for a website and booking system. Get it all FREE in our business diagnosis program.
            <span className="text-yellow-400 font-bold"> Limited spots available!</span>
          </p>
          
          <div className="bg-gradient-to-r from-accent-500 to-green-600 rounded-2xl p-8 max-w-4xl mx-auto mb-12 border-4 border-yellow-400">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">🎁 Your FREE Package Includes:</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0 text-yellow-400" />
                <span className="text-lg">Professional Website (€2,000 value)</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0 text-yellow-400" />
                <span className="text-lg">Online Booking System (€1,500 value)</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0 text-yellow-400" />
                <span className="text-lg">KPI Dashboard (€800 value)</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0 text-yellow-400" />
                <span className="text-lg">Complete Business Diagnosis</span>
              </div>
            </div>
            <div className="bg-yellow-400 text-black rounded-lg p-4 mt-6">
              <p className="text-xl font-black">Total Value: €4,300 - Yours FREE!</p>
            </div>
          </div>
          
          <button
            onClick={() => setIsBookingOpen(true)}
            className="bg-red-500 hover:bg-red-600 text-white font-black py-4 sm:py-6 md:py-8 px-6 sm:px-10 md:px-16 rounded-xl text-lg sm:text-xl md:text-2xl lg:text-3xl shadow-2xl transition-all duration-200 transform hover:scale-105 mb-6 sm:mb-8 group inline-flex items-center border-4 border-yellow-400 max-w-full"
          >
            🎁 CLAIM MY FREE €4,300 PACKAGE
            <ArrowRight className="ml-2 sm:ml-3 md:ml-4 h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 group-hover:translate-x-2 transition-transform" />
          </button>
          
          <div className="bg-yellow-400 text-black rounded-xl p-6 max-w-lg mx-auto animate-pulse">
            <p className="font-black text-xl mb-2">
              ⏰ ONLY 3 SPOTS LEFT THIS WEEK!
            </p>
            <p className="text-lg font-bold">
              Next free batch: Not until next month
            </p>
          </div>
          
          <p className="text-gray-400 mt-6 text-lg">
            No credit card • No contracts • No catch • Ready in 48 hours
          </p>
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