import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import SkipLink from '@/components/ui/SkipLink'
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
  keywords: [
    'Frontend Developer',
    'CMS Developer',
    'Webentwicklung',
    'Accessibility',
    'WCAG 2.2',
    'React',
    'TypeScript',
    'Next.js',
    'Barrierefreie Webentwicklung',
  ],
  authors: [{ name: 'Lejs Becirovic' }],
  creator: 'Lejs Becirovic',
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://lejs-becirovic.vercel.app',
    siteName: 'Lejs Becirovic Portfolio',
    title: 'Lejs Becirovic | Frontend & CMS Developer',
    description: 'Frontend & CMS Developer spezialisiert auf barrierefreie Webentwicklung.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Lejs Becirovic - Frontend & CMS Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lejs Becirovic | Frontend & CMS Developer',
    description: 'Frontend & CMS Developer spezialisiert auf barrierefreie Webentwicklung.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || 'https://lejs-becirovic.vercel.app',
  },
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
        <SkipLink />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
