import type { Metadata } from "next"
import Image from "next/image"
import { Navbar } from "@/components/blog/navbar"
import { Footer } from "@/components/blog/footer"
import { ArrowLeft, Clock, User, MessageCircle, Share2 } from "lucide-react"
import Link from "next/link"
import { ProductCard } from "@/components/blog/product-card"
import { BLOG_POSTS } from "@/lib/blog-data"
import { notFound } from "next/navigation"

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = BLOG_POSTS.find((p) => p.slug === slug)

  if (!post) {
    return {
      title: "Artikel nicht gefunden | Ersatzteilshop Magazin",
    }
  }

  return {
    title: `${post.title} | Ersatzteilshop Magazin`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = BLOG_POSTS.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 container mx-auto px-4 py-12">
        <article className="max-w-3xl mx-auto space-y-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-4 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Zurück zur Übersicht
          </Link>

          <header className="space-y-6">
            <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-widest text-primary">
              <span className="bg-primary/10 px-2 py-1 rounded">{post.category}</span>
              <span>{post.date}</span>
            </div>
            <h1 className="text-4xl md:text-6xl leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground pt-4 border-t border-b py-6">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" /> Von {post.author}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" /> {post.readTime} Lesezeit
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4" /> 4 Kommentare
              </div>
            </div>
          </header>

          <div className="relative aspect-video rounded-2xl overflow-hidden bg-muted">
            <Image src={post.image} alt={post.title} fill className="object-cover" />
          </div>

          <div
            className="prose prose-lg max-w-none prose-primary space-y-8"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="my-16 space-y-8 border-y py-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="space-y-2">
                <h3 className="text-3xl font-serif italic text-primary">Passende Ersatzteile</h3>
                <p className="text-sm text-muted-foreground">
                  Finden Sie die richtigen Komponenten für Ihre Reparatur.
                </p>
              </div>
              <Link href="#" className="text-xs font-bold uppercase tracking-widest text-primary hover:underline">
                Alle Ersatzteile ansehen
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <ProductCard
                name="Universelles Flusensieb für Wärmepumpentrockner"
                price="24,90 €"
                image="/dryer-part-1.png"
                rating={5}
              />
              <ProductCard
                name="Heizelement für Kondenstrockner 2500W"
                price="49,50 €"
                image="/dryer-part-2.png"
                rating={4}
              />
            </div>
          </div>

          <section className="pt-16 border-t space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-serif">Kommentare</h2>
              <button className="text-sm font-semibold flex items-center gap-2 hover:text-primary transition-colors">
                <Share2 className="w-4 h-4" /> Artikel teilen
              </button>
            </div>

            <div className="space-y-6">
              {[1, 2].map((i) => (
                <div key={i} className="flex gap-4 p-6 rounded-2xl bg-muted/30 border border-border">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    U
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-sm">User_{i}23</span>
                      <span className="text-xs text-muted-foreground">Vor 2 Tagen</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Vielen Dank für die Tipps! Bei mir war tatsächlich nur das Flusensieb komplett zu. Jetzt läuft er
                      wieder wie am ersten Tag.
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <form className="space-y-4 pt-4">
              <h4 className="font-semibold">Schreiben Sie einen Kommentar</h4>
              <textarea
                className="w-full min-h-[120px] p-4 rounded-xl border border-border focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                placeholder="Ihre Nachricht..."
              />
              <button className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-all">
                Abschicken
              </button>
            </form>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  )
}
