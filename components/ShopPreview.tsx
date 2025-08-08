'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const products = [
  { id: 1, name: 'Retro Striker Poster', type: 'Poster A2', price: '€39' },
  { id: 2, name: 'Favela Dreams Canvas', type: 'Canvas 60x80', price: '€89' },
  { id: 3, name: 'Golden Touch Print', type: 'Premium Print', price: '€59' },
  { id: 4, name: 'Custom Shin Guards', type: 'Merchandise', price: '€79' },
  { id: 5, name: 'Street Legend Tee', type: 'Apparel', price: '€49' },
]

export default function ShopPreview() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const handlePrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length)
  }

  const handleNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % products.length)
  }

  return (
    <section className="relative py-20 bg-primary-dark overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-accent text-4xl md:text-6xl text-accent-gold mb-4">
            SHOP PREVIEW
          </h2>
          <p className="font-body text-lg text-text-primary/60">
            Premium Prints & Exclusive Merchandise
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* TV Frame */}
          <div className="bg-gradient-to-b from-zinc-800 to-zinc-900 p-8 rounded-xl">
            {/* Screen */}
            <div className="relative aspect-[16/9] bg-primary-dark rounded-lg overflow-hidden">
              {/* Products Carousel */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  className="absolute inset-0 flex items-center justify-center p-8"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="grid md:grid-cols-2 gap-8 items-center w-full">
                    {/* Product Image */}
                    <div className="relative aspect-square bg-gradient-to-br from-accent-gold/20 to-accent-green/20 rounded-lg">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="font-retro-game text-6xl text-accent-gold mb-4">
                            {currentIndex + 1}
                          </div>
                          <div className="font-body text-text-primary/60">
                            Product Preview
                          </div>
                        </div>
                      </div>
                      {/* CRT Effect */}
                      <div className="absolute inset-0 pointer-events-none crt-screen rounded-lg" />
                    </div>

                    {/* Product Info */}
                    <div className="text-center md:text-left">
                      <h3 className="font-accent text-3xl text-text-primary mb-2">
                        {products[currentIndex].name}
                      </h3>
                      <p className="font-body text-lg text-text-primary/60 mb-4">
                        {products[currentIndex].type}
                      </p>
                      <div className="font-retro-game text-4xl text-accent-gold mb-6">
                        {products[currentIndex].price}
                      </div>
                      <button className="retro-button">
                        QUICK SHOP
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* VHS Tracking Lines */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 opacity-20" style={{
                  background: `repeating-linear-gradient(
                    0deg,
                    transparent,
                    transparent 2px,
                    rgba(255, 255, 255, 0.03) 2px,
                    rgba(255, 255, 255, 0.03) 4px
                  )`
                }} />
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-black/50 hover:bg-black/70 transition-colors rounded-full"
                onMouseEnter={() => setIsAutoPlaying(false)}
              >
                <svg className="w-6 h-6 text-accent-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-black/50 hover:bg-black/70 transition-colors rounded-full"
                onMouseEnter={() => setIsAutoPlaying(false)}
              >
                <svg className="w-6 h-6 text-accent-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* TV Controls */}
            <div className="flex justify-center mt-6 space-x-2">
              {products.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index)
                    setIsAutoPlaying(false)
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-accent-gold w-8'
                      : 'bg-zinc-600 hover:bg-zinc-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="font-body text-text-primary/60 mb-4">
            Alle Produkte werden on-demand produziert und weltweit versendet
          </p>
          <button className="retro-button">
            VISIT FULL SHOP
          </button>
        </motion.div>
      </div>

      {/* Background Static */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none tv-static" />
    </section>
  )
}