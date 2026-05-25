import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Clock, User, Calendar } from "lucide-react"
import { blogPosts, getBlogPost } from "@/lib/blog-data"
import CTABanner from "@/components/CTABanner"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) return { title: "Post Not Found" }
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      images: [{ url: post.featuredImage, width: 1200, height: 630 }],
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) notFound()

  return (
    <>
      {/* Hero */}
      <div className="relative pt-20 pb-0">
        <div className="relative h-[50vh] md:h-[60vh]">
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 gradient-hero" />
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-4xl mx-auto px-4 pb-12 w-full">
              <span className="inline-block bg-cmg-blue text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                {post.category}
              </span>
              <h1 className="font-heading text-3xl md:text-4xl font-bold text-white leading-tight">
                {post.title}
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Meta bar */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-cmg-slate mb-8 pb-8 border-b border-gray-100">
            <span className="flex items-center gap-1.5">
              <User className="h-4 w-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {new Date(post.publishedAt).toLocaleDateString("en-AU", { year: "numeric", month: "long", day: "numeric" })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </span>
          </div>

          {/* Article body */}
          <div className="prose prose-lg max-w-none text-cmg-text">
            {post.content.split("\n\n").map((block, i) => {
              if (block.startsWith("## ")) {
                return <h2 key={i} className="font-heading text-2xl font-semibold text-cmg-text mt-10 mb-4">{block.slice(3)}</h2>
              }
              if (block.startsWith("### ")) {
                return <h3 key={i} className="font-heading text-xl font-semibold text-cmg-text mt-8 mb-3">{block.slice(4)}</h3>
              }
              if (block.startsWith("1. ") || block.startsWith("2. ")) {
                const items = block.split("\n").filter(Boolean)
                return (
                  <ol key={i} className="list-decimal list-inside space-y-2 my-4 text-cmg-slate">
                    {items.map((item, j) => (
                      <li key={j} className="leading-relaxed">{item.replace(/^\d+\.\s/, "")}</li>
                    ))}
                  </ol>
                )
              }
              if (block.startsWith("- ")) {
                const items = block.split("\n").filter(Boolean)
                return (
                  <ul key={i} className="list-disc list-inside space-y-2 my-4 text-cmg-slate">
                    {items.map((item, j) => (
                      <li key={j} className="leading-relaxed">{item.slice(2)}</li>
                    ))}
                  </ul>
                )
              }
              return <p key={i} className="text-cmg-slate leading-relaxed mb-4">{block}</p>
            })}
          </div>

          {/* Back to blog */}
          <div className="mt-12 pt-8 border-t border-gray-100">
            <Link href="/resources" className="inline-flex items-center gap-2 text-cmg-blue font-semibold hover:gap-3 transition-all">
              <ArrowLeft className="h-4 w-4" />
              Back to all articles
            </Link>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="px-4 pb-12">
        <div className="max-w-4xl mx-auto bg-cmg-light-blue rounded-2xl p-5">
          <p className="text-xs text-cmg-slate">
            <strong>Disclaimer:</strong> This article provides general information only and does not constitute migration advice. Immigration law changes frequently. For advice tailored to your circumstances, please consult a registered migration agent.
          </p>
        </div>
      </div>

      <CTABanner
        headline="Have questions about your visa situation?"
        body="Book a free 30-minute consultation with a MARA-registered CMG agent — no obligation, no jargon."
        primaryCTA={{ label: "Book Free Consultation", href: "/contact" }}
        secondaryCTA={{ label: "Use Our Tools", href: "/tools" }}
        variant="navy-gold"
      />
    </>
  )
}
