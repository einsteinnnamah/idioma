import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="theme-color" content="#FFFFFF" />
        <meta name="description" content="Learn a new word every day" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
      </head>
      <body className={inter.className}>
        {/* Mobile View */}
        <div className="md:hidden">
          {children}
        </div>

        {/* Desktop Message */}
        <div className="hidden md:flex min-h-screen items-center justify-center p-4">
          <p className="text-center text-xl font-medium text-black">
            Please access the app via a mobile device for the best experience
          </p>
        </div>
      </body>
    </html>
  )
}
