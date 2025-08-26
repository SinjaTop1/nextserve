'use client'

import { useEffect, useRef, useState } from 'react'
import { Play, Pause, Volume2, VolumeX } from 'lucide-react'

interface ScrollTriggeredVideoProps {
  src: string
  className?: string
  poster?: string
}

export default function ScrollTriggeredVideo({ src, className = '', poster }: ScrollTriggeredVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
        
        if (entry.isIntersecting) {
          // Video is visible, start playing muted with a small delay
          setTimeout(() => {
            if (videoRef.current && entry.isIntersecting) {
              videoRef.current.play().then(() => {
                setIsPlaying(true)
              }).catch((error) => {
                console.log('Autoplay prevented:', error)
                // Autoplay was prevented, user will need to click
              })
            }
          }, 200)
        } else {
          // Video is not visible, pause it
          if (videoRef.current) {
            videoRef.current.pause()
            setIsPlaying(false)
          }
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the video is visible
        rootMargin: '0px 0px -20% 0px' // Add margin to trigger earlier
      }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [])

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
        setIsPlaying(false)
      } else {
        videoRef.current.play().catch(console.error)
        setIsPlaying(true)
      }
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setIsMuted(videoRef.current.muted)
    }
  }

  return (
    <div ref={containerRef} className={`relative group ${className} max-w-full`}>
      <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-900">
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          muted={true}
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onLoadedMetadata={() => {
            // Ensure video starts muted for autoplay compliance
            if (videoRef.current) {
              videoRef.current.muted = true;
              setIsMuted(true);
            }
          }}
        />
        
        {/* Video Controls Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
            <button
              onClick={togglePlayPause}
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 rounded-full transition-all duration-200"
              aria-label={isPlaying ? 'Pause video' : 'Play video'}
            >
              {isPlaying ? (
                <Pause className="h-4 w-4" />
              ) : (
                <Play className="h-4 w-4 ml-0.5" />
              )}
            </button>
            
            <button
              onClick={toggleMute}
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 rounded-full transition-all duration-200"
              aria-label={isMuted ? 'Unmute video' : 'Mute video'}
            >
              {isMuted ? (
                <VolumeX className="h-4 w-4" />
              ) : (
                <Volume2 className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>
        
        {/* Play Button Overlay (when not playing and not hovered) */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300">
            <button
              onClick={togglePlayPause}
              className="bg-accent-500 hover:bg-accent-600 text-white p-4 rounded-full shadow-lg transform hover:scale-110 transition-all duration-200"
              aria-label="Play video"
            >
              <Play className="h-8 w-8 ml-0.5" />
            </button>
          </div>
        )}
        
        {/* Video Status Indicator */}
        <div className="absolute top-1 sm:top-2 right-1 sm:right-2">
          <div className={`px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-xs font-bold ${
            isVisible && isPlaying 
              ? 'bg-green-500 text-white' 
              : 'bg-black/50 text-white/70'
          }`}>
            <span className="hidden sm:inline">{isVisible && isPlaying ? '● LIVE' : '● PAUSED'}</span>
            <span className="sm:hidden">{isVisible && isPlaying ? '●' : '○'}</span>
          </div>
        </div>
        
        {/* Sound Indicator */}
        {isPlaying && (
          <div className="absolute top-1 sm:top-2 left-1 sm:left-2">
            <div className={`px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-xs font-bold ${
              isMuted 
                ? 'bg-yellow-500 text-black animate-pulse' 
                : 'bg-green-500 text-white'
            }`}>
              <span className="hidden sm:inline">{isMuted ? '🔇 Click to unmute' : '🔊 Click to mute'}</span>
              <span className="sm:hidden">{isMuted ? '🔇' : '🔊'}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
