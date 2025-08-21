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
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {isSubmitted ? (
          <div className="p-8 text-center">
            <CheckCircle className="h-16 w-16 text-success-500 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Request Submitted Successfully!
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              We'll contact you within 24 hours to schedule your free strategy call.
            </p>
            <button
              onClick={onClose}
              className="bg-accent-500 hover:bg-accent-600 text-white font-bold py-3 px-8 rounded-lg"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900">Book Your Free Strategy Call</h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 p-2"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div className="bg-accent-50 border border-accent-200 rounded-lg p-4 mb-6">
                <div className="flex items-center mb-2">
                  <Calendar className="h-5 w-5 text-accent-600 mr-2" />
                  <span className="font-bold text-accent-800">30-Minute Call</span>
                </div>
                <p className="text-sm text-accent-700">
                  We'll analyze your current situation and show you exactly how to add €5,000+ monthly recurring revenue.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
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
                  <option value="">Choose your priority</option>
                  <option value="full-system">Complete Growth System (Most Popular)</option>
                  <option value="booking-only">Online Booking System Only</option>
                  <option value="website-only">Professional Website Only</option>
                  <option value="marketing">Marketing & Client Acquisition</option>
                  <option value="membership">Membership Program Setup</option>
                </select>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <div className="flex items-start">
                  <Target className="h-5 w-5 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">What to expect on the call:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Analysis of your current client acquisition</li>
                      <li>• Custom growth strategy for your clinic</li>
                      <li>• Exact ROI projections for your situation</li>
                      <li>• No-pressure consultation (we'll tell you if we're not a good fit)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent-500 hover:bg-accent-600 disabled:bg-gray-400 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-200"
              >
                {isSubmitting ? 'Submitting...' : 'Book My Free Strategy Call'}
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
