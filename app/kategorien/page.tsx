import Link from "next/link"
import { Navbar } from "@/components/blog/navbar"
import { ArrowRight, WashingMachine, Utensils, Coffee, Thermometer, Wind, MonitorSmartphone } from "lucide-react"

const CATEGORIES = [
  {
    name: "Waschmaschine",
    count: "12.450 Teile",
    icon: WashingMachine,
    slug: "waschmaschine",
    popular: ["Türmanschetten", "Kohlebürsten", "Heizelemente"]
  },
  {
    name: "Geschirrspüler",
    count: "8.320 Teile",
    icon: Utensils, // Using Utensils as a proxy for Dishwasher if Dishwasher icon isn't available, but lucide has generic ones
    slug: "geschirrspueler",
    popular: ["Körbe", "Sprüharme", "Dichtungen"]
  },
  {
    name: "Kühlschrank",
    count: "6.100 Teile",
    icon: Thermometer, // Thermometer for fridge/cooling
    slug: "kuehlschrank",
    popular: ["Thermostate", "Türfächer", "Gemüseschubladen"]
  },
  {
    name: "Kaffeevollautomat",
    count: "4.200 Teile",
    icon: Coffee,
    slug: "kaffeevollautomat",
    popular: ["Brüheinheiten", "Dichtungs-Sets", "Milchschläuche"]
  },
  {
    name: "Wäschetrockner",
    count: "5.800 Teile",
    icon: Wind, // Wind for dryer
    slug: "waeschetrockner",
    popular: ["Filter", "Riemen", "Spannrollen"]
  },
  {
    name: "Herd & Backofen",
    count: "9.150 Teile",
    icon: MonitorSmartphone, // Using MonitorSmartphone as a generic appliance placeholder if needed, or maybe just a square
    slug: "herd-backofen",
    popular: ["Backbleche", "Heizungen", "Knöpfe"]
  }
]

export default function KategorienPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-screen-xl mx-auto space-y-12">
          <header className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Ersatzteile nach Kategorie
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Wählen Sie Ihr Gerät aus, um passende Ersatzteile zu finden. Wir führen Teile für alle gängigen Marken und Modelle.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORIES.map((category) => {
              const Icon = category.icon
              return (
                <Link 
                  key={category.slug} 
                  href={`#`} 
                  className="group block p-8 rounded-2xl bg-card border hover:shadow-lg hover:border-primary/50 transition-all"
                >
                  <div className="space-y-6">
                    <div className="flex items-start justify-between">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Icon className="w-7 h-7" />
                      </div>
                      <span className="text-xs font-semibold text-muted-foreground bg-secondary px-2 py-1 rounded">
                        {category.count}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                        {category.name}
                      </h3>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {category.popular.map((item) => (
                          <span key={item} className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded group-hover:bg-background transition-colors">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center text-sm font-semibold text-primary pt-4 group-hover:translate-x-2 transition-transform">
                      Jetzt stöbern <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
             <div className="bg-primary/5 rounded-3xl p-8 md:p-12 space-y-6">
                <h3 className="text-3xl font-bold">Hersteller-Suche</h3>
                <p className="text-muted-foreground">
                  Suchen Sie Ersatzteile direkt nach Hersteller? Wir führen Original-Teile von Bosch, Siemens, Miele, AEG und vielen mehr.
                </p>
                <button className="bg-background text-foreground font-semibold px-6 py-3 rounded-full border hover:bg-accent transition-colors">
                  Alle Marken anzeigen
                </button>
             </div>
             <div className="bg-primary text-primary-foreground rounded-3xl p-8 md:p-12 space-y-6">
                <h3 className="text-3xl font-bold">Hilfe bei der Suche?</h3>
                <p className="text-primary-foreground/80">
                  Sie sind sich unsicher, welches Teil passt? Unser Support-Team hilft Ihnen gerne weiter. Halten Sie dazu bitte das Typenschild bereit.
                </p>
                <button className="bg-white text-primary font-semibold px-6 py-3 rounded-full hover:bg-white/90 transition-colors">
                  Kontakt aufnehmen
                </button>
             </div>
          </div>
        </div>
      </main>
    </div>
  )
}
