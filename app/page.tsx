'use client'

import { 
  Mail, 
  Phone,
  Calendar,
  Video
} from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Linktree Container */}
        <div className="rounded-3xl shadow-2xl p-10 md:p-14 border border-gray-200" style={{ backgroundColor: '#f0eee6' }}>
          
          {/* Logo & Brand */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="relative w-28 h-28 md:w-36 md:h-36">
                <Image 
                  src="/N.png" 
                  alt="NextServe Logo" 
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3 tracking-tight">NextServe</h1>
            <p className="text-base md:text-lg text-gray-600">Let's Connect</p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4 mb-8">
            <a 
              href="mailto:nextserveagency@gmail.com"
              className="group flex items-center justify-center w-full text-white font-semibold py-5 px-6 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              style={{ backgroundColor: '#00bf63' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#00a855'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#00bf63'}
            >
              <Mail className="h-5 w-5 mr-3" />
              <span className="text-sm md:text-base">nextserveagency@gmail.com</span>
            </a>

            <a 
              href="tel:+436767773754"
              className="group flex items-center justify-center w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-5 px-6 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <Phone className="h-5 w-5 mr-3" />
              <span className="text-sm md:text-base">+43 676 777 3754</span>
            </a>
          </div>

          {/* Divider */}
          <div className="relative my-10">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t-2 border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-6 py-1 text-gray-500 font-medium" style={{ backgroundColor: '#f0eee6' }}>Schedule a Meeting</span>
            </div>
          </div>

          {/* Booking Links */}
          <div className="space-y-4">
            <a 
              href="https://cal.com/nextserve-1bq7ci/in-person-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-full border-2 text-white font-semibold py-5 px-6 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              style={{ backgroundColor: '#00bf63', borderColor: '#00bf63' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#00a855'
                e.currentTarget.style.borderColor = '#00a855'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#00bf63'
                e.currentTarget.style.borderColor = '#00bf63'
              }}
            >
              <Calendar className="h-5 w-5 mr-3" />
              <span className="text-sm md:text-base">Book In-Person Meeting</span>
            </a>

            <a 
              href="https://cal.com/nextserve-1bq7ci/20min"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-full border-2 border-gray-900 hover:bg-gray-900 text-gray-900 hover:text-white font-semibold py-5 px-6 rounded-2xl transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <Video className="h-5 w-5 mr-3" />
              <span className="text-sm md:text-base">Book Call Meeting</span>
            </a>
          </div>

          {/* Footer Text */}
          <div className="text-center mt-10 pt-8 border-t-2 border-gray-300">
            <p className="text-sm md:text-base text-gray-600 font-medium">📍 Based in Vienna, Austria</p>
          </div>
        </div>
      </div>
    </main>
  )
}
