import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

interface BlogCardProps {
  title: string
  excerpt: string
  date: string
  category: string
  image: string
  slug: string
}

export function BlogCard({ title, excerpt, date, category, image, slug }: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="group block">
      <article className="space-y-4">
        <div className="relative aspect-video overflow-hidden rounded-lg bg-muted">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3">
            <span className="bg-background/90 backdrop-blur px-2 py-1 text-[10px] uppercase tracking-wider font-semibold rounded">
              {category}
            </span>
          </div>
        </div>
        <div className="space-y-2">
          <time className="text-xs text-muted-foreground uppercase tracking-widest">{date}</time>
          <h3 className="text-2xl leading-tight group-hover:text-primary transition-colors">{title}</h3>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-relaxed">{excerpt}</p>
          <div className="flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-wider pt-2 group-hover:gap-4 transition-all">
            Weiterlesen <ArrowRight className="w-3 h-3" />
          </div>
        </div>
      </article>
    </Link>
  )
}
