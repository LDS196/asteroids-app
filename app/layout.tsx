import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import React from 'react'

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Asteroids',
  description: 'Nasa',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ru'>
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
