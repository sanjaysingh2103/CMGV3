import type { Metadata } from "next"
import HeroBanner from "@/components/HeroBanner"
import BlogCard from "@/components/BlogCard"
import { blogPosts, blogCategories } from "@/lib/blog-data"

export const metadata: Metadata = {
  title: "Australian Immigration Blog & Guides — CMG",
  description:
    "Expert articles, visa news, and migration guides from CMG's MARA-registered agents. Stay informed on Australian immigration updates.",
}

export default function ResourcesPage() {
  return (
    <>
      <HeroBanner
        headline="Australian Immigration Insights"
        subheadline="Expert articles, visa updates, and migration guides from CMG's registered agents."
        bgImage="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920"
        gradient="gradient-blue-red"
        height="medium"
      />

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Category filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {blogCategories.map((cat) => (
              <a
                key={cat}
                href={cat === "All" ? "/resources" : `/resources?category=${encodeURIComponent(cat)}`}
                className="px-4 py-2 rounded-full border border-cmg-blue/20 text-sm font-medium text-cmg-text hover:bg-cmg-blue hover:text-white hover:border-cmg-blue transition-all"
              >
                {cat}
              </a>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
