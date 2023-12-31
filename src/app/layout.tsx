import React from 'react'
import type { Metadata } from 'next'
import './globals.css'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Website',
  description: 'Generated by create next app'
}

export const RootLayout = ({ children }: { children: React.ReactNode }): React.JSX.Element => {
  return (
    <html lang={'en'}>
      <body>
        <AppRouterCacheProvider>
          <ThemeRegistry>
            <NavBar/>
            {children}
            <Footer/>
          </ThemeRegistry>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
export default RootLayout
