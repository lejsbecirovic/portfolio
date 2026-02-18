import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import SmoothScroll from '@/components/SmoothScroll'
import { Inter, Space_Grotesk } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space'
})

export const metadata: Metadata = {
  title: 'Lejs Becirovic | Frontend & CMS Developer',
  description: 'Frontend & CMS Developer spezialisiert auf barrierefreie Webentwicklung.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-[#0a0f0d] text-[#ecfdf5]`}>
        {/* Subtle Grid Pattern Background */}
        <div className="fixed inset-0 -z-10">
          <div 
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `
                linear-gradient(to right, #10b981 1px, transparent 1px),
                linear-gradient(to bottom, #10b981 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px'
            }}
          />
          {/* Gradient Overlay */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at 50% 0%, rgba(16, 185, 129, 0.05), transparent 50%)'
            }}
          />
        </div>
        
        <Navbar />
        <SmoothScroll />
        {children}
      </body>
    </html>
  )
}
