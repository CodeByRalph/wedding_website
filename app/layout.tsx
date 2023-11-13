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
        <nav className="sm:flex ml-3 mr-3 mt-3">
          < HiMenu className="text-white text-4xl float-right mr-5 sm:hidden"/>
          <h1 className="text-white text-2xl sm:w-1/3">Odette & Ralph</h1>
          <ul className="hidden list-none sm:flex flex-row justify-end items-center w-2/3 float-right text-white">
            <li className="mr-3">Our Story</li>
            <li className="mr-3">Info</li> 
            <li className="mr-3">Registry</li>
            <li className="mr-3">Sponsorship</li>
            <li className="mr-3">RSVP</li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  )
}
