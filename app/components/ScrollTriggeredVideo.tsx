'use client'

import { useEffect, useRef, useState } from 'react'

interface ScrollTriggeredVideoProps {
  src: string
  className?: string
}

export default function ScrollTriggeredVideo({ src, className = '' }: ScrollTriggeredVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            video.play().catch(() => {
              // Handle autoplay restrictions
            })
          } else {
            video.pause()
          }
        })
      },
      { threshold: 0.5 }
    )

    observer.observe(video)

    return () => {
      observer.unobserve(video)
    }
  }, [])

  return (
    <video
      ref={videoRef}
      src={src}
      className={`rounded-lg shadow-lg ${className}`}
      muted
      loop
      playsInline
      preload="metadata"
      loading="lazy"
      aria-label="NextServe founder explaining why we offer free veterinary websites"
    >
      Your browser does not support the video tag.
    </video>
  )
}