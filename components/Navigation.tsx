'use client'

import { useState, useEffect } from 'react'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-space-dark/90 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-neon-cyan rounded-full flex items-center justify-center neon-glow">
              <span className="text-space-dark font-bold text-sm">A&A</span>
            </div>
            <span className="font-space font-bold text-xl text-neon-cyan">
              Angels & Airwaves
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#home" 
              className="text-star-white hover:text-neon-cyan transition-colors duration-300 font-medium"
            >
              Home
            </a>
            <a 
              href="#music" 
              className="text-star-white hover:text-neon-cyan transition-colors duration-300 font-medium"
            >
              Music
            </a>
            <a 
              href="#about" 
              className="text-star-white hover:text-neon-cyan transition-colors duration-300 font-medium"
            >
              About
            </a>
            <a 
              href="#news" 
              className="text-star-white hover:text-neon-cyan transition-colors duration-300 font-medium"
            >
              News
            </a>
            <a 
              href="#tour" 
              className="text-star-white hover:text-neon-cyan transition-colors duration-300 font-medium"
            >
              Tour
            </a>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-neon-cyan">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}