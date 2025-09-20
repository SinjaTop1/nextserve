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
  Shield,
  TrendingUp,
  Star
} from 'lucide-react'
import BookingForm from './components/BookingForm'
import ScrollTriggeredVideo from './components/ScrollTriggeredVideo'
import { trackEvent } from './components/GoogleAnalytics'

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  const handleBookingClick = (source: string) => {
    trackEvent('cta_click', 'booking', source, 1)
    setIsBookingOpen(true)
  }

  return (
    <main className="min-h-screen bg-white text-primary-600">
      {/* Navigation */}
      <header>
        <nav
          className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-40 border-b border-cream-200"
          role="navigation"
          aria-label="Main navigation"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <Heart className="h-6 w-6 sm:h-7 sm:w-7 text-accent-500 mr-2" aria-hidden="true" />
                <span className="text-xl sm:text-2xl font-semibold text-primary-700">NextServe</span>
              </div>
              <div className="flex items-center space-x-4">
                <a
                  href="/academy"
                  className="text-sm sm:text-base text-primary-500 hover:text-primary-700 font-medium transition-colors hidden sm:block"
                >
                  Academy
                </a>
                <button
                  onClick={() => handleBookingClick('nav_button')}
                  className="inline-flex items-center rounded-lg bg-accent-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-accent-600"
                  aria-label="Book an introductory call"
                >
                  Book an intro call
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-20 md:pt-28 md:pb-24 bg-gradient-to-b from-cream-50 via-white to-white" aria-labelledby="hero-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent-100 px-4 py-2 text-sm font-medium text-accent-700">
              <Heart className="h-4 w-4" aria-hidden="true" />
              A new path for modern veterinary clinics
            </div>
            <h1
              id="hero-heading"
              className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-700 leading-tight"
            >
              Grow beyond a full calendar by guiding pet families into preventive wellness care.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-primary-500 leading-relaxed">
              When every appointment slot is already taken, revenue only grows if the business model changes. NextServe helps
              clinics evolve from emergency care that clients dread into wellness memberships that owners understand, love, and
              keep renewing all year round.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => handleBookingClick('hero_primary')}
                className="inline-flex items-center justify-center rounded-lg bg-accent-500 px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-accent-600"
              >
                Book a friendly strategy call
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </button>
              <button
                onClick={() => handleBookingClick('hero_secondary')}
                className="inline-flex items-center justify-center rounded-lg border border-accent-200 px-6 py-3 text-base font-semibold text-accent-600 transition-colors hover:border-accent-300"
              >
                Explore the complimentary diagnosis
              </button>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Complimentary assessment • Tailored to your clinic • No obligation
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-cream-200 px-3 py-1 text-xs font-medium uppercase tracking-wide text-primary-500">
                The challenge
              </div>
              <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-primary-700">
                Fully booked doesn’t equal sustainable growth.
              </h2>
              <p className="mt-4 text-lg text-primary-500 leading-relaxed">
                Your team is already giving everything during urgent visits. Without a new model, the only way to increase
                revenue is longer hours or higher prices—and nobody wants that. To grow, clinics need a preventive relationship
                with pet families that keeps them engaged between emergencies.
              </p>
              <p className="mt-4 text-lg text-primary-500 leading-relaxed">
                We partner with you to reimagine the experience as an ongoing wellness journey that keeps pets healthy and
                creates clarity around pricing, value, and expectations.
              </p>
            </div>
            <div className="bg-cream-50 border border-cream-200 rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-primary-700">With NextServe you can:</h3>
              <ul className="mt-6 space-y-4 text-primary-500">
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 text-accent-500" aria-hidden="true" />
                  <span>Unlock predictable recurring revenue without extending your working day.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 text-accent-500" aria-hidden="true" />
                  <span>Design preventive plans that keep pets healthy all year and reassure their families.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 text-accent-500" aria-hidden="true" />
                  <span>Educate clients with transparent communication that builds lasting trust.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 text-accent-500" aria-hidden="true" />
                  <span>Shift focus from stressful emergencies to proactive, planned care for every patient.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Preventive Care Model Section */}
      <section className="py-16 md:py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-semibold text-primary-700">
              A preventive care model pet owners truly value.
            </h2>
            <p className="mt-4 text-lg text-primary-500 leading-relaxed">
              We co-create memberships, education, and digital experiences that feel natural to clients and effortless for your
              team. No gimmicks—just thoughtful design backed by data.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-8 shadow-sm border border-cream-200">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-100 text-accent-600">
                <Calendar className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-primary-700">Membership journeys</h3>
              <p className="mt-3 text-primary-500">
                Create clear wellness plans with regular touchpoints, reminders, and seasonal guidance families can follow.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-sm border border-cream-200">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-100 text-accent-600">
                <BarChart3 className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-primary-700">Clarity on value</h3>
              <p className="mt-3 text-primary-500">
                Provide transparent pricing, projected outcomes, and dashboards that help owners see the ongoing impact.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-sm border border-cream-200">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-100 text-accent-600">
                <Star className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-primary-700">Delightful experiences</h3>
              <p className="mt-3 text-primary-500">
                Offer exclusive perks, wellness days, and educational resources that keep families engaged and referring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Roadmap */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-semibold text-primary-700">How our partnership unfolds</h2>
            <p className="mt-4 text-lg text-primary-500 leading-relaxed">
              We guide your clinic and team at every stage, from the initial diagnosis to a thriving preventive care program.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-cream-200 bg-cream-50 p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-accent-600">
                <Target className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-primary-700">1. Discover</h3>
              <p className="mt-3 text-primary-500">
                We start with a complimentary business diagnosis to understand capacity, pricing, and client sentiment.
              </p>
            </div>
            <div className="rounded-2xl border border-cream-200 bg-cream-50 p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-accent-600">
                <Heart className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-primary-700">2. Co-design</h3>
              <p className="mt-3 text-primary-500">
                Together we craft your wellness memberships, digital experience, and team playbooks tailored to your clinic.
              </p>
            </div>
            <div className="rounded-2xl border border-cream-200 bg-cream-50 p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-accent-600">
                <TrendingUp className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-primary-700">3. Launch & evolve</h3>
              <p className="mt-3 text-primary-500">
                We activate the program with your team, measure adoption, and keep refining to deliver consistent growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Complimentary Diagnosis Details */}
      <section className="py-16 md:py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-primary-700">What your complimentary diagnosis includes</h2>
              <p className="mt-4 text-lg text-primary-500 leading-relaxed">
                We invest time upfront because we believe in long-term partnerships. Your team receives tangible assets you can
                start using immediately.
              </p>
              <ul className="mt-8 space-y-4 text-primary-500">
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 text-accent-500" aria-hidden="true" />
                  <span>A tailored clinic assessment covering demand, capacity, and pricing opportunities.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 text-accent-500" aria-hidden="true" />
                  <span>A refreshed web presence with online booking that reflects your new wellness positioning.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 text-accent-500" aria-hidden="true" />
                  <span>A KPI dashboard so you can track membership adoption and retention from day one.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 text-accent-500" aria-hidden="true" />
                  <span>Communication templates that help your team explain the shift with confidence.</span>
                </li>
              </ul>
              <button
                onClick={() => handleBookingClick('diagnosis_cta')}
                className="mt-10 inline-flex items-center justify-center rounded-lg bg-accent-500 px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-accent-600"
              >
                Schedule my complimentary diagnosis
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            <div className="rounded-3xl bg-white p-6 md:p-8 shadow-sm border border-cream-200">
              <h3 className="text-xl font-semibold text-primary-700">Hear why we offer this upfront</h3>
              <p className="mt-3 text-primary-500">
                Founder Lea shares why we invest in partner clinics before any commitment and how the wellness revolution is
                reshaping the veterinary industry.
              </p>
              <div className="mt-6 rounded-2xl overflow-hidden shadow-sm">
                <ScrollTriggeredVideo src="/landingpagew.mov" className="w-full rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-primary-700">Our commitment to your clinic</h2>
          <p className="mt-4 text-lg text-primary-500 leading-relaxed">
            There’s nothing else like this available to veterinary teams today. We’re building the future of preventive care
            alongside the clinics who choose to partner with us.
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-3 text-left">
            <div className="rounded-2xl border border-cream-200 bg-cream-50 p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-accent-600">
                <Shield className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-primary-700">Transparent partnership</h3>
              <p className="mt-2 text-primary-500">
                Clear milestones, shared data, and collaborative planning so your team always knows what’s next.
              </p>
            </div>
            <div className="rounded-2xl border border-cream-200 bg-cream-50 p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-accent-600">
                <TrendingUp className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-primary-700">Measured outcomes</h3>
              <p className="mt-2 text-primary-500">
                Recurring revenue growth, client retention, and wellness engagement tracked with your dashboard.
              </p>
            </div>
            <div className="rounded-2xl border border-cream-200 bg-cream-50 p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-accent-600">
                <Star className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-primary-700">Dedicated guidance</h3>
              <p className="mt-2 text-primary-500">
                Strategy workshops, team training, and ongoing optimisation tailored to your clinic’s pace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-primary-700">
            Ready to lead the preventive care revolution in your city?
          </h2>
          <p className="mt-4 text-lg text-primary-500 leading-relaxed">
            Let’s talk about your goals and design a membership experience that feels great for your team and unforgettable for
            pet families.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => handleBookingClick('final_primary')}
              className="inline-flex items-center justify-center rounded-lg bg-accent-500 px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-accent-600"
            >
              Start the conversation
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </button>
            <button
              onClick={() => handleBookingClick('final_secondary')}
              className="inline-flex items-center justify-center rounded-lg border border-accent-200 px-6 py-3 text-base font-semibold text-accent-600 transition-colors hover:border-accent-300"
            >
              Request the complimentary diagnosis
            </button>
          </div>
          <p className="mt-4 text-sm text-gray-500">We partner with a limited number of clinics to ensure hands-on support.</p>
        </div>
      </section>

      {/* Contact/Footer */}
      <footer className="py-12 bg-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center mb-6">
                <Heart className="h-9 w-9 text-accent-500 mr-3" />
                <span className="text-3xl font-semibold">NextServe</span>
              </div>
              <p className="text-lg text-gray-300 mb-6">
                Partnering with veterinary clinics to build preventive care programs pets and families love.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-gray-300 mr-4" />
                  <span className="text-lg text-gray-200">nextserveagency@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-gray-300 mr-4" />
                  <span className="text-lg text-gray-200">Vienna, Austria</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">Quick Links</h3>
              <div className="grid grid-cols-2 gap-4 text-gray-300">
                <button
                  onClick={() => handleBookingClick('footer_booking')}
                  className="text-left transition-colors hover:text-white text-lg"
                >
                  Book a call
                </button>
                <a href="/privacy" className="hover:text-white transition-colors text-lg">
                  Privacy Policy
                </a>
                <a href="/terms" className="hover:text-white transition-colors text-lg">
                  Terms of Service
                </a>
                <a href="/contact" className="hover:text-white transition-colors text-lg">
                  Contact
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-700 mt-12 pt-8 text-center">
            <p className="text-gray-400 text-lg">&copy; 2024 NextServe. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <BookingForm isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </main>
  )
}
