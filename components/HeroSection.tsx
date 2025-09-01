'use client'

export default function HeroSection() {
  const scrollToMusic = () => {
    const musicSection = document.getElementById('music')
    if (musicSection) {
      musicSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Main Title */}
        <h1 className="font-space text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-star-white to-neon-purple mb-6 animate-float">
          SPACE STATION
        </h1>
        
        {/* Subtitle */}
        <p className="font-cosmic text-xl md:text-2xl text-star-white/90 mb-8 leading-relaxed">
          Welcome to the cosmic headquarters of{' '}
          <span className="text-neon-cyan font-semibold">Angels & Airwaves</span>
          <br />
          Where music meets the infinite expanse of space
        </p>

        {/* CTA Button */}
        <button 
          onClick={scrollToMusic}
          className="group relative px-8 py-4 bg-transparent border-2 border-neon-cyan text-neon-cyan font-space font-semibold tracking-wider uppercase rounded-full overflow-hidden transition-all duration-300 hover:text-space-dark neon-glow cursor-pointer"
        >
          <span className="relative z-10">Explore the Universe</span>
          <div className="absolute inset-0 bg-neon-cyan transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
        </button>
      </div>

      {/* Floating cosmic elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-neon-cyan rounded-full animate-star-twinkle" />
      <div className="absolute top-40 right-20 w-1 h-1 bg-star-white rounded-full animate-star-twinkle animation-delay-1000" />
      <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-neon-purple rounded-full animate-star-twinkle animation-delay-2000" />
      <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-neon-cyan rounded-full animate-star-twinkle animation-delay-500" />
    </section>
  )
}