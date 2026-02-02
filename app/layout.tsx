import React from "react"
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: 'AUTM 2026 Annual Conference | Fuller IP Law',
  description: 'Fuller IP Law is a proud sponsor of AUTM 2026. Join our panel discussion on "Dormant No More: Alternative Paths to Fund and Activate Dormant IP" - February 10th, 2026.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Load Typekit Poppins weights */}
        <link rel="stylesheet" href="https://use.typekit.net/ubu0llg.css" />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
