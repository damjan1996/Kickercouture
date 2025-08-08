'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="relative bg-primary-dark border-t border-accent-gold/20 overflow-hidden">
      {/* TV Test Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-8 h-full">
          <div className="bg-white" />
          <div className="bg-yellow-500" />
          <div className="bg-cyan-500" />
          <div className="bg-green-500" />
          <div className="bg-magenta-500" />
          <div className="bg-red-500" />
          <div className="bg-blue-500" />
          <div className="bg-black" />
        </div>
      </div>

      <div className="relative container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <h3 className="font-retro-game text-lg sm:text-2xl text-accent-gold mb-4 glitch-effect">
              KICKERCOUTURE
            </h3>
            <p className="font-body text-text-primary/60 mb-4 max-w-md">
              Where street football culture meets digital art. Unique artworks inspired by the 
              beautiful game from the favelas to your walls.
            </p>
            
            {/* Newsletter */}
            <div className="mt-6">
              <p className="font-retro-game text-sm text-text-primary mb-2">
                SUBSCRIBE FOR UPDATES
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="YOUR@EMAIL.COM"
                  className="flex-1 px-4 py-2 bg-black/50 border border-accent-gold/30 font-body text-sm text-text-primary placeholder-text-primary/40 focus:border-accent-gold focus:outline-none transition-colors"
                />
                <button className="px-4 py-2 bg-accent-gold text-primary-dark font-retro-game text-sm hover:bg-accent-gold/80 transition-colors">
                  SEND
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-retro-game text-sm text-accent-gold mb-4">EXPLORE</h4>
            <ul className="space-y-2">
              {['Artworks', 'Shop', 'Custom Orders', 'About'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="font-body text-sm text-text-primary/60 hover:text-accent-gold transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-retro-game text-sm text-accent-gold mb-4">CONNECT</h4>
            <div className="flex flex-col space-y-2">
              {[
                { name: 'Instagram', handle: '@kickercouture' },
                { name: 'TikTok', handle: '@kickercouture' },
                { name: 'Twitter', handle: '@kickercouture' },
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="font-body text-sm text-text-primary/60 hover:text-accent-gold transition-colors"
                >
                  {social.name}: {social.handle}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ASCII Art Divider */}
        <div className="border-t border-accent-gold/20 pt-8 mb-8 overflow-x-auto">
          <pre className="font-mono text-[0.5rem] sm:text-xs text-accent-gold/40 text-center whitespace-pre">
{`
 _  _____ ____ _  _______ ____   ____ ___  _   _ _____ _   _ ____  _____ 
| |/ /_ _/ ___| |/ / ____|  _ \\ / ___/ _ \\| | | |_   _| | | |  _ \\| ____|
| ' / | | |   | ' /|  _| | |_) | |  | | | | | | | | | | | | | |_) |  _|  
| . \\ | | |___| . \\| |___|  _ <| |__| |_| | |_| | | | | |_| |  _ <| |___ 
|_|\\_\\___\\____|_|\\_\\_____|_| \\_\\\\____\\___/ \\___/  |_|  \\___/|_| \\_\\_____|
`}
          </pre>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-body text-text-primary/40">
          <div>
            © 2024 KickerCouture. All rights reserved. Made with ♥ by Fabio
          </div>
          <div className="flex gap-4">
            <Link href="/impressum" className="hover:text-text-primary transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-text-primary transition-colors">
              Datenschutz
            </Link>
            <Link href="/agb" className="hover:text-text-primary transition-colors">
              AGB
            </Link>
          </div>
        </div>

        {/* TV Static Effect */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent-gold to-transparent"
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>
    </footer>
  )
}