import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

/**
 * Official CMG logo component - uses the vector SVG at /public/logo/cmg-logo.svg
 * which was generated from the client-supplied PDF asset.
 *
 * Variants:
 *  - 'full'     : CMG + bird + "IMMIGRATION SIMPLIFIED" tagline (for footer / brand moments)
 *  - 'wordmark' : CMG + bird (no tagline) - default, used in navbar
 *  - 'mark'     : just the bird (for tight spaces like the chat avatar)
 *
 * On dark backgrounds, set `theme="light"` to render in white via CSS filter.
 */

interface CMGLogoProps {
  variant?: "full" | "wordmark" | "mark"
  theme?: "color" | "light"
  /** Visible height in pixels - width auto-scales to preserve aspect ratio */
  height?: number
  href?: string | null
  className?: string
  priority?: boolean
}

const SIZES: Record<NonNullable<CMGLogoProps["variant"]>, { w: number; h: number; alt: string }> = {
  full:     { w: 200, h: 100, alt: "Commonwealth Migration Group - Immigration Simplified" },
  wordmark: { w: 200, h: 80,  alt: "Commonwealth Migration Group" },
  mark:     { w: 80,  h: 80,  alt: "CMG" },
}

export default function CMGLogo({
  variant = "wordmark",
  theme = "color",
  height = 44,
  href = "/",
  className,
  priority = false,
}: CMGLogoProps) {
  const dims = SIZES[variant]
  const width = Math.round((dims.w / dims.h) * height)

  /* CSS filter to invert the color SVG to pure white for dark backgrounds */
  const filterStyle = theme === "light"
    ? { filter: "brightness(0) invert(1)" }
    : undefined

  /* Tight crop boxes (in viewBox coords) so we can show just the wordmark or just the bird */
  const wrapClass = cn(
    "inline-block shrink-0",
    variant === "wordmark" && "overflow-hidden",
    variant === "mark" && "overflow-hidden",
    className,
  )

  /* The full SVG is 1080x1080 (square) - we use object-position + scale to crop:
     - wordmark: top 60% of the image (clips off tagline)
     - mark: clip to the bird in the top-right area
     - full: show everything
  */
  const cropStyle: React.CSSProperties =
    variant === "full"
      ? {}
      : variant === "wordmark"
        ? {
            // Show the top portion (CMG + bird, hide the tagline at bottom)
            objectPosition: "center top",
            objectFit: "contain",
          }
        : {
            // Show just the bird (top-right quadrant of the SVG)
            objectPosition: "75% 25%",
            objectFit: "none",
          }

  const inner = (
    <span
      className={wrapClass}
      style={{
        height,
        width,
        ...filterStyle,
      }}
    >
      <Image
        src="/logo/cmg-logo.svg"
        alt={dims.alt}
        width={dims.w}
        height={dims.h}
        priority={priority}
        unoptimized /* SVGs don't need next/image optimization */
        style={{
          width: "100%",
          height: "100%",
          ...cropStyle,
        }}
      />
    </span>
  )

  if (href) {
    return (
      <Link href={href} aria-label="Commonwealth Migration Group home" className="inline-flex">
        {inner}
      </Link>
    )
  }
  return inner
}
