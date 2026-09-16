import type { Metadata } from 'next'
import { Space_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-space-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Team Rocket | SWE Portfolio',
  description: 'Team Rocket — Software Engineering Team Portfolio. Featuring Digital Graveyard, a platform that revives abandoned open-source repositories.',
  keywords: ['Team Rocket', 'Software Engineering', 'Portfolio', 'Digital Graveyard', 'SWE'],
  openGraph: {
    title: 'Team Rocket | SWE Portfolio',
    description: 'Team Rocket — Software Engineering Team Portfolio. Featuring Digital Graveyard.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={spaceMono.variable}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className="bg-background font-space-mono text-on-surface antialiased min-h-screen scanline">
        <Header />
        <main className="w-full pt-16 pb-12 bg-background min-h-[calc(100vh-3rem)]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
