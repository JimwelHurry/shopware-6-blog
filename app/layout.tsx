import type React from "react"
import type { Metadata } from "next"
import { Inter, Newsreader } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const newsreader = Newsreader({ subsets: ["latin"], variable: "--font-serif", style: "italic" })

export const metadata: Metadata = {
  title: "Magazin | Ersatzteilshop",
  description: "Reparaturanleitungen, Tipps und Tricks für Ihre Haushaltsgeräte.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={`${inter.variable} ${newsreader.variable}`}>
      <body className="antialiased selection:bg-primary/10 selection:text-primary">{children}</body>
    </html>
  )
}
