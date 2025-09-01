'use client'

import { useEffect, useState } from 'react'

export default function SpotifyPlayer() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Simulate iframe loading
    const timer = setTimeout(() => setIsLoaded(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative z-10 max-w-4xl mx-auto px-6">
      {/* Player Container */}
      <div className="relative">
        {/* Glowing background effect */}
        <div className="absolute -inset-4 bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-purple opacity-20 blur-xl rounded-3xl animate-pulse-glow" />
        
        {/* Main player card */}
        <div className="relative bg-space-purple/30 backdrop-blur-md border border-neon-cyan/20 rounded-2xl p-8 neon-glow">
          {/* Header */}
          <div className="text-center mb-6">
            <h2 className="font-space text-3xl md:text-4xl font-bold text-neon-cyan mb-2">
              Experience the Sound
            </h2>
            <p className="text-star-white/80 text-lg font-cosmic">
              Angels & Airwaves - Transmissions from Space
            </p>
          </div>

          {/* Loading placeholder */}
          {!isLoaded && (
            <div className="h-[352px] bg-cosmic-blue/30 rounded-xl flex items-center justify-center animate-pulse">
              <div className="text-neon-cyan">
                <svg className="w-16 h-16 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z" />
                </svg>
              </div>
            </div>
          )}

          {/* Spotify Embed */}
          <div className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <iframe 
              data-testid="embed-iframe" 
              style={{borderRadius: '12px'}} 
              src="https://open.spotify.com/embed/artist/7xklw3WodFZiNNmQt3DIgp?utm_source=generator" 
              width="100%" 
              height="352" 
              frameBorder="0" 
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
              onLoad={() => setIsLoaded(true)}
            />
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-2 -left-2 w-4 h-4 bg-neon-cyan rounded-full animate-pulse" />
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-neon-purple rounded-full animate-pulse animation-delay-1000" />
          <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-neon-purple rounded-full animate-pulse animation-delay-2000" />
          <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-neon-cyan rounded-full animate-pulse animation-delay-500" />
        </div>

        {/* Orbiting elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-6 h-6 bg-neon-cyan/50 rounded-full animate-orbit" />
        </div>
      </div>

      {/* Description */}
      <div className="text-center mt-12 max-w-2xl mx-auto">
        <p className="text-star-white/70 text-lg leading-relaxed font-cosmic">
          Immerse yourself in the cosmic soundscape of Angels & Airwaves. 
          From anthemic space rock to atmospheric electronic elements, 
          experience music that transcends earthly boundaries.
        </p>
      </div>
    </div>
  )
}