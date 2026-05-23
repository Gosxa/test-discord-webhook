import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'WishWe Deploy Test',
  description: 'Test page for Vercel + Discord webhook pipeline'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
