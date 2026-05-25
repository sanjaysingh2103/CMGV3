"use client"

import { useState } from "react"
import HeroBanner from "@/components/HeroBanner"
import BlogCard from "@/components/BlogCard"
import { blogPosts, blogCategories } from "@/lib/blog-data"
import { cn } from "@/lib/utils"

const categoryAccents: Record<string, string> = {
  "All": "bg-cmg-blue text-white border-cmg-blue",
  "Visa News": "bg-cmg-red text-white border-cmg-red",
  "Skilled Migration": "bg-cmg-blue text-white border-cmg-blue",
  "Family Visas": "bg-purple-600 text-white border-purple-600",
  "Student": "bg-teal-600 text-white border-teal-600",
  "Business": "bg-cmg-navy text-white border-cmg-navy",
  "Tips & Guides": "bg-cmg-gold text-cmg-navy border-cmg-gold",
}

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const featured = blogPosts[0]
  const filtered = activeCategory === "All"
    ? blogPosts.slice(1)
    : blogPosts.filter((p) => p.category === activeCategory)

  const showFeatured = activeCategory === "All"

  return (
    <>
      <HeroBanner
        headline="Australian Immigration Insights"
        subheadline="Expert articles, visa updates and migration guides from CMG's MARA-registered agents — helping you stay informed and make confident decisions."
        bgImage="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80"
        gradient="gradient-hero"
        height="medium"
        ctaButtons={[
          { label: "Book Free Consultation", href: "/contact", variant: "primary" },
        ]}
      />

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {blogCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-5 py-2 rounded-full border text-sm font-semibold transition-all duration-200",
                  activeCategory === cat
                    ? (categoryAccents[cat] ?? "bg-cmg-blue text-white border-cmg-blue")
                    : "border-gray-200 text-cmg-slate hover:border-cmg-blue/40 hover:text-cmg-blue bg-white"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          {showFeatured && (
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-[11px] font-bold uppercase tracking-widest text-cmg-red">Featured</span>
                <div className="flex-1 h-px bg-gray-100" />
              </div>
              <BlogCard post={featured} featured />
            </div>
          )}

          {/* Grid */}
          {filtered.length > 0 ? (
            <>
              {showFeatured && (
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-cmg-slate">Latest Articles</span>
                  <div className="flex-1 h-px bg-gray-100" />
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                {filtered.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <p className="text-cmg-slate text-lg">No articles in this category yet.</p>
              <button
                onClick={() => setActiveCategory("All")}
                className="mt-4 text-cmg-blue font-semibold hover:underline"
              >
                View all articles →
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="py-16 px-4 bg-cmg-light-blue">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[11px] font-bold uppercase tracking-widest text-cmg-red mb-3">Stay Informed</p>
          <h2 className="font-heading text-3xl font-bold text-cmg-text mb-4">
            Never Miss an Immigration Update
          </h2>
          <p className="text-cmg-slate mb-8 max-w-xl mx-auto">
            Australian visa rules change frequently. Book a free consultation and we&apos;ll keep you informed on the changes that matter to your application.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-cmg-blue text-white font-semibold px-8 py-4 text-sm hover:bg-cmg-navy transition-colors shadow-md"
          >
            Book a Free Consultation →
          </a>
        </div>
      </section>
    </>
  )
}
