"use client"

import dynamic from "next/dynamic"

/**
 * Bundles all the heavy interactive components (ChatBot + StickyMobileCTA)
 * behind a single dynamic boundary so they load AFTER initial paint.
 *
 * Why this matters:
 *  - ChatBot pulls in framer-motion (~130 kB) via the rest of the app
 *  - StickyMobileCTA depends on usePathname (App Router runtime)
 *  - Together they're ~30-40 kB extra JS that doesn't need to block first paint
 *  - ssr: false skips the SSR work for these (they're idle/interactive UI only)
 */

const ChatBot = dynamic(() => import("@/components/ChatBot"), {
  ssr: false,
  loading: () => null,
})

const StickyMobileCTA = dynamic(() => import("@/components/StickyMobileCTA"), {
  ssr: false,
  loading: () => null,
})

export default function FloatingActions() {
  return (
    <>
      <StickyMobileCTA />
      <ChatBot />
    </>
  )
}
