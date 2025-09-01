import HeroSection from '@/components/HeroSection'
import SpotifyPlayer from '@/components/SpotifyPlayer'

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />
      
      {/* Music Player Section */}
      <section id="music" className="relative py-20 lg:py-32">
        <div className="container mx-auto">
          <SpotifyPlayer />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 lg:py-32">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center">
            <h2 className="font-space text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-cyan mb-8">
              Mission Statement
            </h2>
            <div className="space-y-6 text-star-white/80 text-lg leading-relaxed font-cosmic">
              <p>
                Angels & Airwaves represents more than music—it's a transmission from the cosmos, 
                a bridge between earthbound humanity and the infinite mysteries of space. 
                Through anthemic soundscapes and ethereal melodies, we explore themes of 
                love, loss, hope, and the eternal quest for meaning among the stars.
              </p>
              <p>
                Founded with the vision of creating something bigger than ourselves, 
                our mission is to inspire wonder, ignite imagination, and remind listeners 
                that we are all connected by the same cosmic thread that weaves through 
                the fabric of the universe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/Social Section */}
      <section className="relative py-20 lg:py-32">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-space text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-purple mb-8">
            Connect to the Cosmos
          </h2>
          <p className="text-star-white/80 text-lg font-cosmic mb-12 max-w-2xl mx-auto">
            Join the interstellar community and stay connected to all things Angels & Airwaves
          </p>
          
          <div className="flex justify-center space-x-8">
            {['Spotify', 'Instagram', 'Twitter', 'YouTube'].map((platform) => (
              <a
                key={platform}
                href="#"
                className="w-16 h-16 bg-space-purple/30 backdrop-blur-md border border-neon-cyan/20 rounded-full flex items-center justify-center text-neon-cyan hover:bg-neon-cyan hover:text-space-dark transition-all duration-300 neon-glow"
              >
                <span className="text-sm font-semibold">{platform[0]}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}