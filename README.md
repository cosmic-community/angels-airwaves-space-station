# Angels & Airwaves Space Station

![App Preview](https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=1200&h=300&fit=crop&auto=format)

A futuristic space-themed website featuring Angels & Airwaves music with an integrated Spotify player. Experience the cosmic soundscape with immersive visuals, animated space elements, and a sleek, modern design that captures the essence of interstellar exploration.

## ✨ Features

- 🚀 Immersive space-themed design with animated cosmic backgrounds
- 🎵 Central Spotify player featuring Angels & Airwaves discography
- ⭐ Dynamic particle system with floating space elements
- 🌌 Futuristic UI with glowing neon accents and smooth animations
- 📱 Fully responsive design optimized for all devices
- 🎨 Custom space-themed typography and visual effects
- 🌟 Interactive hover states and smooth transitions
- 📰 Dynamic content management through Cosmic CMS

<!-- CLONE_PROJECT_BUTTON -->

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "I want to create website using the Spotify API. What are the options I have with that?"

### Code Generation Prompt  

> "Build a futuristic space themed website that has a well designed audio player in the middle that plays angels and airwaves using the Spotify iframe"

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠️ Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Cosmic CMS** - Headless content management
- **Spotify Web Playback** - Embedded music player
- **CSS Animations** - Custom space-themed effects

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic CMS account and bucket
- Basic knowledge of React/Next.js

### Installation

1. Clone this repository
2. Install dependencies:
```bash
bun install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Configure your environment variables in `.env.local`:
```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

5. Run the development server:
```bash
bun dev
```

6. Open [http://localhost:3000](http://localhost:3000) to view the app

## 📊 Cosmic SDK Examples

### Fetching Band Information
```typescript
import { cosmic } from '@/lib/cosmic'

export async function getBandInfo() {
  try {
    const response = await cosmic.objects.findOne({
      type: 'band-info',
      slug: 'angels-and-airwaves'
    }).depth(1)
    
    return response.object
  } catch (error) {
    console.error('Error fetching band info:', error)
    return null
  }
}
```

### Getting Latest News
```typescript
export async function getLatestNews() {
  try {
    const response = await cosmic.objects
      .find({ type: 'news' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects.sort((a, b) => 
      new Date(b.metadata?.date || '').getTime() - 
      new Date(a.metadata?.date || '').getTime()
    )
  } catch (error) {
    if (error.status === 404) return []
    throw error
  }
}
```

## 🌌 Cosmic CMS Integration

This app leverages Cosmic CMS for dynamic content management:

- **Band Information** - Store bio, discography, and member details
- **News & Updates** - Manage blog posts and announcements  
- **Tour Dates** - Schedule and venue information
- **Media Gallery** - Photos, videos, and album artwork
- **Fan Content** - User submissions and community features

The integration allows for easy content updates without code changes, perfect for maintaining fresh content around Angels & Airwaves releases and tours.

## 🚀 Deployment Options

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables in the Vercel dashboard
3. Deploy automatically on every push

### Netlify
1. Connect your repository to Netlify
2. Set build command: `bun run build`
3. Set publish directory: `out` (for static export)
4. Add environment variables

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

For production deployment, ensure all environment variables are properly configured in your hosting platform.
