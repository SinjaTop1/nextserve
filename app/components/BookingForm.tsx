'use client'

import { useState } from 'react'
import { CheckCircle, X, Calendar, Building, Users, Target } from 'lucide-react'

export default function BookingForm({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    clinicName: '',
    clinicSize: '',
    interest: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('https://formspree.io/f/mpwlvagj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          subject: `New Booking Request from ${formData.name} - ${formData.clinicName}`,
          message: `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Clinic: ${formData.clinicName}
Size: ${formData.clinicSize}
Interest: ${formData.interest}
          `
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      alert('There was an error submitting your request. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-2 sm:p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto">
        {isSubmitted ? (
          <div className="p-8 text-center bg-gradient-to-r from-green-50 to-accent-50">
            <div className="text-6xl mb-4">🎉</div>
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
            <h3 className="text-3xl font-black text-green-800 mb-4">
              Your FREE Package is Reserved!
            </h3>
            <div className="bg-green-500 text-white rounded-lg p-4 mb-6">
              <p className="text-lg font-bold mb-2">🎁 You're getting €4,300 worth of value FREE:</p>
              <div className="text-sm space-y-1">
                <div>✅ Professional Website (€2,000 value)</div>
                <div>✅ Online Booking System (€1,500 value)</div>
                <div>✅ KPI Dashboard (€800 value)</div>
              </div>
            </div>
            <p className="text-lg text-gray-700 mb-6">
              <span className="font-bold text-green-600">Next steps:</span><br/>
              We'll analyze your clinic and start building your website within 24 hours.<br/>
              Everything will be ready in 48 hours - completely FREE!
            </p>
            <button
              onClick={onClose}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-lg"
            >
              🎉 Awesome! Close
            </button>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center p-6 border-b border-gray-200 bg-gradient-to-r from-red-500 to-accent-500 text-white">
              <div>
                <div className="text-sm font-bold mb-1">🎁 100% FREE - NO CATCH</div>
                <h2 className="text-2xl font-bold">Claim Your FREE Website + Diagnosis</h2>
              </div>
              <button
                onClick={onClose}
                className="text-white hover:text-gray-200 p-2"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-4 sm:space-y-6">
              <div className="bg-gradient-to-r from-red-50 to-accent-50 border-2 border-red-200 rounded-lg p-4 sm:p-6 mb-4 sm:mb-6">
                <div className="text-center mb-4">
                  <div className="text-3xl mb-2">🎁</div>
                  <span className="font-black text-xl text-red-600">€4,300 VALUE - COMPLETELY FREE</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                  <div className="bg-white rounded-lg p-3 text-center border-2 border-red-200">
                    <div className="font-bold text-red-600">✅ Website</div>
                    <div className="text-gray-600">€2,000 value</div>
                  </div>
                  <div className="bg-white rounded-lg p-3 text-center border-2 border-red-200">
                    <div className="font-bold text-red-600">✅ Booking System</div>
                    <div className="text-gray-600">€1,500 value</div>
                  </div>
                  <div className="bg-white rounded-lg p-3 text-center border-2 border-red-200">
                    <div className="font-bold text-red-600">✅ KPI Dashboard</div>
                    <div className="text-gray-600">€800 value</div>
                  </div>
                </div>
                <p className="text-center text-sm text-red-700 font-bold mt-3">
                  No credit card required • Ready in 48 hours • Yours to keep forever
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 text-base"
                    placeholder="Dr. Maria Schmidt"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 text-base"
                    placeholder="maria@veterinaryclinic.at"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                  placeholder="+43 1 234 5678"
                />
              </div>

              <div>
                <label htmlFor="clinicName" className="block text-sm font-bold text-gray-700 mb-2">
                  Clinic Name *
                </label>
                <input
                  type="text"
                  id="clinicName"
                  name="clinicName"
                  required
                  value={formData.clinicName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                  placeholder="Vienna Pet Care Center"
                />
              </div>

              <div>
                <label htmlFor="clinicSize" className="block text-sm font-bold text-gray-700 mb-2">
                  Clinic Size *
                </label>
                <select
                  id="clinicSize"
                  name="clinicSize"
                  required
                  value={formData.clinicSize}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                >
                  <option value="">Select your clinic size</option>
                  <option value="solo">Solo Practice (1 vet)</option>
                  <option value="small">Small (2-3 vets)</option>
                  <option value="medium">Medium (4-6 vets)</option>
                  <option value="large">Large (7+ vets)</option>
                  <option value="multi">Multiple Locations</option>
                </select>
              </div>

              <div>
                <label htmlFor="interest" className="block text-sm font-bold text-gray-700 mb-2">
                  What are you most interested in? *
                </label>
                <select
                  id="interest"
                  name="interest"
                  required
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                >
                  <option value="">What's your biggest challenge?</option>
                  <option value="free-diagnosis">I want the FREE website + diagnosis (Most Popular)</option>
                  <option value="no-online-presence">No professional website</option>
                  <option value="manual-bookings">Still taking bookings by phone</option>
                  <option value="no-tracking">Can't track my clinic's performance</option>
                  <option value="low-revenue">Inconsistent monthly revenue</option>
                  <option value="other">Other challenge</option>
                </select>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-accent-50 border-2 border-green-200 rounded-lg p-4">
                <div className="flex items-start">
                  <Target className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-green-800 mb-2">🚀 What happens after you apply:</h4>
                    <ul className="text-sm text-green-700 space-y-1 font-medium">
                      <li>• We analyze your clinic's needs (24 hours)</li>
                      <li>• Our team builds your website + booking system (48 hours)</li>
                      <li>• You get everything delivered FREE - no strings attached</li>
                      <li>• Optional: Discuss growth opportunities (your choice)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-red-500 hover:bg-red-600 disabled:bg-gray-400 text-white font-black py-4 sm:py-6 px-4 sm:px-8 rounded-lg text-lg sm:text-xl transition-all duration-200 border-4 border-yellow-400 transform hover:scale-105"
              >
                {isSubmitting ? '⏳ Submitting...' : '🎁 CLAIM MY FREE €4,300 PACKAGE'}
              </button>

              <p className="text-xs text-gray-500 text-center">
                By submitting this form, you agree to receive communication from NextServe. 
                We respect your privacy and will never spam you.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
