import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Oli Mival — Product Thinker',
  description: "I don't manage products. I think about them. My agentic team handles the rest.",
  openGraph: {
    title: 'Oli Mival — Product Thinker',
    description: "I don't manage products. I think about them. My agentic team handles the rest.",
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oli Mival — Product Thinker',
    description: "I don't manage products. I think about them. My agentic team handles the rest.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}
