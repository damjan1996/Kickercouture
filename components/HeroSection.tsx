'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function HeroSection() {
  const [flicker, setFlicker] = useState(false)
  const [pixelAnimation, setPixelAnimation] = useState(0)
  const [staticNoise, setStaticNoise] = useState(false)
  const [chromatic, setChromatic] = useState(false)
  const [verticalHold, setVerticalHold] = useState(0)

  // CRT TV Effects
  useEffect(() => {
    // Random flicker effect
    const flickerInterval = setInterval(() => {
      if (Math.random() < 0.05) { // 5% chance to flicker
        setFlicker(true)
        setTimeout(() => setFlicker(false), 50 + Math.random() * 100)
      }
    }, 1000)

    // Static noise effect
    const staticInterval = setInterval(() => {
      if (Math.random() < 0.03) { // 3% chance for static
        setStaticNoise(true)
        setTimeout(() => setStaticNoise(false), 100 + Math.random() * 200)
      }
    }, 2000)

    // Chromatic aberration effect
    const chromaticInterval = setInterval(() => {
      if (Math.random() < 0.04) { // 4% chance
        setChromatic(true)
        setTimeout(() => setChromatic(false), 200 + Math.random() * 300)
      }
    }, 3000)

    // Vertical hold effect (rolling)
    const verticalInterval = setInterval(() => {
      if (Math.random() < 0.02) { // 2% chance
        setVerticalHold(Math.random() * 10 - 5)
        setTimeout(() => setVerticalHold(0), 500 + Math.random() * 500)
      }
    }, 5000)

    // Pixel animation
    const pixelInterval = setInterval(() => {
      setPixelAnimation(prev => (prev + 1) % 4)
    }, 500)

    return () => {
      clearInterval(flickerInterval)
      clearInterval(pixelInterval)
      clearInterval(staticInterval)
      clearInterval(chromaticInterval)
      clearInterval(verticalInterval)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* CRT TV Container */}
      <div 
        className={`absolute inset-0 ${flicker ? 'opacity-90' : 'opacity-100'} ${chromatic ? 'crt-chromatic' : ''}`}
        style={{
          background: 'linear-gradient(to b, #1a0f3d, #2d1b69, #1a0f3d)',
          transition: 'opacity 0.05s',
          transform: `translateY(${verticalHold}px)`,
          filter: staticNoise ? 'contrast(200%) brightness(150%)' : 'none',
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
        <div className="h-full flex flex-col items-center justify-center text-center px-2 sm:px-8 relative z-10 pt-20 sm:pt-24">
          {/* Main Title with Pixel Font Style */}
          <motion.h1 
            className={`relative mb-2 sm:mb-4 mt-4 sm:mt-8 ${chromatic ? 'crt-chromatic' : ''}`}
            style={{
              fontFamily: 'var(--font-press-start)',
              fontSize: 'clamp(0.9rem, 2.5vw, 2rem)',
              color: '#ff6b00',
              textShadow: `
                1px 1px 0px #cc5500,
                2px 2px 0px #994400,
                3px 3px 0px #663300,
                4px 4px 10px rgba(0,0,0,0.8),
                0 0 20px rgba(255, 107, 0, 0.5)
              `,
              transform: `translateY(${pixelAnimation * 2}px) scaleX(${flicker ? 1.01 : 1})`,
              transition: 'transform 0.1s steps(1)',
              filter: flicker ? 'brightness(1.2)' : 'brightness(1)',
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            KICKERCOUTURE
          </motion.h1>

          {/* 16-Bit Soccer Field - Side View */}
          <motion.div 
            className="relative w-full max-w-[250px] sm:max-w-md px-2 sm:px-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              filter: flicker ? 'brightness(0.9) contrast(1.1)' : 'brightness(1)',
            }}
          >
            <svg viewBox="0 0 320 180" className="w-full h-auto pixelated">
              <defs>
                {/* Grass Pattern */}
                <pattern id="grassPattern" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
                  <rect width="8" height="8" fill="#2d5c1f" />
                  <rect x="0" y="0" width="4" height="4" fill="#347524" />
                  <rect x="4" y="4" width="4" height="4" fill="#347524" />
                </pattern>
              </defs>

              {/* Sky */}
              <rect x="0" y="0" width="320" height="80" fill="#87CEEB" />
              
              {/* Clouds */}
              <rect x="40" y="20" width="32" height="8" fill="#ffffff" opacity="0.8" />
              <rect x="36" y="24" width="40" height="8" fill="#ffffff" opacity="0.8" />
              <rect x="180" y="30" width="24" height="8" fill="#ffffff" opacity="0.8" />
              <rect x="176" y="34" width="32" height="8" fill="#ffffff" opacity="0.8" />
              
              {/* Field */}
              <rect x="0" y="80" width="320" height="100" fill="url(#grassPattern)" />
              
              {/* Field Lines */}
              <rect x="0" y="80" width="320" height="2" fill="#ffffff" opacity="0.9" />
              <rect x="0" y="178" width="320" height="2" fill="#ffffff" opacity="0.9" />
              <rect x="160" y="80" width="2" height="100" fill="#ffffff" opacity="0.9" />
              
              {/* Goals */}
              <rect x="10" y="110" width="3" height="40" fill="#ffffff" />
              <rect x="10" y="107" width="20" height="3" fill="#ffffff" />
              <rect x="27" y="110" width="3" height="40" fill="#ffffff" />
              
              <rect x="290" y="110" width="3" height="40" fill="#ffffff" />
              <rect x="290" y="107" width="20" height="3" fill="#ffffff" />
              <rect x="307" y="110" width="3" height="40" fill="#ffffff" />
              
              {/* Penalty Areas */}
              <rect x="0" y="100" width="50" height="2" fill="#ffffff" opacity="0.7" />
              <rect x="0" y="158" width="50" height="2" fill="#ffffff" opacity="0.7" />
              <rect x="48" y="100" width="2" height="60" fill="#ffffff" opacity="0.7" />
              
              <rect x="270" y="100" width="50" height="2" fill="#ffffff" opacity="0.7" />
              <rect x="270" y="158" width="50" height="2" fill="#ffffff" opacity="0.7" />
              <rect x="270" y="100" width="2" height="60" fill="#ffffff" opacity="0.7" />
              
              {/* Players - Team 1 (Red) */}
              {/* Player 1 - Running */}
              <g transform="translate(80, 120)">
                <rect x="0" y="0" width="8" height="8" fill="#ff0000" />
                <rect x="2" y="-4" width="4" height="4" fill="#fdbcb4" />
                <rect x="0" y="8" width="3" height="8" fill="#000080" />
                <rect x="5" y="8" width="3" height="8" fill="#000080" />
                <rect x="-2" y="3" width="4" height="2" fill="#fdbcb4" />
                <rect x="6" y="3" width="4" height="2" fill="#fdbcb4" />
              </g>
              
              {/* Player 2 - Kicking */}
              <g transform="translate(140, 130)">
                <rect x="0" y="0" width="8" height="8" fill="#ff0000" />
                <rect x="2" y="-4" width="4" height="4" fill="#fdbcb4" />
                <rect x="0" y="8" width="3" height="8" fill="#000080" />
                <rect x="5" y="8" width="3" height="6" fill="#000080" />
                <rect x="5" y="14" width="6" height="2" fill="#000080" transform="rotate(-30 8 15)" />
                <rect x="-2" y="3" width="4" height="2" fill="#fdbcb4" />
                <rect x="6" y="3" width="4" height="2" fill="#fdbcb4" />
              </g>
              
              {/* Player 3 - Running */}
              <g transform="translate(200, 115)">
                <rect x="0" y="0" width="8" height="8" fill="#ff0000" />
                <rect x="2" y="-4" width="4" height="4" fill="#fdbcb4" />
                <rect x="0" y="8" width="3" height="8" fill="#000080" />
                <rect x="5" y="8" width="3" height="8" fill="#000080" />
                <rect x="-2" y="3" width="4" height="2" fill="#fdbcb4" />
                <rect x="6" y="3" width="4" height="2" fill="#fdbcb4" />
              </g>
              
              {/* Players - Team 2 (Blue) */}
              {/* Player 4 - Running */}
              <g transform="translate(120, 140)">
                <rect x="0" y="0" width="8" height="8" fill="#0066ff" />
                <rect x="2" y="-4" width="4" height="4" fill="#fdbcb4" />
                <rect x="0" y="8" width="3" height="8" fill="#ffffff" />
                <rect x="5" y="8" width="3" height="8" fill="#ffffff" />
                <rect x="-2" y="3" width="4" height="2" fill="#fdbcb4" />
                <rect x="6" y="3" width="4" height="2" fill="#fdbcb4" />
              </g>
              
              {/* Player 5 - Goalkeeper */}
              <g transform="translate(20, 125)">
                <rect x="0" y="0" width="8" height="8" fill="#00ff00" />
                <rect x="2" y="-4" width="4" height="4" fill="#fdbcb4" />
                <rect x="0" y="8" width="3" height="8" fill="#000000" />
                <rect x="5" y="8" width="3" height="8" fill="#000000" />
                <rect x="-4" y="0" width="4" height="2" fill="#fdbcb4" />
                <rect x="8" y="0" width="4" height="2" fill="#fdbcb4" />
              </g>
              
              {/* Player 6 - Running */}
              <g transform="translate(240, 135)">
                <rect x="0" y="0" width="8" height="8" fill="#0066ff" />
                <rect x="2" y="-4" width="4" height="4" fill="#fdbcb4" />
                <rect x="0" y="8" width="3" height="8" fill="#ffffff" />
                <rect x="5" y="8" width="3" height="8" fill="#ffffff" />
                <rect x="-2" y="3" width="4" height="2" fill="#fdbcb4" />
                <rect x="6" y="3" width="4" height="2" fill="#fdbcb4" />
              </g>
              
              {/* Ball */}
              <circle cx="145" cy="140" r="4" fill="#ffffff" />
              <circle cx="143" cy="138" r="1" fill="#000000" />
              <circle cx="147" cy="138" r="1" fill="#000000" />
              <circle cx="145" cy="142" r="1" fill="#000000" />
            </svg>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-row gap-2 sm:gap-3 mt-3 sm:mt-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <button 
              className="relative group"
              style={{
                fontFamily: 'var(--font-press-start)',
                fontSize: 'clamp(0.6rem, 1.2vw, 0.9rem)',
                padding: '10px 16px',
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
                fontSize: 'clamp(0.6rem, 1.2vw, 0.9rem)',
                padding: '10px 16px',
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

        {/* CRT Effects Overlay */}
        {/* Scanlines */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(0, 0, 0, 0.25) 2px,
              rgba(0, 0, 0, 0.25) 4px
            )`,
            animation: 'scanlines 8s linear infinite',
          }}
        />
        
        {/* Static Noise */}
        {staticNoise && (
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.2'/%3E%3C/svg%3E")`,
              mixBlendMode: 'screen',
              opacity: 0.3,
            }}
          />
        )}
        
        {/* Phosphor Glow */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0, 255, 0, 0.05) 100%)',
            animation: 'phosphorGlow 4s ease-in-out infinite alternate',
          }}
        />
        
        {/* Vignette */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 50%, rgba(0, 0, 0, 0.5) 100%)',
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
          quality={100}
          sizes="100vw"
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
          quality={100}
          sizes="100vw"
        />
      </div>

      <style jsx>{`
        @keyframes scanlines {
          0% { transform: translateY(0); }
          100% { transform: translateY(10px); }
        }
        
        @keyframes phosphorGlow {
          0% { opacity: 0.8; }
          100% { opacity: 1; }
        }
        
        @keyframes crtTurnOn {
          0% {
            transform: scale(1, 0.8) translateY(0);
            filter: brightness(30);
            opacity: 0.1;
          }
          5% {
            transform: scale(1, 0.8) translateY(0);
            filter: brightness(30);
            opacity: 1;
          }
          10% {
            transform: scale(1.3, 0.6) translateY(0);
            filter: brightness(10);
          }
          15% {
            transform: scale(1, 1) translateY(0);
            filter: brightness(2);
          }
          100% {
            transform: scale(1, 1) translateY(0);
            filter: brightness(1);
          }
        }
        
        .pixelated {
          image-rendering: pixelated;
          image-rendering: -moz-crisp-edges;
          image-rendering: crisp-edges;
        }
        
        .crt-chromatic {
          animation: chromaticAberration 0.5s infinite;
        }
        
        @keyframes chromaticAberration {
          0%, 100% {
            text-shadow: 
              -0.01em 0 0 rgba(255, 0, 0, 0.7),
              0.01em 0 0 rgba(0, 255, 255, 0.7);
          }
          50% {
            text-shadow: 
              -0.02em 0 0 rgba(255, 0, 0, 0.7),
              0.02em 0 0 rgba(0, 255, 255, 0.7);
          }
        }
      `}</style>
    </section>
  )
}