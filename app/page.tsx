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
      <section className="pt-20 pb-12 md:pt-24 md:pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto">
            <div className="animate-fade-in">
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight mb-6 md:mb-8">
                🚀 Turn Your Veterinary Practice Into a <span className="text-primary-500">Predictable, Profitable Business</span> — Without Adding Extra Work
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 mb-8 md:mb-12 font-semibold leading-relaxed px-2">
                We help veterinary clinics create reliable recurring revenue, attract new clients, 
                and cut admin time in half — with just <span className="text-accent-500 font-bold">2–3 hours of your time</span> to get started.
              </p>
              
              {/* Mobile-optimized value proposition */}
              <div className="bg-accent-500 text-white rounded-2xl p-4 md:p-6 mb-8 md:mb-12 mx-2 md:mx-auto max-w-4xl">
                <p className="text-lg md:text-xl font-bold mb-2">
                  💰 Our Starter Pack (€900) pays for itself with just 4 new subscription clients
                </p>
                <p className="text-base md:text-lg">
                  Don't see results? <span className="font-black">100% MONEY-BACK GUARANTEE</span>
                </p>
              </div>
              
              <a 
                href="#contact"
                className="btn-primary text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 group shadow-2xl inline-flex items-center mx-2"
              >
                Get My Free Growth Strategy Call
                <ArrowRight className="ml-2 md:ml-3 h-5 w-5 md:h-6 md:w-6 group-hover:translate-x-1 transition-transform" />
              </a>
              <p className="text-base md:text-lg text-gray-500 mt-3 md:mt-4 px-4">
                ⚠️ Only 10 slots available this month
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 md:mb-8">
              🐾 Why Clinics Choose Us
            </h2>
            <p className="text-lg md:text-xl text-primary-100 max-w-3xl mx-auto px-4">
              Stop chasing one-time visits. Start building a business that works for you.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 md:p-8 border border-white/20">
              <CheckCircle className="h-10 w-10 md:h-12 md:w-12 text-accent-400 mb-4" />
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Build predictable monthly revenue through memberships</h3>
              <p className="text-primary-100 text-sm md:text-base">Stop wondering where next month's revenue will come from</p>
              <div className="mt-3 p-2 bg-accent-500/20 rounded-lg">
                <p className="text-accent-200 font-semibold text-xs md:text-sm">💰 Each membership client = €50-150/month recurring</p>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 md:p-8 border border-white/20">
              <CheckCircle className="h-10 w-10 md:h-12 md:w-12 text-accent-400 mb-4" />
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Reduce no-shows & admin hours with automation</h3>
              <p className="text-primary-100 text-sm md:text-base">Get your time back while improving client experience</p>
              <div className="mt-3 p-2 bg-accent-500/20 rounded-lg">
                <p className="text-accent-200 font-semibold text-xs md:text-sm">⏰ Save 10+ hours/week = €2000+ value monthly</p>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 md:p-8 border border-white/20">
              <CheckCircle className="h-10 w-10 md:h-12 md:w-12 text-accent-400 mb-4" />
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Bring in a steady stream of new clients</h3>
              <p className="text-primary-100 text-sm md:text-base">Turn your best clients into your best marketing team</p>
              <div className="mt-3 p-2 bg-accent-500/20 rounded-lg">
                <p className="text-accent-200 font-semibold text-xs md:text-sm">🎯 Google optimization alone brings 10-20 clients monthly</p>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 md:p-8 border border-white/20">
              <CheckCircle className="h-10 w-10 md:h-12 md:w-12 text-accent-400 mb-4" />
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Track results in a simple dashboard</h3>
              <p className="text-primary-100 text-sm md:text-base">See exactly what's working and what's not</p>
              <div className="mt-3 p-2 bg-accent-500/20 rounded-lg">
                <p className="text-accent-200 font-semibold text-xs md:text-sm">📊 Real-time ROI tracking & optimization</p>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 md:p-8 border border-white/20">
              <CheckCircle className="h-10 w-10 md:h-12 md:w-12 text-accent-400 mb-4" />
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">If you don't see progress, you don't pay</h3>
              <p className="text-primary-100 text-sm md:text-base">We only win when you win</p>
              <div className="mt-3 p-2 bg-red-500/20 rounded-lg">
                <p className="text-red-200 font-bold text-xs md:text-sm">🛡️ 100% MONEY-BACK GUARANTEE</p>
              </div>
            </div>
            <div className="bg-accent-500 rounded-2xl p-6 md:p-8 border-2 border-accent-400 md:col-span-2 lg:col-span-1">
              <Zap className="h-10 w-10 md:h-12 md:w-12 text-white mb-4" />
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white">Only 2-3 hours to get started</h3>
              <p className="text-accent-100 text-sm md:text-base">No complex setup. No learning curve. Just results.</p>
              <div className="mt-3 p-2 bg-white/20 rounded-lg">
                <p className="text-white font-bold text-xs md:text-sm">⚡ Setup faster than hiring 1 employee</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plans & Progression */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 md:mb-8">
              📦 Plans & Progression
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
              Think of these as steps: each plan builds on the one before it. Once you've mastered the basics, 
              the next tier helps you go further — <span className="font-bold text-gray-900">without adding more work.</span>
            </p>
          </div>
          
          <div className="space-y-12">
            {/* Starter Plan */}
            <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl border-2 border-gray-200 p-6 md:p-10 relative">
              <div className="grid lg:grid-cols-3 gap-6 md:gap-8 items-start">
                <div>
                  <div className="flex items-center mb-4">
                    <span className="text-3xl md:text-4xl mr-3 md:mr-4">🔹</span>
                    <h3 className="text-2xl md:text-3xl font-black text-gray-900">Starter — Lay the Foundation</h3>
                  </div>
                  <div className="mb-6">
                    <div className="text-3xl md:text-4xl font-black text-primary-600 mb-2">€900 setup</div>
                    <p className="text-base md:text-lg text-gray-600">(one-time)</p>
                  </div>
                  
                  {/* Clean ROI Emphasis */}
                  <div className="bg-green-500 text-white rounded-xl p-4 mb-4">
                    <p className="font-black text-lg">💰 4 clients = Investment paid back</p>
                    <p className="text-sm">Then pure profit forever</p>
                  </div>
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
                
                <div className="bg-primary-50 rounded-2xl p-4 md:p-6">
                  <h4 className="text-lg md:text-xl font-bold text-primary-800 mb-3">👉 Result:</h4>
                  <p className="text-primary-700 font-semibold text-sm md:text-base mb-4">
                    Predictable monthly revenue + time freedom
                  </p>
                  <div className="bg-red-500 text-white rounded-lg p-3 mb-4">
                    <p className="font-bold text-sm">🛡️ 100% MONEY-BACK GUARANTEE</p>
                  </div>
                  <a 
                    href="#contact"
                    className="w-full btn-primary mt-2 text-center inline-block text-sm md:text-base py-3 md:py-4"
                  >
                    Get Started Now
                  </a>
                </div>
              </div>
            </div>

            {/* Growth Plan - Most Popular */}
            <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl border-4 border-accent-500 p-6 md:p-10 relative">
              <div className="absolute -top-4 md:-top-6 left-1/2 transform -translate-x-1/2">
                <span className="bg-accent-500 text-white px-6 md:px-8 py-2 md:py-3 rounded-full text-base md:text-lg font-black shadow-lg">
                  ⭐ Most Popular
                </span>
              </div>
              
              <div className="grid lg:grid-cols-3 gap-6 md:gap-8 items-start mt-4 md:mt-0">
                <div>
                  <div className="flex items-center mb-4">
                    <span className="text-3xl md:text-4xl mr-3 md:mr-4">🔹</span>
                    <h3 className="text-2xl md:text-3xl font-black text-gray-900">Growth — Expand & Retain</h3>
                  </div>
                  <div className="mb-6">
                    <div className="text-3xl md:text-4xl font-black text-accent-600 mb-2">€1,000 setup + €850/month</div>
                  </div>
                  
                  {/* Clean ROI Emphasis */}
                  <div className="bg-accent-500 text-white rounded-xl p-4 mb-4">
                    <p className="font-black text-lg">🚀 Google SEO = €4,000+ monthly</p>
                    <p className="text-sm">vs €850 cost = 470% ROI</p>
                  </div>
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
                
                <div className="bg-accent-50 rounded-2xl p-4 md:p-6 border-2 border-accent-200">
                  <h4 className="text-lg md:text-xl font-bold text-accent-800 mb-3">👉 Result:</h4>
                  <p className="text-accent-700 font-semibold text-sm md:text-base mb-4">
                    Self-running growth machine
                  </p>
                  <div className="bg-green-500 text-white rounded-lg p-3 mb-3">
                    <p className="font-black text-sm">💸 THIS PLAN PAYS YOU</p>
                  </div>
                  <div className="bg-red-500 text-white rounded-lg p-3 mb-4">
                    <p className="font-bold text-sm">🛡️ 100% MONEY-BACK GUARANTEE</p>
                  </div>
                  <a 
                    href="#contact"
                    className="w-full bg-accent-500 hover:bg-accent-600 text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center inline-block text-sm md:text-base"
                  >
                    Get Started Now
                  </a>
                </div>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="bg-gray-900 text-white rounded-2xl md:rounded-3xl shadow-xl p-6 md:p-10 relative">
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

      {/* Exclusive Bonus Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-4 md:mb-6">
              🎁 Exclusive Bonus
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-6">
              For the first 10 clinics only
            </p>
            
            <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10 max-w-5xl mx-auto border border-gray-200">
              <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-2xl p-4 md:p-6 mb-6">
                <h3 className="text-3xl md:text-4xl font-bold mb-2">
                  Pet Food Revenue Engine
                </h3>
                <p className="text-xl md:text-2xl">
                  Valued at €1,500+ • Included FREE
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-8">
                <div className="bg-primary-50 border border-primary-200 rounded-xl p-4 text-center">
                  <p className="font-bold text-lg text-primary-700">💰 €2k-€5k</p>
                  <p className="text-sm text-gray-600">Additional Monthly Revenue</p>
                </div>
                <div className="bg-accent-50 border border-accent-200 rounded-xl p-4 text-center">
                  <p className="font-bold text-lg text-accent-700">🔒 Client Retention</p>
                  <p className="text-sm text-gray-600">Stronger Membership Loyalty</p>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
                  <p className="font-bold text-lg text-gray-700">📈 Higher Margins</p>
                  <p className="text-sm text-gray-600">Reduced Food Costs</p>
                </div>
              </div>
              
              <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-4 mb-6">
                <p className="text-lg font-bold text-red-800 mb-1">
                  Limited Availability
                </p>
                <p className="text-sm text-red-600">
                  Only available to the first 10 clinics. After that, this bonus is valued at full price.
                </p>
              </div>
              
              <a 
                href="#contact"
                className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 md:py-6 px-8 md:px-12 rounded-xl text-lg md:text-xl shadow-lg transition-all duration-200 transform hover:-translate-y-1 inline-block"
              >
                Claim Your Bonus
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Referral Program */}
      <section className="py-12 md:py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-black mb-6 md:mb-8">
              🤝 Referral Rewards
            </h2>
            <p className="text-xl md:text-2xl mb-8">
              Refer a colleague, both benefit
            </p>
            
            <div className="bg-white/10 backdrop-blur rounded-3xl p-6 md:p-10 max-w-5xl mx-auto border border-white/20">
              <div className="bg-white text-primary-600 rounded-2xl p-4 md:p-6 mb-6">
                <UserPlus className="h-16 w-16 md:h-20 md:w-20 mx-auto mb-4" />
                <h3 className="text-3xl md:text-4xl font-bold mb-2">
                  1 Referral = 1 Free Month
                </h3>
                <p className="text-xl md:text-2xl font-semibold">
                  Value: Up to €1,800 per referral
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white/20 backdrop-blur rounded-xl p-6 text-center border border-white/30">
                  <p className="font-bold text-2xl mb-2">♾️ Stackable</p>
                  <p className="text-lg">Multiple Referrals</p>
                  <p className="text-sm text-primary-100">5 referrals = 5 free months</p>
                </div>
                <div className="bg-white/20 backdrop-blur rounded-xl p-6 text-center border border-white/30">
                  <p className="font-bold text-2xl mb-2">🎯 Win-Win</p>
                  <p className="text-lg">Both Get Rewarded</p>
                  <p className="text-sm text-primary-100">You and your referral both benefit</p>
                </div>
              </div>
              
              <div className="bg-accent-500 rounded-2xl p-4 md:p-6 mb-6">
                <p className="text-lg md:text-xl font-bold text-center">
                  Know 3 veterinarians? That's €5,400 in value
                </p>
              </div>
              
              <p className="text-lg md:text-xl text-center mb-6">
                Help a colleague grow their practice while earning free months
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/Footer */}
      <footer id="contact" className="py-12 md:py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <div className="flex items-center justify-center mb-6 md:mb-8">
              <Heart className="h-10 w-10 md:h-12 md:w-12 text-primary-400 mr-3 md:mr-4" />
              <span className="text-3xl md:text-4xl font-black">NextServe</span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 md:mb-8 px-4">
              Ready to turn your clinic into a predictable, profitable business?
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
              Book your free growth strategy call today. We'll show you exactly how to get more clients, 
              improve retention, and build recurring revenue — with just 2-3 hours of your time.
            </p>
            
            {/* Professional urgency messaging */}
            <div className="bg-primary-50 border border-primary-200 rounded-2xl p-4 md:p-6 mb-8 md:mb-12 mx-auto max-w-4xl">
              <h3 className="text-xl md:text-2xl font-bold text-primary-800 mb-3">📅 Limited Availability</h3>
              <p className="text-primary-700 text-sm md:text-base mb-2">
                We're currently accepting 10 new clinics this month for personalized onboarding.
              </p>
              <p className="text-primary-600 text-sm md:text-base">
                Secure your spot to start building predictable revenue next month.
              </p>
            </div>
            
            <a 
              href="mailto:info@nextserve.com?subject=Free Growth Strategy Call Request"
              className="bg-accent-500 hover:bg-accent-600 text-white font-black py-4 md:py-6 px-8 md:px-16 rounded-xl text-lg md:text-2xl shadow-2xl transition-all duration-200 transform hover:-translate-y-1 mb-8 md:mb-12 group inline-flex items-center"
            >
              Get My Free Growth Strategy Call
              <ArrowRight className="ml-2 md:ml-3 h-6 w-6 md:h-8 md:w-8 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <div className="bg-gray-100 text-gray-800 rounded-xl p-3 md:p-4 max-w-md mx-auto mb-8 md:mb-12">
              <p className="font-bold text-base md:text-lg">
                📋 10 spots available this month
              </p>
              <p className="text-sm md:text-base text-gray-600">
                Next intake starts in Q2
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
