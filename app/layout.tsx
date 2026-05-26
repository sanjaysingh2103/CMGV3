import type { Metadata } from "next"
import { Figtree, Libre_Baskerville } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import ChatBot from "@/components/ChatBot"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

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
    default: "Commonwealth Migration Group — Dubai-Based Australia Migration Agents",
  },
  description:
    "MARA-authorised Australia migration consultancy based in Dubai. Supporting skilled professionals, families & students across the GCC. Book a free consultation today.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://commonwealthmigration.ae"
  ),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Commonwealth Migration Group",
    images: [
      {
        url: "/api/og?title=Commonwealth+Migration+Group&subtitle=Australia+Migration+Simplified&eyebrow=MARA-Authorised+%C2%B7+Dubai-Based",
        width: 1200,
        height: 630,
        alt: "Commonwealth Migration Group — Australia Migration Simplified",
      },
    ],
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
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
