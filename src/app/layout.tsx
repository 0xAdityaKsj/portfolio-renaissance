import type { Metadata } from 'next'
import './globals.css'
import Topnav from './_components/Topnav'

export const metadata: Metadata = {
  title: 'Aditya Kantipudi | Portfolio',
  description: 'A Renaissance-inspired portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Topnav />
        {children}
      </body>
    </html>
  )
}