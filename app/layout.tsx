import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'LA Time Clock',
  description: 'Real-time clock showing current time in Los Angeles',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
