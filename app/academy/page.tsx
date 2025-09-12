'use client'

import { useState } from 'react'
import { 
  Heart, 
  CheckCircle, 
  Mail, 
  MapPin,
  ArrowRight,
  Users,
  Code,
  Target,
  Zap,
  FileText,
  Play,
  Award,
  TrendingUp,
  Building,
  Rocket
} from 'lucide-react'
import { trackEvent } from '../components/GoogleAnalytics'

export default function NextServeAcademy() {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    experience: ''
  })

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    trackEvent('template_download', 'academy', 'free_template', 1)
    
    try {
      const response = await fetch('https://formspree.io/f/mjkezrkg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          business: formData.business,
          experience: formData.experience,
          _subject: 'New Academy Waitlist Registration',
        }),
      })

      if (response.ok) {
        setIsFormOpen(false)
        setFormData({ name: '', email: '', business: '', experience: '' })
        alert('Thank you! You\'ve been added to the waitlist. We\'ll notify you when the course launches!')
      } else {
        alert('There was an error submitting your form. Please try again.')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      alert('There was an error submitting your form. Please try again.')
    }
  }

  const handleDownloadClick = (source: string) => {
    trackEvent('cta_click', 'academy', source, 1)
    setIsFormOpen(true)
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <header>
        <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-40 border-b border-gray-100" role="navigation" aria-label="Main navigation">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-primary-500 mr-1.5 sm:mr-2" aria-hidden="true" />
                <span className="text-xl sm:text-2xl font-bold text-gray-900">NextServe</span>
                <span className="text-sm font-semibold text-accent-500 ml-2 px-2 py-1 bg-accent-50 rounded">ACADEMY</span>
              </div>
              <div className="flex items-center space-x-4">
                <a href="/" className="text-gray-600 hover:text-gray-900 font-medium">← Back to Main</a>
                <button 
                  onClick={() => handleDownloadClick('nav_button')}
                  className="bg-accent-500 hover:bg-accent-600 text-white font-bold text-xs sm:text-sm md:text-base px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg whitespace-nowrap"
                  aria-label="Join waitlist for free course access"
                >
                  🎓 Join Waitlist
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-12 md:pt-24 md:pb-16 bg-gradient-to-br from-blue-50 to-indigo-100" aria-labelledby="hero-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto">
            <div className="animate-fade-in">
              {/* Pre-Registration Badge */}
              <div className="inline-block bg-gray-800 text-white px-6 py-2 rounded-full text-lg font-bold mb-6">
                🎓 Pre-Registration Open - Limited Spots
              </div>
              
              <h1 id="hero-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-black text-gray-800 leading-tight mb-4 sm:mb-6 md:mb-8 px-2">
                The Complete <span className="text-accent-500">Business Model Fixer</span> Course
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-8 md:mb-12 font-semibold leading-relaxed px-4">
                Everything I learned fixing outdated business models for boring businesses. By the end, you'll know exactly how to spot broken models, fix them, and convince clients they need your help.
                <span className="text-accent-500 font-bold"> Pre-register now and get it FREE when it launches.</span>
              </p>
              
              {/* Course Value Box */}
              <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-2xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 md:mb-12 mx-2 md:mx-auto max-w-5xl border-2 border-accent-500">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black mb-4">🎯 THE COMPLETE COURSE INCLUDES:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 text-left">
                  <div className="bg-white/20 rounded-lg p-3 sm:p-4">
                    <h4 className="font-bold text-base sm:text-lg mb-1 sm:mb-2">✅ Business Model Diagnosis</h4>
                    <p className="text-xs sm:text-sm">How to spot outdated models instantly</p>
                  </div>
                  <div className="bg-white/20 rounded-lg p-3 sm:p-4">
                    <h4 className="font-bold text-base sm:text-lg mb-1 sm:mb-2">✅ The Fix Framework</h4>
                    <p className="text-xs sm:text-sm">Step-by-step model transformation</p>
                  </div>
                  <div className="bg-white/20 rounded-lg p-3 sm:p-4 sm:col-span-2 md:col-span-1">
                    <h4 className="font-bold text-base sm:text-lg mb-1 sm:mb-2">✅ Client Conviction Scripts</h4>
                    <p className="text-xs sm:text-sm">How to explain why they need you</p>
                  </div>
                </div>
                <div className="bg-accent-500 text-white rounded-lg p-3 mt-4">
                  <p className="text-lg font-bold">✨ Pre-register now = Free access (Will be €297 after launch)</p>
                </div>
              </div>
              
              <button 
                onClick={() => handleDownloadClick('hero_main')}
                className="bg-accent-500 hover:bg-accent-600 text-white font-bold text-lg sm:text-xl md:text-2xl px-6 sm:px-8 md:px-12 lg:px-16 py-4 sm:py-5 md:py-6 lg:py-8 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-200 group inline-flex items-center mx-2 max-w-full"
              >
                <span className="block sm:hidden">🎓 Join Waitlist</span>
                <span className="hidden sm:block">🎓 Join Waitlist - Get Free Access</span>
                <ArrowRight className="ml-2 sm:ml-3 h-6 w-6 sm:h-8 sm:w-8 group-hover:translate-x-2 transition-transform" />
              </button>
              <p className="text-base text-gray-600 mt-4">
                Free access for waitlist members • €297 value • Launching in 2-3 weeks
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-gray-800 mb-6">
              The 3-Step <span className="text-accent-500">Business Model Fixer</span> System
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
              By the end of this course, you'll master the exact process I use to transform boring businesses
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Step 1 */}
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 text-center border-2 border-gray-200">
              <div className="bg-accent-500 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <span className="text-white font-bold text-2xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">SPOT: The Broken Business Model</h3>
              <p className="text-gray-700">
                <strong>Learn to instantly identify:</strong> Outdated pricing models, inefficient workflows, revenue leaks, and missed opportunities. I'll show you the 7 warning signs that scream "this business needs help."
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 text-center border-2 border-blue-200">
              <div className="bg-blue-500 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <span className="text-white font-bold text-2xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">FIX: Transform the Business Model</h3>
              <p className="text-gray-700">
                <strong>My exact framework for:</strong> Redesigning pricing structures, implementing recurring revenue, automating workflows, and creating predictable growth systems. Real examples from 20+ businesses.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 text-center border-2 border-indigo-200">
              <div className="bg-indigo-500 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <span className="text-white font-bold text-2xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">CONVINCE: Make Them Trust You</h3>
              <p className="text-gray-700">
                <strong>The hardest part:</strong> Word-for-word scripts to explain why they need your help, handle objections, overcome "we've tried everything," and position yourself as the obvious choice.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Template Preview Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-6">
              What's Actually <span className="text-accent-500">In The Course</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything I've learned, documented, and used. No gatekeeping - you get my complete process library.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Template Components */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">📋 Complete Course Materials:</h3>
              
              <div className="bg-white rounded-xl p-6 shadow-lg border border-accent-200">
                <div className="flex items-start">
                  <FileText className="h-6 w-6 text-accent-500 mr-4 mt-1" />
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Business Model Diagnostic Toolkit</h4>
                    <p className="text-gray-700">Checklists, frameworks, and assessment tools to instantly spot broken business models and quantify the opportunity.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-200">
                <div className="flex items-start">
                  <Zap className="h-6 w-6 text-blue-500 mr-4 mt-1" />
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">The Complete Fix Framework</h4>
                    <p className="text-gray-700">Step-by-step process for transforming any boring business model, with templates for pricing, automation, and recurring revenue.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-indigo-200">
                <div className="flex items-start">
                  <Play className="h-6 w-6 text-indigo-500 mr-4 mt-1" />
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Client Conviction Masterclass</h4>
                    <p className="text-gray-700">Word-for-word scripts, objection handling, and psychology tactics to make skeptical business owners trust your recommendations.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-purple-200">
                <div className="flex items-start">
                  <Code className="h-6 w-6 text-purple-500 mr-4 mt-1" />
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Real Case Study Library</h4>
                    <p className="text-gray-700">20+ detailed case studies with before/after analysis, including the failures and what went wrong.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* What Makes This Different */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">✨ Why Join the Waitlist:</h3>
              
              <div className="bg-gray-800 text-white rounded-xl p-6">
                <h4 className="text-lg font-bold mb-3">✅ Get It FREE (Worth €297)</h4>
                <p className="mb-4">This will be a paid course when it launches. Join the waitlist now and get lifetime access for free.</p>
              </div>

              <div className="bg-accent-500 text-white rounded-xl p-6">
                <h4 className="text-lg font-bold mb-3">✅ Complete System</h4>
                <p className="mb-4">Every single process, template, script, and case study. No gatekeeping - you get my complete methodology.</p>
              </div>

              <div className="bg-blue-500 text-white rounded-xl p-6">
                <h4 className="text-lg font-bold mb-3">✅ Limited Free Access</h4>
                <p className="mb-4">Only the first 100 people on the waitlist get free access. After that, it's €297.</p>
              </div>

              <div className="bg-indigo-500 text-white rounded-xl p-6">
                <h4 className="text-lg font-bold mb-3">✅ Launching Soon</h4>
                <p className="mb-4">Course is 90% complete. Waitlist members get access within 2-3 weeks.</p>
              </div>
            </div>
          </div>

          {/* Urgency CTA */}
          <div className="text-center">
            <div className="bg-gray-800 text-white rounded-2xl p-6 max-w-2xl mx-auto mb-8">
              <h3 className="text-2xl font-bold mb-4">⏳ Limited Free Access</h3>
              <p className="text-lg mb-4">73/100 waitlist spots taken. Once we reach 100, the course becomes paid.</p>
              <div className="bg-white/20 rounded-lg p-3">
                <p className="font-medium">Waitlist closes when we hit 100 people or course launches - whichever comes first.</p>
              </div>
            </div>
            
            <button 
              onClick={() => handleDownloadClick('template_preview')}
              className="bg-accent-500 hover:bg-accent-600 text-white font-bold text-xl md:text-2xl px-12 md:px-16 py-6 md:py-8 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-200 group inline-flex items-center"
            >
              🎓 Join Waitlist - Get Free Access
              <ArrowRight className="ml-3 h-8 w-8 group-hover:translate-x-2 transition-transform" />
            </button>
            <p className="text-lg text-gray-600 mt-4">
              Join the waitlist now - Course launches in 2-3 weeks
            </p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-6">
              Why I'm Sharing <span className="text-accent-500">This Stuff</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Story Content */}
            <div>
              <div className="bg-gradient-to-r from-accent-50 to-blue-50 rounded-2xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">The Real Story</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  I started this because I was frustrated with how many service businesses were stuck in the same boring patterns. 
                  Same problems, same manual processes, same unpredictable revenue.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  After working with a bunch of these businesses, I realized most consultants just give theory. 
                  I want to share the actual processes - including what doesn't work.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-accent-500 rounded-full p-2 mr-4 mt-1">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">No BS Approach</h4>
                    <p className="text-gray-700">I'll show you what actually works and what's just marketing fluff</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-500 rounded-full p-2 mr-4 mt-1">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">Learn From Failures</h4>
                    <p className="text-gray-700">I've made plenty of mistakes - you can learn from them instead of repeating them</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-500 rounded-full p-2 mr-4 mt-1">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">Build Your Own Thing</h4>
                    <p className="text-gray-700">Use this to start your own practice helping boring businesses - there's plenty of work</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Personal / Values */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-2xl p-8 text-center">
                <Users className="h-16 w-16 mx-auto mb-6 text-accent-400" />
                <h3 className="text-2xl font-bold mb-4">Just Me, Actually</h3>
                <p className="text-lg mb-6">
                  I'm based in Vienna and work with boring service businesses that need better systems. 
                  Not a big team, just someone who's figured out a few things.
                </p>
                <p className="text-accent-300 font-semibold">
                  "I'd rather teach you to do this yourself than sell you a fancy package."
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-accent-50 rounded-xl p-6 text-center">
                  <Award className="h-8 w-8 text-accent-500 mx-auto mb-3" />
                  <div className="text-2xl font-black text-gray-900">20+</div>
                  <p className="text-sm text-gray-600">Boring Businesses Helped</p>
                </div>
                <div className="bg-green-50 rounded-xl p-6 text-center">
                  <TrendingUp className="h-8 w-8 text-green-500 mx-auto mb-3" />
                  <div className="text-2xl font-black text-gray-900">Real</div>
                  <p className="text-sm text-gray-600">Working Systems</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Final CTA Section */}
      <section className="py-20 bg-gray-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-900/20 to-blue-900/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="bg-gray-800 text-white px-8 py-3 rounded-full text-xl font-bold inline-block mb-8">
            ⏳ Waitlist Closing Soon
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-8">
            Last Chance for <span className="text-accent-400">Free Access</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto">
            The Business Model Fixer Course will be €297 when it launches. 
            Pre-register now and get lifetime access completely free.
          </p>
          
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 max-w-4xl mx-auto mb-12 border-2 border-accent-500">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">✨ Complete Course (Worth €297):</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0 text-white" />
                <span className="text-lg">Business Model Diagnostic Toolkit</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0 text-white" />
                <span className="text-lg">Complete Fix Framework</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0 text-white" />
                <span className="text-lg">Client Conviction Scripts</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0 text-white" />
                <span className="text-lg">20+ Real Case Studies</span>
              </div>
            </div>
            <div className="bg-accent-500 text-white rounded-lg p-4 mt-6">
              <p className="text-xl font-bold">✨ Join Waitlist = Free Forever</p>
            </div>
          </div>
          
          <button
            onClick={() => handleDownloadClick('final_cta')}
            className="bg-accent-500 hover:bg-accent-600 text-white font-bold py-4 sm:py-6 md:py-8 px-6 sm:px-10 md:px-16 rounded-xl text-lg sm:text-xl md:text-2xl lg:text-3xl shadow-2xl transition-all duration-200 transform hover:scale-105 mb-6 sm:mb-8 group inline-flex items-center max-w-full"
          >
            🎓 Join Waitlist for Free Access
            <ArrowRight className="ml-2 sm:ml-3 md:ml-4 h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 group-hover:translate-x-2 transition-transform" />
          </button>
          
          <div className="bg-gray-100 text-gray-800 rounded-xl p-6 max-w-lg mx-auto mt-6">
            <p className="font-bold text-xl mb-2">
              ⏳ 27/100 Free Spots Remaining
            </p>
            <p className="text-lg">
              Waitlist closes when we reach 100 members
            </p>
          </div>
        </div>
      </section>

      {/* Contact/Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center mb-6">
                <Heart className="h-10 w-10 text-accent-400 mr-3" />
                <div>
                  <span className="text-3xl font-black">NextServe</span>
                  <span className="text-accent-400 font-bold ml-2">Academy</span>
                </div>
              </div>
              <p className="text-lg text-gray-300 mb-6">
                Teaching service businesses how to build predictable, profitable systems.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-accent-400 mr-4" />
                  <span className="text-lg">nextserveagency@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-accent-400 mr-4" />
                  <span className="text-lg">Vienna, Austria</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6">Quick Links</h3>
              <div className="grid grid-cols-2 gap-4 text-gray-300">
                <button onClick={() => handleDownloadClick('footer')} className="text-left hover:text-white transition-colors text-lg">Download Template</button>
                <a href="/" className="hover:text-white transition-colors text-lg">Main Site</a>
                <a href="/privacy" className="hover:text-white transition-colors text-lg">Privacy Policy</a>
                <a href="/terms" className="hover:text-white transition-colors text-lg">Terms of Service</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400 text-lg">
              &copy; 2024 NextServe Academy. All rights reserved. 
            </p>
          </div>
        </div>
      </footer>

      {/* Download Form Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Join the Waitlist</h3>
              <p className="text-gray-600">Get free access when the course launches (worth €297)</p>
            </div>
            
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              
              <div>
                <label htmlFor="business" className="block text-sm font-medium text-gray-700 mb-1">
                  What type of boring businesses interest you most?
                </label>
                <select
                  id="business"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  value={formData.business}
                  onChange={(e) => setFormData({...formData, business: e.target.value})}
                >
                  <option value="">Select what interests you</option>
                  <option value="veterinary">Veterinary/Medical Practices</option>
                  <option value="professional">Professional Services (Law, Accounting, etc.)</option>
                  <option value="home-services">Home Services (Plumbing, HVAC, etc.)</option>
                  <option value="consulting">Want to Start Consulting</option>
                  <option value="other">Other Boring Businesses</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                  Current Situation
                </label>
                <select
                  id="experience"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  value={formData.experience}
                  onChange={(e) => setFormData({...formData, experience: e.target.value})}
                >
                  <option value="">What's your situation?</option>
                  <option value="employee">Currently employed, thinking about consulting</option>
                  <option value="freelancer">Already freelancing, want to scale</option>
                  <option value="business-owner">Own a business, want to optimize others</option>
                  <option value="curious">Just curious about this stuff</option>
                </select>
              </div>
              
              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setIsFormOpen(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-accent-500 hover:bg-accent-600 text-white font-bold px-4 py-2 rounded-lg transition-colors"
                >
                  Join Waitlist
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  )
}
