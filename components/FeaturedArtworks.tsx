'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const artworks = [
  { id: 1, title: 'Street Legend #1', price: '€49', category: 'Poster' },
  { id: 2, title: 'Favela Dreams', price: '€59', category: 'Canvas' },
  { id: 3, title: 'Golden Touch', price: '€39', category: 'Poster' },
  { id: 4, title: 'Cage Fighter', price: '€79', category: 'Premium' },
  { id: 5, title: 'Retro Striker', price: '€49', category: 'Poster' },
  { id: 6, title: 'Urban Legend', price: '€69', category: 'Canvas' },
]

export default function FeaturedArtworks() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [selectedId, setSelectedId] = useState<number | null>(null)

  return (
    <section className="relative py-20 bg-secondary-dark overflow-hidden">
      {/* Section Header */}
      <div className="container mx-auto px-4 mb-12">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-accent text-4xl md:text-6xl text-accent-gold mb-4">
            FEATURED ARTWORKS
          </h2>
          <p className="font-body text-lg text-text-primary/60">
            Limitierte Editionen direkt aus dem digitalen Atelier
          </p>
        </motion.div>
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artworks.map((artwork, index) => (
            <motion.div
              key={artwork.id}
              className="relative group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredId(artwork.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => setSelectedId(artwork.id)}
            >
              {/* TV Frame */}
              <div className="relative bg-gradient-to-b from-zinc-800 to-zinc-900 p-4 rounded-lg">
                {/* Screen */}
                <div className="relative aspect-[4/3] bg-primary-dark rounded overflow-hidden">
                  {/* Placeholder for artwork image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/20 to-accent-green/20" />
                  
                  {/* TV Channel Change Effect */}
                  <AnimatePresence>
                    {hoveredId === artwork.id && (
                      <motion.div
                        className="absolute inset-0 bg-white"
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: [0, 1, 1, 0] }}
                        exit={{ scaleY: 0 }}
                        transition={{ duration: 0.3, times: [0, 0.1, 0.9, 1] }}
                        style={{ originY: 0.5 }}
                      />
                    )}
                  </AnimatePresence>

                  {/* Static Noise on Hover */}
                  {hoveredId === artwork.id && (
                    <div className="absolute inset-0 tv-static opacity-50" />
                  )}

                  {/* CRT Screen Effect */}
                  <div className="absolute inset-0 pointer-events-none crt-screen" />

                  {/* Artwork Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="font-retro-game text-lg text-accent-gold">
                      {artwork.title}
                    </h3>
                    <div className="flex justify-between items-center mt-2">
                      <span className="font-body text-sm text-text-primary/60">
                        {artwork.category}
                      </span>
                      <span className="font-retro-game text-lg text-accent-gold">
                        {artwork.price}
                      </span>
                    </div>
                  </div>
                </div>

                {/* TV Controls */}
                <div className="flex justify-center mt-4 space-x-4">
                  <div className="w-2 h-2 rounded-full bg-zinc-600" />
                  <div className="w-2 h-2 rounded-full bg-zinc-600" />
                  <div className={`w-2 h-2 rounded-full transition-colors ${
                    hoveredId === artwork.id ? 'bg-green-500' : 'bg-red-600'
                  }`} />
                </div>
              </div>

              {/* Hover Effect */}
              <motion.div
                className="absolute -inset-1 bg-accent-gold/20 rounded-lg -z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredId === artwork.id ? 1 : 0 }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* View All Button */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <button className="retro-button">
          VIEW ALL ARTWORKS
        </button>
      </motion.div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, #D4AF37 0%, transparent 50%)`,
          backgroundSize: '30px 30px'
        }} />
      </div>
    </section>
  )
}