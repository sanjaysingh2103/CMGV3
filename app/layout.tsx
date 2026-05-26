import type { Metadata } from "next"
import { Figtree, Libre_Baskerville } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import ChatBot from "@/components/ChatBot"

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
})

const baskerville = Libre_Baskerville({
  subsets: ["latin"],
  variable: "--font-baskerville",
  display: "swap",
  weight: ["400", "700"],
  style: ["normal", "italic"],
})

export const metadata: Metadata = {
  title: {
    template: "%s | Commonwealth Migration Group",
    default: "Commonwealth Migration Group — MARA-Registered Australian Migration Agents",
  },
  description:
    "Expert MARA-registered migration agents helping skilled workers, families, and businesses achieve their Australian visa goals. 97% approval rate. Book a free consultation today.",
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
    <html lang="en" className={`${figtree.variable} ${baskerville.variable}`}>
      <body className="font-body antialiased min-h-screen flex flex-col bg-white text-cmg-text">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <ChatBot />
      </body>
    </html>
  )
}
