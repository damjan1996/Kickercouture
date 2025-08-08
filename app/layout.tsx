import type { Metadata } from 'next'
import { Inter, Press_Start_2P, VT323 } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const pressStart2P = Press_Start_2P({ 
  weight: '400',
  subsets: ['latin'], 
  variable: '--font-press-start' 
})
const vt323 = VT323({ 
  weight: '400',
  subsets: ['latin'], 
  variable: '--font-vt323' 
})

export const metadata: Metadata = {
  title: 'KickerCouture - Where Street Meets Art',
  description: 'Retro Football Culture × Digital Art - Custom artworks and merchandise inspired by street football and favela culture',
  keywords: 'football art, street football, favela football, custom artwork, retro gaming, sports art',
  authors: [{ name: 'Fabio' }],
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#0A0A0A',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={`${inter.variable} ${pressStart2P.variable} ${vt323.variable}`}>
      <body className="bg-primary-dark text-text-primary overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}