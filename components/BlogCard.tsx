import Link from "next/link"
import Image from "next/image"
import { Clock, ArrowRight } from "lucide-react"
import type { BlogPost } from "@/lib/blog-data"
import { cn } from "@/lib/utils"

interface BlogCardProps {
  post: BlogPost
  featured?: boolean
}

const categoryStyles: Record<string, string> = {
  "Visa News": "bg-cmg-red text-white",
  "Skilled Migration": "bg-cmg-blue text-white",
  "Family Visas": "bg-purple-600 text-white",
  "Student": "bg-teal-600 text-white",
  "Business": "bg-cmg-navy text-white",
  "Tips & Guides": "bg-cmg-gold text-cmg-navy",
}

function getCategoryStyle(category: string) {
  return categoryStyles[category] ?? "bg-cmg-blue text-white"
}

function getAuthorInitials(name: string) {
  return name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase()
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  if (featured) {
    return (
      <Link
        href={`/resources/${post.slug}`}
        className="group block rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-card hover:shadow-hover transition-all duration-300"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[380px] overflow-hidden">
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
          <div className="p-8 lg:p-10 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <span className={cn("inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide", getCategoryStyle(post.category))}>
                {post.category}
              </span>
              <span className="text-xs text-cmg-slate">{formatDate(post.publishedAt)}</span>
            </div>
            <h2 className="font-heading text-2xl lg:text-3xl font-bold text-cmg-text mb-4 leading-snug group-hover:text-cmg-blue transition-colors">
              {post.title}
            </h2>
            <p className="text-cmg-slate leading-relaxed mb-6 line-clamp-3">{post.excerpt}</p>
            <div className="flex items-center justify-between mt-auto">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-cmg-blue flex items-center justify-center text-white text-xs font-bold shrink-0">
                  {getAuthorInitials(post.author)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-cmg-text">{post.author}</p>
                  <p className="text-xs text-cmg-slate flex items-center gap-1">
                    <Clock className="h-3 w-3" />{post.readTime}
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 text-sm font-bold text-cmg-blue group-hover:gap-2.5 transition-all">
                Read More <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link
      href={`/resources/${post.slug}`}
      className="group block rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-card hover:shadow-hover hover:-translate-y-1 transition-all duration-300 flex flex-col"
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={post.featuredImage}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-4 left-4">
          <span className={cn("inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide", getCategoryStyle(post.category))}>
            {post.category}
          </span>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <p className="text-xs text-cmg-slate mb-2">{formatDate(post.publishedAt)}</p>
        <h3 className="font-heading text-lg font-semibold text-cmg-text mb-3 line-clamp-2 group-hover:text-cmg-blue transition-colors flex-1">
          {post.title}
        </h3>
        <p className="text-cmg-slate text-sm leading-relaxed mb-5 line-clamp-2">{post.excerpt}</p>
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-cmg-blue flex items-center justify-center text-white text-[10px] font-bold shrink-0">
              {getAuthorInitials(post.author)}
            </div>
            <div>
              <p className="text-xs font-semibold text-cmg-text leading-none">{post.author}</p>
              <p className="text-[11px] text-cmg-slate flex items-center gap-1 mt-0.5">
                <Clock className="h-3 w-3" />{post.readTime}
              </p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1 text-xs font-bold text-cmg-blue group-hover:gap-1.5 transition-all">
            Read <ArrowRight className="h-3 w-3" />
          </span>
        </div>
      </div>
    </Link>
  )
}
