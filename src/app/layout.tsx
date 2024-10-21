import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import './globals.css'
import React from 'react'
import {Inter,Space_Grotesk} from 'next/font/google'
import { Metadata } from 'next'
import { ThemeProvider } from '@/context/ThemeProvider'

export const meta: Metadata = {
  title: 'DevFlow',
  description: 'Ask a question and get answers from the community',
  icons: {
    icon: '/assets/images/site-logo.svg',
  }
}

const inter=Inter(
  {
    subsets: ['latin'],
    weight:['100','200','300','400','500','600','700','800','900'],
    variable:'--font-inter'
  }
)

const spaceGrotesk=Space_Grotesk(
  {
    subsets: ['latin'],
    weight:['300','400','500','600','700'],
    variable:'--font-space-grotesk'
  }
)

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
      <html lang="en">
        <body className={`${inter.variable} ${spaceGrotesk}`}>
        <ClerkProvider
      appearance={
        {
          elements:{
            formButtonPrimary:'primary-gradient',
            footerActionLink:'primary-text-gradient hover:text-primary-500',
          }
        }
      }
    >
          <ThemeProvider>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          {children}
          </ThemeProvider>
          </ClerkProvider>
        </body>
      </html>
    
  )
}