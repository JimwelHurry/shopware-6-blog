import Link from "next/link"
import { Navbar } from "@/components/blog/navbar"
import { BlogCard } from "@/components/blog/blog-card"
import { CategoryFilter } from "@/components/blog/category-filter"
import { BLOG_POSTS } from "@/lib/blog-data"

export default function BlogListingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-screen-xl mx-auto space-y-16">
          <header className="space-y-6 max-w-2xl">
            <h1 className="text-5xl md:text-7xl leading-[1.1]">
              Das <span className="font-serif italic text-primary">Magazin</span> für Ihr Zuhause.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Entdecken Sie Profi-Tipps zur Reparatur, Pflege und Wartung Ihrer Haushaltsgeräte. Sparen Sie Geld und
              schonen Sie die Umwelt durch DIY-Reparaturen.
            </p>
          </header>

          <CategoryFilter />

          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {BLOG_POSTS.map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </section>

          <footer className="pt-20 border-t flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="max-w-xs space-y-4">
              <h2 className="text-3xl">Brauchen Sie Hilfe?</h2>
              <p className="text-sm text-muted-foreground">
                Unser Support-Team hilft Ihnen gerne dabei, das passende Ersatzteil für Ihr Gerät zu finden.
              </p>
            </div>
            <div className="flex gap-12 text-sm">
              <div className="space-y-4">
                <h4 className="font-bold uppercase tracking-widest text-[10px]">Informationen</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    <Link href="#" className="hover:text-primary">
                      Impressum
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-primary">
                      Datenschutz
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-primary">
                      AGB
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold uppercase tracking-widest text-[10px]">Folgen Sie uns</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    <Link href="#" className="hover:text-primary">
                      YouTube
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-primary">
                      Instagram
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-primary">
                      Facebook
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </div>
  )
}
