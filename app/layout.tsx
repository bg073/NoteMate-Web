import React from 'react'
import './globals.css'
import type { Metadata } from 'next'
import { Space_Grotesk, Outfit } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
})

export const metadata: Metadata = {
  title: 'NoteMate - Your Ultimate Study Companion',
  description: 'Transform your study experience with AI-powered analysis, smart summaries, and comprehensive study tools.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${spaceGrotesk.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  )
} 