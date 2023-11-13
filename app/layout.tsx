import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { HiMenu } from "react-icons/hi";
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Odette & Ralph',
  description: 'Ralph and odettes wedding website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-green-400`}>
        {/* navbar goes here since its on all pages */}
        <nav>
          < HiMenu className="text-white text-5xl float-right mr-5 pt-3 sm:hidden"/>
          <h1 className="text-white text-2xl ml-5 pt-3">Odette & Ralph</h1>
          <ul className="hidden list-none sm:inline-block">
            <li>Our Story</li>
            <li>Info</li> 
            <li>Registry</li>
            <li>Sponsorship</li>
            <li>RSVP</li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  )
}
