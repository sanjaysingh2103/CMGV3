import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "600", "700"],
})

export const metadata: Metadata = {
  title: {
    template: "%s | Commonwealth Migration Group",
    default: "Commonwealth Migration Group — Australian Immigration Experts",
  },
  description:
    "MARA-registered migration agents helping skilled workers, families & businesses migrate to Australia. Book a free consultation today.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://commonwealthmigration.com.au"
  ),
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: "Commonwealth Migration Group",
  },
  twitter: {
    card: "summary_large_image",
    site: "@CMGMigration",
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased min-h-screen flex flex-col bg-white text-cmg-text">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
