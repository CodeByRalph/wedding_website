import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { HiMenu } from "react-icons/hi";
import './globals.css'

import Link from 'next/link'

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
      <body className={`${inter.className} bg-green-200 h-auto`}>
        {/* navbar goes here since its on all pages */}
        <nav className="sm:flex pl-10 pr-10 mt-8 w-screen absolute z-10">
          <Link href="">< HiMenu className="text-white text-4xl float-right mr-5 sm:hidden"/></Link>
          
          <h1 className="text-white text-xl sm:w-1/3 sm:text-4xl">Odette & Ralph</h1>
          <ul className="hidden list-none sm:flex flex-row justify-end items-center w-2/3 float-right text-white">
            <li className="pr-8 text-xl"><Link href="/">Our Story</Link></li>
            <li className="pr-8 text-xl"><Link href="">Info</Link></li> 
            <li className="pr-8 text-xl"><Link href="">Registry</Link></li>
            <li className="pr-8 text-xl"><Link href="">Sponsorship</Link></li>
            <li className="text-xl"><Link href="/rsvp">RSVP</Link></li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  )
}
