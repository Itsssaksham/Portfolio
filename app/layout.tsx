import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Saksham Gupta - Software Developer | Python, C++, AI Automation",
  description:
    "Final-year CSE student specializing in Data Structures, Algorithms, Python development, and AI automation. View my portfolio of projects including finance dashboards, AI tools, and compression utilities.",
  keywords: [
    "Saksham Gupta",
    "Software Developer",
    "Computer Science",
    "Python Developer",
    "C++ Developer",
    "Data Structures",
    "Algorithms",
    "AI Automation",
    "Full Stack Developer",
    "Chitkara University",
  ],
  authors: [{ name: "Saksham Gupta" }],
  creator: "Saksham Gupta",
  publisher: "Saksham Gupta",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sakshamgupta.dev",
    title: "Saksham Gupta - Software Developer Portfolio",
    description:
      "Final-year CSE student specializing in Data Structures, Algorithms, Python development, and AI automation.",
    siteName: "Saksham Gupta Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saksham Gupta - Software Developer Portfolio",
    description:
      "Final-year CSE student specializing in Data Structures, Algorithms, Python development, and AI automation.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
