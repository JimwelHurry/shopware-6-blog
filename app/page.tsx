import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/blog/navbar"
import { Footer } from "@/components/blog/footer"
import { ArrowRight, Wrench, Search, ShieldCheck } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary/5 py-20 md:py-32">
          <div className="container mx-auto px-4 text-center space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">
              Ersatzteile für <span className="text-primary">jedes Gerät</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Finden Sie das passende Ersatzteil für Waschmaschine, Trockner, Herd & Co.
              Über 2 Millionen Teile sofort lieferbar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                href="/kategorien"
                className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all"
              >
                Ersatzteil suchen <Search className="w-4 h-4 ml-2" />
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-white border border-input hover:bg-accent hover:text-accent-foreground font-semibold transition-all"
              >
                Zum Magazin
              </Link>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-white border-y">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4 p-6">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">Einfache Suche</h3>
              <p className="text-muted-foreground">Finden Sie Ihr Teil mit der Typennummer.</p>
            </div>
            <div className="space-y-4 p-6">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">Reparaturanleitungen</h3>
              <p className="text-muted-foreground">Schritt-für-Schritt Anleitungen im Magazin.</p>
            </div>
            <div className="space-y-4 p-6">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">Schnelle Lieferung</h3>
              <p className="text-muted-foreground">Bestellt bis 14 Uhr, heute versendet.</p>
            </div>
          </div>
        </section>

        {/* Magazine Teaser */}
        <section className="py-20 container mx-auto px-4 space-y-12">
          <div className="flex justify-between items-end">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold">Neues aus dem Magazin</h2>
              <p className="text-muted-foreground text-lg">Tipps, Tricks und Anleitungen für Ihre Geräte.</p>
            </div>
            <Link href="/blog" className="hidden md:flex items-center gap-2 text-primary font-semibold hover:underline">
              Alle Artikel ansehen <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <Link href="/blog/trockner-trocknet-nicht" className="group space-y-4">
                <div className="aspect-video bg-muted rounded-xl overflow-hidden relative">
                   <Image src="/dryer-repair.png" alt="Trockner" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="space-y-2">
                  <div className="text-xs font-bold text-primary uppercase">Wäschetrockner</div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">Trockner trocknet nicht? Ursachen & Lösungen</h3>
                </div>
             </Link>
             <Link href="/blog/ersatzteil-herd-finden" className="group space-y-4">
                <div className="aspect-video bg-muted rounded-xl overflow-hidden relative">
                   <Image src="/stove-type-plate.jpg" alt="Herd" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="space-y-2">
                  <div className="text-xs font-bold text-primary uppercase">Küche</div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">So finden Sie das passende Ersatzteil für Ihren Herd</h3>
                </div>
             </Link>
             <Link href="/blog/geschirrspueler-pumpt-nicht-ab" className="group space-y-4">
                <div className="aspect-video bg-muted rounded-xl overflow-hidden relative">
                   <Image src="/dishwasher-repair.png" alt="Spülmaschine" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="space-y-2">
                  <div className="text-xs font-bold text-primary uppercase">Geschirrspüler</div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">Geschirrspüler pumpt nicht ab: 5 schnelle Tipps</h3>
                </div>
             </Link>
          </div>

          <div className="md:hidden text-center pt-8">
            <Link href="/blog" className="inline-flex items-center gap-2 text-primary font-semibold">
              Alle Artikel ansehen <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-muted py-12 mt-12">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 Ersatzteilshop Demo. Built for Shopware 6 Skill Test.</p>
        </div>
      </footer>
    </div>
  )
}
