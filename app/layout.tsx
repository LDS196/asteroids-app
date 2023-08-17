import './globals.scss'
import type { Metadata } from 'next'
import React from 'react'
import s from '@/app/page.module.scss'
import Title from '@/app/components/Title/Title'
import Company from '@/app/components/Company/Company'
import Planet from '@/app/components/Planet/Planet'
import Footer from '@/app/components/Footer/Footer'
import { MainContent } from '@/app/components/MainContent/MainContent'

export const metadata: Metadata = {
  title: 'Asteroids',
  description: 'Nasa',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ru'>
      <body>
        <div className='wrapper'>
          <header className='header'>
            <Title />
            <Company />
          </header>
          <div className='planet-bgr'>
            <Planet />
          </div>
          <main className='content'>{children}</main>
          <div className='footer'>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
