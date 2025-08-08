'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function HeroSection() {
  const [flicker, setFlicker] = useState(false)
  const [pixelAnimation, setPixelAnimation] = useState(0)

  // Random flicker effect
  useEffect(() => {
    const flickerInterval = setInterval(() => {
      if (Math.random() < 0.02) { // 2% chance to flicker
        setFlicker(true)
        setTimeout(() => setFlicker(false), 50 + Math.random() * 50)
      }
    }, 2000)

    // Pixel animation
    const pixelInterval = setInterval(() => {
      setPixelAnimation(prev => (prev + 1) % 4)
    }, 500)

    return () => {
      clearInterval(flickerInterval)
      clearInterval(pixelInterval)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Colorful Background */}
      <div 
        className={`absolute inset-0 ${flicker ? 'opacity-95' : 'opacity-100'}`}
        style={{
          background: 'linear-gradient(to b, #1a0f3d, #2d1b69, #1a0f3d)',
          transition: 'opacity 0.05s',
        }}
      >
        {/* Pixel Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              #ff6b00 2px,
              #ff6b00 3px
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 2px,
              #ff6b00 2px,
              #ff6b00 3px
            )`,
            backgroundSize: '4px 4px',
          }}
        />

        {/* Content */}
        <div className="h-full flex flex-col items-center justify-center text-center px-2 sm:px-8 relative z-10 pt-0 sm:pt-0">
          {/* Main Title with Pixel Font Style */}
          <motion.h1 
            className="relative mb-2 sm:mb-4 mt-4 sm:mt-8"
            style={{
              fontFamily: 'var(--font-press-start)',
              fontSize: 'clamp(0.7rem, 2vw, 1.5rem)',
              color: '#ff6b00',
              textShadow: `
                1px 1px 0px #cc5500,
                2px 2px 0px #994400,
                3px 3px 0px #663300,
                4px 4px 10px rgba(0,0,0,0.8)
              `,
              transform: `translateY(${pixelAnimation * 2}px)`,
              transition: 'transform 0.1s steps(1)',
            }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            KICKERCOUTURE
          </motion.h1>

          {/* 16-Bit Stadium - Side View */}
          <motion.div 
            className="relative w-full max-w-[200px] sm:max-w-md px-2 sm:px-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <svg viewBox="0 0 400 240" className="w-full h-auto pixelated">
              <defs>
                {/* Grass Pattern */}
                <pattern id="grassPattern" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
                  <rect width="8" height="8" fill="#3a6b1e" />
                  <rect x="0" y="0" width="4" height="4" fill="#2d5016" />
                  <rect x="4" y="4" width="4" height="4" fill="#2d5016" />
                </pattern>
                
                {/* Metal Pattern */}
                <pattern id="metalPattern" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
                  <rect width="4" height="4" fill="#666666" />
                  <rect x="0" y="0" width="2" height="2" fill="#888888" />
                </pattern>
              </defs>

              {/* Sky Background */}
              <rect x="0" y="0" width="400" height="120" fill="#5577aa" />
              
              {/* Stadium Structure - Side View */}
              {/* Main Stand */}
              <polygon points="40,80 360,80 380,120 380,200 20,200 20,120" fill="#444444" />
              
              {/* Roof */}
              <polygon points="20,80 40,80 380,80 400,80 380,60 20,60" fill="#333333" />
              <rect x="20" y="60" width="360" height="4" fill="#555555" />
              
              {/* Support Pillars */}
              <rect x="60" y="80" width="8" height="120" fill="#555555" />
              <rect x="140" y="80" width="8" height="120" fill="#555555" />
              <rect x="220" y="80" width="8" height="120" fill="#555555" />
              <rect x="300" y="80" width="8" height="120" fill="#555555" />
              
              {/* Stand Tiers */}
              <polygon points="40,120 360,120 360,140 60,140" fill="#ff6b00" opacity="0.8" />
              <polygon points="60,140 360,140 360,160 80,160" fill="#cc5500" opacity="0.8" />
              <polygon points="80,160 360,160 360,180 100,180" fill="#ff6b00" opacity="0.8" />
              <polygon points="100,180 360,180 360,200 120,200" fill="#cc5500" opacity="0.8" />
              
              {/* Field */}
              <rect x="0" y="200" width="400" height="40" fill="url(#grassPattern)" />
              
              {/* Field Lines */}
              <rect x="0" y="200" width="400" height="2" fill="#ffffff" opacity="0.8" />
              <rect x="50" y="202" width="2" height="38" fill="#ffffff" opacity="0.6" />
              <rect x="200" y="202" width="2" height="38" fill="#ffffff" opacity="0.6" />
              <rect x="350" y="202" width="2" height="38" fill="#ffffff" opacity="0.6" />
              
              {/* Goal */}
              <rect x="10" y="180" width="4" height="20" fill="#ffffff" />
              <rect x="10" y="176" width="20" height="4" fill="#ffffff" />
              <rect x="26" y="180" width="4" height="20" fill="#ffffff" />
              
              {/* Floodlights */}
              <rect x="80" y="20" width="8" height="60" fill="url(#metalPattern)" />
              <polygon points="76,16 92,16 88,8 80,8" fill="#ffcc00" />
              <rect x="240" y="20" width="8" height="60" fill="url(#metalPattern)" />
              <polygon points="236,16 252,16 248,8 240,8" fill="#ffcc00" />
              
              {/* Light Effects */}
              <polygon points="84,20 60,200 100,200" fill="#ffcc00" opacity="0.1" />
              <polygon points="244,20 220,200 260,200" fill="#ffcc00" opacity="0.1" />
              
              {/* Pixel Crowds in Stands */}
              {[...Array(30)].map((_, i) => {
                const x = 70 + (i * 10);
                const y = 125 + Math.floor(i % 4) * 20;
                const colors = ['#ff1493', '#00ff00', '#ffff00', '#00ffff', '#ff00ff'];
                const color = colors[i % colors.length];
                return <rect key={i} x={x} y={y} width="4" height="4" fill={color} />;
              })}
              
              {/* Stadium Details */}
              <rect x="100" y="90" width="40" height="20" fill="#1a1a1a" opacity="0.5" />
              <rect x="180" y="90" width="40" height="20" fill="#1a1a1a" opacity="0.5" />
              <rect x="260" y="90" width="40" height="20" fill="#1a1a1a" opacity="0.5" />
              
              {/* Advertising Boards */}
              <rect x="40" y="190" width="60" height="10" fill="#ff6b00" />
              <rect x="110" y="190" width="60" height="10" fill="#ffcc00" />
              <rect x="180" y="190" width="60" height="10" fill="#ff6b00" />
              <rect x="250" y="190" width="60" height="10" fill="#ffcc00" />
              <rect x="320" y="190" width="60" height="10" fill="#ff6b00" />
            </svg>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-row gap-2 sm:gap-3 mt-3 sm:mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <button 
              className="relative group"
              style={{
                fontFamily: 'var(--font-press-start)',
                fontSize: 'clamp(0.5rem, 1vw, 0.8rem)',
                padding: '8px 12px',
                background: 'linear-gradient(to b, #ff6b00, #cc5500)',
                color: '#ffffff',
                border: '4px solid #000000',
                boxShadow: `
                  inset -2px -4px 0px #994400,
                  inset 2px 2px 0px #ff8833,
                  4px 4px 0px #000000,
                  8px 8px 0px rgba(0,0,0,0.3)
                `,
                transform: 'translateY(0)',
                transition: 'all 0.1s steps(1)',
              }}
              onMouseDown={(e) => e.currentTarget.style.transform = 'translateY(4px)'}
              onMouseUp={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <span className="relative z-10">SHOP NOW</span>
            </button>
            
            <button 
              className="relative group"
              style={{
                fontFamily: 'var(--font-press-start)',
                fontSize: 'clamp(0.5rem, 1vw, 0.8rem)',
                padding: '8px 12px',
                background: 'transparent',
                color: '#ff6b00',
                border: '4px solid #ff6b00',
                transform: 'translateY(0)',
                transition: 'all 0.1s steps(1)',
              }}
              onMouseDown={(e) => e.currentTarget.style.transform = 'translateY(2px)'}
              onMouseUp={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <span className="relative z-10">GALLERY</span>
            </button>
          </motion.div>

          {/* Pixel Art Decorations */}
          <div className="absolute top-24 sm:top-20 left-2 sm:left-10 text-xl sm:text-4xl animate-pulse" style={{ color: '#ff6b00' }}>
            ◆
          </div>
          <div className="absolute top-36 sm:top-32 right-2 sm:right-20 text-xl sm:text-4xl animate-pulse" style={{ color: '#ffcc00', animationDelay: '0.5s' }}>
            ◇
          </div>
          <div className="absolute bottom-36 sm:bottom-32 left-2 sm:left-20 text-xl sm:text-4xl animate-pulse" style={{ color: '#ff6b00', animationDelay: '1s' }}>
            ◆
          </div>
          <div className="absolute bottom-24 sm:bottom-20 right-2 sm:right-10 text-xl sm:text-4xl animate-pulse" style={{ color: '#ffcc00', animationDelay: '1.5s' }}>
            ◇
          </div>
        </div>

        {/* Scanlines Effect */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(255, 107, 0, 0.03) 2px,
              rgba(255, 107, 0, 0.03) 4px
            )`,
            animation: 'scanlines 8s linear infinite',
          }}
        />
      </div>

      {/* TV Background Image - On top of the content */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <Image 
          src="/images/header-background.png"
          alt="Retro TV Setup"
          fill
          className="object-cover object-center hidden sm:block"
          style={{
            mixBlendMode: 'screen',
            opacity: 0.9,
          }}
          priority
        />
        <Image 
          src="/images/header-background-mobile.png"
          alt="Retro TV Setup Mobile"
          fill
          className="object-cover object-center block sm:hidden"
          style={{
            mixBlendMode: 'screen',
            opacity: 0.9,
          }}
          priority
        />
      </div>

      <style jsx>{`
        @keyframes scanlines {
          0% { transform: translateY(0); }
          100% { transform: translateY(10px); }
        }
        
        .pixelated {
          image-rendering: pixelated;
          image-rendering: -moz-crisp-edges;
          image-rendering: crisp-edges;
        }
      `}</style>
    </section>
  )
}