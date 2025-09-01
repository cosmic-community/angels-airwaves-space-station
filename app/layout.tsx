import type { Metadata } from 'next'
import './globals.css'
import SpaceBackground from '@/components/SpaceBackground'
import Navigation from '@/components/Navigation'
import CosmicBadge from '@/components/CosmicBadge'

export const metadata: Metadata = {
  title: 'Angels & Airwaves Space Station',
  description: 'Experience the cosmic soundscape of Angels & Airwaves. Immersive space-themed website featuring music, news, and interstellar exploration.',
  keywords: 'Angels and Airwaves, space rock, music, Tom DeLonge, cosmic, space',
  openGraph: {
    title: 'Angels & Airwaves Space Station',
    description: 'Experience the cosmic soundscape of Angels & Airwaves',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=1200&h=630&fit=crop&auto=format',
        width: 1200,
        height: 630,
        alt: 'Angels & Airwaves Space Station',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Angels & Airwaves Space Station',
    description: 'Experience the cosmic soundscape of Angels & Airwaves',
    images: ['https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=1200&h=630&fit=crop&auto=format'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Get bucket slug for the cosmic badge
  const bucketSlug = process.env.COSMIC_BUCKET_SLUG as string

  return (
    <html lang="en">
      <head>
        {/* Console capture script for dashboard debugging */}
        <script src="/dashboard-console-capture.js" />
      </head>
      <body>
        <SpaceBackground />
        <Navigation />
        
        <main className="relative z-10">
          {children}
        </main>
        
        <CosmicBadge bucketSlug={bucketSlug} />
      </body>
    </html>
  )
}