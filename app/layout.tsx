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
      <body className={`${inter.className} bg-green-200`}>
        {/* navbar goes here since its on all pages */}
        <nav className="sm:flex pl-10 pr-10 mt-8 w-screen absolute z-10">
          < HiMenu className="text-white text-4xl float-right mr-5 sm:hidden"/>
          <h1 className="text-white text-4xl sm:w-1/3">Odette & Ralph</h1>
          <ul className="hidden list-none sm:flex flex-row justify-end items-center w-2/3 float-right text-white">
            <li className="pr-8 text-xl">Our Story</li>
            <li className="pr-8 text-xl">Info</li> 
            <li className="pr-8 text-xl">Registry</li>
            <li className="pr-8 text-xl">Sponsorship</li>
            <li className="text-xl">RSVP</li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  )
}
