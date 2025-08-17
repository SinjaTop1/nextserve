import { 
  Heart, 
  TrendingUp, 
  Users, 
  Star, 
  CheckCircle, 
  Phone, 
  Mail, 
  MapPin,
  ArrowRight,
  Award,
  Calendar,
  BarChart3,
  Target,
  Zap,
  Gift,
  UserPlus,
  DollarSign
} from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Heart className="h-8 w-8 text-primary-500 mr-2" />
              <span className="text-2xl font-bold text-gray-900">NextServe</span>
            </div>
            <a 
              href="#contact"
              className="btn-primary text-sm md:text-base"
            >
              Book Free Call
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-7xl font-black text-gray-900 leading-tight mb-8">
                🚀 Turn Your Veterinary Practice Into a <span className="text-primary-500">Predictable, Profitable Business</span> — Without Adding Extra Work
              </h1>
              <p className="text-2xl md:text-3xl text-gray-700 mb-12 font-semibold leading-relaxed">
                We help veterinary clinics create reliable recurring revenue, attract new clients, 
                and cut admin time in half — with just <span className="text-accent-500 font-bold">2–3 hours of your time</span> to get started.
              </p>
              <a 
                href="#contact"
                className="btn-primary text-xl px-12 py-6 group shadow-2xl inline-flex items-center"
              >
                Get My Free Growth Strategy Call
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </a>
              <p className="text-lg text-gray-500 mt-4">
                ⚠️ Only 10 slots available this month
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-8">
              🐾 Why Clinics Choose Us
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Stop chasing one-time visits. Start building a business that works for you.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20">
              <CheckCircle className="h-12 w-12 text-accent-400 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Build predictable monthly revenue through memberships</h3>
              <p className="text-primary-100">Stop wondering where next month's revenue will come from</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20">
              <CheckCircle className="h-12 w-12 text-accent-400 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Reduce no-shows & admin hours with automation</h3>
              <p className="text-primary-100">Get your time back while improving client experience</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20">
              <CheckCircle className="h-12 w-12 text-accent-400 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Bring in a steady stream of new clients</h3>
              <p className="text-primary-100">Turn your best clients into your best marketing team</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20">
              <CheckCircle className="h-12 w-12 text-accent-400 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Track results in a simple dashboard</h3>
              <p className="text-primary-100">See exactly what's working and what's not</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20">
              <CheckCircle className="h-12 w-12 text-accent-400 mb-4" />
              <h3 className="text-2xl font-bold mb-4">If you don't see progress, you don't pay</h3>
              <p className="text-primary-100">We only win when you win</p>
            </div>
            <div className="bg-accent-500 rounded-2xl p-8 border-2 border-accent-400">
              <Zap className="h-12 w-12 text-white mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-white">Only 2-3 hours to get started</h3>
              <p className="text-accent-100">No complex setup. No learning curve. Just results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Plans & Progression */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8">
              📦 Plans & Progression
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Think of these as steps: each plan builds on the one before it. Once you've mastered the basics, 
              the next tier helps you go further — <span className="font-bold text-gray-900">without adding more work.</span>
            </p>
          </div>
          
          <div className="space-y-12">
            {/* Starter Plan */}
            <div className="bg-white rounded-3xl shadow-xl border-2 border-gray-200 p-10 relative">
              <div className="grid lg:grid-cols-3 gap-8 items-start">
                <div>
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-4">🔹</span>
                    <h3 className="text-3xl font-black text-gray-900">Starter — Lay the Foundation</h3>
                  </div>
                  <div className="mb-6">
                    <div className="text-4xl font-black text-primary-600 mb-2">€900 setup</div>
                    <p className="text-lg text-gray-600">(one-time)</p>
                  </div>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    Best for clinics ready to stop running from visit to visit and start building predictable revenue.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Includes:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Free branded website</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Membership system (set up & ready to use)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Online payments & subscription management</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Automated reminders & booking confirmations</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Basic KPI dashboard (subscribers + revenue)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Pre-written client communication templates</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-primary-50 rounded-2xl p-6">
                  <h4 className="text-xl font-bold text-primary-800 mb-4">👉 Outcome:</h4>
                  <p className="text-primary-700 leading-relaxed">
                    If you follow our steps, you'll free up admin time, reduce no-shows, and start seeing 
                    the first wave of recurring membership revenue in your practice.
                  </p>
                                <a 
                href="#contact"
                className="w-full btn-primary mt-6 text-center inline-block"
              >
                Get Started Now
              </a>
                </div>
              </div>
            </div>

            {/* Growth Plan - Most Popular */}
            <div className="bg-white rounded-3xl shadow-2xl border-4 border-accent-500 p-10 relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <span className="bg-accent-500 text-white px-8 py-3 rounded-full text-lg font-black shadow-lg">
                  ⭐ Most Popular
                </span>
              </div>
              
              <div className="grid lg:grid-cols-3 gap-8 items-start">
                <div>
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-4">🔹</span>
                    <h3 className="text-3xl font-black text-gray-900">Growth — Expand & Retain</h3>
                  </div>
                  <div className="mb-6">
                    <div className="text-4xl font-black text-accent-600 mb-2">€1,000 setup + €850/month</div>
                  </div>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    For clinics who already have the basics in place and want to attract more clients and keep them longer.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Everything in Starter, plus:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>24/7 text support</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Custom membership & loyalty offers</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Referral system setup (turn clients into advocates)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Online presence boost (Google & local SEO)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Monthly optimization call (30 min)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Full KPI dashboard (new clients, retention, revenue trends)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-accent-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Done-for-you promotions & seasonal campaigns</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-accent-50 rounded-2xl p-6 border-2 border-accent-200">
                  <h4 className="text-xl font-bold text-accent-800 mb-4">👉 Outcome:</h4>
                  <p className="text-accent-700 leading-relaxed">
                    If you follow our steps, you'll turn your membership into a growth engine — bringing in new clients 
                    every month, keeping existing ones longer, and starting to see memberships contribute a meaningful 
                    share of your monthly revenue.
                  </p>
                  <a 
                    href="#contact"
                    className="w-full bg-accent-500 hover:bg-accent-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 mt-6 text-center inline-block"
                  >
                    Get Started Now
                  </a>
                </div>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="bg-gray-900 text-white rounded-3xl shadow-xl p-10 relative">
              <div className="grid lg:grid-cols-3 gap-8 items-start">
                <div>
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-4">🔹</span>
                    <h3 className="text-3xl font-black">Premium — Scale Without Stress</h3>
                  </div>
                  <div className="mb-6">
                    <div className="text-4xl font-black text-primary-400 mb-2">€2,500 setup + €1,800/month</div>
                  </div>
                  <p className="text-xl text-gray-300 leading-relaxed">
                    For clinics that are growing fast and want to outsource marketing & growth completely.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold mb-4">Everything in Growth, plus:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Done-for-you marketing campaigns (email, referral, local ads)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Ongoing website management & SEO</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Dedicated account manager</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Advanced analytics (campaign ROI, staff productivity, client cohorts)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Multi-location support</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
                  <h4 className="text-xl font-bold text-primary-400 mb-4">👉 Outcome:</h4>
                  <p className="text-gray-300 leading-relaxed">
                    If you follow our steps, you'll have a system that runs almost entirely without you — scaling 
                    memberships, marketing, and retention in the background, while you focus on patients.
                  </p>
                  <a 
                    href="#contact"
                    className="w-full btn-outline mt-6 border-primary-400 text-primary-400 hover:bg-primary-400 hover:text-gray-900 text-center inline-block"
                  >
                    Get Started Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantees Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8">
              🎯 Our Promise
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              We're so confident in our system, we guarantee your success
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-primary-50 rounded-3xl p-8 text-center border-2 border-primary-200">
              <div className="bg-primary-500 rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Calendar className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">90-Day Risk-Free</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                If you don't see measurable progress, you get <span className="font-bold text-primary-600">2 months free</span>.
              </p>
            </div>
            
            <div className="bg-accent-50 rounded-3xl p-8 text-center border-2 border-accent-200">
              <div className="bg-accent-500 rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <DollarSign className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">ROI Promise</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                If memberships don't cover at least your fee in 6 months, <span className="font-bold text-accent-600">we keep working until they do</span>.
              </p>
            </div>
            
            <div className="bg-primary-50 rounded-3xl p-8 text-center border-2 border-primary-200">
              <div className="bg-primary-500 rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Zap className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">Minimal Effort</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Only <span className="font-bold text-primary-600">2–3 hours from you</span> to set up.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Limited-Time Bonus Section */}
      <section className="py-20 bg-gradient-to-r from-accent-500 to-accent-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              🎁 Limited-Time Bonus
            </h2>
            <p className="text-2xl text-accent-100 mb-4">
              (First 10 Clinics Only)
            </p>
            <div className="bg-white/20 backdrop-blur rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-3xl font-black mb-6">
                Get our Pet Food Revenue Engine FREE
              </h3>
              <p className="text-xl text-accent-100 mb-6">
                (normally €1,500+)
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 rounded-xl p-4">
                  <CheckCircle className="h-8 w-8 text-white mb-2 mx-auto" />
                  <p className="font-semibold">Cuts food costs, increases profit</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4">
                  <CheckCircle className="h-8 w-8 text-white mb-2 mx-auto" />
                  <p className="font-semibold">Creates a sticky reason for clients to stay on membership</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4">
                  <CheckCircle className="h-8 w-8 text-white mb-2 mx-auto" />
                  <p className="font-semibold">Typically adds €2k–€5k/month</p>
                </div>
              </div>
              
              <div className="bg-red-500 text-white rounded-xl p-4 mb-8">
                <p className="text-xl font-bold">
                  ⚠️ Only 10 slots. After that, this bonus is gone.
                </p>
              </div>
              
              <a 
                href="#contact"
                className="bg-white text-accent-600 hover:bg-gray-100 font-black py-6 px-12 rounded-xl text-xl shadow-2xl transition-all duration-200 transform hover:-translate-y-1 inline-block"
              >
                Claim Your Bonus Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Referral Program Banner */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-black mb-8">
              🔁 Referral Rewards
            </h2>
            <div className="bg-white/20 backdrop-blur rounded-3xl p-10 max-w-4xl mx-auto">
              <UserPlus className="h-20 w-20 text-white mx-auto mb-6" />
              <h3 className="text-3xl font-black mb-6">
                For every clinic you refer, you get 1 free month
              </h3>
              <p className="text-2xl text-primary-100 mb-6">
                (worth up to €1,800)
              </p>
              <div className="bg-accent-500 rounded-2xl p-6 mb-8">
                <p className="text-xl font-bold text-white">
                  Yes, they stack — in theory, you could run the program for free forever.
                </p>
              </div>
              <p className="text-lg text-primary-100">
                Know another vet who needs predictable revenue? We'll reward you both.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/Footer */}
      <footer id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-8">
              <Heart className="h-12 w-12 text-primary-400 mr-4" />
              <span className="text-4xl font-black">NextServe</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-8">
              Ready to turn your clinic into a predictable, profitable business?
            </h2>
            <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Book your free growth strategy call today. We'll show you exactly how to get more clients, 
              improve retention, and build recurring revenue — with just 2-3 hours of your time.
            </p>
            
            <a 
              href="#contact"
              className="bg-accent-500 hover:bg-accent-600 text-white font-black py-6 px-16 rounded-xl text-2xl shadow-2xl transition-all duration-200 transform hover:-translate-y-1 mb-12 group inline-flex items-center"
            >
              Get My Free Growth Strategy Call
              <ArrowRight className="ml-3 h-8 w-8 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <div className="bg-red-500 text-white rounded-xl p-4 max-w-md mx-auto mb-12">
              <p className="font-bold text-lg">
                ⚠️ Only 10 slots available this month
              </p>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 border-t border-gray-700 pt-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-primary-400 mr-4" />
                  <span className="text-lg">hello@nextserve.at</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-primary-400 mr-4" />
                  <span className="text-lg">+43 1 234 5678</span>
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
                <a href="#" className="hover:text-white transition-colors text-lg">About Us</a>
                <a href="#" className="hover:text-white transition-colors text-lg">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors text-lg">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors text-lg">Referral Program</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400 text-lg">
              &copy; 2024 NextServe. All rights reserved. 
              <br />
              <span className="text-primary-400 font-semibold">
                Turning Vienna's veterinary clinics into predictable, profitable businesses since 2024.
              </span>
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
