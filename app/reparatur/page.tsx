import Link from "next/link"
import { Navbar } from "@/components/blog/navbar"
import { ArrowRight, Wrench, PlayCircle, BookOpen } from "lucide-react"

const REPAIR_GUIDES = [
  {
    title: "Waschmaschine pumpt nicht ab",
    description: "Schritt-für-Schritt Anleitung zur Überprüfung der Ablaufpumpe und des Flusensiebs.",
    category: "Waschmaschine",
    difficulty: "Mittel",
    duration: "30 Min",
    slug: "waschmaschine-pumpt-nicht"
  },
  {
    title: "Backofen heizt nicht mehr",
    description: "Diagnose und Austausch von Heizelementen bei Ober-/Unterhitze und Umluft.",
    category: "Herd & Backofen",
    difficulty: "Schwer",
    duration: "45 Min",
    slug: "backofen-heizt-nicht"
  },
  {
    title: "Kühlschrank kühlt nicht richtig",
    description: "So prüfen Sie Thermostat und Dichtungen bei Ihrem Kühlgerät.",
    category: "Kühlschrank",
    difficulty: "Leicht",
    duration: "15 Min",
    slug: "kuehlschrank-kuehlt-nicht"
  },
  {
    title: "Geschirrspüler reinigt nicht sauber",
    description: "Reinigung der Sprüharme und Überprüfung des Zulaufs.",
    category: "Geschirrspüler",
    difficulty: "Leicht",
    duration: "20 Min",
    slug: "geschirrspueler-reinigt-nicht"
  },
  {
    title: "Trockner quietscht",
    description: "Austausch von Lager und Riemen bei lauten Geräuschen.",
    category: "Wäschetrockner",
    difficulty: "Schwer",
    duration: "60 Min",
    slug: "trockner-quietscht"
  },
  {
    title: "Kaffeemaschine entkalken",
    description: "Die richtige Pflege für lange Lebensdauer Ihres Vollautomaten.",
    category: "Kaffeemaschine",
    difficulty: "Leicht",
    duration: "25 Min",
    slug: "kaffeemaschine-entkalken"
  }
]

export default function ReparaturPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          <header className="space-y-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Reparatur-Anleitungen
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Reparieren Sie Ihre Geräte selbst! Mit unseren detaillierten Anleitungen sparen Sie Geld und schonen die Umwelt.
            </p>
          </header>

          <div className="grid gap-6">
            {REPAIR_GUIDES.map((guide) => (
              <div key={guide.slug} className="group relative bg-card border rounded-xl p-6 hover:shadow-lg transition-all hover:border-primary/50">
                <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Wrench className="w-6 h-6" />
                  </div>
                  
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      <span className="text-primary">{guide.category}</span>
                      <span>•</span>
                      <span>{guide.difficulty}</span>
                      <span>•</span>
                      <span>{guide.duration}</span>
                    </div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {guide.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {guide.description}
                    </p>
                  </div>

                  <div className="flex gap-2 shrink-0 w-full md:w-auto mt-4 md:mt-0">
                    <button className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 font-medium text-sm transition-colors">
                      <PlayCircle className="w-4 h-4" /> Video
                    </button>
                    <button className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 font-medium text-sm transition-colors">
                      <BookOpen className="w-4 h-4" /> Anleitung
                    </button>
                  </div>
                </div>
                <Link href={`/blog/${guide.slug}`} className="absolute inset-0">
                  <span className="sr-only">Anleitung ansehen</span>
                </Link>
              </div>
            ))}
          </div>

          <div className="bg-muted rounded-2xl p-8 text-center space-y-6">
            <h3 className="text-2xl font-bold">Nicht das Richtige gefunden?</h3>
            <p className="text-muted-foreground">
              In unserem Magazin finden Sie viele weitere Tipps & Tricks rund um Haushalt und Reparatur.
            </p>
            <Link 
              href="/blog" 
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all"
            >
              Zum Magazin <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
