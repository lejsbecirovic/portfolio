import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../components/layout/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dein Name | Frontend & CMS Developer',
  description: 'Frontend & CMS Developer spezialisiert auf barrierefreie Webentwicklung und moderne React-Applikationen.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className={`${inter.className} bg-gray-950 text-white`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}