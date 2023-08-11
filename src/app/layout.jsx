import NavBar from '@/components/Navbar/page'
import '@/styles/globals.css'
import PageLoader from 'next/dist/client/page-loader'
import { Inter } from 'next/font/google'
import { Suspense } from 'react'
import ThemeProvider from '@/context/Theme'
import SearchProvider from '@/context/SearchBtn'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Rashad's Weather App",
  description: "Weather Forcast Generated by Rashad's Web Development",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Rashad's Tag Pic.jpeg" />
      </head>
      <body className={inter.className}>
        <Suspense fallback={<PageLoader />}>
          <ThemeProvider>
            <NavBar />
            <SearchProvider>
              {children}
            </SearchProvider>
          </ThemeProvider>
        </Suspense>
      </body>
    </html>
  )
}