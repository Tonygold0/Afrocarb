

import { CustomLayout } from './CustomLayout'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AfroCarb',
  description: 'Afro Carbon',
  icons: {
    icon: '/logo.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="logo.svg" />
      </head>
      <body className={inter.className}>
        <CustomLayout >
          {children}
        </CustomLayout>
      </body>
    </html>
  )
}
