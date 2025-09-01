export default function SpaceBackground() {
  return (
    <div className="fixed inset-0 z-0">
      {/* Base space gradient */}
      <div className="absolute inset-0 space-bg" />
      
      {/* Animated stars */}
      <div className="absolute inset-0 stars-background" />
      
      {/* Floating particles */}
      <div className="floating-particles">
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
      </div>
      
      {/* Large cosmic orbs */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-neon-purple opacity-10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-neon-cyan opacity-10 rounded-full blur-3xl animate-pulse-glow animation-delay-2000" />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-cosmic-blue opacity-20 rounded-full blur-2xl animate-float" />
    </div>
  );
}