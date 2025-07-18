import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Don't forget to import the CSS

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BookSuccess - Professional Book Publishing & Marketing",
  description:
    "Transform your manuscript into a bestseller with our professional book publishing and marketing services. From editing to global distribution.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer /> {/* Add ToastContainer here */}
        {children}
      </body>
    </html>
  )
}
