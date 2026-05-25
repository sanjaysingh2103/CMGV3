import type { Metadata } from "next"
import { Playfair_Display, DM_Sans, Cormorant_Garamond } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "600", "700", "900"],
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
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
    <html
      lang="en"
      className={`${dmSans.variable} ${playfair.variable} ${cormorant.variable}`}
    >
      <body className="font-body antialiased min-h-screen flex flex-col bg-cmg-cream text-cmg-ink">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
