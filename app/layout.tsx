import './globals.css'

import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

import { cn } from '@/lib/utils'
import Navbar from '@/components/Nav/Navbar'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ["400", "500", "600", "500"],
  variable: "--font-poppins"
})

export const metadata: Metadata = {
  title: 'Drop IT',
  description: 'Drop IT is a modern E-Commerce Marketplace for digital products.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={cn("relative h-full font-sans antialiased", poppins.className)}>
        <main className="relative flex flex-col min-h-screen">
          <Navbar />
          <div className="flex-grow flex-1">{children}</div>
        </main>
      </body>
    </html>
  )
}
