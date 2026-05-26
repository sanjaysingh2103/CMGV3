import { site } from "@/lib/site"

const SITE_URL = "https://commonwealthmigration.ae"

/* ─────────────────────────────────────────────────────────────────────────
   Organisation (homepage)
   ───────────────────────────────────────────────────────────────────────── */
export const organisationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  alternateName: site.shortName,
  url: SITE_URL,
  logo: `${SITE_URL}/api/og?title=CMG&subtitle=${encodeURIComponent(site.tagline)}`,
  description: site.description,
  email: site.email,
  telephone: site.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "306 Golden Gate, Next to Lamcy Plaza",
    addressLocality: "Oud Metha, Dubai",
    addressCountry: "AE",
  },
  sameAs: [
    site.social.linkedin,
    site.social.facebook,
    site.social.instagram,
    site.social.youtube,
  ],
  areaServed: [
    { "@type": "Country", name: "United Arab Emirates" },
    { "@type": "Country", name: "Saudi Arabia" },
    { "@type": "Country", name: "India" },
    { "@type": "Country", name: "Pakistan" },
    { "@type": "Country", name: "Philippines" },
    { "@type": "Country", name: "Egypt" },
  ],
}

/* ─────────────────────────────────────────────────────────────────────────
   LocalBusiness (contact page, About page)
   ───────────────────────────────────────────────────────────────────────── */
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  image: `${SITE_URL}/api/og?title=Contact+CMG`,
  url: SITE_URL,
  email: site.email,
  telephone: site.phone,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "306 Golden Gate, Next to Lamcy Plaza",
    addressLocality: "Oud Metha",
    addressRegion: "Dubai",
    addressCountry: "AE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 25.2354,
    longitude: 55.3094,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "10:00",
      closes: "19:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "127",
    bestRating: "5",
    worstRating: "1",
  },
}

/* ─────────────────────────────────────────────────────────────────────────
   BreadcrumbList — call with the path segments to get a schema object
   ───────────────────────────────────────────────────────────────────────── */
export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.href}`,
    })),
  }
}

/* ─────────────────────────────────────────────────────────────────────────
   Service schema — for each visa offering
   ───────────────────────────────────────────────────────────────────────── */
export function serviceSchema(params: {
  name: string
  description: string
  serviceType: string
  url: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: params.name,
    description: params.description,
    serviceType: params.serviceType,
    url: `${SITE_URL}${params.url}`,
    provider: {
      "@type": "Organization",
      name: site.name,
      url: SITE_URL,
    },
    areaServed: {
      "@type": "Country",
      name: "Australia",
    },
    audience: {
      "@type": "Audience",
      geographicArea: {
        "@type": "AdministrativeArea",
        name: "Gulf Cooperation Council",
      },
    },
  }
}

/* ─────────────────────────────────────────────────────────────────────────
   Article schema — for blog posts
   ───────────────────────────────────────────────────────────────────────── */
export function articleSchema(params: {
  title: string
  description: string
  author: string
  publishedDate: string
  image: string
  url: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: params.title,
    description: params.description,
    image: params.image,
    datePublished: params.publishedDate,
    author: {
      "@type": "Organization",
      name: params.author || site.name,
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/api/og?title=CMG`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}${params.url}`,
    },
  }
}
