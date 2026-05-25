import Link from "next/link"
import Image from "next/image"
import { Clock, User, ArrowRight } from "lucide-react"
import type { BlogPost } from "@/lib/blog-data"

interface BlogCardProps {
  post: BlogPost
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      href={`/resources/${post.slug}`}
      className="group block rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-card hover:shadow-hover hover:scale-[1.01] transition-all duration-300"
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
          <span className="inline-block px-3 py-1 rounded-full bg-cmg-blue text-white text-xs font-semibold">
            {post.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-heading text-lg font-semibold text-cmg-text mb-3 line-clamp-2 group-hover:text-cmg-blue transition-colors">
          {post.title}
        </h3>
        <p className="text-cmg-slate text-sm leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
        <div className="flex items-center justify-between text-xs text-cmg-slate">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <User className="h-3 w-3" />
              {post.author}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {post.readTime}
            </span>
          </div>
          <span className="flex items-center gap-1 text-cmg-blue font-semibold group-hover:gap-2 transition-all">
            Read <ArrowRight className="h-3 w-3" />
          </span>
        </div>
      </div>
    </Link>
  )
}
