'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const navItems = [
  { name: 'ARTWORKS', href: '/artworks' },
  { name: 'SHOP', href: '/shop' },
  { name: 'CUSTOM', href: '/custom' },
  { name: 'MERCH', href: '/merch' },
  { name: 'STUDIOS', href: '/studios', comingSoon: true },
  { name: 'ABOUT', href: '/about' },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeItem, setActiveItem] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? 'bg-black/95 backdrop-blur-md' : 'bg-black/90'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="font-retro-game text-2xl text-accent-gold glitch-effect">
                KC
              </div>
            </Link>

            {/* Navigation Items - Desktop */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  <Link
                    href={item.href}
                    className={`font-body text-sm uppercase tracking-wider transition-all duration-200 ${
                      activeItem === item.name
                        ? 'text-accent-gold'
                        : 'text-text-primary hover:text-accent-gold'
                    }`}
                    onMouseEnter={() => setActiveItem(item.name)}
                    onMouseLeave={() => setActiveItem(null)}
                  >
                    <span className="relative">
                      {item.name}
                      {item.comingSoon && (
                        <span className="absolute -top-2 -right-8 text-[8px] text-accent-gold font-retro-game">
                          SOON
                        </span>
                      )}
                    </span>
                  </Link>

                  {/* Hover indicator */}
                  {activeItem === item.name && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent-gold"
                      layoutId="nav-indicator"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <button className="retro-button hidden md:block">
              ENTER SHOP
            </button>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-text-primary relative w-10 h-10 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Open menu</span>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <span className={`block w-6 h-0.5 bg-current transform transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
                }`} />
                <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`} />
                <span className={`block w-6 h-0.5 bg-current transform transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
                }`} />
              </div>
            </button>
          </div>
        </div>

        {/* Retro TV-style border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-gold to-transparent opacity-50" />
      </motion.nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/80 z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              className="fixed right-0 top-0 h-full w-80 max-w-[80vw] bg-black z-50 md:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              {/* Sidebar Header */}
              <div className="flex items-center justify-between p-6 border-b border-accent-gold/20">
                <div className="font-retro-game text-xl text-accent-gold">
                  MENU
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-text-primary hover:text-accent-gold transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Sidebar Content */}
              <div className="p-6">
                {/* Navigation Items */}
                <nav className="space-y-4 mb-8">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className="block font-body text-lg uppercase tracking-wider text-text-primary hover:text-accent-gold transition-all duration-200 py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span className="relative">
                          {item.name}
                          {item.comingSoon && (
                            <span className="ml-2 text-xs text-accent-gold font-retro-game">
                              SOON
                            </span>
                          )}
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* CTA Button */}
                <motion.button 
                  className="retro-button w-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  ENTER SHOP
                </motion.button>

                {/* Social Links */}
                <motion.div 
                  className="mt-12 pt-8 border-t border-accent-gold/20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <p className="font-retro-game text-sm text-accent-gold mb-4">CONNECT</p>
                  <div className="flex gap-4">
                    {['Instagram', 'TikTok', 'Twitter'].map((social) => (
                      <a
                        key={social}
                        href="#"
                        className="text-text-primary hover:text-accent-gold transition-colors"
                      >
                        <span className="sr-only">{social}</span>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"/>
                        </svg>
                      </a>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Pixel decoration */}
              <div className="absolute bottom-4 left-4 text-6xl text-accent-gold/10">
                ◆
              </div>
              <div className="absolute top-1/3 right-4 text-6xl text-accent-gold/10">
                ◇
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}