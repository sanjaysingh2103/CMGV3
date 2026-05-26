import { ImageResponse } from "next/og"
import { NextRequest } from "next/server"

export const runtime = "edge"

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const title = (searchParams.get("title") || "Commonwealth Migration Group").slice(0, 80)
  const subtitle = (searchParams.get("subtitle") || "Australia Migration Simplified").slice(0, 120)
  const eyebrow = (searchParams.get("eyebrow") || "MARA-Authorised · Dubai-Based").slice(0, 60)

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          position: "relative",
          background: "linear-gradient(135deg, #001A5E 0%, #003399 55%, #001A5E 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Red light-leak top-right */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "640px",
            height: "480px",
            background: "radial-gradient(ellipse at top right, rgba(213,43,30,0.30) 0%, transparent 60%)",
          }}
        />
        {/* Subtle grid texture */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />

        {/* Top: Logo + brand */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px", position: "relative" }}>
          {/* Red square with hummingbird */}
          <div
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "16px",
              background: "#D52B1E",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 24px rgba(213,43,30,0.45)",
            }}
          >
            <svg viewBox="0 0 100 88" width="44" height="44" fill="white">
              <path d="M50 30 L96 6 L80 50 Z" />
              <path d="M6 48 C1 38 2 26 14 26 C20 26 24 22 32 24 L50 30 L80 50 C68 44 58 50 55 62 C52 74 58 82 68 83 L60 90 C42 90 26 80 20 66 C14 54 16 46 22 44 C16 44 10 48 6 48 Z" />
              <circle cx="13" cy="31" r="4" fill="rgba(255,255,255,0.9)" />
            </svg>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "44px", fontWeight: 800, color: "white", letterSpacing: "-1px", lineHeight: 1 }}>
              CMG
            </span>
            <span
              style={{
                fontSize: "14px",
                fontWeight: 700,
                color: "rgba(255,255,255,0.6)",
                letterSpacing: "3px",
                textTransform: "uppercase",
                marginTop: "4px",
              }}
            >
              Commonwealth Migration Group
            </span>
          </div>
        </div>

        {/* Middle: Title block */}
        <div style={{ display: "flex", flexDirection: "column", position: "relative", maxWidth: "1000px" }}>
          {/* Eyebrow with red bars */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
            <div style={{ width: "44px", height: "2px", background: "#D52B1E" }} />
            <span
              style={{
                fontSize: "16px",
                fontWeight: 700,
                color: "rgba(255,255,255,0.85)",
                letterSpacing: "3px",
                textTransform: "uppercase",
              }}
            >
              {eyebrow}
            </span>
          </div>
          {/* Headline */}
          <div
            style={{
              fontSize: title.length > 50 ? "64px" : "76px",
              fontWeight: 800,
              color: "white",
              lineHeight: 1.1,
              letterSpacing: "-2px",
              marginBottom: "16px",
            }}
          >
            {title}
          </div>
          {/* Subtitle */}
          <div
            style={{
              fontSize: "26px",
              fontWeight: 400,
              color: "rgba(255,255,255,0.72)",
              lineHeight: 1.4,
              maxWidth: "880px",
            }}
          >
            {subtitle}
          </div>
        </div>

        {/* Bottom: footer with site URL + trust pills */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "relative",
            borderTop: "1px solid rgba(255,255,255,0.12)",
            paddingTop: "28px",
          }}
        >
          <span style={{ fontSize: "20px", fontWeight: 600, color: "rgba(255,255,255,0.6)" }}>
            commonwealthmigration.ae
          </span>
          <div style={{ display: "flex", gap: "12px" }}>
            {["MARA-Authorised", "Dubai-Based", "97% Approval"].map((t) => (
              <div
                key={t}
                style={{
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.85)",
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.18)",
                  borderRadius: "999px",
                  padding: "8px 18px",
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                }}
              >
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
