'use client'

import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import FeaturedArtworks from '@/components/FeaturedArtworks'
import ShopPreview from '@/components/ShopPreview'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-primary-dark">
      {/* Navigation - Fixed over everything */}
      <Navigation />
      
      {/* Main Content - Full width */}
      <div className="relative">
        <HeroSection />
        <FeaturedArtworks />
        <ShopPreview />
        <Footer />
      </div>
    </main>
  )
}